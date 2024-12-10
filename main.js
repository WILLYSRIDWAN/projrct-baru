// let nama = 'willridwan';
// let usia = 24;
// let tinggiBadan = 174.5;
// let beratBadan = 65;
// let pacar = null

// if(pacar == null) {
//     pacar = 'belum punya'
// }else{
//     pacar = 'sudah punya '
// }

// alert(
//     `Nama saya ${nama} usia saya ${usia} tinggi badan saya ${tinggiBadan}Cm berat badan saya ${beratBadan}Kg pacar saya ${pacar}`,
// )

// const result = 50 / 0;
// console.log(result); 

// 



// const age = 24;
// const massege =`umurku` + age;

// console.log(massege)

// let nama = 'willridwan'
// let agama = 'islam'
// let usia = 24
// let beratBadan = 64
// let tinggiBadan = 175.5

// let  pacar = null

// if(pacar == )

// alert(`nama saya adalah ${nama} agama saya adalah ${agama} umur saya adalah ${usia} beratbadan saya adalah ${beratBadan} tinggibadan saya adalah ${tinggiBadan} saya ${pacar}pacar`)


// function convertCelsiusToFahrenheit(temperature) {
//     const temperatureInFahrenheit = 9 / 5 * temperature + 32;
   
//     console.log('Hasil konversi:', temperatureInFahrenheit);
//   }


// function convertCelsiusToFahrenheit(temperature) {
//     const temperatureInFahrenheit = (9 / 5) * temperature + 32;
  
//     console.log('Hasil konversi:', temperatureInFahrenheit);
//   }
  
//   const temperatureInCelsius = 90;
  
  
//   console.log(convertCelsiusToFahrenheit);
  
  
  
//   convertCelsiusToFahrenheit(temperatureInCelsius);

// function convertCelsiusToFahrenheit(temperature) {
//     const temperatureInFahrenheit = (9 / 2) * temperature + 32;
//     console.log('hasil konversi:', temperatureInFahrenheit);
// }

// const temperatureInCelsius = 100;
// convertCelsiusToFahrenheit(temperatureInCelsius);





// function convertCelsiusToFahrenheit(temperature = 50) {
//     const temperatureInFahrenheit = 9 / 5 * temperature + 32;
   
//     console.log('Hasil konversi:', temperatureInFahrenheit);
//   }

//   convertCelsiusToFahrenheit(50);



// const result = console.log('willridwan');
// console.log(result);

// function sumNumbers(a, b) {
// const result =a + b;
// return result;
// }


// function convertCelsiusToFahrenheit(temperature) {
//     const result = (9 / 5) * temperature + 32;
//     return result;
//   }
  
//   const temperatureInFahrenheit = convertCelsiusToFahrenheit(90);
//   console.log('Hasil konversi:', temperatureInFahrenheit);




// const convertCelsiusToFahrenheit = function (temperature){
// const result = (10 / 2) *temperature + 50; 
// return result;
// }

// const temperatureInFahrenheit = convertCelsiusToFahrenheit(90);
// console.log('Hasil konversi:', temperatureInFahrenheit);





// function multiply(a, b) {
//     return a * b;
//   }
  
//   function calculate(operation, numA, numB) {
//     return operation(numA, numB);
//   }
  
//   const result = calculate(multiply, 2, 4);
//   console.log(result);


// console.log(9 / 5 * 50 + 32);
// console.log(9 / 5 * 70 + 32);
// console.log(9 / 5 * 100 + 32);
 
// convertCelsiusToFahrenheit(50); 
// convertCelsiusToFahrenheit(90); 
// convertCelsiusToFahrenheit(100); 

  
//  function hello(name, oragin = "bandung") {
//  return =`hello! nama saya adalah ${name}. saya tinggal di ${origin}.`;
//  }

//  let rahmat = hello ('rahmat', 'semarang');
//  let yogi = hello ('yogi');

//  console.log(rahmat);
//  console.log(yogi);









//Mengakses menggunakan square bracket
// const user = {
//     name:'dikoding',
//     'user name':'indonesia',
//     age: 9,
// }

// console.log(user.name);

// console.log(user['user name']);

// console.log(user.age);




// const user = {
//     name:'dikoding',
//     'lastName':'indonesia',
//     age: 9,
// }

// const{name, lastName, age} = user;
// console.log(name,lastName, age);






//Mengakses menggunakan object destructuring
// const user = {
//     name:'WillRidwan',
//     umur:'24tahun',
//     tinggiBadan:175.5,
//     beratBadan:65,
//     email:'willridwan27@gmail.com',
//     password:'willysridwan27#',
// }

// const {name, umur, tinggiBadan, beratBadan, email, password} = user;

// console.log(name,umur,tinggiBadan,beratBadan,email,password);




// Mengubah Nilai di Properti Object
// const account = {
//     balance: 1000,
//     debt: 10,
//   };
  
//   account.balance = 2000;
//   console.log(account.balance); // Output: 2000


// const user = {
//     'name': 'Dicoding',
//     'last name': 'Indonesia',
//     age: 9,
//   };
  
//   delete user.age;
//   console.log(user); // Output: { name: 'Dicoding', 'last name': 'Indonesia' }


//Selain menggunakan dot notation (.), kita juga bisa menggunakan operator delete dengan tanda kurung siku seperti berikut ini.

// const user = {
//     'name': 'Dicoding',
//     'last name': 'Indonesia',
//     age: 9,
//   };
  
//   delete user['age'];
//   console.log(user); // Output: { name: 'Dicoding', lastName: 'Indonesia' }




