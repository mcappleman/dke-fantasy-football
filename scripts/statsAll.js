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
    ['Willis', 106, 61, 45, 0, '57.55%', 10126.8, 9670.38, 95.54, 91.23, 640, 488, 0, '56.74%', '0.81%', 60.1, 45.9, 0.9],
    ['Matt', 104, 58, 46, 0, '55.77%', 9721.62, 9377.28, 93.48, 90.17, 585, 529, 0, '52.51%', '3.26%', 54.6, 49.4, 3.4],
    ['Sawyer', 107, 56, 51, 0, '52.34%', 9860.52, 9750.04, 92.15, 91.12, 559, 576, 0, '49.25%', '3.09%', 52.7, 54.3, 3.3],
    ['Hunter', 91, 53, 37, 1, '58.24%', 8665.96, 8413.68, 95.23, 92.46, 561, 432, 2, '56.48%', '1.76%', 51.4, 39.6, 1.6],
    ['Sam', 106, 48, 58, 0, '45.28%', 9741.28, 9452.26, 91.90, 89.17, 553, 575, 0, '49.02%', '-3.74%', 52.0, 54.0, -4.0],
    ['Basil', 75, 42, 32, 1, '56.00%', 7283.94, 6869.7, 97.12, 91.60, 478, 348, 1, '57.86%', '-1.86%', 43.4, 31.6, -1.4],
    ['Trevor', 89, 41, 48, 0, '46.07%', 8126.2, 8392.78, 91.31, 94.30, 468, 481, 0, '49.32%', '-3.25%', 43.9, 45.1, -2.9],
    ['Ean', 104, 39, 65, 0, '37.50%', 9019.2, 9813.66, 86.72, 94.36, 461, 652, 1, '41.43%', '-3.93%', 43.1, 60.9, -4.1],
    ['Ross', 74, 38, 36, 0, '51.35%', 6864.36, 6660.26, 92.76, 90.00, 401, 419, 0, '48.90%', '2.45%', 36.2, 37.8, 1.8],
    ['Chaz', 73, 35, 38, 0, '47.95%', 6649.7, 6579.8, 91.09, 90.13, 398, 415, 0, '48.95%', '-1.01%', 35.7, 37.3, -0.7],
    ['Jared', 101, 31, 70, 0, '30.69%', 8300.72, 9713.34, 82.19, 96.17, 394, 695, 0, '36.18%', '-5.49%', 36.5, 64.5, -5.5]
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