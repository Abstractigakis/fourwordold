import { v4 as uuidv4 } from "uuid";

export const getAnonTokenClientSide = () => {
  if (typeof window !== "undefined") {
    // run on client
    let token = localStorage.getItem("token");
    if (!token) {
      token = uuidv4();
      localStorage.setItem("token", token);
    }
    console.log({ token });
    return token;
  }
};
