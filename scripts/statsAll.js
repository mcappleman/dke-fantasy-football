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
    ['Majors', 134, 83, 51, 0, '61.94%', 13273.94, 12296.8, 99.06, 91.77, 835, 597, 0, '58.31%', '3.63%', 78.1, 55.9, 4.9],
    ['Basil', 105, 61, 43, 1, '58.10%', 10189.78, 9589.26, 97.05, 91.33, 646, 498, 1, '56.46%', '1.63%', 59.3, 45.7, 1.7],
    ['Willis', 136, 76, 60, 0, '55.88%', 12963.84, 12497.38, 95.32, 91.89, 796, 650, 0, '55.05%', '0.83%', 74.9, 61.1, 1.1],
    ['Matt', 134, 79, 55, 0, '58.96%', 12932.18, 12152.88, 96.51, 90.69, 792, 640, 0, '55.31%', '3.65%', 74.1, 59.9, 4.9],
    ['Hunter', 120, 70, 49, 1, '58.33%', 11365.74, 11158.28, 94.71, 92.99, 706, 598, 2, '54.13%', '4.20%', 65.0, 55.0, 5.0],
    ['Sam', 135, 65, 70, 0, '48.15%', 12677.74, 12108.2, 93.91, 89.69, 734, 705, 0, '51.01%', '-2.86%', 68.9, 66.1, -3.9],
    ['Trevor', 120, 55, 65, 0, '45.83%', 11185.3, 11531.56, 93.21, 96.10, 650, 624, 0, '51.02%', '-5.19%', 61.2, 58.8, -6.2],
    ['Ross', 105, 50, 55, 0, '47.62%', 9838.8, 9814.5, 93.70, 93.47, 569, 576, 0, '49.69%', '-2.08%', 52.2, 52.8, -2.2],
    ['Sawyer', 137, 69, 68, 0, '50.36%', 12552.08, 12571.62, 91.62, 91.76, 690, 763, 0, '47.49%', '2.88%', 65.1, 71.9, 3.9],
    ['Chaz', 102, 47, 55, 0, '46.08%', 9223.92, 9274.48, 90.43, 90.93, 522, 602, 0, '46.44%', '-0.36%', 47.4, 54.6, -0.4],
    ['Ean', 133, 50, 83, 0, '37.59%', 11671.9, 12625.88, 87.76, 94.93, 597, 827, 1, '41.93%', '-4.34%', 55.8, 77.2, -5.8],
    ['Jared', 130, 38, 92, 0, '29.23%', 10714.06, 12583, 82.42, 96.79, 496, 904, 0, '35.43%', '-6.20%', 46.1, 83.9, -8.1]
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