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
    ['Willis', 102, 59, 43, 0, '57.84%', 9762.04, 9309.74, 95.71, 91.27, 618, 466, 0, '57.01%', '0.83%', 58.2, 43.8, 0.8],
    ['Majors', 101, 59, 42, 0, '58.42%', 9759.38, 9135.5, 96.63, 90.45, 599, 478, 0, '55.62%', '2.80%', 56.2, 44.8, 2.8],
    ['Matt', 100, 56, 44, 0, '56.00%', 9333.3, 9041.24, 93.33, 90.41, 561, 509, 0, '52.43%', '3.57%', 52.4, 47.6, 3.6],
    ['Sawyer', 103, 56, 47, 0, '54.37%', 9573.86, 9385.2, 92.95, 91.12, 551, 540, 0, '50.50%', '3.86%', 52.0, 51.0, 4.0],
    ['Hunter', 87, 50, 36, 1, '57.47%', 8269.4, 8043.4, 95.05, 92.45, 535, 414, 2, '56.36%', '1.11%', 49.0, 38.0, 1.0],
    ['Sam', 102, 46, 56, 0, '45.10%', 9350.78, 9095.44, 91.67, 89.17, 526, 558, 0, '48.52%', '-3.43%', 49.5, 52.5, -3.5],
    ['Basil', 71, 39, 31, 1, '54.93%', 6888.08, 6527, 97.02, 91.93, 449, 333, 1, '57.41%', '-2.48%', 40.8, 30.2, -1.8],
    ['Trevor', 85, 38, 47, 0, '44.71%', 7677.64, 8016.04, 90.33, 94.31, 433, 472, 0, '47.85%', '-3.14%', 40.7, 44.3, -2.7],
    ['Ross', 70, 37, 33, 0, '52.86%', 6566.12, 6244.22, 93.80, 89.20, 389, 387, 0, '50.13%', '2.73%', 35.1, 34.9, 1.9],
    ['Ean', 100, 37, 63, 0, '37.00%', 8679.26, 9451.5, 86.79, 94.52, 448, 621, 1, '41.92%', '-4.92%', 41.9, 58.1, -4.9],
    ['Chaz', 69, 34, 35, 0, '49.28%', 6294.6, 6178.08, 91.23, 89.54, 381, 388, 0, '49.54%', '-0.27%', 34.2, 34.8, -0.2],
    ['Jared', 97, 30, 67, 0, '30.93%', 8015.84, 9357.5, 82.64, 96.47, 385, 660, 0, '36.84%', '-5.91%', 35.7, 61.3, -5.7]
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

    list.forEach(function (subArray) {

        subArray = subArray.unshift(year);

    }, this);

    allList = allList.concat(list);

    return allList;

}