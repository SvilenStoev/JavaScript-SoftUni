function solve() {
  const [generateBtnEl, buyBtnEl] = Array.from(document.querySelectorAll('button'));
  const [genTextareaEl, buyTextareaEl] = Array.from(document.querySelectorAll('textarea'));
  const tableBodyEl = document.querySelector('table.table tbody');

  generateBtnEl.addEventListener('click', generate);
  buyBtnEl.addEventListener('click', buy);

  function generate(е) {
    const furnitureArr = JSON.parse(genTextareaEl.value);

    for (let obj of furnitureArr) {
      const tr = document.createElement('tr');
      
      tr.appendChild(createElements('img', { src: obj.img}, ''));
      tr.appendChild(createElements('p', {}, obj.name));
      tr.appendChild(createElements('p', {}, obj.price));
      tr.appendChild(createElements('p', {}, obj.decFactor));
      tr.appendChild(createElements('input', { type: 'checkbox'}, ''));

      tableBodyEl.appendChild(tr);
    }

    function createElements(nestedTag, props, content) {
      const cell = document.createElement('td');
      const nestedEl = document.createElement(nestedTag);
      
      for (let prop in props) {
        nestedEl[prop] = props[prop];
      }

      if (content) {
        nestedEl.textContent = content;
      }

      cell.appendChild(nestedEl);

      return cell;
    }
  }

  function buy(е) {
    const furnitureDataArr = Array
      .from(document.querySelectorAll('input[type=checkbox]:checked'))
      .map(b => b.parentNode.parentNode)
      .map(r => ({
        name: r.children[1].textContent,
        price: Number(r.children[2].textContent),
        decFac: Number(r.children[3].textContent)
      }));

    let totalPrice = 0;
    let totalDecFactor = 0;
    const names = [];

    for (const item of furnitureDataArr) {
      names.push(item.name);
      totalPrice += item.price;
      totalDecFactor += item.decFac;
    }

    buyTextareaEl.value = `Bought furniture: ${names.join(', ')}
Total price: ${totalPrice.toFixed(2)}
Average decoration factor: ${totalDecFactor / furnitureDataArr.length}`;
  }
}


// function solve() {
//   const generateBtnEl = document.getElementsByTagName('button')[0];
//   const buyBtnEl = document.getElementsByTagName('button')[1];
//   const genTextareaEl = document.getElementsByTagName('textarea')[0];
//   const buyTextareaEl = document.getElementsByTagName('textarea')[1];
//   const tableBodyEl = document.querySelector('table tbody');

//   generateBtnEl.addEventListener('click', generate);
//   buyBtnEl.addEventListener('click', buy);

//   function buy() {
//     const checkedArr = Array.from(document.querySelectorAll('input[type=checkbox]')).filter(b => b.checked);

//     let totalPrice = 0;
//     let totalDecFactor = 0;
//     const names = [];

//     for (const checkboxEl of checkedArr) {
//       const currTrChildren = checkboxEl.parentNode.parentNode.children;
//       const currName = currTrChildren[1].children[0].textContent;
//       const currPrice = Number(currTrChildren[2].children[0].textContent);
//       const currDecFac = Number(currTrChildren[3].children[0].textContent);

//       names.push(currName);
//       totalPrice += currPrice;
//       totalDecFactor += currDecFac;
//     }

//     const averageDecFactor = (Math.round(totalDecFactor * 100) / 100) / checkedArr.length;

//     buyTextareaEl.value += `Bought furniture: ${names.join(', ')}\n`;
//     buyTextareaEl.value += `Total price: ${totalPrice.toFixed(2)}\n`;
//     buyTextareaEl.value += `Average decoration factor: ${averageDecFactor}`;
//   }

//   function generate() {
//     let input = genTextareaEl.value;
//     const furnitureArr = JSON.parse(input);

//     for (const obj of furnitureArr) {
//       const tr = document.createElement('tr');
//       const img = document.createElement('img');
//       const namePar = document.createElement('p');
//       const pricePar = document.createElement('p');
//       const decPar = document.createElement('p');
//       const input = document.createElement('input');
//       img.src = obj.img;
//       namePar.textContent = obj.name;
//       pricePar.textContent = obj.price;
//       decPar.textContent = obj.decFactor;
//       input.type = 'checkbox';

//       const td1 = document.createElement('td')
//       const td2 = document.createElement('td');
//       const td3 = document.createElement('td');
//       const td4 = document.createElement('td');
//       const td5 = document.createElement('td');

//       td1.appendChild(img);;
//       td2.appendChild(namePar);
//       td3.appendChild(pricePar);
//       td4.appendChild(decPar);
//       td5.appendChild(input);

//       tr.appendChild(td1);
//       tr.appendChild(td2);
//       tr.appendChild(td3);
//       tr.appendChild(td4);
//       tr.appendChild(td5);

//       tableBodyEl.appendChild(tr);
//     }
//   }
// }