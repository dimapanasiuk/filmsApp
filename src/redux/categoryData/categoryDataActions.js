export const CHOOSECATEGORY = "CHOOSECATEGORY";

export function chooseCategory(value) {
  return { type: CHOOSECATEGORY, data: value };
}
