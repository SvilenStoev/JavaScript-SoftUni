function create(words) {
   for (let word of words) {
      const currDiv = document.createElement('div');
      const currPar = document.createElement('p');
      
      currDiv.addEventListener('click', displayEl);
      currPar.style.display = 'none';
      currPar.textContent = word;

      currDiv.appendChild(currPar);

      document.getElementById('content').appendChild(currDiv);
   }

   function displayEl(ev) {
      ev.currentTarget.children[0].style.display = '';
   }
}