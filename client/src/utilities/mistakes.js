import randomChar from "random-char";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function deleteSymbol(string) {
  const arrString = string.split("");
  const num = getRandomInt(0, arrString.length);
  arrString.splice(num, 1);
  return arrString.join("");
}

// deleteSymbol("blabla bla bla")

function addRandomSymbol(string) {
  const arrString = string.split("");
  const num = getRandomInt(0, arrString.length);
  const char = randomChar();
  arrString.splice(num, 0, char);
  return arrString.join("");
}

function swapSymbol(string) {
  const numPM = getRandomInt(-1, 1);
  const arrString = string.split("");
  const num = getRandomInt(0, arrString.length);
  [arrString[num], arrString[numPM]] = [arrString[numPM], arrString[num]];
  return arrString.join("");
}

function setField() {
  const num = getRandomInt(0, 3);

  switch (num) {
    case 0:
      return "userId";
    case 1:
      return "userName";
    case 2:
      return "address";
    case 3:
      return "phoneNumber";
    default:
      break;
  }
}

export function mistake(num, rec) {
  const recWithMist = { ...rec };
  for (let i = 0; i <= Math.floor(num); i++) {
    const numMist = getRandomInt(0, 2);
    const str = setField();
    const field = recWithMist[str];

    switch (numMist) {
      case 0:
        recWithMist[str] = addRandomSymbol(field);
        break;
      case 1:
        recWithMist[str] = deleteSymbol(field);
        break;
      case 2:
        recWithMist[str] = swapSymbol(field);
        break;
      default:
        break;
    }
  }
  return recWithMist;
}
