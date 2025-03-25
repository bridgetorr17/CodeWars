function createPhoneNumbers(numbers){
  let phoneNumber = '(xxx) xxx-xxxx';
  
  numbers.forEach(num => {
    phoneNumber = phoneNumber.replace('x', num);
  });

  return phoneNumber;
}