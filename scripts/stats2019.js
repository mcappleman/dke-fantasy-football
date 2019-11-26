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
    ['Majors', 12, 9, 3, 0, 1269.32, 1073.16, 105.78, 89.43, 94, 38, 0, '71.21%', 8.55, 3.45, 0.45],
    ['Ross', 12, 6, 6, 0, 1256.6, 1193.3, 104.72, 99.44, 86, 46, 0, '65.15%', 7.82, 4.18, -1.82],
    ['Sam', 12, 8, 4, 0, 1254.68, 1118.36, 104.56, 93.20, 84, 48, 0, '63.64%', 7.64, 4.36, 0.36],
    ['Matt', 12, 9, 3, 0, 1219.44, 1060.04, 101.62, 88.34, 82, 50, 0, '62.12%', 7.45, 4.55, 1.55],
    ['Willis', 12, 8, 4, 0, 1204.18, 1106.1, 100.35, 92.18, 77, 55, 0, '58.33%', 7.00, 5.00, 1.00],
    ['Trevor', 12, 4, 8, 0, 1125.7, 1204.32, 93.81, 100.36, 64, 68, 0, '48.48%', 5.82, 6.18, -1.82],
    ['Ean', 12, 6, 6, 0, 1117.1, 1122.94, 93.09, 93.58, 62, 70, 0, '46.97%', 5.64, 6.36, 0.36],
    ['Hunter', 12, 6, 6, 0, 1125.02, 1176.94, 93.75, 98.08, 62, 70, 0, '46.97%', 5.64, 6.36, 0.36],
    ['Chaz', 12, 4, 8, 0, 1083.38, 1174.38, 90.28, 97.87, 59, 73, 0, '44.70%', 5.36, 6.64, -1.36],
    ['Sawyer', 12, 5, 7, 0, 1054.7, 1054.62, 87.89, 87.89, 50, 82, 0, '37.88%', 4.55, 7.45, 0.45],
    ['Basil', 12, 5, 7, 0, 979.08, 1113.12, 81.59, 92.76, 41, 91, 0, '31.06%', 3.73, 8.27, 1.27],
    ['Jared', 12, 2, 10, 0, 909.84, 1201.76, 75.82, 100.15, 31, 101, 0, '23.48%', 2.82, 9.18, -0.82]
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
    [4, 'Matt', 89.52, 'Sam', 87.00, 2.52],
    [1, 'Sam', 112.12, 'Sawyer', 109.5, 2.62],
    [1, 'Willis', 107.26, 'Hunter', 104.34, 2.92]
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
