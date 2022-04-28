//1. Apabila terdapat int = 4, maka outputnya 24 (prosesnya : 4*3*2*1)
int = 4;
let hasil1 = 1;
for (let i = 1; i <= int; i++) {
  hasil1 *= i;
}
console.log(hasil1);

//2. Apabila terdapat int = 8, maka outputnya 40320 (prosesnya : 8*7*6*5*4*3*2*1)
int = 8;
let hasil2 = 1;
for (let i = 1; i <= int; i++) {
  hasil2 *= i;
}
console.log(hasil2);

//3. Buatlah fungsi untuk reverse sebuah string
//Apabila input = “abcde”, maka outputnya = “edcba”
input = "abcde";
let hasil3 = "";
for (let i = input.length - 1; i >= 0; i--) {
  hasil3 += input[i];
}
console.log(hasil3);

// 4. Buatlah fungsi untuk menampilkan jumlah digit angka tergantung dimana posisi atau tempat dari angka dalam sebuah string “9.86-A5.321”!

input = "9.86-A5.321";
let hasil4 = "";
for (let i = 0; i < input.length; i++) {
  if (input[i] === ".") {
    continue;
  }
  if (input[i] === "-") {
    continue;
  }
  if (input[i] === "A") {
    continue;
  }
  if (input[i] === "a") {
    continue;
  }
  hasil4 += input[i];
}
console.log(hasil4);

//5. Ketik kode untuk swap 2 integer variables tanpa VARIABLE TAMBAHAN
//Contoh : let a = 3, let b = 7 => hasilnya a = 7, b = 3
let a = 3;
let b = 7;
let temp = a;
a = b;
b = temp;
console.log(a, b);

// 6. Buatlah fungsi konvert integer ke string sebagai berikut :
// int : 4, maka outputnya adalah : empat
// int : 20, maka outputnya adalah : dua puluh
// int : 39, maka outputnya adalah : tiga puluh sembilan
// int : 104, maka outputnya adalah : silahkan masukkan bilangan 1-100
int = 4;
let hasil6 = "";
if (int <= 1 && int >= 100) {
  hasil6 = String(int); //konversi integer ke string
} else if (int < 0 && int > 100) {
  hasil6 = "silahkan masukkan bilangan 1-100";
}
console.log(hasil6);

// 7. Apabila terdapat sebuah data :
// array data =  [1,4,7,9,12],
// int low = 2,
// int high = 15,
// maka outputnya adalah [4,7,9,12]
data = [1, 4, 7, 9, 12];
low = 2;
high = 15;
let hasil7 = [];
for (let i = 0; i < data.length; i++) {
  if (data[i] >= low && data[i] <= high) {
    hasil7.push(data[i]);
  }
}
console.log(hasil7);

// 8. Apabila terdapat sebuah data :
// array data =  [1,4,7,9,12],
// int low = 2,
// int high = 15,
// maka outputnya adalah [4,7,9,12]
// untuk menghasilkan output total ada berapa angka yg termasuk dari bagian low dan high
// array data =  [1,4,7,9,12],
// int low = 2,
// int high = 15,
// maka akan menghasilkan ouput = 4
data = [1, 4, 7, 9, 12];
low = 2;
high = 15;
let hasil8 = 0;
for (let i = 0; i < data.length; i++) {
  if (data[i] >= low && data[i] <= high) {
    hasil8++;
  }
}
console.log(hasil8);

//9. Apabila terdapat int = 15, maka akan mencetak output berikut :
// 1
// 2
// Edu
// 4
// Work
// 6
// 7
// 8
// Edu
// 10
// 11
// Edu
// 13
// 14
// EduWork

// keterangan : string edu untuk kelipatan 3, string work untuk kelipatan 5, string eduwork untuk kelipatan 3 dan 5
int = 15;
let hasil9 = "";
for (let i = 1; i <= int; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    hasil9 += "EduWork";
  } else if (i % 3 === 0) {
    hasil9 += "Edu";
  } else if (i % 5 === 0) {
    hasil9 += "Work";
  } else {
    hasil9 += i;
  }
}
console.log(hasil9);

// 10. Buatlah fungsi untuk menentukan bilangan terkecil dan terbesar dari sebuah array
// Contoh : array [4,2,6,88,3,11]
// Maka outputnya adalah low : 2, high : 88
// dilarang menggunakan built in function
array = [4, 2, 6, 88, 3, 11];
let hasil10 = {
  low: array[0],
  high: array[0],
};
for (let i = 0; i < array.length; i++) {
  if (array[i] < hasil10.low) {
    hasil10.low = array[i];
  }
  if (array[i] > hasil10.high) {
    hasil10.high = array[i];
  }
}
console.log(hasil10);

//11. Buatlah fungsi untuk mengecek tahun kabisat
// input : 2021
// output : 2021 bukan tahun kabisat
// input : 2024
// output : 2024 adalah tahun kabisat
input = 2021;
let hasil11 = "";
if ((input % 4 === 0 && input % 100 !== 0) || input % 400 === 0) {
  hasil11 = "tahun kabisat";
} else {
  hasil11 = "bukan tahun kabisat";
}
console.log(hasil11);
