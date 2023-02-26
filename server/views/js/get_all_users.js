document.getElementById("users").onclick = function() {

    async function fetchUsers() {
        const response = await fetch(`/get_all_users`);
        const json = await response.json();
        return json;
    }

    fetchUsers().then(json => {
        console.log("Your array of athletes", json.athletes)
    });
}

