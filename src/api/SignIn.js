import axios from 'axios'

//api를 만들어줘야하는데
export const signInApi = async (params) => {
    return new Promise((resolve, reject)=>{
        axios.post('/api/user/sign-in', params)
        .then((res)=>{
            return resolve(res);
        })
        .catch((err)=>{
            return reject(err);
        })
    });
}

export const checkApi = async () => {
    return new Promise((resolve, reject)=>{
        axios.get('/api/user/check')
        .then((res)=>{
            return resolve(res);
        })
        .catch((err)=>{
            return reject(err);
        })
    });
}