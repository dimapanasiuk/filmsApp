export const SEARCHFILM = "SEARCHFILM";

export function searchFilm(value) {
  return { type: SEARCHFILM, data: value };
}
