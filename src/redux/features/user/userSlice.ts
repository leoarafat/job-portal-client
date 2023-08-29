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
    updateCandidate: builder.mutation({
      query: ({ id, data }) => ({
        url: `/candidate/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["update"],
    }),
    updateEmployee: builder.mutation({
      query: ({ id, data }) => ({
        url: `/employee/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["update"],
    }),
  }),
});

export const {
  useCreateCandidateMutation,
  useCreateEmployeeMutation,
  useUpdateCandidateMutation,
  useUpdateEmployeeMutation,
} = authApi;
