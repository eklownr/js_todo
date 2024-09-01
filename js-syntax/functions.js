/* 
Testing functions 
*/

const arrowFunction = (param) => {
  console.log("arrowFunktion () => {}")
  return param
}
const regularFunction = function(param) {
  console.log("arrowFunktion () => {}")
  return param
}

function skipDivThree() {
  for (let i = 0; i <= 7; i++) {
    if (i % 3 === 0) {
      continue;
    }
    console.log(i)
  }
}

function dubbelArray(nums) {
  const numDubbel = []

  for (let i = 0; i <= nums.length -1; i++) {
    numDubbel.push(nums[i] * 2);
  }
  return numDubbel
}

const object1 = {
  num: 2,
  fun: function hello() {
    console.log("Hello from object1 fun: function hello()")
  }
}

// Passing a function to a function
function passingFunc(params) {
  params()
}
passingFunc(function () {
  console.log("Passing a function to a function!")
})

setTimeout(() => {
  console.log("Back to business!")
}, 4500);
setTimeout(() => {
  console.log("Timeout!")
}, 0);

function countdown(seconds) {
  let counter = seconds;
  const interval = setInterval(() => {
    console.log(counter);
    counter--;
    if (counter < 0) {
      clearInterval(interval);
      console.log('Ding!');
    }
  }, 1000);
}

// const oneParam = (param) => {}
const oneParam = param => {
  console.log(param * 4)
}
oneParam(3)

// const oneLine = () => {return 2+3;}
const oneLine = () => 2+3;
console.log("One Line Function: ", oneLine());


// console.log()
skipDivThree()
arr1 = [3,3,4,5,6]
console.log(arr1, " array1 to dubbel -> ", dubbelArray(arr1))
object1.fun() // runs funtion hello
const funcReturn = arrowFunction("test to add param")
console.log(funcReturn)
countdown(3)