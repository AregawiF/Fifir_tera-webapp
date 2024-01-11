fetch("http://localhost:3000/recipe/")
.then(res => res.json())
.then(json => display(json))

function display(json){
    let contain = document.getElementById('contain')
    contain.innerHTML = '';
    const arr = json
    
    
    for (let iter of arr){
      const flex = document.createElement('div');
      flex.classList.add('d-flex','bg-white','m-3');
      // Image part
      const img = document.createElement('img');
      img.src = iter.image;
      img.classList.add('img-fluid');
      img.style.width = '10%';
      img.style.height = '10%';
      flex.appendChild(img);
      // Title
      const title = document.createElement('p');
      title.innerHTML = iter.name;
        flex.appendChild(title);
        // Description
      const description = document.createElement('p');
      description.classList.add('m-3');
      description.textContent = iter.description;
      flex.appendChild(description);
      // Buttons
        //Delete
        const button = document.createElement('button');
        button.classList.add('btn', 'btn-danger', 'm-3');
        button.textContent = 'Delete';
        button.onclick = () => {
          
          const isConfirmed = window.confirm('Are you sure you want to delete?');
          if (isConfirmed) {
            fetch(`http://localhost:3000/recipe/${iter._id}`, {
            method: 'DELETE',
          })
          window.location.reload();
          }    
        }
        flex.appendChild(button);

        //Edit
        const edit = document.createElement('button');
        edit.classList.add('btn', 'btn-warning', 'm-3');
        edit.onclick = () => {
          sessionStorage.setItem('idValue', iter._id);
          window.location.href = 'editdish.html'
        }
        edit.textContent = 'Edit';
        flex.appendChild(edit);
        // Append to body
      contain.appendChild(flex);      
    }
    document.body.appendChild(contain);



}