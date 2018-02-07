module.exports = {
    bubbleSort: function (arr){
        //TODO
    },

    selectionSort: function (arr){
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
    },

    insertionSort: function (arr){
        //TODO
    },

    shellSort: function (arr){
        //TODO
    },

    mergeSort: function(arr){
        if (arr.length > 1){
            let mid = Math.floor(arr.length/2);
            let leftSide = arr.slice(0, mid);
            let rightSide = arr.slice(mid, arr.length);
            return merge(module.exports.mergeSort(leftSide), module.exports.mergeSort(rightSide));
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
    },

    quickSort: function(arr){
        quickSortRecursor(arr, 0, arr.length - 1);

        function quickSortRecursor(arr, begin, end){

            if(begin < end){

                divideHere = divideAndConquer(arr, begin, end);

                quickSortRecursor(arr, begin, divideHere-1);
                quickSortRecursor(arr, divideHere+1, end);
            }

        }

        function divideAndConquer(arr, begin, end){

            const pivot = arr[begin];

            let leftIdx = begin + 1;
            let rightIdx = end;

            let indicesHaveCrossed = false;

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
                    let temp = arr[leftIdx];
                    arr[leftIdx] = arr[rightIdx];
                    arr[rightIdx] = temp;
        
                }
            }
            
            let temp = arr[begin];
            arr[begin] = arr[rightIdx];
            arr[rightIdx] = temp;

            return rightIdx;
        }
    },

    binarySearch: function(arr, sought, begin=0, end=arr.length - 1, mid=arr.length/2){
        mid = Math.floor(mid);
        if(arr[mid]==sought){
            console.log("Found at index:", mid);
            return mid;
        }
        else if(arr[mid]>sought){
            if(mid == end){
                console.log("Not found");
                return -1;
            }
            else{
                // console.log("Searching left, mid is now:", Math.floor((mid + begin)/2));
                module.exports.binarySearch(arr, sought, begin, mid, (mid + begin)/2)
            }
        }
        else{
            if(mid==begin){
                console.log("Not found");
                return -1;
            }
            else{
                // console.log("Searching right, mid is now:", Math.floor((mid + end)/2));
                module.exports.binarySearch(arr, sought, mid, end, (mid + end)/2)
            }
        }
    }
}

// var myArr = [3, 99, 50, 101, -3, 7];
// console.log("Unsorted: " + myArr);
// module.exports.quickSort(myArr);
// console.log("Sorted: " + myArr);
// //Search for elements that are in the array
// module.exports.binarySearch(myArr, -3);
// module.exports.binarySearch(myArr, 99);
// //Search for elements that aren't
// module.exports.binarySearch(myArr, 2);
// module.exports.binarySearch(myArr, 88);
// module.exports.binarySearch(myArr, -3);
// module.exports.binarySearch(myArr, 2);