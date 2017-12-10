function selectionSort(arr){
    //so why does this work?
    //the arr.length-1, that is.
    for(let i=0; i< arr.length - 1; i++){
        let min = i;
        for(let k=i+1; k< arr.length; k++){
            if(arr[k] < arr[min]){
                let temp = arr[k];
                arr[k] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}

var myArr = [3, 99, 7, 101, -3];
myArr2 = [301, -3, 99, 7, 101, 300]

//console.log(selectionSort(myArr));

function mergeSort(arr){
    if (arr.length > 1){
        let mid = Math.floor(arr.length/2);
        let leftSide = arr.slice(0, mid);
        let rightSide = arr.slice(mid, arr.length);
        return merge(mergeSort(leftSide), mergeSort(rightSide));
    }
    else{
        return arr;
    }
    function merge(left, right){
        let newArr = [];
        let r = 0;
        let l = 0;
        while(l < left.length && r < right.length){
            if(left[l] < right[r]){
                newArr.push(left[l]);
                l++;
            }
            else{
                newArr.push(right[r]);
                r++;
            }
        }
        newArr = newArr.concat(right.slice(r, right.length));
        newArr = newArr.concat(left.slice(l, left.length));
        return newArr;
    }
}

console.log(mergeSort(myArr2));

function quickSort(arr){
    return arr;
}