import fs from 'fs';
import axios from 'axios';
const regex = /\*phone\*/g;
const phone = '+79096573052';
const services = JSON.parse(fs.readFileSync('services.json', 'utf-8').replace(regex, phone));

let isPostDisabled = false;

for (let i in services) {
  if (isPostDisabled) break;
  const service = services[i]
  service.data.phone = phone;


  axios.post(service.url, service.data)
  .then(res => {
  if (service.verified) return

	console.log(`${service.url} | ${res.status}`);
	console.log(res)
  })
  .catch(err => {
    console.log(`${service.url} | ${err.response?.status}`);
    console.log('err:', err)
   })
}
