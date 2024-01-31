// Type Assertion
// const btn = document.getElementById("btn") as HTMLElement;
// const btn = <HTMLElement>document.getElementById("btn");
// const btn = document.getElementById("btn")!;
// btn.onclick;
// // const img = document.getElementById("myimg") as HTMLImageElement;

// const img = document.querySelector("img")!;
// // img?.src;

// img.src;

// const form = document.getElementById("myform") as HTMLFormElement;
// const myinput = document.querySelector("form > input") as HTMLInputElement;

// form.onsubmit = (e: SubmitEvent) => {
//   e.preventDefault();
//   const value = Number(myinput.value);
//   console.log(value);
//   console.log(typeof value);

//   const h2 = document.createElement("h2");

//   h2.textContent = String(value + 20);
//   const body = document.querySelector("body")!;
//   body.append(h2);
// };
interface Person {
  name: string;
  email: string;
}

const myobj: Person = {
  name: "zaid",
  email: "zaid@gamil.com",
};
