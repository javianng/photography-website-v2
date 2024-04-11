type ContainerProps = {
  children: React.ReactNode;
};

const Container = (props: ContainerProps) => {
  const { children } = props;

  return (
    <div className="flex justify-center">
      <div className="w-11/12 max-w-7xl px-5">{children}</div>
    </div>
  );
};

export default Container;
