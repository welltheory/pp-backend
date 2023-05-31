import httpStatus from 'http-status';

interface APIErrorProps {
  message: string;
  status?: number;
  errors?: any;
  stack?: any;
  details?: any;
}

class APIError extends Error {
  status: number;
  errors: any;
  stack: any;
  message: string;
  details: any;
  extra: any;
  
  constructor(props: APIErrorProps) {
    const message = props.message
      || httpStatus[props.status
        || httpStatus.INTERNAL_SERVER_ERROR]
        || 'Unknown API error';
    super(message);
    this.message = message;
    this.status = props.status || httpStatus.INTERNAL_SERVER_ERROR;
    this.errors = props.errors || [];
    this.details = props.details || null;
    if (props.stack) {
      this.stack = props.stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  toJSON = () => ({
    message: this.message,
    status: this.status,
    errors: this.errors,
    details: this.details,
  });

  static create = (props: APIErrorProps) => {
    if (props instanceof APIError) return props;
    return new APIError(props);
  };
}

export default APIError;
