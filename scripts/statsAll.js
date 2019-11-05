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
    ['Majors', 131, 80, 51, 0, '61.07%', 12926.06, 12038.28, 98.67, 91.90, 804, 595, 0, '57.47%', '3.60%', 75.3, 55.7, 4.7],
    ['Basil', 102, 59, 42, 1, '57.84%', 9948.54, 9341.74, 97.53, 91.59, 637, 474, 1, '57.33%', '0.51%', 58.5, 43.5, 0.5],
    ['Willis', 133, 75, 58, 0, '56.39%', 12711.08, 12235.36, 95.57, 92.00, 783, 630, 0, '55.41%', '0.98%', 73.7, 59.3, 1.3],
    ['Matt', 131, 77, 54, 0, '58.78%', 12629.64, 11895.18, 96.41, 90.80, 768, 631, 0, '54.90%', '3.88%', 71.9, 59.1, 5.1],
    ['Hunter', 117, 68, 48, 1, '58.12%', 11077.56, 10876.16, 94.68, 92.96, 686, 585, 2, '53.97%', '4.15%', 63.1, 53.9, 4.9],
    ['Sam', 132, 63, 69, 0, '47.73%', 12379.14, 11806.92, 93.78, 89.45, 714, 692, 0, '50.78%', '-3.06%', 67.0, 65.0, -4.0],
    ['Trevor', 117, 54, 63, 0, '46.15%', 10884.04, 11241.68, 93.03, 96.08, 629, 612, 0, '50.68%', '-4.53%', 59.3, 57.7, -5.3],
    ['Ross', 102, 48, 54, 0, '47.06%', 9551.2, 9547.46, 93.64, 93.60, 548, 564, 0, '49.28%', '-2.22%', 50.3, 51.7, -2.3],
    ['Sawyer', 134, 68, 66, 0, '50.75%', 12316.54, 12301.64, 91.91, 91.80, 683, 737, 0, '48.10%', '2.65%', 64.5, 69.5, 3.5],
    ['Chaz', 99, 47, 52, 0, '47.47%', 8954.12, 8961.04, 90.45, 90.52, 507, 584, 0, '46.47%', '1.00%', 46.0, 53.0, 1.0],
    ['Ean', 130, 48, 82, 0, '36.92%', 11404.28, 12374.76, 87.73, 95.19, 582, 809, 1, '41.85%', '-4.92%', 54.4, 75.6, -6.4],
    ['Jared', 127, 38, 89, 0, '29.92%', 10515.36, 12291.9, 82.80, 96.79, 494, 873, 0, '36.14%', '-6.22%', 45.9, 81.1, -7.9]
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