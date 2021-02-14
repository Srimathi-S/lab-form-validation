// Progression 1 
// Check username
// create a function called as checkUserName()
// username should not be empty
// username should be a minimum of 8 characters and above 
// username should be less than 15 characters
// No space is allowed in username
// username should not contain special characters
// the function should return true if all the conditions above are validated.
// return false if the validation fails
function checkUserName(username)
{
    var isNotEmpty=(username!="");
    var isGreaterThan8AndLessThan15=(username.length>=8 && username.length<15);
    var containsNoSpace=username.indexOf(" ")<0;
    var containsNoSpecialCharacters=(username.match(/^[a-zA-z0-9]+$/))!=null;
    return  isNotEmpty && isGreaterThan8AndLessThan15 && containsNoSpace && containsNoSpecialCharacters;
}
// Progression 2 
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise
function checkEmail(mail)
{
    return (mail.match(/^[a-zA-Z0-9@._]+$/)!=null);
}
// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false
function checkPassword(password)
{
    var containsLowerCase=(password.match(/[a-z]+/)!=null);
    var containsSpecialCharacters=(password.match(/[!@#$%^&*()_]+/)!=null);
    var containsUpperCase=(password.match(/[A-Z]+/)!=null);
    var containsNumber=(password.match(/[0-9]+/)!=null);
    return containsLowerCase&&containsSpecialCharacters&&containsUpperCase&&containsNumber;
}
/*console.log(checkUserName("helloabcd@"));
console.log(checkUserName("helloabcd12345"));
console.log(checkEmail("s@g.com"));
console.log(checkEmail("s.com$"));
console.log(checkPassword("AZaz9@"));
console.log(checkPassword("asgfaAh@.#"));*/
