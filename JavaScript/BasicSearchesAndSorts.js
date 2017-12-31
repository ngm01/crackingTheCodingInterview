var myArr = [3, 99, 50, 101, -3, 7];

function bubbleSort(arr){
    //TODO
}

function selectionSort(arr){
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

function insertionSort(arr){
    //TODO
}

function shellSort(arr){
    //TODO
}

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

function quickSort(arr){
    quickSortRecursor(arr, 0, arr.length - 1);

    function quickSortRecursor(arr, begin, end){

        if(begin < end){

            var divideHere = divideAndConquer(arr, begin, end);

            quickSortRecursor(arr, begin, divideHere-1);
            quickSortRecursor(arr, divideHere+1, end);
        }

    }

    function divideAndConquer(arr, begin, end){
        // let fakeArray = arr.slice(begin, end + 1);
        // console.log("Working on subarray: "  + fakeArray);

        var pivot = arr[begin];

        var leftIdx = begin + 1;
        var rightIdx = end;

        var indicesHaveCrossed = false;

        while(!indicesHaveCrossed){

            while(leftIdx <= rightIdx && arr[leftIdx] <= pivot){
                leftIdx++;
            }
            while(rightIdx >= leftIdx && arr[rightIdx] >= pivot){
                rightIdx--;
            }

            if(rightIdx < leftIdx){
                indicesHaveCrossed = true;
            }
            else{
                // console.log("Swapping left and right indices: " + arr[leftIdx] + " and " + arr[rightIdx]);
                let temp = arr[leftIdx];
                arr[leftIdx] = arr[rightIdx];
                arr[rightIdx] = temp;
                // console.log("Swapped: " + arr);
            }
        }
        
        // console.log("Swapping begin and right index: " + arr[begin] + " and " + arr[rightIdx]);
        let temp = arr[begin];
        arr[begin] = arr[rightIdx];
        arr[rightIdx] = temp;
        // console.log("Swapped: " + arr);

        return rightIdx;
    }
}

console.log("Unsorted: " + myArr);
quickSort(myArr);
console.log("Sorted: " + myArr);