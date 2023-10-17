/* 
  Instructions:
  - create 3 properties that are set by the constructor
  - create 3 methods
  - instantiate 2 arrays of 3 pirates, name the arrays after your favorite pirate ships, jollyRoger and blackPearl
  - loop over each array and print 3 properties of each pirate
*/

class Pirate 
{
  constructor(name, bounty, weapon)
  {
    this.name = name;
    this.bounty = bounty;
    this.weapon = weapon;
  }
  
  announceSelf()
  {
    console.log(`Arg! I'm ${this.name} and I got a bounty of £${Number(this.bounty)}!`);
  }
  
  useWeapon(other = "the air because they missed")
  {
    console.log(`${this.name} uses a ${this.weapon} to attack ${other}!`);
  }
  
  abandonShip()
  {
    if(String(this.position).toLowerCase() === 'captain')
      console.log("The captain never abandons their ship. How dare you call this method.");
    else
      console.log(`${this.name} jumps into the ocean.`);
  }
}


/* Main */
let jollyRoger = [
  new Pirate("Captain Ulrich Parrish", "1500000", "cutlass"),
  new Pirate("Rylan Golden-Eye", "610000", "pistol"),
  new Pirate("Bishop Longbrand", "450000", "mop"),
];

let blackPearl = [
  new Pirate("Captain Snake Darby", "23000000", "hand cannon"),
  new Pirate("Leofwine the Ogre", "9800000", "cutlass"),
  new Pirate("Hagley Atkins", "4200000", "blunderbuss"),
];

console.log("WANTED PIRATES OF JOLLY RODGER SHIP");
jollyRoger.forEach(function(pirate)
{
  printPirate(pirate);
});

console.log();
console.log("WANTED PIRATES OF BLACK PEARL SHIP");
for(let pirate of blackPearl)
{
  printPirate(pirate);
}

function printPirate(pirate)
{
  if(typeof pirate !== "object")
    return;
  
  let outString = `${pirate.name} - Bounty: £${pirate.bounty} - Uses: ${pirate.weapon}`;
  console.log(outString);
}
