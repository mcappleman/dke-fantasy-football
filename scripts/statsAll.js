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
    ['Majors', 114, 69, 45, 0, '60.53%', 11209.54, 10421.54, 98.33, 91.42, 699, 517, 0, '57.48%', '3.04%', 65.5, 48.5, 3.5],
    ['Matt', 113, 65, 48, 0, '57.52%', 10775.98, 10182.14, 95.36, 90.11, 659, 550, 0, '54.51%', '3.01%', 61.6, 51.4, 3.4],
    ['Willis', 115, 62, 53, 0, '53.91%', 10888.06, 10600.94, 94.68, 92.18, 669, 554, 0, '54.70%', '-0.79%', 62.9, 52.1, -0.9],
    ['Sawyer', 117, 61, 56, 0, '52.14%', 10769.64, 10740.28, 92.05, 91.80, 603, 634, 0, '48.75%', '3.39%', 57.0, 60.0, 4.0],
    ['Hunter', 100, 60, 39, 1, '60.00%', 9499.5, 9192.78, 95.00, 91.93, 607, 481, 2, '55.78%', '4.22%', 55.8, 44.2, 4.2],
    ['Sam', 115, 53, 62, 0, '46.09%', 10617.56, 10273.38, 92.33, 89.33, 604, 619, 0, '49.39%', '-3.30%', 56.8, 58.2, -3.8],
    ['Basil', 85, 51, 33, 1, '60.00%', 8369.74, 7703.84, 98.47, 90.63, 550, 378, 1, '59.26%', '0.74%', 50.4, 34.6, 0.6],
    ['Trevor', 99, 45, 54, 0, '45.45%', 9078.46, 9423.6, 91.70, 95.19, 523, 528, 0, '49.76%', '-4.31%', 49.3, 49.7, -4.3],
    ['Ean', 113, 42, 71, 0, '37.17%', 9918.6, 10662.96, 87.78, 94.36, 512, 696, 1, '42.39%', '-5.22%', 47.9, 65.1, -5.9],
    ['Ross', 84, 39, 45, 0, '46.43%', 7692.76, 7765.04, 91.58, 92.44, 432, 490, 0, '46.85%', '-0.43%', 39.4, 44.6, -0.4],
    ['Chaz', 82, 40, 42, 0, '48.78%', 7421.64, 7349.86, 90.51, 89.63, 432, 476, 0, '47.58%', '1.20%', 39.0, 43.0, 1.0],
    ['Jared', 110, 34, 76, 0, '30.91%', 9105.74, 10645.42, 82.78, 96.78, 433, 751, 0, '36.57%', '-5.66%', 40.2, 69.8, -6.2]
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