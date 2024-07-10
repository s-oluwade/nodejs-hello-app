const express = require('express');
const app = express();
const port = 3000;
const os = require('os');
const networkInterfaces = os.networkInterfaces();

function getServerIP() {
  for (const interfaceName in networkInterfaces) {
    const networkInterface = networkInterfaces[interfaceName];
    for (const networkAddress of networkInterface) {
      if (networkAddress.family === 'IPv4' && !networkAddress.internal) {
        return networkAddress.address;
      }
    }
  }
  return 'Unable to determine IP address';
}

app.set('trust proxy', true);

app.get('/', (req, res) => {
  const clientIp = req.ip; // Express will use X-Forwarded-For if trust proxy is enabled
  
  res.send(`Hello, World! Client IP is ${clientIp} and Server IP is ${getServerIP()}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
