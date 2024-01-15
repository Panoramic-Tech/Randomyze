import { TypographyH2, TypographyLead } from "@/components/ui/typography";
import Container from "../../Layout/Container";
import { TemplateTypeWrapper } from "./components";

export default function User() {
  return (
    <Container>
      <TypographyH2>Templates</TypographyH2>
      <TypographyLead>
        Start with blank templates, pick from your personal templates or browse
        the templates library.
      </TypographyLead>
      <TemplateTypeWrapper />
    </Container>
  );
}
