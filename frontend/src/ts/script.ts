const Token: any = sessionStorage.getItem('token');
console.log(Token)
const RoLe = sessionStorage.getItem('role');


if (RoLe == 'normal'){
    const addDish = document.getElementById('add-dish');
    const mydishes = document.getElementById('my-dishes');
    addDish?.classList.add('d-none');
    mydishes?.classList.add('d-none');
  }
  if (RoLe == 'cook'){
    const addDish = document.getElementById('add-dish');
    const mydishes = document.getElementById('my-dishes');
    addDish?.classList.remove('d-none');
    mydishes?.classList.remove('d-none');
  }


const stepButton: any = document.getElementById("addMoreStep");
console.log(stepButton)
stepButton.addEventListener("click", () =>{
    const ulList:any = document.getElementById("ul-step")
    const number = ulList.lastElementChild.lastElementChild.lastElementChild;
    console.log(number)
    let arr =  number.textContent.split("-")
    let theNum = parseInt(arr[arr.length -1]) + 1
    console.log(theNum)
    const newList = document.createElement("li")
    newList.innerHTML = `
        <li>
            <div class="m-3 form-floating">
                <input type="name" class="form-control" id="name-of-food" aria-describedby="emailHelp" placeholder="Name">
                <label for="name-of-food">Step - ${theNum} </label>
            </div>
        </li>
    
    `
    ulList.appendChild(newList);

})


const ingButton:any = document.getElementById("addMoreIng");
console.log(ingButton)
ingButton.addEventListener("click", () =>{
    const ulList:any = document.getElementById("ing-list")
    const number = ulList.lastElementChild.lastElementChild.lastElementChild;
    console.log(number)
    let arr =  number.textContent.split("-")
    let theNum = parseInt(arr[arr.length -1]) + 1
    console.log(theNum)
    const newList = document.createElement("li")
    newList.innerHTML = `
        <li>
            <div class="m-3 form-floating">
                <input type="name" class="form-control" id="name-of-food" aria-describedby="emailHelp" placeholder="Name">
                <label for="name-of-food">Ingeridient - ${theNum} </label>
            </div>
        </li>
    
    `
    ulList.appendChild(newList);

})

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('recipeForm') as HTMLFormElement;
    const postBtn = document.getElementById('post-btn') as HTMLButtonElement;

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const stepsInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="steps"]');
        const ingredientsInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="ingredients"]');
        
        const stepsArray: string[] = [];
        stepsInputs.forEach((input: HTMLInputElement) => {
            if (input.value){
                stepsArray.push(input.value);
            }
            
        });
        formData.set('steps', JSON.stringify(stepsArray));
        

        const ingredientsArray: string[] = [];
        ingredientsInputs.forEach((input: HTMLInputElement) => {
            if (input.value){
                ingredientsArray.push(input.value);
            }
            
        });
        formData.set('ingredients', JSON.stringify(ingredientsArray));

        formData.forEach((value, key) => {
            if (value instanceof File) {
                console.log(`${key}: ${value.name} (${value.type})`);
            } else {
                console.log(`${key}: ${value}`);
            }
        });
        console.log(formData.get('image'))
        try {
            const response = await fetch('http://localhost:3000/recipes/new', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + Token,
                },
                body: formData,
            });
            console.log(response)

            if (response.ok) {
                console.log('Form submitted successfully');
                window.location.href = 'home.html'
            } else {
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });
});
