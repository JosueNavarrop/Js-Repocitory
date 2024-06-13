// Imprecion en consola
// console.log("Hello Word!")

//Suma con impresion en consola
// console.log(23 + 12)

//Declaracion de variables
let a = 13
let b = 13

//Una funcion que retorna una suma
function suma(a, b) {
    return a + b;
}

//Declarando, iniciando y imprimiendo una variable de tipo string 
let messages;
messages = "Hola mundo!!";
// console.log(messages);

//Alertas 
let alerta = "ESTO ES UNA ALERTA!"

// alert(alerta);

//Declaracion de variables multiples
let user = 'Josue Navarro', age = 20, description = 'dev'

//Variables con diferentes significados 
apple = "manzana"
APPLE = "MANZANA"

//Constantes
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";



//Array of colors
const backgroundColors = [
    "#2C3E50", // Midnight Blue
    "#34495E", // Wet Asphalt
    "#2C2C2C", // Dark Gray
    "#616A6B", // Grayish Blue
    "#4A235A", // Purple
    "#2F4F4F", // Dark Slate Gray
    "#0E4B5A", // Teal
    "#36454F", // Charcoal
    "#2C3E50", // Midnight Blue (repeated)
    "#800020", // Burgundy
    "#FF5733", // Orange
    "#C70039", // Red
    "#900C3F", // Dark Red
    "#581845", // Purple
    "#1ABC9C", // Turquoise
    "#16A085", // Green Sea
    "#27AE60", // Green
    "#2ECC71", // Emerald
    "#F1C40F", // Yellow
    "#F39C12", // Orange
    "#E67E22", // Carrot
    "#D35400", // Pumpkin
    "#E74C3C", // Alizarin
    "#C0392B", // Red
    "#ECF0F1", // Clouds
    "#BDC3C7", // Silver
    "#95A5A6", // Concrete
    "#7F8C8D", // Asbestos
    "#2980B9", // Belize Hole
    "#3498DB", // Peter River
    "#9B59B6", // Amethyst
    "#8E44AD", // Wisteria
    "#34495E", // Wet Asphalt (repeated)
    "#2C3E50", // Midnight Blue (repeated)
    "#F5B041", // Saffron
    "#F8C471", // Peach
    "#FAD7A0", // Light Orange
    "#D5DBDB", // Light Gray
    "#AAB7B8", // Grayish
    "#7D3C98", // Plum
    "#6C3483", // Dark Plum
    "#2471A3", // Medium Blue
    "#1F618D", // Dark Blue
    "#148F77", // Aquamarine
    "#117A65", // Deep Green
    "#52BE80", // Pastel Green
    "#45B39D", // Medium Turquoise
    "#76D7C4", // Light Turquoise
    "#73C6B6", // Turquoise Blue
    "#F7DC6F", // Pale Yellow
    "#F4D03F", // Bright Yellow
    "#F0B27A", // Tan
    "#EB984E", // Light Pumpkin
    "#DC7633", // Orange
    "#CD6155", // Soft Red
    "#A93226", // Wine Red
    "#884EA0", // Purple Haze
    "#633974", // Purple Dark
    "#5499C7", // Light Blue
    "#2980B9", // Medium Blue
    "#2471A3", // Deep Blue
    "#1A5276", // Darker Blue
    "#1ABC9C", // Aquamarine
    "#17A589", // Green Turquoise
    "#148F77", // Turquoise Deep
    "#117864", // Deep Sea
    "#0E6655", // Sea Green
    "#D4E6F1", // Pale Blue
    "#A9CCE3", // Light Blue
    "#7FB3D5", // Sky Blue
    "#5499C7", // Light Sky Blue
    "#2980B9", // Azure
    "#1F618D", // Dark Azure
    "#1A5276", // Deep Blue Sea
    "#FDEBD0", // Light Cream
    "#FAD7A0", // Light Orange
    "#F5CBA7", // Peach
    "#EDBB99", // Light Tan
    "#E59866", // Soft Orange
    "#DC7633", // Burnt Orange
    "#CA6F1E", // Dark Pumpkin
    "#BA4A00", // Burnt Pumpkin
    "#6E2C00", // Brown
    "#873600", // Dark Brown
    "#5B2C6F", // Deep Purple
    "#4A235A", // Dark Purple
    "#2E4053", // Blue Gray
    "#212F3D", // Dark Blue Gray
    "#1C2833", // Very Dark Blue Gray
    "#17202A"  // Almost Black Blue Gray
];


//Get a random color from the array 
function randomColorSelected() {
    let randNumber = Math.floor(Math.random() * backgroundColors.length);
    return backgroundColors[randNumber];
}

//Every Click to the backgroundColorButton button the background color change 
let backgroundColorButton = document.querySelector("#backgroundColorButton");

backgroundColorButton.addEventListener('click', function randomColorSelected() {

    //Get a random color from de array.
    let randNumber = Math.floor(Math.random() * backgroundColors.length);
    let ColorParagraph = document.querySelector("#ColorParagraph");
    let colorCode = backgroundColors[randNumber];

    //Get a dynnamic variable from the CSS with the JS        
    const whiteColor = '#FFFFFF';
    document.documentElement.style.setProperty('--dynami-text-color', whiteColor);
    document.documentElement.style.setProperty('--dynamic-bg-color', colorCode);

    return ColorParagraph.innerText = colorCode;
});




//SOME EXAMNPLES AND TEST!

// backgroundColorButton = randomColorSelected();
//  let colorCode = backgroundColors[0];
// console.log(randomColorSelected());

// backgroundColors.forEach(element =>
//     console.log(element)
// );

// let colorCode = document.querySelector("ColorParagraph");

// console.log(backgroundColorButton);

// console.log(paragraphHTML);

// paragraphHTML.innerText = "colorCode";


//Acceder al ultimo elemento de un array:

/**let cities = [ "London", "New York", "Mumbai" ];

console.log(cities)

cities[cities.length - 1] = "Mexico city";

console.log(cities) */


//LLAMAR Y REFERENCIAR UNA FUNCION NO ES LO MISMO:
//LLamar: btn.onclick = FunctionExample();
//Asignar: btn.onclick = FunctionExample;