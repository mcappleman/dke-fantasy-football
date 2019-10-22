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
    ['Basil', 100, 58, 41, 1, '58.00%', 9781, 9191.32, 97.81, 91.91, 628, 461, 1, '57.66%', '0.34%', 57.7, 42.3, 0.3],
    ['Majors', 129, 78, 51, 0, '60.47%', 12728.9, 11884.2, 98.67, 92.13, 792, 585, 0, '57.52%', '2.95%', 74.2, 54.8, 3.8],
    ['Hunter', 115, 68, 46, 1, '59.13%', 10914.86, 10655.02, 94.91, 92.65, 680, 569, 2, '54.44%', '4.69%', 62.6, 52.4, 5.4],
    ['Willis', 131, 73, 58, 0, '55.73%', 12503.46, 12055.06, 95.45, 92.02, 769, 622, 0, '55.28%', '0.44%', 72.4, 58.6, 0.6],
    ['Matt', 129, 75, 54, 0, '58.14%', 12397.22, 11712.16, 96.10, 90.79, 751, 626, 0, '54.54%', '3.60%', 70.4, 58.6, 4.6],
    ['Trevor', 115, 54, 61, 0, '46.96%', 10714.18, 11031.12, 93.17, 95.92, 623, 596, 0, '51.11%', '-4.15%', 58.8, 56.2, -4.8],
    ['Sam', 130, 62, 68, 0, '47.69%', 12149.24, 11614.26, 93.46, 89.34, 697, 687, 0, '50.36%', '-2.67%', 65.5, 64.5, -3.5],
    ['Sawyer', 132, 67, 65, 0, '50.76%', 12140.34, 12112.52, 91.97, 91.76, 676, 722, 0, '48.35%', '2.40%', 63.8, 68.2, 3.2],
    ['Ross', 100, 46, 54, 0, '46.00%', 9293.96, 9369.2, 92.94, 93.69, 527, 563, 0, '48.35%', '-2.35%', 48.3, 51.7, -2.3],
    ['Chaz', 97, 46, 51, 0, '47.42%', 8779.72, 8784.88, 90.51, 90.57, 497, 572, 0, '46.49%', '0.93%', 45.1, 51.9, 0.9],
    ['Ean', 128, 48, 80, 0, '37.50%', 11210.82, 12145.28, 87.58, 94.89, 571, 798, 1, '41.72%', '-4.22%', 53.4, 74.6, -5.4],
    ['Jared', 125, 38, 87, 0, '30.40%', 10390.82, 12064.06, 83.13, 96.51, 492, 853, 0, '36.58%', '-6.18%', 45.7, 79.3, -7.7]
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