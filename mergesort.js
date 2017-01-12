function mergeSort( arr ) {
    let finalArr = [];


    return finalArr;
};

function merge( arr1, arr2 ) {
	let mergedArr = [];
	const totalLength = arr1.length + arr2.length;
	while (mergedArr.length < totalLength) {
		if (!arr1[0] || !arr2[0]) {
			if (!arr1[0]) return mergedArr.concat(arr2);
			if (!arr2[0]) return mergedArr.concat(arr1);
		}
		if (arr1[0] < arr2[0]) {
			mergedArr.push(arr1.shift());

		} else if (arr1[0] > arr2[0]) {
			mergedArr.push(arr2.shift());
		} else {
			mergedArr.push(arr1.shift());
			mergedArr.push(arr2.shift());
		}
	}
	return mergedArr;
}


function split( arr ) {

    let firstHalf = arr.slice( 0, (arr.length/2) ),
        secondHalf = arr.slice( (arr.length/2), arr.length );

    return [ firstHalf, secondHalf ];
    
};

function mergeSort (arr) {
	



}
