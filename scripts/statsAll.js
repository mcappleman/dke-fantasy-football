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
    ['Matt', 119, 68, 51, 0, '57.14%', 11349.92, 10801.56, 95.38, 90.77, 690, 585, 0, '54.12%', '3.03%', 64.4, 54.6, 3.6],
    ['Willis', 121, 65, 56, 0, '53.72%', 11482.06, 11170.34, 94.89, 92.32, 705, 584, 0, '54.69%', '-0.97%', 66.2, 54.8, -1.2],
    ['Sawyer', 123, 64, 59, 0, '52.03%', 11358.02, 11331.44, 92.34, 92.13, 639, 664, 0, '49.04%', '2.99%', 60.3, 62.7, 3.7],
    ['Hunter', 106, 63, 42, 1, '59.43%', 10051.86, 9813.16, 94.83, 92.58, 632, 522, 2, '54.76%', '4.68%', 58.0, 48.0, 5.0],
    ['Sam', 121, 57, 64, 0, '47.11%', 11279.42, 10771.04, 93.22, 89.02, 645, 644, 0, '50.04%', '-2.93%', 60.5, 60.5, -3.5],
    ['Basil', 91, 55, 35, 1, '60.44%', 9009.66, 8264.04, 99.01, 90.81, 592, 402, 1, '59.55%', '0.89%', 54.2, 36.8, 0.8],
    ['Trevor', 105, 48, 57, 0, '45.71%', 9706.36, 10056.26, 92.44, 95.77, 563, 554, 0, '50.40%', '-4.69%', 52.9, 52.1, -4.9],
    ['Ean', 119, 43, 76, 0, '36.13%', 10427.18, 11364.88, 87.62, 95.50, 533, 741, 1, '41.84%', '-5.71%', 49.8, 69.2, -6.8],
    ['Chaz', 88, 42, 46, 0, '47.73%', 7955.42, 7929.22, 90.40, 90.10, 455, 519, 0, '46.71%', '1.01%', 41.1, 46.9, 0.9],
    ['Ross', 90, 42, 48, 0, '46.67%', 8296.6, 8354.08, 92.18, 92.82, 470, 518, 0, '47.57%', '-0.90%', 42.8, 47.2, -0.8],
    ['Jared', 116, 36, 80, 0, '31.03%', 9645.12, 11189.4, 83.15, 96.46, 460, 790, 0, '36.80%', '-5.77%', 42.7, 73.3, -6.7]
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