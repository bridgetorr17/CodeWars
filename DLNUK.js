function driver(data) {
  // Code here
  let firstName, 
      middleName, 
      lastName, 
      dob, 
      gender = '';
  
  [firstName, middleName, lastName, dob, gender] = data;
  
  const months = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12',
  }
  
  let DLN = (lastName.length < 5) ? lastName.padEnd(5, '9').slice(0, 5) : lastName.slice(0,5)
  
  DLN += dob.split('-')[2].charAt(2)
  
  let monthDLN = months[dob.split('-')[1].slice(0,3)]
  
  if(gender === 'F') {
    console.log(monthDLN)
    let monthDLNnum = parseInt((monthDLN.split('')[0])) + 5;
    monthDLN = [monthDLNnum, monthDLN.charAt(1)].join('')
  }
  
  DLN += monthDLN;
  
  DLN += dob.split('-')[0];
  
  DLN += dob.split('-')[2].charAt(3)
  
  DLN += (middleName === '') ? firstName.charAt(0) + '9' : firstName.charAt(0) + middleName.charAt(0);
  
  DLN += '9AA';
  
  console.log(DLN);
  
  return DLN.toUpperCase();
}