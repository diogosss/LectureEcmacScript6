
//********** Spread Operator ************/


 const obj = {
    name: 'Oscar',
    age: 32,
    country: 'MX'
  };

  /*
  let {name, ...all} = obj;
  console.log(name, all); // SOL : Oscar { age: 32, country: 'MX' }
  */
/*
  let {country, ...all} = obj;
  console.log(all);  //  SOL :  { name: 'Oscar', age: 32 }
*/
  
  let { name, ...addInfo } = obj;
  console.log(`name: ${name}`); //  SOL :  name: Oscar
  console.log(`additional information: `, addInfo); //  SOL :  additional information:  { age: 32, country: 'MX' }
  
  let { country, ...nameAndAge } = obj;
  console.log(`name and age: `, nameAndAge); //  SOL :  name and age:  { name: 'Oscar', age: 32 }
  
   
//********** * Porpagation Properties ************/

  const person = {
    name: 'Oscar',
    age: 32
  };
  
  const personInformation = {
    ...person,
    country: 'MX'
  };
  console.log(`personInformation: `, personInformation);
   // personInformation:  { name: 'Oscar', age: 32, country: 'MX' }


//********** * Promise Finally ************/

  const helloWorld = () => {
    return new Promise((resolve, reject) => {
      true
        ? setTimeout(() => {
            resolve('Hello World!');
          }, 3000)
        : reject(new Error('Test Error'));
    });
  };
  
  helloWorld()
    .then(result => console.log('result -> ', result))
    .catch(err => console.log('err -> ', err))
    .finally(() => console.log('finalizó'));
  


//********** * Regex  ************/

  const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
  const match = regexData.exec('2018-04-28');
  const year = match[1];
  const month = match[2];
  const day = match[3];
  console.log('Date -> ', year, month, day);