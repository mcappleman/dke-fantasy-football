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
    ['Majors', 14, 11, 3, 0, 1480.96, 1278.48, 105.78, 91.32, 116, 38, 0, '75.32%', 10.55, 3.45, '0.45'], 
    ['Trevor', 15, 10, 5, 0, 1496.3, 1315.6, 99.75, 87.71, 112, 49, 0, '69.57%', 10.43, 4.57, '-0.43'], 
    ['Matt', 14, 8, 6, 0, 1365.14, 1210.2, 97.51, 86.44, 93, 61, 0, '60.39%', 8.45, 5.55, '-0.45'], 
    ['Sam', 15, 7, 8, 0, 1340.48, 1319.26, 89.37, 87.95, 85, 76, 0, '52.80%', 7.92, 7.08, '-0.92'], 
    ['Basil', 15, 8, 6, 1, 1338.12, 1330.32, 89.21, 88.69, 85, 75, 1, '53.11%', 7.97, 7.03, '0.03'], 
    ['Willis', 15, 7, 8, 0, 1307.98, 1282.56, 87.20, 85.50, 81, 80, 0, '50.31%', 7.55, 7.45, '-0.55'], 
    ['Hunter', 14, 9, 4, 1, 1232.1, 1217.18, 88.01, 86.94, 77, 76, 1, '50.32%', 7.05, 6.95, '1.95'], 
    ['Chaz', 15, 6, 9, 0, 1301.5, 1340.7, 86.77, 89.38, 80, 81, 0, '49.69%', 7.45, 7.55, '-1.45'], 
    ['Ean', 14, 6, 8, 0, 1172.02, 1245.76, 83.72, 88.98, 65, 89, 0, '42.21%', 5.91, 8.09, '0.09'], 
    ['Sawyer', 15, 8, 7, 0, 1192.26, 1187.2, 79.48, 79.15, 57, 104, 0, '35.40%', 5.31, 9.69, '2.69'], 
    ['Ross', 15, 5, 10, 0, 1203.2, 1414.8, 80.21, 94.32, 60, 101, 0, '37.27%', 5.59, 9.41, '-0.59'], 
    ['Jared', 15, 2, 13, 0, 1082.44, 1370.44, 72.16, 91.36, 40, 121, 0, '24.84%', 3.73, 11.27, '-1.73']
];

var highScores2017 = [
    ['Matt', 15, 149.18, 'Ross'],
    ['Majors', 13, 145.34, 'Trevor'],
    ['Matt', 9, 131.52, 'Hunter'],
    ['Majors', 7, 127.52, 'Willis'],
    ['Trevor', 13, 127.44, 'Majors']
];


var lowScores2017 = [
    ['Jared', 8, 41.72, 'Willis'],
    ['Sawyer', 9, 50.28, 'Basil'],
    ['Jared', 11, 51, 'Matt'],
    ['Sawyer', 11, 52.22, 'Ean'],
    ['Ross', 10, 53.32, 'Sam']
];

var blowouts2017 = [
    [15, 'Matt', 149.18, 'Ross', 80.08, 69.1],
    [12, 'Trevor', 119.9, 'Ross', 59.92, 59.98],
    [10, 'Sam', 112.44, 'Ross', 53.32, 59.12],
    [5, 'Trevor', 112.14, 'Hunter', 55.18, 56.96],
    [9, 'Matt', 131.52, 'Hunter', 74.92, 56.6]
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
    [15, 'Matt', 149.18, 'Ross', 80.08, 229.26]
];

var dumpster2017 = [
    [9, 'Basil', 60.56, 'Sawyer', 50.28, 110.84],
    [1, 'Sawyer', 58.64, 'Ean', 57.72, 116.36],
    [1, 'Majors', 64.1, 'Ross', 54.92, 119.02],
    [8, 'Willis', 77.72, 'Jared', 41.72, 119.44],
    [8, 'Hunter', 65.76, 'Sam', 57.42, 123.18]
];
