let num = 20; // Variable maxima a la que se evaluara es 20
function parImpar(num) {
    for (var i = 1; i <= num; i++) {
        if (i % 2 === 0) { // Evalua si es par verificando si es divisible por 2
            console.log(i + " " + "par")
        } else { // De otra forma evalua impar
            console.log(i + " " + "impar")
        }
    }
}
parImpar(num);