var catalogo = require("./database/catalogo.json");
// console.log(catalogo);
var catalogoString = JSON.stringify(catalogo);
// console.log(catalogoString);
var catalogoObj = JSON.parse(catalogoString);
// console.log(catalogoObj);

function listarTodosOsFilmes(filmes) {
  for (let i = 0; i < filmes.length; i++) {
    console.log(filmes[i].titulo);
  }
}

 function listarFilmesEmCartaz(filmes){
  const filmesEmCartaz = filmes.filter((filme)=>{
    if (filme.emCartaz===true){
      return true;
    }
  })


  }
//listarTodosOsFilmes(catalogoObj.data);
console.log (listarFilmesEmCartaz(catalogoObj.data))
