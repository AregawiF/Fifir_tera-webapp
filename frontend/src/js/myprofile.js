"use strict";
const urlToken = sessionStorage.getItem('token');
const cookId = sessionStorage.getItem('cook-id');
console.log(cookId, urlToken);
fetch(`http://localhost:3000/user/${cookId}`, {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer ' + urlToken,
    }
})
    .then((response) => response.json())
    .then((json) => handle(json));
let container = document.getElementById('container');
let nameVarElement;
let fathersNameVarElement;
let emailLabelElement;
function handle(json) {
    console.log(json);
    let nameWithContainer = document.getElementById('nameWithContainer');
    let labelElement = document.createElement('p');
    labelElement.innerHTML = "First Name: ";
    labelElement.classList.add('m-3', 'p-3');
    nameVarElement = document.createElement('p');
    nameVarElement.innerHTML = json.firstName;
    nameVarElement.classList.add('m-3', 'bg-secondary', 'p-3');
    nameVarElement.contentEditable = "true";
    nameWithContainer.appendChild(labelElement);
    nameWithContainer.appendChild(nameVarElement);
    console.log(nameWithContainer);
    // Fathers name
    let fathersNameWithContainer = document.getElementById('fathersNameContainer');
    let fathersNameLabelElement = document.createElement('p');
    fathersNameLabelElement.innerHTML = "Last Name: ";
    fathersNameLabelElement.classList.add('m-3', 'p-3');
    fathersNameVarElement = document.createElement('p');
    fathersNameVarElement.innerHTML = json.lastName;
    fathersNameVarElement.classList.add('m-3', 'container', 'bg-secondary', 'p-3');
    fathersNameVarElement.contentEditable = "true";
    fathersNameWithContainer.appendChild(fathersNameLabelElement);
    fathersNameWithContainer.appendChild(fathersNameVarElement);
    // Email
    let emailWithContainer = document.getElementById('emailContainer');
    emailLabelElement = document.createElement('p');
    emailLabelElement.innerHTML = "Email: ";
    emailLabelElement.classList.add('m-3', 'p-3');
    let emailVarElement = document.createElement('p');
    emailVarElement.innerHTML = json.email;
    emailVarElement.classList.add('m-3', 'container', 'bg-secondary', 'p-3');
    emailVarElement.contentEditable = "true";
    emailWithContainer.appendChild(emailLabelElement);
    emailWithContainer.appendChild(emailVarElement);
    // Role
    let roleWithContainer = document.getElementById('role');
    let roleLabelElement = document.createElement('p');
    roleLabelElement.innerHTML = "Role: ";
    roleLabelElement.classList.add('m-3', 'p-3');
    let roleVarElement = document.createElement('p');
    roleVarElement.innerHTML = json.role;
    roleVarElement.classList.add('m-3', 'p-3');
    roleWithContainer.appendChild(roleLabelElement);
    roleWithContainer.appendChild(roleVarElement);
}
function saveChanges() {
    let firstName = nameVarElement.innerHTML;
    let lastName = fathersNameVarElement.innerHTML;
    let email = emailLabelElement.innerHTML;
    let user = {
        firstName,
        lastName,
        email
    };
    console.log(user);
    fetch(`http://localhost:3000/user/${cookId}`, {
        method: 'PATCH',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + urlToken,
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}
function deleteProfile() {
    fetch(`http://localhost:3000/user/${cookId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + urlToken,
        },
    });
    window.location.href = 'index.html';
}
