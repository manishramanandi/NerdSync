<script>
    console.log("Leadeboard");
    import LeaderboardTable from "../components/LeaderboardTable.svelte";
</script>

<main>
    <h1>$ curl NerdSync.in</h1>
    <h4>Weakly</h4>
    <h4>Monthly</h4>
    <h4>Yearly</h4>

    <LeaderboardTable />
</main>

<style>
    main {
        padding: 20px;
    }

    h1 {
        text-align: left;
        font-size: 2.2rem;
        margin-bottom: 20px;
        display: inline;
    }
    h4 {
        display: inline;
        font-size: 1.2rem;
        margin: 20px;
        opacity: 60%;
    }
</style>
