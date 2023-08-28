import { api } from "../../api/apiSlice";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createCandidate: builder.mutation({
      query: (credentials) => ({
        url: `/candidate`,
        method: "POST",
        body: credentials,
      }),
    }),
    createEmployee: builder.mutation({
      query: (credentials: any) => ({
        url: `/employee`,
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useCreateCandidateMutation, useCreateEmployeeMutation } =
  authApi;
