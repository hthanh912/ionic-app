export interface ApiRequest {
    uri: string;
    body?: any;
    headers?: { [key: string]: string };
  }
  
  export class ApiResponse<T> {
    constructor(public data: T) // public error: string,
    // public statusCode: number
    { }
  }
  
  export class ApiError extends Error {
    constructor(name: string, public errorCode: string, message: string, public data?: any) {
      super(message); // Call the base class constructor (Error)
      this.name = name;
    }
}