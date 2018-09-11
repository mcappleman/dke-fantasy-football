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
    ['Majors', 1, 1, 0, 0, 116.66, 91.22, 116.66, 91.22, 9, 2, 0, '81.82%', 0.82, 0.18, 0.18],
    ['Trevor', 1, 0, 1, 0, 72.94, 95.14, 72.94, 95.14, 1, 10, 0, '9.09%', 0.09, 0.91, -0.09],
    ['Matt', 1, 1, 0, 0, 131.7, 118.48, 131.70, 118.48, 11, 0, 0, '100.00%', 1.00, 0.00, 0.00],
    ['Sam', 1, 0, 1, 0, 118.48, 131.7, 118.48, 131.70, 10, 1, 0, '90.91%', 0.91, 0.09, -0.91],
    ['Basil', 1, 1, 0, 0, 106.04, 102.36, 106.04, 102.36, 6, 5, 0, '54.55%', 0.55, 0.45, 0.45],
    ['Willis', 1, 0, 1, 0, 91.22, 116.66, 91.22, 116.66, 3, 8, 0, '27.27%', 0.27, 0.73, -0.27],
    ['Hunter', 1, 1, 0, 0, 95.14, 72.94, 95.14, 72.94, 4, 7, 0, '36.36%', 0.36, 0.64, 0.64],
    ['Chaz', 1, 1, 0, 0, 106.92, 89.64, 106.92, 89.64, 7, 4, 0, '63.64%', 0.64, 0.36, 0.36],
    ['Ean', 1, 0, 1, 0, 102.36, 106.04, 102.36, 106.04, 5, 6, 0, '45.45%', 0.45, 0.55, -0.45],
    ['Sawyer', 1, 0, 1, 0, 89.64, 106.92, 89.64, 106.92, 2, 9, 0, '18.18%', 0.18, 0.82, -0.18],
    ['Ross', 1, 0, 1, 0, 71.4, 108.16, 71.40, 108.16, 0, 11, 0, '0.00%', 0.00, 1.00, 0.00],
    ['Jared', 1, 1, 0, 0, 108.16, 71.4, 108.16, 71.40, 8, 3, 0, '72.73%', 0.73, 0.27, 0.27]
];

var highScores2018 = [
    ['Matt', 1, 131.7, 'Sam'],
    ['Sam', 1, 118.48, 'Matt'],
    ['Majors', 1, 116.66, 'Willis'],
    ['Jared', 1, 108.16, 'Ross'],
    ['Chaz', 1, 106.92, 'Sawyer']
];


var lowScores2018 = [
    ['Ross', 1, 71.4, 'Jared'],
    ['Trevor', 1, 72.94, 'Hunter'],
    ['Sawyer', 1, 89.64, 'Chaz'],
    ['Willis', 1, 91.22, 'Majors'],
    ['Hunter', 1, 95.14, 'Trevor']
];

var blowouts2018 = [
    [1, 'Jared', 108.16, 'Ross', 71.4, 36.76],
    [1, 'Majors', 116.66, 'Willis', 91.22, 25.44],
    [1, 'Hunter', 95.14, 'Trevor', 72.94, 22.2],
    [1, 'Chaz', 106.92, 'Sawyer', 89.64, 17.28],
    [1, 'Matt', 131.7, 'Sam', 118.48, 13.22]
];

var closeGames2018 = [
    [1, 'Ean', 102.36, 'Basil', 106.04, 3.68],
    [1, 'Matt', 131.7, 'Sam', 118.48, 13.22],
    [1, 'Chaz', 106.92, 'Sawyer', 89.64, 17.28],
    [1, 'Hunter', 95.14, 'Trevor', 72.94, 22.2],
    [1, 'Majors', 116.66, 'Willis', 91.22, 25.44]
];

var highest2018 = [
    [1, 'Matt', 131.7, 'Sam', 118.48, 250.18],
    [1, 'Ean', 102.36, 'Basil', 106.04, 208.4],
    [1, 'Majors', 116.66, 'Willis', 91.22, 207.88],
    [1, 'Chaz', 106.92, 'Sawyer', 89.64, 196.56],
    [1, 'Jared', 108.16, 'Ross', 71.4, 179.56]
];

var dumpster2018 = [
    [1, 'Hunter', 95.14, 'Trevor', 72.94, 168.08],
    [1, 'Jared', 108.16, 'Ross', 71.4, 179.56],
    [1, 'Chaz', 106.92, 'Sawyer', 89.64, 196.56],
    [1, 'Majors', 116.66, 'Willis', 91.22, 207.88],
    [1, 'Ean', 102.36, 'Basil', 106.04, 208.4]
];
