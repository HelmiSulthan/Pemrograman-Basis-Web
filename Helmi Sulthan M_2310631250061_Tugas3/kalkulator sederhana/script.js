let num1 = prompt("Masukan angka");
let operasi = prompt("- , + , x , /");
let num2 = prompt("Masukan angka");
let hasil;

num1 = parseFloat(num1)
num2 = parseFloat(num2)

switch (operasi) {
    case "-":
        hasil = num1 - num2;
        alert(hasil)
        break;
    case "+":
        hasil = num1 + num2;
        alert(hasil)
        break;
    case "x":
        hasil = num1 * num2;
        alert(hasil)
        break;
    case "/":
        hasil = num1 / num2;
        alert(hasil)
        break;

    default:
        alert("Tidak Valid")
        break;
}


