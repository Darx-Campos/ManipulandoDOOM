//let titulos = document.getElementsByTagName("h1")[0].innerHTML = "<i>Yared</i>";

//titulos = document.getElementsByTagName("h1")[1].innerText = "<i>David</i>";
//console.log(titulos);

let titulos = document.getElementsByTagName("h1")

for (let i = 0; i < titulos.length; i++) {
 titulos[i].style.color = titulos[i].innerText
 

}