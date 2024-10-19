<script>
    let users = [
        {
            position: 1,
            username: "@dmztdhruv",
            timeToday: "326m",
            languages: [
                { name: "css", time: "14m", color: "#9b59b6" },
                { name: "tsx", time: "266m", color: "#3498db" },
                { name: "typescript", time: "46m", color: "#2980b9" },
            ],
            status: "cracked",
        },
        {
            position: 2,
            username: "@ethanbthoma",
            timeToday: "296m",
            languages: [
                { name: "css", time: "20m", color: "#9b59b6" },
                { name: "go", time: "8m", color: "#27ae60" },
                { name: "lua", time: "14m", color: "#2980b9" },
                { name: "nix", time: "54m", color: "#8e44ad" },
                { name: "python", time: "196m", color: "#f39c12" },
                { name: "toml", time: "4m", color: "#8e5e4b" },
            ],
        },
        {
            position: 3,
            username: "@ethanbthoma",
            timeToday: "296m",
            languages: [
                { name: "css", time: "20m", color: "#9b59b6" },
                { name: "go", time: "8m", color: "#27ae60" },
                { name: "lua", time: "14m", color: "#2980b9" },
                { name: "nix", time: "54m", color: "#8e44ad" },
                { name: "python", time: "196m", color: "#f39c12" },
                { name: "toml", time: "4m", color: "#8e5e4b" },
            ],
        },
        {
            position: 4,
            username: "@ethanbthoma",
            timeToday: "296m",
            languages: [
                { name: "css", time: "20m", color: "#9b59b6" },
                { name: "go", time: "8m", color: "#27ae60" },
                { name: "lua", time: "14m", color: "#2980b9" },
                { name: "nix", time: "54m", color: "#8e44ad" },
                { name: "python", time: "196m", color: "#f39c12" },
                { name: "toml", time: "4m", color: "#8e5e4b" },
            ],
        },
        {
            position: 5,
            username: "@ethanbthoma",
            timeToday: "296m",
            languages: [
                { name: "css", time: "20m", color: "#9b59b6" },
                { name: "go", time: "8m", color: "#27ae60" },
                { name: "lua", time: "14m", color: "#2980b9" },
                { name: "nix", time: "54m", color: "#8e44ad" },
                { name: "python", time: "196m", color: "#f39c12" },
                { name: "toml", time: "4m", color: "#8e5e4b" },
            ],
        },
        {
            position: 2,
            username: "@ethanbthoma",
            timeToday: "296m",
            languages: [
                { name: "css", time: "20m", color: "#9b59b6" },
                { name: "go", time: "8m", color: "#27ae60" },
                { name: "lua", time: "14m", color: "#2980b9" },
                { name: "nix", time: "54m", color: "#8e44ad" },
                { name: "python", time: "196m", color: "#f39c12" },
                { name: "toml", time: "4m", color: "#8e5e4b" },
            ],
        },
        // Add more users as needed
    ];
</script>

<table class="leaderboard-table">
    <thead>
        <tr>
            <th>Position</th>
            <th>User</th>
            <th>Time Today</th>
            <th>Languages</th>
        </tr>
    </thead>
    <tbody>
        {#each users as user}
            <tr>
                <td class="position">
                    {user.position === 1 ? "👑 #1 Nerd" : `#${user.position}`}
                </td>
                <td>{user.username}</td>
                <td>{user.timeToday}</td>
                <td class="languages">
                    {#each user.languages as lang}
                        <span
                            class="language-badge"
                            style="background-color: {lang.color}"
                        >
                            {lang.name} - {lang.time}
                        </span>
                    {/each}
                </td>
            </tr>
        {/each}
    </tbody>
</table>

<link rel="stylesheet" href="/assets/styles.css" />
