import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type ProfileMenuProps = {
  children: React.ReactNode;
  dropdownMenuItems: {
    itemName: string;
    onClick?: () => void;
  }[];
};
export default function ProfileMenu(props: ProfileMenuProps) {
  const { dropdownMenuItems } = props;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{props.children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {dropdownMenuItems.map((item, index) => (
          <DropdownMenuItem key={index} onClick={item.onClick}>
            {item.itemName}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
