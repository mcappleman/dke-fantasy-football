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
    ['Majors', 4, 2, 2, 0, 455.3, 387.28, 112.25, 91.25, 26, 18, 0, '59.09%', 2.36, 1.64, -0.36],
    ['Ross', 4, 0, 4, 0, 369.98, 473.38, 90.48, 113.86, 14, 30, 0, '31.82%', 1.27, 2.73, -1.27],
    ['Sam', 4, 1, 3, 0, 368.58, 423.7, 78.93, 108.39, 13, 31, 0, '29.55%', 1.18, 2.82, -0.18],
    ['Matt', 4, 4, 0, 0, 471, 337.68, 112.44, 83.22, 33, 11, 0, '75.00%', 3.00, 1.00, 1.00],
    ['Willis', 4, 2, 2, 0, 361.02, 379.9, 89.39, 101.30, 13, 31, 0, '29.55%', 1.18, 2.82, 0.82],
    ['Trevor', 4, 2, 2, 0, 382.86, 400.4, 83.85, 114.57, 19, 25, 0, '43.18%', 1.73, 2.27, 0.27],
    ['Ean', 4, 3, 1, 0, 446.16, 419.46, 125.92, 92.39, 31, 13, 0, '70.45%', 2.82, 1.18, 0.18],
    ['Hunter', 4, 2, 2, 0, 409.5, 387.98, 112.83, 102.25, 24, 20, 0, '54.55%', 2.18, 1.82, -0.18],
    ['Chaz', 4, 2, 2, 0, 447.86, 414.02, 111.45, 98.49, 28, 16, 0, '63.64%', 2.55, 1.45, -0.55],
    ['Basil', 4, 2, 2, 0, 406.16, 400.16, 97.41, 103.33, 21, 23, 0, '47.73%', 1.91, 2.09, 0.09],
    ['Sawyer', 4, 2, 2, 0, 386.1, 437.74, 109.80, 102.14, 22, 22, 0, '50.00%', 2.00, 2.00, 0.00],
    ['Jared', 4, 2, 2, 0, 378.32, 421.14, 96.05, 102.40, 20, 24, 0, '45.45%', 1.82, 2.18, 0.18]
];

var highScores2020 = [
    ['Majors', 3, 151.02, 'Trevor'],
    ['Matt', 2, 139.0, 'Hunter'],
    ['Matt', 4, 133.68, 'Ean'],
    ['Chaz', 2, 132.72, 'Sawyer'],
    ['Sam', 4, 131.8, 'Ross'],
    ['Trevor', 4, 131.31, 'Sawyer'],
    ['Sawyer', 3, 127.64, 'Jared'],
    ['Ean', 2, 127.54, 'Ross'],
    ['Ean', 1, 124.3, 'Sam'],
    ['Hunter', 3, 122, 'Ross']
];

var lowScores2020 = [
    ['Trevor', 3, 52.68, 'Majors'],
    ['Sawyer', 4, 56.7, 'Trevor'],
    ['Hunter', 4, 71.00, 'Sam'],
    ['Sam', 3, 72.66, 'Matt'],
    ['Ross', 1, 74.38, 'Matt'],
    ['Sam', 1, 77.22, 'Ean'],
    ['Basil', 1, 78.24, 'Hunter'],
    ['Jared', 3, 78.88, 'Sawyer'],
    ['Willis', 4, 81.24, 'Hunter'],
    ['Trevor', 2, 83.16, 'Jared']
];

var blowouts2020 = [
    [3, 'Majors', 151.02, 'Trevor', 52.68, 98.34],
    [4, 'Trevor', 131.32, 'Sawyer', 56.70, 74.62],
    [3, 'Sawyer', 127.64, 'Jared', 78.88, 48.76],
    [1, 'Ean', 124.30, 'Sam', 77.22, 47.08],
    [4, 'Matt', 133.68, 'Ean', 88.02, 45.66],
    [2, 'Matt', 139.00, 'Hunter', 102.62, 36.38],
    [1, 'Hunter', 113.88, 'Basil', 78.24, 35.64],
    [2, 'Chaz', 132.72, 'Sawyer', 98.76, 33.96],
    [3, 'Matt', 106.28, 'Sam', 72.66, 33.62],
    [4, 'Sam', 131.80, 'Ross', 98.54, 33.26]
];

var closeGames2020 = [
    [1, 'Jared', 100.80, 'Chaz', 96.40, 4.4],
    [4, 'Majors', 118.56, 'Chaz', 113.52, 5.04],
    [3, 'Ean', 106.30, 'Willis', 101.00, 5.3],
    [2, 'Willis', 94.58, 'Sam', 86.90, 7.68],
    [1, 'Sawyer', 103.00, 'Majors', 94.82, 8.18],
    [3, 'Chaz', 105.22, 'Basil', 95.90, 9.32],
    [4, 'Willis', 81.24, 'Hunter', 71.00, 10.24],
    [1, 'Matt', 92.04, 'Ross', 74.38, 17.66],
    [2, 'Ean', 127.54, 'Ross', 107.56, 19.98],
    [4, 'Basil', 113.94, 'Jared', 90.16, 23.78]
];

var highest2020 = [
    [2, 'Matt', 139.00, 'Hunter', 102.62, 241.62],
    [2, 'Ean', 127.54, 'Ross', 107.56, 235.10],
    [4, 'Majors', 118.56, 'Chaz', 113.52, 232.08],
    [2, 'Chaz', 132.72, 'Sawyer', 98.76, 231.48],
    [4, 'Sam', 131.80, 'Ross', 98.54, 230.34],
    [4, 'Matt', 133.68, 'Ean', 88.02, 221.70],
    [3, 'Hunter', 122.00, 'Ross', 89.50, 211.50],
    [2, 'Basil', 118.08, 'Majors', 90.90, 208.98],
    [3, 'Ean', 106.30, 'Willis', 101.00, 207.30],
    [3, 'Sawyer', 127.64, 'Jared', 78.88, 206.52]
];

var dumpster2020 = [
    [4, 'Willis', 81.24, 'Hunter', 71.00, 152.24],
    [1, 'Matt', 92.04, 'Ross', 74.38, 166.42],
    [3, 'Matt', 106.28, 'Sam', 72.66, 178.94],
    [2, 'Jared', 108.48, 'Trevor', 83.16, 191.64],
    [2, 'Willis', 94.58, 'Sam', 86.90, 181.48],
    [4, 'Trevor', 131.32, 'Sawyer', 56.70, 188.02],
    [1, 'Hunter', 113.88, 'Basil', 78.24, 192.12],
    [1, 'Jared', 100.80, 'Chaz', 96.40, 197.20],
    [1, 'Sawyer', 103.00, 'Majors', 94.82, 197.82],
    [1, 'Trevor', 115.70, 'Willis', 84.20, 199.90]
];
