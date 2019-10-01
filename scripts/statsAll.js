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
    ['Basil', 97, 57, 39, 1, '58.76%', 9499.86, 8863.06, 97.94, 91.37, 614, 442, 1, '58.14%', '0.63%', 56.4, 40.6, 0.6],
    ['Majors', 126, 76, 50, 0, '60.32%', 12425.6, 11640.54, 98.62, 92.39, 773, 571, 0, '57.51%', '2.80%', 72.5, 53.5, 3.5],
    ['Hunter', 112, 66, 45, 1, '58.93%', 10637.3, 10394.76, 94.98, 92.81, 664, 552, 2, '54.60%', '4.33%', 61.1, 50.9, 4.9],
    ['Willis', 128, 72, 56, 0, '56.25%', 12216.06, 11748.4, 95.44, 91.78, 753, 605, 0, '55.45%', '0.80%', 71.0, 57.0, 1.0],
    ['Matt', 126, 72, 54, 0, '57.14%', 12086.92, 11446.66, 95.93, 90.85, 729, 615, 0, '54.24%', '2.90%', 68.3, 57.7, 3.7],
    ['Trevor', 112, 53, 59, 0, '47.32%', 10451.8, 10716.34, 93.32, 95.68, 610, 576, 0, '51.43%', '-4.11%', 57.6, 54.4, -4.6],
    ['Sam', 127, 59, 68, 0, '46.46%', 11815.98, 11389.2, 93.04, 89.68, 674, 677, 0, '49.89%', '-3.43%', 63.4, 63.6, -4.4],
    ['Sawyer', 129, 66, 63, 0, '51.16%', 11875.28, 11848.16, 92.06, 91.85, 662, 703, 0, '48.50%', '2.66%', 62.6, 66.4, 3.4],
    ['Ross', 97, 45, 52, 0, '46.39%', 8969.76, 9033.12, 92.47, 93.12, 503, 554, 0, '47.59%', '-1.20%', 46.2, 50.8, -1.2],
    ['Chaz', 94, 46, 48, 0, '48.94%', 8534, 8454.38, 90.79, 89.94, 489, 547, 0, '47.20%', '1.74%', 44.4, 49.6, 1.6],
    ['Ean', 125, 46, 79, 0, '36.80%', 10932.14, 11884.02, 87.46, 95.07, 556, 780, 1, '41.62%', '-4.82%', 52.0, 73.0, -6.0],
    ['Jared', 122, 37, 85, 0, '30.33%', 10125.78, 11766.4, 83.00, 96.45, 478, 834, 0, '36.43%', '-6.11%', 44.4, 77.6, -7.4]
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

// 2018
highScores = combineArrays(highScores, highScores2018, 2018);
lowScores = combineArrays(lowScores, lowScores2018, 2018);
blowouts = combineArrays(blowouts, blowouts2018, 2018);
closeGames = combineArrays(closeGames, closeGames2018, 2018);
highest = combineArrays(highest, highest2018, 2018);
dumpster = combineArrays(dumpster, dumpster2018, 2018);

// 2019
highScores = combineArrays(highScores, highScores2018, 2019);
lowScores = combineArrays(lowScores, lowScores2018, 2019);
blowouts = combineArrays(blowouts, blowouts2018, 2019);
closeGames = combineArrays(closeGames, closeGames2018, 2019);
highest = combineArrays(highest, highest2018, 2019);
dumpster = combineArrays(dumpster, dumpster2018, 2019);

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