interface Profile{
    firstName: string,
    lastName: string,
    email: string,
    role: string,
    
}

fetch('https://jsonplaceholder.typicode.com/users/1')
  .then((response) => response.json())
  .then((json) => handle(json));

let container = document.getElementById('container');
let nameVarElement: HTMLParagraphElement;
let fathersNameVarElement: HTMLParagraphElement;
let emailLabelElement: HTMLParagraphElement;

function handle(json:Profile) {
  let nameWithContainer = document.getElementById('nameWithContainer') as HTMLDivElement;

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
  let fathersNameWithContainer = document.getElementById('fathersNameContainer') as HTMLDivElement;

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
  let emailWithContainer = document.getElementById('emailContainer') as HTMLDivElement;

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
  let roleWithContainer = document.getElementById('role') as HTMLDivElement;

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
  fetch('https://jsonplaceholder.typicode.com/users/1', {
    method: 'PATCH',
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function deleteProfile() {
  fetch('https://jsonplaceholder.typicode.com/users/1', {
    method: 'DELETE',
  });
  window.location.href = 'index.html';
}
