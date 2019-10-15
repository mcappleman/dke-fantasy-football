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
    ['Basil', 6, 2, 4, 0, 506.54, 637.44, 84.42, 106.24, 22, 44, 0, '33.33%', 2.00, 4.00, 0.00],
    ['Matt', 6, 4, 2, 0, 576.82, 519.54, 96.14, 86.59, 31, 35, 0, '46.97%', 2.82, 3.18, 1.18],
    ['Majors', 6, 4, 2, 0, 624.5, 552.9, 104.08, 92.15, 44, 22, 0, '66.67%', 4.00, 2.00, 0.00],
    ['Trevor', 6, 3, 3, 0, 582.96, 596.42, 97.16, 99.40, 34, 32, 0, '51.52%', 3.09, 2.91, -0.09],
    ['Sam', 6, 4, 2, 0, 627.86, 560.26, 104.64, 93.38, 41, 25, 0, '62.12%', 3.73, 2.27, 0.27],
    ['Hunter', 6, 3, 3, 0, 596.4, 609.92, 99.40, 101.65, 32, 34, 0, '48.48%', 2.91, 3.09, 0.09],
    ['Ross', 6, 1, 5, 0, 604.3, 676.38, 100.72, 112.73, 35, 31, 0, '53.03%', 3.18, 2.82, -2.18],
    ['Sawyer', 6, 2, 4, 0, 539.98, 537.26, 90.00, 89.54, 28, 38, 0, '42.42%', 2.55, 3.45, -0.55],
    ['Ean', 6, 4, 2, 0, 591.86, 544.02, 98.64, 90.67, 34, 32, 0, '51.52%', 3.09, 2.91, 0.91],
    ['Jared', 6, 1, 5, 0, 477.98, 588.46, 79.66, 98.08, 16, 50, 0, '24.24%', 1.45, 4.55, -0.45],
    ['Willis', 6, 5, 1, 0, 685.54, 560.8, 114.26, 93.47, 50, 16, 0, '75.76%', 4.55, 1.45, 0.45],
    ['Chaz', 6, 3, 3, 0, 544.82, 576.16, 90.80, 96.03, 29, 37, 0, '43.94%', 2.64, 3.36, 0.36]
];

var highScores2019 = [
    ['Basil', 5, 142.32, 'Ross'],
    ['Willis', 3, 140.56, 'Jared'],
    ['Ross', 5, 133.12, 'Basil'],
    ['Matt', 3, 127.44, 'Basil'],
    ['Hunter', 3, 124.64, 'Ross']
];


var lowScores2019 = [
    ['Basil', 4, 33.5, 'Sawyer'],
    ['Jared', 1, 56.64, 'Basil'],
    ['Jared', 6, 58.72, 'Matt'],
    ['Chaz', 6, 65.52, 'Majors'],
    ['Sawyer', 2, 65.82, 'Chaz']
];

var blowouts2019 = [
    [4, 'Sawyer', 105.34, 'Basil', 33.50, 71.84],
    [3, 'Willis', 140.56, 'Jared', 78.22, 62.34],
    [3, 'Matt', 127.44, 'Basil', 82.54, 44.9],
    [6, 'Sam', 117.40, 'Basil', 75.06, 42.34],
    [6, 'Majors', 104.34, 'Chaz', 65.52, 38.82]
];

var closeGames2019 = [
    [2, 'Hunter', 90.4, 'Matt', 89.26, 1.14],
    [4, 'Matt', 89.52, 'Sam', 87.00, 2.52],
    [1, 'Sam', 112.12, 'Sawyer', 109.5, 2.62],
    [1, 'Willis', 107.26, 'Hunter', 104.34, 2.92],
    [2, 'Ean', 103.16, 'Majors', 98.74, 4.42]
];

var highest2019 = [
    [5, 'Basil', 142.32, 'Ross', 133.12, 275.44],
    [3, 'Hunter', 124.64, 'Ross', 116.60, 241.24],
    [1, 'Majors', 122.62, 'Trevor', 107.72, 230.34],
    [5, 'Matt', 120.06, 'Willis', 107.00, 227.06],
    [1, 'Sam', 112.12, 'Sawyer', 109.5, 221.62]
];

var dumpster2019 = [
    [1, 'Basil', 81.26, 'Jared', 56.64, 137.9],
    [4, 'Sawyer', 105.34, 'Basil', 33.50, 138.84],
    [6, 'Matt', 82.58, 'Jared', 58.72, 23.86],
    [1, 'Ross', 93.88, 'Matt', 67.96, 161.84],
    [4, 'Ean', 88.44, 'Jared', 74.48, 162.92]
];
