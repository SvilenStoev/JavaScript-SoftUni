function attachEventsListeners() {
    const convertBtn = document.getElementById('convert');
    convertBtn.addEventListener('click', convert);

    const inputFromEl = document.getElementById('inputDistance');
    const inputToEl = document.getElementById('outputDistance');
    const selectFromEl = document.getElementById('inputUnits');
    const selectToEl = document.getElementById('outputUnits');

    const ratios = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    };

    function convert(ev) {
        const number = Number(inputFromEl.value);
        const fromId = selectFromEl.value;
        const toId = selectToEl.value;

        const result = calculate(fromId, toId, number);
        
        inputToEl.value = result;
    }

    function calculate(fromId, toId, number) {
        let meters = number * ratios[fromId];

        return meters / ratios[toId];
    }
}