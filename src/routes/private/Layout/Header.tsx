import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

type HeaderProps = {
  title: string;
};

export default function Header(props: HeaderProps) {
  const { title } = props;
  return (
    <div className="flex justify-between items-center mb-4">
      <Link to={"/"} className="font-bold text-xl">
        {title}
      </Link>
      <div className="flex gap-8 items-center">
        <Button>New Post</Button>
        <Avatar className="ml-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
