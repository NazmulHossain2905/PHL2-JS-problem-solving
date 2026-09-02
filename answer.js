// Question 1: Value Detective
const describeValue = (value) => {
  const typeOfValue = typeof value;
  const truthyOrFalsy = Boolean(value) ? "truthy" : "falsy";

  return `${typeOfValue} | ${truthyOrFalsy}`;
};

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
