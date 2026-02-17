   <!-- Ques 1 -->

1. What is the difference between null and undefined?
   Ans: undefined means declare that variable but value not assigned like that
   const name;
   And null means empty value that I assigned like that
   const name= null;

   <!-- Ques 2 -->

2. What is the use of the map() function in JavaScript? How is it different from forEach()?
   Ans: map() is a method to do work in every element of array or object and create or return a new array or object. forEach() also do work in every element of array or object and can do console.log(), DOM update but it not return array or object.

   <!-- Ques 3 -->

3. What is the difference between == and ===?
Ans: "==" check value with conversion like that num=5 and string="5" if (5=="5") return true. But "===" check values without conversion like that (5==="5") it returns false.

   <!-- Ques 4 -->

4. What is the significance of async/await in fetching API data?
   Ans: async/await makes fetching API data easier and more readable.
   async makes a function return a Promise.
   await pauses the code until the Promise is resolved.
   It makes asynchronous code look like normal synchronous code.
   Error handling becomes easier using try...catch.

   <!-- Ques 5 -->

5. Explain the concept of Scope in JavaScript (Global, Function, Block).
   Ans: Scope means a variable where it can be accessible.
   Global Scope is declare outside a function and block, it can use every where in a hole program.
   let name = "Tanbhir";
   function myName() {
   console.log(name);
   }

   Function Scope is declare in a function and it can useable inside the hole function but can't use outside the function.
   function test() {
   let age = 25;
   console.log(age);
   }

   Block Scope variable is declare inside a block and can be use inside that block, never accessible outside that block
   if (true) {
   let city = "Dhaka";
   console.log(city);
   }
