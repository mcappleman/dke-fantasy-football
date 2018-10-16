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
    ['Majors', 113, 68, 45, 0, '60.18%', 11113.1, 10347.62, 98.35, 91.57, 694, 511, 0, '57.59%', '2.58%', 65.1, 47.9, 2.9],
    ['Matt', 112, 64, 48, 0, '57.14%', 10651.2, 10110.06, 95.10, 90.27, 649, 549, 0, '54.17%', '2.97%', 60.7, 51.3, 3.3],
    ['Willis', 114, 62, 52, 0, '54.39%', 10785.58, 10481.02, 94.61, 91.94, 663, 549, 0, '54.70%', '-0.32%', 62.4, 51.6, -0.4],
    ['Sawyer', 116, 60, 56, 0, '51.72%', 10686.48, 10658.62, 92.12, 91.88, 599, 627, 0, '48.86%', '2.87%', 56.7, 59.3, 3.3],
    ['Hunter', 99, 60, 38, 1, '60.61%', 9427.42, 9068, 95.23, 91.60, 606, 471, 2, '56.26%', '4.35%', 55.7, 43.3, 4.3],
    ['Sam', 114, 52, 62, 0, '45.61%', 10484.5, 10168.96, 91.97, 89.20, 593, 619, 0, '48.93%', '-3.31%', 55.8, 58.2, -3.8],
    ['Basil', 84, 50, 33, 1, '59.52%', 8249.82, 7601.36, 98.21, 90.49, 541, 376, 1, '58.99%', '0.54%', 49.5, 34.5, 0.5],
    ['Trevor', 98, 45, 53, 0, '45.92%', 8974.04, 9290.54, 91.57, 94.80, 516, 524, 0, '49.62%', '-3.70%', 48.6, 49.4, -3.6],
    ['Ean', 112, 41, 71, 0, '36.61%', 9802.84, 10600.46, 87.53, 94.65, 504, 693, 1, '42.11%', '-5.50%', 47.2, 64.8, -6.2],
    ['Ross', 83, 39, 44, 0, '46.99%', 7630.26, 7649.28, 91.93, 92.16, 432, 479, 0, '47.42%', '-0.43%', 39.4, 43.6, -0.4],
    ['Chaz', 81, 40, 41, 0, '49.38%', 7347.72, 7253.42, 90.71, 89.55, 430, 467, 0, '47.94%', '1.45%', 38.8, 42.2, 1.2],
    ['Jared', 109, 34, 75, 0, '31.19%', 9024.08, 10562.26, 82.79, 96.90, 430, 743, 0, '36.66%', '-5.47%', 40.0, 69.0, -6.0]
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