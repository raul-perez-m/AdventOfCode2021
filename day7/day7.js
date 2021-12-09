const { readFileSync } = require('fs');


const input = readFileSync('./day7/input.txt', 'utf-8').split(',').map(Number);
const min = Math.min(...input);
const cache = {};
const getFuelMovement = (n) => (cache[n] = cache[n] || [...Array(n).keys()].reduce((p, c) => p + c + 1, 0), cache[n]);
const fuelRequired = (position, fn) => input.reduce((p, c) => p + fn(Math.abs(c - position)), 0);
const calculateBest = (fn) => Math.min(...[...Array(Math.max(...input) - min).keys()].map(x => fuelRequired(x + min, fn)));
console.log(`Part 1: ${calculateBest((x) => x)}`);
console.log(`Part 2: ${calculateBest(getFuelMovement)}`);