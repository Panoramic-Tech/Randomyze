import { Button } from "@/components/ui/button";
import { userStore } from "@/store";
import { StoreType } from "@/store/userStore";
import { Link } from "react-router-dom";

type HeaderProps = {
  title: string;
};

export default function Header(props: HeaderProps) {
  const { title } = props;
  // Use the useStore hook to access the store state and actions
  const { setAuth } = userStore<StoreType>((state: StoreType) => state);
  return (
    <div className="flex justify-between items-center">
      <Link to={"/"} className="font-bold text-xl">
        {title}
      </Link>

      <Button onClick={() => setAuth(true)}>Connect Wallet</Button>
    </div>
  );
}
