// 1. Is Unique - implement an algorithm to determine whether a string contains all unqiue characters.
// What if you cannot use additional data structures?
function isUnique(str){
    // e.g. 'abcdefgeh' => false
    // assume for now only (lower-case) letters, so a 26 letter alphabet. Can change this.
    // number depending on charaacter set used.
    if(str.length > 26){
        return false;
    }
    charValArr = [];
    for(let i=0; i<str.length; i++){
        var val = str.charCodeAt(i);
        if(charValArr[val]){
            return false;
        }
        else{
            charValArr[val] = true;
        }
    }
    return true;
}

// and if we can't use other data structures? What then?
// naive way: nested loops. Bad runtime.
// better way: sort the letters in the string.
// which sorting algorithm to use?
// I should make a file of Basic Searches and Sorts.
function isUniqueStringsOnly(str){

}

console.log(isUnique('bar'));
console.log(isUnique('foo'));