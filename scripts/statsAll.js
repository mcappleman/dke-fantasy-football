$(document).ready(function () {

    $('#tableall').DataTable({
        order: [[2, "desc"]],
        searching: false,
        sDom: '',
        lengthMenu: [[-1], ["All"]],
        data: dataSet,
        columns: columnNames
    });

    $('#highScores').DataTable({
        order: [[3, "desc"]],
        sDom: '',
        lengthMenu: [[5], ["All"]],
        data: highScores,
        columns: scoreColumnNamesAll
    });

    $('#lowScores').DataTable({
        order: [[3, "asc"]],
        sDom: '',
        lengthMenu: [[5], ["All"]],
        data: lowScores,
        columns: scoreColumnNamesAll
    });

    $('#blowouts').DataTable({
        order: [[6, "desc"]],
        sDom: '',
        lengthMenu: [[5], ["All"]],
        data: blowouts,
        columns: gameColumnNamesAll
    });

    $('#closeGames').DataTable({
        order: [[6, "asc"]],
        sDom: '',
        lengthMenu: [[5], ["All"]],
        data: closeGames,
        columns: gameColumnNamesAll
    });

    $('#highest').DataTable({
        order: [[6, "desc"]],
        sDom: '',
        lengthMenu: [[5], ["All"]],
        data: highest,
        columns: gameScoringColumnNamesAll
    });

    $('#dumpster').DataTable({
        order: [[6, "asc"]],
        sDom: '',
        lengthMenu: [[5], ["All"]],
        data: dumpster,
        columns: gameScoringColumnNamesAll
    });

});

var dataSet = [
    ['Majors', 112, 67, 45, 0, '59.82%', 10988.66, 10244.7, 98.11, 91.47, 685, 509, 0, '57.37%', '2.45%', 64.3, 47.7, 2.7],
    ['Matt', 111, 63, 48, 0, '56.76%', 10525.9, 10020.64, 94.83, 90.28, 639, 548, 0, '53.83%', '2.92%', 59.8, 51.2, 3.2],
    ['Willis', 113, 62, 51, 0, '54.87%', 10723.14, 10372.74, 94.90, 91.79, 663, 538, 0, '55.20%', '-0.34%', 62.4, 50.6, -0.4],
    ['Sawyer', 115, 60, 55, 0, '52.17%', 10597.06, 10533.32, 92.15, 91.59, 596, 619, 0, '49.05%', '3.12%', 56.4, 58.6, 3.6],
    ['Hunter', 98, 59, 38, 1, '60.20%', 9314.42, 9005.44, 95.05, 91.89, 598, 468, 2, '56.09%', '4.12%', 55.0, 43.0, 4.0],
    ['Sam', 113, 51, 62, 0, '45.13%', 10376.22, 10106.52, 91.82, 89.44, 586, 615, 0, '48.79%', '-3.66%', 55.1, 57.9, -4.1],
    ['Basil', 83, 49, 33, 1, '59.04%', 8086.92, 7499.98, 97.43, 90.36, 530, 376, 1, '58.49%', '0.55%', 48.5, 34.5, 0.5],
    ['Trevor', 97, 45, 52, 0, '46.39%', 8872.66, 9127.64, 91.47, 94.10, 512, 517, 0, '49.76%', '-3.37%', 48.3, 48.7, -3.3],
    ['Ean', 111, 40, 71, 0, '36.04%', 9700.46, 10535.4, 87.39, 94.91, 499, 687, 1, '42.08%', '-6.04%', 46.7, 64.3, -6.7],
    ['Ross', 82, 39, 43, 0, '47.56%', 7527.34, 7524.84, 91.80, 91.77, 426, 474, 0, '47.33%', '0.23%', 38.8, 43.2, 0.2],
    ['Chaz', 80, 40, 40, 0, '50.00%', 7282.66, 7151.04, 91.03, 89.39, 428, 458, 0, '48.31%', '1.69%', 38.6, 41.4, 1.4],
    ['Jared', 108, 34, 74, 0, '31.48%', 8961.52, 10449.26, 82.98, 96.75, 429, 733, 0, '36.92%', '-5.44%', 39.9, 68.1, -5.9]
];

