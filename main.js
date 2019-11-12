function convertToRoman(num) {
  let roman = '';

  let hundreds = function(thirdChar) {
    switch(thirdChar) {
      case 1:
        roman = roman + 'C';
        break;
      case 2:
        roman = roman + 'CC';
        break;
      case 3:
        roman = roman + 'CCC';
        break;
      case 4:
        roman = roman + 'CD';
        break;
      case 5:
        roman = roman + 'D';
        break;
      case 6:
        roman = roman + 'DC';
        break;
      case 7:
        roman = roman + 'DCC';
        break;
      case 8:
        roman = roman + 'DCCC';
        break;
      case 9:
        roman = roman + 'CM';
        break;
    }
  }

  let tens = function(secondChar) {
    switch(secondChar) {
      case 1:
        roman = roman + 'X';
        break;
      case 2:
        roman = roman + 'XX';
        break;
      case 3:
        roman = roman + 'XXX';
        break;
      case 4:
        roman = roman + 'XL';
        break;
      case 5:
        roman = roman + 'L';
        break;
      case 6:
        roman = roman + 'LX';
        break;
      case 7:
        roman = roman + 'LXX';
        break;
      case 8:
        roman = roman + 'LXXX';
        break;
      case 9:
        roman = roman + 'XC';
        break;
    }
  }

  let firstTens = function(firstChar) {
    switch(firstChar) {
      case 1:
        roman = roman + 'I';
        break;
      case 2:
        roman = roman + 'II';
        break;
      case 3:
        roman = roman + 'III';
        break;
      case 4:
        roman = roman + 'IV';
        break;
      case 5:
        roman = roman + 'V';
        break;
      case 6:
        roman = roman + 'VI';
        break;
      case 7:
        roman = roman + 'VII';
        break;
      case 8:
        roman = roman + 'VIII';
        break;
      case 9:
        roman = roman + 'IX';
        break;
    }
  }

  let str = num.toString(10);

  switch (str.length) {
    case 4:
      let thousands = +str[0];
      for (let i = 0; i < thousands; i++) {
        roman = roman + 'M';
      }

      hundreds(+str[1]);
      tens(+str[2]);
      firstTens(+str[3]);

      break;
    case 3:
      hundreds(+str[0]);
      tens(+str[1]);
      firstTens(+str[2]);

      break;
    case 2:
      tens(+str[0]);
      firstTens(+str[1]);

      break;
    case 1:
      firstTens(+str[0]);
      break;
  }

  document.getElementById('outputText').innerHTML = roman;
}

// convertToRoman(3676);
