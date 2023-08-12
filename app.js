import axios from 'axios';

const config = {
    "akbarsa": {
        "url": "https://www.akbars.ru/api/PhoneConfirm/",
        "json": {"phoneNumber": "+79096573052"},
        "response": 200,
        "timeout": 300
    },
}

axios.post(config.akbarsa.url, config.akbarsa.json)
.then(res => console.log('response Code:', res.status))
.catch(err => {console.log(err)})
