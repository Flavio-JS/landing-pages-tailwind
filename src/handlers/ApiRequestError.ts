type APIErrorObject =
  | {
      type: "connection";
      errorMessage: string;
    }
  | {
      type: "unknown";
      errorMessage: string;
    }
  | {
      type: "api";
      status: number;
      errorMessage: string;
      stack?: string;
    };

const APIErrorObjectToString = (e: APIErrorObject) => {
  if (e.type === "api") return `${e.status} - ${e.errorMessage}`;
  return e.errorMessage;
};

export class ApiRequestError extends Error {
  details: APIErrorObject;

  constructor(error: APIErrorObject) {
    super(APIErrorObjectToString(error));
    this.details = error;

    Object.setPrototypeOf(this, ApiRequestError.prototype);
  }
}
