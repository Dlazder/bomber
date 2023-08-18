import fs from 'fs';
import axios from 'axios';

const regex = /\*phone\*/g;
const phone = '+79096573052';

const services = JSON.parse(fs.readFileSync('services.json', 'utf-8').replace(regex, phone));

for (let i in services) {
    const service = services[i]

    axios.post(service.url, service.data)
    .then(res => console.log('responce code:', res.status))
    .catch(err => {console.log(err)})
}