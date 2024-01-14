import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type HeaderProps = {
  title: string;
};

export default function Header(props: HeaderProps) {
  const { title } = props;
  return (
    <div className="flex justify-between items-center">
      <Link to={"/"} className="font-bold text-xl">
        {title}
      </Link>

      <Button>Connect Wallet</Button>
    </div>
  );
}
