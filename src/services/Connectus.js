import { client } from "./client";

export const Connectus = async (dataform) => {
  try {
    const res = await client.post("/connectus", dataform);
    return {
      data: res.data,
    };
  } catch (err) {
    return {
      data: { msg: err },
    };
  }
};
