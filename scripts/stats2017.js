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
    ['Majors', 12, 9, 3, 0, 1228.54, 1046.76, 102.38, 87.23, 96, 36, 0, '72.73%', 8.73, 3.27, 0.27],
    ['Trevor', 12, 9, 3, 0, 1166.44, 990.76, 97.20, 82.56, 88, 44, 0, '66.67%', 8.00, 4.00, 1.00],
    ['Matt', 12, 6, 6, 0, 1095.52, 1055.7, 91.29, 87.98, 73, 59, 0, '55.30%', 6.64, 5.36, -0.64],
    ['Sam', 12, 6, 6, 0, 1082.32, 1022.24, 90.19, 85.19, 73, 59, 0, '55.30%', 6.64, 5.36, -0.64],
    ['Basil', 12, 6, 5, 1, 1081.56, 1072.26, 90.13, 89.36, 72, 59, 1, '54.92%', 6.59, 5.41, -0.59],
    ['Willis', 12, 7, 5, 0, 1064.22, 1018.38, 88.69, 84.87, 70, 62, 0, '53.03%', 6.36, 5.64, 0.64],
    ['Chaz', 12, 5, 7, 0, 1038.86, 1044.24, 86.57, 87.02, 67, 65, 0, '50.76%', 6.09, 5.91, -1.09],
    ['Hunter', 12, 7, 4, 1, 1036.24, 1066.9, 86.35, 88.91, 63, 68, 1, '48.11%', 5.77, 6.23, 1.23],
    ['Ean', 12, 5, 7, 0, 982.8, 1071.66, 81.90, 89.31, 56, 76, 0, '42.42%', 5.09, 6.91, -0.09],
    ['Sawyer', 12, 6, 6, 0, 961.8, 953.1, 80.15, 79.43, 50, 82, 0, '37.88%', 4.55, 7.45, 1.45],
    ['Ross', 12, 3, 9, 0, 941.4, 1122.26, 78.45, 93.52, 46, 86, 0, '34.85%', 4.18, 7.82, -1.18],
    ['Jared', 12, 2, 10, 0, 856.7, 1072.14, 71.39, 89.35, 37, 95, 0, '28.03%', 3.36, 8.64, -1.36]
];

var highScores2017 = [
    ['Matt', 9, 131.52, 'Hunter'],
    ['Majors', 7, 127.52, 'Willis'],
    ['Sam', 3, 121.82, 'Ean'],
    ['Chaz', 8, 119.66, 'Basil'],
    ['Trevor', 8, 118.78, 'Sawyer']
];


var lowScores2017 = [
    ['Jared', 8, 41.72, 'Willis'],
    ['Sawyer', 9, 50.28, 'Basil'],
    ['Jared', 11, 51, 'Matt'],
    ['Sawyer', 11, 52.22, 'Ean'],
    ['Ross', 10, 53.32, 'Sam']
];

var blowouts2017 = [
    [10, 'Sam', 112.44, 'Ross', 53.32, 59.12],
    [5, 'Trevor', 112.14, 'Hunter', 55.18, 56.96],
    [9, 'Matt', 131.52, 'Hunter', 74.92, 56.6],
    [4, 'Trevor', 107.78, 'Willis', 55.22, 52.56],
    [7, 'Basil', 106.02, 'Trevor', 56.62, 49.4]
];

var closeGames2017 = [
    [1, 'Sawyer', 58.64, 'Ean', 57.72, .92],
    [9, 'Sam', 105.8, 'Majors', 103.88, 1.92],
    [3, 'Matt', 82.22, 'Chaz', 80.1, 2.12],
    [7, 'Ean', 77.08, 'Matt', 74.58, 2.5],
    [1, 'Matt', 84.16, 'Sam', 81.58, 2.58]
];

var highest2017 = [
    [7, 'Majors', 127.52, 'Willis', 112.7, 240.22],
    [11, 'Hunter', 120.4, 'Basil', 116.12, 236.52],
    [11, 'Majors', 121.38, 'Ross', 109.62, 231],
    [3, 'Sam', 121.82, 'Ean', 104.92, 226.74],
    [6, 'Trevor', 110.7, 'Ean', 103.82, 214.52]
];

var dumpster2017 = [
    [9, 'Basil', 60.56, 'Sawyer', 50.28, 110.84],
    [1, 'Sawyer', 58.64, 'Ean', 57.72, 116.36],
    [1, 'Majors', 64.1, 'Ross', 54.92, 119.02],
    [8, 'Willis', 77.72, 'Jared', 41.72, 119.44],
    [8, 'Hunter', 65.76, 'Sam', 57.42, 123.18]
];
