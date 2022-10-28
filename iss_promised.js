const request = require('request-promise-native');

const fetchMyIP = () => {
  const url = "https://api.ipify.org?format=json";
  return request(url);
};

const fetchCoordsByIP = body => {
  const url = `http://ipwho.is/${JSON.parse(body).ip}`;
  return request(url);
};

const fetchISSFlyOverTimes = body => {
  const { latitude, longitude} = JSON.parse(body);
  const url = `https://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`;
  return request(url);
};

const printPassTimes = passTimes => {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};


const nextISSTimesForMyLocation = () => {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then(data => {
      const { response } = JSON.parse(data);
      return response;
    });
};

module.exports = { printPassTimes,nextISSTimesForMyLocation };