import { ReactNode } from 'react';

type EkbDescContainerType = {
  children: ReactNode;
};

function EkbDescContainer({ children }: EkbDescContainerType) {
  return <div className=" px-3 py-2">{children}</div>;
}

export default EkbDescContainer;
