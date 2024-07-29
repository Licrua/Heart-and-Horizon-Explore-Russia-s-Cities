import { City } from '@slices/cities';

const toggleSortOrderOnDate = (order: 'asc' | 'desc', cityData: Record <number, City> ) => {
  const sortedData = [...Object.values(cityData)].sort((a, b) => {
    if (order === 'asc') {
      return a.foundation_date - b.foundation_date;
    } else {
      return b.foundation_date - a.foundation_date;
    }
  } 
  );
  return sortedData;
};


export default toggleSortOrderOnDate;