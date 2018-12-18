$(document).ready(function () {

    $('#table2018').DataTable({
        order: [[2, "desc"]],
        searching: false,
        sDom: '',
        lengthMenu: [[-1], ["All"]],
        data: data2018,
        columns: yearColumnNames
    });

    $('#highScores2018').DataTable({
        order: [[2, "desc"]],
        sDom: '',
        data: highScores2018,
        columns: scoreColumnNames
    });

    $('#lowScores2018').DataTable({
        order: [[2, "asc"]],
        sDom: '',
        data: lowScores2018,
        columns: scoreColumnNames
    });

    $('#blowouts2018').DataTable({
        order: [[5, "desc"]],
        sDom: '',
        data: blowouts2018,
        columns: gameColumnNames
    });

    $('#closeGames2018').DataTable({
        order: [[5, "asc"]],
        sDom: '',
        data: closeGames2018,
        columns: gameColumnNames
    });

    $('#highest2018').DataTable({
        order: [[5, "desc"]],
        sDom: '',
        data: highest2018,
        columns: gameScoringColumnNames
    });

    $('#dumpster2018').DataTable({
        order: [[5, "asc"]],
        sDom: '',
        data: dumpster2018,
        columns: gameScoringColumnNames
    });

});

var data2018 = [
    ['Basil', 14, 11, 3, 0, 1567.5, 1256.08, 111.96, 89.72, 113, 41, 0, '73.38%', 10.27, 3.73, 0.73],
    ['Majors', 14, 10, 4, 0, 1462.8, 1381.18, 104.49, 98.66, 86, 68, 0, '55.84%', 7.82, 6.18, 2.18],
    ['Matt', 15, 10, 5, 0, 1621.08, 1398.54, 108.07, 93.24, 104, 57, 0, '64.60%', 9.69, 5.31, 0.31],
    ['Sam', 15, 8, 7, 0, 1520.64, 1357.94, 101.38, 90.53, 91, 70, 0, '56.52%', 8.48, 6.52, -0.48],
    ['Hunter', 15, 9, 6, 0, 1389.3, 1408.56, 92.62, 93.90, 72, 89, 0, '44.72%', 6.71, 8.29, 2.29],
    ['Trevor', 15, 8, 7, 0, 1539.02, 1572.88, 102.60, 104.86, 97, 64, 0, '60.25%', 9.04, 5.96, -1.04],
    ['Sawyer', 14, 6, 8, 0, 1275.9, 1389.58, 91.14, 99.26, 68, 86, 0, '44.16%', 6.18, 7.82, -0.18],
    ['Chaz', 14, 6, 8, 0, 1195.28, 1256.26, 85.38, 89.73, 51, 103, 0, '33.12%', 4.64, 9.36, 1.36],
    ['Jared', 15, 5, 10, 0, 1346.94, 1469.66, 89.80, 97.98, 69, 92, 0, '42.86%', 6.43, 8.57, -1.43],
    ['Willis', 15, 6, 9, 0, 1344.06, 1463.78, 89.60, 97.59, 65, 96, 0, '40.37%', 6.06, 8.94, -0.06],
    ['Ross', 15, 5, 10, 0, 1378.34, 1497.36, 91.89, 99.82, 70, 91, 0, '43.48%', 6.52, 8.48, -1.52],
    ['Ean', 15, 4, 11, 0, 1350.34, 1539.38, 90.02, 102.63, 66, 95, 0, '40.99%', 6.15, 8.85, -2.15]
];

var highScores2018 = [
    ['Majors', 4, 176.56, 'Jared'],
    ['Basil', 6, 162.9, 'Trevor'],
    ['Matt', 15, 150.86, 'Majors'],
    ['Basil', 11, 142.78, 'Ean'],
    ['Ross', 12, 139.94, 'Hunter']
];


var lowScores2018 = [
    ['Sawyer', 15, 51.34, 'Ross'],
    ['Hunter', 9, 51.36, 'Sam'],
    ['Jared', 11, 54.82, 'Chaz'],
    ['Willis', 3, 59.76, 'Sawyer'],
    ['Jared', 8, 59.8, 'Willis']
];

var blowouts2018 = [
    [15, 'Matt', 150.86, 'Majors', 72.7, 78.16],
    [8, 'Sam', 132.86, 'Ean', 60.38, 72.48],
    [4, 'Majors', 176.56, 'Jared', 104.58, 71.98],
    [11, 'Sam', 138.52, 'Matt', 73.72, 64.8],
    [5, 'Basil', 125.58, 'Ross', 61.94, 63.64]
];

var closeGames2018 = [
    [9, 'Sawyer', 89.98, 'Ean', 89.62, 0.36],
    [10, 'Hunter', 104.56, 'Willis', 104.02, 0.54],
    [13, 'Sawyer', 90.7, 'Willis', 91.28, 0.58],
    [15, 'Ean', 64.72, 'Jared', 63.26, 1.46],
    [7, 'Sawyer', 83.16, 'Jared', 81.66, 1.5]
];

var highest2018 = [
    [4, 'Majors', 176.56, 'Jared', 104.58, 281.14],
    [6, 'Basil', 162.9, 'Trevor', 101.38, 264.28],
    [1, 'Matt', 131.7, 'Sam', 118.48, 250.18],
    [4, 'Willis', 129.2, 'Ean', 120.2, 249.4],
    [8, 'Hunter', 138.1, 'Sawyer', 109.06, 247.16]
];

var dumpster2018 = [
    [11, 'Chaz', 63.9, 'Jared', 54.82, 118.72],
    [15, 'Ean', 64.72, 'Jared', 63.26, 127.98],
    [15, 'Ross', 78.22, 'Sawyer', 51.34, 129.56],
    [8, 'Willis', 71, 'Jared', 59.8, 130.8],
    [14, 'Willis', 74.8, 'Ean', 62.9, 137.7]
];
