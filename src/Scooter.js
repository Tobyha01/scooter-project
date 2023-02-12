class Scooter{
  constructor(station, username, isBroken = Boolean /* charge */ /* serial */ /* nextSerial */){
    if(!station){
      this.station = null
      this.username = username
    }
    else{
      this.station = station
      this.username = null
    }
    
    this.isBroken = isBroken
    // this.charge = charge
    // if(!serial){
    //   this.serial += nextSerial
    //   nextSerial += 1
    // }

  }
  // static nextSerial = 1
  /* this.serial = serial */
  /*serial is a static methoid that starts from 1
  each time a new serial is assigned to a scooter incraese next serial by 1 
  use the value of next serial to assign serial a value*/
  
  
}

// let scooter1 = new Scooter("London", "Tobyha01", 50)
// console.log(scooter1)
module.exports = Scooter 