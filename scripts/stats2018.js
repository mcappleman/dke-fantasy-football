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
    ['Basil', 13, 11, 2, 0, 1483.94, 1149.36, 114.15, 88.41, 105, 38, 0, '73.43%', 9.55, 3.45, 1.45],
    ['Matt', 14, 9, 5, 0, 1470.22, 1325.84, 105.02, 94.70, 93, 57, 0, '62.00%', 8.68, 5.32, 0.32],
    ['Sam', 14, 8, 6, 0, 1454.88, 1255.52, 103.92, 89.68, 88, 62, 0, '58.67%', 8.21, 5.79, -0.21],
    ['Majors', 13, 10, 3, 0, 1390.1, 1230.32, 106.93, 94.64, 82, 61, 0, '57.34%', 7.45, 5.55, 2.55],
    ['Trevor', 14, 7, 7, 0, 1432.3, 1489.32, 102.31, 106.38, 87, 63, 0, '58.00%', 8.12, 5.88, -1.12],
    ['Sawyer', 13, 6, 7, 0, 1224.56, 1311.36, 94.20, 100.87, 68, 75, 0, '47.55%', 6.18, 6.82, -0.18],
    ['Jared', 14, 5, 9, 0, 1283.68, 1404.94, 91.69, 100.35, 68, 82, 0, '45.33%', 6.35, 7.65, -1.35],
    ['Ean', 14, 3, 11, 0, 1285.62, 1476.12, 91.83, 105.44, 64, 86, 0, '42.67%', 5.97, 8.03, -2.97],
    ['Hunter', 14, 8, 6, 0, 1286.88, 1342.8, 91.92, 95.91, 63, 87, 0, '42.00%', 5.88, 8.12, 2.12],
    ['Willis', 14, 5, 9, 0, 1261.2, 1386, 90.09, 99.00, 58, 92, 0, '38.67%', 5.41, 8.59, -0.41],
    ['Ross', 14, 4, 10, 0, 1300.12, 1446.02, 92.87, 103.29, 64, 86, 0, '42.67%', 5.97, 8.03, -1.97],
    ['Chaz', 13, 6, 7, 0, 1117.5, 1173.4, 85.96, 90.26, 46, 97, 0, '32.17%', 4.18, 8.82, 1.82]
];

var highScores2018 = [
    ['Majors', 4, 176.56, 'Jared'],
    ['Basil', 6, 162.9, 'Trevor'],
    ['Basil', 11, 142.78, 'Ean'],
    ['Ross', 12, 139.94, 'Hunter'],
    ['Sam', 11, 138.52, 'Matt']
];


var lowScores2018 = [
    ['Hunter', 9, 51.36, 'Sam'],
    ['Jared', 11, 54.82, 'Chaz'],
    ['Willis', 3, 59.76, 'Sawyer'],
    ['Jared', 8, 59.8, 'Willis'],
    ['Ean', 8, 60.38, 'Sam']
];

var blowouts2018 = [
    [8, 'Sam', 132.86, 'Ean', 60.38, 72.48],
    [4, 'Majors', 176.56, 'Jared', 104.58, 71.98],
    [11, 'Sam', 138.52, 'Matt', 73.72, 64.8],
    [5, 'Basil', 125.58, 'Ross', 61.94, 63.64],
    [10, 'Majors', 137.9, 'Ean', 74.52, 63.38]
];

var closeGames2018 = [
    [9, 'Sawyer', 89.98, 'Ean', 89.62, 0.36],
    [10, 'Hunter', 104.56, 'Willis', 104.02, 0.54],
    [13, 'Sawyer', 90.7, 'Willis', 91.28, 0.58],
    [7, 'Sawyer', 83.16, 'Jared', 81.66, 1.5],
    [3, 'Trevor', 95.86, 'Ross', 94.22, 1.64]
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
    [8, 'Willis', 71, 'Jared', 59.8, 130.8],
    [14, 'Willis', 74.8, 'Ean', 62.9, 137.7],
    [9, 'Sam', 88.82, 'Hunter', 51.36, 140.18],
    [13, 'Majors', 74.22, 'Hunter', 66.5, 140.72]
];
