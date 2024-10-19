<script>
    import { supabase } from "./supabase.js";
    import Leaderboard from "./routes/leaderboard.svelte";
    let user = null;
    let sessionId = null;
    let loading = true;

    // Function to sign in using GitHub
    const signInWithGitHub = async () => {
        console.log("Attempting GitHub login...");
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: "github",
            });
            if (error) {
                console.error("Login error:", error.message);
            } else {
                console.log("Redirecting to GitHub for login...");
            }
        } catch (err) {
            console.error("Error during sign-in:", err);
        }
    };

    // Listen for authentication state changes
    supabase.auth.onAuthStateChange(async (event, session) => {
        console.log("Auth state change triggered");
        try {
            if (session) {
                user = session.user;
                console.log("User after auth state change:", user);

                // Fetch the user from the 'users' table
                const { data: existingUser, error: fetchError } = await supabase
                    .from("users")
                    .select("session_id")
                    .eq("github_id", user.id)
                    .maybeSingle();

                if (fetchError) {
                    console.error(
                        "Error fetching user from Supabase:",
                        fetchError.message,
                    );
                } else if (existingUser) {
                    sessionId = existingUser.session_id;
                    console.log(
                        "User found in database, session ID:",
                        sessionId,
                    );
                } else {
                    console.log("User not found, inserting new user...");

                    // Insert new user into 'users' table
                    const { data: newUser, error: insertError } = await supabase
                        .from("users")
                        .insert([{ github_id: user.id, email: user.email }])
                        .select("session_id")
                        .single();

                    if (insertError) {
                        console.error(
                            "Error inserting new user into Supabase:",
                            insertError.message,
                        );
                    } else {
                        sessionId = newUser.session_id;
                        console.log(
                            "New user inserted, session ID:",
                            sessionId,
                        );
                    }
                }
            } else {
                console.log("User is signed out");
                user = null;
                sessionId = null;
            }
        } catch (err) {
            console.error("Error during auth state handling:", err);
        } finally {
            loading = false; // Stop the loading state after auth state is handled
        }
    });

    const handleSignOut = async () => {
        try {
            await supabase.auth.signOut();
            console.log("User signed out.");
        } catch (err) {
            console.error("Error signing out:", err);
        }
    };
</script>

<main>
    {#if loading}
        <p>Loading...</p>
    {:else if user}
        <p>Welcome, {user.email}!</p>
        <p>
            Your Session ID: <strong
                >{sessionId ? sessionId : "Session ID not found"}</strong
            >
        </p>

        <button on:click={handleSignOut}>Sign Out</button>
    {:else}
        <button on:click={signInWithGitHub}>Sign in with GitHub</button>
    {/if}
    <Leaderboard />
</main>

<style>
    main {
        text-align: center;
        padding: 2rem;
    }

    button {
        padding: 0.5rem 1rem;
        font-size: 1rem;
        cursor: pointer;
    }
</style>
