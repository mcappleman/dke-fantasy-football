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
    ['Majors', 121, 74, 47, 0, '61.16%', 11897.24, 11106.16, 98.32, 91.79, 739, 554, 0, '57.15%', '4.00%', 69.2, 51.8, 4.8],
    ['Matt', 121, 70, 51, 0, '57.85%', 11603.2, 10960.7, 95.89, 90.58, 706, 587, 0, '54.60%', '3.25%', 66.1, 54.9, 3.9],
    ['Willis', 123, 67, 56, 0, '54.47%', 11639.72, 11311.02, 94.63, 91.96, 713, 594, 0, '54.55%', '-0.08%', 67.1, 55.9, -0.1],
    ['Sawyer', 124, 64, 60, 0, '51.61%', 11409.36, 11409.66, 92.01, 92.01, 639, 675, 0, '48.63%', '2.98%', 60.3, 63.7, 3.7],
    ['Hunter', 108, 64, 43, 1, '59.26%', 10240.72, 9981.34, 94.82, 92.42, 644, 528, 2, '54.94%', '4.32%', 59.3, 48.7, 4.7],
    ['Sam', 123, 57, 66, 0, '46.34%', 11423.06, 10989.84, 92.87, 89.35, 650, 657, 0, '49.73%', '-3.39%', 61.2, 61.8, -4.2],
    ['Basil', 92, 55, 36, 1, '59.78%', 9093.22, 8370.76, 98.84, 90.99, 600, 405, 1, '59.69%', '0.09%', 54.9, 37.1, 0.1],
    ['Trevor', 107, 50, 57, 0, '46.73%', 9929.46, 10217.7, 92.80, 95.49, 579, 556, 0, '51.01%', '-4.28%', 54.6, 52.4, -4.6],
    ['Ean', 121, 44, 77, 0, '36.36%', 10554.8, 11502.94, 87.23, 95.07, 535, 757, 1, '41.42%', '-5.05%', 50.1, 70.9, -6.1],
    ['Ross', 92, 44, 48, 0, '47.83%', 8501.94, 8501.26, 92.41, 92.41, 483, 523, 0, '48.01%', '-0.19%', 44.2, 47.8, -0.2],
    ['Chaz', 89, 42, 47, 0, '47.19%', 8033.2, 8012.08, 90.26, 90.02, 460, 525, 0, '46.70%', '0.49%', 41.6, 47.4, 0.4],
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