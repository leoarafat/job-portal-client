// // Type guards
export function isSuccessResponse(
  response: any
): response is { data: { success: boolean; data: any } } {
  return "data" in response && response.data.success === true;
}

export function isErrorResponse(
  response: any
): response is { error: { data: { success: false; message: string } } } {
  return (
    "error" in response &&
    "data" in response.error &&
    response.error.data.success === false
  );
}
// export function isSuccessResponse<T>(
//   response: SuccessResponse<T> | ErrorResponse
// ): response is SuccessResponse<T> {
//   return "data" in response && response.data.success === true;
// }

// export function isErrorResponse(
//   response: SuccessResponse<any> | ErrorResponse
// ): response is ErrorResponse {
//   return "error" in response && response.error.data.success === false;
// }
