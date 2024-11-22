import { toastError, toastSuccess } from "@/components/common/Toast";
import { IAuthLogin } from "@/types/Auth.types";
import axios, { AxiosRequestConfig, Method } from "axios";

// login
export async function postLogin(loginBody: IAuthLogin) {
  return fetcher({ url: "auth/login", method: "POST", body: loginBody });
}

// get testing
export async function getTesting(userId: string) {
  return fetcher({ url: `testing/${userId}` });
}

// get testings
export async function getTestings() {
  return fetcher({ url: "testing" });
}

// post testing
export async function postTesting(userId: string, testingId: string) {
  return fetcher({
    url: `testing/${userId}`,
    method: "POST",
    body: { testingId },
  });
}

// fetcher
const API_URL = "https://cs24-api.onrender.com/api/v1/";

async function fetcher({
  url,
  method = "GET",
  body = null,
  origin = API_URL,
  showToast = true,
  successMessage,
}: {
  url: string;
  method?: Method;
  body?: object | null;
  origin?: string;
  showToast?: boolean;
  successMessage?: string;
  authorize?: boolean;
}) {
  const options: AxiosRequestConfig = {
    url: `${origin}${url}`,
    method,
    headers: {},
  };

  if (body !== null) {
    options.data = body;
    options.headers!["Content-Type"] = "application/json";
  }

  try {
    const res = await axios(options);
    if (showToast && successMessage) {
      toastSuccess(successMessage);
    }

    return res.data;
  } catch (error: any) {
    const message = "An error occurred. Please try again.";

    if (showToast) {
      toastError(message);
    }

    throw message;
  }
}
