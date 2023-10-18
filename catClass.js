class Cat 
{
  constructor(name, furColor, temperament)
  {
    this.name = name;
    this.furColor = furColor;
    this.temperament = temperament;
  }
  
  makeDemand(demand)
  {
    console.log(`${this.name} demands ${demand}.`);
  }
  
  moveFrom(position)
  {
    if(this.temperament === "mean")
      console.log(`${this.name} does not move...`);
    else
      console.log(`${this.name} moves off ${position}`);
  }
  
  vocalize()
  {
    console.log(`${this.name}, the ${this.furColor} cat, meows.`);
  }
}

const cat1 = new Cat("Sparta", "brown and grey", "mean");
const cat2 = new Cat("Loki", "white", "playful");

console.log(cat1);
console.log(cat2);

cat1.makeDemand("food");
cat2.makeDemand("scratches");

cat1.moveFrom("the keyboard");
cat2.moveFrom("the window");

cat1.vocalize();
cat2.vocalize();
