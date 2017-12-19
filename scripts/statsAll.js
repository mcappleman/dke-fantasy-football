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
    ['Majors', 106, 64, 42, 0, '60.38%', 10356.44, 9635.32, 97.70, 90.90, 650, 482, 0, '57.42%', '2.96%', 60.9, 45.1, 3.1],
    ['Willis', 108, 61, 47, 0, '56.48%', 10295.66, 9847.24, 95.33, 91.18, 648, 498, 0, '56.54%', '-0.06%', 61.1, 46.9, -0.1],
    ['Matt', 105, 59, 46, 0, '56.19%', 9870.8, 9457.36, 94.01, 90.07, 596, 529, 0, '52.98%', '3.21%', 55.6, 49.4, 3.4],
    ['Sawyer', 109, 58, 51, 0, '53.21%', 10028.66, 9908.76, 92.01, 90.91, 566, 587, 0, '49.09%', '4.12%', 53.5, 55.5, 4.5],
    ['Hunter', 92, 54, 37, 1, '58.70%', 8761.76, 8494.78, 95.24, 92.33, 568, 436, 2, '56.56%', '2.14%', 52.0, 40.0, 2.0],
    ['Sam', 108, 49, 59, 0, '45.37%', 9902.42, 9631.9, 91.69, 89.18, 559, 587, 0, '48.78%', '-3.41%', 52.7, 55.3, -3.7],
    ['Basil', 77, 43, 33, 1, '55.84%', 7453.18, 7052.86, 96.79, 91.60, 486, 358, 1, '57.57%', '-1.73%', 44.3, 32.7, -1.3],
    ['Trevor', 91, 42, 49, 0, '46.15%', 8328.62, 8572.28, 91.52, 94.20, 482, 485, 0, '49.84%', '-3.69%', 45.4, 45.6, -3.4],
    ['Ean', 105, 39, 66, 0, '37.14%', 9091.04, 9890.74, 86.58, 94.20, 462, 662, 1, '41.11%', '-3.97%', 43.2, 61.8, -4.2],
    ['Ross', 76, 39, 37, 0, '51.32%', 7050.78, 6890.48, 92.77, 90.66, 411, 427, 0, '49.05%', '2.27%', 37.3, 38.7, 1.7],
    ['Chaz', 75, 36, 39, 0, '48.00%', 6837.92, 6755.82, 91.17, 90.08, 409, 422, 0, '49.22%', '-1.22%', 36.9, 38.1, -0.9],
    ['Jared', 103, 31, 72, 0, '30.10%', 8457.28, 9911.58, 82.11, 96.23, 396, 711, 0, '35.77%', '-5.68%', 36.8, 66.2, -5.8]
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