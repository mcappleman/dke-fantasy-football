$(document).ready(function () {

    $('#table2020').DataTable({
        order: [[2, "desc"]],
        searching: false,
        sDom: '',
        lengthMenu: [[-1], ["All"]],
        data: data2020,
        columns: yearColumnNames
    });

    $('#highScores2020').DataTable({
        order: [[2, "desc"]],
        sDom: '',
        data: highScores2020,
        columns: scoreColumnNames
    });

    $('#lowScores2020').DataTable({
        order: [[2, "asc"]],
        sDom: '',
        data: lowScores2020,
        columns: scoreColumnNames
    });

    $('#blowouts2020').DataTable({
        order: [[5, "desc"]],
        sDom: '',
        data: blowouts2020,
        columns: gameColumnNames
    });

    $('#closeGames2020').DataTable({
        order: [[5, "asc"]],
        sDom: '',
        data: closeGames2020,
        columns: gameColumnNames
    });

    $('#highest2020').DataTable({
        order: [[5, "desc"]],
        sDom: '',
        data: highest2020,
        columns: gameScoringColumnNames
    });

    $('#dumpster2020').DataTable({
        order: [[5, "asc"]],
        sDom: '',
        data: dumpster2020,
        columns: gameScoringColumnNames
    });

});

var data2020 = [
    ['Majors', 2, 0, 2, 0, 185.72, 221.08, 92.86, 110.54, 7, 15, 0, '31.82%', 0.64, 1.36, -0.64],
    ['Ross', 2, 0, 2, 0, 181.94, 219.58, 90.97, 109.79, 6, 16, 0, '27.27%', 0.55, 1.45, -0.55],
    ['Sam', 2, 0, 2, 0, 164.12, 218.88, 82.06, 109.44, 2, 20, 0, '9.09%', 0.18, 1.82, -0.18],
    ['Matt', 2, 2, 0, 0, 231.04, 177, 115.52, 88.50, 15, 7, 0, '68.18%', 1.36, 0.64, 0.64],
    ['Willis', 2, 1, 1, 0, 178.78, 202.6, 89.39, 101.30, 6, 16, 0, '27.27%', 0.55, 1.45, 0.45],
    ['Trevor', 2, 1, 1, 0, 198.86, 192.68, 99.43, 96.34, 10, 12, 0, '45.45%', 0.91, 1.09, 0.09],
    ['Ean', 2, 2, 0, 0, 251.84, 184.78, 125.92, 92.39, 20, 2, 0, '90.91%', 1.82, 0.18, 0.18],
    ['Hunter', 2, 1, 1, 0, 216.5, 217.24, 108.25, 108.62, 14, 8, 0, '63.64%', 1.27, 0.73, -0.27],
    ['Chaz', 2, 1, 1, 0, 229.12, 199.56, 114.56, 99.78, 16, 6, 0, '72.73%', 1.45, 0.55, -0.45],
    ['Basil', 2, 1, 1, 0, 196.32, 204.78, 98.16, 102.39, 10, 12, 0, '45.45%', 0.91, 1.09, 0.09],
    ['Sawyer', 2, 1, 1, 0, 201.76, 227.54, 100.88, 113.77, 12, 10, 0, '54.55%', 1.09, 0.91, -0.09],
    ['Jared', 2, 2, 0, 0, 209.28, 179.56, 104.64, 89.78, 14, 8, 0, '63.64%', 1.27, 0.73, 0.73]
];

var highScores2020 = [
    ['Matt', 2, 139.0, 'Hunter'],
    ['Chaz', 2, 132.72, 'Sawyer'],
    ['Ean', 2, 127.54, 'Ross'],
    ['Ean', 1, 124.3, 'Sam'],
    ['Basil', 2, 118.08, 'Majors']
];

var lowScores2020 = [
    ['Ross', 1, 74.38, 'Matt'],
    ['Sam', 1, 77.22, 'Ean'],
    ['Basil', 1, 78.24, 'Hunter'],
    ['Trevor', 2, 83.16, 'Jared'],
    ['Willis', 1, 84.2, 'Trevor']
];

var blowouts2020 = [
    [1, 'Ean', 124.30, 'Sam', 77.22, 47.08],
    [2, 'Matt', 139.00, 'Hunter', 102.62, 36.38],
    [1, 'Hunter', 113.88, 'Basil', 78.24, 35.64],
    [2, 'Chaz', 132.72, 'Sawyer', 98.76, 33.96],
    [1, 'Trevor', 115.70, 'Willis', 84.20, 31.5]
];

var closeGames2020 = [
    [1, 'Jared', 100.80, 'Chaz', 96.40, 4.4],
    [2, 'Willis', 94.58, 'Sam', 86.90, 7.68],
    [1, 'Sawyer', 103.00, 'Majors', 94.82, 8.18],
    [1, 'Matt', 92.04, 'Ross', 74.38, 17.66],
    [2, 'Ean', 127.54, 'Ross', 107.56, 19.98],
];

var highest2020 = [
    [2, 'Matt', 139.00, 'Hunter', 102.62, 241.62],
    [2, 'Ean', 127.54, 'Ross', 107.56, 235.10],
    [2, 'Chaz', 132.72, 'Sawyer', 98.76, 231.48],
    [2, 'Basil', 118.08, 'Majors', 90.90, 208.98],
    [1, 'Ean', 124.30, 'Sam', 77.22, 201.52]
];

var dumpster2020 = [
    [1, 'Matt', 92.04, 'Ross', 74.38, 166.42],
    [2, 'Jared', 108.48, 'Trevor', 83.16, 191.64],
    [2, 'Willis', 94.58, 'Sam', 86.90, 181.48],
    [1, 'Hunter', 113.88, 'Basil', 78.24, 192.12],
    [1, 'Jared', 100.80, 'Chaz', 96.40, 197.20]
];
