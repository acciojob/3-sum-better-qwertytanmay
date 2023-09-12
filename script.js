function threeSum(arr, target) {
// write your code here
	 0 1 2 3 4 5 6 7 8 l=9
  for(let i=0; i<arr.length-2; i++){
	  let sum = arr[i] + arr[i+1] + arr[i+2];
	  if(sum > target){
		  return sum;
	  }
  }
}

module.exports = threeSum;
