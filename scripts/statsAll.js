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
        lengthMenu: [[10], ["All"]],
        data: highScores,
        columns: scoreColumnNamesAll
    });

    $('#lowScores').DataTable({
        order: [[3, "asc"]],
        sDom: '',
        lengthMenu: [[10], ["All"]],
        data: lowScores,
        columns: scoreColumnNamesAll
    });

    $('#blowouts').DataTable({
        order: [[6, "desc"]],
        sDom: '',
        lengthMenu: [[10], ["All"]],
        data: blowouts,
        columns: gameColumnNamesAll
    });

    $('#closeGames').DataTable({
        order: [[6, "asc"]],
        sDom: '',
        lengthMenu: [[10], ["All"]],
        data: closeGames,
        columns: gameColumnNamesAll
    });

    $('#highest').DataTable({
        order: [[6, "desc"]],
        sDom: '',
        lengthMenu: [[10], ["All"]],
        data: highest,
        columns: gameScoringColumnNamesAll
    });

    $('#dumpster').DataTable({
        order: [[6, "asc"]],
        sDom: '',
        lengthMenu: [[10], ["All"]],
        data: dumpster,
        columns: gameScoringColumnNamesAll
    });

    $('#fortunate').DataTable({
        order: [[6, "asc"]],
        sDom: '',
        lengthMenu: [[10], ["All"]],
        data: fortunate,
        columns: fortunateColumnNamesAll
    });

    $('#unfortunate').DataTable({
        order: [[6, "desc"]],
        sDom: '',
        lengthMenu: [[10], ["All"]],
        data: unfortunate,
        columns: fortunateColumnNamesAll
    });

});

var dataSet = [
    ['Majors', 163, 100, 63, 0, '61.35%', 16145.28, 14933.6, 99.05, 91.62, 1000, 738, 1, '57.53%', '3.82%', 93.8, 69.2, 6.2],
    ['Matt', 162, 99, 63, 0, '61.11%', 15775.2, 14772.4, 97.38, 91.19, 979, 753, 0, '56.52%', '4.59%', 91.6, 70.4, 7.4],
    ['Willis', 164, 91, 73, 0, '55.49%', 15546.16, 15020, 94.79, 91.59, 933, 812, 1, '53.47%', '2.02%', 87.7, 76.3, 3.3],
    ['Hunter', 148, 83, 64, 1, '56.08%', 14058.32, 13909.38, 94.99, 93.98, 866, 738, 2, '53.99%', '2.10%', 79.9, 68.1, 3.1],
    ['Sawyer', 165, 82, 83, 0, '49.70%', 15157.02, 15175.28, 91.86, 91.97, 841, 912, 0, '47.97%', '1.72%', 79.2, 85.8, 2.8],
    ['Basil', 134, 77, 56, 1, '57.46%', 13046.26, 12375.12, 97.36, 92.35, 805, 645, 2, '55.51%', '1.95%', 74.4, 59.6, 2.6],
    ['Sam', 164, 77, 87, 0, '46.95%', 15230.76, 14843.48, 92.87, 90.51, 857, 889, 0, '49.08%', '-2.13%', 80.5, 83.5, -3.5],
    ['Trevor', 149, 70, 79, 0, '46.98%', 13949.72, 14204.26, 93.62, 95.33, 812, 769, 0, '51.36%', '-4.38%', 76.5, 72.5, -6.5],
    ['Ean', 161, 65, 96, 0, '40.37%', 14511.62, 15362.1, 90.13, 95.42, 781, 943, 1, '45.30%', '-4.93%', 72.9, 88.1, -7.9],
    ['Chaz', 131, 61, 70, 0, '46.56%', 12048.74, 12098.84, 91.98, 92.36, 687, 744, 0, '48.01%', '-1.44%', 62.9, 68.1, -1.9],
    ['Ross', 134, 60, 74, 0, '44.78%', 12460.58, 12690.56, 92.99, 94.71, 703, 748, 1, '48.45%', '-3.67%', 64.9, 69.1, -4.9],
    ['Jared', 160, 50, 110, 0, '31.25%', 13225.76, 15384.96, 82.66, 96.16, 595, 1119, 0, '34.71%', '-3.46%', 55.5, 104.5, -5.5],
];

var highScores = [];
var lowScores = [];
var blowouts = [];
var closeGames = [];
var highest = [];
var dumpster = [];
var fortunate = [];
var unfortunate = [];

// 2011
highScores = combineArrays(highScores, highScores2011, 2011);
lowScores = combineArrays(lowScores, lowScores2011, 2011);
blowouts = combineArrays(blowouts, blowouts2011, 2011);
closeGames = combineArrays(closeGames, closeGames2011, 2011);
highest = combineArrays(highest, highest2011, 2011);
dumpster = combineArrays(dumpster, dumpster2011, 2011);
fortunate = combineArrays(fortunate, fortunate2011, 2011);
unfortunate = combineArrays(unfortunate, unfortunate2011, 2011);

// 2012
highScores = combineArrays(highScores, highScores2012, 2012);
lowScores = combineArrays(lowScores, lowScores2012, 2012);
blowouts = combineArrays(blowouts, blowouts2012, 2012);
closeGames = combineArrays(closeGames, closeGames2012, 2012);
highest = combineArrays(highest, highest2012, 2012);
dumpster = combineArrays(dumpster, dumpster2012, 2012);
fortunate = combineArrays(fortunate, fortunate2012, 2012);
unfortunate = combineArrays(unfortunate, unfortunate2012, 2012);

