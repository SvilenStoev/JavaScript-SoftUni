function solve() {
  let inputText = document.getElementById('text').value.toLowerCase();
  const namingPattern = document.getElementById('naming-convention').value;

  let inputArr = inputText.split(' ');

  let result = [];

  switch (namingPattern) {
    case 'Camel Case':
      result = inputArr.map((el, i) => {
        if (i != 0) {
          el = el[0].toUpperCase() + el.substring(1);
        }
        return el;
      });
      break;

    case 'Pascal Case':
      result = inputArr.map(el => {
        el = el[0].toUpperCase() + el.substring(1);
        return el;
      });
      break;

    default: result.push('Error!'); break;
  }

  document.getElementById('result').textContent = result.join('');
}