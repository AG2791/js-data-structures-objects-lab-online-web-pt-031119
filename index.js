// Write your solution in this file!

let driver = {oldMan: "jeremy",smarOne: "james", shortOne: "richard"}

function updateDriveWithKeyAndValue(driver,key, value) {
//   const newDriver = {...driver};
//   newDriver[quiteOne] = "stig";
//   return newDriver;

  return Object.assign(driver, { quiteOne:"stig"} ); //this is distructive 
  // return Object.assign({}, driver, { quiteOne:"stig"} );  this is non-distructive 
}

function destructivelyUpdateDriverWithKeyAndValue(driver,object, key) {
  driver[oldMan] = "joe";
  return driver

}


function deleteFromDriverBykey(driver,object, key)  {
  const newDriver = Object.assign({}, driver);
  delete newDriver[oldMan];
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver,object, key) {
  delete driver[key];
  return driver;
  
}

