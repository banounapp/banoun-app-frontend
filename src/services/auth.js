import { client } from "./client";

//API Login
export async function login(dataform) {
    let result = { data: null, isError: true, errorMessage: "" };
    const res = await client.post("/auth", dataform);
    if (res.data.code === 0) {
        result = { data: res.data, isError: false, errorMessage: "" };
        return result;
    } else if (res.data.code == 1) {
        result = {
            data: null,
            isError: true,
            errorMessage: "اسم المستخدم او كلمة المرور غير صحيح",
        };
        return result;
    } else {
        result = {
            data: null,
            isError: true,
            errorMessage: "هذا الحساب لم يتم تفعيله، برجاء التفعيل والمحاولة مجددا",
        };
        return result;
    }
}

//API Register
export async function signup(dataform) {
    let result = { data: null, isError: true, errorMessage: "" };
    const res = await client.post("/users", dataform);
    if (res.data.code === 0) {
        result = { data: res.data, isError: false, errorMessage: "" };
        return result;
    } else if (res.data.code == 1) {
        result = {
            data: null,
            isError: true,
            errorMessage: "اسم المستخدم او كلمة المرور غير صحيح",
        };
        return result;
    } else {
        result = {
            data: null,
            isError: true,
            errorMessage: "هذا الحساب لم يتم تفعيله، برجاء التفعيل والمحاولة مجددا",
        };
        return result;
    }
}