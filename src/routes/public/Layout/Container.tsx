import Header from "./Header";

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container(props: ContainerProps) {
  return (
    <div className="w-full min-h-screen h-full p-4 bg-[#ffffff]">
      <div className="w-full h-full  max-w-screen-xl mx-auto">
        <Header title="Randomyze" />
        {props.children}
      </div>
    </div>
  );
}
