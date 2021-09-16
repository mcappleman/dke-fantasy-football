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
    ['Ean', 1, 1, 0, 0, 130.46, 126.76, 130.46, 126.76, 11, 0, 0, '100.00%', 1.00, 0.00, 0.00],
    ['Matt', 1, 1, 0, 0, 113.62, 70.78, 113.62, 70.78, 9, 2, 0, '81.82%', 0.82, 0.18, 0.18],
    ['Chaz', 1, 1, 0, 0, 107.5, 70.56, 107.50, 70.56, 7, 4, 0, '63.64%', 0.64, 0.36, 0.36],
    ['Majors', 1, 0, 1, 0, 87.58, 98.16, 87.58, 98.16, 3, 8, 0, '27.27%', 0.27, 0.73, -0.27],
    ['Trevor', 1, 1, 0, 0, 94.4, 50.92, 94.40, 50.92, 4, 7, 0, '36.36%', 0.36, 0.64, 0.64],
    ['Willis', 1, 0, 1, 0, 70.56, 107.5, 70.56, 107.50, 1, 10, 0, '9.09%', 0.09, 0.91, -0.09],
    ['Hunter', 1, 1, 0, 0, 98.16, 87.58, 98.16, 87.58, 5, 6, 0, '45.45%', 0.45, 0.55, 0.55],
    ['Basil', 1, 1, 0, 0, 112.88, 100.58, 112.88, 100.58, 8, 3, 0, '72.73%', 0.73, 0.27, 0.27],
    ['Sawyer', 1, 0, 1, 0, 70.78, 113.62, 70.78, 113.62, 2, 9, 0, '18.18%', 0.18, 0.82, -0.18],
    ['Ross', 1, 0, 1, 0, 100.58, 112.88, 100.58, 112.88, 6, 5, 0, '54.55%', 0.55, 0.45, -0.55],
    ['Jared', 1, 0, 1, 0, 50.92, 94.4, 50.92, 94.40, 0, 11, 0, '0.00%', 0.00, 1.00, 0.00],
    ['Sam', 1, 0, 1, 0, 126.76, 130.46, 126.76, 130.46, 10, 1, 0, '90.91%', 0.91, 0.09, -0.91],
];

var highScores2021 = [
    ['Ean', 1, 130.46, 'Sam'],
    ['Sam', 1, 126.76, 'Ean'],
    ['Matt', 1, 113.62, 'Sawyer'],
    ['Basil', 1, 112.88, 'Ross'],
    ['Chaz', 1, 107.5, 'Willis'],
    ['Ross', 1, 100.58, 'Basil'],
    ['Hunter', 1, 98.16, 'Majors'],
    ['Trevor', 1, 94.4, 'Jared'],
    ['Majors', 1, 87.58, 'Hunter'],
    ['Sawyer', 1, 70.78, 'Matt'],
];

var lowScores2021 = [
    ['Jared', 1, 50.92, 'Trevor'],
    ['Willis', 1, 70.56, 'Chaz'],
    ['Sawyer', 1, 70.78, 'Matt'],
    ['Majors', 1, 87.58, 'Hunter'],
    ['Trevor', 1, 94.4, 'Jared'],
    ['Hunter', 1, 98.16, 'Majors'],
    ['Ross', 1, 100.58, 'Basil'],
    ['Chaz', 1, 107.5, 'Willis'],
    ['Basil', 1, 112.88, 'Ross'],
    ['Matt', 1, 113.62, 'Sawyer'],
];

var blowouts2021 = [
    [1, 'Trevor', 94.40, 'Jared', 50.92, 43.48],
    [1, 'Matt', 113.62, 'Sawyer', 70.78, 42.84],
    [1, 'Chaz', 107.50, 'Willis', 70.56, 36.94],
    [1, 'Basil', 112.88, 'Ross', 100.58, 12.3],
    [1, 'Hunter', 98.16, 'Majors', 87.58, 10.58],
    [1, 'Ean', 130.46, 'Sam', 126.76, 3.7],
];

var closeGames2021 = [
    [1, 'Ean', 130.46, 'Sam', 126.76, 3.7],
    [1, 'Hunter', 98.16, 'Majors', 87.58, 10.58],
    [1, 'Basil', 112.88, 'Ross', 100.58, 12.3],
    [1, 'Chaz', 107.50, 'Willis', 70.56, 36.94],
    [1, 'Matt', 113.62, 'Sawyer', 70.78, 42.84],
    [1, 'Trevor', 94.40, 'Jared', 50.92, 43.48],
];

var highest2021 = [
    [1, 'Ean', 130.46, 'Sam', 126.76, 257.22],
    [1, 'Basil', 112.88, 'Ross', 100.58, 213.46],
    [1, 'Hunter', 98.16, 'Majors', 87.58, 185.74],
    [1, 'Matt', 113.62, 'Sawyer', 70.78, 184.40],
    [1, 'Chaz', 107.50, 'Willis', 70.56, 178.06],
    [1, 'Trevor', 94.40, 'Jared', 50.92, 145.32],
];

var dumpster2021 = [
    [1, 'Trevor', 94.40, 'Jared', 50.92, 145.32],
    [1, 'Chaz', 107.50, 'Willis', 70.56, 178.06],
    [1, 'Matt', 113.62, 'Sawyer', 70.78, 184.40],
    [1, 'Hunter', 98.16, 'Majors', 87.58, 185.74],
    [1, 'Basil', 112.88, 'Ross', 100.58, 213.46],
    [1, 'Ean', 130.46, 'Sam', 126.76, 257.22],
];

var fortunate2021 = [
    [1, 'Trevor', 94.40, 'Jared', 50.92, 94.40],
    [1, 'Hunter', 98.16, 'Majors', 87.58, 98.16],
    [1, 'Chaz', 107.50, 'Willis', 70.56, 107.50],
    [1, 'Basil', 112.88, 'Ross', 100.58, 112.88],
    [1, 'Matt', 113.62, 'Sawyer', 70.78, 113.62],
    [1, 'Ean', 130.46, 'Sam', 126.76, 130.46],
];

var unfortunate2021 = [
    [1, 'Ean', 130.46, 'Sam', 126.76, 126.76],
    [1, 'Basil', 112.88, 'Ross', 100.58, 100.58],
    [1, 'Hunter', 98.16, 'Majors', 87.58, 87.58],
    [1, 'Matt', 113.62, 'Sawyer', 70.78, 70.78],
    [1, 'Chaz', 107.50, 'Willis', 70.56, 70.56],
    [1, 'Trevor', 94.40, 'Jared', 50.92, 50.92],
];
