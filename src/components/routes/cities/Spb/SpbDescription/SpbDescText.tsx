import { ReactNode } from 'react';

type SpbDescContainerType = {
  children: ReactNode;
};

function SpbDescContainer({ children }: SpbDescContainerType) {
  return <div className=" px-3 py-2">{children}</div>;
}

export default SpbDescContainer;
