$(document).ready(function () {

    $('#table2016').DataTable({
        order: [[2, "desc"]],
        searching: false,
        sDom: '',
        lengthMenu: [[-1], ["All"]],
        data: data2016,
        columns: yearColumnNames
    });

    $('#highScores2016').DataTable({
        order: [[2, "desc"]],
        sDom: '',
        data: highScores2016,
        columns: scoreColumnNames
    });

    $('#lowScores2016').DataTable({
        order: [[2, "asc"]],
        sDom: '',
        data: lowScores2016,
        columns: scoreColumnNames
    });

    $('#blowouts2016').DataTable({
        order: [[5, "desc"]],
        sDom: '',
        data: blowouts2016,
        columns: gameColumnNames
    });

    $('#closeGames2016').DataTable({
        order: [[5, "asc"]],
        sDom: '',
        data: closeGames2016,
        columns: gameColumnNames
    });

    $('#highest2016').DataTable({
        order: [[5, "desc"]],
        sDom: '',
        data: highest2016,
        columns: gameScoringColumnNames
    });

    $('#dumpster2016').DataTable({
        order: [[5, "asc"]],
        sDom: '',
        data: dumpster2016,
        columns: gameScoringColumnNames
    });

});

var data2016 = [
    ['Majors', 15, 10, 5, 0, 1317.34, 1209.34, 87.82, 80.62, 63, 98, 0, 5.73, 8.91, 4.27],
    ['Willis', 15, 9, 6, 0, 1317.58, 1310.62, 87.84, 87.37, 74, 87, 0, 6.73, 7.91, 2.27],
    ['Ross', 16, 10, 6, 0, 1584.58, 1483.32, 99.04, 92.71, 92, 76, 0, 8.36, 6.91, 1.64],
    ['Matt', 15, 8, 7, 0, 1347.42, 1341.32, 89.83, 89.42, 74, 87, 0, 6.73, 7.91, 1.27],
    ['Sam', 15, 8, 7, 0, 1415.16, 1353.58, 94.34, 90.24, 81, 80, 0, 7.36, 7.27, 0.64],
    ['Basil', 15, 11, 4, 0, 1682.8, 1421.68, 112.19, 94.78, 122, 39, 0, 11.09, 3.55, -0.09],
    ['Hunter', 16, 8, 8, 0, 1518.98, 1527.84, 94.94, 95.49, 89, 79, 0, 8.09, 7.18, -0.09],
    ['Sawyer', 16, 6, 10, 0, 1410.18, 1545.6, 88.14, 96.60, 68, 100, 0, 6.18, 9.09, -0.18],
    ['Jared', 15, 4, 11, 0, 1231.6, 1445.32, 82.11, 96.35, 56, 105, 0, 5.09, 9.55, -1.09],
    ['Chaz', 15, 8, 7, 0, 1552.02, 1431.52, 103.47, 95.43, 102, 59, 0, 9.27, 5.36, -1.27],
    ['Ean', 15, 5, 10, 0, 1353.44, 1495.18, 90.23, 99.68, 76, 85, 0, 6.91, 7.73, -1.91],
    ['Trevor', 16, 5, 11, 0, 1466.1, 1631.88, 91.63, 101.99, 83, 85, 0, 7.55, 7.73, -2.55]
];

var highScores2016 = [
    ['Ross', 3, 181.38, 'Ean'],
    ['Basil', 16, 149.88, 'Hunter'],
    ['Basil', 3, 145.8, 'Trevor'],
    ['Chaz', 15, 135.5, 'Trevor'],
    ['Sam', 9, 134.84, 'Chaz']
];


var lowScores2016 = [
    ['Majors', 13, 51.98, 'Jared'],
    ['Sawyer', 7, 56.46, 'Majors'],
    ['Ross', 6, 58.06, 'Basil'],
    ['Ean', 6, 58.82, 'Chaz'],
    ['Jared', 15, 58.92, 'Ean']
];

var blowouts2016 = [
    [3, 'Ross', 181.38, 'Ean', 99.38, 82],
    [6, 'Chaz', 129.08, 'Ean', 58.82, 69.26],
    [12, 'Sam', 131.14, 'Jared', 66.74, 64.64],
    [10, 'Ross', 132.22, 'Sam', 71.64, 60.58],
    [1, 'Chaz', 112.4, 'Ross', 62, 50.4]
];

var closeGames2016 = [
    [10, 'Willis', 75.36, 'Matt', 75.08, .28],
    [13, 'Willis', 68.96, 'Hunter', 67.64, 1.32],
    [15, 'Ross', 97.94, 'Basil', 96.38, 1.56],
    [14, 'Ross', 76.1, 'Willis', 74.12, 1.98],
    [13, 'Matt', 86.16, 'Trevor', 83.98, 2.58]
];

var highest2016 = [
    [3, 'Ross', 181.38, 'Ean', 99.38, 280.76],
    [16, 'Basil', 149.88, 'Hunter', 106.26, 256.14],
    [3, 'Basil', 145.8, 'Trevor', 96.9, 242.7],
    [15, 'Chaz', 137.5, 'Trevor', 102.34, 239.84],
    [12, 'Trevor', 121.26, 'Basil', 111.32, 232.58]
];

var dumpster2016 = [
    [7, 'Majors', 69.7, 'Sawyer', 56.46, 126.16],
    [13, 'Willis', 68.96, 'Hunter', 67.64, 136.6],
    [13, 'Jared', 87.4, 'Majors', 51.98, 139.38],
    [12, 'Willis', 78.5, 'Majors', 61.24, 139.74],
    [11, 'Ross', 75.08, 'Trevor', 67.3, 142.38]
];
