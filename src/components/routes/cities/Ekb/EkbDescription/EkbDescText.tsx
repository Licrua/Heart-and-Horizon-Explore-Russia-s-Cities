import { ReactNode } from 'react';

type KazanDescContainerType = {
  children: ReactNode;
};

function KazanDescContainer({ children }: KazanDescContainerType) {
  return <div className=" px-3 py-2">{children}</div>;
}

export default KazanDescContainer;
