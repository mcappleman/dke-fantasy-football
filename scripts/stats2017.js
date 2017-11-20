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
    ['Majors', 10, 7, 3, 0, 993.18, 867.22, 99.32, 86.72, 75, 35, 0, '68.18%', 6.82, 3.18, 0.18],
    ['Trevor', 10, 7, 3, 0, 943.98, 852.28, 94.40, 85.23, 71, 39, 0, '64.55%', 6.45, 3.55, 0.55],
    ['Matt', 10, 5, 5, 0, 920.56, 892.74, 92.06, 89.27, 65, 45, 0, '59.09%', 5.91, 4.09, -0.91],
    ['Sam', 10, 5, 5, 0, 901.28, 836.12, 90.13, 83.61, 63, 47, 0, '57.27%', 5.73, 4.27, -0.73],
    ['Basil', 10, 5, 4, 1, 871.96, 879.4, 87.20, 87.94, 57, 52, 1, '52.27%', 5.23, 4.77, -0.23],
    ['Willis', 10, 6, 4, 0, 866.46, 817.92, 86.65, 81.79, 56, 54, 0, '50.91%', 5.09, 4.91, 0.91],
    ['Chaz', 10, 4, 6, 0, 836.98, 855.2, 83.70, 85.52, 55, 55, 0, '50.00%', 5.00, 5.00, -1.00],
    ['Ean', 10, 4, 6, 0, 835.18, 905.46, 83.52, 90.55, 53, 57, 0, '48.18%', 4.82, 5.18, -0.82],
    ['Sawyer', 10, 6, 4, 0, 826.02, 772.92, 82.60, 77.29, 46, 64, 0, '41.82%', 4.18, 5.82, 1.82],
    ['Hunter', 10, 5, 4, 1, 812.6, 857.9, 81.26, 85.79, 45, 64, 1, '41.36%', 4.14, 5.86, 0.86],
    ['Ross', 10, 3, 7, 0, 771.86, 880.98, 77.19, 88.10, 38, 72, 0, '34.55%', 3.45, 6.55, -0.45],
    ['Jared', 10, 2, 8, 0, 733.24, 895.16, 73.32, 89.52, 35, 75, 0, '31.82%', 3.18, 6.82, -1.18]
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
