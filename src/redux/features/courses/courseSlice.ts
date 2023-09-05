import { api } from "../../api/apiSlice";

const courseApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllCourse: builder.query({
      query: (options) => {
        const { searchTerm, title, page, limit } = options;
        let query = "/courses?";

        if (searchTerm) {
          query += `searchTerm=${searchTerm}&`;
        }

        if (title) {
          query += `title=${title}&`;
        }

        query += `page=${page}&limit=${limit}`;
        return query;
      },
    }),

    getCourseTitle: builder.query({
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
    getOrderById: builder.query({
      query: (id) => `/courses/${id}`,
    }),
  }),
});

export const {
  useGetAllCourseQuery,
  useGetSingleCourseQuery,
  usePostOrderMutation,
  useGetCourseTitleQuery,
  useGetOrderByIdQuery,
} = courseApi;
