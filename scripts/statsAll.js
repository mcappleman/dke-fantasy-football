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
    ['Majors', 137, 86, 51, 0, '62.77%', 13560.04, 12535.3, 98.98, 91.50, 852, 609, 0, '58.32%', '4.46%', 79.9, 57.1, 6.1],
    ['Basil', 109, 63, 45, 1, '57.80%', 10601.24, 10003.9, 97.26, 91.78, 667, 513, 1, '56.52%', '1.28%', 61.6, 47.4, 1.4],
    ['Willis', 139, 77, 62, 0, '55.40%', 13228.14, 12762.8, 95.17, 91.82, 807, 668, 0, '54.71%', '0.68%', 76.0, 63.0, 1.0],
    ['Matt', 137, 81, 56, 0, '59.12%', 13203, 12404.1, 96.37, 90.54, 805, 656, 0, '55.10%', '4.02%', 75.5, 61.5, 5.5],
    ['Hunter', 123, 70, 52, 1, '56.91%', 11638.96, 11517.9, 94.63, 93.64, 720, 613, 2, '54.01%', '2.90%', 66.4, 56.6, 3.6],
    ['Sam', 139, 67, 72, 0, '48.20%', 13050.92, 12468.24, 93.89, 89.70, 752, 723, 0, '50.98%', '-2.78%', 70.9, 68.1, -3.9],
    ['Trevor', 123, 58, 65, 0, '47.15%', 11535.8, 11791.18, 93.79, 95.86, 677, 626, 0, '51.96%', '-4.80%', 63.9, 59.1, -5.9],
    ['Ross', 109, 52, 57, 0, '47.71%', 10186.28, 10185.84, 93.45, 93.45, 587, 594, 0, '49.70%', '-2.00%', 54.2, 54.8, -2.2],
    ['Sawyer', 140, 69, 71, 0, '49.29%', 12780, 12855.78, 91.29, 91.83, 694, 788, 0, '46.83%', '2.46%', 65.6, 74.4, 3.4],
    ['Chaz', 105, 48, 57, 0, '45.71%', 9483.6, 9540.72, 90.32, 90.86, 534, 619, 0, '46.31%', '-0.60%', 48.6, 56.4, -0.6],
    ['Ean', 136, 51, 85, 0, '37.50%', 11948.94, 12908.22, 87.86, 94.91, 613, 840, 1, '42.19%', '-4.69%', 57.4, 78.6, -6.4],
    ['Jared', 134, 41, 93, 0, '30.60%', 11080.92, 12938.42, 82.69, 96.56, 513, 923, 0, '35.72%', '-5.13%', 47.9, 86.1, -6.9]
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