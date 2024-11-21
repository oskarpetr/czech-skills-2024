import { toastError, toastSuccess } from "@/components/common/Toast";
import axios, { AxiosRequestConfig, Method } from "axios";

// studios
export async function fetchStudios() {
  return fetcher({ url: "studios", authorize: true });
}

// fetcher
const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

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
    const statusCode = error.response?.status;
    const statusText = error.response?.statusText || error.message;
    const customError = new Error(statusText);
    customError.name = statusCode.toString();

    if (showToast) {
      toastError("An error occurred. Please try again.");
    }

    throw customError;
  }
}
