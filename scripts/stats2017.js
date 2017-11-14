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
    ['Majors', 9, 6, 3, 0, 883.9, 778.66, 98.21, 86.52, 65, 34, 0, 5.91, 3.09, 0.09],
    ['Trevor', 9, 6, 3, 0, 845.32, 759.36, 93.92, 84.37, 63, 36, 0, 5.73, 3.27, 0.27],
    ['Matt', 9, 5, 4, 0, 827.64, 794.08, 91.96, 88.23, 58, 41, 0, 5.27, 3.73, -0.27],
    ['Chaz', 9, 4, 5, 0, 758.18, 762.96, 84.24, 84.77, 52, 47, 0, 4.73, 4.27, -0.73],
    ['Sam', 9, 4, 5, 0, 788.84, 782.8, 87.65, 86.98, 52, 47, 0, 4.73, 4.27, -0.73],
    ['Ean', 9, 4, 5, 0, 760.24, 806.52, 84.47, 89.61, 51, 48, 0, 4.64, 4.36, -0.64],
    ['Willis', 9, 5, 4, 0, 774.36, 745.06, 86.04, 82.78, 51, 48, 0, 4.64, 4.36, 0.36],
    ['Basil', 9, 4, 4, 1, 773.02, 804.46, 85.89, 89.38, 48, 50, 1, 4.41, 4.59, -0.41],
    ['Hunter', 9, 5, 3, 1, 739.74, 765.8, 82.19, 85.09, 44, 54, 1, 4.05, 4.95, 0.95],
    ['Sawyer', 9, 6, 3, 0, 737.46, 663.64, 81.94, 73.74, 42, 57, 0, 3.82, 5.18, 2.18],
    ['Ross', 9, 3, 6, 0, 718.54, 768.54, 79.84, 85.39, 38, 61, 0, 3.45, 5.55, -0.45],
    ['Jared', 9, 1, 8, 0, 641, 816.36, 71.22, 90.71, 29, 70, 0, 2.64, 6.36, -1.64]
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
    ['Ross', 10, 53.32, 'Sam'],
    ['Ross', 6, 53.54, 'Hunter'],
    ['Ross', 1, 54.92, 'Majors']
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
    [3, 'Sam', 121.82, 'Ean', 104.92, 226.74],
    [6, 'Trevor', 110.7, 'Ean', 103.82, 214.52],
    [8, 'Chaz', 119.66, 'Basil', 94.34, 214],
    [9, 'Sam', 105.8, 'Majors', 103.88, 209.68]
];

var dumpster2017 = [
    [9, 'Basil', 60.56, 'Sawyer', 50.28, 110.84],
    [1, 'Sawyer', 58.64, 'Ean', 57.72, 116.36],
    [1, 'Majors', 64.1, 'Ross', 54.92, 119.02],
    [8, 'Willis', 77.72, 'Jared', 41.72, 119.44],
    [8, 'Hunter', 65.76, 'Sam', 57.42, 123.18]
];
