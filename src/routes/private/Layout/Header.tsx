import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
      <div className="flex gap-2 mt-16 items-center">
        <Button>New Post</Button>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
