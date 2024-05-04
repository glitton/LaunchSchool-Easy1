function computeSum(array) {
  // const initialValue = 0;
  const total = array.reduce((acc, currVal) => acc + currVal);
  console.log(total);
}

let arr1 = [1, 2, 3, 4];

// computeSum(arr1);

function computeProduct(array) {
  const total = array.reduce((acc, currVal) => acc * currVal);
  console.log(total);
}

computeProduct(arr1);
