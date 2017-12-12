$(document).ready(function () {

    $('#table2017').DataTable({
        order: [[2, "desc"]],
        searching: false,
        sDom: '',
        lengthMenu: [[-1], ["All"]],
        data: data2017,
        columns: yearColumnNames
    });

    $('#highScores2017').DataTable({
        order: [[2, "desc"]],
        sDom: '',
        data: highScores2017,
        columns: scoreColumnNames
    });

    $('#lowScores2017').DataTable({
        order: [[2, "asc"]],
        sDom: '',
        data: lowScores2017,
        columns: scoreColumnNames
    });

    $('#blowouts2017').DataTable({
        order: [[5, "desc"]],
        sDom: '',
        data: blowouts2017,
        columns: gameColumnNames
    });

    $('#closeGames2017').DataTable({
        order: [[5, "asc"]],
        sDom: '',
        data: closeGames2017,
        columns: gameColumnNames
    });

    $('#highest2017').DataTable({
        order: [[5, "desc"]],
        sDom: '',
        data: highest2017,
        columns: gameScoringColumnNames
    });

    $('#dumpster2017').DataTable({
        order: [[5, "asc"]],
        sDom: '',
        data: dumpster2017,
        columns: gameScoringColumnNames
    });

});

var data2017 = [
    ['Majors', 13, 10, 3, 0, 1373.88, 1174.2, 105.68, 90.32, 107, 36, 0, '74.83%', 9.73, 3.27, 0.27],
    ['Trevor', 14, 10, 4, 0, 1392.02, 1208.52, 99.43, 86.32, 104, 46, 0, '69.33%', 9.71, 4.29, 0.29],
    ['Matt', 13, 7, 6, 0, 1215.96, 1130.12, 93.54, 86.93, 82, 61, 0, '57.34%', 7.45, 5.55, -0.45],
    ['Sam', 14, 6, 8, 0, 1251.76, 1237.76, 89.41, 88.41, 79, 71, 0, '52.67%', 7.37, 6.63, -1.37],
    ['Basil', 14, 8, 5, 1, 1257.02, 1234.52, 89.79, 88.18, 81, 68, 1, '54.33%', 7.61, 6.39, 0.39],
    ['Willis', 14, 7, 7, 0, 1226.48, 1193.84, 87.61, 85.27, 76, 74, 0, '50.67%', 7.09, 6.91, -0.09],
    ['Hunter', 13, 8, 4, 1, 1136.3, 1136.08, 87.41, 87.39, 70, 72, 1, '49.30%', 6.41, 6.59, 1.59],
    ['Chaz', 14, 5, 9, 0, 1194.32, 1271.02, 85.31, 90.79, 70, 80, 0, '46.67%', 6.53, 7.47, -1.53],
    ['Ean', 13, 6, 7, 0, 1100.18, 1168.68, 84.63, 89.90, 64, 79, 0, '44.76%', 5.82, 7.18, 0.18],
    ['Sawyer', 14, 7, 7, 0, 1115.18, 1115.36, 79.66, 79.67, 55, 95, 0, '36.67%', 5.13, 8.87, 1.87],
    ['Ross', 14, 5, 9, 0, 1123.12, 1265.62, 80.22, 90.40, 57, 93, 0, '38.00%', 5.32, 8.68, -0.32],
    ['Jared', 14, 2, 12, 0, 1012.76, 1263.26, 72.34, 90.23, 40, 110, 0, '26.67%', 3.73, 10.27, -1.73]
];

var highScores2017 = [
    ['Majors', 13, 145.34, 'Trevor'],
    ['Matt', 9, 131.52, 'Hunter'],
    ['Majors', 7, 127.52, 'Willis'],
    ['Trevor', 13, 127.44, 'Majors'],
    ['Sam', 3, 121.82, 'Ean']
];


var lowScores2017 = [
    ['Jared', 8, 41.72, 'Willis'],
    ['Sawyer', 9, 50.28, 'Basil'],
    ['Jared', 11, 51, 'Matt'],
    ['Sawyer', 11, 52.22, 'Ean'],
    ['Ross', 10, 53.32, 'Sam']
];

var blowouts2017 = [
    [12, 'Trevor', 119.9, 'Ross', 59.92, 59.98],
    [10, 'Sam', 112.44, 'Ross', 53.32, 59.12],
    [5, 'Trevor', 112.14, 'Hunter', 55.18, 56.96],
    [9, 'Matt', 131.52, 'Hunter', 74.92, 56.6],
    [4, 'Trevor', 107.78, 'Willis', 55.22, 52.56]
];

var closeGames2017 = [
    [1, 'Sawyer', 58.64, 'Ean', 57.72, .92],
    [14, 'Basil', 88.14, 'Willis', 87.36, .78],
    [9, 'Sam', 105.8, 'Majors', 103.88, 1.92],
    [3, 'Matt', 82.22, 'Chaz', 80.1, 2.12],
    [7, 'Ean', 77.08, 'Matt', 74.58, 2.5]
];

var highest2017 = [
    [13, 'Majors', 145.34, 'Trevor', 127.44, 272.78],
    [7, 'Majors', 127.52, 'Willis', 112.7, 240.22],
    [11, 'Hunter', 120.4, 'Basil', 116.12, 236.52],
    [11, 'Majors', 121.38, 'Ross', 109.62, 231],
    [3, 'Sam', 121.82, 'Ean', 104.92, 226.74]
];

var dumpster2017 = [
    [9, 'Basil', 60.56, 'Sawyer', 50.28, 110.84],
    [1, 'Sawyer', 58.64, 'Ean', 57.72, 116.36],
    [1, 'Majors', 64.1, 'Ross', 54.92, 119.02],
    [8, 'Willis', 77.72, 'Jared', 41.72, 119.44],
    [8, 'Hunter', 65.76, 'Sam', 57.42, 123.18]
];
