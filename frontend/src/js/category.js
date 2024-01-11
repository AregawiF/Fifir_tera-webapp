"use strict";
const to_ken = sessionStorage.getItem('token');
console.log(to_ken);
function display(type) {
    fetch(`http://localhost:3000/recipes/category/${type}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + to_ken,
        },
    })
        .then(res => res.json())
        .then(json => show(json));
}
const contain = document.createElement('div');
contain.classList.add('mb-5');
function show(json) {
    console.log(json);
    contain.innerHTML = '';
    const arr = json;
    console.log(arr);
    for (let iter of arr) {
        const flex = document.createElement('div');
        flex.classList.add('d-flex', 'bg-white', 'm-3');
        const img = document.createElement('img');
        img.src = iter.image;
        img.classList.add('img-fluid');
        img.style.width = '10%';
        img.style.height = '10%';
        flex.appendChild(img);
        const description = document.createElement('p');
        description.classList.add('m-3');
        description.textContent = iter.description;
        flex.appendChild(description);
        const idValue = iter._id;
        sessionStorage.setItem('id', idValue);
        flex.onclick = () => {
            window.location.href = 'singledish.html';
        };
        contain.appendChild(flex);
    }
    document.body.appendChild(contain);
}
