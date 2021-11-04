function loadCommits() {
    // Try it with Fetch API
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const ulEl = document.getElementById('commits');

    const url = `https://api.github.com/repos/${username}/${repo}/commits`;

    makeRequest();

    async function makeRequest() {
        try {
            const response = await fetch(url);

            if (response.ok == false) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            Array.from(ulEl.children).forEach(c => c.remove());

            for (const commitsData of data) {

                const result = `${commitsData.commit.author.name} ${commitsData.commit.message}`;

                const li = document.createElement('li');
                li.textContent = result;

                ulEl.appendChild(li);
            }
        } catch (err) {
            Array.from(ulEl.children).forEach(c => c.remove());

            const li = document.createElement('li');

            li.textContent = err.message;

            ulEl.appendChild(li);
        }
    }

    // // solution without async await:

    //     fetch(url)
    //     .then(response => {
    //         if (response.ok == false) {
    //             throw new Error(`Error: ${response.status} ${response.statusText}`);
    //         }

    //         return response.json();
    //     })
    //     .then(handleResolved)
    //     .catch(handleError);

    // function handleResolved(data) {
    //     Array.from(ulEl.children).forEach(c => c.remove());

    //     for (const commitsData of data) {

    //         const result = `${commitsData.commit.author.name} ${commitsData.commit.message}`;

    //         const li = document.createElement('li');
    //         li.textContent = result;

    //         ulEl.appendChild(li);
    //     }
    // }

    // function handleError(err) {
    //     Array.from(ulEl.children).forEach(c => c.remove());

    //     const li = document.createElement('li');

    //     li.textContent = err.message;

    //     ulEl.appendChild(li);
    // }
}