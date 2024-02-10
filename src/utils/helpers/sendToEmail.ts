import config from "@/config";

interface Data {
  [key: string]: string | boolean;
}

async function sendToEmail(data: Data, formName: string) {
  const formSubmit = await post(`https://formsubmit.co/ajax/${config.EMAIL}`, data);

  if (formSubmit.error !== undefined) {
    // Add "$" in every key name, because Static Forms only show custom keys
    // that start with the $ symbol.
    const newData: Data = {};
    for (const key in data) {
      newData[`$${key}`] = data[key];
    }

    const staticForms = await post(`https://api.staticforms.xyz/submit`, {
      accessKey: config.STATIC_FORMS_ACCESS_KEY,
      ...newData,
    });

    if (staticForms.error !== undefined) {
      // Tentar enviar o erro por email para poder ser analisado
      await post(`https://formsubmit.co/ajax/${config.EMAIL}`, {
        title: "Erro ao enviar formulário " + formName,
        error: JSON.stringify({
          formSubmitError: formSubmit.error,
          staticFormsError: staticForms.error,
        }),
      });

      throw new Error("Erro ao enviar formulário");
    }
  }
}

export { type Data, sendToEmail };

async function post(url: string, data: Data) {
  let res;
  let error;

  try {
    res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data, jsonReplacer),
    });

    if (res.status !== 200) {
      throw new Error("Requisição não retornou 200");
    }
    if (!res.ok) {
      throw new Error(res.statusText);
    }
  } catch (e) {
    error = e;
  }

  return { res, error };
}

const jsonReplacer = (key: string, value: Data[""]) => {
  if (value === true) {
    return "verdadeiro";
  }

  if (value === false) {
    return "falso";
  }

  if (value === "") {
    return undefined;
  }

  return value;
};
