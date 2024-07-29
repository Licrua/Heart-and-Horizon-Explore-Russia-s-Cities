import { City } from '@slices/cities';

const toggleSortOrderOnPopulation = (order: 'asc' | 'desc', cityData: Record <number, City> ) => {
  const sortedData = [...Object.values(cityData)].sort((a, b) => {
    if (order === 'asc') {
      return a.population - b.population;
    } else {
      return b.population - a.population;
    }
  } 
  );
  return sortedData;
};


export default toggleSortOrderOnPopulation;