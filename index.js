const Q01 = require('./quizes/quiz-01.js');

var q01Obj = {
    title: 'The Heist',
    seasonNumber: '5',
    episodeNumber: '12',
    show: {
        showName: 'Gumball',
        showId: '2000345',
    }
};

console.log("\n---Quiz 01---\n");
console.log(Q01(q01Obj, 'seasonNumber', '8') + ' should = 5');
console.log(Q01(q01Obj, 'show.showId', '000') + ' should = 2000345');
console.log(Q01(q01Obj, 'episode.rating', 'TV - Y7') + ' should = TV - Y7');

const { pingViaCallback, pingViaPromise } = require('./quizes/quiz-02.js');
pingViaCallback(data => {
    console.log("\n---Quiz 02a---\n");
    console.log(data);
})
pingViaPromise()
    .then(resp => {
        console.log("\n---Quiz 02b---\n");
        if (resp.status == 200) {
            console.log(resp.data);
        } else {
            console.log(resp.statusText);
        }
    })
    .catch(err => console.log(err, "\n"));

console.log("\n---Quiz 03---\n");
const opn = require('opn');
opn(__dirname + '/quizes/quiz-03.html');
console.log('Check your default browser...');

console.log("\n---Quiz 04---\n");
console.log("@see quizes/quiz-04.sql\n");
