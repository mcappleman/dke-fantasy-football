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
    ['Willis', 103, 60, 43, 0, '58.25%', 9854.14, 9382.6, 95.67, 91.09, 623, 472, 0, '56.89%', '1.36%', 58.6, 44.4, 1.4],
    ['Majors', 102, 60, 42, 0, '58.82%', 9868.66, 9224.06, 96.75, 90.43, 609, 479, 0, '55.97%', '2.85%', 57.1, 44.9, 2.9],
    ['Matt', 101, 56, 45, 0, '55.45%', 9426.22, 9139.9, 93.33, 90.49, 568, 513, 0, '52.54%', '2.90%', 53.1, 47.9, 2.9],
    ['Sawyer', 104, 56, 48, 0, '53.85%', 9662.42, 9494.48, 92.91, 91.29, 555, 547, 0, '50.36%', '3.48%', 52.4, 51.6, 3.6],
    ['Hunter', 88, 50, 37, 1, '56.82%', 8342.26, 8135.5, 94.80, 92.45, 536, 424, 2, '55.82%', '1.00%', 49.1, 38.9, 0.9],
    ['Sam', 103, 47, 56, 0, '45.63%', 9463.22, 9148.76, 91.88, 88.82, 537, 558, 0, '49.04%', '-3.41%', 50.5, 52.5, -3.5],
    ['Basil', 72, 40, 31, 1, '55.56%', 6987.02, 6601.94, 97.04, 91.69, 458, 335, 1, '57.75%', '-2.19%', 41.6, 30.4, -1.6],
    ['Ean', 101, 37, 64, 0, '36.63%', 8754.2, 9550.44, 86.68, 94.56, 450, 630, 1, '41.67%', '-5.04%', 42.1, 58.9, -5.1],
    ['Trevor', 86, 39, 47, 0, '45.35%', 7776.3, 8108.96, 90.42, 94.29, 441, 475, 0, '48.14%', '-2.80%', 41.4, 44.6, -2.4],
    ['Ross', 71, 37, 34, 0, '52.11%', 6619.44, 6356.66, 93.23, 89.53, 389, 398, 0, '49.43%', '2.68%', 35.1, 35.9, 1.9],
    ['Jared', 98, 31, 67, 0, '31.63%', 8108.08, 9436.3, 82.74, 96.29, 391, 665, 0, '37.03%', '-5.39%', 36.3, 61.7, -5.3],
    ['Chaz', 70, 34, 36, 0, '48.57%', 6373.4, 6270.32, 91.05, 89.58, 384, 396, 0, '49.23%', '-0.66%', 34.5, 35.5, -0.5]
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