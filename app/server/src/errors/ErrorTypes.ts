export enum ErrorTypes {
  NotFound = 'NotFound',
}

type ErrorResponseObject = { 
  error: string;
  httpStatus: number;
};

export type ErrorCatalog = Record<ErrorTypes, ErrorResponseObject>;

export const errorCatalog: ErrorCatalog = {
  NotFound: {
    error: 'Object not found',
    httpStatus: 404,
  },
};