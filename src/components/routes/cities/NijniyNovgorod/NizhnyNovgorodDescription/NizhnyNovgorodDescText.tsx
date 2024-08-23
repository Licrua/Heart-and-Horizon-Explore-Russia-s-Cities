import { ReactNode } from 'react';

type NizhnyNovgorodDescContainerType = {
  children: ReactNode;
};

function NizhnyNovgorodDescContainer({
  children,
}: NizhnyNovgorodDescContainerType) {
  return <div className=" px-3 py-2">{children}</div>;
}

export default NizhnyNovgorodDescContainer;
