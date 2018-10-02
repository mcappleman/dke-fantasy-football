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
    ['Majors', 110, 66, 44, 0, '60.00%', 10743.7, 10024.02, 97.67, 91.13, 673, 499, 0, '57.42%', '2.58%', 63.2, 46.8, 2.8],
    ['Matt', 109, 62, 47, 0, '56.88%', 10297.9, 9837.78, 94.48, 90.25, 624, 541, 0, '53.56%', '3.32%', 58.4, 50.6, 3.6],
    ['Willis', 111, 61, 50, 0, '54.95%', 10515.6, 10166.52, 94.74, 91.59, 652, 527, 0, '55.30%', '-0.35%', 61.4, 49.6, -0.4],
    ['Sawyer', 113, 60, 53, 0, '53.10%', 10439.54, 10285.12, 92.39, 91.02, 591, 602, 0, '49.54%', '3.56%', 56.0, 57.0, 4.0],
    ['Hunter', 96, 57, 38, 1, '59.38%', 9118.52, 8844.5, 94.98, 92.13, 587, 457, 2, '56.21%', '3.16%', 54.0, 42.0, 3.0],
    ['Sam', 111, 49, 62, 0, '44.14%', 10176.88, 9950.78, 91.68, 89.65, 572, 607, 0, '48.52%', '-4.37%', 53.9, 57.1, -4.9],
    ['Basil', 81, 47, 33, 1, '58.02%', 7829.72, 7360.26, 96.66, 90.87, 509, 375, 1, '57.57%', '0.45%', 46.6, 34.4, 0.4],
    ['Trevor', 95, 44, 51, 0, '46.32%', 8665.48, 8919.72, 91.22, 93.89, 499, 508, 0, '49.55%', '-3.24%', 47.1, 47.9, -3.1],
    ['Ean', 109, 40, 69, 0, '36.70%', 9490, 10291.48, 87.06, 94.42, 486, 678, 1, '41.76%', '-5.06%', 45.5, 63.5, -5.5],
    ['Ross', 80, 39, 41, 0, '48.75%', 7389.4, 7316.5, 92.37, 91.46, 425, 453, 0, '48.41%', '0.34%', 38.7, 41.3, 0.3],
    ['Chaz', 78, 39, 39, 0, '50.00%', 7125.96, 6991.52, 91.36, 89.63, 424, 440, 0, '49.07%', '0.93%', 38.3, 39.7, 0.7],
    ['Jared', 106, 33, 73, 0, '31.13%', 8760.92, 10179.98, 82.65, 96.04, 417, 723, 0, '36.58%', '-5.45%', 38.8, 67.2, -5.8]
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