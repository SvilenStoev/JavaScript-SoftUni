function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const tableBody = document.querySelector('table tbody').children;

      let searchTerm = document.querySelector('#searchField').value;

      for (let i = 0; i < tableBody.length; i++) {
         const currRow = Array.from(tableBody[i].children);

         tableBody[i].classList.remove('select');

         if (currRow.some(x => x.textContent.includes(searchTerm))) {
            tableBody[i].classList.add('select');
         }
      }
   }
}