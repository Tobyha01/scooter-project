/*serial: a number assigned sequentially from nextSerial
nextSerial: a static number which starts at 1 and increments each time a new serial number is assigned
charge: a number from 0 (no charge at all) to 100 (fully charged)
*/

const Scooter = require('../src/Scooter')
const User = require('../src/User')

/* Scooter object checks */
describe('scooter object checks', function() {
  test('checks if scooter is an object', function() {
    let scooter1 = new Scooter()
    expect(typeof scooter1).toBe("object")
  });

  test("check if scooter station is a string or null if in use", function() {
    let scooter2 = new Scooter()
    expect(scooter2).toHaveProperty("station", "London" || "station", "null")
  });
  
  test("check if a scooter has a user property assigned to it, or null (if docked)", function() {
    let scooter3 = new Scooter()
    expect(scooter3).toHaveProperty("username", "Tobyha01" || "username", "null")
  });
  
  test("check if a scooter is broken", function() {
    let scooter4 = new Scooter()
    expect(scooter4).toHaveProperty("isBroken", true || "isBroken", false)
  })

  // test("check if the serial number being assigned is sequential, and being assigned from nextserial", function() {
  //   let scooter4 = new Scooter()
  //   expect(scooter4).toHaveProperty("serial", "1")
  //   expect(typeof scooter4.serial).toBe("number")
    
  // })

  // test("check if next serial is a static method, starting from 1 and increments by 1 each time a new serial is assigned ", function() {
  //   let scooter5 = new Scooter()
  //   expect(scooter5.nextSerial).propertyType("static")
  //   expect(scooter5.nextSerial).toIncreaseBy(1)
  // })

  // test("check scooter has a charge value between 0 - 100", function() {
  //   let scooter4 = new Scooter()
  //   expect(scooter7).toHaveProperty("charge" <= 0 || "charge" <= 100)
  // });

})

// //Method tests
// describe('scooter methods', () => {
//   // tests here!

//   //rent method

//   //dock method

//   //requestRepair method

//   //charge method

// })
