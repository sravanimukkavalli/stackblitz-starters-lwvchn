let testCase1 = [
  {
    name: 'Leo Messi',
    chemistry: 91,
    biology: 95,
    dob: '31-12-1995',
  },
  {
    name: 'Cristiano Ronaldo',
    chemistry: 81,
    biology: 90,
    dob: '31-05-1992',
  },
  {
    name: 'Virat Kohli',
    chemistry: 96,
    biology: 95,
    dob: '31-12-1995',
  },
  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 85,
    chemistry: 86,
  },
  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
  },
];

// Sorting function
// Sorting function
const sortByMarks1 = (a, b) => {
  // First priority: Total marks
  if (a.chemistry + a.biology > b.chemistry + b.biology) {
    return -1;
  }
  if (a.chemistry + a.biology < b.chemistry + b.biology) {
    return 1;
  } // Second priority: Biology
  if (a.biology > b.biology) {
    return -1;
  }
  if (a.biology < b.biology) {
    return 1;
  } // Third priority: Date of birth (in format DD-MM-YYYY)
  const aDobParts = a.dob.split('-');
  const bDobParts = b.dob.split('-');
  const aDob = new Date(aDobParts[2], aDobParts[1] - 1, aDobParts[0]);
  const bDob = new Date(bDobParts[2], bDobParts[1] - 1, bDobParts[0]);
  return aDob - bDob;
};

// Sort the array of student objects
testCase1.sort(sortByMarks1);

// Print sorted array of student objects
const tests1 = testCase1.map((each) => each.name);
const output1 = tests1.map((each) => each.split(' ')[0].toLowerCase());
console.log(output1);

let testCase2 = [
  {
    name: 'Leo Messi',
    dob: '31-12-1995',
    biology: 100,
    chemistry: 80,
  },
  {
    name: 'Cristiano Ronaldo',
    dob: '31-05-1992',
    biology: 80,
    chemistry: 100,
  },
  {
    name: 'Virat Kohli',
    dob: '31-12-1995',
    biology: 30,
    chemistry: 40,
  },
  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 40,
    chemistry: 30,
  },
  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
  },
];

const sortByMarks2 = (a, b) => {
  // First priority: Total marks
  if (a.chemistry + a.biology > b.chemistry + b.biology) {
    return -1;
  }
  if (a.chemistry + a.biology < b.chemistry + b.biology) {
    return 1;
  } // Second priority: Biology
  if (a.biology > b.biology) {
    return -1;
  }
  if (a.biology < b.biology) {
    return 1;
  } // Third priority: Date of birth (in format DD-MM-YYYY)
  const aDobParts = a.dob.split('-');
  const bDobParts = b.dob.split('-');
  const aDob = new Date(aDobParts[2], aDobParts[1] - 1, aDobParts[0]);
  const bDob = new Date(bDobParts[2], bDobParts[1] - 1, bDobParts[0]);
  return aDob - bDob;
};
// Sort the array of student objects
testCase2.sort(sortByMarks2);

// Print sorted array of student objects
const tests2 = testCase2.map((each) => each.name);
const output2 = tests2.map((each) => each.split(' ')[0].toLowerCase());
console.log(output2);
