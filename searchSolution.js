function solution(fullText, search) {
    // Do your thing.
      let count = 0; //number of instances 
      let i = 0; //iterator
  
      //look for instances of the search
      //exit the while look when the chars left in the string are less than the search string
      while (i <= fullText.length - search.length) {
          if (fullText.substring(i, i + search.length) === search) {
              count++;
              i += search.length; // avoid overlap
          } else {
              i++;
          }
      }
      
      return count;
  }
  