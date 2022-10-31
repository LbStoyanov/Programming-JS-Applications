function loadRepos() {
  let username = document.getElementById("username").value;

  const url = `https://api.github.com/users/${username}/repos`;

  fetch(url)
    .then(responseHandler)
    .then(onSuccess)
    .catch(onError);

  function responseHandler(response) {
	if (response.ok == false) {
		throw new Error(`Error:${response.status} ${response.statusText}`);
	}

	return response.json();
  }

  function onSuccess(data) {
	const list = document.getElementById('repos');

	const items = data.map(repo => {
		const li = document.createElement('li');
		const a = document.createElement('a');
		a.href = repo.html_url;
		a.textContent = repo.full_name;
		li.appendChild(a);
		return li;
	})

	list.replaceChildren(...items);
  }

  function onError(error) {
    const list = document.getElementById('repos');
	list.textContent = error.message;
  }
}
