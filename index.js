const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = passTimes => {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP("209.121.34.115", (error, data) => {
//   if (error) {
//     console.log("Can't get the Geo Coordinates: ", error);
//     return;
//   }
//   console.log("It worked! Returned coordinates: ", data);
// });

// fetchISSFlyOverTimes({ latitude: 49.2827291, longitude: -123.1207375 }, (error, data) => {
//   if (error) {
//     console.log("Can't get the flyovertime: ", error);
//     return;
//   }
//   console.log("It worked! Returned flyovertime: ", data);
// });
