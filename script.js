let char = '';

function randNum() {
    return (
        (Math.floor(Math.random() * 1000 + 1))/10
    );
}

function leftRightGen(array) {
    let randomNum = randNum();
    if (randomNum <= 50) {
        char = 'L';
    } else {
        char = 'R';
    }
    if (array.length >= 2) {
        if (array[array.length - 1] == array[array.length - 2]){
            if (array[array.length - 1] == 'L') {
                char = 'R';
            } else {
                char = 'L';
            }
        }
    }
    return char;
}

function leftRightKickGen(array) {
    let randomNum = randNum();
    const charArray = ['L', 'R', 'K'];
    if (randomNum <= 33.3) {
        char = charArray[0];
    } else if (randomNum > 33.3 && randomNum <= 66.6) {
        char = charArray[1];
    } else {
        char = charArray[2];
    }
    if (array.length >= 2) {
        if (array[array.length - 1] == array[array.length - 2]) {
            let newCharArray = charArray.filter(function(item) {
                return item != array[array.length - 1];
            })
            randomNum = randNum();
            if (randomNum <= 50) {
                char = newCharArray[0];
            } else {
                char = newCharArray[1];
            }
        }
    }
    return char;
}


// Array 1 - Straight time, L and R, 16 characters
const array1 = [];
for (let i = 0; i < 16; i++) {
    array1.push(leftRightGen(array1));
}

// Array 2 - Straight time, L, R, and K, 16 characters
const array2 = [];
for (let i = 0; i < 16; i++) {
    array2.push(leftRightKickGen(array2));
}

// Array 3 - Swung time, L. R, 12 characters
const array3 = [];
for (let i = 0; i < 12; i++) {
    array3.push(leftRightGen(array3));
}

// Array 4 - Swung time, L, R, and K, 12 characters
const array4 = [];
for (let i = 0; i < 12; i++) {
    array4.push(leftRightKickGen(array4));
}



// DOM Code



const arrayOneContent = document.querySelector('#array1');
arrayOneContent.textContent = array1.join(' ');

const arrayTwoContent = document.querySelector('#array2');
arrayTwoContent.textContent = array2.join(' ');

const arrayThreeContent = document.querySelector('#array3');
arrayThreeContent.textContent = array3.join(' ');

const arrayFourContent = document.querySelector('#array4');
arrayFourContent.textContent = array4.join(' ');

const button = document.querySelector('#button-generator');

button.addEventListener('click', () => {
    window.location.reload();
})