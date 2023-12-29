import ListCard from "@/components/ListCard";
import QuoteButton from "@/components/QuoteButton";
import Screen from "@/components/Screen";
import Typography from "@/components/Typography";

import styles from "./landingPageStart.module.scss";

interface Props {
  children: React.ReactNode;
}

const LandingPageStart = ({ children }: Props) => (
  <Screen backgroundColor="secondary">{children}</Screen>
);

LandingPageStart.intro = ({ children }: Props) => (
  <section className={styles.intro}>
    {children}

    <QuoteButton />
  </section>
);

interface FeaturesProps {
  features: {
    icon: () => React.ReactElement;
    title: string;
    description: string;
  }[];
}

LandingPageStart.features = ({ features }: FeaturesProps) => (
  <ul className={styles.list}>
    {features.map((feature, key) => (
      <ListCard key={key}>
        <feature.icon />

        <Typography variant="h3">{feature.title}</Typography>
        <Typography>{feature.description}</Typography>
      </ListCard>
    ))}
  </ul>
);

export default LandingPageStart;
