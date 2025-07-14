// optional haining in ja vascript are used for accessing properties of an object that may not exist, preventing runtime errors.
// It allows you to safely access nested properties without having to check each level for existence.
// Syntax: object?.property or object?.[propertyName]
const user = {
  name: "Furqan",
    age: 20,
    address: {
        city: "Karachi",
        country: "Pakistan",
    },
    getDetails() {      
        return `${this.name}, ${this.age} years old, from ${this.address.city}`;
    }
};
// Accessing properties using optional chaining
console.log(user?.name); // Furqan
console.log(user?.age); // 20
console.log(user?.address?.city); // Karachi
console.log(user?.address?.country); // Pakistan
// Accessing a method using optional chaining
console.log(user?.getDetails?.()); // Furqan, 20 years old, from Karachi
// Accessing a non-existent property safely
console.log(user?.nonExistentProperty); // undefined