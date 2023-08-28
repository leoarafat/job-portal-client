import { api } from "../../api/apiSlice";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    loginCandidate: builder.mutation({
      query: (credentials) => ({
        url: `/auth/candidate/login`,
        method: "POST",
        body: credentials,
      }),
    }),
    loginEmployee: builder.mutation({
      query: (credentials) => ({
        url: `/auth/employee/login`,
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginCandidateMutation, useLoginEmployeeMutation } = authApi;
