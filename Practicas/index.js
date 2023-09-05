const resp = fetch('https://reqres.in/api/users?page=2');

resp.then(response=>response.json())
.then((json) =>{ 
    console.log(json.data);
    let htmlX = "";
    let htmlModal = "";
    let content =document.getElementById('container')
    
    json.data.forEach(element => {
    let htlmCard = `

    <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">email</th>
      <th scope="col">first name</th>
      <th scope="col">last name</th>
      <th scope="col">avatar</th>
      <th scope="col">otros</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">${element.id}</th>
      <th scope="row">${element.email}</th>
      <th scope="row">${element.first_name}</th>
      <th scope="row">${element.last_name}</th>
      <th scope="row"> <img src='${element.avatar}'></th>
      <th><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Detalles
    </button><th>
    </tr>
  </tbody>
</table>
    `

    htmlModal = `
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Me quiero morir</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <img src="${element.avatar}" class="card-img-top" alt="...">
        <h1 id="container">${element.first_name}</h1>
        <h4 id="container">${element.last_name}</h4>
        <h4 id="container">#${element.id}</h4>
        <p id="container">${element.email}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>
  </div>
    `

    htmlX = htmlX+htlmCard+htmlModal;
});

content.innerHTML= htmlX;
});