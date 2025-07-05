function evenChars(string) {
  if(string.length < 2 || string.length > 100) return "invalid string";
  
  return string.split("").filter((char, ind) => (ind+1)%2 === 0)
}