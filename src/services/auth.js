import { client } from './client';


export async function login(dataform) {

    // console.log(dataform)
    // console.log(dataform?.password, dataform?.username);
    try {
        const res = await client.post('/auth', dataform)
        // .then(e => { sessionStorage.setItem('token', e.data.token) })
        if (res.status === 200) {
            return res.data;

        }
        console.log(res.data);
        if (res.status === 401) {
            alert('حدث خطأ برجاء المحاوله')
        }

    } catch (err) {
        // console.log(err.response);
    }
}



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

