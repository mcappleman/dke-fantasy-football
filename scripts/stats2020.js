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
    ['Majors', 1, 0, 1, 0, 94.82, 103, 94.82, 103.00, 5, 6, 0, '45.45%', 0.45, 0.55, -0.45],
    ['Ross', 1, 0, 1, 0, 74.38, 92.04, 74.38, 92.04, 0, 11, 0, '0.00%', 0.00, 1.00, 0.00],
    ['Sam', 1, 0, 1, 0, 77.22, 124.3, 77.22, 124.30, 1, 10, 0, '9.09%', 0.09, 0.91, -0.09],
    ['Matt', 1, 1, 0, 0, 92.04, 74.38, 92.04, 74.38, 4, 7, 0, '36.36%', 0.36, 0.64, 0.64],
    ['Willis', 1, 0, 1, 0, 84.2, 115.7, 84.20, 115.70, 3, 8, 0, '27.27%', 0.27, 0.73, -0.27],
    ['Trevor', 1, 1, 0, 0, 115.7, 84.2, 115.70, 84.20, 10, 1, 0, '90.91%', 0.91, 0.09, 0.09],
    ['Ean', 1, 1, 0, 0, 124.3, 77.22, 124.30, 77.22, 11, 0, 0, '100.00%', 1.00, 0.00, 0.00],
    ['Hunter', 1, 1, 0, 0, 113.88, 78.24, 113.88, 78.24, 9, 2, 0, '81.82%', 0.82, 0.18, 0.18],
    ['Chaz', 1, 0, 1, 0, 96.4, 100.8, 96.40, 100.80, 6, 5, 0, '54.55%', 0.55, 0.45, -0.55],
    ['Basil', 1, 0, 1, 0, 78.24, 113.88, 78.24, 113.88, 2, 9, 0, '18.18%', 0.18, 0.82, -0.18],
    ['Sawyer', 1, 1, 0, 0, 103, 94.82, 103.00, 94.82, 8, 3, 0, '72.73%', 0.73, 0.27, 0.27],
    ['Jared', 1, 1, 0, 0, 100.8, 96.4, 100.80, 96.40, 7, 4, 0, '63.64%', 0.64, 0.36, 0.36]
];

var highScores2020 = [
    ['Ean', 1, 124.3, 'Sam'],
    ['Trevor', 1, 115.7, 'Willis'],
    ['Hunter', 1, 113.88, 'Basil'],
    ['Sawyer', 1, 103.0, 'Majors'],
    ['Jared', 1, 100.8, 'Chaz']
];

var lowScores2020 = [
    ['Ross', 1, 74.38, 'Matt'],
    ['Sam', 1, 77.22, 'Ean'],
    ['Basil', 1, 78.24, 'Hunter'],
    ['Willis', 1, 84.2, 'Trevor'],
    ['Matt', 1, 92.04, 'Ross']
];

var blowouts2020 = [
    [1, 'Ean', 124.30, 'Sam', 77.22, 47.08],
    [1, 'Hunter', 113.88, 'Basil', 78.24, 35.64],
    [1, 'Trevor', 115.70, 'Willis', 84.20, 31.5],
    [1, 'Matt', 92.04, 'Ross', 74.38, 17.66],
    [1, 'Sawyer', 103.00, 'Majors', 94.82, 8.18]
];

var closeGames2020 = [
    [1, 'Jared', 100.80, 'Chaz', 96.40, 4.4],
    [1, 'Sawyer', 103.00, 'Majors', 94.82, 8.18],
    [1, 'Matt', 92.04, 'Ross', 74.38, 17.66],
    [1, 'Trevor', 115.70, 'Willis', 84.20, 31.5],
    [1, 'Hunter', 113.88, 'Basil', 78.24, 35.64]
];

var highest2020 = [
    [1, 'Ean', 124.30, 'Sam', 77.22, 201.52],
    [1, 'Trevor', 115.70, 'Willis', 84.20, 199.90],
    [1, 'Sawyer', 103.00, 'Majors', 94.82, 197.82],
    [1, 'Jared', 100.80, 'Chaz', 96.40, 197.20],
    [1, 'Hunter', 113.88, 'Basil', 78.24, 192.12]
];

var dumpster2020 = [
    [1, 'Matt', 92.04, 'Ross', 74.38, 166.42],
    [1, 'Hunter', 113.88, 'Basil', 78.24, 192.12],
    [1, 'Jared', 100.80, 'Chaz', 96.40, 197.20],
    [1, 'Sawyer', 103.00, 'Majors', 94.82, 197.82],
    [1, 'Trevor', 115.70, 'Willis', 84.20, 199.90]
];
