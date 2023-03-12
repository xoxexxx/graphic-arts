import axios from "axios";

const client = axios({
    method: 'PUT',
    url: 'http://217.25.88.184:8080/api-authlogin/?next=/auth',
    data: usr,
    headers: {
              'Content-Type': 'application/json',
    }
})