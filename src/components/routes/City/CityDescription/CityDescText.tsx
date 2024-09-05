import { ReactNode } from 'react';

type CityDescContainerType = {
  children: ReactNode;
};

function CityDescContainer({ children }: CityDescContainerType) {
  return <div className=" px-3 py-2">{children}</div>;
}

export default CityDescContainer;
