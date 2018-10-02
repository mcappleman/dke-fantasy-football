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
    ['Matt', 4, 2, 2, 0, 427.68, 390.08, 106.92, 97.52, 28, 16, 0, '63.64%', 2.55, 1.45, -0.55],
    ['Majors', 4, 3, 1, 0, 485.82, 403.62, 121.46, 100.91, 31, 13, 0, '70.45%', 2.82, 1.18, 0.18],
    ['Sawyer', 4, 2, 2, 0, 383.86, 396.66, 95.97, 99.17, 22, 22, 0, '50.00%', 2.00, 2.00, 0.00],
    ['Basil', 4, 4, 0, 0, 435.62, 323.36, 108.91, 80.84, 32, 12, 0, '72.73%', 2.91, 1.09, 1.09],
    ['Jared', 4, 2, 2, 0, 408.22, 444.96, 102.06, 111.24, 26, 18, 0, '59.09%', 2.36, 1.64, -0.36],
    ['Chaz', 4, 3, 1, 0, 358.72, 316.88, 89.68, 79.2, 15, 29, 0, '34.09%', 1.36, 2.64, 1.64],
    ['Ean', 4, 0, 4, 0, 405.74, 457.12, 101.44, 114.28, 25, 19, 0, '56.82%', 2.27, 1.73, -2.27],
    ['Trevor', 4, 3, 1, 0, 389.5, 386.8, 97.38, 96.70, 24, 20, 0, '54.55%', 2.18, 1.82, 0.82],
    ['Sam', 4, 1, 3, 0, 357.22, 394.88, 89.31, 98.72, 17, 27, 0, '38.64%', 1.55, 2.45, -0.55],
    ['Hunter', 4, 3, 1, 0, 348.28, 342.4, 87.07, 85.60, 18, 26, 0, '40.91%', 1.64, 2.36, 1.36],
    ['Ross', 4, 0, 4, 0, 341.8, 395.36, 85.45, 98.84, 13, 31, 0, '29.55%', 1.18, 2.82, -1.18],
    ['Willis', 4, 1, 3, 0, 349.14, 439.48, 87.29, 109.87, 13, 31, 0, '29.55%', 1.18, 2.82, -0.18]
];

var highScores2018 = [
    ['Majors', 4, 176.56, 'Jared'],
    ['Matt', 1, 131.7, 'Sam'],
    ['Basil', 4, 131.62, 'Sawyer'],
    ['Willis', 4, 129.2, 'Ean'],
    ['Sawyer', 2, 120.7, 'Majors']
];


var lowScores2018 = [
    ['Willis', 3, 59.76, 'Sawyer'],
    ['Hunter', 3, 63.38, 'Hunter'],
    ['Sam', 2, 68.86, 'Chaz'],
    ['Willis', 2, 68.96, 'Matt'],
    ['Chaz', 4, 70.68, 'Hunter']
];

var blowouts2018 = [
    [4, 'Majors', 176.56, 'Jared', 104.58, 71.98],
    [4, 'Basil', 131.62, 'Sawyer', 77.78, 53.84],
    [2, 'Matt', 106.88, 'Willis', 68.96, 37.92],
    [1, 'Jared', 108.16, 'Ross', 71.4, 36.76],
    [3, 'Sawyer', 95.74, 'Willis', 59.76, 35.98]
];

var closeGames2018 = [
    [3, 'Trevor', 95.86, 'Ross', 94.22, 1.64],
    [4, 'Trevor', 114.46, 'Matt', 111.9, 2.56],
    [1, 'Ean', 102.36, 'Basil', 106.04, 3.68],
    [4, 'Sam', 82.76, 'Ross', 76, 6.76],
    [3, 'Majors', 94.24, 'Sam', 87.12, 7.12]
];

var highest2018 = [
    [4, 'Majors', 176.56, 'Jared', 104.58, 281.14],
    [1, 'Matt', 131.7, 'Sam', 118.48, 250.18],
    [4, 'Willis', 129.2, 'Ean', 120.2, 249.4],
    [4, 'Trevor', 114.46, 'Matt', 111.9, 226.36],
    [2, 'Sawyer', 120.7, 'Majors', 98.36, 219.06]
];

var dumpster2018 = [
    [4, 'Hunter', 81.18, 'Chaz', 70.68, 151.86],
    [3, 'Sawyer', 95.74, 'Willis', 59.76, 155.5],
    [4, 'Sam', 82.76, 'Ross', 76, 158.76],
    [3, 'Basil', 98.6, 'Hunter', 63.38, 161.98],
    [3, 'Chaz', 88.18, 'Matt', 77.2, 165.38]
];
