import { client } from './client';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export async function login(dataform) {
    console.log(dataform)
    console.log(dataform?.password, dataform?.username);
    try {
        const res = await client.post('/auth', dataform);
        if (res.status === 200) {
            return res.data;
        } else if (res.status === 401) {
            // toast("Wow so easy!");

        }
        // console.log(res);
    } catch (err) {
        console.log(err.response);
    }
}


export const setAuthToken = token => {
    if (token) {
        client.defaults.headers.common['x-auth-token'] = token;
        localStorage.setItem('token', token);
    } else {
        delete client.defaults.headers.common['x-auth-token'];
        localStorage.removeItem('token');
    }
};






export async function signup(dataform) {
    console.log(dataform)

    try {
        const res = await client.post('/users', dataform);
        if (res.status === 200) {
            return res.data;
        } else if (res.status === 401) {
            alert('حدث خطأ يرجى المحاوله')
        }
    } catch (err) {
        console.log(err.response);
    }
}

