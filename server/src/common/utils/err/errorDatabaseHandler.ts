export const handleErrorDatabase = (error: Error): void => {
  const errorLines = error.message?.split('\n');

  if (error.message.includes('Cast to ObjectId failed for value')) {
    return;
  }

  const lastErrorLine = errorLines[errorLines.length - 1]?.trim();

  if (!lastErrorLine) {
    console.error(error);
  }

  throw new Error(lastErrorLine || 'Ocorreu um erro inesperado.');
};
