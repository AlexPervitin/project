if (4 == 9) {
   console.log('Ok!');
} else {
   console.log('Error');
}

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Mnogo');
} else {
    console.log('Ok!');
}

(num === 50) ? console.log('ok!') : console.log('Error');

const num = 51;

switch (num) {
    case 49:
       console.log('Ne verno');
       break;
    case 100:
        console.log('Ne verno');
        break;
    case 50:
        console.log('Verno');
        break;
    default:
        console.log('Ne v etot raz');
        break;                 
}