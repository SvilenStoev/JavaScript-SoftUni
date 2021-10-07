function extractText() {
    const elements = document.getElementById('items').children;

    items = Array.from(elements);

    const resultArr = [];

    for (let item of items) {
        resultArr.push(item.textContent);
    }

    const textArea = document.getElementById('result');

    textArea.value = resultArr.join('\n');
}