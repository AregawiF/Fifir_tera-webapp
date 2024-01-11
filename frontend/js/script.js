const stepButton = document.getElementById("addMoreStep");
console.log(stepButton)
stepButton.addEventListener("click", () =>{
    const ulList = document.getElementById("ul-step")
    const number = ulList.lastElementChild.lastElementChild.lastElementChild;
    console.log(number)
    let arr =  number.textContent.split("-")
    let theNum = parseInt(arr[arr.length -1]) + 1
    console.log(theNum)
    newList = document.createElement("li")
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

const ingButton = document.getElementById("addMoreIng");
console.log(ingButton)
ingButton.addEventListener("click", () =>{
    const ulList = document.getElementById("ing-list")
    const number = ulList.lastElementChild.lastElementChild.lastElementChild;
    console.log(number)
    let arr =  number.textContent.split("-")
    let theNum = parseInt(arr[arr.length -1]) + 1
    console.log(theNum)
    newList = document.createElement("li")
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

