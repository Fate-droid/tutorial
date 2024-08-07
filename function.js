function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
  var result = "";
  result+="The " + myAdjective +" "+ myNoun +" " + myVerb + " to the store " + myAdverb; 
  return result;
}

// console.log(wordBlanks("dog","big","ran","quickly"));
// console.log(wordBlanks("bicycle","small","enter","quickly"));

var ourArray = ["John",23];

var myArray = ["Quincy",33];

var onArray = [["the universe",42],["everything",101010]];

var myArray = [["Bulls",23],["White sox", 45]]

var ourArray = [50,60,70,80,90];
var ourData = ourArray[0];

ourData[1] = 45;

onArray_item = onArray[0][0];
console.log(onArray_item);

onArray.push(["Michael","Jackson"]);
console.log(onArray);

var testObj = {
  "hat":"ballcap",
  "shirt":"jersey"
}


var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

console.log(hatValue)
console.log(shirtValue)

var myDog = {
  "name": "Happy coder",
  "legs": 4,
  "tails": 2
}
myDog["bark"]="arf, arf";

delete myDog.tails;

console.log(myDog);


var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
}

function checkObj(checkProp){
  if(myObj.hasOwnProperty(checkProp)){
    return myObj[checkProp];
  }
  else{
    return "Not Found";
  }
}

var myStorage = {
  "car":{
    "inside":{
      "glove box":"maps",
      "passenger seat":"crumbs"
    },
    "outside":{
      "trunk":"jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents);


function multiplyAll(arr){
  var product = 1;
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr[i].length; j++){
      product*=arr[i][j];
    }

  }
  return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);



var contacts = [
  {
    "firstName":"Sherlock",
    "lastName":"Holmes",
    "number": "0487345643",
    "likes":["Intriguing cases","Violin"]
  },
  {
    "firstName": "Kristian",
    "lastName":"Vos",
    "number":"unknow",
    "likes": ["Javascript","Gaming","Foxes"]
  },
]


function lookUpProfile(name,prop){
  for(var i = 0 ; i < contacts.length; i ++){
    if(contacts[i].firstName === name){
      return contacts[i][prop]||"No such property";
    }
  }
  return "No such contract";
}

var data = lookUpProfile("Sherlock","lastName");

console.log(data);