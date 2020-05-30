const axios = require("axios");
const site = "https://glorytoheaven.herokuapp.com"

function keepalive() {
  if (site) {
    setInterval(async () => {
      const data = await axios(`https://ping-pong-sn.herokuapp.com/pingback?link=${site}`);
      console.log("keep alive triggred, status: ", data.status);
    }, 1560000);
  } else {
    console.warn("Set site env var. Read docs at https://github.com/patheticGeek/torrent-aio-bot");
  }
}

module.exports = keepalive;
