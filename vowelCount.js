function getCount(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let arr = str.split('');
    let total = arr.reduce((vow, item) => {
        if (vowels.includes(item)) {
          return vow = vow + 1;
        }
        else return vow;
      }, 0);
    return total;
  }