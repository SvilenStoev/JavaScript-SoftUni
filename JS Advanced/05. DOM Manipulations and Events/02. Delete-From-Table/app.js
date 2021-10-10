function deleteByEmail() {
    const inputEl = document.querySelector('input[name="email"]');

    const rows = Array
        .from(document.querySelectorAll('#customers tbody tr'))
        .filter(r => r.children[1].textContent == inputEl.value);

    rows.forEach(r => r.remove());

    document.getElementById('result').textContent = rows.length > 0 ? 'Deleted.' : 'Not found.';

    inputEl.value = '';
}

// // Solution 2
// function deleteByEmail() {
//     const inputEl = document.querySelector('input[name="email"]');
//     const tableRowsArr = Array
//         .from(document.querySelectorAll('#customers tbody tr'))
//         .filter(x => x.children[1].textContent == inputEl.value);

//     let output = 'Not found.';

//     for (let row of tableRowsArr) {
//         row.remove();
//         output = 'Deleted.';
//     }

//     inputEl.value = '';
//     document.getElementById('result').textContent = output;
// }