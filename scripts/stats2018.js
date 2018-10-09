$(document).ready(function () {

    $('#table2018').DataTable({
        order: [[2, "desc"]],
        searching: false,
        sDom: '',
        lengthMenu: [[-1], ["All"]],
        data: data2018,
        columns: yearColumnNames
    });

    $('#highScores2018').DataTable({
        order: [[2, "desc"]],
        sDom: '',
        data: highScores2018,
        columns: scoreColumnNames
    });

    $('#lowScores2018').DataTable({
        order: [[2, "asc"]],
        sDom: '',
        data: lowScores2018,
        columns: scoreColumnNames
    });

    $('#blowouts2018').DataTable({
        order: [[5, "desc"]],
        sDom: '',
        data: blowouts2018,
        columns: gameColumnNames
    });

    $('#closeGames2018').DataTable({
        order: [[5, "asc"]],
        sDom: '',
        data: closeGames2018,
        columns: gameColumnNames
    });

    $('#highest2018').DataTable({
        order: [[5, "desc"]],
        sDom: '',
        data: highest2018,
        columns: gameScoringColumnNames
    });

    $('#dumpster2018').DataTable({
        order: [[5, "asc"]],
        sDom: '',
        data: dumpster2018,
        columns: gameScoringColumnNames
    });

});

var data2018 = [
    ['Matt', 5, 3, 2, 0, 543.78, 458.48, 108.76, 91.70, 37, 18, 0, '67.27%', 3.36, 1.64, -0.36],
    ['Majors', 5, 3, 2, 0, 554.22, 519.72, 110.84, 103.94, 32, 23, 0, '58.18%', 2.91, 2.09, 0.09],
    ['Sawyer', 5, 2, 3, 0, 463.6, 513.24, 92.72, 102.65, 25, 30, 0, '45.45%', 2.27, 2.73, -0.27],
    ['Basil', 5, 5, 0, 0, 561.2, 385.3, 112.24, 77.06, 43, 12, 0, '78.18%', 3.91, 1.09, 1.09],
    ['Jared', 5, 3, 2, 0, 504.24, 537.68, 100.85, 107.54, 33, 22, 0, '60.00%', 3.00, 2.00, 0.00],
    ['Chaz', 5, 4, 1, 0, 444.74, 395.22, 88.95, 79.04, 19, 36, 0, '34.55%', 1.73, 3.27, 2.27],
    ['Ean', 5, 0, 5, 0, 496, 571.84, 99.20, 114.37, 30, 25, 0, '54.55%', 2.73, 2.27, -2.73],
    ['Trevor', 5, 3, 2, 0, 482.22, 482.82, 96.44, 96.56, 30, 25, 0, '54.55%', 2.73, 2.27, 0.27],
    ['Sam', 5, 2, 3, 0, 473.8, 474.62, 94.76, 94.92, 27, 28, 0, '49.09%', 2.45, 2.55, -0.45],
    ['Hunter', 5, 4, 1, 0, 463, 432.66, 92.60, 86.53, 26, 29, 0, '47.27%', 2.36, 2.64, 1.64],
    ['Ross', 5, 0, 5, 0, 403.74, 520.94, 80.75, 104.19, 13, 42, 0, '23.64%', 1.18, 3.82, -1.18],
    ['Willis', 5, 1, 4, 0, 427.48, 525.5, 85.50, 105.10, 15, 40, 0, '27.27%', 1.36, 3.64, -0.36]
];

var highScores2018 = [
    ['Majors', 4, 176.56, 'Jared'],
    ['Matt', 1, 131.7, 'Sam'],
    ['Basil', 4, 131.62, 'Sawyer'],
    ['Willis', 4, 129.2, 'Ean'],
    ['Basil', 5, 125.58, 'Ross']
];


var lowScores2018 = [
    ['Willis', 3, 59.76, 'Sawyer'],
    ['Ross', 5, 61.94, 'Basil'],
    ['Hunter', 3, 63.38, 'Hunter'],
    ['Majors', 5, 68.4, 'Matt'],
    ['Sam', 2, 68.86, 'Chaz']
];

var blowouts2018 = [
    [4, 'Majors', 176.56, 'Jared', 104.58, 71.98],
    [5, 'Basil', 125.58, 'Ross', 61.94, 63.64],
    [4, 'Basil', 131.62, 'Sawyer', 77.78, 53.84],
    [5, 'Matt', 116.1, 'Majors', 68.4, 47.7],
    [2, 'Matt', 106.88, 'Willis', 68.96, 37.92]
];

var closeGames2018 = [
    [3, 'Trevor', 95.86, 'Ross', 94.22, 1.64],
    [4, 'Trevor', 114.46, 'Matt', 111.9, 2.56],
    [5, 'Jared', 96.02, 'Trevor', 92.72, 3.3],
    [1, 'Ean', 102.36, 'Basil', 106.04, 3.68],
    [4, 'Sam', 82.76, 'Ross', 76, 6.76]
];

var highest2018 = [
    [4, 'Majors', 176.56, 'Jared', 104.58, 281.14],
    [1, 'Matt', 131.7, 'Sam', 118.48, 250.18],
    [4, 'Willis', 129.2, 'Ean', 120.2, 249.4],
    [4, 'Trevor', 114.46, 'Matt', 111.9, 226.36],
    [2, 'Sawyer', 120.7, 'Majors', 98.36, 219.06]
];

var dumpster2018 = [
    [4, 'Hunter', 81.18, 'Chaz', 70.68, 151.86],
    [3, 'Sawyer', 95.74, 'Willis', 59.76, 155.5],
    [4, 'Sam', 82.76, 'Ross', 76, 158.76],
    [3, 'Basil', 98.6, 'Hunter', 63.38, 161.98],
    [5, 'Chaz', 96.02, 'Willis', 78.34, 164.36]
];
