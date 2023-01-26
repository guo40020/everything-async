export type MapperFunction<T, TR> = (value: T, index: number, arr: T[]) => Promise<TR>;

export async function map<TR, TI = any>(arr: TI[], fn: MapperFunction<TI, TR>) {
  return Promise.all(arr.map((v, i) => fn(v, i, arr)));
}
