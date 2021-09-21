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
    ['Ean', 2, 2, 0, 0, 273.46, 200.86, 136.73, 100.43, 22, 0, 0, '100.00%', 2.00, 0.00, 0.00],
    ['Hunter', 2, 2, 0, 0, 216.48, 201.26, 108.24, 100.63, 15, 7, 0, '68.18%', 1.36, 0.64, 0.64],
    ['Chaz', 2, 2, 0, 0, 209.46, 164.76, 104.73, 82.38, 14, 8, 0, '63.64%', 1.27, 0.73, 0.73],
    ['Trevor', 2, 2, 0, 0, 190.16, 145.84, 95.08, 72.92, 9, 13, 0, '40.91%', 0.82, 1.18, 1.18],
    ['Matt', 2, 1, 1, 0, 227.3, 189.1, 113.65, 94.55, 18, 4, 0, '81.82%', 1.64, 0.36, -0.64],
    ['Sam', 2, 1, 1, 0, 219.2, 213.98, 109.60, 106.99, 12, 10, 0, '54.55%', 1.09, 0.91, -0.09],
    ['Basil', 2, 1, 1, 0, 209.5, 205.7, 104.75, 102.85, 14, 8, 0, '63.64%', 1.27, 0.73, -0.27],
    ['Sawyer', 2, 1, 1, 0, 175.9, 210.24, 87.95, 105.12, 10, 12, 0, '45.45%', 0.91, 1.09, 0.09],
    ['Ross', 2, 0, 2, 0, 195.5, 208.64, 97.75, 104.32, 10, 12, 0, '45.45%', 0.91, 1.09, -0.91],
    ['Majors', 2, 0, 2, 0, 161.68, 241.16, 80.84, 120.58, 3, 19, 0, '13.64%', 0.27, 1.73, -0.27],
    ['Willis', 2, 0, 2, 0, 154.08, 199.94, 77.04, 99.97, 2, 20, 0, '9.09%', 0.18, 1.82, -0.18],
    ['Jared', 2, 0, 2, 0, 145.12, 196.36, 72.56, 98.18, 3, 19, 0, '13.64%', 0.27, 1.73, -0.27]
];

var highScores2021 = [
    ['Ean', 2, 143.00, 'Majors'],
    ['Ean', 1, 130.46, 'Sam'],
    ['Sam', 1, 126.76, 'Ean'],
    ['Hunter', 1, 118.32, 'Matt'],
    ['Matt', 2, 113.68, 'Hunter'],
    ['Matt', 1, 113.62, 'Sawyer'],
    ['Basil', 1, 112.88, 'Ross'],
    ['Chaz', 1, 107.5, 'Willis'],
    ['Sawyer', 2, 105.12, 'Basil'],
    ['Chaz', 2, 101.96, 'Jared'],
];

var lowScores2021 = [
    ['Jared', 1, 50.92, 'Trevor'],
    ['Willis', 1, 70.56, 'Chaz'],
    ['Sawyer', 1, 70.78, 'Matt'],
    ['Majors', 2, 74.1, 'Ean'],
    ['Willis', 2, 83.52, 'Sam'],
    ['Majors', 1, 87.58, 'Hunter'],
    ['Sam', 2, 92.44, 'Willis'],
    ['Jared', 2, 94.2, 'Chaz'],
    ['Trevor', 1, 94.4, 'Jared'],
    ['Ross', 2, 94.92, 'Trevor']
];

var blowouts2021 = [
    [2, 'Ean', 143.00, 'Majors', 74.10, 68.9],
    [1, 'Trevor', 94.40, 'Jared', 50.92, 43.48],
    [1, 'Matt', 113.62, 'Sawyer', 70.78, 42.84],
    [1, 'Chaz', 107.50, 'Willis', 70.56, 36.94],
    [1, 'Basil', 112.88, 'Ross', 100.58, 12.3],
    [1, 'Hunter', 98.16, 'Majors', 87.58, 10.58],
    [2, 'Sam', 92.44, 'Willis', 83.52, 8.92],
    [2, 'Sawyer', 105.12, 'Basil', 96.62, 8.5],
    [2, 'Chaz', 101.96, 'Jared', 94.20, 7.76],
    [2, 'Hunter', 118.32, 'Matt', 113.68, 4.64],
];

