  function lockedProfile() {

   async function getRequest(){

    const url = 'http://localhost:3030/jsonstore/advanced/profiles';

    const response = await fetch(url);

    if (response.status !== 200) {
        throw new Error('Invalid request!');
    }

    const data = await response.json();
    let listOfUsers = Object.values(data);

    let profiles = [];

    
   

    for(let [key, value] of Object.entries(listOfUsers)){

        let age = value.age;
        let email = value.email;
        let username = value.username;

        profiles.push(createProfileCard(age,email,username));

    }

    function createProfileCard(age,email,username){

      


    }

    
   }

   getRequest();
}