$(document).ready(function () {

    $('#table2014').DataTable({
        order: [[2, "desc"]],
        searching: false,
        sDom: '',
        lengthMenu: [[-1], ["All"]],
        data: data2014,
        columns: yearColumnNames
    });

    $('#highScores2014').DataTable({
        order: [[2, "desc"]],
        sDom: '',
        data: highScores2014,
        columns: scoreColumnNames
    });

    $('#lowScores2014').DataTable({
        order: [[2, "asc"]],
        sDom: '',
        data: lowScores2014,
        columns: scoreColumnNames
    });

    $('#blowouts2014').DataTable({
        order: [[5, "desc"]],
        sDom: '',
        data: blowouts2014,
        columns: gameColumnNames
    });

    $('#closeGames2014').DataTable({
        order: [[5, "asc"]],
        sDom: '',
        data: closeGames2014,
        columns: gameColumnNames
    });

    $('#highest2014').DataTable({
        order: [[5, "desc"]],
        sDom: '',
        data: highest2014,
        columns: gameScoringColumnNames
    });

    $('#dumpster2014').DataTable({
        order: [[5, "asc"]],
        sDom: '',
        data: dumpster2014,
        columns: gameScoringColumnNames
    });

});

var data2014 = [
    ['Hunter', 15, 12, 3, 0, 1597.8, 1418.42, 106.52, 94.56, 123, 38, 0, '76.40%', 11.46, 3.54, 0.54],
    ['CJ', 15, 10, 5, 0, 1411.4, 1392.18, 94.09, 92.81, 88, 73, 0, '54.66%', 8.20, 6.80, 1.80],
    ['Sawyer', 16, 10, 6, 0, 1628.58, 1543.76, 101.79, 96.49, 114, 54, 0, '67.86%', 10.86, 5.14, -0.86],
    ['Ross', 15, 9, 6, 0, 1503.3, 1323.32, 100.22, 88.22, 86, 75, 0, '53.42%', 8.01, 6.99, 0.99],
    ['Majors', 15, 8, 7, 0, 1604, 1453.34, 106.93, 96.89, 110, 51, 0, '68.32%', 10.25, 4.75, -2.25],
    ['Sam', 15, 7, 8, 0, 1323, 1364.12, 88.20, 90.94, 68, 93, 0, '42.24%', 6.34, 8.66, 0.66],
    ['Matt', 15, 7, 8, 0, 1311.2, 1271.82, 87.41, 84.79, 70, 91, 0, '43.48%', 6.52, 8.48, 0.48],
    ['Basil', 16, 7, 9, 0, 1515.7, 1500.48, 94.73, 93.78, 88, 80, 0, '52.38%', 8.38, 7.62, -1.38],
    ['Willis', 16, 7, 9, 0, 1555.4, 1630.18, 97.21, 101.89, 94, 74, 0, '55.95%', 8.95, 7.05, -1.95],
    ['Chaz', 15, 6, 9, 0, 1240.68, 1328.4, 82.71, 88.56, 52, 109, 0, '32.30%', 4.84, 10.16, 1.16],
    ['Jared', 16, 6, 10, 0, 1327.6, 1532.02, 82.98, 95.75, 56, 112, 0, '33.33%', 5.33, 10.67, 0.67],
    ['Ean', 15, 3, 12, 0, 1090.84, 1351.46, 72.72, 90.10, 31, 130, 0, '19.25%', 2.89, 12.11, 0.11]
];

var highScores2014 = [
    ['Ross', 5, 160.06, 'CJ'],
    ['Willis', 8, 159.44, 'Majors'],
    ['Ross', 12, 150.2, 'Willis'],
    ['Majors', 4, 146.14, 'Jared'],
    ['Majors', 8, 143.86, 'Willis']
];

var lowScores2014 = [
    ['Ean', 6, 50, 'Willis'],
    ['Chaz', 7, 51.42, 'CJ'],
    ['Jared', 16, 52.24, 'Matt'],
    ['Matt', 6, 55.02, 'Basil'],
    ['Ean', 15, 57.72, 'Chaz']
];

var blowouts2014 = [
    [10, 'Ross', 141.62, 'Jared', 76.68, 64.94],
    [6, 'Basil', 119.16, 'Matt', 55.02, 64.14],
    [5, 'Ross', 160.06, 'CJ', 97.68, 62.38],
    [4, 'Majors', 146.14, 'Jared', 85.08, 61.06],
    [13, 'Matt', 123.72, 'Basil', 64.02, 59.7]
];

var closeGames2014 = [
    [7, 'Sam', 85.82, 'Willis', 85.58, .24],
    [8, 'Sawyer', 106.66, 'Ean', 106.3, .36],
    [6, 'Majors', 85.84, 'Ross', 85.14, .7],
    [4, 'Hunter', 86.74, 'Sam', 85.88, .86],
    [11, 'Chaz', 82.38, 'Matt', 80.9, 1.48]
];

var highest2014 = [
    [8, 'Willis', 159.44, 'Majors', 143.86, 303.3],
    [14, 'Willis', 136.08, 'Majors', 129.18, 265.26],
    [5, 'Ross', 160.06, 'CJ', 97.68, 257.74],
    [12, 'Ross', 150.2, 'Willis', 98.72, 248.92],
    [1, 'Hunter', 136.56, 'CJ', 102.8, 239.36]
];

var dumpster2014 = [
    [16, 'Matt', 67.42, 'Jared', 52.24, 119.66],
    [11, 'Ross', 61.8, 'Ean', 58.62, 120.42],
    [7, 'CJ', 74.26, 'Chaz', 51.42, 125.68],
    [5, 'Chaz', 69.64, 'Sam', 58.4, 128.04],
    [15, 'Chaz', 77.2, 'Ean', 57.72, 134.92]
];
