let num = 20;
function parImpar(num) {
    for (var i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            console.log(i + " " + "par")
        } else { 
            console.log(i + " " + "impar")
        }
    }
}
parImpar(num);