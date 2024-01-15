import { cn } from "@/lib/utils";

type TypographyProps = {
  children: React.ReactNode;
  className?: string;
};

function TypographyH1(props: TypographyProps) {
  const { children, className } = props;
  const classes = cn(
    "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
    className
  );
  return <h1 className={classes}>{children}</h1>;
}

function TypographyH2(props: TypographyProps) {
  const { children, className } = props;
  const classes = cn(
    "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0",
    className
  );
  return <h2 className={classes}>{children}</h2>;
}

function TypographyH3(props: TypographyProps) {
  const { children, className } = props;
  const classes = cn(
    "scroll-m-20 text-2xl font-semibold tracking-tight",

    className
  );
  return <h3 className={classes}>{children}</h3>;
}

function TypographyLead(props: TypographyProps) {
  const { children, className } = props;
  const classes = cn("text-xl font-normal text-gray-500", className);
  return <p className={classes}>{children}</p>;
}

export { TypographyH1, TypographyH2, TypographyH3, TypographyLead };
