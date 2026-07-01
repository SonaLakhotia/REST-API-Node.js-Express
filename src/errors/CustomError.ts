class CustomError<C extends string> extends Error {
  message: string;
  code?: C;
  statusCode: number;

  constructor(message: string, statusCode: number, code?: C){
    super();
    this.message = message;
    this.statusCode = statusCode;
    this.code = code;
  }
}

export default CustomError;