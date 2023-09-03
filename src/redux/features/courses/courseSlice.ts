import { api } from "../../api/apiSlice";

const courseApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllCourse: builder.query({
      query: () => `/courses`,
    }),

    getSingleCourse: builder.query({
      query: (id) => `/courses/${id}`,
    }),
  }),
});

export const { useGetAllCourseQuery, useGetSingleCourseQuery } = courseApi;
