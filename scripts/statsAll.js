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
    ['Basil', 99, 58, 40, 1, '58.59%', 9717.24, 9113.58, 98.15, 92.06, 627, 451, 1, '58.16%', '0.43%', 57.6, 41.4, 0.4],
    ['Majors', 128, 78, 50, 0, '60.94%', 12629.12, 11776.54, 98.67, 92.00, 785, 581, 0, '57.47%', '3.47%', 73.6, 54.4, 4.4],
    ['Hunter', 114, 67, 46, 1, '58.77%', 10837.12, 10591.26, 95.06, 92.91, 676, 562, 2, '54.60%', '4.18%', 62.2, 51.8, 4.8],
    ['Willis', 130, 73, 57, 0, '56.15%', 12445.2, 11952.08, 95.73, 91.94, 769, 611, 0, '55.72%', '0.43%', 72.4, 57.6, 0.6],
    ['Matt', 128, 74, 54, 0, '57.81%', 12289.56, 11612.38, 96.01, 90.72, 741, 625, 0, '54.25%', '3.57%', 69.4, 58.6, 4.6],
    ['Trevor', 114, 54, 60, 0, '47.37%', 10642.56, 10923.66, 93.36, 95.82, 620, 588, 0, '51.32%', '-3.96%', 58.5, 55.5, -4.5],
    ['Sam', 129, 61, 68, 0, '47.29%', 12050.92, 11550.1, 93.42, 89.54, 691, 682, 0, '50.33%', '-3.04%', 64.9, 64.1, -3.9],
    ['Sawyer', 131, 66, 65, 0, '50.38%', 12037.36, 12054.26, 91.89, 92.02, 668, 719, 0, '48.16%', '2.22%', 63.1, 67.9, 2.9],
    ['Ross', 99, 45, 54, 0, '45.45%', 9186.5, 9297.58, 92.79, 93.91, 518, 561, 0, '48.01%', '-2.55%', 47.5, 51.5, -2.5],
    ['Chaz', 96, 46, 50, 0, '47.92%', 8685.36, 8676.26, 90.47, 90.38, 492, 566, 0, '46.50%', '1.41%', 44.6, 51.4, 1.4],
    ['Ean', 127, 48, 79, 0, '37.80%', 11146.66, 12046.96, 87.77, 94.86, 569, 789, 1, '41.91%', '-4.11%', 53.2, 73.8, -5.2],
    ['Jared', 124, 37, 87, 0, '29.84%', 10282.2, 11969.7, 82.92, 96.53, 481, 853, 0, '36.06%', '-6.22%', 44.7, 79.3, -7.7]
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

// 2018
highScores = combineArrays(highScores, highScores2018, 2018);
lowScores = combineArrays(lowScores, lowScores2018, 2018);
blowouts = combineArrays(blowouts, blowouts2018, 2018);
closeGames = combineArrays(closeGames, closeGames2018, 2018);
highest = combineArrays(highest, highest2018, 2018);
dumpster = combineArrays(dumpster, dumpster2018, 2018);

// 2019
highScores = combineArrays(highScores, highScores2019, 2019);
lowScores = combineArrays(lowScores, lowScores2019, 2019);
blowouts = combineArrays(blowouts, blowouts2019, 2019);
closeGames = combineArrays(closeGames, closeGames2019, 2019);
highest = combineArrays(highest, highest2019, 2019);
dumpster = combineArrays(dumpster, dumpster2019, 2019);

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