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
    ['Majors', 109, 65, 44, 0, '59.63%', 10649.46, 9936.9, 97.70, 91.16, 666, 495, 0, '57.36%', '2.27%', 62.5, 46.5, 2.5],
    ['Matt', 108, 62, 46, 0, '57.41%', 10220.7, 9749.6, 94.64, 90.27, 622, 532, 0, '53.90%', '3.51%', 58.2, 49.8, 3.8],
    ['Willis', 110, 61, 49, 0, '55.45%', 10455.84, 10070.78, 95.05, 91.55, 652, 516, 0, '55.82%', '-0.37%', 61.4, 48.6, -0.4],
    ['Sawyer', 112, 59, 53, 0, '52.68%', 10343.8, 10225.36, 92.36, 91.30, 584, 598, 0, '49.41%', '3.27%', 55.3, 56.7, 3.7],
    ['Hunter', 95, 57, 37, 1, '60.00%', 9055.14, 8745.9, 95.32, 92.06, 586, 447, 2, '56.71%', '3.29%', 53.9, 41.1, 3.1],
    ['Sam', 110, 49, 61, 0, '44.55%', 10089.76, 9862.96, 91.73, 89.66, 569, 599, 0, '48.72%', '-4.17%', 53.6, 56.4, -4.6],
    ['Basil', 80, 46, 33, 1, '57.50%', 7731.12, 7296.88, 96.64, 91.21, 498, 374, 2, '57.09%', '0.41%', 45.7, 34.3, 0.3],
    ['Trevor', 94, 43, 51, 0, '45.74%', 8569.62, 8825.5, 91.17, 93.89, 491, 505, 0, '49.30%', '-3.55%', 46.3, 47.7, -3.3],
    ['Ean', 108, 40, 68, 0, '37.04%', 9392.36, 10175.84, 86.97, 94.22, 477, 676, 1, '41.38%', '-4.34%', 44.7, 63.3, -4.7],
    ['Ross', 79, 39, 40, 0, '49.37%', 7295.18, 7220.64, 92.34, 91.40, 420, 447, 0, '48.44%', '0.92%', 38.3, 40.7, 0.7],
    ['Chaz', 77, 38, 39, 0, '49.35%', 7044.2, 6914.32, 91.48, 89.80, 421, 431, 1, '49.41%', '-0.06%', 38.0, 39.0, 0.0],
    ['Jared', 105, 32, 73, 0, '30.48%', 8645.28, 10082.34, 82.34, 96.02, 406, 723, 0, '35.96%', '-5.48%', 37.8, 67.2, -5.8]
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
highScores = combineArrays(highScores, highScores2017, 2018);
lowScores = combineArrays(lowScores, lowScores2017, 2018);
blowouts = combineArrays(blowouts, blowouts2017, 2018);
closeGames = combineArrays(closeGames, closeGames2017, 2018);
highest = combineArrays(highest, highest2017, 2018);
dumpster = combineArrays(dumpster, dumpster2017, 2018);

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