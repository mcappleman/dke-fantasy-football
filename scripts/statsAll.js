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
    ['Majors', 108, 65, 43, 0, '60.19%', 10551.1, 9816.2, 97.70, 90.89, 662, 488, 0, '57.57%', '2.62%', 62.2, 45.8, 2.8],
    ['Willis', 109, 61, 48, 0, '55.96%', 10386.88, 9963.9, 95.29, 91.41, 651, 506, 0, '56.27%', '-0.30%', 61.3, 47.7, -0.3],
    ['Matt', 107, 61, 46, 0, '57.01%', 10113.82, 9680.64, 94.52, 90.47, 613, 530, 0, '53.63%', '3.38%', 57.4, 49.6, 3.6],
    ['Sawyer', 111, 58, 53, 0, '52.25%', 10223.1, 10127, 92.10, 91.23, 573, 598, 0, '48.93%', '3.32%', 54.3, 56.7, 3.7],
    ['Hunter', 94, 56, 37, 1, '59.57%', 8946.56, 8645.72, 95.18, 91.98, 576, 446, 2, '56.35%', '3.23%', 53.0, 41.0, 3.0],
    ['Sam', 109, 49, 60, 0, '44.95%', 10020.9, 9763.6, 91.93, 89.57, 569, 588, 0, '49.18%', '-4.22%', 53.6, 55.4, -4.6],
    ['Basil', 79, 45, 33, 1, '56.96%', 7631.76, 7217.04, 96.60, 91.35, 493, 369, 1, '57.18%', '-0.22%', 45.2, 33.8, -0.2],
    ['Trevor', 93, 42, 51, 0, '45.16%', 8463.38, 8739.96, 91.00, 93.98, 483, 502, 0, '49.04%', '-3.87%', 45.6, 47.4, -3.6],
    ['Ean', 107, 40, 67, 0, '37.38%', 9306.82, 10069.6, 86.98, 94.11, 474, 668, 1, '41.51%', '-4.13%', 44.4, 62.6, -4.4],
    ['Ross', 78, 39, 39, 0, '50.00%', 7195, 7112.06, 92.24, 91.18, 413, 443, 0, '48.25%', '1.75%', 37.6, 40.4, 1.4],
    ['Chaz', 76, 37, 39, 0, '48.68%', 6944.84, 6845.46, 91.38, 90.07, 416, 426, 0, '49.41%', '-0.72%', 37.5, 38.5, -0.5],
    ['Jared', 104, 32, 72, 0, '30.77%', 8565.44, 9982.98, 82.36, 95.99, 404, 714, 0, '36.14%', '-5.37%', 37.6, 66.4, -5.6]
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