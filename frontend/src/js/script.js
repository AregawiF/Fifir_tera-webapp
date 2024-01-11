"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const stepButton = document.getElementById("addMoreStep");
console.log(stepButton);
stepButton.addEventListener("click", () => {
    const ulList = document.getElementById("ul-step");
    const number = ulList.lastElementChild.lastElementChild.lastElementChild;
    console.log(number);
    let arr = number.textContent.split("-");
    let theNum = parseInt(arr[arr.length - 1]) + 1;
    console.log(theNum);
    const newList = document.createElement("li");
    newList.innerHTML = `
        <li>
            <div class="m-3 form-floating">
                <input type="name" class="form-control" id="name-of-food" aria-describedby="emailHelp" placeholder="Name">
                <label for="name-of-food">Step - ${theNum} </label>
            </div>
        </li>
    
    `;
    ulList.appendChild(newList);
});
const ingButton = document.getElementById("addMoreIng");
console.log(ingButton);
ingButton.addEventListener("click", () => {
    const ulList = document.getElementById("ing-list");
    const number = ulList.lastElementChild.lastElementChild.lastElementChild;
    console.log(number);
    let arr = number.textContent.split("-");
    let theNum = parseInt(arr[arr.length - 1]) + 1;
    console.log(theNum);
    const newList = document.createElement("li");
    newList.innerHTML = `
        <li>
            <div class="m-3 form-floating">
                <input type="name" class="form-control" id="name-of-food" aria-describedby="emailHelp" placeholder="Name">
                <label for="name-of-food">Ingeridient - ${theNum} </label>
            </div>
        </li>
    
    `;
    ulList.appendChild(newList);
});
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('recipeForm');
    const postBtn = document.getElementById('post-btn');
    postBtn.addEventListener('click', (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        const formData = new FormData(form);
        const stepsInputs = document.querySelectorAll('input[name="steps"]');
        const ingredientsInputs = document.querySelectorAll('input[name="ingredients"]');
        const stepsArray = [];
        stepsInputs.forEach((input) => {
            if (input.value) {
                stepsArray.push(input.value);
            }
        });
        formData.set('steps', JSON.stringify(stepsArray));
        const ingredientsArray = [];
        ingredientsInputs.forEach((input) => {
            if (input.value) {
                ingredientsArray.push(input.value);
            }
        });
        formData.set('ingredients', JSON.stringify(ingredientsArray));
        formData.forEach((value, key) => {
            if (value instanceof File) {
                console.log(`${key}: ${value.name} (${value.type})`);
            }
            else {
                console.log(`${key}: ${value}`);
            }
        });
        try {
            const response = yield fetch('your-api-endpoint', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                console.log('Form submitted successfully');
            }
            else {
                console.error('Form submission failed');
            }
        }
        catch (error) {
            console.error('Error:', error);
        }
    }));
});
