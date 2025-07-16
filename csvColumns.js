function csvColumns(csv, indices) {
  
  console.log('start')
  //format csv string into 2D array
  let csvArr = csv.split('\n')
  
  csvArr = csvArr.map(row => row.split(','))
  
  //map rows of csv
    //extract cols specified in indicies array
  csvArr = csvArr.map(row => row.filter((char, ind) => indices.includes(ind)))
  
  //format filtered array back into csv string 
  let csvRet = csvArr.map(row => row.join(','))
  
  //confirm returned csv has data
  if (csvRet[0] === "") return '';
  else csvRet = csvRet.join('\n')

  //return
	return csvRet;
}