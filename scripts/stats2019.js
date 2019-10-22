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
    ['Basil', 7, 2, 5, 0, 570.3, 715.18, 81.47, 102.17, 23, 54, 0, '29.87%', 2.09, 4.91, -0.09],
    ['Matt', 7, 5, 2, 0, 684.48, 619.32, 97.78, 88.47, 41, 36, 0, '53.25%', 3.73, 3.27, 1.27],
    ['Majors', 7, 4, 3, 0, 724.28, 660.56, 103.47, 94.37, 51, 26, 0, '66.23%', 4.64, 2.36, -0.64],
    ['Trevor', 7, 3, 4, 0, 654.58, 703.88, 93.51, 100.55, 37, 40, 0, '48.05%', 3.36, 3.64, -0.36],
    ['Sam', 7, 5, 2, 0, 726.18, 624.42, 103.74, 89.20, 47, 30, 0, '61.04%', 4.27, 2.73, 0.73],
    ['Hunter', 7, 4, 3, 0, 674.14, 673.68, 96.31, 96.24, 36, 41, 0, '46.75%', 3.27, 3.73, 0.73],
    ['Ross', 7, 2, 5, 0, 711.76, 748, 101.68, 106.86, 44, 33, 0, '57.14%', 4.00, 3.00, -2.00],
    ['Sawyer', 7, 3, 4, 0, 642.96, 595.52, 91.85, 85.07, 36, 41, 0, '46.75%', 3.27, 3.73, -0.27],
    ['Ean', 7, 4, 3, 0, 656.02, 642.34, 93.72, 91.76, 36, 41, 0, '46.75%', 3.27, 3.73, 0.73],
    ['Jared', 7, 2, 5, 0, 586.6, 682.82, 83.80, 97.55, 27, 50, 0, '35.06%', 2.45, 4.55, -0.45],
    ['Willis', 7, 5, 2, 0, 743.8, 663.78, 106.26, 94.83, 50, 27, 0, '64.94%', 4.55, 2.45, 0.45],
    ['Chaz', 7, 3, 4, 0, 639.18, 684.78, 91.31, 97.83, 34, 43, 0, '44.16%', 3.09, 3.91, -0.09]
];

var highScores2019 = [
    ['Basil', 5, 142.32, 'Ross'],
    ['Willis', 3, 140.56, 'Jared'],
    ['Ross', 5, 133.12, 'Basil'],
    ['Matt', 3, 127.44, 'Basil'],
    ['Hunter', 3, 124.64, 'Ross']
];


var lowScores2019 = [
    ['Basil', 4, 33.5, 'Sawyer'],
    ['Jared', 1, 56.64, 'Basil'],
    ['Willis', 7, 58.26, 'Sawyer'],
    ['Jared', 6, 58.72, 'Matt'],
    ['Basil', 7, 63.76, 'Hunter']
];

var blowouts2019 = [
    [4, 'Sawyer', 105.34, 'Basil', 33.50, 71.84],
    [3, 'Willis', 140.56, 'Jared', 78.22, 62.34],
    [3, 'Matt', 127.44, 'Basil', 82.54, 44.9],
    [7, 'Sawyer', 102.98, 'Willis', 58.26, 44.72],
    [6, 'Sam', 117.40, 'Basil', 75.06, 42.34]
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
    [3, 'Hunter', 124.64, 'Ross', 116.60, 241.24],
    [1, 'Majors', 122.62, 'Trevor', 107.72, 230.34],
    [5, 'Matt', 120.06, 'Willis', 107.00, 227.06],
    [1, 'Sam', 112.12, 'Sawyer', 109.5, 221.62]
];

var dumpster2019 = [
    [1, 'Basil', 81.26, 'Jared', 56.64, 137.9],
    [4, 'Sawyer', 105.34, 'Basil', 33.50, 138.84],
    [6, 'Matt', 82.58, 'Jared', 58.72, 141.30],
    [7, 'Hunter', 77.74, 'Basil', 63.76, 141.50],
    [7, 'Sawyer', 102.98, 'Willis', 58.26, 161.24]
];
