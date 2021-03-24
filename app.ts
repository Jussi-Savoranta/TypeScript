let userInput: unknown; // different from any because it will force you to do check if you're allowed to do the things you want to do with this variable
let userName: string;

userInput = 5;
userInput = 'Jii';

if (typeof userInput === 'string') {
    userName = userInput; // this will work without any checks if userInput: any
}

function generateError(message: string, code: number): never { // return type :never is not needed but if you leave it out it'll say void, so it's maybe clearer to others (and later for yourself) to spell it out that this function never returns
    throw {message: message, errorCode: code};
    // while(true) {} // another example of function that never returns: infinite loop
}

generateError('An error occured!', 500); // return type is :never it doesn't return anything ever

// this type of structure crashes because the function doesn't return anything so the result can't be stored
// const result = generateError('An error occured!', 500);
// console.log(result); 