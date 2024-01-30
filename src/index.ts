// function

type FuncType = (n: number, m: number, l?: number) => number;

const func: FuncType = (n, m, l) => {
  if (typeof l == "undefined") return n * m;
  return n * m * l;
};

func(25, 23);
