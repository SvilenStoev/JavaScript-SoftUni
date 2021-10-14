function addItem() {
    const itemTextEl = document.getElementById('newItemText');
    const itemValueEl = document.getElementById('newItemValue');
    const selectEl = document.getElementById('menu');

    const optionEl = document.createElement('option');
    optionEl.textContent = itemTextEl.value;
    optionEl.value = itemValueEl.value;

    selectEl.appendChild(optionEl);

    itemTextEl.value = '';
    itemValueEl.value = '';
}