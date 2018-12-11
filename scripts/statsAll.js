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
    ['Majors', 120, 74, 46, 0, '61.67%', 11824.54, 10955.3, 98.54, 91.29, 735, 547, 0, '57.33%', '4.33%', 68.8, 51.2, 5.2],
    ['Matt', 120, 69, 51, 0, '57.50%', 11452.34, 10888, 95.44, 90.73, 695, 587, 0, '54.21%', '3.29%', 65.1, 54.9, 3.9],
    ['Willis', 122, 66, 56, 0, '54.10%', 11556.86, 11233.24, 94.73, 92.08, 706, 590, 0, '54.48%', '-0.38%', 66.5, 55.5, -0.5],
    ['Sawyer', 123, 64, 59, 0, '52.03%', 11358.02, 11331.44, 92.34, 92.13, 639, 664, 0, '49.04%', '2.99%', 60.3, 62.7, 3.7],
    ['Hunter', 107, 63, 43, 1, '58.88%', 10138.3, 9915.58, 94.75, 92.67, 635, 526, 2, '54.69%', '4.19%', 58.5, 48.5, 4.5],
    ['Sam', 122, 57, 65, 0, '46.72%', 11357.3, 10887.42, 93.09, 89.24, 647, 649, 0, '49.92%', '-3.20%', 60.9, 61.1, -3.9],
    ['Basil', 91, 55, 35, 1, '60.44%', 9009.66, 8264.04, 99.01, 90.81, 592, 402, 1, '59.55%', '0.89%', 54.2, 36.8, 0.8],
    ['Trevor', 106, 49, 57, 0, '46.23%', 9822.74, 10134.14, 92.67, 95.61, 569, 555, 0, '50.62%', '-4.40%', 53.7, 52.3, -4.7],
    ['Ean', 120, 43, 77, 0, '35.83%', 10490.08, 11439.68, 87.42, 95.33, 533, 748, 1, '41.61%', '-5.78%', 49.9, 70.1, -6.9],
    ['Chaz', 88, 42, 46, 0, '47.73%', 7955.42, 7929.22, 90.40, 90.10, 455, 519, 0, '46.71%', '1.01%', 41.1, 46.9, 0.9],
    ['Ross', 91, 43, 48, 0, '47.25%', 8423.72, 8449.92, 92.57, 92.86, 477, 518, 0, '47.94%', '-0.69%', 43.6, 47.4, -0.6],
    ['Jared', 117, 36, 81, 0, '30.77%', 9740.96, 11316.52, 83.26, 96.72, 464, 793, 0, '36.91%', '-6.14%', 43.2, 73.8, -7.2]
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