class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400; //this will return true if statusCode is less than 400, otherwise false
  }
}

export {ApiResponse};


//status code
//data
//message            these are stander data we should return is error
//success
