// Question 4: Dhaka CNG Fare Meter
const getCngFare = (distance, isNight = false, waitingMinutes = 0) => {
  let distanceFare = 50;

  if (distance > 2) {
    distanceFare += (distance - 2) * 15;
  }

  const waitingCharge = waitingMinutes * 2;

  let totalFare = distanceFare + waitingCharge;

  if (isNight) {
    totalFare *= 1.2;
  }

  return totalFare;
};

// function getCngFare(distance, isNight = false, waitingMinutes = 0) {
//   let distanceFare = 50;

//   // Add charge for distance after first 2 km
//   if (distance > 2) {
//     distanceFare += (distance - 2) * 15;
//   }

//   // Add waiting charge
//   const waitingCharge = waitingMinutes * 2;

//   // Total before night charge
//   let totalFare = distanceFare + waitingCharge;

//   // Add 20% night charge
//   if (isNight) {
//     totalFare *= 1.2;
//   }

//   return totalFare;
// }

// const getCngFare = (distance, isNight = false, waitingMinutes = 0) => {
//   let totalFare = 50;

//   if (distance <= 2) {
//     totalFare += waitingMinutes * 2;
//     totalFare = isNight ? totalFare * 1.2 : totalFare;
//     return totalFare;
//   }

//   distance -= 2;

//   totalFare += distance * 15;
//   totalFare += waitingMinutes * 2;
//   totalFare = isNight ? totalFare * 1.2 : totalFare;

//   return totalFare;
// };

console.log(getCngFare(2) === 50 ? "Passed ✅" : "Failed ❌"); // 50 --->	minimum fare
console.log(getCngFare(1) === 50 ? "Passed ✅" : "Failed ❌"); // 50 --->	still the minimum, never less
console.log(getCngFare(5) === 95 ? "Passed ✅" : "Failed ❌"); // 95 --->	50 + (3 × 15)
console.log(getCngFare(10) === 170 ? "Passed ✅" : "Failed ❌"); // 170 --->	50 + (8 × 15)
console.log(getCngFare(5, false, 10) === 115 ? "Passed ✅" : "Failed ❌"); // 115 --->	95 + (10 × 2)
console.log(getCngFare(5, true) === 114 ? "Passed ✅" : "Failed ❌"); // 114 --->	95 + 20%
console.log(getCngFare(5, true, 10) === 138 ? "Passed ✅" : "Failed ❌"); // 138 --->	115 + 20%
