$(document).ready(function () {

    $('#table2021').DataTable({
        order: [[2, "desc"]],
        searching: false,
        sDom: '',
        lengthMenu: [[-1], ["All"]],
        data: data2021,
        columns: yearColumnNames
    });

    $('#highScores2021').DataTable({
        order: [[2, "desc"]],
        sDom: '',
        data: highScores2021,
        columns: scoreColumnNames
    });

    $('#lowScores2021').DataTable({
        order: [[2, "asc"]],
        sDom: '',
        data: lowScores2021,
        columns: scoreColumnNames
    });

    $('#blowouts2021').DataTable({
        order: [[5, "desc"]],
        sDom: '',
        data: blowouts2021,
        columns: gameColumnNames
    });

    $('#closeGames2021').DataTable({
        order: [[5, "asc"]],
        sDom: '',
        data: closeGames2021,
        columns: gameColumnNames
    });

    $('#highest2021').DataTable({
        order: [[5, "desc"]],
        sDom: '',
        data: highest2021,
        columns: gameScoringColumnNames
    });

    $('#dumpster2021').DataTable({
        order: [[5, "asc"]],
        sDom: '',
        data: dumpster2021,
        columns: gameScoringColumnNames
    });

    $('#fortunate2021').DataTable({
        order: [[5, "asc"]],
        sDom: '',
        data: fortunate2021,
        columns: fortunateColumnNames
    });

    $('#unfortunate2021').DataTable({
        order: [[5, "desc"]],
        sDom: '',
        data: unfortunate2021,
        columns: fortunateColumnNames
    });

});

var data2021 = [
    ['Ean', 3, 3, 0, 0, 366.1, 287.48, 122.03, 95.83, 26, 7, 0, '78.79%', 2.36, 0.64, 0.64],
    ['Chaz', 3, 3, 0, 0, 321.98, 274.34, 107.33, 91.45, 25, 8, 0, '75.76%', 2.27, 0.73, 0.73],
    ['Matt', 3, 2, 1, 0, 328.82, 249.48, 109.61, 83.16, 25, 8, 0, '75.76%', 2.27, 0.73, -0.27],
    ['Basil', 3, 2, 1, 0, 319.6, 302.34, 106.53, 100.78, 23, 10, 0, '69.70%', 2.09, 0.91, -0.09],
    ['Sawyer', 3, 2, 1, 0, 288.22, 306.88, 96.07, 102.29, 20, 13, 0, '60.61%', 1.82, 1.18, 0.18],
    ['Hunter', 3, 2, 1, 0, 303.1, 293.9, 101.03, 97.97, 17, 16, 0, '51.52%', 1.55, 1.45, 0.45],
    ['Trevor', 3, 2, 1, 0, 250.54, 247.36, 83.51, 82.45, 9, 24, 0, '27.27%', 0.82, 2.18, 1.18],
    ['Sam', 3, 1, 2, 0, 328.78, 326.5, 109.59, 108.83, 20, 13, 0, '60.61%', 1.82, 1.18, -0.82],
    ['Majors', 3, 1, 2, 0, 248.82, 302.9, 82.94, 100.97, 6, 27, 0, '18.18%', 0.55, 2.45, 0.45],
    ['Ross', 3, 0, 3, 0, 292.14, 320.96, 97.38, 106.99, 15, 17, 1, '46.97%', 1.41, 1.59, -1.41],
    ['Willis', 3, 0, 3, 0, 250.72, 310.04, 83.57, 103.35, 7, 25, 1, '22.73%', 0.68, 2.32, -0.68],
    ['Jared', 3, 0, 3, 0, 206.86, 283.5, 68.95, 94.50, 4, 29, 0, '12.12%', 0.36, 2.64, -0.36],
];

var highScores2021 = [
    ['Ean', 2, 143.00, 'Majors'],
    ['Ean', 1, 130.46, 'Sam'],
    ['Sam', 1, 126.76, 'Ean'],
    ['Hunter', 1, 118.32, 'Matt'],
    ['Matt', 2, 113.68, 'Hunter'],
    ['Matt', 1, 113.62, 'Sawyer'],
    ['Basil', 1, 112.88, 'Ross'],
    ['Chaz', 3, 112.52, 'Sam'],
    ['Sawyer', 3, 112.32, 'Ross'],
    ['Basil', 3, 110.10, 'Willis']
];

var lowScores2021 = [
    ['Jared', 1, 50.92, 'Trevor'],
    ['Trevor', 3, 60.38, 'Matt'],
    ['Jared', 3, 61.74, 'Majors'],
    ['Willis', 1, 70.56, 'Chaz'],
    ['Sawyer', 1, 70.78, 'Matt'],
    ['Majors', 2, 74.1, 'Ean'],
    ['Willis', 2, 83.52, 'Sam'],
    ['Hunter', 3, 86.62, 'Ean'],
    ['Majors', 1, 87.14, 'Jared'],
    ['Majors', 3, 87.58, 'Hunter'],
];

