

function LoadingError({ error }) {
  if (error) {
    // Обработка ошибок
    let errorMessage = 'Something went wrong';

    if ('status' in error) {
      // Обработка ошибок FetchBaseQueryError
      errorMessage = `Error ${error.status}: ${error.data ? JSON.stringify(error.data) : 'No details'}`;
    } else if ('message' in error) {
      // Обработка ошибок SerializedError
      errorMessage = error.message;
    }

    return (
      <div>
        <p>{errorMessage}</p>
      </div>
    );
  }
}
export default LoadingError;
