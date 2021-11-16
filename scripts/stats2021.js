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
    ['Sawyer', 8, 6, 2, 0, 810.02, 784.68, 101.25, 98.09, 57, 31, 0, '64.77%', 5.18, 2.82, 0.82],
    ['Matt', 8, 6, 2, 0, 842.82, 736.32, 105.35, 92.04, 58, 30, 0, '65.91%', 5.27, 2.73, 0.73],
    ['Sam', 8, 4, 4, 0, 869.1, 869.24, 108.64, 108.66, 59, 29, 0, '67.05%', 5.36, 2.64, -1.36],
    ['Basil', 8, 5, 3, 0, 818.32, 782.34, 102.29, 97.79, 50, 38, 0, '56.82%', 4.55, 3.45, 0.45],
    ['Hunter', 8, 6, 2, 0, 846.44, 810.16, 105.81, 101.27, 52, 36, 0, '59.09%', 4.73, 3.27, 1.27],
    ['Ean', 8, 4, 4, 0, 811.54, 794.94, 101.44, 99.37, 43, 45, 0, '48.86%', 3.91, 4.09, 0.09],
    ['Majors', 8, 4, 4, 0, 813.78, 746.98, 101.72, 93.37, 41, 47, 0, '46.59%', 3.73, 4.27, 0.27],
    ['Chaz', 8, 5, 3, 0, 807.62, 791.36, 100.95, 98.92, 48, 40, 0, '54.55%', 4.36, 3.64, 0.64],
    ['Willis', 8, 3, 5, 0, 703.14, 754.62, 87.89, 94.33, 34, 53, 1, '39.20%', 3.14, 4.86, -0.14],
    ['Trevor', 8, 3, 5, 0, 720.16, 759.08, 90.02, 94.89, 34, 54, 0, '38.64%', 3.09, 4.91, -0.09],
    ['Ross', 8, 0, 8, 0, 722.4, 812.54, 90.30, 101.57, 31, 56, 1, '35.80%', 2.86, 5.14, -2.86],
    ['Jared', 8, 2, 6, 0, 647.98, 771.06, 81.00, 96.38, 20, 68, 0, '22.73%', 1.82, 6.18, 0.18],
];

var highScores2021 = [
    ['Sawyer', 5, 147.3, 'Hunter'],
    ['Ean', 2, 143.00, 'Majors'],
    ['Sam', 5, 140.64, 'Trevor'],
    ['Majors', 6, 139.9, 'Sam'],
    ['Hunter', 6, 139.84, 'Basil'],
    ['Ean', 5, 136.86, 'Ross'],
    ['Ean', 1, 130.46, 'Sam'],
    ['Majors', 7, 129.74, 'Sawyer'],
    ['Sam', 8, 128.3, 'Chaz'],
    ['Sam', 1, 126.76, 'Ean'],
];

var lowScores2021 = [
    ['Willis', 8, 36.04, 'Basil'],
    ['Ross', 10, 46.9, 'Majors'],
    ['Willis', 10, 48.28, 'Sawyer'],
    ['Jared', 1, 50.92, 'Trevor'],
    ['Chaz', 9, 57.66, 'Sawyer'],
    ['Sam', 6, 57.88, 'Majors'],
    ['Trevor', 3, 60.38, 'Matt'],
    ['Jared', 3, 61.74, 'Majors'],
    ['Ean', 8, 62.96, 'Hunter'],
    ['Jared', 10, 64.08, 'Sam'],
];

var blowouts2021 = [
    [6, 'Majors', 139.90, 'Sam', 57.88, 82.02],
    [10, 'Sawyer', 125.08, 'Willis', 48.28, 76.8],
    [10, 'Majors', 116.94, 'Ross', 46.90, 70.04],
    [2, 'Ean', 143.00, 'Majors', 74.10, 68.9],
    [9, 'Sam', 117.74, 'Basil', 68.84, 48.9],
    [9, 'Hunter', 109.80, 'Jared', 64.42, 45.38],
    [8, 'Basil', 80.50, 'Willis', 36.04, 44.46],
    [1, 'Trevor', 94.40, 'Jared', 50.92, 43.48],
    [1, 'Matt', 113.62, 'Sawyer', 70.78, 42.84],
    [3, 'Matt', 101.52, 'Trevor', 60.38, 41.14],
];

