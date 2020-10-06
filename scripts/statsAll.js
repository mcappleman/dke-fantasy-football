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
        lengthMenu: [[10], ["All"]],
        data: highScores,
        columns: scoreColumnNamesAll
    });

    $('#lowScores').DataTable({
        order: [[3, "asc"]],
        sDom: '',
        lengthMenu: [[10], ["All"]],
        data: lowScores,
        columns: scoreColumnNamesAll
    });

    $('#blowouts').DataTable({
        order: [[6, "desc"]],
        sDom: '',
        lengthMenu: [[10], ["All"]],
        data: blowouts,
        columns: gameColumnNamesAll
    });

    $('#closeGames').DataTable({
        order: [[6, "asc"]],
        sDom: '',
        lengthMenu: [[10], ["All"]],
        data: closeGames,
        columns: gameColumnNamesAll
    });

    $('#highest').DataTable({
        order: [[6, "desc"]],
        sDom: '',
        lengthMenu: [[10], ["All"]],
        data: highest,
        columns: gameScoringColumnNamesAll
    });

    $('#dumpster').DataTable({
        order: [[6, "asc"]],
        sDom: '',
        lengthMenu: [[10], ["All"]],
        data: dumpster,
        columns: gameScoringColumnNamesAll
    });

});

var dataSet = [
    ['Majors', 141, 88, 53, 0, '62.41%', 14015.34, 12922.58, 99.40, 91.65, 878, 627, 0, '58.34%', '4.07%', 82.3, 58.7, 5.7],
    ['Basil', 113, 65, 47, 1, '57.52%', 11007.4, 10404.06, 97.41, 92.07, 688, 536, 1, '56.20%', '1.32%', 63.5, 49.5, 1.5],
    ['Willis', 143, 79, 64, 0, '55.24%', 13589.16, 13142.7, 95.03, 91.91, 820, 699, 0, '53.98%', '1.26%', 77.2, 65.8, 1.8],
    ['Matt', 141, 85, 56, 0, '60.28%', 13674, 12741.78, 96.98, 90.37, 838, 667, 0, '55.68%', '4.60%', 78.5, 62.5, 6.5],
    ['Hunter', 127, 72, 54, 1, '56.69%', 12048.46, 11905.88, 94.87, 93.75, 744, 633, 2, '54.02%', '2.67%', 68.6, 58.4, 3.4],
    ['Sam', 143, 68, 75, 0, '47.55%', 13419.5, 12891.94, 93.84, 90.15, 765, 754, 0, '50.36%', '-2.81%', 72.0, 71.0, -4.0],
    ['Trevor', 127, 60, 67, 0, '47.24%', 11918.66, 12191.58, 93.85, 96.00, 696, 651, 0, '51.67%', '-4.43%', 65.6, 61.4, -5.6],
    ['Ross', 113, 52, 61, 0, '46.02%', 10556.26, 10659.22, 93.42, 94.33, 601, 624, 0, '49.06%', '-3.04%', 55.4, 57.6, -3.4],
    ['Sawyer', 144, 71, 73, 0, '49.31%', 13166.1, 13293.52, 91.43, 92.32, 716, 810, 0, '46.92%', '2.39%', 67.6, 76.4, 3.4],
    ['Chaz', 109, 50, 59, 0, '45.87%', 9931.46, 9954.74, 91.11, 91.33, 562, 635, 0, '46.95%', '-1.08%', 51.2, 57.8, -1.2],
    ['Ean', 140, 54, 86, 0, '38.57%', 12395.1, 13327.68, 88.54, 95.20, 644, 853, 1, '43.02%', '-4.45%', 60.2, 79.8, -6.2],
    ['Jared', 138, 43, 95, 0, '31.16%', 11459.24, 13359.56, 83.04, 96.81, 533, 947, 0, '36.01%', '-4.85%', 49.7, 88.3, -6.7]
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

// 2020
highScores = combineArrays(highScores, highScores2020, 2020);
lowScores = combineArrays(lowScores, lowScores2020, 2020);
blowouts = combineArrays(blowouts, blowouts2020, 2020);
closeGames = combineArrays(closeGames, closeGames2020, 2020);
highest = combineArrays(highest, highest2020, 2020);
dumpster = combineArrays(dumpster, dumpster2020, 2020);

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