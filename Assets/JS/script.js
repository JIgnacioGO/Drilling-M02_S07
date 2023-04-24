// Menu
var numMenu = parseInt(
  prompt(
    "Seleccione qué desea hacer:\n1.- Calcular cuál número es mayor\n2.- Sumar\n3.- Restar\n4.- Multiplicar\n5.- Dividir\n6.- Mostrar los números ingresados\n7.- Salir"
  )
);

// Funcion - Calcular cuál número es mayor
function numeroMayor(num1, num2) {
  if (num1 > num2) {
    alert(`El número ${num1} es mayor que ${num2}`);
  } else if (num1 < num2) {
    alert(`El número ${num2} es mayor que ${num1}`);
  } else {
    alert(`Los números ${num1} y ${num2} son iguales`);
  }
}

// Funcion - Sumar
function suma(num1, num2) {
  let resultado = num1 + num2;
  alert(`La suma de los números ${num1} y ${num2} es: ${resultado}`);
}

// Funcion - Restar
function resta(num1, num2) {
  let resultado = num1 - num2;
  alert(`La resta de los números ${num1} y ${num2} es: ${resultado}`);
}

// Funcion - Multiplicar
function multiplicar(num1, num2) {
  let resultado = num1 * num2;
  alert(`La multiplicación de los números ${num1} y ${num2} es: ${resultado}`);
}

// Funcion - Dividir
function dividir(num1, num2) {
  if (num2 == 0) {
    alert("Error: no es posible dividir entre cero");
  } else {
    let resultado = num1 / num2;
    alert(`La división de los números ${num1} y ${num2} es: ${resultado}`);
  }
}

// Funcion - Mostrar los numeros ingresados
function numIngresados(num1, num2) {
  alert(`Los números ingresados son: ${num1} y ${num2}`);
}

// Eleccion de las funciones
if (numMenu >= 1 && numMenu <= 6) {
  var num1 = parseInt(prompt("Ingrese el primer numero"));
  var num2 = parseInt(prompt("Ingrese el segundo numero"));
} else if (numMenu == 7) {
  alert("Gracias por participar");
} else {
  alert("Elección incorrecta. Adios!");
}

if (numMenu == 1) {
  numeroMayor(num1, num2);
} else if (numMenu == 2) {
  suma(num1, num2);
} else if (numMenu == 3) {
  resta(num1, num2);
} else if (numMenu == 4) {
  multiplicar(num1, num2);
} else if (numMenu == 5) {
  dividir(num1, num2);
} else if (numMenu == 6) {
  numIngresados(num1, num2);
}
