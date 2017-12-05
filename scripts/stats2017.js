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
    ['Trevor', 13, 9, 4, 0, 1293.88, 1136.1, 99.53, 87.39, 98, 45, 0, '68.53%', 8.91, 4.09, 0.09],
    ['Matt', 13, 7, 6, 0, 1215.96, 1130.12, 93.54, 86.93, 82, 61, 0, '57.34%', 7.45, 5.55, -0.45],
    ['Sam', 13, 6, 7, 0, 1179.34, 1139.62, 90.72, 87.66, 79, 64, 0, '55.24%', 7.18, 5.82, -1.18],
    ['Basil', 13, 7, 5, 1, 1168.88, 1147.16, 89.91, 88.24, 77, 65, 1, '54.20%', 7.05, 5.95, -0.05],
    ['Willis', 13, 7, 6, 0, 1139.12, 1105.7, 87.62, 85.05, 73, 70, 0, '51.05%', 6.64, 6.36, 0.36],
    ['Chaz', 13, 5, 8, 0, 1113.28, 1164.68, 85.64, 89.59, 69, 74, 0, '48.25%', 6.27, 6.73, -1.27],
    ['Hunter', 13, 8, 4, 1, 1136.3, 1136.08, 87.41, 87.39, 70, 72, 1, '49.30%', 6.41, 6.59, 1.59],
    ['Ean', 13, 6, 7, 0, 1100.18, 1168.68, 84.63, 89.90, 64, 79, 0, '44.76%', 5.82, 7.18, 0.18],
    ['Sawyer', 13, 6, 7, 0, 1024.12, 1028.48, 78.78, 79.11, 50, 93, 0, '34.97%', 4.55, 8.45, 1.45],
    ['Ross', 13, 4, 9, 0, 1016.78, 1184.58, 78.21, 91.12, 50, 93, 0, '34.97%', 4.55, 8.45, -0.55],
    ['Jared', 13, 2, 11, 0, 925.88, 1172.2, 71.22, 90.17, 38, 105, 0, '26.57%', 3.45, 9.55, -1.45]
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
    [9, 'Sam', 105.8, 'Majors', 103.88, 1.92],
    [3, 'Matt', 82.22, 'Chaz', 80.1, 2.12],
    [7, 'Ean', 77.08, 'Matt', 74.58, 2.5],
    [1, 'Matt', 84.16, 'Sam', 81.58, 2.58]
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
