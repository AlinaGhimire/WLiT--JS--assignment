const animals = ["dogs", "cats", "rabbits", "mice"];
const checkanimal = animals.map(function (animal) {
  return animal + ": " + animal.includes("a");
});

checkanimal.forEach(function (result) {
  console.log(result);
});

var animalsWithA = animals.filter(function (animal) {
  return animal.includes("a");
});

console.log(animalsWithA);
