import { useRouter } from "next/navigation";
import { useState } from "react";

import SendButton from "@/components/others/SendButton";
import Alert from "@/components/ui/Alert";
import Card from "@/components/ui/Card";
import Link from "@/components/ui/Link";
import TextField from "@/components/ui/TextField";
import config from "@/config";
import { sendToEmail } from "@/utils/helpers/sendToEmail";

const FormCard = () => {
  const [isLoading, setLoading] = useState(false);
  const [submissionError, setSubmissionError] = useState(false);
  const router = useRouter();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setSubmissionError(false);

    sendToEmail(
      {
        nome: event.currentTarget.nome.value,
        email: event.currentTarget.email.value,
        mensagem: event.currentTarget.mensagem.value,
      },
      "Formulário de contato",
    )
      .then(() => {
        router.push("/thanks");
      })
      .catch(() => {
        setSubmissionError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <Card
      as="form"
      bgColor="white"
      className="flex flex-col gap-6 p-8 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-4"
      onSubmit={handleSubmit}
    >
      <Card.title className="text-center">Mande uma mensagem</Card.title>
      <TextField autoComplete="name" label="Nome:" name="nome" required />
      <TextField autoComplete="email" label="E-mail:" name="email" type="email" required />
      <TextField label="Sua mensagem:" name="mensagem" multiline required />

      <div>
        <Alert className="mb-6" severity="error" show={submissionError}>
          <p>Ops! Algo deu errado. Não se preocupe, não é culpa sua. Por favor, tente novamente.</p>
          <p>
            Se o problema persistir, nos avise&nbsp;
            <Link className="text-base" href={config.WHATSAPP_LINK}>
              clicando&nbsp;aqui
            </Link>
            .
          </p>
        </Alert>
        <SendButton className="ml-auto" loading={isLoading} />
      </div>
    </Card>
  );
};

export default FormCard;
