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
    ['Majors', 104, 62, 42, 0, '59.62%', 10104.02, 9403.6, 97.15, 90.42, 630, 480, 0, '56.76%', '2.86%', 59.0, 45.0, 3.0],
    ['Willis', 105, 61, 44, 0, '58.10%', 10051.9, 9583.06, 95.73, 91.27, 637, 480, 0, '57.03%', '1.07%', 59.9, 45.1, 1.1],
    ['Matt', 103, 57, 46, 0, '55.34%', 9601.18, 9302.86, 93.22, 90.32, 576, 527, 0, '52.22%', '3.12%', 53.8, 49.2, 3.2],
    ['Sawyer', 106, 56, 50, 0, '52.83%', 9798.2, 9674.66, 92.44, 91.27, 559, 565, 0, '49.73%', '3.10%', 52.7, 53.3, 3.3],
    ['Hunter', 90, 52, 37, 1, '57.78%', 8565.9, 8344.5, 95.18, 92.72, 554, 428, 2, '56.40%', '1.38%', 50.8, 39.2, 1.2],
    ['Sam', 105, 48, 57, 0, '45.71%', 9644.26, 9334.88, 91.85, 88.90, 547, 570, 0, '48.97%', '-3.26%', 51.4, 53.6, -3.4],
    ['Basil', 74, 41, 32, 1, '55.41%', 7196.62, 6794.8, 97.25, 91.82, 473, 342, 1, '58.03%', '-2.62%', 42.9, 31.1, -1.9],
    ['Trevor', 88, 41, 47, 0, '46.59%', 7998.76, 8247.44, 90.90, 93.72, 458, 480, 0, '48.83%', '-2.24%', 43.0, 45.0, -2.0],
    ['Ean', 103, 38, 65, 0, '36.89%', 8901.82, 9716.64, 86.43, 94.34, 453, 649, 1, '41.12%', '-4.22%', 42.3, 60.7, -4.3],
    ['Ross', 73, 37, 36, 0, '50.68%', 6788.98, 6597.94, 93.00, 90.38, 397, 412, 0, '49.07%', '1.61%', 35.8, 37.2, 1.2],
    ['Chaz', 72, 35, 37, 0, '48.61%', 6575.28, 6459.36, 91.32, 89.71, 396, 406, 0, '49.38%', '-0.77%', 35.6, 36.4, -0.6],
    ['Jared', 100, 31, 69, 0, '31.00%', 8231.54, 9613.28, 82.32, 96.13, 393, 685, 0, '36.46%', '-5.46%', 36.5, 63.5, -5.5]
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