"use strict";
const token = sessionStorage.getItem('token');
const role = sessionStorage.getItem('role');
const cook_id = sessionStorage.getItem('cook-id');
console.log(token, role, cook_id);
setInterval(() => {
    fetch(`http://localhost:3000/recipes`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    })
        .then(res => res.json())
        .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        showRandom(data[randomIndex]);
    });
}, 2500);
function showRandom(json) {
    console.log(json);
    const parent = document.getElementById("random");
    parent.addEventListener('click', () => {
        const id = json._id;
        sessionStorage.setItem('id', id); // Fix: Use correct syntax for setting an item in sessionStorage
        window.location.href = 'singledish.html';
    });
    const img = document.getElementById('img');
    const description = document.getElementById('description');
    img.src = json.thumbnail;
    img.style.width = "50%";
    img.style.height = "50%";
    description.innerHTML = json.description;
}
