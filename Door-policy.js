
export function frontDoorResponse(line) 
{
  let firstlet=line[0];
  return firstlet;
}

export function frontDoorPassword(word) 
{
  let word2 = word[0].toUpperCase();
   let word3=word.slice(1);
   let word1= word3.toLowerCase();
  
    
  return word2+word1;
}


export function backDoorResponse(line) {
    let newword= line.trim();
    let lestlet=newword.slice(newword.length-1);
  return lestlet;
}


export function backDoorPassword(word) {
  let newword =frontDoorPassword(word);
  
  
  return newword+','+' '+'please';
}
