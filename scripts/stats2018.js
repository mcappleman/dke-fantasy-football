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
    ['Matt', 13, 8, 5, 0, 1367.8, 1239.4, 105.22, 95.34, 88, 55, 0, '61.54%', 8.00, 5.00, 0.00],
    ['Sam', 13, 8, 5, 0, 1377, 1139.14, 105.92, 87.63, 86, 57, 0, '60.14%', 7.82, 5.18, 0.18],
    ['Majors', 13, 10, 3, 0, 1390.1, 1230.32, 106.93, 94.64, 82, 61, 0, '57.34%', 7.45, 5.55, 2.55],
    ['Trevor', 13, 6, 7, 0, 1315.92, 1411.44, 101.22, 108.57, 81, 62, 0, '56.64%', 7.36, 5.64, -1.36],
    ['Sawyer', 13, 6, 7, 0, 1224.56, 1311.36, 94.20, 100.87, 68, 75, 0, '47.55%', 6.18, 6.82, -0.18],
    ['Jared', 13, 5, 8, 0, 1187.84, 1277.82, 91.37, 98.29, 64, 79, 0, '44.76%', 5.82, 7.18, -0.82],
    ['Ean', 13, 3, 10, 0, 1222.72, 1401.32, 94.06, 107.79, 64, 79, 0, '44.76%', 5.82, 7.18, -2.82],
    ['Hunter', 13, 8, 5, 0, 1200.44, 1240.38, 92.34, 95.41, 60, 83, 0, '41.96%', 5.45, 7.55, 2.55],
    ['Willis', 13, 4, 9, 0, 1186.4, 1323.1, 91.26, 101.78, 57, 86, 0, '39.86%', 5.18, 7.82, -1.18],
    ['Ross', 13, 3, 10, 0, 1173, 1350.18, 90.23, 103.86, 57, 86, 0, '39.86%', 5.18, 7.82, -2.18],
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
    [9, 'Sam', 88.82, 'Hunter', 51.36, 140.18],
    [13, 'Majors', 74.22, 'Hunter', 66.5, 140.72],
    [4, 'Hunter', 81.18, 'Chaz', 70.68, 151.86]
];
