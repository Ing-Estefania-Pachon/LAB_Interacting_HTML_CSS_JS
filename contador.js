let contador = 0;

let mostrarValor = document.getElementById("valor");

// Función para sumar
document.getElementById("sumar").addEventListener("click", function(){

    contador ++;

    mostrarValor.textContent = contador;

    if (contador >= 10) {
        mostrarValor.style.color = "purple";
    } else {
        mostrarValor.style.color = "black";
    }
    
})

// Función para restar
document.getElementById("restar").addEventListener("click", function(){

    contador --;

    mostrarValor.textContent = contador;

    if (contador >= 10) {
        mostrarValor.style.color = "purple";
    } else {
        mostrarValor.style.color = "black";
    }
    
})