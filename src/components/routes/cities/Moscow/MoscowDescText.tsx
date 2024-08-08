import { ReactNode } from 'react';

type MoscowDescContainerType = {
  children: ReactNode;
};

function MoscowDescContainer({ children }: MoscowDescContainerType) {
  return <div className=" px-3 py-2">{children}</div>;
}

export default MoscowDescContainer;
