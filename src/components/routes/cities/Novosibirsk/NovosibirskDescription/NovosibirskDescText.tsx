import { ReactNode } from 'react';

type NovosibirskDescContainerType = {
  children: ReactNode;
};

function NovosibirskDescContainer({ children }: NovosibirskDescContainerType) {
  return <div className=" px-3 py-2">{children}</div>;
}

export default NovosibirskDescContainer;
