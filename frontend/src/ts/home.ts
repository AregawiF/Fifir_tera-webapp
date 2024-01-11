setInterval(()=>{
    let iD = 1 + Math.floor(Math.random() * (50 - 1 + 1) + 1);
    fetch(`https://dummyjson.com/products/${iD}`)
    .then(res => res.json())
    .then(json => showRandom(json));
}, 5000)

  function showRandom(json:any){
      console.log(json)
      const parent:any = document.getElementById("random");
      const img:any=document.getElementById('img');
      const description:any=document.getElementById('description');
      img.src = json.thumbnail;
      img.style.width = "50%"
      img.style.height = "50%"

      description.innerHTML=json.description;
  }