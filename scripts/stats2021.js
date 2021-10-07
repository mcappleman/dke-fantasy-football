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
    ['Ean', 4, 3, 1, 0, 454.42, 401.78, 113.61, 100.45, 28, 16, 0, '63.64%', 2.55, 1.45, 0.45],
    ['Basil', 4, 3, 1, 0, 424.12, 400.86, 106.03, 100.22, 30, 14, 0, '68.18%', 2.73, 1.27, 0.27],
    ['Chaz', 4, 3, 1, 0, 409.1, 385.68, 102.28, 96.42, 26, 18, 0, '59.09%', 2.36, 1.64, 0.64],
    ['Sawyer', 4, 3, 1, 0, 402.52, 395.2, 100.63, 98.80, 31, 13, 0, '70.45%', 2.82, 1.18, 0.18],
    ['Hunter', 4, 3, 1, 0, 401.16, 387.98, 100.29, 97.00, 22, 22, 0, '50.00%', 2.00, 2.00, 1.00],
    ['Trevor', 4, 3, 1, 0, 361.88, 334.48, 90.47, 83.62, 17, 27, 0, '38.64%', 1.55, 2.45, 1.45],
    ['Sam', 4, 2, 2, 0, 441.64, 402.82, 110.41, 100.71, 29, 15, 0, '65.91%', 2.64, 1.36, -0.64],
    ['Matt', 4, 2, 2, 0, 405.14, 362.34, 101.29, 90.59, 25, 19, 0, '56.82%', 2.27, 1.73, -0.27],
    ['Willis', 4, 1, 3, 0, 364.22, 404.02, 91.06, 101.01, 17, 26, 1, '39.77%', 1.59, 2.41, -0.59],
    ['Majors', 4, 1, 3, 0, 342.8, 416.4, 85.70, 104.10, 9, 35, 0, '20.45%', 0.82, 3.18, 0.18],
    ['Ross', 4, 0, 4, 0, 386.22, 419.02, 96.56, 104.76, 19, 24, 1, '44.32%', 1.77, 2.23, -1.77],
    ['Jared', 4, 0, 4, 0, 305.38, 388.02, 76.35, 97.01, 10, 34, 0, '22.73%', 0.91, 3.09, -0.91],
];

var highScores2021 = [
    ['Ean', 2, 143.00, 'Majors'],
    ['Ean', 1, 130.46, 'Sam'],
    ['Sam', 1, 126.76, 'Ean'],
    ['Hunter', 1, 118.32, 'Matt'],
    ['Sawyer', 4, 114.30, 'Ean'],
    ['Matt', 2, 113.68, 'Hunter'],
    ['Matt', 1, 113.62, 'Sawyer'],
    ['Willis', 4, 113.5, 'Majors'],
    ['Basil', 1, 112.88, 'Ross'],
    ['Sam', 4, 112.86, 'Matt']
];

var lowScores2021 = [
    ['Jared', 1, 50.92, 'Trevor'],
    ['Trevor', 3, 60.38, 'Matt'],
    ['Jared', 3, 61.74, 'Majors'],
    ['Willis', 1, 70.56, 'Chaz'],
    ['Sawyer', 1, 70.78, 'Matt'],
    ['Majors', 2, 74.1, 'Ean'],
    ['Matt', 4, 76.32, 'Sam'],
    ['Willis', 2, 83.52, 'Sam'],
    ['Hunter', 3, 86.62, 'Ean'],
    ['Majors', 1, 87.14, 'Jared'],
];

var blowouts2021 = [
    [2, 'Ean', 143.00, 'Majors', 74.10, 68.9],
    [1, 'Trevor', 94.40, 'Jared', 50.92, 43.48],
    [1, 'Matt', 113.62, 'Sawyer', 70.78, 42.84],
    [3, 'Matt', 101.52, 'Trevor', 60.38, 41.14],
    [1, 'Chaz', 107.50, 'Willis', 70.56, 36.94],
    [4, 'Sam', 112.86, 'Matt', 76.32, 36.54],
    [4, 'Sawyer', 114.30, 'Ean', 88.32, 25.98],
    [3, 'Majors', 87.14, 'Jared', 61.74, 25.4],
    [4, 'Trevor', 111.34, 'Chaz', 87.12, 24.22],
    [4, 'Willis', 113.50, 'Majors', 93.98, 19.52]
];

