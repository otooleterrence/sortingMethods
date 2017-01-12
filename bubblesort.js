function bubbleSort(arr) {
	let swaps = 0;
	let last = arr.length-1;
	while (last > 0) {
		for (let i = 0; i < last; i++) {
			if (arr[i] > arr[i+1]) {
				let buff = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = buff;
				swaps++;
			}
		}
		if (swaps === 0) {
			return arr;
		}
		swaps = 0;
		last--;		
	}
	return arr;
}