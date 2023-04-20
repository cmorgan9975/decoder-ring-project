const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const trueAlphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  function hasDuplicateValues(newAlphabetArray) {
    return newAlphabetArray.some((character) => {
      return newAlphabetArray.filter((index) => character === index).length > 1;
    });
  }

  function getArrayFromString(string) {
    return Array.from(string);
  }

  function encodeMessage(inputArray, newAlphabetArray) {
    return inputArray
      .map((character) => {
        if (character === " ") {
          return character;
        } else {
          let desiredLetter = trueAlphabet.find(
            (letter) => letter === character
          );
          return newAlphabetArray[trueAlphabet.indexOf(desiredLetter)];
        }
      })
      .join("");
  }

  function decodeMessage(inputArray, newAlphabetArray) {
    return inputArray
      .map((character) => {
        if (character === " ") {
          return character;
        } else {
          let desiredCharacter = newAlphabetArray.find(
            (indexCharacter) => indexCharacter === character
          );
          return trueAlphabet[newAlphabetArray.indexOf(desiredCharacter)];
        }
      })
      .join("");
  }

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }
    if (!input) {
      return false;
    }

    const inputArray = getArrayFromString(input.toLowerCase());
    const newAlphabetArray = getArrayFromString(alphabet.toLowerCase());

    if (hasDuplicateValues(newAlphabetArray)) {
      return false;
    }
    if (encode) {
      return encodeMessage(inputArray, newAlphabetArray);
    }
    if (!encode) {
      return decodeMessage(inputArray, newAlphabetArray);
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
