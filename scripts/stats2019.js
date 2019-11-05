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
    ['Ross', 9, 4, 5, 0, 969, 926.26, 107.67, 102.92, 65, 34, 0, '65.66%', 5.91, 3.09, -1.91],
    ['Sam', 9, 6, 3, 0, 956.08, 817.08, 106.23, 90.79, 64, 35, 0, '64.65%', 5.82, 3.18, 0.18],
    ['Willis', 9, 7, 2, 0, 951.42, 844.08, 105.71, 93.79, 64, 35, 0, '64.65%', 5.82, 3.18, 1.18],
    ['Majors', 9, 6, 3, 0, 921.44, 814.64, 102.38, 90.52, 63, 36, 0, '63.64%', 5.73, 3.27, 0.27],
    ['Matt', 9, 7, 2, 0, 916.9, 802.34, 101.88, 89.15, 58, 41, 0, '58.59%', 5.27, 3.73, 1.73],
    ['Ean', 9, 4, 5, 0, 849.48, 871.82, 94.39, 96.87, 47, 52, 0, '47.47%', 4.27, 4.73, -0.27],
    ['Chaz', 9, 4, 5, 0, 813.58, 860.94, 90.40, 95.66, 44, 55, 0, '44.44%', 4.00, 5.00, 0.00],
    ['Trevor', 9, 3, 6, 0, 824.44, 914.44, 91.60, 101.60, 43, 56, 0, '43.43%', 3.91, 5.09, -0.91],
    ['Sawyer', 9, 4, 5, 0, 819.16, 784.64, 91.02, 87.18, 43, 56, 0, '43.43%', 3.91, 5.09, 0.09],
    ['Hunter', 9, 4, 5, 0, 836.84, 894.82, 92.98, 99.42, 42, 57, 0, '42.42%', 3.82, 5.18, 0.18],
    ['Basil', 9, 3, 6, 0, 737.84, 865.6, 81.98, 96.18, 32, 67, 0, '32.32%', 2.91, 6.09, 0.09],
    ['Jared', 9, 2, 7, 0, 711.14, 910.66, 79.02, 101.18, 29, 70, 0, '29.29%', 2.64, 6.36, -0.64]
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
    ['Jared', 1, 56.64, 'Basil'],
    ['Chaz', 9, 58.16, 'Basil'],
    ['Willis', 7, 58.26, 'Sawyer']
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
    [8, 'Majors', 92.26, 'Basil', 60.36, 152.62]
];
