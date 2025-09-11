interface MajorCredits {
  credits: number;
  readonly __brand: "MajorCredits";
}

interface MinorCredits {
  credits: number;
  readonly __brand: "MinorCredits";
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "MajorCredits",
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "MinorCredits",
  };
}

const mathMajor: MajorCredits = { credits: 10, __brand: "MajorCredits" };
const physicsMajor: MajorCredits = { credits: 15, __brand: "MajorCredits" };
const totalMajor = sumMajorCredits(mathMajor, physicsMajor);
console.log(totalMajor); // { credits: 25, __brand: "MajorCredits" }

const artMinor: MinorCredits = { credits: 5, __brand: "MinorCredits" };
const musicMinor: MinorCredits = { credits: 7, __brand: "MinorCredits" };
const totalMinor = sumMinorCredits(artMinor, musicMinor);
console.log(totalMinor); // { credits: 12, __brand: "MinorCredits" }
