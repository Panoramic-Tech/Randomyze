import { TypographyH2, TypographyLead } from "@/components/ui/typography";
import Container from "../../Layout/Container";
import { CtaCard, NoTemplatesCard, TemplateTypeWrapper } from "./components";
import { addTemplateSvg } from "./assets";

export default function User() {
  return (
    <Container>
      <div className="flex flex-col py-4 mb-4">
        <TypographyH2>Templates</TypographyH2>
        <TypographyLead>
          Start with blank templates, pick from your personal templates or
          browse the templates library.
        </TypographyLead>
      </div>

      {/* Template Types */}

      <div className="flex flex-col gap-16">
        <TemplateTypeWrapper
          title="Blank Templates"
          description="Start with blank templates. Available in all card sizes."
          templateBody={
            <CtaCard
              description="Start with blank templates"
              icon={<img src={addTemplateSvg} />}
              onClick={() => {
                alert("Clicked");
              }}
            />
          }
        />

        <TemplateTypeWrapper
          title="Personal Templates"
          description="Start with blank templates. Available in all card sizes."
          templateBody={
            <NoTemplatesCard
              title="Personal Templates"
              description="Build your personal templates library by converting posts to re-usable templates."
            />
          }
        />

        <TemplateTypeWrapper
          title="Community Templates"
          description="Start with blank templates. Available in all card sizes."
          templateBody={
            <NoTemplatesCard
              title="Community Templates"
              description="Build your personal templates library by converting posts to re-usable templates."
            />
          }
        />
      </div>
    </Container>
  );
}
