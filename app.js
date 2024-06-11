
// Imprecion en consola
// console.log("Hello Word!")

//Suma con impresion en consola
// console.log(23 + 12)

//Declaracion de variables
let a =  13
let b  = 13

//Una funcion que retorna una suma
function suma( a, b){
    return a + b;
}

//Imprimiendo en consola el llamado que le hago a esa suma
// console.log(suma(a,b))

//Declarando, iniciando y imprimiendo una variable de tipo string 
let messages;
messages = "Hola mundo!!";
// console.log(messages);

//Alertas 
let alerta = "ESTO ES UNA ALERTA!"

// alert(alerta);

//Declaracion de variables multiples
let user = 'Josue Navarro', age = 20, description = 'dev'
// console.log(user, age, description)
// console.log(user +" " + age + " "+ description)

let paseDatos = "Hola"

let resiveDatos

resiveDatos = paseDatos

// console.log(resiveDatos)

//Variables con diferentes significados 
apple = "manzana"
APPLE = "MANZANA"

//Constantes
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
// alert(color); // #FF7F00

//Se recomienda ponerle el segundo argumento a la funcion de promp
// let AGE = prompt('Cuanntos años tiene usted?', 45)

// alert(`Usted tieen ${AGE} años de edad`)





//Array of colors
const backgroundColors = [  
    "#2C3E50",
    "#34495E",
    "#2C2C2C",
    "#616A6B",
    "#4A235A",
    "#2F4F4F",
    "#0E4B5A",
    "#36454F",
    "#2C3E50",
    "#800020"
];

//Get a random color from the array 
function randomColorSelected(){
    let randNumber = Math.floor(Math.random() * backgroundColors.length); 
    return backgroundColors[randNumber]; 
}

//Every Click to the backgroundColorButton button the background color change 
let backgroundColorButton = document.querySelector("#backgroundColorButton");

backgroundColorButton.addEventListener('click', function randomColorSelected(){
    
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
