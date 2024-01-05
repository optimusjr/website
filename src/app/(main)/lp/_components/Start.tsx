import ListCard from "@/components/ListCard";
import QuoteButton from "@/components/QuoteButton";
import Screen from "@/components/Screen";
import Typography from "@/components/Typography";

interface Props {
  children: React.ReactNode;
}

const Start = ({ children }: Props) => (
  <Screen backgroundColor="secondary" gap padding>
    {children}
  </Screen>
);

Start.intro = ({ children }: Props) => (
  <section className="flex flex-col items-center gap-4 py-8 animate-fade-in lg:py-16">
    {children}

    <QuoteButton />
  </section>
);

Start.span = ({ children }: Props) => (
  <Typography
    className="text-[length:calc(1rem+1vw)] font-bold"
    color="primary"
    component="span"
    variant="p"
  >
    {children}
  </Typography>
);

Start.h1 = ({ children }: Props) => (
  <Typography className="text-center text-[length:calc(2rem+2vw)] leading-none" variant="h1">
    {children}
  </Typography>
);

Start.p = ({ children }: Props) => (
  <Typography className="text-[length:calc(1rem+1vw)]" variant="p">
    {children}
  </Typography>
);

interface FeaturesProps {
  features: {
    icon: () => React.ReactElement;
    title: string;
    description: string;
  }[];
}

Start.features = ({ features }: FeaturesProps) => (
  <ul className="grid gap-8 lg:grid-cols-3">
    {features.map((feature, key) => (
      <ListCard key={key}>
        <feature.icon />

        <Typography variant="h3">{feature.title}</Typography>
        <Typography>{feature.description}</Typography>
      </ListCard>
    ))}
  </ul>
);

export default Start;
