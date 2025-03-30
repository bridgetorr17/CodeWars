function arrayDiff(a, b) {
    //filter through a, each item in a is present in be, do not add to the filtered array
    let diff = a.filter(aItem => !b.includes(aItem));
    return diff;
  }