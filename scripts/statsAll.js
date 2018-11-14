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
    ['Majors', 117, 71, 46, 0, '60.68%', 11532.42, 10687.34, 98.57, 91.34, 720, 529, 0, '57.65%', '3.04%', 67.4, 49.6, 3.6],
    ['Matt', 116, 66, 50, 0, '56.90%', 11071.96, 10488.38, 95.45, 90.42, 672, 570, 0, '54.11%', '2.79%', 62.8, 53.2, 3.2],
    ['Willis', 118, 64, 54, 0, '54.24%', 11175.72, 10850.28, 94.71, 91.95, 684, 572, 0, '54.46%', '-0.22%', 64.3, 53.7, -0.3],
    ['Sawyer', 120, 63, 57, 0, '52.50%', 11079.3, 11075.8, 92.33, 92.30, 625, 645, 0, '49.21%', '3.29%', 59.1, 60.9, 3.9],
    ['Hunter', 103, 62, 40, 1, '60.19%', 9793.52, 9494.68, 95.08, 92.18, 624, 497, 2, '55.65%', '4.54%', 57.3, 45.7, 4.7],
    ['Sam', 118, 55, 63, 0, '46.61%', 10941.18, 10507.82, 92.72, 89.05, 621, 635, 0, '49.44%', '-2.83%', 58.3, 59.7, -3.3],
    ['Basil', 88, 52, 35, 1, '59.09%', 8643.8, 7987.74, 98.23, 90.77, 561, 400, 1, '58.37%', '0.72%', 51.4, 36.6, 0.6],
    ['Trevor', 102, 47, 55, 0, '46.08%', 9407.86, 9731.98, 92.23, 95.41, 547, 537, 0, '50.46%', '-4.38%', 51.5, 50.5, -4.5],
    ['Ean', 116, 42, 74, 0, '36.21%', 10143.12, 11023.7, 87.44, 95.03, 518, 723, 1, '41.75%', '-5.54%', 48.4, 67.6, -6.4],
    ['Chaz', 85, 41, 44, 0, '48.24%', 7721.18, 7679.58, 90.84, 90.35, 449, 492, 0, '47.72%', '0.52%', 40.6, 44.4, 0.4],
    ['Ross', 87, 40, 47, 0, '45.98%', 7981.18, 8091.06, 91.74, 93.00, 446, 509, 0, '46.70%', '-0.72%', 40.6, 46.4, -0.6],
    ['Jared', 113, 36, 77, 0, '31.86%', 9416.38, 10903.82, 83.33, 96.49, 454, 763, 0, '37.30%', '-5.45%', 42.2, 70.8, -6.2]
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