const wifi = require("Wifi");
const http = require('http');

const p = new Pin(17);
p.set();
p.write(0);


const SSID: string = 'DigosFurgone';
const PASS: string = 'cameriera';

const SERVER_PORT: number = 8080;
const HOSTNAME: string = 'esp8266';

const IP: IPFormat = '192.168.0.101';
const GATEWAY: IPFormat = '192.168.0.1';
const NETMASK: IPFormat = '255.255.255.0';


function createPromiseWithoutCallback<F extends FnArgs>(fn: F, ...args: Parameters<F>): CreatePromiseResult<F> {
  return new Promise(resolve => {
    args.push(e => resolve(e));
    fn.apply(null, args);
  });
}
function createPromise<F extends FnArgs>(fn: F, ...args: RemoveLastArg<F>): CreatePromiseResult<F> {
  return new Promise(resolve => {
    args.push(e => resolve(e));
    fn.apply(null, args);
  });
}

async function stationMode(ssid: string, password: string) {
  await createPromise(wifi.stopAP)
  const result = await createPromise(wifi.connect, ssid, { password, channel: 11 })
  return result;
}

wifi.on('connected', e => { console.log(e); });

let server: EspHttpServer;

async function main() {
  await createPromiseWithoutCallback(stationMode, SSID, PASS);
  await createPromise(wifi.setHostname, HOSTNAME)
  await createPromise(wifi.setIP, { ip: IP, gw: GATEWAY, netmask: NETMASK });
  server = http.createServer(onRequest);
  console.log('Starting server');
  server.listen(SERVER_PORT);
}

main();

function onRequest(req: EspHttpRequest, res: EspHttpResponse) {
  console.log(req.method, req.url);
  res.writeHead(200);
  return res.end(`YOU CALLED: ${req.method} ${req.url}`);
}




