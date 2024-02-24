import { PropsWithChildren } from "react";

import { ScreenTitle } from "@/components/others/Screen";

const Section = ({ children }: PropsWithChildren) => (
  <section className="flex max-w-screen-2xl flex-col items-start gap-4 odd:flex-col-reverse sm:gap-8 md:gap-16 lg:grid lg:grid-cols-2">
    {children}
  </section>
);

const SectionContent = ({ children }: PropsWithChildren) => (
  <div className="flex flex-col gap-2 2xl:text-2xl">{children}</div>
);

const SectionTitle = (props: Omit<React.ComponentProps<typeof ScreenTitle>, "className">) => {
  return (
    <ScreenTitle className={{ wrapper: "gap-0 text-left", title: "lg:text-5xl" }} {...props} />
  );
};

const SectionIllustration = ({ children }: PropsWithChildren) => children;

export { Section, SectionContent, SectionIllustration, SectionTitle };
export default Section;
