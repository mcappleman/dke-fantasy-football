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
    ['Majors', 3, 1, 2, 0, 336.74, 273.76, 112.25, 91.25, 18, 15, 0, '54.55%', 1.64, 1.36, -0.64],
    ['Ross', 3, 0, 3, 0, 271.44, 341.58, 90.48, 113.86, 9, 24, 0, '27.27%', 0.82, 2.18, -0.82],
    ['Sam', 3, 0, 3, 0, 236.78, 325.16, 78.93, 108.39, 3, 30, 0, '9.09%', 0.27, 2.73, -0.27],
    ['Matt', 3, 3, 0, 0, 337.32, 249.66, 112.44, 83.22, 22, 11, 0, '66.67%', 2.00, 1.00, 1.00],
    ['Willis', 3, 1, 2, 0, 279.78, 308.9, 93.26, 102.97, 11, 22, 0, '33.33%', 1.00, 2.00, 0.00],
    ['Trevor', 3, 1, 2, 0, 251.54, 343.7, 83.85, 114.57, 10, 23, 0, '30.30%', 0.91, 2.09, 0.09],
    ['Ean', 3, 3, 0, 0, 358.14, 285.78, 119.38, 95.26, 28, 5, 0, '84.85%', 2.55, 0.45, 0.45],
    ['Hunter', 3, 2, 1, 0, 338.5, 306.74, 112.83, 102.25, 23, 10, 0, '69.70%', 2.09, 0.91, -0.09],
    ['Chaz', 3, 2, 1, 0, 334.34, 295.46, 111.45, 98.49, 22, 11, 0, '66.67%', 2.00, 1.00, 0.00],
    ['Basil', 3, 1, 2, 0, 292.22, 310, 97.41, 103.33, 14, 19, 0, '42.42%', 1.27, 1.73, -0.27],
    ['Sawyer', 3, 2, 1, 0, 329.4, 306.42, 109.80, 102.14, 22, 11, 0, '66.67%', 2.00, 1.00, 0.00],
    ['Jared', 3, 2, 1, 0, 288.16, 307.2, 96.05, 102.40, 16, 17, 0, '48.48%', 1.45, 1.55, 0.55]
];

var highScores2020 = [
    ['Majors', 3, 151.02, 'Trevor'],
    ['Matt', 2, 139.0, 'Hunter'],
    ['Chaz', 2, 132.72, 'Sawyer'],
    ['Sawyer', 3, 127.64, 'Jared'],
    ['Ean', 2, 127.54, 'Ross'],
    ['Ean', 1, 124.3, 'Sam'],
    ['Hunter', 3, 122, 'Ross'],
    ['Basil', 2, 118.08, 'Majors'],
    ['Trevor', 1, 115.7, 'Willis'],
    ['Hunter', 1, 113.88, 'Basil']
];

var lowScores2020 = [
    ['Trevor', 3, 52.68, 'Majors'],
    ['Sam', 3, 72.66, 'Matt'],
    ['Ross', 1, 74.38, 'Matt'],
    ['Sam', 1, 77.22, 'Ean'],
    ['Basil', 1, 78.24, 'Hunter'],
    ['Jared', 3, 78.88, 'Sawyer'],
    ['Trevor', 2, 83.16, 'Jared'],
    ['Willis', 1, 84.2, 'Trevor'],
    ['Sam', 2, 86.9, 'Willis'],
    ['Ross', 3, 89.5, 'Hunter']
];

var blowouts2020 = [
    [3, 'Majors', 151.02, 'Trevor', 52.68, 98.34],
    [3, 'Sawyer', 127.64, 'Jared', 78.88, 48.76],
    [1, 'Ean', 124.30, 'Sam', 77.22, 47.08],
    [2, 'Matt', 139.00, 'Hunter', 102.62, 36.38],
    [1, 'Hunter', 113.88, 'Basil', 78.24, 35.64],
    [2, 'Chaz', 132.72, 'Sawyer', 98.76, 33.96],
    [3, 'Matt', 106.28, 'Sam', 72.66, 33.62],
    [3, 'Hunter', 122.00, 'Ross', 89.50, 32.5],
    [1, 'Trevor', 115.70, 'Willis', 84.20, 31.5],
    [2, 'Basil', 118.08, 'Majors', 90.90, 27.18]
];

var closeGames2020 = [
    [1, 'Jared', 100.80, 'Chaz', 96.40, 4.4],
    [3, 'Ean', 106.30, 'Willis', 101.00, 5.3],
    [2, 'Willis', 94.58, 'Sam', 86.90, 7.68],
    [1, 'Sawyer', 103.00, 'Majors', 94.82, 8.18],
    [3, 'Chaz', 105.22, 'Basil', 95.90, 9.32],
    [1, 'Matt', 92.04, 'Ross', 74.38, 17.66],
    [2, 'Ean', 127.54, 'Ross', 107.56, 19.98],
    [2, 'Jared', 108.48, 'Trevor', 83.16, 25.32],
    [2, 'Basil', 118.08, 'Majors', 90.90, 27.18],
    [1, 'Trevor', 115.70, 'Willis', 84.20, 31.5]
];

var highest2020 = [
    [2, 'Matt', 139.00, 'Hunter', 102.62, 241.62],
    [2, 'Ean', 127.54, 'Ross', 107.56, 235.10],
    [2, 'Chaz', 132.72, 'Sawyer', 98.76, 231.48],
    [3, 'Hunter', 122.00, 'Ross', 89.50, 211.50],
    [2, 'Basil', 118.08, 'Majors', 90.90, 208.98],
    [3, 'Ean', 106.30, 'Willis', 101.00, 207.30],
    [3, 'Sawyer', 127.64, 'Jared', 78.88, 206.52],
    [3, 'Majors', 151.02, 'Trevor', 52.68, 203.70],
    [1, 'Ean', 124.30, 'Sam', 77.22, 201.52],
    [3, 'Chaz', 105.22, 'Basil', 95.90, 201.12],
];

var dumpster2020 = [
    [1, 'Matt', 92.04, 'Ross', 74.38, 166.42],
    [3, 'Matt', 106.28, 'Sam', 72.66, 178.94],
    [2, 'Jared', 108.48, 'Trevor', 83.16, 191.64],
    [2, 'Willis', 94.58, 'Sam', 86.90, 181.48],
    [1, 'Hunter', 113.88, 'Basil', 78.24, 192.12],
    [1, 'Jared', 100.80, 'Chaz', 96.40, 197.20],
    [1, 'Sawyer', 103.00, 'Majors', 94.82, 197.82],
    [1, 'Trevor', 115.70, 'Willis', 84.20, 199.90],
    [3, 'Chaz', 105.22, 'Basil', 95.90, 201.12],
    [1, 'Ean', 124.30, 'Sam', 77.22, 201.52],
];
