const { StatusCodes } = require("http-status-codes");

class ErrorHandler extends Error {
  constructor(statusCode, error) {
    super();
    this.error = error;
    this.statusCode = statusCode;
  }
}

const errorHandlerMiddleware = (err, req, res, nex) => {
  const { statusCode, error } = err;
  const status = statusCode || StatusCodes.INTERNAL_SERVER_ERROR;

  res.status(status).json({ error: err });
};

module.exports = { errorHandlerMiddleware, ErrorHandler };
