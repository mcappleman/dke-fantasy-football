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
    ['Majors', 136, 85, 51, 0, '62.50%', 13467.98, 12446.34, 99.03, 91.52, 848, 606, 0, '58.32%', '4.18%', 79.3, 56.7, 5.7],
    ['Basil', 108, 62, 45, 1, '57.41%', 10466.4, 9919.24, 96.91, 91.84, 660, 513, 1, '56.26%', '1.15%', 60.8, 47.2, 1.2],
    ['Willis', 139, 77, 62, 0, '55.40%', 13228.14, 12762.8, 95.17, 91.82, 807, 668, 0, '54.71%', '0.68%', 76.0, 63.0, 1.0],
    ['Matt', 136, 80, 56, 0, '58.82%', 13110.1, 12343.26, 96.40, 90.76, 800, 654, 0, '55.02%', '3.80%', 74.8, 61.2, 5.2],
    ['Hunter', 122, 70, 51, 1, '57.38%', 11554.3, 11383.06, 94.71, 93.30, 719, 607, 2, '54.22%', '3.16%', 66.1, 55.9, 3.9],
    ['Sam', 138, 67, 71, 0, '48.55%', 12961.96, 12376.18, 93.93, 89.68, 750, 718, 0, '51.09%', '-2.54%', 70.5, 67.5, -3.5],
    ['Trevor', 122, 57, 65, 0, '46.72%', 11426.98, 11701.36, 93.66, 95.91, 671, 625, 0, '51.77%', '-5.05%', 63.2, 58.8, -6.2],
    ['Ross', 108, 52, 56, 0, '48.15%', 10125.44, 10092.94, 93.75, 93.45, 587, 587, 0, '50.00%', '-1.85%', 54.0, 54.0, -2.0],
    ['Sawyer', 140, 69, 71, 0, '49.29%', 12780, 12855.78, 91.29, 91.83, 694, 788, 0, '46.83%', '2.46%', 65.6, 74.4, 3.4],
    ['Chaz', 105, 48, 57, 0, '45.71%', 9483.6, 9540.72, 90.32, 90.86, 534, 619, 0, '46.31%', '-0.60%', 48.6, 56.4, -0.6],
    ['Ean', 136, 51, 85, 0, '37.50%', 11948.94, 12908.22, 87.86, 94.91, 613, 840, 1, '42.19%', '-4.69%', 57.4, 78.6, -6.4],
    ['Jared', 133, 41, 92, 0, '30.83%', 10991.1, 12829.6, 82.64, 96.46, 510, 919, 0, '35.69%', '-4.86%', 47.5, 85.5, -6.5]
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