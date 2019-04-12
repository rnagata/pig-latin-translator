'use strict';

const testInput = 'lock and load';

function translate(input){
  const vowels = ['A', 'E', 'I', 'O', 'U']
  const processedInput = input.split(' ');
  let result;
  
  processedInput.forEach(function(word, index, array){
    if (vowels.includes(word.charAt(0).toUpperCase())){
      word = word.concat(`-ay`);
      array[index] = word;
      return;
    }

    let firstVowel = word.search(/A|E|I|O|U]/i);
    let wordFront = word.substring(firstVowel);
    let wordEnd = word.substring(0, firstVowel).concat(`ay`);
    word = `${wordFront}-${wordEnd}`;
    array[index] = word;
  });

  result = processedInput.join(' ');
  return result;
}

console.log(translate(testInput));