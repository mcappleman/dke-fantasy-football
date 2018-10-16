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
    ['Matt', 6, 4, 2, 0, 669.08, 547.9, 111.51, 91.32, 47, 19, 0, '71.21%', 4.27, 1.73, -0.27],
    ['Majors', 6, 4, 2, 0, 678.66, 622.64, 113.11, 103.77, 41, 25, 0, '62.12%', 3.73, 2.27, 0.27],
    ['Sawyer', 6, 2, 4, 0, 553.02, 638.54, 92.17, 106.42, 28, 38, 0, '42.42%', 2.55, 3.45, -0.55],
    ['Basil', 6, 6, 0, 0, 724.1, 486.68, 120.68, 81.11, 54, 12, 0, '81.82%', 4.91, 1.09, 1.09],
    ['Jared', 6, 3, 3, 0, 566.8, 650.68, 94.47, 108.45, 34, 32, 0, '51.52%', 3.09, 2.91, -0.09],
    ['Chaz', 6, 4, 2, 0, 509.8, 497.6, 84.97, 82.93, 21, 45, 0, '31.82%', 1.91, 4.09, 2.09],
    ['Ean', 6, 1, 5, 0, 598.38, 636.9, 99.73, 106.15, 35, 31, 0, '53.03%', 3.18, 2.82, -2.18],
    ['Trevor', 6, 3, 3, 0, 583.6, 645.72, 97.27, 107.62, 34, 32, 0, '51.52%', 3.09, 2.91, -0.09],
    ['Sam', 6, 3, 3, 0, 582.08, 537.06, 97.01, 89.51, 34, 32, 0, '51.52%', 3.09, 2.91, -0.09],
    ['Hunter', 6, 5, 1, 0, 576, 495.22, 96.00, 82.54, 34, 32, 0, '51.52%', 3.09, 2.91, 1.91],
    ['Ross', 6, 0, 6, 0, 506.66, 645.38, 84.44, 107.56, 19, 47, 0, '28.79%', 1.73, 4.27, -1.73],
    ['Willis', 6, 1, 5, 0, 489.92, 633.78, 81.65, 105.63, 15, 51, 0, '22.73%', 1.36, 4.64, -0.36]
];

var highScores2018 = [
    ['Majors', 4, 176.56, 'Jared'],
    ['Basil', 6, 162.9, 'Trevor'],
    ['Matt', 1, 131.7, 'Sam'],
    ['Basil', 4, 131.62, 'Sawyer'],
    ['Willis', 4, 129.2, 'Ean']
];


var lowScores2018 = [
    ['Willis', 3, 59.76, 'Sawyer'],
    ['Ross', 5, 61.94, 'Basil'],
    ['Willis', 6, 62.44, 'Sam'],
    ['Jared', 6, 62.56, 'Hunter'],
    ['Hunter', 3, 63.38, 'Hunter']
];

var blowouts2018 = [
    [4, 'Majors', 176.56, 'Jared', 104.58, 71.98],
    [5, 'Basil', 125.58, 'Ross', 61.94, 63.64],
    [6, 'Basil', 162.9, 'Trevor', 101.38, 61.52],
    [4, 'Basil', 131.62, 'Sawyer', 77.78, 53.84],
    [6, 'Hunter', 113, 'Jared', 62.56, 50.44]
];

var closeGames2018 = [
    [3, 'Trevor', 95.86, 'Ross', 94.22, 1.64],
    [4, 'Trevor', 114.46, 'Matt', 111.9, 2.56],
    [5, 'Jared', 96.02, 'Trevor', 92.72, 3.3],
    [1, 'Ean', 102.36, 'Basil', 106.04, 3.68],
    [4, 'Sam', 82.76, 'Ross', 76, 6.76]
];

var highest2018 = [
    [4, 'Majors', 176.56, 'Jared', 104.58, 281.14],
    [6, 'Basil', 162.9, 'Trevor', 101.38, 264.28],
    [1, 'Matt', 131.7, 'Sam', 118.48, 250.18],
    [4, 'Willis', 129.2, 'Ean', 120.2, 249.4],
    [6, 'Majors', 124.44, 'Ross', 102.92, 227.36]
];

var dumpster2018 = [
    [4, 'Hunter', 81.18, 'Chaz', 70.68, 151.86],
    [3, 'Sawyer', 95.74, 'Willis', 59.76, 155.5],
    [4, 'Sam', 82.76, 'Ross', 76, 158.76],
    [3, 'Basil', 98.6, 'Hunter', 63.38, 161.98],
    [5, 'Chaz', 96.02, 'Willis', 78.34, 164.36]
];
