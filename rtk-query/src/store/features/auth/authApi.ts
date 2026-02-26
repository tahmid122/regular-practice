/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "@/store/api";
import { T_ApiResponse } from "@/types";
import { OTPResponse, TLogin, TSignUp, TUser } from "@/types/auth/auth";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<
      T_ApiResponse<{ user: TSignUp; otpResponse: any }>,
      any
    >({
      query: (credentials) => ({
        url: "/auth/signup",
        method: "POST",
        body: credentials,
      }),
    }),
    verifyAccount: builder.mutation<any, any>({
      query: (credentials) => ({
        url: "/auth/verify-account",
        method: "POST",
        body: credentials,
      }),
    }),
    loginUser: builder.mutation<
      T_ApiResponse<{ user: TUser; accessToken: string }>,
      TLogin
    >({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    forgotPassword: builder.mutation<
      T_ApiResponse<{ message: string; otpResponse: OTPResponse }>,
      { email: string }
    >({
      query: (credentials) => ({
        url: "/auth/forgot-pwd",
        method: "POST",
        body: credentials,
      }),
    }),
    forgotVerifyOtp: builder.mutation<
      T_ApiResponse<{ message: string; resetToken: string }>,
      { email: string; otp: string }
    >({
      query: (credentials) => ({
        url: "/auth/forgot-pwd/verify-otp",
        method: "POST",
        body: credentials,
      }),
    }),
    forgotResetPassword: builder.mutation<
      T_ApiResponse<{ message: string }>,
      { resetToken: string; newPassword: string }
    >({
      query: (credentials) => ({
        url: "/auth/forgot-pwd/reset-pwd",
        method: "POST",
        body: credentials,
      }),
    }),
    changePassword: builder.mutation<
      T_ApiResponse<{ message: string }>,
      { oldPassword: string; newPassword: string }
    >({
      query: (credentials) => ({
        url: "/auth/change-password",
        method: "PATCH",
        body: credentials,
      }),
    }),
  }),
});

export const {
  useSignUpMutation,
  useVerifyAccountMutation,
  useLoginUserMutation,
  useForgotPasswordMutation,
  useForgotVerifyOtpMutation,
  useForgotResetPasswordMutation,
  useChangePasswordMutation,
} = authApi;
