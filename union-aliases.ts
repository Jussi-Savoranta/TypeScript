type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text'; // union types combined with literal types!!

// union types are a neat way to create a variable that accepts different types of values
// the function can then check the types and do different things based on the types
function combine(
  input1: Combinable,
  input2: Combinable,// same as number | string,
  resultType: ConversionDescriptor // same as'as-number' | 'as-text' 
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number" || resultType === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
//   if (resultType === 'as-number') {
//       return +result;
//   } else {
//       return result.toString();
//   }
  
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine('30', '26', "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Jii", "Mii", "as-text");
console.log(combinedNames);
