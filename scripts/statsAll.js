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
    ['Basil', 95, 57, 37, 1, '60.00%', 9383.82, 8630.28, 98.78, 90.85, 612, 422, 1, '59.18%', '0.82%', 56.2, 38.8, 0.8],
    ['Majors', 124, 75, 49, 0, '60.48%', 12225.98, 11434.52, 98.60, 92.21, 759, 563, 0, '57.41%', '3.07%', 71.2, 52.8, 3.8],
    ['Hunter', 110, 65, 44, 1, '59.09%', 10435.46, 10177.86, 94.87, 92.53, 653, 541, 2, '54.68%', '4.41%', 60.2, 49.8, 4.8],
    ['Willis', 126, 70, 56, 0, '55.56%', 11964.42, 11587.48, 94.96, 91.96, 731, 605, 0, '54.72%', '0.84%', 68.9, 57.1, 1.1],
    ['Matt', 124, 70, 54, 0, '56.45%', 11869.96, 11277.12, 95.73, 90.94, 713, 609, 0, '53.93%', '2.52%', 66.9, 57.1, 3.1],
    ['Trevor', 110, 52, 58, 0, '47.27%', 10275.14, 10539.82, 93.41, 95.82, 603, 561, 0, '51.80%', '-4.53%', 57.0, 53.0, -5.0],
    ['Sam', 125, 58, 67, 0, '46.40%', 11625.14, 11207.16, 93.00, 89.66, 663, 666, 0, '49.89%', '-3.49%', 62.4, 62.6, -4.4],
    ['Sawyer', 127, 64, 63, 0, '50.39%', 11672.7, 11729.94, 91.91, 92.36, 648, 695, 0, '48.25%', '2.14%', 61.3, 65.7, 2.7],
    ['Ross', 95, 45, 50, 0, '47.37%', 8750.98, 8801.38, 92.12, 92.65, 487, 548, 0, '47.05%', '0.32%', 44.7, 50.3, 0.3],
    ['Chaz', 92, 45, 47, 0, '48.91%', 8351.98, 8266.94, 90.78, 89.86, 480, 534, 0, '47.34%', '1.58%', 43.6, 48.4, 1.4],
    ['Ean', 123, 45, 78, 0, '36.59%', 10758.98, 11712.3, 87.47, 95.22, 548, 766, 1, '41.71%', '-5.13%', 51.3, 71.7, -6.3],
    ['Jared', 120, 37, 83, 0, '30.83%', 9973.08, 11537.4, 83.11, 96.15, 476, 814, 0, '36.90%', '-6.07%', 44.3, 75.7, -7.3]
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
highScores = combineArrays(highScores, highScores2018, 2019);
lowScores = combineArrays(lowScores, lowScores2018, 2019);
blowouts = combineArrays(blowouts, blowouts2018, 2019);
closeGames = combineArrays(closeGames, closeGames2018, 2019);
highest = combineArrays(highest, highest2018, 2019);
dumpster = combineArrays(dumpster, dumpster2018, 2019);

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