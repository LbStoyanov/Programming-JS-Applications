
function lockedProfile() {
  const main = document.getElementById("main");
  const div = document.getElementsByClassName('user1Username')[0];
  div.style.display = 'none';

  async function getRequest() {
    const url = "http://localhost:3030/jsonstore/advanced/profiles";

    const response = await fetch(url);

    if (response.status !== 200) {
      throw new Error("Invalid request!");
    }

    const data = await response.json();
    let listOfUsers = Object.values(data);


    for (let [value] of Object.entries(listOfUsers)) {

      let age = value.age;
      let email = value.email;
      let username = value.username;

      const result = createProfileCard(age, email, username);
      
      main

    }

    function createProfileCard(age, email, username) {
    
    }
  }

  getRequest();
}

lockedProfile();
