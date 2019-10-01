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
    ['Basil', 4, 1, 3, 0, 289.16, 386.92, 72.29, 96.73, 9, 35, 0, '20.45%', 0.82, 3.18, '0.18'],
    ['Matt', 4, 2, 2, 0, 374.18, 353.82, 93.55, 88.46, 19, 25, 0, '43.18%', 1.73, 2.27, '0.27'],
    ['Majors', 4, 2, 2, 0, 420.98, 416.9, 105.25, 104.23, 32, 12, 0, '72.73%', 2.91, 1.09, '-0.91'],
    ['Trevor', 4, 2, 2, 0, 392.2, 389.1, 98.05, 97.28, 24, 20, 0, '54.55%', 2.18, 1.82, '-0.18'],
    ['Sam', 4, 2, 2, 0, 392.92, 399.36, 98.23, 99.84, 24, 20, 0, '54.55%', 2.18, 1.82, '-0.18'],
    ['Hunter', 4, 2, 2, 0, 396.58, 413.42, 99.15, 103.36, 20, 24, 0, '45.45%', 1.82, 2.18, '0.18'],
    ['Ross', 4, 1, 3, 0, 387.56, 411.92, 96.89, 102.98, 20, 24, 0, '45.45%', 1.82, 2.18, '-0.82'],
    ['Sawyer', 4, 2, 2, 0, 377.9, 331.16, 94.48, 82.79, 22, 22, 0, '50.00%', 2.00, 2.00, '0.00'],
    ['Ean', 4, 2, 2, 0, 377.34, 381.08, 94.34, 95.27, 21, 23, 0, '47.73%', 1.91, 2.09, '0.09'],
    ['Jared', 4, 1, 3, 0, 321.56, 385.16, 80.39, 96.29, 13, 31, 0, '29.55%', 1.18, 2.82, '-0.18'],
    ['Willis', 4, 4, 0, 0, 456.4, 357.12, 114.10, 89.28, 34, 10, 0, '77.27%', 3.09, 0.91, '0.91'],
    ['Chaz', 4, 3, 1, 0, 393.46, 354.28, 98.37, 88.57, 26, 18, 0, '59.09%', 2.36, 1.64, '0.64']
];

var highScores2019 = [
    ['Willis', 3, 140.56, 'Jared'],
    ['Matt', 3, 127.44, 'Basil'],
    ['Hunter', 3, 124.64, 'Ross'],
    ['Majors', 1, 122.62, 'Trevor'],
    ['Ross', 3, 116.60, 'Hunter']
];


var lowScores2019 = [
    ['Basil', 4, 33.5, 'Sawyer'],
    ['Jared', 1, 56.64, 'Basil'],
    ['Sawyer', 2, 65.82, 'Chaz'],
    ['Matt', 1, 67.96, 'Ross'],
    ['Jared', 4, 74.48, 'Ean']
];

var blowouts2019 = [
    [4, 'Sawyer', 105.34, 'Basil', 33.50, 71.84],
    [3, 'Willis', 140.56, 'Jared', 78.22, 62.34],
    [3, 'Matt', 127.44, 'Basil', 82.54, 44.9],
    [2, 'Jared', 112.22, 'Ross', 74.9, 37.32],
    [2, 'Chaz', 100.82, 'Sawyer', 65.82, 35]
];

var closeGames2019 = [
    [2, 'Hunter', 90.4, 'Matt', 89.26, 1.14],
    [4, 'Matt', 89.52, 'Sam', 87.00, 2.52],
    [1, 'Sam', 112.12, 'Sawyer', 109.5, 2.62],
    [1, 'Willis', 107.26, 'Hunter', 104.34, 2.92],
    [2, 'Ean', 103.16, 'Majors', 98.74, 4.42]
];

var highest2019 = [
    [3, 'Hunter', 124.64, 'Ross', 116.60, 241.24],
    [1, 'Majors', 122.62, 'Trevor', 107.72, 230.34],
    [1, 'Sam', 112.12, 'Sawyer', 109.5, 221.62],
    [3, 'Willis', 140.56, 'Jared', 78.22, 218.78],
    [1, 'Chaz', 110.62, 'Ean', 101.02, 211.64]
];

var dumpster2019 = [
    [1, 'Basil', 81.26, 'Jared', 56.64, 137.9],
    [4, 'Sawyer', 105.34, 'Basil', 33.50, 138.84],
    [1, 'Ross', 93.88, 'Matt', 67.96, 161.84],
    [4, 'Ean', 88.44, 'Jared', 74.48, 162.92],
    [2, 'Chaz', 100.82, 'Sawyer', 65.82, 166.64]
];
