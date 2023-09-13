var nombre = "Nestor" + (1 + 3);
var numero = 3 + 2 + "Nestor";

console.log(nombre, numero);

/* 
Hoisted = cuando se iza la variable
Scope = tipo de variable que es
Var tiene un global scope y se iza la variable al comienzo de la ejecución
pero el valor sigue en el mismo bloque, por lo que se inicializa como undefined.
Let tiene un scope de bloque tipo local, por lo que no se inicializa y arroja un ReferenceError.
*/