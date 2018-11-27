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
    ['Majors', 119, 73, 46, 0, '61.34%', 11750.32, 10888.8, 98.74, 91.50, 734, 537, 0, '57.75%', '3.59%', 68.7, 50.3, 4.3],
    ['Matt', 118, 67, 51, 0, '56.78%', 11259.2, 10715.16, 95.42, 90.81, 684, 580, 0, '54.11%', '2.67%', 63.9, 54.1, 3.1],
    ['Willis', 120, 64, 56, 0, '53.33%', 11390.78, 11079.64, 94.92, 92.33, 698, 580, 0, '54.62%', '-1.28%', 65.5, 54.5, -1.5],
    ['Sawyer', 122, 64, 58, 0, '52.46%', 11267.32, 11240.16, 92.36, 92.13, 634, 658, 0, '49.07%', '3.39%', 59.9, 62.1, 4.1],
    ['Hunter', 105, 63, 41, 1, '60.00%', 9985.36, 9738.94, 95.10, 92.75, 632, 511, 2, '55.28%', '4.72%', 58.0, 47.0, 5.0],
    ['Sam', 120, 57, 63, 0, '47.50%', 11183.8, 10665.48, 93.20, 88.88, 637, 641, 0, '49.84%', '-2.34%', 59.8, 60.2, -2.8],
    ['Basil', 90, 54, 35, 1, '60.00%', 8904.1, 8168.42, 98.93, 90.76, 582, 401, 1, '59.20%', '0.80%', 53.3, 36.7, 0.7],
    ['Trevor', 104, 48, 56, 0, '46.15%', 9621.56, 9947.22, 92.52, 95.65, 561, 545, 0, '50.72%', '-4.57%', 52.8, 51.2, -4.8],
    ['Ean', 118, 42, 76, 0, '35.59%', 10323.02, 11280, 87.48, 95.59, 524, 739, 1, '41.50%', '-5.90%', 49.0, 69.0, -7.0],
    ['Chaz', 87, 42, 45, 0, '48.28%', 7869.02, 7838.5, 90.45, 90.10, 451, 512, 0, '46.83%', '1.44%', 40.7, 46.3, 1.3],
    ['Ross', 89, 41, 48, 0, '46.07%', 8187.56, 8269.28, 92.00, 92.91, 459, 518, 0, '46.98%', '-0.91%', 41.8, 47.2, -0.8],
    ['Jared', 115, 36, 79, 0, '31.30%', 9560.24, 11085.24, 83.13, 96.39, 457, 782, 0, '36.88%', '-5.58%', 42.4, 72.6, -6.4]
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