import { ReactNode } from 'react';

type OmskDescContainerType = {
  children: ReactNode;
};

function OmskDescContainer({ children }: OmskDescContainerType) {
  return <div className=" px-3 py-2">{children}</div>;
}

export default OmskDescContainer;
