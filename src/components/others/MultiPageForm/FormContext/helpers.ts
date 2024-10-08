import type * as Form from "../formSchemaType";

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
  }
  if (page.rule.effect === "HIDE") {
    return !(conditionValue === page.rule.condition.be);
  }
  return true;
}

const getNextValidPageIndex = (
  currentIndex: number,
  formSchema: Form.Schema,
  formData: Form.Answers,
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
  formData: Form.Answers,
): number => {
  let previousIndex = currentIndex - 1;

  while (previousIndex > 0 && !isValidPage(formSchema.pages[previousIndex], formData)) {
    previousIndex--;
  }

  return previousIndex;
};

export { getNextValidPageIndex, getPreviousValidPageIndex, PAGE_POSITION };
