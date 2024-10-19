<script>
    console.log("Leadeboard");
    import LeaderboardTable from "../components/LeaderboardTable.svelte";
</script>

<main>
    <div class="nav">
        <h1>$ curl NerdSync.in</h1>
        <div class="nav-links">
            <button>Weakly</button>
            <button>Monthly</button>
            <button>Yearly</button>
        </div>
        <div class="nav-actions">
            <button class="action-config">Config</button>
            <button class="action-copy">Copy Session ID</button>
            <div class="avatar">GG</div>
        </div>
    </div>
    <LeaderboardTable />
</main>

<style>
    main {
        padding: 20px;
    }

    .nav {
        display: flex;
        justify-content: space-between; /* This places nav-actions on the right */
        align-items: center; /* Vertically aligns the items */
        padding: 1rem; /* Optional: Add padding for better spacing */
    }

    h1 {
        text-align: left;
        font-size: 2.2rem;
        margin-bottom: 20px;
        display: inline;
    }

    button {
        padding: 1rem;
    }

    .nav-links button {
        display: inline;
        font-size: 1.2rem;
        margin: 20px;
        opacity: 60%;
        background: #FFFFFF;
        border: none
    }

    .nav-links button:focus {
        border: 1.5px solid #FFAFCC
    }

    .nav-links {
        display: flex;
        gap: 1rem; /* Spacing between the buttons in nav-links */
    }

    .nav-actions {
        display: flex;
        align-items: center; /* Ensures all elements in nav-actions are vertically aligned */
        gap: 1rem; /* Spacing between the buttons and avatar */
    }

    .nav-actions button {
        font-size: 1.2rem;
        border-radius: 5px;
    }

    .action-config {
        background: #F2B5D4;
        border: 1px solid #000000
    }

    .action-copy {
        background: #FFFFFF;
        border: 1px solid #FFAFCC
    }

    .nav-actions .avatar {
        width: 40px;
        height: 40px;
        background-color: #ccc;
        border-radius: 50%; /* Makes the avatar a circle */
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
    }

</style>
