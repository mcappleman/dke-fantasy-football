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
    ['Matt', 3, 2, 1, 0, 315.78, 275.62, 105.26, 91.87, 22, 11, 0, '66.67%', 2.00, 1.00, '0.00'],
    ['Majors', 3, 2, 1, 0, 309.26, 299.04, 103.09, 99.68, 20, 13, 0, '60.61%', 1.82, 1.18, '0.18'],
    ['Sawyer', 3, 2, 1, 0, 306.08, 265.04, 102.03, 88.35, 20, 13, 0, '60.61%', 1.82, 1.18, '0.18'],
    ['Chaz', 3, 3, 0, 0, 288.04, 235.7, 96.01, 78.57, 15, 18, 0, '45.45%', 1.36, 1.64, '1.64'],
    ['Basil', 3, 3, 0, 0, 304, 245.58, 101.33, 81.86, 22, 11, 0, '66.67%', 2.00, 1.00, '1.00'],
    ['Hunter', 3, 2, 1, 0, 267.1, 271.72, 89.03, 90.57, 15, 18, 0, '45.45%', 1.36, 1.64, '0.64'],
    ['Jared', 3, 2, 1, 0, 303.64, 268.4, 101.21, 89.47, 21, 12, 0, '63.64%', 1.91, 1.09, '0.09'],
    ['Ean', 3, 0, 3, 0, 285.54, 327.92, 95.18, 109.31, 17, 16, 0, '51.52%', 1.55, 1.45, '-1.55'],
    ['Sam', 3, 0, 3, 0, 274.46, 318.88, 91.49, 106.29, 13, 20, 0, '39.39%', 1.18, 1.82, '-1.18'],
    ['Trevor', 3, 2, 1, 0, 275.04, 274.9, 91.68, 91.63, 17, 16, 0, '51.52%', 1.55, 1.45, '0.45'],
    ['Ross', 3, 0, 3, 0, 265.8, 312.6, 88.60, 104.20, 12, 21, 0, '36.36%', 1.09, 1.91, '-1.09'],
    ['Willis', 3, 0, 3, 0, 219.94, 319.28, 73.31, 106.43, 4, 29, 0, '12.12%', 0.36, 2.64, '-0.36']
];

var highScores2018 = [
    ['Matt', 1, 131.7, 'Sam'],
    ['Sam', 1, 118.48, 'Matt'],
    ['Majors', 1, 116.66, 'Willis'],
    ['Jared', 1, 108.16, 'Ross'],
    ['Chaz', 1, 106.92, 'Sawyer']
];


var lowScores2018 = [
    ['Ross', 1, 71.4, 'Jared'],
    ['Trevor', 1, 72.94, 'Hunter'],
    ['Sawyer', 1, 89.64, 'Chaz'],
    ['Willis', 1, 91.22, 'Majors'],
    ['Hunter', 1, 95.14, 'Trevor']
];

var blowouts2018 = [
    [1, 'Jared', 108.16, 'Ross', 71.4, 36.76],
    [1, 'Majors', 116.66, 'Willis', 91.22, 25.44],
    [1, 'Hunter', 95.14, 'Trevor', 72.94, 22.2],
    [1, 'Chaz', 106.92, 'Sawyer', 89.64, 17.28],
    [1, 'Matt', 131.7, 'Sam', 118.48, 13.22]
];

var closeGames2018 = [
    [1, 'Ean', 102.36, 'Basil', 106.04, 3.68],
    [1, 'Matt', 131.7, 'Sam', 118.48, 13.22],
    [1, 'Chaz', 106.92, 'Sawyer', 89.64, 17.28],
    [1, 'Hunter', 95.14, 'Trevor', 72.94, 22.2],
    [1, 'Majors', 116.66, 'Willis', 91.22, 25.44]
];

var highest2018 = [
    [1, 'Matt', 131.7, 'Sam', 118.48, 250.18],
    [1, 'Ean', 102.36, 'Basil', 106.04, 208.4],
    [1, 'Majors', 116.66, 'Willis', 91.22, 207.88],
    [1, 'Chaz', 106.92, 'Sawyer', 89.64, 196.56],
    [1, 'Jared', 108.16, 'Ross', 71.4, 179.56]
];

var dumpster2018 = [
    [1, 'Hunter', 95.14, 'Trevor', 72.94, 168.08],
    [1, 'Jared', 108.16, 'Ross', 71.4, 179.56],
    [1, 'Chaz', 106.92, 'Sawyer', 89.64, 196.56],
    [1, 'Majors', 116.66, 'Willis', 91.22, 207.88],
    [1, 'Ean', 102.36, 'Basil', 106.04, 208.4]
];
