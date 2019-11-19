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
    ['Sam', 11, 7, 4, 0, 1135.76, 1007.9, 103.25, 91.63, 74, 47, 0, '61.16%', 6.73, 4.27, 0.27],
    ['Matt', 11, 9, 2, 0, 1126.36, 960.14, 102.40, 87.29, 75, 46, 0, '61.98%', 6.82, 4.18, 2.18],
    ['Willis', 11, 8, 3, 0, 1119.24, 1020.88, 101.75, 92.81, 73, 48, 0, '60.33%', 6.64, 4.36, 1.36],
    ['Majors', 11, 8, 3, 0, 1150.02, 996.8, 104.55, 90.62, 83, 38, 0, '68.60%', 7.55, 3.45, 0.45],
    ['Ross', 11, 5, 6, 0, 1168.94, 1130.22, 106.27, 102.75, 80, 41, 0, '66.12%', 7.27, 3.73, -2.27],
    ['Ean', 11, 6, 5, 0, 1054.02, 1035.28, 95.82, 94.12, 62, 59, 0, '51.24%', 5.64, 5.36, 0.36],
    ['Hunter', 11, 5, 6, 0, 1025.12, 1083.86, 93.19, 98.53, 54, 67, 0, '44.63%', 4.91, 6.09, 0.09],
    ['Chaz', 11, 4, 7, 0, 1004.58, 1090.04, 91.33, 99.09, 57, 64, 0, '47.11%', 5.18, 5.82, -1.18],
    ['Trevor', 11, 4, 7, 0, 1015.24, 1085.4, 92.29, 98.67, 55, 66, 0, '45.45%', 5.00, 6.00, -1.00],
    ['Sawyer', 11, 4, 7, 0, 970.36, 975.82, 88.21, 88.71, 47, 74, 0, '38.84%', 4.27, 6.73, -0.27],
    ['Basil', 11, 4, 7, 0, 893.86, 1028.18, 81.26, 93.47, 36, 85, 0, '29.75%', 3.27, 7.73, 0.73],
    ['Jared', 11, 2, 9, 0, 833.48, 1082.46, 75.77, 98.41, 30, 91, 0, '24.79%', 2.73, 8.27, -0.73]
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
