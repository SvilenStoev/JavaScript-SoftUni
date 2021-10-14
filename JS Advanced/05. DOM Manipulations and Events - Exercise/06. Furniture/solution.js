function solve() {
  const generateBtnEl = document.getElementsByTagName('button')[0];
  const buyBtnEl = document.getElementsByTagName('button')[1];
  const genTextareaEl = document.getElementsByTagName('textarea')[0];
  const buyTextareaEl = document.getElementsByTagName('textarea')[1];
  const tableBodyEl = document.querySelector('table tbody');

  generateBtnEl.addEventListener('click', generate);
  buyBtnEl.addEventListener('click', buy);

  function buy() {
    const checkedArr = Array.from(document.querySelectorAll('input[type=checkbox]')).filter(b => b.checked);

    let totalPrice = 0;
    let totalDecFactor = 0;
    const names = [];

    for (const checkboxEl of checkedArr) {
      const currTrChildren = checkboxEl.parentNode.parentNode.children;
      const currName = currTrChildren[1].children[0].textContent;
      const currPrice = Number(currTrChildren[2].children[0].textContent);
      const currDecFac = Number(currTrChildren[3].children[0].textContent);

      names.push(currName);
      totalPrice += currPrice;
      totalDecFactor += currDecFac;
    }

    const averageDecFactor = (Math.round(totalDecFactor * 100) / 100) / checkedArr.length;

    buyTextareaEl.value += `Bought furniture: ${names.join(', ')}\n`;
    buyTextareaEl.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    buyTextareaEl.value += `Average decoration factor: ${averageDecFactor}`;
  }

  function generate() {
    let input = genTextareaEl.value;
    const furnitureArr = JSON.parse(input);

    for (const obj of furnitureArr) {
      const tr = document.createElement('tr');
      const img = document.createElement('img');
      const namePar = document.createElement('p');
      const pricePar = document.createElement('p');
      const decPar = document.createElement('p');
      const input = document.createElement('input');
      img.src = obj.img;
      namePar.textContent = obj.name;
      pricePar.textContent = obj.price;
      decPar.textContent = obj.decFactor;
      input.type = 'checkbox';

      const td1 = document.createElement('td')
      const td2 = document.createElement('td');
      const td3 = document.createElement('td');
      const td4 = document.createElement('td');
      const td5 = document.createElement('td');

      td1.appendChild(img);;
      td2.appendChild(namePar);
      td3.appendChild(pricePar);
      td4.appendChild(decPar);
      td5.appendChild(input);

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);

      tableBodyEl.appendChild(tr);
    }
  }
}