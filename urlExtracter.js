function domainName(url){
    //your code here
    let arr = [];
    let domain = '';
    
    //if url contains www
    if (url.includes('www')) arr = url.split('.');
    
    //if url contains //
    else if (url.includes('//')) arr = url.split('//');
    
    //otherwise it is a random case
    else {
      arr = url.split('.');
      return arr[0];
    }
    
    domain = arr[1].split('.');
    
    return domain[0];
  }
  