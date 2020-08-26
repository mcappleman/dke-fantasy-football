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
    ['Majors', 15, 12, 3, 0, 1555.42, 1311.66, 103.69, 87.44, 111, 50, 0, '68.94%', 10.34, 4.66, 1.66],
    ['Ross', 16, 8, 8, 0, 1604.08, 1564.64, 100.26, 97.79, 104, 64, 0, '61.90%', 9.90, 6.10, -1.90],
    ['Sam', 16, 10, 6, 0, 1627.86, 1478.4, 101.74, 92.40, 102, 66, 0, '60.71%', 9.71, 6.29, 0.29],
    ['Matt', 15, 11, 4, 0, 1490.26, 1311.26, 99.35, 87.42, 95, 66, 0, '59.01%', 8.85, 6.15, 2.15],
    ['Willis', 15, 9, 6, 0, 1468.48, 1371.52, 97.90, 91.43, 88, 73, 0, '54.66%', 8.20, 6.80, 0.80],
    ['Trevor', 15, 7, 8, 0, 1476.2, 1463.94, 98.41, 97.60, 91, 70, 0, '56.52%', 8.48, 6.52, -1.48],
    ['Ean', 15, 7, 8, 0, 1394.14, 1405.28, 92.94, 93.69, 78, 83, 0, '48.45%', 7.27, 7.73, -0.27],
    ['Hunter', 15, 6, 9, 0, 1398.24, 1536.56, 93.22, 102.44, 76, 85, 0, '47.20%', 7.08, 7.92, -1.08],
    ['Chaz', 15, 5, 10, 0, 1343.06, 1440.62, 89.54, 96.04, 71, 90, 0, '44.10%', 6.61, 8.39, -1.61],
    ['Basil', 16, 7, 9, 0, 1390.54, 1527.76, 86.91, 95.49, 62, 106, 0, '36.90%', 5.90, 10.10, 1.10],
    ['Sawyer', 15, 5, 10, 0, 1282.62, 1338.78, 85.51, 89.25, 54, 107, 0, '33.54%', 5.03, 9.97, -0.03],
    ['Jared', 16, 5, 11, 0, 1276.7, 1557.18, 79.79, 97.32, 48, 120, 0, '28.57%', 4.57, 11.43, 0.43]
];

var highScores2019 = [
    ['Ross', 8, 143.3, 'Sam'],
    ['Basil', 5, 142.32, 'Ross'],
    ['Willis', 3, 140.56, 'Jared'],
    ['Basil', 16, 134.84, 'Hunter'],
    ['Ross', 5, 133.12, 'Basil']
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
    [16, 'Basil', 134.84, 'Hunter', 84.66, 50.18]
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
