import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type TemplateTypeWrapperProps = {
  title: string;
  description: string;
  templateBody: React.ReactNode;
  templateFooter?: React.ReactNode;
};
export default function TemplateTypeWrapper(props: TemplateTypeWrapperProps) {
  const { title, description, templateBody, templateFooter } = props;

  return (
    <Card className="bg-transparent text-white">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{templateBody}</CardContent>
      {templateFooter && <CardFooter>{templateFooter}</CardFooter>}
    </Card>
  );
}
