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
    ['Sawyer', 6, 5, 1, 0, 635.06, 572.92, 105.84, 95.49, 45, 21, 0, '68.18%', 4.09, 1.91, 0.91],
    ['Ean', 6, 4, 2, 0, 679.64, 626.12, 113.27, 104.35, 41, 25, 0, '62.12%', 3.73, 2.27, 0.27],
    ['Hunter', 6, 4, 2, 0, 649.24, 646.56, 108.21, 107.76, 35, 31, 0, '53.03%', 3.18, 2.82, 0.82],
    ['Matt', 6, 4, 2, 0, 642.82, 554.64, 107.14, 92.44, 41, 25, 0, '62.12%', 3.73, 2.27, 0.27],
    ['Chaz', 6, 4, 2, 0, 618.32, 596.52, 103.05, 99.42, 35, 31, 0, '53.03%', 3.18, 2.82, 0.82],
    ['Sam', 6, 3, 3, 0, 640.16, 652.3, 106.69, 108.72, 39, 27, 0, '59.09%', 3.55, 2.45, -0.55],
    ['Basil', 6, 3, 3, 0, 639.28, 664.02, 106.55, 110.67, 39, 27, 0, '59.09%', 3.55, 2.45, -0.55],
    ['Majors', 6, 3, 3, 0, 606.02, 578.16, 101.00, 96.36, 28, 38, 0, '42.42%', 2.55, 3.45, 0.45],
    ['Willis', 6, 3, 3, 0, 582.36, 574.3, 97.06, 95.72, 29, 36, 1, '44.70%', 2.68, 3.32, 0.32],
    ['Trevor', 6, 3, 3, 0, 540.94, 560.36, 90.16, 93.39, 22, 44, 0, '33.33%', 2.00, 4.00, 1.00],
    ['Ross', 6, 0, 6, 0, 573.84, 653.14, 95.64, 108.86, 26, 39, 1, '40.15%', 2.41, 3.59, -2.41],
    ['Jared', 6, 0, 6, 0, 495.46, 624.1, 82.58, 104.02, 15, 51, 0, '22.73%', 1.36, 4.64, -1.36],
];

var highScores2021 = [
    ['Sawyer', 5, 147.3, 'Hunter'],
    ['Ean', 2, 143.00, 'Majors'],
    ['Sam', 5, 140.64, 'Trevor'],
    ['Majors', 6, 139.9, 'Sam'],
    ['Hunter', 6, 139.84, 'Basil'],
    ['Ean', 5, 136.86, 'Ross'],
    ['Ean', 1, 130.46, 'Sam'],
    ['Sam', 1, 126.76, 'Ean'],
    ['Majors', 5, 123.32, 'Basil'],
    ['Matt', 5, 122.48, 'Chaz'],
];

var lowScores2021 = [
    ['Jared', 1, 50.92, 'Trevor'],
    ['Sam', 6, 57.88, 'Majors'],
    ['Trevor', 3, 60.38, 'Matt'],
    ['Jared', 3, 61.74, 'Majors'],
    ['Trevor', 6, 69.48, 'Sawyer'],
    ['Willis', 1, 70.56, 'Chaz'],
    ['Sawyer', 1, 70.78, 'Matt'],
    ['Majors', 2, 74.1, 'Ean'],
    ['Matt', 4, 76.32, 'Sam'],
    ['Ross', 6, 77.3, 'Willis'],
];

var blowouts2021 = [
    [6, 'Majors', 139.90, 'Sam', 57.88, 82.02],
    [2, 'Ean', 143.00, 'Majors', 74.10, 68.9],
    [1, 'Trevor', 94.40, 'Jared', 50.92, 43.48],
    [1, 'Matt', 113.62, 'Sawyer', 70.78, 42.84],
    [3, 'Matt', 101.52, 'Trevor', 60.38, 41.14],
    [5, 'Sawyer', 147.30, 'Hunter', 108.24, 39.06],
    [1, 'Chaz', 107.50, 'Willis', 70.56, 36.94],
    [4, 'Sam', 112.86, 'Matt', 76.32, 36.54],
    [5, 'Sam', 140.64, 'Trevor', 109.58, 31.06],
    [6, 'Hunter', 139.84, 'Basil', 111.28, 28.56],
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
    [6, 'Hunter', 139.84, 'Basil', 111.28, 251.12],
    [5, 'Sam', 140.64, 'Trevor', 109.58, 250.22],
    [5, 'Ean', 136.86, 'Ross', 110.32, 247.18],
    [2, 'Hunter', 118.32, 'Matt', 113.68, 232.00],
    [5, 'Majors', 123.32, 'Basil', 103.88, 227.20],
    [3, 'Chaz', 112.52, 'Sam', 109.58, 222.10],
    [5, 'Matt', 122.48, 'Chaz', 95.20, 217.68],
    [2, 'Ean', 143.00, 'Majors', 74.10, 217.10],
];

var dumpster2021 = [
    [1, 'Trevor', 94.40, 'Jared', 50.92, 145.32],
    [3, 'Majors', 87.14, 'Jared', 61.74, 148.88],
    [6, 'Sawyer', 85.24, 'Trevor', 69.48, 154.72],
    [3, 'Matt', 101.52, 'Trevor', 60.38, 161.90],
    [6, 'Willis', 97.26, 'Ross', 77.30, 174.56],
    [2, 'Sam', 92.44, 'Willis', 83.52, 175.96],
    [1, 'Chaz', 107.50, 'Willis', 70.56, 178.06],
    [3, 'Ean', 92.64, 'Hunter', 86.62, 179.26],
    [1, 'Matt', 113.62, 'Sawyer', 70.78, 184.40],
    [1, 'Hunter', 98.16, 'Majors', 87.58, 185.74],
];

var fortunate2021 = [
    [6, 'Sawyer', 85.24, 'Trevor', 69.48, 85.24],
    [3, 'Majors', 87.14, 'Jared', 61.74, 87.14],
    [2, 'Sam', 92.44, 'Willis', 83.52, 92.44],
    [3, 'Ean', 92.64, 'Hunter', 86.62, 92.64],
    [1, 'Trevor', 94.40, 'Jared', 50.92, 94.40],
    [2, 'Trevor', 95.76, 'Ross', 94.92, 95.76],
    [6, 'Willis', 97.26, 'Ross', 77.30, 97.26],
    [4, 'Hunter', 98.06, 'Ross', 94.08, 98.06],
    [1, 'Hunter', 98.16, 'Majors', 87.58, 98.16],
    [3, 'Matt', 101.52, 'Trevor', 60.38, 101.52],
];

var unfortunate2021 = [
    [1, 'Ean', 130.46, 'Sam', 126.76, 126.76],
    [2, 'Hunter', 118.32, 'Matt', 113.68, 113.68],
    [6, 'Hunter', 139.84, 'Basil', 111.28, 111.28],
    [5, 'Ean', 136.86, 'Ross', 110.32, 110.32],
    [3, 'Chaz', 112.52, 'Sam', 109.58, 109.58],
    [5, 'Sam', 140.64, 'Trevor', 109.58, 109.58],
    [5, 'Sawyer', 147.30, 'Hunter', 108.24, 108.24],
    [5, 'Majors', 123.32, 'Basil', 103.88, 103.88],
    [1, 'Basil', 112.88, 'Ross', 100.58, 100.58],
    [4, 'Basil', 104.52, 'Jared', 98.52, 98.52],
];
