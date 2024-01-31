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
type random = Exclude<string | number, number>;
