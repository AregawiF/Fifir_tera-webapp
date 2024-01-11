"use strict";
// let id: string = sessionStorage.getItem('id') || '';
fetch(`http://localhost:3000/recipes/myrecipes${id}`)
    .then(res => res.json())
    .then(json => display(json));
function display(json) {
    const contain = document.getElementById('contain');
    if (!contain) {
        return;
    }
    contain.innerHTML = '';
    for (const iter of json) {
        const flex = document.createElement('div');
        flex.classList.add('d-flex', 'bg-white', 'm-3');
        const img = document.createElement('img');
        img.src = iter.image;
        img.classList.add('img-fluid');
        img.style.width = '10%';
        img.style.height = '10%';
        flex.appendChild(img);
        const title = document.createElement('p');
        title.innerHTML = iter.name;
        flex.appendChild(title);
        const description = document.createElement('p');
        description.classList.add('m-3');
        description.textContent = iter.description;
        flex.appendChild(description);
        const button = document.createElement('button');
        button.classList.add('btn', 'btn-danger', 'm-3');
        button.textContent = 'Delete';
        button.onclick = () => {
            const isConfirmed = window.confirm('Are you sure you want to delete?');
            if (isConfirmed) {
                fetch(`http://localhost:3000/recipe/${iter._id}`, {
                    method: 'DELETE',
                });
                window.location.reload();
            }
        };
        flex.appendChild(button);
        const edit = document.createElement('button');
        edit.classList.add('btn', 'btn-warning', 'm-3');
        edit.onclick = () => {
            sessionStorage.setItem('idValue', iter._id);
            window.location.href = 'editdish.html';
        };
        edit.textContent = 'Edit';
        flex.appendChild(edit);
        contain.appendChild(flex);
    }
    document.body.appendChild(contain);
}