// 2013
highScores = combineArrays(highScores, highScores2013, 2013);
lowScores = combineArrays(lowScores, lowScores2013, 2013);
blowouts = combineArrays(blowouts, blowouts2013, 2013);
closeGames = combineArrays(closeGames, closeGames2013, 2013);
highest = combineArrays(highest, highest2013, 2013);
dumpster = combineArrays(dumpster, dumpster2013, 2013);
fortunate = combineArrays(fortunate, fortunate2013, 2013);
unfortunate = combineArrays(unfortunate, unfortunate2013, 2013);

// 2014
highScores = combineArrays(highScores, highScores2014, 2014);
lowScores = combineArrays(lowScores, lowScores2014, 2014);
blowouts = combineArrays(blowouts, blowouts2014, 2014);
closeGames = combineArrays(closeGames, closeGames2014, 2014);
highest = combineArrays(highest, highest2014, 2014);
dumpster = combineArrays(dumpster, dumpster2014, 2014);
fortunate = combineArrays(fortunate, fortunate2014, 2014);
unfortunate = combineArrays(unfortunate, unfortunate2014, 2014);

// 2015
highScores = combineArrays(highScores, highScores2015, 2015);
lowScores = combineArrays(lowScores, lowScores2015, 2015);
blowouts = combineArrays(blowouts, blowouts2015, 2015);
closeGames = combineArrays(closeGames, closeGames2015, 2015);
highest = combineArrays(highest, highest2015, 2015);
dumpster = combineArrays(dumpster, dumpster2015, 2015);
fortunate = combineArrays(fortunate, fortunate2015, 2015);
unfortunate = combineArrays(unfortunate, unfortunate2015, 2015);

// 2016
highScores = combineArrays(highScores, highScores2016, 2016);
lowScores = combineArrays(lowScores, lowScores2016, 2016);
blowouts = combineArrays(blowouts, blowouts2016, 2016);
closeGames = combineArrays(closeGames, closeGames2016, 2016);
highest = combineArrays(highest, highest2016, 2016);
dumpster = combineArrays(dumpster, dumpster2016, 2016);
fortunate = combineArrays(fortunate, fortunate2016, 2016);
unfortunate = combineArrays(unfortunate, unfortunate2016, 2016);

// 2017
highScores = combineArrays(highScores, highScores2017, 2017);
lowScores = combineArrays(lowScores, lowScores2017, 2017);
blowouts = combineArrays(blowouts, blowouts2017, 2017);
closeGames = combineArrays(closeGames, closeGames2017, 2017);
highest = combineArrays(highest, highest2017, 2017);
dumpster = combineArrays(dumpster, dumpster2017, 2017);
fortunate = combineArrays(fortunate, fortunate2017, 2017);
unfortunate = combineArrays(unfortunate, unfortunate2017, 2017);

// 2018
highScores = combineArrays(highScores, highScores2018, 2018);
lowScores = combineArrays(lowScores, lowScores2018, 2018);
blowouts = combineArrays(blowouts, blowouts2018, 2018);
closeGames = combineArrays(closeGames, closeGames2018, 2018);
highest = combineArrays(highest, highest2018, 2018);
dumpster = combineArrays(dumpster, dumpster2018, 2018);
fortunate = combineArrays(fortunate, fortunate2018, 2018);
unfortunate = combineArrays(unfortunate, unfortunate2018, 2018);

// 2019
highScores = combineArrays(highScores, highScores2019, 2019);
lowScores = combineArrays(lowScores, lowScores2019, 2019);
blowouts = combineArrays(blowouts, blowouts2019, 2019);
closeGames = combineArrays(closeGames, closeGames2019, 2019);
highest = combineArrays(highest, highest2019, 2019);
dumpster = combineArrays(dumpster, dumpster2019, 2019);
fortunate = combineArrays(fortunate, fortunate2019, 2019);
unfortunate = combineArrays(unfortunate, unfortunate2019, 2019);

// 2020
highScores = combineArrays(highScores, highScores2020, 2020);
lowScores = combineArrays(lowScores, lowScores2020, 2020);
blowouts = combineArrays(blowouts, blowouts2020, 2020);
closeGames = combineArrays(closeGames, closeGames2020, 2020);
highest = combineArrays(highest, highest2020, 2020);
dumpster = combineArrays(dumpster, dumpster2020, 2020);
fortunate = combineArrays(fortunate, fortunate2020, 2020);
unfortunate = combineArrays(unfortunate, unfortunate2020, 2020);

// 2021
highScores = combineArrays(highScores, highScores2021, 2021);
lowScores = combineArrays(lowScores, lowScores2021, 2021);
blowouts = combineArrays(blowouts, blowouts2021, 2021);
closeGames = combineArrays(closeGames, closeGames2021, 2021);
highest = combineArrays(highest, highest2021, 2021);
dumpster = combineArrays(dumpster, dumpster2021, 2021);
fortunate = combineArrays(fortunate, fortunate2021, 2021);
unfortunate = combineArrays(unfortunate, unfortunate2021, 2021);

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