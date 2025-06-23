function reverse(arr) {
   //code me
  const copy = arr.slice();
  copy.forEach(item => {
    arr.pop()
    arr.unshift(item)
  })
  
}