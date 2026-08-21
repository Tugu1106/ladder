// Project 15 — Weather Data Analyzer
// Instructions: 15-weather-data-analyzer.md
//
// The simplest data here — flat numbers, no objects — and three classic stats.
//
// Highest and lowest are the SAME reduce with the comparison flipped:
// > becomes <. One character. Seeing that they're one pattern, not two, is
// the point.
//
// Seed from temperatures[0], not 0. Winter temperatures go negative, and
// getHighestTemperature() starting at 0 would report 0 for an all-negative
// list — a day that never happened.
//
// No Math.max() / Math.min().
//
// Expected output:
//   22.5
//   30
//   15

const temperatures = [20, 25, 30, 15];

function getAverageTemperature() {
  // 90 / 4 = 22.5 — a real decimal, no rounding asked for
}

function getHighestTemperature() {
  // 30
}

function getLowestTemperature() {
  // 15
}

// console.log(getAverageTemperature());   // 22.5
// console.log(getHighestTemperature());   // 30
// console.log(getLowestTemperature());    // 15
