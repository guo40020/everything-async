export type FilterPredicateFunc<T> = (value: T, index: number, arr: T[]) => Promise<boolean> | boolean;

export async function filter<T>(arr: T[], predicate: FilterPredicateFunc<T>) {
  const predicateResults = await Promise.all(arr.map((v, i) => predicate(v, i, arr)));
  return arr.filter((_, i) => predicateResults[i]);
}
