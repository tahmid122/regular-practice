/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import {
  createApi,
  fetchBaseQuery,
  BaseQueryApi,
  FetchArgs,
} from "@reduxjs/toolkit/query/react";
import { logout, setUser } from "./features/auth/authSlice";
import { RootState } from "./hooks";
import { BASEAPI } from "@/utils/baseApi";
import toast from "react-hot-toast";
// 🔹 Base Query
const baseQuery = fetchBaseQuery({
  baseUrl: BASEAPI(),
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.accessToken;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

// 🔹 Base Query with Refresh Token
const baseQueryWithTokenRefresh = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {},
) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error) {
    toast.error("Something went wrong, try again");
  }
  if (result.error?.status === 401 || result.error?.status === 403) {
    const refreshResult = await baseQuery(
      {
        url: "/auth/refresh-token",
        method: "POST",
      },
      api,
      extraOptions,
    );

    const refreshResponse = refreshResult.data as {
      success: boolean;
      data?: {
        accessToken: string;
        user?: any;
        id?: string;
      };
    };

    if (!refreshResponse?.success || !refreshResponse?.data?.accessToken) {
      api.dispatch(logout());
      return result;
    }

    const state = api.getState() as RootState;

    // ✅ update redux with new token
    api.dispatch(
      setUser({
        accessToken: refreshResponse.data.accessToken,
        id: state.auth.id!,
        user: state.auth.user!,
      }),
    );

    // ✅ retry original request with new token
    result = await baseQuery(args, api, extraOptions);
  }

  return result;
};

// 🔹 Base API
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithTokenRefresh,
  tagTypes: ["auth", "Auth"],
  endpoints: () => ({}),
});
