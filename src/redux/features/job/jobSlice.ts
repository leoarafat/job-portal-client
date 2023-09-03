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
      invalidatesTags: ["updateJob"],
    }),

    getAllJobs: builder.query({
      query: () => `/jobs`,
    }),

    getJobById: builder.query({
      query: (id) => `/jobs/${id}`,
    }),

    getPreviousJobs: builder.query({
      query: (id) => `/jobs/previous-jobs/${id}`,
    }),
    deleteJob: builder.mutation({
      query: (id) => ({
        url: `/jobs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["deleteJob"],
    }),
    applyJob: builder.mutation({
      query: ({ data }) => ({
        url: `/jobs/apply`,
        method: "POST",
        body: data,
      }),
    }),
    saveJobs: builder.mutation({
      query: ({ data }) => ({
        url: `/jobs/save-job`,
        method: "POST",
        body: data,
      }),
    }),
    getMyJob: builder.query({
      query: ({ id }) => `/jobs/my-application/${id}`,
    }),
  }),
});

export const {
  usePostJobMutation,
  useUpdateJobMutation,
  useGetAllJobsQuery,
  useGetJobByIdQuery,
  useGetPreviousJobsQuery,
  useDeleteJobMutation,
  useApplyJobMutation,
  useGetMyJobQuery,
  useSaveJobsMutation,
} = jobApi;
