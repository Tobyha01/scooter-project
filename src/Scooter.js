class Scooter{
  constructor(station, username){
    if(!station){
      this.station = null
      this.username = username
    }
    else{
      this.station = station
      this.username = null
    }
  }
}

module.exports = Scooter
