import { m } from "framer-motion";
import Image from "next-image-export-optimizer";

import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import Link from "@/components/common/Link";
import ListCard from "@/components/common/ListCard";
import Screen from "@/components/common/Screen";
import Typography from "@/components/common/Typography";
import ArrowRightIcon from "@/components/icons/ArrowRight";
import CheckOutlineIcon from "@/components/icons/CheckOutline";
import DiamondIcon from "@/components/icons/Diamond";
import EyeIcon from "@/components/icons/Eye";
import TargetIcon from "@/components/icons/Target";
import config from "@/config";
import logo from "@/images/OPTIMUS/logo.svg";

import styles from "./about.module.scss";

const AboutStart = () => {
  return (
    <>
      <Screen backgroundColor="secondary">
        <section className={styles.intro}>
          <div>
            <span>OPTIMUS Jr.</span>
            <h1>A Empresa Junior de Controle e Automação.</h1>
            <p>Trazemos conforto, segurança e economia para os seus ambientes.</p>

            <m.div animate="rest" whileHover="hover">
              <Button as={Link} href={config.BUDGET_URL}>
                Faça um Orçamento
                <ArrowRightIcon
                  as={m.svg}
                  variants={{ hover: { x: [0, 5, 0], transition: { repeat: Infinity } } }}
                />
              </Button>
            </m.div>
          </div>

          <Card className={styles.image}>
            <Image
              alt="Logotipo da OPTIMUS Jr."
              placeholder="empty"
              src={logo}
              width={350}
              priority
            />
          </Card>
        </section>

        <ul className={styles.list}>
          <ListCard>
            <TargetIcon />

            <Typography variant="h3">Missão</Typography>
            <Typography>
              Desenvolver nossos membros na área de automação, através da vivência empresarial, com
              foco em trazer a melhor experiência para os nossos clientes.
            </Typography>
          </ListCard>

          <ListCard>
            <DiamondIcon />

            <Typography variant="h3">Valores</Typography>
            <ul className={styles.values}>
              <Typography component="li" variant="p">
                <CheckOutlineIcon /> Autonomia
              </Typography>
              <Typography component="li" variant="p">
                <CheckOutlineIcon /> Resiliência
              </Typography>
              <Typography component="li" variant="p">
                <CheckOutlineIcon /> Comprometimento com resultados
              </Typography>
              <Typography component="li" variant="p">
                <CheckOutlineIcon /> Sentimento de Ser Dono
              </Typography>
              <Typography component="li" variant="p">
                <CheckOutlineIcon /> Orgulho de ser OPTIMUS
              </Typography>
            </ul>
          </ListCard>

          <ListCard>
            <EyeIcon />

            <Typography variant="h3">Visão</Typography>
            <Typography>
              Entrar e atuar com constância no mercado de automação residencial, com preços justos e
              qualidade de excelência, gerando conforto, praticidade e economia para os clientes.
            </Typography>
          </ListCard>
        </ul>
      </Screen>
    </>
  );
};

export default AboutStart;