// const foo = array.from('foo');
// console.log(foo);


// const users = new array();
// console.log(users);

// tentang array
// let namaGuru =['dean', 'bagus', 'putry']
// namaGuru.push('willy','salsa')
// namaGuru.shift()
// namaGuru.pop()
// alert(namaGuru);




// Lalu, bagaimana caranya untuk mengubah nilai element ke-2? Perhatikan langkahnya seperti berikut ini.
// const myArray = [1, 2, 3, 4, 5];
// myArray[1] = 10;
// console.log(myArray); // Output: [1, 10, 3, 4, 5]



// lalu, bagaimana caranya kita ingin menghapus dua element dari array?
// const myArray = ['Android', 'Data Science', 'Web'];
// myArray.splice(1, 2);
// console.log(myArray); // Output: ['Android'']


// const introduction = ['Hello', 'Arsy'];
// const [greeting, name] = introduction;
// console.log(greeting); // Output: Hello





// dengan memakai sort, untuk mengurutkan dengan benar dalam nilai Array.
// const myArray = ['Web', 'Android', 'Data Science'];
// myArray.sort();
// console.log(myArray); // Output: [ 'Android', 'Data Science', 'Web' ]


// const myArray = ['1', '4','6','3','2','5'];
// myArray.sort();

// alert(myArray);



// const productMap = new Map([
//     ['shoes', 500],
//     ['cap', 350],
//     ['jeans', 250]
//   ]);
  
//   console.log(productMap);



// const productMap = new Map([
//     ['shoes', 500],
//     ['cap', 350],
//     ['jeans', 250]
//   ]);
  
//   console.log(productMap);



//Untuk menyimpan nilai ke dalam map, gunakanlah method set. 
// const map = new Map();
// map.set('name', 'aras');
// console.log(map); // Map(1) { 'name' => 'aras' }



//Setelah berhasil menyimpan nilai ke dalam map, kita dapat mengakses nilainya berdasarkan key tertentu dengan method get.
// const map = new Map();
// map.set('name', 'aras');
// console.log(map.get('name')); // Output: aras




// Menghapus nilai di map dapat menggunakan method delete. 
// const map = new Map();
// map.set('name', 'aras');
// map.set('last name', 'opraza');
// map.delete('last name');
// console.log(map); // Map(1) { 'name' => 'aras' }


// const  map = new Map();
// map.set('name', 'willridwan');
// console.log(map);




// Menyimpan Nilai di Set
// const set = new Set();
// set.add(1);
// set.add('Apple');
// set.add(1);
// set.add('Apple');

// console.log(set); // Output: Set { 1, 'Apple' }




// Mengakses Nilai di Set
// Set memiliki perbedaan untuk cara mengakses nilainya yaitu menggunakan perulangan (looping). Cara pertama adalah menggunakan keyword for seperti berikut ini.
// const set = new Set();
// set.add(1);
// set.add(2);

// for (const number of set) {
//   console.log(number); // Output: 1, 2
// }


// Object
// Spread operator di object dapat dilakukan seperti berikut ini.
// const obj1 = { name: 'Dicoding' };
// const obj2 = { lastName: 'Indonesia', address: 'Jl. Batik Kumeli No 50' };
// const newObj = { ...obj1, ...obj2 };

// console.log(newObj); // Output: { name: 'Dicoding', lastName: 'Indonesia', address: 'Jl. Batik Kumeli No 50' }


// spread operator juga mempermudah untuk menyalin object seperti berikut ini.
// const originalObj = { name: 'Dicoding', age: 9 };
// const copiedObj = { ...originalObj };

// console.log(copiedObj); // Output: { name: 'Dicoding', age: 9 }



// Array
// Selain di object, spread operator juga dapat digunakan di array seperti berikut ini.
// const array1 = ['Dicoding'];
// const array2 = ['Indonesia', 'Jl. Batik Kumeli No 50'];
// const newArray = [...array1, ...array2];

// console.log(newArray);




// Rest Operator
// Cara menggunakan rest parameter adalah dengan menambahkan tiga titik (...) sebelum parameter terakhir. 
// function myFunc(...manyMoreArgs) {
//     console.log('manyMoreArgs', manyMoreArgs);
//   }
  
//   myFunc('one', 'two', 'three');




// Karena rest parameter menangani argument sebagai array, method array.length juga dapat digunakan pada rest parameter seperti berikut ini.
// function myFunc(...manyMoreArgs) {
//     console.log(manyMoreArgs.length);
//     console.log('manyMoreArgs', manyMoreArgs);
//   }
  
//   myFunc('one', 'two', 'three');





// Selain pada parameter fungsi, rest operator juga kerap digunakan ketika kita melakukan destructuring array untuk menangkap seluruh sisa elemen terakhir dalam bentuk array.
// const favorites = ['Nasi Goreng', 'Mie Goreng', 'Ayam Bakar', 'Tahu', 'Tempe'];

// const [first, second, ...rest] = favorites;

// console.log(first);
// console.log(second);
// console.log(rest);


// rest operator juga kerap digunakan ketika kita melakukan destructuring array untuk menangkap seluruh sisa elemen terakhir dalam bentuk array.
// const favorites = ['Nasi Goreng', 'Mie Goreng', 'Ayam Bakar', 'Tahu', 'Tempe'];

// const [first, second, ...rest] = favorites;

// console.log(first);
// console.log(second);
// console.log(rest);

/**
 * output:
 * Nasi Goreng
 * Mie Goreng
 * [ 'Ayam Bakar', 'Tahu', 'Tempe' ]
 */