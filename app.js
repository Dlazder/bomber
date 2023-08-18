import fs from 'fs';
import axios from 'axios';
const services = JSON.parse(fs.readFileSync('services.json', 'utf-8'));
const phone = '+79096573052';

for (let key in services) {
  const service = services[key]
  service.data.phone = phone;

  axios.post(service.url, service.data)
  .then(res => {
    console.log(`${service.url} | ${res.status}`)
  })
  .catch(err => {
    console.log(`${service.url} | ${err.response.status}`);
   })

}
