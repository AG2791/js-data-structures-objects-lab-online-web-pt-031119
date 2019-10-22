// Write your solution in this file!

// let driver = {oldMan: "jeremy",smarOne: "james", shortOne: "richard"}
let  driver = {};

function updateDriveWithKeyAndValue(driver,key, value) {
//   const newDriver = {...driver};
//   newDriver[quiteOne] = "stig";
//   return newDriver;

  // return Object.assign(driver, { quiteOne:"stig"} ); //this is distructive 
  // return Object.assign({}, driver, { quiteOne:"stig"} );  this is non-distructive 
  return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver,object, key) {
  // driver[oldMan] = "joe";
  // return driver
  driver[key] = value;
  return driver;

}


function deleteFromDriverBykey(driver,object, key)  {
  // const newDriver = Object.assign({}, driver);
  // delete newDriver[oldMan];
  // return newDriver;

  const newObj = Object.assign({}, driver);
  delete newObj[key];
  return newObj
}

function destructivelyDeleteFromDriverByKey(driver,object, key) {
  // delete driver[oldMan];
  // return driver;
  delete driver[key];
  return driver;
  
}


