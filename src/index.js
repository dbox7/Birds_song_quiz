import './style.scss'
import './welcome.js'
import './db_detective.js'

const query = []

while (query.length < 10) {
    const res = Math.ceil(Math.random()*10);
    if (!query.includes(res)) {
        query.push(res);
    };  
}

console.log(query);