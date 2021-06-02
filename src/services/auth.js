import { client } from "./client";

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

export const setAuthToken = (token) => {
  if (token) {
    client.defaults.headers.common["x-auth-token"] = token;
    localStorage.setItem("token", token);
  } else {
    delete client.defaults.headers.common["x-auth-token"];
    localStorage.removeItem("token");
  }
};

export async function signup(dataform) {
  console.log(dataform);

  try {
    const res = await client.post("/users", dataform);
    if (res.status === 200) {
      return res.data;
    } else if (res.status === 401) {
      alert("حدث خطأ يرجى المحاوله");
    }
  } catch (err) {
    console.log(err.response);
  }
}
