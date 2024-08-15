function LoadingError({ errorCitiesRu }) {
  if (errorCitiesRu) {
    // Обработка ошибок
    let errorMessage = 'Something went wrong';

    if ('status' in errorCitiesRu) {
      // Обработка ошибок FetchBaseQueryError
      errorMessage = `Error ${errorCitiesRu.status}: ${errorCitiesRu.data ? JSON.stringify(errorCitiesRu.data) : 'No details'}`;
    } else if ('message' in errorCitiesRu) {
      // Обработка ошибок SerializedError
      errorMessage = errorCitiesRu.message;
    }

    return (
      <div>
        <p>{errorMessage}</p>
      </div>
    );
  }
}
export default LoadingError;
