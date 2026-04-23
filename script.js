// 1. Seleccionamos TODOS los elementos necesarios
const redBtn = document.querySelector('.red-btn');
const grayBtn = document.querySelector('.gray-btn'); // Añadimos esta línea
const cartButton = document.getElementById('cartButton');
const imageCard = document.querySelector('.image-card');


redBtn.addEventListener('click', function() {
    cartButton.style.backgroundColor = 'red';
    // Imagen del Mercedes rojo
    imageCard.style.backgroundImage = "url('https://wallpapers.com/images/featured-full/mercedes-benz-c300-jtn6bsdknk7nmigd.jpg')"; 
});


grayBtn.addEventListener('click', function() {
    cartButton.style.backgroundColor = '#333'; // Volvemos al color oscuro o gris
    // Imagen del Mercedes gris
    imageCard.style.backgroundImage = "url('https://www.larevueautomobile.com/images/fiche-technique/2018/Mercedes/Classe-C-Coupe/Mercedes_Classe_C_Coupe_003.jpg')"; 
});