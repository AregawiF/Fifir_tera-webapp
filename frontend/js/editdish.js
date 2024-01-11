let id  = sessionStorage.getItem('idValue');
let name;
let description;
let servingText;
let prepTimeTest;
let categoryTwo;
let stepDiv;
let ingDiv;
 
fetch(`http://localhost:3000/recipe/${id}`)
.then(res => res.json())
.then(json => handler(json))  




function handler(json){
    let parent = document.getElementById('parent')
    let picture = document.createElement('img')
    picture.src = json.thumbnail
    parent.appendChild(picture);      
    let wholeDiv = document.createElement('div');
    wholeDiv.classList.add("w-md-75" , "bg-white")
    wholeDiv.style.margin = '5%';      
    
    name = document.createElement('h1') 
    name.innerHTML = json.name
    name.contentEditable = true
    name.classList.add('bg-secondary' ,'border-primary' ,'p-2')
    wholeDiv.appendChild(name);
    wholeDiv.classList.add("d-flex", "flex-column", "align-items-center", "justify-content-evenly")
    
    description = document.createElement('p')
    description.innerHTML = json.description
    description.contentEditable = true
    description.classList.add('bg-secondary'  ,'container','border-primary' ,'p-2')


    wholeDiv.appendChild(description);      
    let iconsRow = document.createElement('div')
    iconsRow.classList.add("d-flex","justify-content-end",)      
    let serving = document.createElement('div')
    let iconServing = document.createElement('img')
    iconServing.style.width = '20px'
    iconServing.style.marginLeft = '5px'
    
    servingText = document.createElement('p')
    servingText.innerHTML = json.people
    servingText.contentEditable = true
    iconServing.src = 'Images/people.png'
    serving.appendChild(iconServing)
    serving.appendChild(servingText)
    serving.classList.add("m-5")
    serving.style.display = 'flex-column'
    let preptime = document.createElement('div')
    let iconTime = document.createElement('img')
    iconTime.style.width = '20px'
    
    
    prepTimeTest = document.createElement('p')
    prepTimeTest.innerHTML = json.cookTime
    prepTimeTest.contentEditable = true
    iconTime.src = 'Images/stopwatch.png'
    iconTime.style.marginLeft = '5px'
    preptime.appendChild(iconTime)
    preptime.appendChild(prepTimeTest)
    preptime.classList.add("m-5")
    preptime.style.display = 'flex flex-column'       
    iconsRow.appendChild(serving)
    iconsRow.appendChild(preptime)

    category = document.createElement('div')
    
    categoryOne = document.createElement('p')
    categoryOne.innerHTML = "Fasting?"
    fastingCheckBox = document.createElement('input')
    fastingCheckBox.type = 'checkbox'
    fastingCheckBox.classList.add("mx-2" )
    fastingCheckBox.checked = json.fasting
    categoryOne.appendChild(fastingCheckBox)
    categoryOne.classList.add("mx-5", "bg-primary" ,"d-flex" ,"flex-row")
    
    
    categoryTwo = document.createElement('p')
    categoryTwo.innerHTML = json.type
    categoryTwo.classList.add("mx-5", "bg-primary")
    categoryTwo.contentEditable = true
    category.classList.add("d-flex","flex-row",)
    
    category.appendChild(categoryOne)
    category.appendChild(categoryTwo)
    wholeDiv.appendChild(iconsRow)
    wholeDiv.appendChild(category)
    parent.appendChild(wholeDiv);      
    StepAndIng(json);
  }
  
  function StepAndIng(json){
    let steps = json.steps
    
    stepDiv = document.getElementById("steps");
    for (const step of steps){
        const div = document.createElement('div')
        const ptag = document.createElement('p')
        ptag.innerHTML = step
        ptag.contentEditable = true
        ptag.classList.add('bg-secondary'  ,'container','border-primary' ,'p-2')
        ptag.appendChild(document.createElement('br'))
        div.appendChild(ptag)
        stepDiv.appendChild(div)
    }
    let ings = json.ingredients
    ingDiv = document.getElementById("ingridients");      
    
    for (const step of ings){
        const div = document.createElement('div')
        div.classList.add("d-flex" , "flex-wrap")
        const ptag = document.createElement('p')
        ptag.contentEditable = true
        ptag.classList.add('bg-secondary'  ,'container','border-primary' ,'p-2')
        ptag.innerHTML = step
        ptag.classList.add("d-flex","flex-wrap")         
        div.appendChild(ptag)
        ingDiv.appendChild(div)
    }

  }

function sendPatch(){
    const newName =name.innerHTML
    const newDesc = description.innerHTML
    const newPeople = parseInt(servingText.innerHTML)
    const newCookTime = parseInt(prepTimeTest.innerHTML)
    const newFasting = fastingCheckBox.checked
    const newType = categoryTwo.innerHTML

    const newSteps = []
    for (const step of stepDiv.children){
        newSteps.push(step.children[0].textContent)
    }
    const newIngs = []
    for (const step of ingDiv.children){
        newIngs.push(step.children[0].textContent)
    }
    const data = {
        name: newName,
        description: newDesc,
        people: newPeople,
        cookTime: newCookTime,
        fasting: newFasting,
        type: newType,
        steps: newSteps,
        ingredients: newIngs
    }
    // sending patch request to server
    fetch(`http://localhost:3000/recipe/${id}`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    window.location.href = 'mydishes.html'

}