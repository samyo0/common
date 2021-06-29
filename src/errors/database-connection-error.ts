import { CustomError } from './custom-error';

export class DatabaseConnectionError extends CustomError {
  reason = 'Error Database connection';
  statusCode = 500;

  constructor() {
    super('Invalid request parameter');
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [
      { message: this.reason }
    ]
  }
}