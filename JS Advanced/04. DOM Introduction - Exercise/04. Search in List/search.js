function search() {
   const towns = document.querySelectorAll('#towns li');
   const townsArr = Array.from(towns);

   const searchTerm = document.getElementById('searchText').value;
   let matches = 0;

   for (let i = 0; i < townsArr.length; i++) {
      if (townsArr[i].textContent.includes(searchTerm)) {
         townsArr[i].style.textDecoration = 'underline';
         townsArr[i].style.fontWeight = 'bold';
         matches++;
      }
      else {
         townsArr[i].style.textDecoration = '';
         townsArr[i].style.fontWeight = '';
      }
   }

   document.getElementById('result').textContent = `${matches} matches found`;
}
