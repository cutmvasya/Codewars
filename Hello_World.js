/**
 * 8 kyu
 * Hello, Name or World!
 * https://www.codewars.com/kata/57e3f79c9cb119374600046b/train/javascript
 */

//membuat function hello dengan parameter name
function hello(name){
    //jika tidak sama dengan nama atau argumen sama dengan null
    if (!name){
        //kembalikan nilai dengan "Hello, World"
        return "Hello, World!"
    }
    //jika parameter nama memiliki nilai
    //kembalikan nilai
    return (`Hello, ` +
                //menggunakan method dari string trim() untuk menghilangkan white space
                name.trim()
                //mengubah string menjadi huruf kecil semua
                .toLowerCase()
                .replace( /\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()))
            + "!"
           );
}
console.log(hello('saNdhika gALIH'));

//cara 2

// function hello(name){
//     if (name){
//       return "Hello, " + name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase() + '!';
//     } else {
//       return "Hello, World!";
//     }
//   }
// console.log(hello('saNdhika gALIH'));

// cara 3

// const hello = s =>
//   `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;

// console.log(hello('saNdhika gALIH'));