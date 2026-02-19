const input1El = document.getElementById("input1");
const input2El = document.getElementById("input2");
const devise1El = document.getElementById("devise1");
const devise2El = document.getElementById("devise2");
const showvalueEl = document.querySelector(".showvalue");

// ici on a mis des addiListener pour executer la fonction UpdateRate qui va nous donner en live les conversions
input1El.addEventListener("input", ()=>{
    updateRate();
})

devise1El.addEventListener("change" , ()=>{
    updateRate();
})

devise2El.addEventListener("change", ()=>{
    updateRate();
})

updateRate();

function updateRate()
{  // fetch permet de collecter des resource depuis une API 
    fetch(`https://v6.exchangerate-api.com/v6/117d5d2eb5ef8ecec9eabf38/latest/${devise1El.value}`)
        .then( (Response) => Response.json()) // Ensuite faut transformer les ressources en fichiers json lisibles
        // Ensuite on manipule la data avec consoe.log pour voir ou se trouve les conversions notamment ici c'est dans conversions_rates
        .then( (data) => {
            const rate = data.conversion_rates[devise2El.value];
             showvalueEl.innerText = ` 1 ${devise1El.value} = ${rate + " " + 
               devise2El.value}  `
               input2El.value = (input1El.value * rate).toFixed(3) 
               // On multiple la valeur trouver par la valeur du input1 et on affiche le resultat 3 chiffres apres la virgule avec toFixed
        })
}