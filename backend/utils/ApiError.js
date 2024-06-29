class ApiError extends Error {
  constructor(
    statusCode,
    message = "something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message); //this is error.message from error classs
    this.statusCode = statusCode;
    this.data = null; //In error there is no data
    this.message = message;
    this.success = false; //success should be false in case of error
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };

//supper(message)
//status code
//data
//message            these are stander data we should return is error
//success
//error
//stack
