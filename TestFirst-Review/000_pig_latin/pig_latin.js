var translate = function (str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','y','z','qu'];
  return str.split(" ").map(el => {
    if(vowels.indexOf(el[0]) != -1) {
      return el + 'ay';
    }
    if(consonants.indexOf(el.slice(0, 2)) != -1 ) {
      return el.slice(2, el.length) + el.slice(0, 2) + "ay";  
    }
    if(consonants.indexOf(el.slice(1, 3)) != -1 ) {
      return el.slice(3, el.length) + el.slice(0, 3) + "ay";  
    }
    if(consonants.indexOf(el[0]) != -1) {
      var result = el;
      while(consonants.indexOf(result[0]) != -1 ) {
          result = result.slice(1, result.length) + result[0];
      }
      return  result + 'ay';
    }
  }).join(' ');
}