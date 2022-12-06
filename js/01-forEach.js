const letras = ["a","b","c","d"]

for (let index = 0; index < letras.length; index++) {
    const element = letras[index];
    console.log("for ",element);
}

letras.forEach(item => console.log("for each ", item));

const productos = [
    {
        title: "Burger",
        price: 121
    },
    {
        title: "Pizza",
        price: 20
    },
    {
        title: "French Potatos",
        price: 15
    }
];

const appli = document.querySelector("#app")
productos.forEach(item => {
    console.log(`${item.title}`)
    appli.innerHTML += `
        <li>${item.title} - ${item.price}</li>
    `
})