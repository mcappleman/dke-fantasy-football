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
    ['Majors', 155, 95, 60, 0, '61.29%', 15300.86, 14302.84, 98.72, 92.28, 948, 703, 0, '57.42%', '3.87%', 89.0, 66.0, 6.0],
    ['Matt', 154, 93, 61, 0, '60.39%', 14990.18, 14059.4, 97.34, 91.29, 928, 716, 0, '56.45%', '3.94%', 86.9, 67.1, 6.1],
    ['Willis', 156, 87, 69, 0, '55.77%', 14868.2, 14264.28, 95.31, 91.44, 892, 766, 0, '53.80%', '1.97%', 83.9, 72.1, 3.1],
    ['Hunter', 140, 78, 61, 1, '55.71%', 13251.82, 13133.24, 94.66, 93.81, 816, 700, 2, '53.82%', '1.89%', 75.3, 64.7, 2.7],
    ['Sawyer', 157, 75, 82, 0, '47.77%', 14327.56, 14494.9, 91.26, 92.32, 780, 885, 0, '46.85%', '0.92%', 73.5, 83.5, 1.5],
    ['Basil', 126, 72, 53, 1, '57.14%', 12251.66, 11590, 97.24, 91.98, 758, 605, 1, '55.61%', '1.53%', 70.1, 55.9, 1.9],
    ['Sam', 156, 72, 84, 0, '46.15%', 14377.02, 14055.3, 92.16, 90.10, 794, 864, 0, '47.89%', '-1.74%', 74.7, 81.3, -2.7],
    ['Trevor', 141, 67, 74, 0, '47.52%', 13238.86, 13448.9, 93.89, 95.38, 772, 721, 0, '51.71%', '-4.19%', 72.9, 68.1, -5.9],
    ['Ean', 153, 63, 90, 0, '41.18%', 13820.64, 14592.88, 90.33, 95.38, 750, 886, 1, '45.85%', '-4.67%', 70.1, 82.9, -7.1],
    ['Ross', 126, 59, 67, 0, '46.83%', 11797.94, 11894.74, 93.63, 94.40, 673, 691, 0, '49.34%', '-2.51%', 62.2, 63.8, -3.2],
    ['Chaz', 123, 58, 65, 0, '47.15%', 11302.18, 11285.04, 91.89, 91.75, 647, 696, 0, '48.18%', '-1.02%', 59.3, 63.7, -1.3],
    ['Jared', 152, 48, 104, 0, '31.58%', 12594.4, 14614.36, 82.86, 96.15, 575, 1051, 0, '35.36%', '-3.78%', 53.8, 98.2, -5.8]
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