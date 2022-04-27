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
   return filmes.filter((filme)=> filme.emCartaz);
  // const filmesEmCartaz = filmes.filter((filme)=>{
  //   if (filme.emCartaz===true){
  //     return true;
  //   }
  // });
  //return filmesEmCartaz;


  }
//listarTodosOsFilmes(catalogoObj.data);
console.log (listarFilmesEmCartaz(catalogoObj.data))
