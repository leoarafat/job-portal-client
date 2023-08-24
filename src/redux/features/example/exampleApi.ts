import { BookData, IBooks, ReadData } from "../../../types/globalTypes";
import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getLatestBooks: builder.query({
      query: () => "/books/latest-book",
    }),

    getBooks: builder.query({
      query: (params) => `/books${params ? `?${params}` : ""}`,
      providesTags: ["post", "deletepost"],
    }),
    createBook: builder.mutation<BookData, Partial<BookData>>({
      query: (bookData: IBooks) => ({
        url: "/books",
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ["post"],
    }),
    singleBook: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: ["update"],
    }),
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/comment/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comments"],
    }),
    getComment: builder.query({
      query: (id) => `/books/comment/${id}`,
      providesTags: ["comments"],
    }),
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["update"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["deletepost"],
    }),
    createWishlist: builder.mutation<BookData, Partial<BookData>>({
      query: (bookData: IBooks) => ({
        url: "/books/wishlist",
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ["wishlist"],
    }),
    createReadingList: builder.mutation<ReadData, Partial<ReadData>>({
      query: (bookData: IBooks) => ({
        url: "/books/reading-list",
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ["reading-list"],
    }),
    removeWishlist: builder.mutation<IBooks | null, string>({
      query: (bookId) => ({
        url: `/books/wishlist/${bookId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["wishlist"],
    }),
    removeReadingList: builder.mutation<IBooks | null, string>({
      query: (bookId) => ({
        url: `/books/reading-list/${bookId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["reading-list"],
    }),

    getWishlist: builder.query({
      query: () => "/books/wishlist",
      providesTags: ["wishlist"],
    }),

    getReadingList: builder.query({
      query: () => "/books/reading-list",
      providesTags: ["reading-list"],
    }),
  }),
});

export const {
  useGetLatestBooksQuery,
  useGetBooksQuery,
  useSingleBookQuery,
  usePostCommentMutation,
  useGetCommentQuery,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useCreateBookMutation,
  useCreateWishlistMutation,
  useRemoveWishlistMutation,
  useGetWishlistQuery,
  useCreateReadingListMutation,
  useGetReadingListQuery,
  useRemoveReadingListMutation,
} = bookApi;
