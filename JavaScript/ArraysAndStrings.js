// import searches & sorts
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
function isUniqueStringsOnly(str){
    return 0;
}

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

// 1.3 URLify: replace all spaces in a string with '%20'
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

// 1.5 One Away: three types of string edits: insert, remove, or replace a character.
// Given two strings, write a function to check if they are one edit (or zero) away.
function oneAway(aStr, bStr){
    if(aStr==bStr){
        return true;
    }
    if(aStr.length > bStr.length + 1 || bStr.length > aStr.length + 1){
        return false;
    }
    aStr = splitSortJoin(aStr);
    bStr = splitSortJoin(bStr);
    diffCount = 0;
    if(aStr.length != bStr.length){
        diffCount++;
    }
    if(aStr.length > bStr.length){
        longer = aStr;
        shorter = bStr;
    }
    else{
        longer = bStr;
        shorter = aStr;
    }
    for(i=0;i<shorter.length;i++){
        if(shorter[i] != longer[i]){
            diffCount++;
        }
        if(diffCount>1){
            return false;
        }
    }
    return true;
}

// 1.6 String Compression: Perform basic string compression using counts of repeated characters.
// e.g. aabcccccaaa => a2b1c5a3
// If compression does not reduce size of string, return original string.
function compressString(str){
    str = replaceSpaces(str, "");
    var compressed = "";
    let letterCount=0;
    for(let i=0;i<str.length;i++){
        logVariables({compressed, letterCount});
        if(compressed.length >= str.length){
            return str;
        }
        if(letterCount===0){
            compressed+=str[i];
            letterCount++;
        }
        if(str[i]==str[i+1]){
            letterCount++;
        }
        else{
            compressed+=letterCount;
            letterCount=0;
        }
    }
    return compressed;
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

// debug helper: feed it an object containing variables you want to log
function logVariables(varObj){
    if(typeof varObj != 'object'){
        console.log("logVariables takes an object");
        return -1;
    }
    else{
        for(k in varObj){
            console.log(k + ": " + varObj[k]);
        }
        return 1;
    }
}

// TESTS:

// console.log(isUnique('bar'));
// console.log(isUnique('foo'));

// checkPermutation("blah", "foobar");
// checkPermutation('blah', 'halb');
// checkPermutation('blah', 'half');

// palindromePermutation("able was i ere i saw elba");
// palindromePermutation("able was i ere i saw elbe");

// console.log(oneAway('cat', 'dog'));
// console.log(oneAway('cat', 'hat'));
// console.log(oneAway('cat', 'cats'));
// console.log(oneAway('cat', 'hats'));

console.log(compressString('aabcccccaaa'));
// console.log(compressString('yeeeeeeeeee haaaaaaaaaa'));
