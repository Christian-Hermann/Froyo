// takes in an array of flavors - returns an object of counted flavors
// same code from below with different parameter and variable
function countTheFlavors(flavors) {
  // initalize empty object
  const flavorCounter = {};
  // iterate through the flavor array
  for (let i = 0; i < flavors.length; i++) {
    // set flavor equal to element - add trm ti take care of extra space around
    const flavor = flavors[i].trim();
    // see if flavor exists in the object
    if (flavorCounter[flavor]) {
      // if flavor exist increment count
      flavorCounter[flavor]++;
      // if flavor does not exist set equal to 1
    } else {
      flavorCounter[flavor] = 1;
    }
  }
  // return flavro counter
  return flavorCounter;
}

const input = prompt("enter a list of comma-separated froyo flavors");
// input so customer can add ice cream flavors separatedd by a coma
if (input) {
  const iceCreamFlavors = input.split(",");
  console.log(input);
  // initialize an empty object to keep track of the flavor count
  const flavorCounter = {};
  // loop through the ice cream flavors from the input
  for (let i = 0; i < iceCreamFlavors.length; i++) {
    // flavor equals each iteration - use trim so counts don't get messed up from typos
    const flavor = iceCreamFlavors[i].trim();
    // use conditinal to check if flavor is counted
    if (flavorCounter[flavor]) {
      // if flavor is is already counted increment by one
      flavorCounter[flavor]++;
      // if flavor is not counted set to one
    } else {
      flavorCounter[flavor] = 1;
    }
  }
  // use for in loop to iterante through the object
  for (const flavor in flavorCounter) {
    // use template literals to make the code more readable and usable
    console.log(`${flavor}: ${flavorCounter[flavor]}`);
  }
}
