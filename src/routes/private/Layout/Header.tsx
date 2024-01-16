import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { userStore } from "@/store";

type HeaderProps = {
  title: string;
};

export default function Header(props: HeaderProps) {
  const { title } = props;
  const { setAuth } = userStore();
  const handleLogout = () => {
    setAuth(false);
  };
  const dropdownMenuItems = [
    { itemName: "Profile" },
    { itemName: "Settings" },
    { itemName: "Logout", onClick: handleLogout },
  ];
  return (
    <div className="flex justify-between items-center mb-4">
      <Link to={"/"} className="font-bold text-xl">
        {title}
      </Link>
      <div className="flex gap-8 items-center">
        <Button>New Post</Button>
        <ProfileMenu dropdownMenuItems={dropdownMenuItems}>
          <Avatar className="ml-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </ProfileMenu>
      </div>
    </div>
  );
}
