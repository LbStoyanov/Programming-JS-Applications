function loadRepos() {
   let div = document.getElementById('res');
   let loadBtn = document.getElementsByTagName('button')[0];

   loadBtn.addEventListener('click',() => {
      let request = new XMLHttpRequest();
      let url = 'https://api.github.com/users/testnakov/repos';

      request.addEventListener('readystatechange',function ()  {
         if (request.readyState == 4 && request.status == 200) {
            div.textContent = request.responseText;
         }
      });

      request.open('GET',url);
      request.send();
   })
}