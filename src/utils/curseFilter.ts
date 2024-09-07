import Filter from 'bad-words';

interface curseFilterType {
  name: string;
  email: string;
  description: string;
}

const curseFilter = (values: curseFilterType) => {
  const filter = new Filter();
  return filter.clean(`${values.email}, ${values.name || values.description}`);
};

export default curseFilter;