var blowouts2021 = [
    [2, 'Ean', 143.00, 'Majors', 74.10, 68.9],
    [1, 'Trevor', 94.40, 'Jared', 50.92, 43.48],
    [1, 'Matt', 113.62, 'Sawyer', 70.78, 42.84],
    [3, 'Matt', 101.52, 'Trevor', 60.38, 41.14],
    [1, 'Chaz', 107.50, 'Willis', 70.56, 36.94],
    [3, 'Majors', 87.14, 'Jared', 61.74, 25.4],
    [3, 'Sawyer', 112.32, 'Ross', 96.64, 15.68],
    [3, 'Basil', 110.10, 'Willis', 96.64, 13.46],
    [1, 'Basil', 112.88, 'Ross', 100.58, 12.3],
    [1, 'Hunter', 98.16, 'Majors', 87.58, 10.58],
];

var closeGames2021 = [
    [2, 'Trevor', 95.76, 'Ross', 94.92, 0.84],
    [3, 'Chaz', 112.52, 'Sam', 109.58, 2.94],
    [1, 'Ean', 130.46, 'Sam', 126.76, 3.7],
    [2, 'Hunter', 118.32, 'Matt', 113.68, 4.64],
    [3, 'Ean', 92.64, 'Hunter', 86.62, 6.02],
    [2, 'Chaz', 101.96, 'Jared', 94.20, 7.76],
    [2, 'Sawyer', 105.12, 'Basil', 96.62, 8.5],
    [2, 'Sam', 92.44, 'Willis', 83.52, 8.92],
    [1, 'Hunter', 98.16, 'Majors', 87.58, 10.58],
    [1, 'Basil', 112.88, 'Ross', 100.58, 12.3],
];

var highest2021 = [
    [1, 'Ean', 130.46, 'Sam', 126.76, 257.22],
    [2, 'Hunter', 118.32, 'Matt', 113.68, 232.00],
    [3, 'Chaz', 112.52, 'Sam', 109.58, 222.10],
    [2, 'Ean', 143.00, 'Majors', 74.10, 217.10],
    [1, 'Basil', 112.88, 'Ross', 100.58, 213.46],
    [3, 'Sawyer', 112.32, 'Ross', 96.64, 208.96],
    [3, 'Basil', 110.10, 'Willis', 96.64, 206.74],
    [2, 'Sawyer', 105.12, 'Basil', 96.62, 201.74],
    [2, 'Chaz', 101.96, 'Jared', 94.20, 196.16],
    [2, 'Trevor', 95.76, 'Ross', 94.92, 190.68],
];

var dumpster2021 = [
    [1, 'Trevor', 94.40, 'Jared', 50.92, 145.32],
    [3, 'Majors', 87.14, 'Jared', 61.74, 148.88],
    [3, 'Matt', 101.52, 'Trevor', 60.38, 161.90],
    [2, 'Sam', 92.44, 'Willis', 83.52, 175.96],
    [1, 'Chaz', 107.50, 'Willis', 70.56, 178.06],
    [3, 'Ean', 92.64, 'Hunter', 86.62, 179.26],
    [1, 'Matt', 113.62, 'Sawyer', 70.78, 184.40],
    [1, 'Hunter', 98.16, 'Majors', 87.58, 185.74],
    [2, 'Trevor', 95.76, 'Ross', 94.92, 190.68],
    [2, 'Chaz', 101.96, 'Jared', 94.20, 196.16],
];

var fortunate2021 = [
    [3, 'Majors', 87.14, 'Jared', 61.74, 87.14],
    [2, 'Sam', 92.44, 'Willis', 83.52, 92.44],
    [3, 'Ean', 92.64, 'Hunter', 86.62, 92.64],
    [1, 'Trevor', 94.40, 'Jared', 50.92, 94.40],
    [2, 'Trevor', 95.76, 'Ross', 94.92, 95.76],
    [1, 'Hunter', 98.16, 'Majors', 87.58, 98.16],
    [3, 'Matt', 101.52, 'Trevor', 60.38, 101.52],
    [2, 'Chaz', 101.96, 'Jared', 94.20, 101.96],
    [2, 'Sawyer', 105.12, 'Basil', 96.62, 105.12],
    [1, 'Chaz', 107.50, 'Willis', 70.56, 107.50],
];

var unfortunate2021 = [
    [1, 'Ean', 130.46, 'Sam', 126.76, 126.76],
    [2, 'Hunter', 118.32, 'Matt', 113.68, 113.68],
    [3, 'Chaz', 112.52, 'Sam', 109.58, 109.58],
    [1, 'Basil', 112.88, 'Ross', 100.58, 100.58],
    [3, 'Basil', 110.10, 'Willis', 96.64, 96.64],
    [3, 'Sawyer', 112.32, 'Ross', 96.64, 96.64],
    [2, 'Sawyer', 105.12, 'Basil', 96.62, 96.62],
    [2, 'Trevor', 95.76, 'Ross', 94.92, 94.92],
    [2, 'Chaz', 101.96, 'Jared', 94.20, 94.20],
    [1, 'Hunter', 98.16, 'Majors', 87.58, 87.58],
];
