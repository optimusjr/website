import type * as Form from "@/types/formSchemaType";

enum PAGE_POSITION {
  FIRST,
  MIDDLE,
  LAST,
}

function isValidPage(page: Form.Page, formData: Form.Answers) {
  if (page.rule === undefined) {
    return true;
  }

  const conditionValue = formData[page.rule.condition.variable];
  if (conditionValue === undefined) {
    return false;
  }

  if (page.rule.effect === "SHOW") {
    return conditionValue === page.rule.condition.be;
  } else if (page.rule.effect === "HIDE") {
    return !(conditionValue === page.rule.condition.be);
  } else {
    return true;
  }
}

const getNextValidPageIndex = (
  currentIndex: number,
  formSchema: Form.Schema,
  formData: Form.Answers
): number | undefined => {
  let nextIndex = currentIndex + 1;

  while (
    nextIndex < formSchema.pages.length &&
    !isValidPage(formSchema.pages[nextIndex], formData)
  ) {
    nextIndex++;
  }

  return nextIndex < formSchema.pages.length ? nextIndex : undefined;
};

const getPreviousValidPageIndex = (
  currentIndex: number,
  formSchema: Form.Schema,
  formData: Form.Answers
): number => {
  let previousIndex = currentIndex - 1;

  while (previousIndex > 0 && !isValidPage(formSchema.pages[previousIndex], formData)) {
    previousIndex--;
  }

  return previousIndex;
};

function submit(data: Form.Answers) {
  fetch("https://formsubmit.co/ajax/silash35@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

export { getNextValidPageIndex, getPreviousValidPageIndex, PAGE_POSITION, submit };
