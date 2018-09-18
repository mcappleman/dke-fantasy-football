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
    ['Matt', 2, 2, 0, 0, 238.58, 187.44, 119.29, 93.72, 20, 2, 0, '90.91%', 1.82, 0.18, 0.18],
    ['Majors', 2, 1, 1, 0, 215.02, 211.92, 107.51, 105.96, 13, 9, 0, '59.09%', 1.18, 0.82, -0.18],
    ['Sawyer', 2, 1, 1, 0, 210.34, 205.28, 105.17, 102.64, 13, 9, 0, '59.09%', 1.18, 0.82, -0.18],
    ['Chaz', 2, 2, 0, 0, 206.28, 158.5, 103.14, 79.25, 12, 9, 1, '56.82%', 1.14, 0.86, 0.86],
    ['Basil', 2, 2, 0, 0, 205.4, 182.2, 102.70, 91.10, 11, 10, 1, '52.27%', 1.05, 0.95, 0.95],
    ['Hunter', 2, 2, 0, 0, 203.72, 173.12, 101.86, 86.56, 14, 8, 0, '63.64%', 1.27, 0.73, 0.73],
    ['Jared', 2, 1, 1, 0, 188, 170.76, 94.00, 85.38, 10, 12, 0, '45.45%', 0.91, 1.09, 0.09],
    ['Ean', 2, 0, 2, 0, 187.9, 212.28, 93.95, 106.14, 8, 14, 0, '36.36%', 0.73, 1.27, -0.73],
    ['Sam', 2, 0, 2, 0, 187.34, 231.06, 93.67, 115.53, 10, 12, 0, '45.45%', 0.91, 1.09, -0.91],
    ['Trevor', 2, 1, 1, 0, 179.18, 180.68, 89.59, 90.34, 9, 13, 0, '40.91%', 0.82, 1.18, 0.18],
    ['Ross', 2, 0, 2, 0, 171.58, 216.74, 85.79, 108.37, 7, 15, 0, '31.82%', 0.64, 1.36, -0.64],
    ['Willis', 2, 0, 2, 0, 160.18, 223.54, 80.09, 111.77, 4, 18, 0, '18.18%', 0.36, 1.64, -0.36]
];

var highScores2018 = [
    ['Matt', 1, 131.7, 'Sam'],
    ['Sawyer', 2, 120.7, 'Majors'],
    ['Sam', 1, 118.48, 'Matt'],
    ['Majors', 1, 116.66, 'Willis'],
    ['Hunter', 2, 108.58, 'Ross']
];


var lowScores2018 = [
    ['Sam', 2, 68.86, 'Chaz'],
    ['Willis', 2, 68.96, 'Matt'],
    ['Ross', 1, 71.4, 'Jared'],
    ['Trevor', 1, 72.94, 'Hunter'],
    ['Jared', 2, 79.84, 'Hunter']
];

var blowouts2018 = [
    [2, 'Matt', 106.88, 'Willis', 68.96, 37.92],
    [1, 'Jared', 108.16, 'Ross', 71.4, 36.76],
    [2, 'Chaz', 99.36, 'Sam', 68.86, 30.5],
    [1, 'Majors', 116.66, 'Willis', 91.22, 25.44],
    [2, 'Sawyer', 120.7, 'Majors', 98.36, 22.34]
];

var closeGames2018 = [
    [1, 'Ean', 102.36, 'Basil', 106.04, 3.68],
    [2, 'Hunter', 108.58, 'Ross', 100.18, 8.4],
    [1, 'Matt', 131.7, 'Sam', 118.48, 13.22],
    [1, 'Chaz', 106.92, 'Sawyer', 89.64, 17.28],
    [2, 'Basil', 99.36, 'Jared', 79.84, 19.52]
];

var highest2018 = [
    [1, 'Matt', 131.7, 'Sam', 118.48, 250.18],
    [2, 'Sawyer', 120.7, 'Majors', 98.36, 219.06],
    [2, 'Hunter', 108.58, 'Ross', 100.18, 208.76],
    [1, 'Ean', 102.36, 'Basil', 106.04, 208.4],
    [1, 'Majors', 116.66, 'Willis', 91.22, 207.88]
];

var dumpster2018 = [
    [1, 'Hunter', 95.14, 'Trevor', 72.94, 168.08],
    [2, 'Chaz', 99.36, 'Sam', 68.86, 168.22],
    [2, 'Matt', 106.88, 'Willis', 68.96, 175.84],
    [2, 'Basil', 99.36, 'Jared', 79.84, 179.2],
    [1, 'Jared', 108.16, 'Ross', 71.4, 179.56]
];
