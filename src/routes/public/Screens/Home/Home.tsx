import { TypographyH1 } from "@/components/ui/typography";
import Container from "../../Layout/Container";

import { illustration1Svg, exploreSvg } from "./assets";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col w-full h-full justify-center">
        <div className="flex w-full items-center pt-16">
          <TypographyH1 className="leading-8">
            When you can’t decide “Randomyze”
          </TypographyH1>
          <img src={illustration1Svg} alt="illustration" />
        </div>
        <div className="flex gap-2 mt-16 items-center">
          <TypographyH1>How it works</TypographyH1>
          <img src={exploreSvg} className="h-[80px] w-[80px]" alt="explore" />
        </div>
      </div>
    </Container>
  );
}
