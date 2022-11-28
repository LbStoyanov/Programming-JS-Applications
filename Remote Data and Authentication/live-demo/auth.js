document.getElementById('login-form').addEventListener('submit',onLogin);
document.getElementById('logoutBtn').addEventListener('click',onLogout)

async function onLogin(event){
    event.preventDefault();

    const formData = new FormData(event.target);
    const {email,password} = Object.fromEntries(formData.entries());

    const response = await fetch('http://localhost:3030/users/login',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email,password})
    });

    const data = await response.json();
    sessionStorage.setItem('accessToken',data.accessToken);
    
}

async function onLogout(){
    const token = sessionStorage.getItem('accessToken');

    await fetch('http://localhost:3030/users/logout',{
        method: 'GET',
        headers:{'X-Authorization': token}
        
    });
}

