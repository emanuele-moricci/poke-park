export const getErrorMessage = (error: unknown) =>
  error instanceof Error ? error.message : 'An error has occurred!';
