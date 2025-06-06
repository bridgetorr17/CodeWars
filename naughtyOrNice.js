//parameter data is JSON
function naughtyOrNice(data) {
  let naughtyCount = 0;
  let niceCount = 0;
  for (let month in data){
    let oneMonth = data[month];
    for(let day in oneMonth){
      if(oneMonth[day] === 'Naughty') naughtyCount++;
      if(oneMonth[day] === 'Nice') niceCount++;
    }
  }
  if(niceCount >= naughtyCount) return 'Nice!';
  else return 'Naughty!';
}