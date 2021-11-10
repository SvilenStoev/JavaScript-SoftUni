function solve() {
    const infoEl = document.getElementById('info');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    let currentStop = {
        next: 'depot'
    };

    async function depart() {
        infoEl.textContent = 'Loading...';

        const response = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${currentStop.next}`);

        currentStop = await response.json();

        infoEl.textContent = `Next stop ${currentStop.name}`;

        departBtn.disabled = true;
        arriveBtn.disabled = false;
    }

    function arrive() {
        departBtn.disabled = false;
        arriveBtn.disabled = true;

        infoEl.textContent = `Arriving at ${currentStop.name}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();