async function getInfo() {
  //Read input value
  
  let stopId = document.getElementById("stopId").value;
  let stopNameElement = document.getElementById("stopName");
  let timeTableElement = document.getElementById("buses");
  let url = `http://localhost:3030/jsonstore/bus/businfo/${stopId} `;

  try {
    stopNameElement.textContent = "Loading...";
    timeTableElement.replaceChildren();

    //Request to server
    const response = await fetch(url);

    //Check for error
    if (response.status !== 200) {
      throw new Error("Stop ID not found!");
    }

    //Parse data
    const data = await response.json();
    stopNameElement.textContent = data["name"];

    //Display data
    Object.entries(data.buses).forEach((b) => {
      let liElement = document.createElement("li");
      liElement.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`;
      timeTableElement.appendChild(liElement);
    });
  } catch (error) {
    stopNameElement.textContent = "Error";
  }
}
