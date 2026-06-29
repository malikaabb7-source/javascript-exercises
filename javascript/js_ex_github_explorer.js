const BASE_URL = "https://api.github.com";

/* Task 1: Fetch User Profile */
function fetchGitHubUser(username) {
  return fetch(`${BASE_URL}/users/${username}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("User not found");
      }
      return response.json();
    });
}

/* Task 2: Fetch Repositories */
function fetchRepos(user) {
  return fetch(`${BASE_URL}/users/${user.login}/repos`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch repos");
      }
      return response.json();
    });
}

/* Task 3: Fetch Repository Languages */
function fetchRepoLanguages(repo) {
  return fetch(`${BASE_URL}/repos/${repo.owner.login}/${repo.name}/languages`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch languages");
      }
      return response.json();
    })
    .catch(error => {
      console.log(`Failed to fetch languages for ${repo.name}`);
      return {};
    });
}

/* Task 4 + Task 5 + Task 6 */
fetchGitHubUser("octocat")
  .then(user => {
    return fetchRepos(user);
  })
  .then(repos => {
    const firstFiveRepos = repos.slice(0, 5);

    const languagePromises = firstFiveRepos.map(repo => {
      return fetchRepoLanguages(repo)
        .then(languages => {
          return {
            name: repo.name,
            languages: languages
          };
        });
    });

    return Promise.all(languagePromises);
  })
  .then(results => {
    console.log(results);
  })
  .catch(error => {
    console.log(error.message);
  })
  .finally(() => {
    console.log("GitHub Explorer operation complete");
  });