var closeGames2021 = [
    [2, 'Trevor', 95.76, 'Ross', 94.92, 0.84],
    [3, 'Chaz', 112.52, 'Sam', 109.58, 2.94],
    [1, 'Ean', 130.46, 'Sam', 126.76, 3.7],
    [4, 'Hunter', 98.06, 'Ross', 94.08, 3.98],
    [2, 'Hunter', 118.32, 'Matt', 113.68, 4.64],
    [4, 'Basil', 104.52, 'Jared', 98.52, 6],
    [3, 'Ean', 92.64, 'Hunter', 86.62, 6.02],
    [2, 'Chaz', 101.96, 'Jared', 94.20, 7.76],
    [2, 'Sawyer', 105.12, 'Basil', 96.62, 8.5],
    [2, 'Sam', 92.44, 'Willis', 83.52, 8.92],
];

var highest2021 = [
    [1, 'Ean', 130.46, 'Sam', 126.76, 257.22],
    [2, 'Hunter', 118.32, 'Matt', 113.68, 232.00],
    [3, 'Chaz', 112.52, 'Sam', 109.58, 222.10],
    [2, 'Ean', 143.00, 'Majors', 74.10, 217.10],
    [1, 'Basil', 112.88, 'Ross', 100.58, 213.46],
    [3, 'Sawyer', 112.32, 'Ross', 96.64, 208.96],
    [4, 'Willis', 113.50, 'Majors', 93.98, 207.48],
    [3, 'Basil', 110.10, 'Willis', 96.64, 206.74],
    [4, 'Basil', 104.52, 'Jared', 98.52, 203.04],
    [4, 'Sawyer', 114.30, 'Ean', 88.32, 202.62],
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
    [4, 'Sam', 112.86, 'Matt', 76.32, 189.18],
    [2, 'Trevor', 95.76, 'Ross', 94.92, 190.68],
];

var fortunate2021 = [
    [3, 'Majors', 87.14, 'Jared', 61.74, 87.14],
    [2, 'Sam', 92.44, 'Willis', 83.52, 92.44],
    [3, 'Ean', 92.64, 'Hunter', 86.62, 92.64],
    [1, 'Trevor', 94.40, 'Jared', 50.92, 94.40],
    [2, 'Trevor', 95.76, 'Ross', 94.92, 95.76],
    [4, 'Hunter', 98.06, 'Ross', 94.08, 98.06],
    [1, 'Hunter', 98.16, 'Majors', 87.58, 98.16],
    [3, 'Matt', 101.52, 'Trevor', 60.38, 101.52],
    [2, 'Chaz', 101.96, 'Jared', 94.20, 101.96],
    [4, 'Basil', 104.52, 'Jared', 98.52, 104.52],
];

var unfortunate2021 = [
    [1, 'Ean', 130.46, 'Sam', 126.76, 126.76],
    [2, 'Hunter', 118.32, 'Matt', 113.68, 113.68],
    [3, 'Chaz', 112.52, 'Sam', 109.58, 109.58],
    [1, 'Basil', 112.88, 'Ross', 100.58, 100.58],
    [4, 'Basil', 104.52, 'Jared', 98.52, 98.52],
    [3, 'Basil', 110.10, 'Willis', 96.64, 96.64],
    [3, 'Sawyer', 112.32, 'Ross', 96.64, 96.64],
    [2, 'Sawyer', 105.12, 'Basil', 96.62, 96.62],
    [2, 'Trevor', 95.76, 'Ross', 94.92, 94.92],
    [2, 'Chaz', 101.96, 'Jared', 94.20, 94.20],
];
