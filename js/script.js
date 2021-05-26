// 1
let x=5;
console.log(x++); // 5
// 2
let z = [] + false - null + true; //NaN
console.log(z);
// 3
let y = 1;
x = y = 2;
console.log(x); // 2
// 4
let m = [] + 1 + 2;
console.log(m); // 12
// 5
console.log(('521'[0])); // 5
// 6
console.log(2 && 1 && null && 0 && undefined); // null потому что null это false,
                                               // 'и' запинается на лжи, 'или' на правде 
// 7
console.log(!!(2 + 2));
console.log((2 + 2));  // первое выражение это булиновое значение
// 8
console.log(null || 2 && 3 || 4);  // 3, потому что по таблице приоритетов операторов
// 9
let a = [1, 2, 3];
let b = [1, 2, 3];

if (a == b) {
    console.log(true);
} else {
    console.log(false); 
}                         // a не равно b, потому что это разные хранилища

// 10
console.log(+"Infinity"); // Infinity, потому что это бесконечность

// 11
console.log('Ёжик' > 'яблоко'); // false 

//12 

console.log(0 || '' || 2 || undefined || true || false); // 2