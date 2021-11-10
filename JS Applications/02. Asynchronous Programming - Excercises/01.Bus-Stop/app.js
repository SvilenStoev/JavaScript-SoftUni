async function getInfo() {
    const stopId = document.getElementById('stopId').value;
    const stopNameEl = document.getElementById('stopName');
    const busesUlEl = document.getElementById('buses');

    try {
        const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

        stopNameEl.textContent = 'Loading...';
        busesUlEl.replaceChildren(); //delete all buses in ul element

        const response = await fetch(url);

        if (response.status == 204) {
            throw new Error('Error');
        }

        const data = await response.json();

        const stopName = data.name;
        const buses = data.buses;

        stopNameEl.textContent = stopName;


        const sortedBuses = Object.entries(buses).sort((a, b) => a[1] - b[1]);

        for (const bus of sortedBuses) {

            const result = `Bus ${bus[0]} arrives in ${bus[1]} minutes`;

            const li = document.createElement('li');
            li.textContent = result;

            busesUlEl.appendChild(li);
        }

        // without sorting:

        // for (const busNum in buses) {

        //     const result = `Bus ${busNum} arrives in ${buses[busNum]} minutes`;

        //     const li = document.createElement('li');
        //     li.textContent = result;

        //     busesUlEl.appendChild(li);
        // }
    } catch (error) {
        busesUlEl.replaceChildren(); //delete all buses in ul element

        stopNameEl.textContent = error.message;
    }
}