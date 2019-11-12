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
    ['Majors', 132, 81, 51, 0, '61.36%', 13037.6, 12121.76, 98.77, 91.83, 813, 597, 0, '57.66%', '3.70%', 76.1, 55.9, 4.9],
    ['Basil', 103, 59, 43, 1, '57.28%', 10024.88, 9435.9, 97.33, 91.61, 638, 484, 1, '56.86%', '0.42%', 58.6, 44.4, 0.4],
    ['Willis', 134, 75, 59, 0, '55.97%', 12794.56, 12346.9, 95.48, 92.14, 786, 638, 0, '55.20%', '0.77%', 74.0, 60.0, 1.0],
    ['Matt', 132, 78, 54, 0, '59.09%', 12739.02, 11971.76, 96.51, 90.70, 776, 634, 0, '55.04%', '4.06%', 72.6, 59.4, 5.4],
    ['Hunter', 118, 68, 49, 1, '57.63%', 11184.04, 10990.58, 94.78, 93.14, 693, 589, 2, '54.05%', '3.58%', 63.8, 54.2, 4.2],
    ['Sam', 133, 64, 69, 0, '48.12%', 12493.56, 11913.4, 93.94, 89.57, 724, 693, 0, '51.09%', '-2.97%', 68.0, 65.0, -4.0],
    ['Trevor', 118, 55, 63, 0, '46.61%', 10976.16, 11295.6, 93.02, 95.73, 633, 619, 0, '50.56%', '-3.95%', 59.7, 58.3, -4.7],
    ['Ross', 103, 49, 54, 0, '47.57%', 9669.92, 9651.34, 93.88, 93.70, 559, 564, 0, '49.78%', '-2.20%', 51.3, 51.7, -2.3],
    ['Sawyer', 135, 68, 67, 0, '50.37%', 12393.12, 12411.02, 91.80, 91.93, 685, 746, 0, '47.87%', '2.50%', 64.6, 70.4, 3.4],
    ['Chaz', 100, 47, 53, 0, '47.00%', 9058, 9079.76, 90.58, 90.80, 513, 589, 0, '46.55%', '0.45%', 46.6, 53.4, 0.4],
    ['Ean', 131, 49, 82, 0, '37.40%', 11498.44, 12451.1, 87.77, 95.05, 587, 815, 1, '41.87%', '-4.47%', 54.9, 76.1, -5.9],
    ['Jared', 128, 38, 90, 0, '29.69%', 10569.28, 12384.02, 82.57, 96.75, 494, 884, 0, '35.85%', '-6.16%', 45.9, 82.1, -7.9]
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