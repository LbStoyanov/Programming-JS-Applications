async function loadCommits() {
  const commits = document.getElementById("commits");

  const userName = document.getElementById("username").value;
  const repo = document.getElementById("repo").value;

  const url = `https://api.github.com/repos/${userName}/${repo}/commits`;

  const response = await fetch(url);
 
  try {
    if (response.status !== 200) {
        throw new Error(response.status);
      }
    
      const data = await response.json();
    
      Object.values(
        data.map((r) => {
          console.log(r);
        })
      );
      
  } catch (error) {
    const li = document.createElement('li');
    li.textContent = error.status;
    commits.appendChild(li);
  }
}
