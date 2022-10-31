function solve() {
    let infoDiv = document.getElementsByClassName('info')[0];
    let url = '';
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');

    async function depart() {
        url = 'http://localhost:3030/jsonstore/bus/schedule/depot';
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
    }

    function arrive() {
        console.log('Arrive TODO...');
    }

    return {
        depart,
        arrive
    };
}

let result = solve();