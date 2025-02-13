/** @format */

interface Props {
  children: React.ReactNode;
  coordinate: number[];
}

const Status = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Status;