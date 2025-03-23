function likes(names) {
    // TODO
    let textReturn = '';
    if (names.length === 0) textReturn = 'no one likes this';
    else if (names.length === 1) textReturn = `${names[0]} likes this`;
    else if (names.length === 2) textReturn = `${names[0]} and ${names[1]} like this`;
    else if (names.length === 3) textReturn = `${names[0]}, ${names[1]} and ${names[2]} like this`;
    else textReturn = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    
    return textReturn;
  }