const blackSquare = '██';
const whiteSquare = '  ';
let chBoard = '';

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    if (i % 2) {
      chBoard += j % 2 ? whiteSquare : blackSquare
    }
    else {
      chBoard += j % 2 ? blackSquare : whiteSquare
    }
  }
  chBoard += '\n';
}

console.log(chBoard);

