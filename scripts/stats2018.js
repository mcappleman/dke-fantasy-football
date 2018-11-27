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
    ['Basil', 12, 10, 2, 0, 1378.38, 1053.74, 114.87, 87.81, 95, 37, 0, '71.97%', 8.64, 3.36, 1.36],
    ['Matt', 12, 7, 5, 0, 1277.08, 1153, 106.42, 96.08, 82, 50, 0, '62.12%', 7.45, 4.55, -0.45],
    ['Majors', 12, 9, 3, 0, 1315.88, 1163.82, 109.66, 96.99, 81, 51, 0, '61.36%', 7.36, 4.64, 1.64],
    ['Trevor', 12, 6, 6, 0, 1231.12, 1302.4, 102.59, 108.53, 79, 53, 0, '59.85%', 7.18, 4.82, -1.18],
    ['Sam', 12, 8, 4, 0, 1281.38, 1033.58, 106.78, 86.13, 78, 54, 0, '59.09%', 7.09, 4.91, 0.91],
    ['Sawyer', 12, 6, 6, 0, 1133.86, 1220.08, 94.49, 101.67, 63, 69, 0, '47.73%', 5.73, 6.27, 0.27],
    ['Jared', 12, 5, 7, 0, 1102.96, 1173.66, 91.91, 97.81, 61, 71, 0, '46.21%', 5.55, 6.45, -0.55],
    ['Hunter', 12, 8, 4, 0, 1133.94, 1166.16, 94.50, 97.18, 60, 72, 0, '45.45%', 5.45, 6.55, 2.55],
    ['Ean', 12, 2, 10, 0, 1118.56, 1316.44, 93.21, 109.70, 55, 77, 0, '41.67%', 5.00, 7.00, -3.00],
    ['Willis', 12, 3, 9, 0, 1095.12, 1232.4, 91.26, 102.70, 50, 82, 0, '37.88%', 4.55, 7.45, -1.55],
    ['Ross', 12, 2, 10, 0, 1063.96, 1265.38, 88.66, 105.45, 46, 86, 0, '34.85%', 4.18, 7.82, -2.18],
    ['Chaz', 12, 6, 6, 0, 1031.1, 1082.68, 85.93, 90.22, 42, 90, 0, '31.82%', 3.82, 8.18, 2.18]
];

var highScores2018 = [
    ['Majors', 4, 176.56, 'Jared'],
    ['Basil', 6, 162.9, 'Trevor'],
    ['Basil', 11, 142.78, 'Ean'],
    ['Ross', 12, 139.94, 'Hunter'],
    ['Sam', 11, 138.52, 'Matt']
];


var lowScores2018 = [
    ['Hunter', 9, 51.36, 'Sam'],
    ['Jared', 11, 54.82, 'Chaz'],
    ['Willis', 3, 59.76, 'Sawyer'],
    ['Jared', 8, 59.8, 'Willis'],
    ['Ean', 8, 60.38, 'Sam']
];

var blowouts2018 = [
    [8, 'Sam', 132.86, 'Ean', 60.38, 72.48],
    [4, 'Majors', 176.56, 'Jared', 104.58, 71.98],
    [11, 'Sam', 138.52, 'Matt', 73.72, 64.8],
    [5, 'Basil', 125.58, 'Ross', 61.94, 63.64],
    [10, 'Majors', 137.9, 'Ean', 74.52, 63.38]
];

var closeGames2018 = [
    [9, 'Sawyer', 89.98, 'Ean', 89.62, 0.36],
    [10, 'Hunter', 104.56, 'Willis', 104.02, 0.54],
    [7, 'Sawyer', 83.16, 'Jared', 81.66, 1.5],
    [3, 'Trevor', 95.86, 'Ross', 94.22, 1.64],
    [9, 'Trevor', 118.78, 'Chaz', 116.6, 2.18]
];

var highest2018 = [
    [4, 'Majors', 176.56, 'Jared', 104.58, 281.14],
    [6, 'Basil', 162.9, 'Trevor', 101.38, 264.28],
    [1, 'Matt', 131.7, 'Sam', 118.48, 250.18],
    [4, 'Willis', 129.2, 'Ean', 120.2, 249.4],
    [8, 'Hunter', 138.1, 'Sawyer', 109.06, 247.16]
];

var dumpster2018 = [
    [11, 'Chaz', 63.9, 'Jared', 54.82, 118.72],
    [8, 'Willis', 71, 'Jared', 59.8, 130.8],
    [9, 'Sam', 88.82, 'Hunter', 51.36, 140.18],
    [4, 'Hunter', 81.18, 'Chaz', 70.68, 151.86],
    [3, 'Sawyer', 95.74, 'Willis', 59.76, 155.5]
];
