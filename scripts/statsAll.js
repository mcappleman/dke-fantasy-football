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
    ['Majors', 105, 63, 42, 0, '60.00%', 10249.36, 9531.04, 97.61, 90.77, 641, 480, 0, '57.18%', '2.82%', 60.0, 45.0, 3.0],
    ['Willis', 107, 61, 46, 0, '57.01%', 10214.16, 9758.52, 95.46, 91.20, 643, 492, 0, '56.65%', '0.36%', 60.6, 46.4, 0.4],
    ['Matt', 104, 58, 46, 0, '55.77%', 9721.62, 9377.28, 93.48, 90.17, 585, 529, 0, '52.51%', '3.26%', 54.6, 49.4, 3.4],
    ['Sawyer', 108, 57, 51, 0, '52.78%', 9951.58, 9836.92, 92.14, 91.08, 564, 578, 0, '49.39%', '3.39%', 53.3, 54.7, 3.7],
    ['Hunter', 91, 53, 37, 1, '58.24%', 8665.96, 8413.68, 95.23, 92.46, 561, 432, 2, '56.48%', '1.76%', 51.4, 39.6, 1.6],
    ['Sam', 107, 48, 59, 0, '44.86%', 9813.7, 9550.4, 91.72, 89.26, 553, 582, 0, '48.72%', '-3.86%', 52.1, 54.9, -4.1],
    ['Basil', 76, 43, 32, 1, '56.58%', 7372.08, 6957.06, 97.00, 91.54, 482, 351, 1, '57.85%', '-1.27%', 44.0, 32.0, -1.0],
    ['Trevor', 90, 42, 48, 0, '46.67%', 8224.34, 8465.2, 91.38, 94.06, 474, 482, 0, '49.58%', '-2.91%', 44.6, 45.4, -2.6],
    ['Ean', 104, 39, 65, 0, '37.50%', 9019.2, 9813.66, 86.72, 94.36, 461, 652, 1, '41.43%', '-3.93%', 43.1, 60.9, -4.1],
    ['Ross', 75, 39, 36, 0, '52.00%', 6970.7, 6741.3, 92.94, 89.88, 408, 419, 0, '49.33%', '2.67%', 37.0, 38.0, 2.0],
    ['Chaz', 74, 35, 39, 0, '47.30%', 6730.74, 6686.14, 90.96, 90.35, 399, 421, 0, '48.66%', '-1.36%', 36.0, 38.0, -1.0],
    ['Jared', 102, 31, 71, 0, '30.39%', 8387.6, 9804.4, 82.23, 96.12, 396, 700, 0, '36.13%', '-5.74%', 36.9, 65.1, -5.9]
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