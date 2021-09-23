async function structurePage() {
  try {
    let reponse = await fetch("http://localhost:3000/api/cameras/");
    let data = await reponse.json();
    console.log(data);

    output = "";
    for (let i = 0; i < data.length; i++) {
      // utilisation de template literals pour afficher les données dans une structure html
      output += `
    <div class="col-12 col-lg-4 mt-5 mb-2">
    <div class="card border-white shadow ">
    
    <img class="card-img-top" src=" ${data[i].imageUrl}" alt="" />
    <div class="card-body" >
    <h5 class="card-title font-weight-bold">${data[i].name}</h5>
    <p class="card-text"> Prix : ${data[i].price / 100}€</p>
    <p class="card-text" >${data[i].description}</p>
    </div>
     <a  href="produit.html?id= ${
       data[i]._id
     }" class="button"> Voir le produit </a>
    </div>
    </div>
    `;

      //faire apparaitre les données dans la div card-container
      document.getElementById("card-container").innerHTML = output;
    }
  } catch (err) {
    console.log(err);
    document.getElementById("erreur").innerHTML =
      "<strong>Erreur de chargement</strong>";
  }
}

structurePage();
