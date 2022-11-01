function solve() {
    let infoDiv = document.getElementsByClassName('info')[0];
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');

    let stop = {
        next: 'depot'
    }

    

    async function depart() {
        departBtn.disabled = true;
        const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;
        //infoDiv.textContent = 'Loading...';
        const response = await fetch(url);

        if (response.status !== 200) {
            departBtn.disabled = true;
            arriveBtn.disabled = true;
            throw new Error('Stop ID not found!')
        }

        stop = await response.json();

        
        
        infoDiv.textContent = `Next stop ${stop.name}`;
        arriveBtn.disabled = false;
        
    }

    async function arrive() {
       
        departBtn.disabled = false;
        arriveBtn.disabled = true;
        infoDiv.textContent = `Arriving at ${stop.name}`;
        
    }

    return {
        depart,
        arrive
    };
}

let result = solve();