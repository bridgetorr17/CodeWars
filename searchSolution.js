function solution(fullText, search) {
    // Do your thing.
    let count = fullText.split(search);
    return count.length - 1;
  }