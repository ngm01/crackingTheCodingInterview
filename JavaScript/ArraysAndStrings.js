BasicSearchesAndSorts = require('./BasicSearchesAndSorts');
// 1.1 Is Unique - implement an algorithm to determine whether a string contains all unqiue characters.
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

// console.log(isUnique('bar'));
// console.log(isUnique('foo'));

// 1.2 Check Permutuation: given two strings, write a method to decide if one is a permutation of the other.
function checkPermutation(aStr, bStr){
    if (aStr.length != bStr.length){ 
        console.log(bStr, "is not a permutation of", aStr);
        return false;
    };

    if(compareStrings(aStr, bStr)){
        console.log(bStr, "is a permutation of", aStr);
        return true;
    }
    else{
        console.log(bStr, "is not a permutation of", aStr);
        return false;
    }

    function compareStrings(aStr, bStr){
        aStr = splitSortJoin(aStr);
        bStr = splitSortJoin(bStr);
        for(i=0; i<aStr.length; i++){
            if(aStr[i] != bStr[i]){
                return false;
            }
        }
        return true;
    }


}

// checkPermutation("blah", "foobar");
// checkPermutation('blah', 'halb');
// checkPermutation('blah', 'half');


// 1.3 URLify: replace all spaces in a string with '%20'
// CtCI is written with Java, C++, &c programmers in mind,
// not js codemonkeys like me...
// so this problem is really supposed to make you think about
// memory allocation etc...
function URLify(str){
    //lazy way:
    return replaceSpaces(str, "%20");
}

// 1.4 Palindrome Permutation: Given a string, write a function to check if it's a permutation of
// a palindrome. 
function palindromePermutation(str){
    //Assume only letters and spaces? Also should convert all letters to lowercase
    original = str;
    str = splitSortJoin(replaceSpaces(str, ""));
    counts = {};
    oddsAllowed = str.length % 2;
    oddsCounted = 0;
    for(i=0;i<str.length;i++){
        if(!counts[str[i]]){
            counts[str[i]] = 1;
        }
        else{
            counts[str[i]]++
        }
    }
    for(charCount in counts){
        if(counts[charCount] % 2 == 1){
            oddsCounted++;
        }
        if(oddsCounted > oddsAllowed){
            console.log('"' + original + '"', "is not a permutation of a palindrome.");
            return false;
        }
    }
    console.log('"' + original + '"', "is a permutation of a palindrome.")
    return true;
}

// palindromePermutation("able was i ere i saw elba");
// palindromePermutation("able was i ere i saw elbe");

// 1.5 One Away: three types of string edits: insert, remove, or replace a character.
// Given two strings, write a function to check if they are one edit (or zero) away.
function oneAway(aStr, bStr){
    return 0;
}

// Helper functions:
function splitSortJoin(str){
    str = str.split('');
    
    BasicSearchesAndSorts.quickSort(str);
    str = str.join('');
    return str;
}

function replaceSpaces(str, replacement){
    for(i=0;i<str.length;i++){
        if(str[i]==" "){
            str = str.replace(" ", replacement);
        }
    }
    return str;
}
