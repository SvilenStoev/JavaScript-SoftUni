function addEventListener() {
    document.getElementById('submit').addEventListener('click', addStudent);
}

const tbodyEl = document.querySelector('#results tbody');

addEventListener();
displayStudents();

async function addStudent(ev) {
    ev.preventDefault();

    const headerEl = document.getElementsByTagName('h3')[0];
    headerEl.textContent = 'Loading...';

    try {
        const firstName = document.querySelector('input[name="firstName"]').value;
        const lastName = document.querySelector('input[name="lastName"]').value;
        const facultyNumber = document.querySelector('input[name="facultyNumber"]').value;
        const grade = document.querySelector('input[name="grade"]').value;

        if (firstName == '' || lastName == '' || facultyNumber == '' || grade == '' || isNaN(grade) || grade < 2 || grade > 6) {
            throw new Error('The input is not valid!');
        }

        const student = {
            firstName,
            lastName,
            facultyNumber,
            grade
        };

        const result = await saveStudent(student);

        if (!result.ok) {
            throw new Error('The students was not saved!');
        }

        const studentRow = createStudentRow(student);
        tbodyEl.appendChild(studentRow);

        headerEl.textContent = 'FORM';

        Array.from(document.querySelector('div[class="inputs"]').children).forEach(i => i.value = '');

    } catch (error) {
        headerEl.textContent = error.message;
    }
}

async function saveStudent(student) {
    const url = 'http://localhost:3030/jsonstore/collections/students';
    const options = {
        method: 'post',
        headers:
        {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)
    }

    const response = await fetch(url, options);

    return response;
}

function createStudentRow(student) {
    const tr = document.createElement('tr');
    const firstName = student.firstName;
    const lastName = student.lastName;
    const facultyNumber = student.facultyNumber;
    const grade = Number(student.grade).toFixed(2);

    const th1 = document.createElement('th');
    const th2 = document.createElement('th');
    const th3 = document.createElement('th');
    const th4 = document.createElement('th');

    th1.textContent = firstName;
    th2.textContent = lastName;
    th3.textContent = facultyNumber;
    th4.textContent = grade;

    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);

    return tr;
}

async function displayStudents() {
    tbodyEl.textContent = 'Loading...';

    const students = await getStudents();

    tbodyEl.textContent = '';

    for (let student of students) {
        const tr = createStudentRow(student);
        tbodyEl.appendChild(tr);
    }
}

async function getStudents() {
    const url = 'http://localhost:3030/jsonstore/collections/students';
    const response = await fetch(url);
    const data = await response.json();
    const students = Object.values(data);

    return students;
}