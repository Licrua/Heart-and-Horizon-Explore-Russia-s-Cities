import React from 'react';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

type ErrorType = FetchBaseQueryError | SerializedError | undefined;

interface LoadingErrorProps {
  errorCitiesRu?: ErrorType;
  errorCitiesEn?: ErrorType;
}

const LoadingError = React.memo(
  ({ errorCitiesRu, errorCitiesEn }: LoadingErrorProps) => {
    // Функция для получения сообщения об ошибке
    const getErrorMessage = (error: ErrorType): string => {
      if (!error) return 'No error provided';

      if ('status' in error) {
        const { status, data } = error as FetchBaseQueryError;
        return `Error ${status}: ${data ? JSON.stringify(data) : 'No details'}`;
      }

      if ('message' in error) {
        // Приведение типа для гарантии строки
        return (error as SerializedError).message || 'Unknown error';
      }

      return 'Unknown error';
    };

    let errorMessage = 'Something went wrong';

    // Проверка и получение сообщения об ошибке для каждого из источников ошибок
    if (errorCitiesRu) {
      errorMessage = getErrorMessage(errorCitiesRu);
    } else if (errorCitiesEn) {
      errorMessage = getErrorMessage(errorCitiesEn);
    }

    return (
      <div>
        <p>{errorMessage}</p>
      </div>
    );
  }
);

export default LoadingError;
