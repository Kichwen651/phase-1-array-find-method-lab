// code your solution here
// function superbowlWin(record) {
//     // Check if the record has any wins
//     if (!record || !record.length) {
//         return undefined;
//     }
    
//     // Find a win object for the Denver Broncos
//     for (let game of record) {
//         if (game.team === 'Denver Broncos' && game.result === 'W') {
//             return game.year;
//         }
//     }
    
//     // If no win is found, return undefined
//     return undefined;
// }

// function superbowlWin(record) {
//     const win = record.find(game => game.result === 'W' && game.team === 'Denver Broncos');
//     return win ? win.year : undefined; // Return the year if found, otherwise undefined
// }

// // Example usage:
// const superBowls = [
//     { year: 1998, team: 'Denver Broncos', result: 'W' },
//     { year: 1999, team: 'Denver Broncos', result: 'W' },
//     { year: 2006, team: 'Denver Broncos', result: 'L' },
//     { year: 2016, team: 'Denver Broncos', result: 'W' },
// ];

// console.log(superbowlWin(superBowls)); // This will return 1998 (the first win found)


// 



function superbowlWin(record) {
    const win = record.find(game => game.result === 'W' && game.team === 'Denver Broncos');
    return win ? win.year : undefined; // Return the year if found, otherwise undefined
}

// Example usage with the correct data:

const superBowls = [
    { year: 2015, team: 'Denver Broncos', result: 'W' }, // This should be returned
    { year: 2016, team: 'Denver Broncos', result: 'L' },
    { year: 1998, team: 'Denver Broncos', result: 'W' },
];

// Testing the function
console.log(superbowlWin(superBowls)); // Should return 2015

// const record = [
//     { year: 1997, team: 'Denver Broncos', result: 'W' },
//     { year: 1998, team: 'Denver Broncos', result: 'W' },
//     { year: 2005, team: 'Denver Broncos', result: 'L' },
// ];

// console.log(superbowlWin(record)); // Outputs: Year: 1997 and returns 1997

// const emptyRecord = [];
// console.log(superbowlWin(emptyRecord)); // Outputs: No wins found for the Denver Broncos. and returns undefined

