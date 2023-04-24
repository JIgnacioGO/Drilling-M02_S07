var numero1 = parseInt(prompt("Ingrese un numero"));
var numero2 = parseInt(prompt("Ingrese un numero"));

if (numero1 < numero2) {
  alert(numero2 + " es mayor que " + numero1);
} else if (numero1 > numero2) {
  alert(numero1 + " es mayor que " + numero2);
} else if (numero1 == numero2) {
  alert(numero1 + " es igual que " + numero2);
}
