class EvaluationError extends Error {
  line: number;

  column: number;

  offset: number;

  constructor(message, line, column, offset) {
    super(`${message} on line ${line} column ${column}`);
    this.name = 'ExpressionError';
    this.line = line;
    this.column = column;
    this.offset = offset;
  }
}

export default EvaluationError;
