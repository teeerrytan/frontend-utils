// 1. Use Array.includes to judge under the current situation
function printAnimals(animal) {
  const animals = ['dog', 'cat', 'hamster', 'turtle'];

  if (animals.includes(animal)) {
    return (`I have a ${animal}`);
  }
}

console.log(printAnimals('hamster')); // I have a hamster

// 2. Exit ahead / return ahead
function printVegetablesWithQuantity(vegetable, quantity) {
  const vegetables = ['potato', 'cabbage', 'cauliflower', 'asparagus'];

  if (!vegetable) throw new Error('No vegetable from the list!');
  // condition 1: throw error early

  if (!vegetables.includes(vegetable)) return;
  // condition 2: return from the function is the vegetable is not in
  //  the list
  console.log(`I like ${vegetable}`);

  // condition 3: must be a large quantity
  if (quantity >= 10) {
    console.log('I have bought a large quantity');
  }
}

// 3. Use Object or Map to replace switch statements
// use Map to find fruits by color
const fruitColor = new Map()
  .set('red', ['apple', 'strawberry'])
  .set('yellow', ['banana', 'pineapple'])
  .set('purple', ['grape', 'plum']);

function printFruits(color) {
  return fruitColor.get(color) || [];
}

// 4. Object deconstruction
// destructing - get name property only
// assign default empty object {}

function printVegetableName({ name } = {}) {
  console.log(name || 'unknown');
}


printVegetableName(undefined); // unknown
printVegetableName({}); // unknown
printVegetableName({ name: 'cabbage', quantity: 2 }); // cabbage

// 5. Use Array.every to check if every item meets a target
const fruits1 = [
  { name: 'apple', color: 'red' },
  { name: 'banana', color: 'yellow' },
  { name: 'grape', color: 'purple' }
];

function test1() {
  // condition: short way, all fruits must be red
  const isAllRed = fruits.every(f => f.color == 'red');

  console.log(isAllRed); // false
}

// Use Array.some to check if any item meets a target
const fruits2 = [
  { name: 'apple', color: 'red' },
  { name: 'banana', color: 'yellow' },
  { name: 'grape', color: 'purple' }
];

function test2() {
  // condition: if any fruit is red
  const isAnyRed = fruits.some(f => f.color == 'red');

  console.log(isAnyRed); // true
}

// 6. Optional chain and empty value conjunction
const car = {
  model: 'Fiesta',
  manufacturer: {
    name: 'Ford',
    address: {
      street: 'Some Street Name',
      number: '5555',
      state: 'USA'
    }
  }
}
// Old way:
// to get the car model
const modelOld = car && car.model || 'default model';

// to get the manufacturer street
const streetOld = car && car.manufacturer && car.manufacturer.address &&
  car.manufacturer.address.street || 'default street';

// request an un-existing property
const phoneNumberOld = car && car.manufacturer && car.manufacturer.address
  && car.manufacturer.phoneNumber;

// New way:
// to get the car model
const modelNew = car?.model ?? 'default model';

// to get the manufacturer street
const streetNew = car?.manufacturer?.address?.street ?? 'default street';

// to check if the car manufacturer is from the USA
const isManufacturerFromUSA = () => {
  if (car?.manufacturer?.address?.state === 'USA') {
    console.log('true');
  }
}
