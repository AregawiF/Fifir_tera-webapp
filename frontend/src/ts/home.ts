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
        .then((data:any) => { 
            const randomIndex = Math.floor(Math.random() * data.length);
            showRandom(data[randomIndex])
        });
}, 2500)


  function showRandom(json:any){
    console.log(json)
    const parent:any = document.getElementById("random");
    parent.addEventListener('click' , () => {
        const id:string= json._id
        sessionStorage.setItem('id', id); // Fix: Use correct syntax for setting an item in sessionStorage
        
        window.location.href = 'singledish.html'
    })

    const img:any=document.getElementById('img');
    const description:any=document.getElementById('description');
    img.src = json.thumbnail;
    img.style.width = "50%"
    img.style.height = "50%"

    description.innerHTML=json.description;
  }