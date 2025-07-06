function identity<T>(value: T): T {
  return value;
}
console.log(identity(6));
console.log(identity("Shine"));
console.log(identity(true));
console.log(identity([1, 2, 3]));

function giveParcel<T>(item: T): T {
  console.log("Delivering", item);
  return item;
}
console.log(giveParcel(3));
console.log(giveParcel("Shine"));

function makePair<A, B>(a: A, b: B):[A,B]{
    console.log(a,b);
    return [a,b]
};
console.log(makePair(3,"shine"));


interface Box<T>{
    item : T;
}
const num : Box<number> = {item : 5};
const string :Box<string> = {item:"Shine"}