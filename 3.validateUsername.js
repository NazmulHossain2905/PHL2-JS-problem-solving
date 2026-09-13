// Question 3: Username Gatekeeper
const validateUsername = (username) => {
  username = username?.toLowerCase();

  if (username.length < 4) {
    return "Too Short";
  } else if (username.includes(" ")) {
    return "No Space Allowed";
  } else if (username.includes("admin")) {
    return "Reserved Word";
  } else {
    return "Available";
  }
};

console.log(
  validateUsername("rahim123") === "Available" ? "Passed ✅" : "Failed ❌",
); // "Available"	passes every rule
console.log(validateUsername("ab") === "Too Short" ? "Passed ✅" : "Failed ❌"); // "Too Short"	only 2 characters
console.log(
  validateUsername("a b") === "Too Short" ? "Passed ✅" : "Failed ❌",
); // "Too Short"	it has a space, but the length rule is checked first
console.log(
  validateUsername("abcd") === "Available" ? "Passed ✅" : "Failed ❌",
); // "Available"	exactly 4 is allowed
console.log(
  validateUsername("rahim islam") === "No Space Allowed"
    ? "Passed ✅"
    : "Failed ❌",
); // "No Space Allowed"
console.log(
  validateUsername("superadmin99") === "Reserved Word"
    ? "Passed ✅"
    : "Failed ❌",
); // "Reserved Word"	admin is in the middle
console.log(
  validateUsername("Admin_Rahim") === "Reserved Word"
    ? "Passed ✅"
    : "Failed ❌",
); // "Reserved Word"	capital A must also be caught

// console.log(validateUsername("rahim123")); // "Available"	passes every rule
// console.log(validateUsername("ab")); // "Too Short"	only 2 characters
// console.log(validateUsername("a b")); // "Too Short"	it has a space, but the length rule is checked first
// console.log(validateUsername("abcd")); // "Available"	exactly 4 is allowed
// console.log(validateUsername("rahim islam")); // "No Space Allowed"
// console.log(validateUsername("superadmin99")); // "Reserved Word"	admin is in the middle
// console.log(validateUsername("Admin_Rahim")); // "Reserved Word"	capital A must also be caught
