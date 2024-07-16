function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
  var result = "";
  result+="The " + myAdjective +" "+ myNoun +" " + myVerb + " to the store " + myAdverb; 
  return result;
}

// console.log(wordBlanks("dog","big","ran","quickly"));
// console.log(wordBlanks("bicycle","small","enter","quickly"));

var ourArray = ["John",23];

var myArray = ["Quincy",1];

var onArray = [["the universe",42],["everything",101010]];

var myArray = [["Bulls",23],["White sox", 45]]

var ourArray = [50,60,70,80,90];
var ourData = ourArray[0];

ourData[1] = 45;

onArray_item = onArray[0][0];
console.log(onArray_item);

onArray.push(["Michael","Jackson"]);
console.log(onArray);