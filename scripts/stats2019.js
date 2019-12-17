$(document).ready(function () {

    $('#table2019').DataTable({
        order: [[2, "desc"]],
        searching: false,
        sDom: '',
        lengthMenu: [[-1], ["All"]],
        data: data2019,
        columns: yearColumnNames
    });

    $('#highScores2019').DataTable({
        order: [[2, "desc"]],
        sDom: '',
        data: highScores2019,
        columns: scoreColumnNames
    });

    $('#lowScores2019').DataTable({
        order: [[2, "asc"]],
        sDom: '',
        data: lowScores2019,
        columns: scoreColumnNames
    });

    $('#blowouts2019').DataTable({
        order: [[5, "desc"]],
        sDom: '',
        data: blowouts2019,
        columns: gameColumnNames
    });

    $('#closeGames2019').DataTable({
        order: [[5, "asc"]],
        sDom: '',
        data: closeGames2019,
        columns: gameColumnNames
    });

    $('#highest2019').DataTable({
        order: [[5, "desc"]],
        sDom: '',
        data: highest2019,
        columns: gameScoringColumnNames
    });

    $('#dumpster2019').DataTable({
        order: [[5, "asc"]],
        sDom: '',
        data: dumpster2019,
        columns: gameScoringColumnNames
    });

});

var data2019 = [
    ['Majors', 14, 11, 3, 0, 1463.36, 1222.7, 104.53, 87.34, 107, 47, 0, '69.48%', 9.73, 4.27, 1.27],
    ['Ross', 15, 8, 7, 0, 1543.24, 1471.74, 102.88, 98.12, 104, 57, 0, '64.60%', 9.69, 5.31, -1.69],
    ['Sam', 15, 10, 5, 0, 1538.9, 1386.34, 102.59, 92.42, 100, 61, 0, '62.11%', 9.32, 5.68, 0.68],
    ['Matt', 14, 10, 4, 0, 1397.36, 1250.42, 99.81, 89.32, 90, 64, 0, '58.44%', 8.18, 5.82, 1.82],
    ['Willis', 15, 9, 6, 0, 1468.48, 1371.52, 97.90, 91.43, 88, 73, 0, '54.66%', 8.20, 6.80, 0.80],
    ['Trevor', 14, 6, 8, 0, 1367.38, 1374.12, 97.67, 98.15, 85, 69, 0, '55.19%', 7.73, 6.27, -1.73],
    ['Ean', 15, 7, 8, 0, 1394.14, 1405.28, 92.94, 93.69, 78, 83, 0, '48.45%', 7.27, 7.73, -0.27],
    ['Hunter', 14, 6, 8, 0, 1313.58, 1401.72, 93.83, 100.12, 75, 79, 0, '48.70%', 6.82, 7.18, -0.82],
    ['Chaz', 15, 5, 10, 0, 1343.06, 1440.62, 89.54, 96.04, 71, 90, 0, '44.10%', 6.61, 8.39, -1.61],
    ['Basil', 15, 6, 9, 0, 1255.7, 1443.1, 83.71, 96.21, 55, 106, 0, '34.16%', 5.12, 9.88, 0.88],
    ['Sawyer', 15, 5, 10, 0, 1282.62, 1338.78, 85.51, 89.25, 54, 107, 0, '33.54%', 5.03, 9.97, -0.03],
    ['Jared', 15, 5, 10, 0, 1186.88, 1448.36, 79.13, 96.56, 45, 116, 0, '27.95%', 4.19, 10.81, 0.81]
];

var highScores2019 = [
    ['Ross', 8, 143.3, 'Sam'],
    ['Basil', 5, 142.32, 'Ross'],
    ['Willis', 3, 140.56, 'Jared'],
    ['Ross', 5, 133.12, 'Basil'],
    ['Trevor', 15, 132.48, 'Basil']
];


var lowScores2019 = [
    ['Basil', 4, 33.5, 'Sawyer'],
    ['Jared', 9, 49.36, 'Sam'],
    ['Jared', 10, 53.92, 'Trevor'],
    ['Jared', 1, 56.64, 'Basil'],
    ['Chaz', 9, 58.16, 'Basil']
];

var blowouts2019 = [
    [9, 'Sam', 126.64, 'Jared', 49.36, 77.28],
    [4, 'Sawyer', 105.34, 'Basil', 33.50, 71.84],
    [3, 'Willis', 140.56, 'Jared', 78.22, 62.34],
    [15, 'Trevor', 132.48, 'Basil', 79.00, 53.48],
    [9, 'Basil', 107.18, 'Chaz', 58.16, 49.02]
];

var closeGames2019 = [
    [12, 'Basil', 85.22, 'Willis', 84.94, 0.28],
    [2, 'Hunter', 90.4, 'Matt', 89.26, 1.14],
    [13, 'Jared', 80.16, 'Willis', 78.78, 1.38],
    [4, 'Matt', 89.52, 'Sam', 87.00, 2.52],
    [1, 'Sam', 112.12, 'Sawyer', 109.5, 2.62]
];

var highest2019 = [
    [5, 'Basil', 142.32, 'Ross', 133.12, 275.44],
    [8, 'Ross', 143.30, 'Sam', 103.26, 246.56],
    [3, 'Hunter', 124.64, 'Ross', 116.60, 241.24],
    [8, 'Matt', 129.44, 'Ean', 104.70, 234.14],
    [1, 'Majors', 122.62, 'Trevor', 107.72, 230.34]
];

var dumpster2019 = [
    [1, 'Basil', 81.26, 'Jared', 56.64, 137.9],
    [4, 'Sawyer', 105.34, 'Basil', 33.50, 138.84],
    [6, 'Matt', 82.58, 'Jared', 58.72, 141.30],
    [7, 'Hunter', 77.74, 'Basil', 63.76, 141.50],
    [10, 'Trevor', 92.12, 'Jared', 53.92, 146.04]
];
