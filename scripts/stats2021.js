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
    ['Ean', 5, 4, 1, 0, 591.28, 512.1, 118.26, 102.42, 37, 18, 0, '67.27%', 3.36, 1.64, 0.64],
    ['Sawyer', 5, 4, 1, 0, 549.82, 503.44, 109.96, 100.69, 34, 21, 0, '61.82%', 3.09, 1.91, 0.91],
    ['Sam', 5, 3, 2, 0, 582.28, 512.4, 116.46, 102.48, 39, 16, 0, '70.91%', 3.55, 1.45, -0.55],
    ['Basil', 5, 3, 2, 0, 528, 524.18, 105.60, 104.84, 38, 17, 0, '69.09%', 3.45, 1.55, -0.45],
    ['Matt', 5, 3, 2, 0, 527.62, 457.54, 105.52, 91.51, 32, 23, 0, '58.18%', 2.91, 2.09, 0.09],
    ['Hunter', 5, 3, 2, 0, 509.4, 535.28, 101.88, 107.06, 33, 22, 0, '60.00%', 3.00, 2.00, 0.00],
    ['Chaz', 5, 3, 2, 0, 504.3, 508.16, 100.86, 101.63, 27, 28, 0, '49.09%', 2.45, 2.55, 0.55],
    ['Trevor', 5, 3, 2, 0, 471.46, 475.12, 94.29, 95.02, 21, 34, 0, '38.18%', 1.91, 3.09, 1.09],
    ['Willis', 5, 2, 3, 0, 485.1, 497, 97.02, 99.40, 17, 37, 1, '31.82%', 1.59, 3.41, 0.41],
    ['Majors', 5, 2, 3, 0, 466.12, 520.28, 93.22, 104.06, 11, 44, 0, '20.00%', 1.00, 4.00, 1.00],
    ['Ross', 5, 0, 5, 0, 496.54, 555.88, 99.31, 111.18, 24, 30, 1, '44.55%', 2.23, 2.77, -2.23],
    ['Jared', 5, 0, 5, 0, 398.36, 508.9, 79.67, 101.78, 16, 39, 0, '29.09%', 1.45, 3.55, -1.45],
];

var highScores2021 = [
    ['Sawyer', 5, 147.3, 'Hunter'],
    ['Ean', 2, 143.00, 'Majors'],
    ['Sam', 5, 140.64, 'Trevor'],
    ['Ean', 5, 136.86, 'Ross'],
    ['Ean', 1, 130.46, 'Sam'],
    ['Sam', 1, 126.76, 'Ean'],
    ['Majors', 5, 123.32, 'Basil'],
    ['Matt', 5, 122.48, 'Chaz'],
    ['Wills', 5, 120.88, 'Jared'],
    ['Hunter', 2, 118.32, 'Matt'],
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
    [5, 'Sawyer', 147.30, 'Hunter', 108.24, 39.06],
    [1, 'Chaz', 107.50, 'Willis', 70.56, 36.94],
    [4, 'Sam', 112.86, 'Matt', 76.32, 36.54],
    [5, 'Sam', 140.64, 'Trevor', 109.58, 31.06],
    [5, 'Willis', 120.88, 'Jared', 92.98, 27.9],
    [5, 'Matt', 122.48, 'Chaz', 95.20, 27.28],
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
    [5, 'Sawyer', 147.30, 'Hunter', 108.24, 255.54],
    [5, 'Sam', 140.64, 'Trevor', 109.58, 250.22],
    [5, 'Ean', 136.86, 'Ross', 110.32, 247.18],
    [2, 'Hunter', 118.32, 'Matt', 113.68, 232.00],
    [5, 'Majors', 123.32, 'Basil', 103.88, 227.20],
    [3, 'Chaz', 112.52, 'Sam', 109.58, 222.10],
    [5, 'Matt', 122.48, 'Chaz', 95.20, 217.68],
    [2, 'Ean', 143.00, 'Majors', 74.10, 217.10],
    [5, 'Willis', 120.88, 'Jared', 92.98, 213.86],
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
    [5, 'Ean', 136.86, 'Ross', 110.32, 110.32],
    [5, 'Sam', 140.64, 'Trevor', 109.58, 109.58],
    [3, 'Chaz', 112.52, 'Sam', 109.58, 109.58],
    [5, 'Sawyer', 147.30, 'Hunter', 108.24, 108.24],
    [5, 'Majors', 123.32, 'Basil', 103.88, 103.88],
    [1, 'Basil', 112.88, 'Ross', 100.58, 100.58],
    [4, 'Basil', 104.52, 'Jared', 98.52, 98.52],
    [3, 'Sawyer', 112.32, 'Ross', 96.64, 96.64],
];