var closeGames2021 = [
    [2, 'Trevor', 95.76, 'Ross', 94.92, 0.84],
    [7, 'Hunter', 101.64, 'Sam', 100.64, 1],
    [8, 'Jared', 79.26, 'Majors', 78.02, 1.24],
    [9, 'Trevor', 78.04, 'Majors', 75.38, 2.66],
    [3, 'Chaz', 112.52, 'Sam', 109.58, 2.94],
    [8, 'Matt', 100.18, 'Trevor', 96.94, 3.24],
    [8, 'Sawyer', 85.40, 'Ross', 82.02, 3.38],
    [1, 'Ean', 130.46, 'Sam', 126.76, 3.7],
    [4, 'Hunter', 98.06, 'Ross', 94.08, 3.98],
    [7, 'Jared', 73.26, 'Ean', 68.94, 4.32],
];

var highest2021 = [
    [1, 'Ean', 130.46, 'Sam', 126.76, 257.22],
    [5, 'Sawyer', 147.30, 'Hunter', 108.24, 255.54],
    [6, 'Hunter', 139.84, 'Basil', 111.28, 251.12],
    [5, 'Sam', 140.64, 'Trevor', 109.58, 250.22],
    [5, 'Ean', 136.86, 'Ross', 110.32, 247.18],
    [8, 'Sam', 128.30, 'Chaz', 115.30, 243.60],
    [2, 'Hunter', 118.32, 'Matt', 113.68, 232.00],
    [5, 'Majors', 123.32, 'Basil', 103.88, 227.20],
    [3, 'Chaz', 112.52, 'Sam', 109.58, 222.10],
    [7, 'Majors', 129.74, 'Sawyer', 89.56, 219.30],
];

var dumpster2021 = [
    [8, 'Basil', 80.50, 'Willis', 36.04, 116.54],
    [9, 'Sawyer', 70.26, 'Chaz', 57.66, 127.92],
    [7, 'Chaz', 74.00, 'Ross', 66.54, 140.54],
    [7, 'Jared', 73.26, 'Ean', 68.94, 142.20],
    [1, 'Trevor', 94.40, 'Jared', 50.92, 145.32],
    [3, 'Majors', 87.14, 'Jared', 61.74, 148.88],
    [10, 'Sam', 86.10, 'Jared', 64.08, 150.18],
    [9, 'Trevor', 78.04, 'Majors', 75.38, 153.42],
    [6, 'Sawyer', 85.24, 'Trevor', 69.48, 154.72],
    [9, 'Willis', 80.62, 'Ean', 75.96, 156.58],
];

var fortunate2021 = [
    [9, 'Sawyer', 70.26, 'Chaz', 57.66, 70.26],
    [7, 'Jared', 73.26, 'Ean', 68.94, 73.26],
    [7, 'Chaz', 74.00, 'Ross', 66.54, 74.00],
    [9, 'Trevor', 78.04, 'Majors', 75.38, 78.04],
    [8, 'Jared', 79.26, 'Majors', 78.02, 79.26],
    [8, 'Basil', 80.50, 'Willis', 36.04, 80.50],
    [9, 'Willis', 80.62, 'Ean', 75.96, 80.62],
    [6, 'Sawyer', 85.24, 'Trevor', 69.48, 85.24],
    [8, 'Sawyer', 85.40, 'Ross', 82.02, 85.40],
    [10, 'Sam', 86.10, 'Jared', 64.08, 86.10],
];

var unfortunate2021 = [
    [1, 'Ean', 130.46, 'Sam', 126.76, 126.76],
    [8, 'Sam', 128.30, 'Chaz', 115.30, 115.30],
    [2, 'Hunter', 118.32, 'Matt', 113.68, 113.68],
    [6, 'Hunter', 139.84, 'Basil', 111.28, 111.28],
    [5, 'Ean', 136.86, 'Ross', 110.32, 110.32],
    [3, 'Chaz', 112.52, 'Sam', 109.58, 109.58],
    [5, 'Sam', 140.64, 'Trevor', 109.58, 109.58],
    [5, 'Sawyer', 147.30, 'Hunter', 108.24, 108.24],
    [5, 'Majors', 123.32, 'Basil', 103.88, 103.88],
    [7, 'Hunter', 101.64, 'Sam', 100.64, 100.64],
];
