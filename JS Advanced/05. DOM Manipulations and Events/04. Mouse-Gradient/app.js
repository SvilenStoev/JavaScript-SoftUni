function attachGradientEvents() {
    const gradientEl = document.getElementById('gradient');
    const resultEl = document.getElementById('result');

    gradientEl.addEventListener('mousemove', calcProcentage);

    function calcProcentage(ev) {
        let result = Math.floor(ev.offsetX / ev.target.clientWidth * 100);

        resultEl.textContent = `${result}%`;
    }
}