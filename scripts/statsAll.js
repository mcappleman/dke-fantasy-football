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
    ['Basil', 93, 56, 36, 1, '60.22%', 9210.7, 8476.14, 99.04, 91.14, 605, 407, 1, '59.77%', '0.44%', 55.6, 37.4, 0.4],
    ['Majors', 122, 74, 48, 0, '60.66%', 12004.62, 11223.64, 98.40, 92.00, 741, 559, 0, '57.00%', '3.66%', 69.5, 52.5, 4.5],
    ['Hunter', 108, 64, 43, 1, '59.26%', 10240.72, 9981.34, 94.82, 92.42, 644, 528, 2, '54.94%', '4.32%', 59.3, 48.7, 4.7],
    ['Matt', 122, 70, 52, 0, '57.38%', 11712.74, 11092.84, 96.01, 90.92, 710, 590, 0, '54.62%', '2.76%', 66.6, 55.4, 3.4],
    ['Willis', 124, 68, 56, 0, '54.84%', 11759.66, 11391.28, 94.84, 91.87, 719, 595, 0, '54.72%', '0.12%', 67.9, 56.1, 0.1],
    ['Trevor', 108, 51, 57, 0, '47.22%', 10059.6, 10327.24, 93.14, 95.62, 586, 556, 0, '51.31%', '-4.09%', 55.4, 52.6, -4.4],
    ['Sam', 123, 57, 66, 0, '46.34%', 11423.06, 10989.84, 92.87, 89.35, 650, 657, 0, '49.73%', '-3.39%', 61.2, 61.8, -4.2],
    ['Sawyer', 125, 64, 61, 0, '51.20%', 11497.38, 11517, 91.98, 92.14, 640, 681, 0, '48.45%', '2.75%', 60.6, 64.4, 3.4],
    ['Ross', 93, 44, 49, 0, '47.31%', 8582.2, 8621.2, 92.28, 92.70, 483, 530, 0, '47.68%', '-0.37%', 44.3, 48.7, -0.3],
    ['Chaz', 90, 43, 47, 0, '47.78%', 8140.54, 8100.1, 90.45, 90.00, 463, 529, 0, '46.67%', '1.10%', 42.0, 48.0, 1.0],
    ['Ean', 121, 44, 77, 0, '36.36%', 10554.8, 11502.94, 87.23, 95.07, 535, 757, 1, '41.42%', '-5.05%', 50.1, 70.9, -6.1],
    ['Jared', 118, 36, 82, 0, '30.51%', 9804.22, 11381.24, 83.09, 96.45, 465, 803, 0, '36.67%', '-6.16%', 43.3, 74.7, -7.3]
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