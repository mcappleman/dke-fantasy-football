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
    ['Majors', 133, 82, 51, 0, '61.65%', 13154.64, 12220.44, 98.91, 91.88, 824, 597, 0, '57.99%', '3.67%', 77.1, 55.9, 4.9],
    ['Basil', 104, 60, 43, 1, '57.69%', 10104.56, 9504.32, 97.16, 91.39, 641, 492, 1, '56.57%', '1.12%', 58.8, 45.2, 1.2],
    ['Willis', 135, 76, 59, 0, '56.30%', 12878.9, 12412.16, 95.40, 91.94, 792, 643, 0, '55.19%', '1.10%', 74.5, 60.5, 1.5],
    ['Matt', 133, 79, 54, 0, '59.40%', 12839.1, 12052.98, 96.53, 90.62, 785, 636, 0, '55.24%', '4.16%', 73.5, 59.5, 5.5],
    ['Hunter', 119, 69, 49, 1, '57.98%', 11265.84, 11065.2, 94.67, 92.98, 698, 595, 2, '53.98%', '4.01%', 64.2, 54.8, 4.8],
    ['Sam', 134, 64, 70, 0, '47.76%', 12558.82, 11997.74, 93.72, 89.54, 724, 704, 0, '50.70%', '-2.94%', 67.9, 66.1, -3.9],
    ['Trevor', 119, 55, 64, 0, '46.22%', 11074.84, 11412.64, 93.07, 95.90, 641, 622, 0, '50.75%', '-4.53%', 60.4, 58.6, -5.4],
    ['Ross', 104, 49, 55, 0, '47.12%', 9751.14, 9751.42, 93.76, 93.76, 563, 571, 0, '49.65%', '-2.53%', 51.6, 52.4, -2.6],
    ['Sawyer', 136, 68, 68, 0, '50.00%', 12467.74, 12492.82, 91.67, 91.86, 687, 755, 0, '47.64%', '2.36%', 64.8, 71.2, 3.2],
    ['Chaz', 101, 47, 54, 0, '46.53%', 9145.12, 9190.14, 90.55, 90.99, 520, 593, 0, '46.72%', '-0.19%', 47.2, 53.8, -0.2],
    ['Ean', 132, 50, 82, 0, '37.88%', 11608.82, 12538.22, 87.95, 94.99, 597, 816, 1, '42.26%', '-4.38%', 55.8, 76.2, -5.8],
    ['Jared', 129, 38, 91, 0, '29.46%', 10637.7, 12463.7, 82.46, 96.62, 495, 894, 0, '35.64%', '-6.18%', 46.0, 83.0, -8.0]
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