function solve() {
    const inputEls = Array.from(document.querySelectorAll('#container input'));
    const adoptionUlEl = document.querySelector('#adoption ul');
    const adoptedUlEl = document.querySelector('#adopted ul');
    const addBtnEl = document.querySelector('#add div button');

    addBtnEl.addEventListener('click', addPet);

    function addPet(ev) {
        ev.preventDefault();

        const name = inputEls[0].value.trim();
        const age = inputEls[1].value.trim();
        const kind = inputEls[2].value.trim();
        const currOwner = inputEls[3].value.trim();

        if (name != '' && age != '' && Number(age) && kind != '' && currOwner != '') {
            const contanctBtn = e('button');
            contanctBtn.textContent = 'Contact with owner';
            contanctBtn.addEventListener('click', contact);

            const petRow = e('li', {},
                e('p', {},
                    e('strong', { textContent: name }),
                    ' is a ',
                    e('strong', { textContent: age }),
                    ' year old ',
                    e('strong', { textContent: kind }),
                ),
                e('span', { textContent: `Owner: ${currOwner}` }),
                contanctBtn
            );

            // const li = document.createElement('li');
            // const p = document.createElement('p');

            // const strong1 = document.createElement('strong');
            // const strong2 = document.createElement('strong');
            // const strong3 = document.createElement('strong');

            // strong1.textContent = name;
            // strong2.textContent = age;
            // strong3.textContent = kind;

            // const span = document.createElement('span');
            // span.textContent = `Owner: ${currOwner}`;

            // const btn = document.createElement('button');
            // btn.textContent = 'Contact with owner';
            // btn.addEventListener('click', contact);

            // p.appendChild(strong1);
            // const string1 = document.createTextNode(' is a '); !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // p.appendChild(string1);

            // p.appendChild(strong2);
            // const string2 = document.createTextNode(' year old ');
            // p.appendChild(string2);

            // p.appendChild(strong3);

            // li.appendChild(p);
            // li.appendChild(span);
            // li.appendChild(btn);

            adoptionUlEl.appendChild(petRow);

            function contact(ev) {
                const div = e('div');
                const input = e('input');
                input.placeholder = 'Enter your names';

                const btnTake = e('button');
                btnTake.textContent = 'Yes! I take it!';
                btnTake.addEventListener('click', adoptPet);

                div.appendChild(input);
                div.appendChild(btnTake);

                petRow.appendChild(div);
                contanctBtn.remove();

                function adoptPet(ev) {
                    const currPetRow = ev.target.parentNode.parentNode;
                    const newOwner = currPetRow.querySelector('input').value;

                    if (newOwner != '') {
                        currPetRow.querySelector('span').textContent = `New Owner: ${newOwner}`;

                        currPetRow.querySelector('div').remove();

                        const btnCheck = e('button');
                        btnCheck.addEventListener('click', deletePet);
                        btnCheck.textContent = 'Checked';

                        currPetRow.appendChild(btnCheck);
                        adoptedUlEl.appendChild(currPetRow);

                        function deletePet(ev) {
                            const petRow = ev.target.parentNode;

                            petRow.remove();
                        }
                    }
                }
            }

            inputEls.forEach(e => e.value = '');
        }
    }

    function e(type, attr, ...content) {
        const element = document.createElement(type);

        for (let prop in attr) {
            element[prop] = attr[prop];
        }

        for (let nestedEl of content) {
            if (typeof nestedEl == 'string' || typeof nestedEl == 'number') {
                nestedEl = document.createTextNode(nestedEl);
            }
            element.appendChild(nestedEl);
        }

        return element;
    }
}