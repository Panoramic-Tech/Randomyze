import { Card, CardContent } from "@/components/ui/card";

type CtaCardProps = {
  icon: React.ReactNode;
  description: string;
  onClick: () => void;
};
export default function CtaCard(props: CtaCardProps) {
  const { icon, description, onClick } = props;
  return (
    <Card
      className="bg-[#232c5b] border-none items-center flex justify-center flex-col max-w-[280px] min-w-[280px] min-h-[250px] max-h-[250px] w-full cursor-pointer hover:bg-[#1e2452] transition-all duration-200 ease-in-out"
      onClick={onClick}
    >
      <CardContent className="flex flex-col justify-center items-center pt-6">
        <div className="w-16 h-16">{icon}</div>
        <p className="text-gray-400">{description}</p>
      </CardContent>
    </Card>
  );
}