var closeGames2021 = [
    [2, 'Trevor', 95.76, 'Ross', 94.92, 0.84],
    [1, 'Ean', 130.46, 'Sam', 126.76, 3.7],
    [2, 'Hunter', 118.32, 'Matt', 113.68, 4.64],
    [2, 'Chaz', 101.96, 'Jared', 94.20, 7.76],
    [2, 'Sawyer', 105.12, 'Basil', 96.62, 8.5],
    [2, 'Sam', 92.44, 'Willis', 83.52, 8.92],
    [1, 'Hunter', 98.16, 'Majors', 87.58, 10.58],
    [1, 'Basil', 112.88, 'Ross', 100.58, 12.3],
    [1, 'Chaz', 107.50, 'Willis', 70.56, 36.94],
    [1, 'Matt', 113.62, 'Sawyer', 70.78, 42.84],
];

var highest2021 = [
    [1, 'Ean', 130.46, 'Sam', 126.76, 257.22],
    [2, 'Hunter', 118.32, 'Matt', 113.68, 232.00],
    [2, 'Ean', 143.00, 'Majors', 74.10, 217.10],
    [1, 'Basil', 112.88, 'Ross', 100.58, 213.46],
    [2, 'Sawyer', 105.12, 'Basil', 96.62, 201.74],
    [2, 'Chaz', 101.96, 'Jared', 94.20, 196.16],
    [2, 'Trevor', 95.76, 'Ross', 94.92, 190.68],
    [1, 'Hunter', 98.16, 'Majors', 87.58, 185.74],
    [1, 'Matt', 113.62, 'Sawyer', 70.78, 184.40],
    [1, 'Chaz', 107.50, 'Willis', 70.56, 178.06],
];

var dumpster2021 = [
    [1, 'Trevor', 94.40, 'Jared', 50.92, 145.32],
    [2, 'Sam', 92.44, 'Willis', 83.52, 175.96],
    [1, 'Chaz', 107.50, 'Willis', 70.56, 178.06],
    [1, 'Matt', 113.62, 'Sawyer', 70.78, 184.40],
    [1, 'Hunter', 98.16, 'Majors', 87.58, 185.74],
    [2, 'Trevor', 95.76, 'Ross', 94.92, 190.68],
    [2, 'Chaz', 101.96, 'Jared', 94.20, 196.16],
    [2, 'Sawyer', 105.12, 'Basil', 96.62, 201.74],
    [1, 'Basil', 112.88, 'Ross', 100.58, 213.46],
    [2, 'Ean', 143.00, 'Majors', 74.10, 217.10],
];

var fortunate2021 = [
    [2, 'Sam', 92.44, 'Willis', 83.52, 92.44],
    [1, 'Trevor', 94.40, 'Jared', 50.92, 94.40],
    [2, 'Trevor', 95.76, 'Ross', 94.92, 95.76],
    [1, 'Hunter', 98.16, 'Majors', 87.58, 98.16],
    [2, 'Chaz', 101.96, 'Jared', 94.20, 101.96],
    [2, 'Sawyer', 105.12, 'Basil', 96.62, 105.12],
    [1, 'Chaz', 107.50, 'Willis', 70.56, 107.50],
    [1, 'Basil', 112.88, 'Ross', 100.58, 112.88],
    [1, 'Matt', 113.62, 'Sawyer', 70.78, 113.62],
    [2, 'Hunter', 118.32, 'Matt', 113.68, 118.32],
];

var unfortunate2021 = [
    [1, 'Ean', 130.46, 'Sam', 126.76, 126.76],
    [2, 'Hunter', 118.32, 'Matt', 113.68, 113.68],
    [1, 'Basil', 112.88, 'Ross', 100.58, 100.58],
    [2, 'Sawyer', 105.12, 'Basil', 96.62, 96.62],
    [2, 'Trevor', 95.76, 'Ross', 94.92, 94.92],
    [2, 'Chaz', 101.96, 'Jared', 94.20, 94.20],
    [1, 'Hunter', 98.16, 'Majors', 87.58, 87.58],
    [2, 'Sam', 92.44, 'Willis', 83.52, 83.52],
    [2, 'Ean', 143.00, 'Majors', 74.10, 74.10],
    [1, 'Matt', 113.62, 'Sawyer', 70.78, 70.78],
];
