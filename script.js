const input = prompt("enter a list of comma-separated froyo flavors");

if (input) {
  const iceCreamFlavors = input.split(",");
  console.log(input);

  const flavorCounter = {};

  for (let i = 0; iceCreamFlavors.length; i++) {
    const flavor = iceCreamFlavors[i];

    if (flavorCounter[flavor]) {
      flavorCounter[flavor] += flavorCounter[flavor]++;
    } else {
      flavorCounter[flavor] = 1;
    }
  }

  for (const flavor in flavorCounter) {
    console.log(`${flavor}: ${flavorCounter[flavor]}`);
  }
}
