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
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    const btn = document.getElementById('signup');
    form.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        const formData = new FormData(form);
        console.log(formData);
        let jsonData = {};
        formData.forEach((value, key) => {
            console.log(`${key}: ${value}`);
            jsonData[key] = value.toString();
        });
        const jsonDataString = JSON.stringify(jsonData);
        console.log(jsonDataString);
        try {
            const response = yield fetch(`http://localhost:3000/auth/signup/${jsonData.role}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: jsonDataString,
            });
            if (response.ok) {
                console.log('Form submitted successfully');
                const data = yield response.json();
                console.log(data);
                sessionStorage.setItem('token', data.token);
                sessionStorage.setItem('id', data.role[0]);
                window.location.href = 'home.html';
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
