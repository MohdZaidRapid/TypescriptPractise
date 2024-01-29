// Array
// type UserName = string | number;
type UserName = (n: string, m: string) => string;

// let a: UserName = 20;

const func: UserName = (n, m): string => {
  console.log(n, m);
  return n + m;
};
