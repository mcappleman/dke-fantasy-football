$(document).ready(function () {

    $('#table2015').DataTable({
        order: [[2, "desc"]],
        searching: false,
        sDom: '',
        lengthMenu: [[-1], ["All"]],
        data: data2015,
        columns: yearColumnNames
    });

    $('#highScores2015').DataTable({
        order: [[2, "desc"]],
        sDom: '',
        data: highScores2015,
        columns: scoreColumnNames
    });

    $('#lowScores2015').DataTable({
        order: [[2, "asc"]],
        sDom: '',
        data: lowScores2015,
        columns: scoreColumnNames
    });

    $('#blowouts2015').DataTable({
        order: [[5, "desc"]],
        sDom: '',
        data: blowouts2015,
        columns: gameColumnNames
    });

    $('#closeGames2015').DataTable({
        order: [[5, "asc"]],
        sDom: '',
        data: closeGames2015,
        columns: gameColumnNames
    });

    $('#highest2015').DataTable({
        order: [[5, "desc"]],
        sDom: '',
        data: highest2015,
        columns: gameScoringColumnNames
    });

    $('#dumpster2015').DataTable({
        order: [[5, "asc"]],
        sDom: '',
        data: dumpster2015,
        columns: gameScoringColumnNames
    });

});

var data2015 = [
    ['Willis', 16, 10, 6, 0, 1612.68, 1436.14, 100.79, 89.76, 100, 68, 0, '59.52%', 9.52, 6.48, 0.48],
    ['Jared', 15, 9, 6, 0, 1372.86, 1332.26, 91.52, 88.82, 82, 79, 0, '50.93%', 7.64, 7.36, 1.36],
    ['Majors', 15, 9, 6, 0, 1485.5, 1368.36, 99.03, 91.22, 89, 72, 0, '55.28%', 8.29, 6.71, 0.71],
    ['Hunter', 15, 9, 6, 0, 1485.84, 1303.64, 99.06, 86.91, 97, 64, 0, '60.25%', 9.04, 5.96, -0.04],
    ['Matt', 15, 9, 6, 0, 1514.06, 1482.64, 100.94, 98.84, 105, 56, 0, '65.22%', 9.78, 5.22, -0.78],
    ['Ross', 15, 8, 7, 0, 1419.12, 1332.74, 94.61, 88.85, 82, 79, 0, '50.93%', 7.64, 7.36, 0.36],
    ['CJ', 16, 8, 8, 0, 1466.8, 1469.24, 91.68, 91.83, 86, 82, 0, '51.19%', 8.19, 7.81, -0.19],
    ['Sam', 16, 8, 8, 0, 1539.62, 1439.82, 96.23, 89.99, 89, 79, 0, '52.98%', 8.48, 7.52, -0.48],
    ['Sawyer', 15, 7, 8, 0, 1359.46, 1419.6, 90.63, 94.64, 73, 88, 0, '45.34%', 6.80, 8.20, 0.20],
    ['Trevor', 15, 7, 8, 0, 1360.08, 1481.8, 90.67, 98.79, 82, 79, 0, '50.93%', 7.64, 7.36, -0.64],
    ['Basil', 16, 6, 10, 0, 1332.12, 1505.42, 83.26, 94.09, 52, 116, 0, '30.95%', 4.95, 11.05, 1.05],
    ['Ean', 15, 2, 13, 0, 1146.04, 1522.52, 76.40, 101.50, 43, 118, 0, '26.71%', 4.01, 10.99, -2.01]
];

var highScores2015 = [
    ['Majors', 13, 150.66, 'Sawyer'],
    ['Willis', 7, 149.8, 'Jared'],
    ['Matt', 1, 144.52, 'Sawyer'],
    ['Willis', 8, 146.16, 'Sam'],
    ['Ross', 8, 144, 'Ean']
];


var lowScores2015 = [
    ['Ean', 8, 37.18, 'Ross'],
    ['Ross', 12, 37.94, 'Jared'],
    ['Ean', 4, 47.22, 'Sawyer'],
    ['Sam', 11, 52.98, 'Jared'],
    ['Ean', 2, 53.24, 'Willis']
];

var blowouts2015 = [
    [8, 'Ross', 144, 'Ean', 37.18, 106.82],
    [12, 'Jared', 128.1, 'Ross', 37.94, 90.16],
    [7, 'Willis', 149.8, 'Jared', 76.8, 73],
    [1, 'Matt', 144.52, 'Sawyer', 77.1, 67.42],
    [13, 'Majors', 150.66, 'Sawyer', 86.24, 64.42]
];

var closeGames2015 = [
    [8, 'Majors', 94.58, 'Hunter', 93.74, .84],
    [13, 'Ross', 80.08, 'Willis', 79.24, .84],
    [2, 'Matt', 97.34, 'Majors', 96.06, 1.28],
    [8, 'CJ', 79.6, 'Jared', 78.1, 1.5],
    [3, 'Basil', 93.02, 'Majors', 91.18, 1.84]
];
var highest2015 = [
    [8, 'Willis', 146.16, 'Sam', 117.48, 263.64],
    [3, 'Matt', 131.42, 'Trevor', 127.06, 258.48],
    [15, 'Hunter', 127.74, 'Ross', 118.4, 246.14],
    [6, 'CJ', 130.38, 'Sam', 113.4, 243.78],
    [13, 'Basil', 143.06, 'Matt', 98.78, 241.84]
];

var dumpster2015 = [
    [4, 'Sawyer', 73.56, 'Ean', 47.22, 120.78],
    [2, 'Willis', 77.66, 'Ean', 53.24, 130.9],
    [7, 'Basil', 70.58, 'Sawyer', 62.18, 132.76],
    [11, 'Jared', 85.5, 'Sam', 52.98, 138.48],
    [11, 'Hunter', 77.1, 'Basil', 68.88, 145.98]
];

