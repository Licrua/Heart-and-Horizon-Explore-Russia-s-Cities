import { ReactNode } from 'react';

type ChelyabinskDescContainerType = {
  children: ReactNode;
};

function ChelyabinskDescContainer({ children }: ChelyabinskDescContainerType) {
  return <div className=" px-3 py-2">{children}</div>;
}

export default ChelyabinskDescContainer;
