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
    ['Majors', 13, 10, 3, 0, 1362.96, 1139.88, 104.84, 87.68, 101, 42, 0, '70.63%', 9.18, 3.82, 0.82],
    ['Sam', 13, 8, 5, 0, 1321.4, 1212, 101.65, 93.23, 84, 59, 0, '58.74%', 7.64, 5.36, 0.36],
    ['Matt', 13, 10, 3, 0, 1308.38, 1129.6, 100.64, 86.89, 87, 56, 0, '60.84%', 7.91, 5.09, 2.09],
    ['Willis', 13, 8, 5, 0, 1282.96, 1186.26, 98.69, 91.25, 79, 64, 0, '55.24%', 7.18, 5.82, 0.82],
    ['Ross', 13, 7, 6, 0, 1367.12, 1289.32, 105.16, 99.18, 97, 46, 0, '67.83%', 8.82, 4.18, -1.82],
    ['Hunter', 13, 6, 7, 0, 1221.04, 1287.46, 93.93, 99.04, 70, 73, 0, '48.95%', 6.36, 6.64, -0.36],
    ['Ean', 13, 7, 6, 0, 1216.82, 1205.1, 93.60, 92.70, 71, 72, 0, '49.65%', 6.45, 6.55, 0.55],
    ['Sawyer', 13, 5, 8, 0, 1136.86, 1154.34, 87.45, 88.80, 54, 89, 0, '37.76%', 4.91, 8.09, 0.09],
    ['Basil', 13, 5, 8, 0, 1069.88, 1222.32, 82.30, 94.02, 47, 96, 0, '32.87%', 4.27, 8.73, 0.73],
    ['Chaz', 13, 4, 9, 0, 1152.94, 1263.32, 88.69, 97.18, 60, 83, 0, '41.96%', 5.45, 7.55, -1.45],
    ['Trevor', 13, 5, 8, 0, 1234.9, 1295.12, 94.99, 99.62, 74, 69, 0, '51.75%', 6.73, 6.27, -1.73],
    ['Jared', 13, 3, 10, 0, 990, 1280.54, 76.15, 98.50, 34, 109, 0, '23.78%', 3.09, 9.91, -0.09]
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
    [12, 'Basil', 85.22, 'Willis', 84.94, 0.28],
    [2, 'Hunter', 90.4, 'Matt', 89.26, 1.14],
    [13, 'Jared', 80.16, 'Willis', 78.78, 1.38],
    [4, 'Matt', 89.52, 'Sam', 87.00, 2.52],
    [1, 'Sam', 112.12, 'Sawyer', 109.5, 2.62]
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
