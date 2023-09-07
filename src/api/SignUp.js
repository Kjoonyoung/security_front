import axios from 'axios'

//api를 만들어줘야하는데
export const SignUpApi = async (params) => {
    return new Promise((resolve, reject)=>{
        axios.post('/api/user/sign-up', params)
        .then((res)=>{
            return resolve(res);
        })
        .catch((err)=>{
            return reject(err);
        })
    });
}