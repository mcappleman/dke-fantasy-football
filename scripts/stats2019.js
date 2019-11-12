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
    ['Ross', 10, 5, 5, 0, 1087.72, 1030.14, 108.77, 103.01, 76, 34, 0, '69.09%', 6.91, 3.09, -1.91],
    ['Sam', 10, 7, 3, 0, 1070.5, 923.56, 107.05, 92.36, 74, 36, 0, '67.27%', 6.73, 3.27, 0.27],
    ['Willis', 10, 7, 3, 0, 1034.9, 955.62, 103.49, 95.56, 67, 43, 0, '60.91%', 6.09, 3.91, 0.91],
    ['Majors', 10, 7, 3, 0, 1032.98, 898.12, 103.30, 89.81, 72, 38, 0, '65.45%', 6.55, 3.45, 0.45],
    ['Matt', 10, 8, 2, 0, 1026.28, 878.92, 102.63, 87.89, 66, 44, 0, '60.00%', 6.00, 4.00, 2.00],
    ['Ean', 10, 5, 5, 0, 943.64, 948.16, 94.36, 94.82, 52, 58, 0, '47.27%', 4.73, 5.27, 0.27],
    ['Chaz', 10, 4, 6, 0, 917.46, 979.66, 91.75, 97.97, 50, 60, 0, '45.45%', 4.55, 5.45, -0.55],
    ['Trevor', 10, 4, 6, 0, 916.56, 968.36, 91.66, 96.84, 47, 63, 0, '42.73%', 4.27, 5.73, -0.27],
    ['Sawyer', 10, 4, 6, 0, 895.74, 894.02, 89.57, 89.40, 45, 65, 0, '40.91%', 4.09, 5.91, -0.09],
    ['Hunter', 10, 4, 6, 0, 943.32, 1009.24, 94.33, 100.92, 49, 61, 0, '44.55%', 4.45, 5.55, -0.45],
    ['Basil', 10, 3, 7, 0, 814.18, 959.76, 81.42, 95.98, 33, 77, 0, '30.00%', 3.00, 7.00, 0.00],
    ['Jared', 10, 2, 8, 0, 765.06, 1002.78, 76.51, 100.28, 29, 81, 0, '26.36%', 2.64, 7.36, -0.64]
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
    ['Jared', 9, 49.36, 'Sam'],
    ['Jared', 10, 53.92, 'Trevor'],
    ['Jared', 1, 56.64, 'Basil'],
    ['Chaz', 9, 58.16, 'Basil']
];

var blowouts2019 = [
    [9, 'Sam', 126.64, 'Jared', 49.36, 77.28],
    [4, 'Sawyer', 105.34, 'Basil', 33.50, 71.84],
    [3, 'Willis', 140.56, 'Jared', 78.22, 62.34],
    [9, 'Basil', 107.18, 'Chaz', 58.16, 49.02],
    [8, 'Chaz', 116.24, 'Hunter', 68.98, 47.26],
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
    [10, 'Trevor', 92.12, 'Jared', 53.92, 146.04]
];
