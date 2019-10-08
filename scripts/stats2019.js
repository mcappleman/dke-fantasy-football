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
    ['Basil', 5, 2, 3, 0, 431.48, 520.04, 86.30, 104.01, 20, 35, 0, '36.36%', 1.82, 3.18, 0.18],
    ['Matt', 5, 3, 2, 0, 494.24, 460.82, 98.85, 92.16, 27, 28, 0, '49.09%', 2.45, 2.55, 0.55],
    ['Majors', 5, 3, 2, 0, 520.16, 487.38, 104.03, 97.48, 36, 19, 0, '65.45%', 3.27, 1.73, -0.27],
    ['Trevor', 5, 2, 3, 0, 476.04, 504.82, 95.21, 100.96, 25, 30, 0, '45.45%', 2.27, 2.73, -0.27],
    ['Sam', 5, 3, 2, 0, 510.46, 485.2, 102.09, 97.04, 31, 24, 0, '56.36%', 2.82, 2.18, 0.18],
    ['Hunter', 5, 3, 2, 0, 517.3, 511.12, 103.46, 102.22, 29, 26, 0, '52.73%', 2.64, 2.36, 0.36],
    ['Ross', 5, 1, 4, 0, 520.68, 554.24, 104.14, 110.85, 30, 25, 0, '54.55%', 2.73, 2.27, -1.73],
    ['Sawyer', 5, 2, 3, 0, 448.38, 430.34, 89.68, 86.07, 22, 33, 0, '40.00%', 2.00, 3.00, 0.00],
    ['Ean', 5, 3, 2, 0, 493.06, 464.92, 98.61, 92.98, 27, 28, 0, '49.09%', 2.45, 2.55, 0.55],
    ['Jared', 5, 1, 4, 0, 419.26, 505.88, 83.85, 101.18, 16, 39, 0, '29.09%', 1.45, 3.55, -0.45],
    ['Willis', 5, 4, 1, 0, 563.4, 477.18, 112.68, 95.44, 39, 16, 0, '70.91%', 3.55, 1.45, 0.45],
    ['Chaz', 5, 3, 2, 0, 479.3, 471.82, 95.86, 94.36, 28, 27, 0, '50.91%', 2.55, 2.45, 0.45]
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
    ['Sawyer', 2, 65.82, 'Chaz'],
    ['Matt', 1, 67.96, 'Ross'],
    ['Sawyer', 5, 70.48, 'Majors']
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
    [5, 'Basil', 142.32, 'Ross', 133.12, 275.44],
    [3, 'Hunter', 124.64, 'Ross', 116.60, 241.24],
    [1, 'Majors', 122.62, 'Trevor', 107.72, 230.34],
    [5, 'Matt', 120.06, 'Willis', 107.00, 227.06],
    [1, 'Sam', 112.12, 'Sawyer', 109.5, 221.62]
];

var dumpster2019 = [
    [1, 'Basil', 81.26, 'Jared', 56.64, 137.9],
    [4, 'Sawyer', 105.34, 'Basil', 33.50, 138.84],
    [1, 'Ross', 93.88, 'Matt', 67.96, 161.84],
    [4, 'Ean', 88.44, 'Jared', 74.48, 162.92],
    [2, 'Chaz', 100.82, 'Sawyer', 65.82, 166.64]
];
