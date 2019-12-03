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
    ['Majors', 135, 84, 51, 0, '62.22%', 13367.58, 12363.52, 99.02, 91.58, 842, 601, 0, '58.35%', '3.87%', 78.8, 56.2, 5.2],
    ['Basil', 106, 61, 44, 1, '57.55%', 10280.58, 9698.46, 96.99, 91.49, 652, 503, 1, '56.44%', '1.10%', 59.8, 46.2, 1.2],
    ['Willis', 137, 76, 61, 0, '55.47%', 13042.62, 12577.54, 95.20, 91.81, 798, 659, 0, '54.77%', '0.70%', 75.0, 62.0, 1.0],
    ['Matt', 135, 80, 55, 0, '59.26%', 13021.12, 12222.44, 96.45, 90.54, 797, 646, 0, '55.23%', '4.03%', 74.6, 60.4, 5.4],
    ['Hunter', 121, 70, 50, 1, '57.85%', 11461.76, 11268.8, 94.73, 93.13, 714, 601, 2, '54.29%', '3.56%', 65.7, 55.3, 4.3],
    ['Sam', 136, 65, 71, 0, '47.79%', 12744.46, 12201.84, 93.71, 89.72, 734, 716, 0, '50.62%', '-2.83%', 68.8, 67.2, -3.8],
    ['Trevor', 121, 56, 65, 0, '46.28%', 11294.5, 11622.36, 93.34, 96.05, 660, 625, 0, '51.36%', '-5.08%', 62.1, 58.9, -6.1],
    ['Ross', 106, 51, 55, 0, '48.11%', 9949.32, 9910.52, 93.86, 93.50, 580, 576, 0, '50.17%', '-2.06%', 53.2, 52.8, -2.2],
    ['Sawyer', 138, 69, 69, 0, '50.00%', 12634.24, 12671.34, 91.55, 91.82, 694, 770, 0, '47.40%', '2.60%', 65.4, 72.6, 3.6],
    ['Chaz', 103, 47, 56, 0, '45.63%', 9293.48, 9363.42, 90.23, 90.91, 523, 612, 0, '46.08%', '-0.45%', 47.5, 55.5, -0.5],
    ['Ean', 134, 51, 83, 0, '38.06%', 11771.62, 12708.04, 87.85, 94.84, 606, 829, 1, '42.24%', '-4.18%', 56.6, 77.4, -5.6],
    ['Jared', 131, 39, 92, 0, '29.77%', 10794.22, 12661.78, 82.40, 96.65, 499, 912, 0, '35.36%', '-5.59%', 46.3, 84.7, -7.3]
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