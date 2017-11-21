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
    ['Willis', 104, 60, 44, 0, '57.69%', 9939.94, 9491.6, 95.58, 91.27, 628, 478, 0, '56.78%', '0.91%', 59.1, 44.9, 0.9],
    ['Majors', 103, 61, 42, 0, '59.22%', 9990.04, 9333.68, 96.99, 90.62, 620, 479, 0, '56.41%', '2.81%', 58.1, 44.9, 2.9],
    ['Matt', 102, 57, 45, 0, '55.88%', 9509.72, 9190.9, 93.23, 90.11, 572, 520, 0, '52.38%', '3.50%', 53.4, 48.6, 3.6],
    ['Sawyer', 105, 56, 49, 0, '53.33%', 9714.64, 9572.18, 92.52, 91.16, 556, 557, 0, '49.96%', '3.38%', 52.5, 52.5, 3.5],
    ['Hunter', 89, 51, 37, 1, '57.30%', 8462.66, 8251.62, 95.09, 92.71, 546, 425, 2, '56.22%', '1.09%', 50.0, 39.0, 1.0],
    ['Sam', 104, 47, 57, 0, '45.19%', 9541.78, 9251.32, 91.75, 88.96, 540, 566, 0, '48.82%', '-3.63%', 50.8, 53.2, -3.8],
    ['Basil', 73, 40, 32, 1, '54.79%', 7103.14, 6722.34, 97.30, 92.09, 467, 337, 1, '58.07%', '-3.28%', 42.4, 30.6, -2.4],
    ['Ean', 102, 38, 64, 0, '37.25%', 8831.9, 9602.66, 86.59, 94.14, 452, 639, 1, '41.44%', '-4.18%', 42.3, 59.7, -4.3],
    ['Trevor', 87, 40, 47, 0, '45.98%', 7878.86, 8187.52, 90.56, 94.11, 447, 480, 0, '48.22%', '-2.24%', 42.0, 45.0, -2.0],
    ['Ross', 72, 37, 35, 0, '51.39%', 6729.06, 6478.04, 93.46, 89.97, 397, 401, 0, '49.75%', '1.64%', 35.8, 36.2, 1.2],
    ['Jared', 99, 31, 68, 0, '31.31%', 8159.08, 9519.8, 82.41, 96.16, 391, 676, 0, '36.64%', '-5.33%', 36.3, 62.7, -5.3],
    ['Chaz', 71, 35, 36, 0, '49.30%', 6482.4, 6356.12, 91.30, 89.52, 391, 400, 0, '49.43%', '-0.14%', 35.1, 35.9, -0.1]
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