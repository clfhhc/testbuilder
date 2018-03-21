// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

function generateRange(start,end,step) {
  return Array.from(Array(Math.floor((end-start)/step)+1).keys()).map((i)=>i*step+start);
}

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  var network='';
  if (['38','39'].includes(cardNumber.slice(0,2)) && cardNumber.length===14) {
    network="Diner's Club";
  } else if (['34','37'].includes(cardNumber.slice(0,2)) && cardNumber.length===15) {
    network='American Express';
  } else if ((generateRange(622126,622925,1).map((i)=>i.toString()).includes(cardNumber.slice(0,6)) || generateRange(624,626,1).map((i)=>i.toString()).includes(cardNumber.slice(0,3)) || generateRange(6282,6288,1).map((i)=>i.toString()).includes(cardNumber.slice(0,4))) && generateRange(16,19,1).includes(cardNumber.length)) {
    network='China UnionPay';
  } else if ((['4903', '4905','4911','4936','6333','6759'].includes(cardNumber.slice(0,4)) || ['564182', '633110'].includes(cardNumber.slice(0,6))) && [18,16,19].includes(cardNumber.length)) {
    network='Switch';
  } else if (cardNumber.slice(0,1)==='4' && [13,16,19].includes(cardNumber.length)){
    network='Visa';
  } else if (generateRange(51,55,1).map((i)=>i.toString()).includes(cardNumber.slice(0,2)) && cardNumber.length===16) {
    network='MasterCard';
  } else if ((cardNumber.slice(0,4)==='6011' || cardNumber.slice(0,2)==='65' || generateRange(644,649,1).map((i)=>i.toString()).includes(cardNumber.slice(0,3))) && [16,19].includes(cardNumber.length)) {
    network='Discover';
  } else if (['5018','5020','5038','6304'].includes(cardNumber.slice(0,4)) && generateRange(12,19,1).includes(cardNumber.length)) {
    network='Maestro';
  }
  return network;
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