var highScores = [];
var lowScores = [];
var blowouts = [];
var closeGames = [];
var highest = [];
var dumpster = [];

// 2011
highScores = combineArrays(highScores, highScores2011, 2011);
lowScores = combineArrays(lowScores, lowScores2011, 2011);
blowouts = combineArrays(blowouts, blowouts2011, 2011);
closeGames = combineArrays(closeGames, closeGames2011, 2011);
highest = combineArrays(highest, highest2011, 2011);
dumpster = combineArrays(dumpster, dumpster2011, 2011);

// 2012
highScores = combineArrays(highScores, highScores2012, 2012);
lowScores = combineArrays(lowScores, lowScores2012, 2012);
blowouts = combineArrays(blowouts, blowouts2012, 2012);
closeGames = combineArrays(closeGames, closeGames2012, 2012);
highest = combineArrays(highest, highest2012, 2012);
dumpster = combineArrays(dumpster, dumpster2012, 2012);

// 2013
highScores = combineArrays(highScores, highScores2013, 2013);
lowScores = combineArrays(lowScores, lowScores2013, 2013);
blowouts = combineArrays(blowouts, blowouts2013, 2013);
closeGames = combineArrays(closeGames, closeGames2013, 2013);
highest = combineArrays(highest, highest2013, 2013);
dumpster = combineArrays(dumpster, dumpster2013, 2013);

// 2014
highScores = combineArrays(highScores, highScores2014, 2014);
lowScores = combineArrays(lowScores, lowScores2014, 2014);
blowouts = combineArrays(blowouts, blowouts2014, 2014);
closeGames = combineArrays(closeGames, closeGames2014, 2014);
highest = combineArrays(highest, highest2014, 2014);
dumpster = combineArrays(dumpster, dumpster2014, 2014);

// 2015
highScores = combineArrays(highScores, highScores2015, 2015);
lowScores = combineArrays(lowScores, lowScores2015, 2015);
blowouts = combineArrays(blowouts, blowouts2015, 2015);
closeGames = combineArrays(closeGames, closeGames2015, 2015);
highest = combineArrays(highest, highest2015, 2015);
dumpster = combineArrays(dumpster, dumpster2015, 2015);

// 2016
highScores = combineArrays(highScores, highScores2016, 2016);
lowScores = combineArrays(lowScores, lowScores2016, 2016);
blowouts = combineArrays(blowouts, blowouts2016, 2016);
closeGames = combineArrays(closeGames, closeGames2016, 2016);
highest = combineArrays(highest, highest2016, 2016);
dumpster = combineArrays(dumpster, dumpster2016, 2016);

// 2017
highScores = combineArrays(highScores, highScores2017, 2017);
lowScores = combineArrays(lowScores, lowScores2017, 2017);
blowouts = combineArrays(blowouts, blowouts2017, 2017);
closeGames = combineArrays(closeGames, closeGames2017, 2017);
highest = combineArrays(highest, highest2017, 2017);
dumpster = combineArrays(dumpster, dumpster2017, 2017);

// 2017
highScores = combineArrays(highScores, highScores2018, 2018);
lowScores = combineArrays(lowScores, lowScores2018, 2018);
blowouts = combineArrays(blowouts, blowouts2018, 2018);
closeGames = combineArrays(closeGames, closeGames2018, 2018);
highest = combineArrays(highest, highest2018, 2018);
dumpster = combineArrays(dumpster, dumpster2018, 2018);

// helper functions

function combineArrays(allList, list, year) {

    var copy = [];
    list.forEach((subArray, index) => {

        copy[index] = []
        subArray.forEach((item) => {
            copy[index].push(item);
        });

    });

    copy.forEach((subArray) => {

        subArray = subArray.unshift(year);

    });

    allList = allList.concat(copy);

    return allList;

}