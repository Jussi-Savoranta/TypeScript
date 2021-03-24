var userInput; // different from any because it will force you to do check if you're allowed to do the things you want to do with this variable
var userName;
userInput = 5;
userInput = 'Jii';
if (typeof userInput === 'string') {
    userName = userInput; // this will work without any checks if userInput: any
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occured!', 500); // return type is :never it doesn't return anything ever
// this type of structure crashes because the function doesn't return anything so the result can't be stored
// const result = generateError('An error occured!', 500);
// console.log(result); 
