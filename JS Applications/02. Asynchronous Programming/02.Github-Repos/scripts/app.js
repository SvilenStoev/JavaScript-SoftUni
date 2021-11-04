function loadRepos() {
	const username = document.getElementById('username').value;
	const ulEl = document.getElementById('repos');

	const requestURL = `https://api.github.com/users/${username}/repos`;

	// Request
	fetch(requestURL)
		.then(response => {
			if (response.ok == false) {
				throw new Error(`${response.status} ${response.statusText}`);
			}

			return response.json();
		})
		.then(handleResponse)
		.catch(handleError);

	function handleResponse(data) {
		Array.from(ulEl.children).forEach(c => c.remove());

		for (const repo of data) {
			const a = document.createElement('a');
			const li = document.createElement('li');

			a.href = repo.html_url;
			a.textContent = repo.full_name;

			li.appendChild(a);
			ulEl.appendChild(li);
		}
	}

	function handleError(error) {
		Array.from(ulEl.children).forEach(c => c.remove());

		ulEl.textContent = error.message;
	}
}