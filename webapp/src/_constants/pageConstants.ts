export interface pageInfo {
  route: string;
  name: string;
}

export const pageNames = {
  anagram: {
    route: "anagram-solver",
    name: "Anagram Solver",
  } as pageInfo,
  wordel: {
    route: "wordel-but-harder",
    name: "Wordel but Harder",
  } as pageInfo,
  fourDee: {
    route: "4D-crossword",
    name: "4D Crossword",
  } as pageInfo,
};
