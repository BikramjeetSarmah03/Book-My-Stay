import toast from "react-hot-toast";
import { z } from "zod";

import { API } from "@/lib/api";
import { registerFormSchema } from "@/app/(auth)/sign-up/page";

export async function registerUser(values: z.infer<typeof registerFormSchema>) {
  try {
    const { data: resData } = await API.post("/api/v1/auth/register", values);

    if (resData.success) {
      toast.success(resData.message);
    }

    return resData;
  } catch (error) {
    return error;
  }
}

export async function validateToken() {
  try {
    const { data: resData } = await API.get("/api/v1/auth/validate-token");

    return resData;
  } catch (error) {
    return error;
  }
}
