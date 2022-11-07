const url = "http://localhost:3030/jsonstore/messenger";
let textArea = document.getElementById("messages");

function attachEvents() {
  let sendBtn = document.getElementById("submit");
  sendBtn.addEventListener("click", createMessage);

  let refreshBtn = document.getElementById("refresh");
  refreshBtn.addEventListener("click", showMessages);
}

async function createMessage() {
  let authorName = document.querySelector("input[name=author]").value;
  let messageText = document.querySelector("input[name=content]").value;

  if (authorName === '' || messageText === '') {
    alert('Fields are required!');
  }

  let obj = {
    author: authorName,
    content: messageText,
  };

  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  });
}

async function showMessages() {
  const response = await fetch(url);

  const data = await response.json();

  textArea.value = Object.values(data)
    .map(({ author, content }) => `${author}: ${content}`)
    .join("\n");
}

attachEvents();
