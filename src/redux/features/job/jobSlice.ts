import { api } from "../../api/apiSlice";

const jobApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postJob: builder.mutation({
      query: (credentials) => ({
        url: `/jobs`,
        method: "POST",
        body: credentials,
      }),
    }),

    updateJob: builder.mutation({
      query: ({ id, data }) => ({
        url: `/jobs/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["update"],
    }),

    getAllJobs: builder.query({
      query: (id) => `/jobs/${id}`,
    }),
    getSingleJob: builder.query({
      query: () => `/jobs`,
    }),
  }),
});

export const {
  usePostJobMutation,
  useUpdateJobMutation,
  useGetAllJobsQuery,
  useGetSingleJobQuery,
} = jobApi;
