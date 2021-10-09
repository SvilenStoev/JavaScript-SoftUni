function solve() {
  const inputArr = document
    .getElementById('input').value
    .split('.')
    .filter(x => x !== '' && x !== ' ')
    .map(x => x + '.');

  const length = inputArr.length;
  const paragraphs = Math.ceil(length / 3);

  document.getElementById('output').textContent = '';

  for (let i = 0; i < paragraphs; i++) {
    document.getElementById('output').innerHTML += `<p>${inputArr.splice(0, 3).join('')}</p>`;
  }
}