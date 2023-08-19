import fs from 'fs';
import axios from 'axios';
const regex = /\*phone\*/g;
const phone = '+79096573052';
const services = JSON.parse(fs.readFileSync('services.json', 'utf-8').replace(regex, phone));

for (let key in services) {
  const service = services[key]
  service.data.phone = phone;

  axios.post(service.url, service.data)
  .then(res => {
    console.log(`${service.url} | ${res.status}`)
  })
  .then((res) => {
    cobsole.log(res)
  })
  .catch(err => {
    console.log(`${service.url} | ${err.response.status}`);
   });
