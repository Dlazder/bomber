import fs from 'fs';
import axios from 'axios';
const regex = /\*phone\*/g;
const phone = '+79096573052';
const services = JSON.parse(fs.readFileSync('services.json', 'utf-8').replace(regex, phone));
console.log(services)

let isPostDisabled = false;

for (let i in services) {
  if (isPostDisabled) break;
  const service = services[i]

  axios.post(service.url, service.data)
  .then(res => {
		console.log(`${service.url} | ${res.status}`);
  })
  .catch(err => {
    console.log(`${service.url} | ${err.response.status}`);
    console.log('err:', err)
   })
}
