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
    ['Basil', 101, 58, 42, 1, '57.43%', 9841.36, 9283.58, 97.44, 91.92, 628, 472, 1, '57.08%', '0.34%', 57.7, 43.3, 0.3],
    ['Majors', 130, 79, 51, 0, '60.77%', 12821.16, 11944.56, 98.62, 91.88, 796, 592, 0, '57.35%', '3.42%', 74.6, 55.4, 4.4],
    ['Hunter', 116, 68, 47, 1, '58.62%', 10983.84, 10771.26, 94.69, 92.86, 681, 579, 2, '54.04%', '4.58%', 62.7, 53.3, 5.3],
    ['Willis', 132, 74, 58, 0, '56.06%', 12611.04, 12146.6, 95.54, 92.02, 777, 625, 0, '55.42%', '0.64%', 73.2, 58.8, 0.8],
    ['Matt', 130, 76, 54, 0, '58.46%', 12526.66, 11816.86, 96.36, 90.90, 761, 627, 0, '54.83%', '3.63%', 71.3, 58.7, 4.7],
    ['Trevor', 116, 54, 62, 0, '46.55%', 10805.72, 11138.7, 93.15, 96.02, 626, 604, 0, '50.89%', '-4.34%', 59.0, 57.0, -5.0],
    ['Sam', 131, 62, 69, 0, '47.33%', 12252.5, 11757.56, 93.53, 89.75, 703, 692, 0, '50.39%', '-3.07%', 66.0, 65.0, -4.0],
    ['Sawyer', 133, 68, 65, 0, '51.13%', 12241.54, 12187.7, 92.04, 91.64, 681, 728, 0, '48.33%', '2.80%', 64.3, 68.7, 3.7],
    ['Ross', 101, 47, 54, 0, '46.53%', 9437.26, 9472.46, 93.44, 93.79, 538, 563, 0, '48.86%', '-2.33%', 49.4, 51.6, -2.4],
    ['Chaz', 98, 47, 51, 0, '47.96%', 8895.96, 8853.86, 90.78, 90.35, 506, 574, 0, '46.85%', '1.11%', 45.9, 52.1, 1.1],
    ['Ean', 129, 48, 81, 0, '37.21%', 11315.52, 12274.72, 87.72, 95.15, 578, 802, 1, '41.89%', '-4.68%', 54.0, 75.0, -6.0],
    ['Jared', 126, 38, 88, 0, '30.16%', 10466, 12165.26, 83.06, 96.55, 494, 862, 0, '36.43%', '-6.27%', 45.9, 80.1, -7.9]
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