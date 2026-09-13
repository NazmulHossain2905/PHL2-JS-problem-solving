// Question 2: Bangladesh Weekend Machine

const getDayType = (day) => {
  const lowerCaseDay = day?.toLowerCase();

  switch (lowerCaseDay) {
    case "friday":
    case "saturday":
      return "Weekend";

    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day";
    default:
      return "Invalid Day";
  }
};

console.log(getDayType("Friday") === "Weekend" ? "Passed ✅" : "Failed ❌");
console.log(getDayType("friday") === "Weekend" ? "Passed ✅" : "Failed ❌");
console.log(getDayType("MONDAY") === "Working Day" ? "Passed ✅" : "Failed ❌");
console.log(
  getDayType("Bandarban") === "Invalid Day" ? "Passed ✅" : "Failed ❌",
);

// console.log(getDayType("Friday")); // "Weekend"
// console.log(getDayType("friday")); // "Weekend"
// console.log(getDayType("MONDAY")); // "Working Day"
// console.log(getDayType("Bandarban")); // "Invalid Day"
