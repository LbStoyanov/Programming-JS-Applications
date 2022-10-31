function solve() {
    let infoDiv = document.getElementsByClassName('info')[0];
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');

    let stop = {
        next: 'depot',
    }

    async function depart() {
        const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;
        infoDiv.textContent = 'Loading...';
        const response = await fetch(url);

        if (response.status !== 200) {
            departBtn.disabled = true;
            arriveBtn.disabled = true;
            throw new Error('Stop ID not found!')
        }

        const data = await response.json();

        let stopName = data.name;
        let nextStopID = data.next;
       
        departBtn.disabled = true;
        arriveBtn.disabled = false;
        infoDiv.textContent = `Next stop ${stopName}`;
        stop.next = nextStopID;
    }

    function arrive() {
        
    }

    return {
        depart,
        arrive
    };
}

let result = solve();