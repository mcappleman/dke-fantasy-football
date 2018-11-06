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
    ['Basil', 87, 51, 35, 1, '58.62%', 8551.04, 7910.28, 98.29, 90.92, 558, 392, 1, '58.73%', '-0.11%', 51.1, 35.9, -0.1],
    ['Majors', 116, 70, 46, 0, '60.34%', 11394.52, 10612.82, 98.23, 91.49, 709, 529, 0, '57.27%', '3.08%', 66.4, 49.6, 3.6],
    ['Hunter', 102, 61, 40, 1, '59.80%', 9688.96, 9390.66, 94.99, 92.07, 618, 492, 2, '55.67%', '4.14%', 56.8, 45.2, 4.2],
    ['Willis', 117, 64, 53, 0, '54.70%', 11071.7, 10745.72, 94.63, 91.84, 679, 566, 0, '54.54%', '0.16%', 63.8, 53.2, 0.2],
    ['Matt', 115, 66, 49, 0, '57.39%', 10994.5, 10395.62, 95.60, 90.40, 671, 560, 0, '54.51%', '2.88%', 62.7, 52.3, 3.3],
    ['Trevor', 101, 47, 54, 0, '46.53%', 9300.06, 9621.36, 92.08, 95.26, 540, 533, 0, '50.33%', '-3.79%', 50.8, 50.2, -3.8],
    ['Sam', 117, 55, 62, 0, '47.01%', 10839.24, 10385.12, 92.64, 88.76, 617, 628, 0, '49.56%', '-2.55%', 58.0, 59.0, -3.0],
    ['Sawyer', 119, 62, 57, 0, '52.10%', 10968.68, 10968, 92.17, 92.17, 617, 642, 0, '49.01%', '3.09%', 58.3, 60.7, 3.7],
    ['Chaz', 84, 41, 43, 0, '48.81%', 7640.86, 7561.48, 90.96, 90.02, 447, 483, 0, '48.06%', '0.75%', 40.4, 43.6, 0.6],
    ['Ross', 86, 39, 47, 0, '45.35%', 7863.08, 8010.74, 91.43, 93.15, 437, 507, 0, '46.29%', '-0.94%', 39.8, 46.2, -0.8],
    ['Ean', 115, 42, 73, 0, '36.52%', 10068.6, 10885.8, 87.55, 94.66, 518, 712, 1, '42.12%', '-5.60%', 48.4, 66.6, -6.4],
    ['Jared', 112, 35, 77, 0, '31.25%', 9293.68, 10801.88, 82.98, 96.45, 444, 762, 0, '36.82%', '-5.57%', 41.2, 70.8, -6.2]
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