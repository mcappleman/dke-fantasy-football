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
    ['Majors', 111, 67, 44, 0, '60.36%', 10920.26, 10128.6, 98.38, 91.25, 684, 499, 0, '57.82%', '2.54%', 64.2, 46.8, 2.8],
    ['Matt', 110, 62, 48, 0, '56.36%', 10409.8, 9952.24, 94.63, 90.47, 630, 546, 0, '53.57%', '2.79%', 58.9, 51.1, 3.1],
    ['Willis', 112, 62, 50, 0, '55.36%', 10644.8, 10286.72, 95.04, 91.85, 661, 529, 0, '55.55%', '-0.19%', 62.2, 49.8, -0.2],
    ['Sawyer', 114, 60, 54, 0, '52.63%', 10517.32, 10416.74, 92.26, 91.37, 593, 611, 0, '49.25%', '3.38%', 56.1, 57.9, 3.9],
    ['Hunter', 97, 58, 38, 1, '59.79%', 9199.7, 8915.18, 94.84, 91.91, 590, 465, 2, '55.91%', '3.88%', 54.2, 42.8, 3.8],
    ['Sam', 112, 50, 62, 0, '44.64%', 10259.64, 10026.78, 91.60, 89.52, 576, 614, 0, '48.40%', '-3.76%', 54.2, 57.8, -4.2],
    ['Basil', 82, 48, 33, 1, '58.54%', 7961.34, 7438.04, 97.09, 90.71, 519, 376, 1, '57.98%', '0.56%', 47.5, 34.5, 0.5],
    ['Trevor', 96, 45, 51, 0, '46.88%', 8779.94, 9031.62, 91.46, 94.08, 506, 512, 0, '49.71%', '-2.83%', 47.7, 48.3, -2.7],
    ['Ean', 110, 40, 70, 0, '36.36%', 9610.2, 10420.68, 87.37, 94.73, 494, 681, 1, '42.05%', '-5.69%', 46.3, 63.7, -6.3],
    ['Ross', 81, 39, 42, 0, '48.15%', 7465.4, 7399.26, 92.17, 91.35, 426, 463, 0, '47.92%', '0.23%', 38.8, 42.2, 0.2],
    ['Chaz', 79, 39, 40, 0, '49.37%', 7196.64, 7072.7, 91.10, 89.53, 424, 451, 0, '48.46%', '0.91%', 38.3, 40.7, 0.7],
    ['Jared', 107, 33, 74, 0, '30.84%', 8865.5, 10356.54, 82.86, 96.79, 422, 729, 0, '36.66%', '-5.82%', 39.2, 67.8, -6.2]
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