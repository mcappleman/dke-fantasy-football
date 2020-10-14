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
    ['Majors', 5, 3, 2, 0, 555.72, 477.68, 111.14, 95.54, 34, 21, 0, '61.82%', 3.09, 1.91, -0.09],
    ['Ross', 5, 1, 4, 0, 469.24, 561.96, 93.85, 112.39, 21, 34, 0, '38.18%', 1.91, 3.09, -0.91],
    ['Sam', 5, 2, 3, 0, 457.46, 506.14, 91.49, 101.23, 17, 38, 0, '30.91%', 1.55, 3.45, 0.45],
    ['Matt', 5, 5, 0, 0, 555.54, 409.1, 111.11, 81.82, 35, 20, 0, '63.64%', 3.18, 1.82, 1.82],
    ['Willis', 5, 2, 3, 0, 443.46, 468.78, 88.69, 93.76, 14, 41, 0, '25.45%', 1.27, 3.73, 0.73],
    ['Trevor', 5, 2, 3, 0, 479.56, 503.96, 95.91, 100.79, 25, 30, 0, '45.45%', 2.27, 2.73, -0.27],
    ['Ean', 5, 4, 1, 0, 568.16, 537.16, 113.63, 107.43, 42, 13, 0, '76.36%', 3.82, 1.18, 0.18],
    ['Hunter', 5, 2, 3, 0, 498.08, 487.24, 99.62, 97.45, 27, 28, 0, '49.09%', 2.45, 2.55, -0.45],
    ['Chaz', 5, 3, 2, 0, 551.42, 510.72, 110.28, 102.14, 37, 18, 0, '67.27%', 3.36, 1.64, -0.36],
    ['Basil', 5, 2, 3, 0, 496.56, 500.58, 99.31, 100.12, 26, 29, 0, '47.27%', 2.36, 2.64, -0.36],
    ['Sawyer', 5, 2, 3, 0, 503.8, 559.74, 100.76, 111.95, 32, 23, 0, '58.18%', 2.91, 2.09, -0.91],
    ['Jared', 5, 2, 3, 0, 449.74, 505.68, 89.95, 101.14, 20, 35, 0, '36.36%', 1.82, 3.18, 0.18]
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
    ['Jared', 5, 71.42, 'Matt'],
    ['Sam', 3, 72.66, 'Matt'],
    ['Ross', 1, 74.38, 'Matt'],
    ['Sam', 1, 77.22, 'Ean'],
    ['Basil', 1, 78.24, 'Hunter'],
    ['Jared', 3, 78.88, 'Sawyer'],
    ['Willis', 4, 81.24, 'Hunter']
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
    [5, 'Ean', 122.00, 'Sawyer', 117.70, 4.3],
    [1, 'Jared', 100.80, 'Chaz', 96.40, 4.4],
    [4, 'Majors', 118.56, 'Chaz', 113.52, 5.04],
    [3, 'Ean', 106.30, 'Willis', 101.00, 5.3],
    [5, 'Sam', 88.88, 'Willis', 82.44, 6.44],
    [5, 'Chaz', 103.56, 'Trevor', 96.70, 6.86],
    [2, 'Willis', 94.58, 'Sam', 86.90, 7.68],
    [1, 'Sawyer', 103.00, 'Majors', 94.82, 8.18],
    [3, 'Chaz', 105.22, 'Basil', 95.90, 9.32],
    [5, 'Majors', 100.42, 'Basil', 90.40, 10.02]
];

var highest2020 = [
    [2, 'Matt', 139.00, 'Hunter', 102.62, 241.62],
    [5, 'Ean', 122.00, 'Sawyer', 117.70, 239.70],
    [2, 'Ean', 127.54, 'Ross', 107.56, 235.10],
    [4, 'Majors', 118.56, 'Chaz', 113.52, 232.08],
    [2, 'Chaz', 132.72, 'Sawyer', 98.76, 231.48],
    [4, 'Sam', 131.80, 'Ross', 98.54, 230.34],
    [4, 'Matt', 133.68, 'Ean', 88.02, 221.70],
    [3, 'Hunter', 122.00, 'Ross', 89.50, 211.50],
    [2, 'Basil', 118.08, 'Majors', 90.90, 208.98],
    [3, 'Ean', 106.30, 'Willis', 101.00, 207.30]
];

var dumpster2020 = [
    [4, 'Willis', 81.24, 'Hunter', 71.00, 152.24],
    [5, 'Matt', 84.54, 'Jared', 71.42, 155.96],
    [1, 'Matt', 92.04, 'Ross', 74.38, 166.42],
    [5, 'Sam', 88.88, 'Willis', 82.44, 171.32],
    [3, 'Matt', 106.28, 'Sam', 72.66, 178.94],
    [2, 'Willis', 94.58, 'Sam', 86.90, 181.48],
    [5, 'Ross', 99.26, 'Hunter', 88.58, 187.84],
    [4, 'Trevor', 131.32, 'Sawyer', 56.70, 188.02],
    [5, 'Majors', 100.42, 'Basil', 90.40, 190.82],
    [2, 'Jared', 108.48, 'Trevor', 83.16, 191.64]
];
