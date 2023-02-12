/* station: string; the station the scooter is located at or null if checked out
user: the User who checked out the Scooter, or null if docked
serial: a number assigned sequentially from nextSerial
nextSerial: a static number which starts at 1 and increments each time a new serial number is assigned
charge: a number from 0 (no charge at all) to 100 (fully charged)
isBroken: boolean */

const Scooter = require('../src/Scooter')
const User = require('../src/User')

/* Scooter object checks */
describe('scooter object checks', function() {
  test('checks if scooter is an object', function() {
    let scooter1 = new Scooter
    expect(typeof scooter1).tobe("object");
  });

  
})

//Method tests
describe('scooter methods', () => {
  // tests here!

  //rent method

  //dock method

  //requestRepair method

  //charge method

})
