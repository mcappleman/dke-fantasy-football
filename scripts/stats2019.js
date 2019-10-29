$(document).ready(function () {

    $('#table2019').DataTable({
        order: [[2, "desc"]],
        searching: false,
        sDom: '',
        lengthMenu: [[-1], ["All"]],
        data: data2019,
        columns: yearColumnNames
    });

    $('#highScores2019').DataTable({
        order: [[2, "desc"]],
        sDom: '',
        data: highScores2019,
        columns: scoreColumnNames
    });

    $('#lowScores2019').DataTable({
        order: [[2, "asc"]],
        sDom: '',
        data: lowScores2019,
        columns: scoreColumnNames
    });

    $('#blowouts2019').DataTable({
        order: [[5, "desc"]],
        sDom: '',
        data: blowouts2019,
        columns: gameColumnNames
    });

    $('#closeGames2019').DataTable({
        order: [[5, "asc"]],
        sDom: '',
        data: closeGames2019,
        columns: gameColumnNames
    });

    $('#highest2019').DataTable({
        order: [[5, "desc"]],
        sDom: '',
        data: highest2019,
        columns: gameScoringColumnNames
    });

    $('#dumpster2019').DataTable({
        order: [[5, "asc"]],
        sDom: '',
        data: dumpster2019,
        columns: gameScoringColumnNames
    });

});

var data2019 = [
    ['Basil', 8, 2, 6, 0, 630.66, 807.44, 78.83, 100.93, 23, 65, 0, '26.14%', 2.09, 5.91, -0.09],
    ['Matt', 8, 6, 2, 0, 813.92, 724.02, 101.74, 90.50, 51, 37, 0, '57.95%', 4.64, 3.36, 1.36],
    ['Majors', 8, 5, 3, 0, 816.54, 720.92, 102.07, 90.12, 55, 33, 0, '62.50%', 5.00, 3.00, 0.00],
    ['Trevor', 8, 3, 5, 0, 746.12, 811.46, 93.27, 101.43, 40, 48, 0, '45.45%', 3.64, 4.36, -0.64],
    ['Sam', 8, 5, 3, 0, 829.44, 767.72, 103.68, 95.97, 53, 35, 0, '60.23%', 4.82, 3.18, 0.18],
    ['Hunter', 8, 4, 4, 0, 743.12, 789.92, 92.89, 98.74, 37, 51, 0, '42.05%', 3.36, 4.64, 0.64],
    ['Ross', 8, 3, 5, 0, 855.06, 851.26, 106.88, 106.41, 55, 33, 0, '62.50%', 5.00, 3.00, -2.00],
    ['Sawyer', 8, 4, 4, 0, 744.16, 670.7, 93.02, 83.84, 41, 47, 0, '46.59%', 3.73, 4.27, 0.27],
    ['Ean', 8, 4, 4, 0, 760.72, 771.78, 95.09, 96.47, 43, 45, 0, '48.86%', 3.91, 4.09, 0.09],
    ['Jared', 8, 2, 6, 0, 661.78, 784.02, 82.72, 98.00, 29, 59, 0, '32.95%', 2.64, 5.36, -0.64],
    ['Willis', 8, 6, 2, 0, 851.38, 755.32, 106.42, 94.42, 58, 30, 0, '65.91%', 5.27, 2.73, 0.73],
    ['Chaz', 8, 4, 4, 0, 755.42, 753.76, 94.43, 94.22, 43, 45, 0, '48.86%', 3.91, 4.09, 0.09]
];

var highScores2019 = [
    ['Ross', 8, 143.3, 'Sam'],
    ['Basil', 5, 142.32, 'Ross'],
    ['Willis', 3, 140.56, 'Jared'],
    ['Ross', 5, 133.12, 'Basil'],
    ['Matt', 8, 129.44, 'Ean']
];


var lowScores2019 = [
    ['Basil', 4, 33.5, 'Sawyer'],
    ['Jared', 1, 56.64, 'Basil'],
    ['Willis', 7, 58.26, 'Sawyer'],
    ['Jared', 6, 58.72, 'Matt'],
    ['Basil', 8, 60.36, 'Majors']
];

var blowouts2019 = [
    [4, 'Sawyer', 105.34, 'Basil', 33.50, 71.84],
    [3, 'Willis', 140.56, 'Jared', 78.22, 62.34],
    [8, 'Chaz', 116.24, 'Hunter', 68.98, 47.26],
    [3, 'Matt', 127.44, 'Basil', 82.54, 44.9],
    [7, 'Sawyer', 102.98, 'Willis', 58.26, 44.72]
];

var closeGames2019 = [
    [2, 'Hunter', 90.4, 'Matt', 89.26, 1.14],
    [4, 'Matt', 89.52, 'Sam', 87.00, 2.52],
    [1, 'Sam', 112.12, 'Sawyer', 109.5, 2.62],
    [1, 'Willis', 107.26, 'Hunter', 104.34, 2.92],
    [2, 'Ean', 103.16, 'Majors', 98.74, 4.42]
];

var highest2019 = [
    [5, 'Basil', 142.32, 'Ross', 133.12, 275.44],
    [8, 'Ross', 143.30, 'Sam', 103.26, 246.56],
    [3, 'Hunter', 124.64, 'Ross', 116.60, 241.24],
    [8, 'Matt', 129.44, 'Ean', 104.70, 234.14],
    [1, 'Majors', 122.62, 'Trevor', 107.72, 230.34]
];

var dumpster2019 = [
    [1, 'Basil', 81.26, 'Jared', 56.64, 137.9],
    [4, 'Sawyer', 105.34, 'Basil', 33.50, 138.84],
    [6, 'Matt', 82.58, 'Jared', 58.72, 141.30],
    [7, 'Hunter', 77.74, 'Basil', 63.76, 141.50],
    [8, 'Majors', 92.26, 'Basil', 60.36, 152.62]
];
