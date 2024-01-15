import { Card, CardContent } from "@/components/ui/card";
import { TypographyH3 } from "@/components/ui/typography";

type NoTemplatesCardProps = {
  title: string;
  description: string;
};
export default function NoTemplatesCard(props: NoTemplatesCardProps) {
  const { title, description } = props;
  return (
    <Card>
      <CardContent className="flex flex-col justify-center items-center pt-6 min-h-[300px] gap-4">
        <TypographyH3 className="font-normal">{title}</TypographyH3>
        <p className="text-gray-400">{description}</p>
      </CardContent>
    </Card>
  );
}
