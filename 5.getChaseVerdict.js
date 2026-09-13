// Question 5: Run Chase Commentator
const getChaseVerdict = (target, scored, ballsLeft) => {
  const runsNeeded = target - scored;

  if (runsNeeded <= 0) {
    return "Won";
  } else if (ballsLeft <= 0) {
    return "Lost";
  }

  const requiredRate = (runsNeeded / ballsLeft) * 6;

  let verdict = "";

  if (requiredRate <= 6) {
    verdict = "Comfortable";
  } else if (requiredRate <= 12) {
    verdict = "Tough";
  } else {
    verdict = "Almost Impossible";
  }

  return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};

console.log(
  getChaseVerdict(200, 200, 12) === "Won" ? "Passed ✅" : "Failed ❌",
);
console.log(
  getChaseVerdict(200, 190, 0) === "Lost" ? "Passed ✅" : "Failed ❌",
);
console.log(
  getChaseVerdict(100, 90, 12) === "Need 10 runs in 12 balls | Comfortable"
    ? "Passed ✅"
    : "Failed ❌",
);
console.log(
  getChaseVerdict(100, 80, 12) === "Need 20 runs in 12 balls | Tough"
    ? "Passed ✅"
    : "Failed ❌",
);
console.log(
  getChaseVerdict(100, 70, 12) ===
    "Need 30 runs in 12 balls | Almost Impossible"
    ? "Passed ✅"
    : "Failed ❌",
);
console.log(
  getChaseVerdict(150, 149, 1) === "Need 1 runs in 1 balls | Comfortable"
    ? "Passed ✅"
    : "Failed ❌",
);

// console.log(getChaseVerdict(200, 200, 12)); // "Won"
// console.log(getChaseVerdict(200, 190, 0)); // "Lost"
// console.log(getChaseVerdict(100, 90, 12)); // "Need 10 runs in 12 balls | Comfortable"
// console.log(getChaseVerdict(100, 80, 12)); // "Need 20 runs in 12 balls | Tough"
// console.log(getChaseVerdict(100, 70, 12)); // "Need 30 runs in 12 balls | Almost Impossible"
// console.log(getChaseVerdict(150, 149, 1)); // "Need 1 runs in 1 balls | Comfortable"
