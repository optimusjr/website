import { PropsWithChildren } from "react";

import Screen from "@/components/others/Screen";

const Section = ({ children }: PropsWithChildren) => (
  <section className="flex max-w-screen-2xl flex-col items-start gap-4 odd:flex-col-reverse sm:gap-8 md:gap-16 lg:grid lg:grid-cols-2">
    {children}
  </section>
);

Section.content = ({ children }: PropsWithChildren) => (
  <div className="flex flex-col gap-2 2xl:text-2xl">{children}</div>
);

Section.title = (props: Omit<React.ComponentProps<typeof Screen.title>, "className">) => {
  return (
    <Screen.title className={{ wrapper: "gap-0 text-left", title: "lg:text-5xl" }} {...props} />
  );
};

Section.illustration = ({ children }: PropsWithChildren) => children;

export default Section;
