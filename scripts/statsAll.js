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
    ['Basil', 98, 58, 39, 1, '59.18%', 9642.18, 8996.18, 98.39, 91.80, 625, 442, 1, '58.57%', '0.62%', 57.4, 40.6, 0.6],
    ['Majors', 127, 77, 50, 0, '60.63%', 12524.78, 11711.02, 98.62, 92.21, 777, 578, 0, '57.34%', '3.29%', 72.8, 54.2, 4.2],
    ['Hunter', 113, 67, 45, 1, '59.29%', 10758.02, 10492.46, 95.20, 92.85, 673, 554, 2, '54.84%', '4.45%', 62.0, 51.0, 5.0],
    ['Willis', 129, 72, 57, 0, '55.81%', 12323.06, 11868.46, 95.53, 92.00, 758, 611, 0, '55.37%', '0.45%', 71.4, 57.6, 0.6],
    ['Matt', 127, 73, 54, 0, '57.48%', 12206.98, 11553.66, 96.12, 90.97, 737, 618, 0, '54.39%', '3.09%', 69.1, 57.9, 3.9],
    ['Trevor', 113, 53, 60, 0, '46.90%', 10535.64, 10832.06, 93.24, 95.86, 611, 586, 0, '51.04%', '-4.14%', 57.7, 55.3, -4.7],
    ['Sam', 128, 60, 68, 0, '46.88%', 11933.52, 11475.04, 93.23, 89.65, 681, 681, 0, '50.00%', '-3.13%', 64.0, 64.0, -4.0],
    ['Sawyer', 130, 66, 64, 0, '50.77%', 11945.76, 11947.34, 91.89, 91.90, 662, 714, 0, '48.11%', '2.66%', 62.5, 67.5, 3.5],
    ['Ross', 98, 45, 53, 0, '45.92%', 9102.88, 9175.44, 92.89, 93.63, 513, 555, 0, '48.03%', '-2.12%', 47.1, 50.9, -2.1],
    ['Chaz', 95, 46, 49, 0, '48.42%', 8619.84, 8571.92, 90.74, 90.23, 491, 556, 0, '46.90%', '1.53%', 44.6, 50.4, 1.4],
    ['Ean', 126, 47, 79, 0, '37.30%', 11047.86, 11967.86, 87.68, 94.98, 562, 785, 1, '41.73%', '-4.43%', 52.6, 73.4, -5.6],
    ['Jared', 123, 37, 86, 0, '30.08%', 10223.48, 11887.12, 83.12, 96.64, 481, 842, 0, '36.36%', '-6.28%', 44.7, 78.3, -7.7]
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