import { api } from "../../api/apiSlice";

const courseApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllCourse: builder.query({
      query: () => `/courses`,
    }),

    getSingleCourse: builder.query({
      query: (id) => `/courses/${id}`,
    }),
    postOrder: builder.mutation({
      query: (courseData) => ({
        url: `/courses/order`,
        method: "POST",
        body: courseData,
      }),
    }),
  }),
});

export const {
  useGetAllCourseQuery,
  useGetSingleCourseQuery,
  usePostOrderMutation,
} = courseApi;
