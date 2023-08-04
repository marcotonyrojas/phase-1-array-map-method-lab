const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];
//const splitTutorials = tutorials.toString()
//const titles = splitTutorials.split(" ")
function titleCased(){ 
  const requestedArray = []
    tutorials.map(function(title){
      const words = title.split(" ");
      const cap = words.map((word) => {
    return word[0].toUpperCase() + word.substring(1)
  }).join(" ");
  requestedArray.push(cap)
})
  return requestedArray
}
//titleCased()