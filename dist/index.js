"use strict";
// utility classesz
// type utility
// Partial Type
// type User = {
//   name: string;
//   email: string;
// };
// type User2 = Partial<User>;
//
// Required Type( opposite of [partial])
// type User = {
//   name?: string;
//   email: string;
// };
// type User2 = Required<User>;
// const user: Required<User> = {};
// Record<keys,Type>
// type User = {
//   name: string;
//   email: string;
// };
// type User2 = Record<"name" | "email" | "gender", string>;
// example interface
// interface UserInfo {
//   age: number;
// }
// type UserName = "john" | "levi" | "elon" | "jack";
// const users: Record<UserName, UserInfo> = {
//   john: { age: 34 },
//   levi: { age: 34 },
//   elon: { age: 34 },
//   jack: { age: 34 },
// };
// Pick <Type,Keys>
// interface OrderInfo {
//   readonly id: string;
//   user: string;
//   city: string;
//   state: string;
//   country: string;
//   status: string;
// }
// // type ShipppingInfo = Pick<OrderInfo, "city" | "state" | "country">;
// interface ShipppingInfo {
//   city: string;
//   state: string;
//   country: string;
// }
// type Random = Omit<ShipppingInfo, "country">;
// Exclude<Type,ExcludeUnion>
// // type Random = Extract<MyUnion, boolean>;
// type Random = Exclude<MyUnion, boolean>;
// type MyUnion = string | number | boolean;
// type Random = NonNullable<MyUnion>;
// const myfunc = (a: number, b: string) => {
//   console.log(a + b);
// };
// type Random = Parameters<typeof myfunc>;
// class SampleClass {
//   constructor(public s: string, public t: string) {}
// }
// type Random = ConstructorParameters<typeof SampleClass>;
// Return type
const myfunc = (a, b) => {
    console.log(a + b);
};
