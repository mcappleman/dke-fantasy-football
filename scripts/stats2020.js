$(document).ready(function () {

    $('#table2020').DataTable({
        order: [[2, "desc"]],
        searching: false,
        sDom: '',
        lengthMenu: [[-1], ["All"]],
        data: data2020,
        columns: yearColumnNames
    });

    $('#highScores2020').DataTable({
        order: [[2, "desc"]],
        sDom: '',
        data: highScores2020,
        columns: scoreColumnNames
    });

    $('#lowScores2020').DataTable({
        order: [[2, "asc"]],
        sDom: '',
        data: lowScores2020,
        columns: scoreColumnNames
    });

    $('#blowouts2020').DataTable({
        order: [[5, "desc"]],
        sDom: '',
        data: blowouts2020,
        columns: gameColumnNames
    });

    $('#closeGames2020').DataTable({
        order: [[5, "asc"]],
        sDom: '',
        data: closeGames2020,
        columns: gameColumnNames
    });

    $('#highest2020').DataTable({
        order: [[5, "desc"]],
        sDom: '',
        data: highest2020,
        columns: gameScoringColumnNames
    });

    $('#dumpster2020').DataTable({
        order: [[5, "asc"]],
        sDom: '',
        data: dumpster2020,
        columns: gameScoringColumnNames
    });
    
    $('#fortunate2020').DataTable({
        order: [[5, "asc"]],
        sDom: '',
        data: fortunate2020,
        columns: fortunateColumnNames
    });

    $('#unfortunate2020').DataTable({
        order: [[5, "desc"]],
        sDom: '',
        data: unfortunate2020,
        columns: fortunateColumnNames
    });

});

var data2020 = [
    ['Ean', 11, 8, 3, 0, 1168.92, 1052.14, 106.27, 95.65, 89, 32, 0, '73.55%', 8.09, 2.91, -0.09],
    ['Matt', 11, 9, 2, 0, 1145.28, 1012, 104.12, 92.00, 78, 43, 0, '64.46%', 7.09, 3.91, 1.91],
    ['Chaz', 11, 5, 6, 0, 1097.86, 1078.16, 99.81, 98.01, 73, 48, 0, '60.33%', 6.64, 4.36, -1.64],
    ['Sawyer', 11, 4, 7, 0, 1081.44, 1079.34, 98.31, 98.12, 68, 53, 0, '56.20%', 6.18, 4.82, -2.18],
    ['Majors', 11, 5, 6, 0, 1074.76, 1013.02, 97.71, 92.09, 67, 54, 0, '55.37%', 6.09, 4.91, -1.09],
    ['Hunter', 11, 5, 6, 0, 1056.72, 1069.3, 96.07, 97.21, 67, 54, 0, '55.37%', 6.09, 4.91, -1.09],
    ['Willis', 11, 8, 3, 0, 1022.84, 929.92, 92.99, 84.54, 57, 64, 0, '47.11%', 5.18, 5.82, 2.82],
    ['Trevor', 11, 3, 8, 0, 1006.48, 1128.04, 91.50, 102.55, 56, 65, 0, '46.28%', 5.09, 5.91, -2.09],
    ['Basil', 11, 6, 5, 0, 1042.94, 1031.28, 94.81, 93.75, 53, 68, 0, '43.80%', 4.82, 6.18, 1.18],
    ['Ross', 11, 5, 6, 0, 1003.18, 1086.96, 91.20, 98.81, 52, 69, 0, '42.98%', 4.73, 6.27, 0.27],
    ['Jared', 11, 4, 7, 0, 934.58, 1027.76, 84.96, 93.43, 43, 78, 0, '35.54%', 3.91, 7.09, 0.09],
    ['Sam', 11, 4, 7, 0, 858.42, 985.5, 78.04, 89.59, 23, 98, 0, '19.01%', 2.09, 8.91, 1.91]
];

var highScores2020 = [
    ['Majors', 3, 151.02, 'Trevor'],
    ['Matt', 2, 139.0, 'Hunter'],
    ['Matt', 4, 133.68, 'Ean'],
    ['Chaz', 2, 132.72, 'Sawyer'],
    ['Sam', 4, 131.8, 'Ross'],
    ['Trevor', 4, 131.31, 'Sawyer'],
    ['Sawyer', 3, 127.64, 'Jared'],
    ['Ean', 2, 127.54, 'Ross'],
    ['Sawyer', 11, 126.86, 'Hunter'],
    ['Sawyer', 6, 124.56, 'Ross']
];

var lowScores2020 = [
    ['Sam', 8, 47.3, 'Majors'],
    ['Majors', 6, 49.7, 'Jared'],
    ['Trevor', 3, 52.68, 'Majors'],
    ['Sawyer', 4, 56.7, 'Trevor'],
    ['Sam', 10, 57.56, 'Basil'],
    ['Jared', 9, 57.56, 'Willis'],
    ['Sam', 11, 59.9, 'Jared'],
    ['Sawyer', 9, 65.02, 'Sam'],
    ['Trevor', 11, 65.44, 'Ean'],
    ['Ross', 6, 66.12, 'Sawyer']
];

var blowouts2020 = [
    [3, 'Majors', 151.02, 'Trevor', 52.68, 98.34],
    [4, 'Trevor', 131.32, 'Sawyer', 56.70, 74.62],
    [6, 'Sawyer', 124.56, 'Ross', 66.12, 58.44],
    [11, 'Ean', 114.42, 'Trevor', 65.44, 48.98],
    [3, 'Sawyer', 127.64, 'Jared', 78.88, 48.76],
    [1, 'Ean', 124.30, 'Sam', 77.22, 47.08],
    [4, 'Matt', 133.68, 'Ean', 88.02, 45.66],
    [9, 'Willis', 100.84, 'Jared', 57.56, 43.28],
    [8, 'Majors', 90.46, 'Sam', 47.30, 43.16],
    [9, 'Ross', 117.24, 'Trevor', 79.30, 37.94]
];

var closeGames2020 = [
    [7, 'Matt', 113.02, 'Sawyer', 112.50, 0.52],
    [9, 'Matt', 90.80, 'Basil', 88.48, 2.32],
    [11, 'Majors', 94.62, 'Matt', 92.24, 2.38],
    [8, 'Basil', 80.14, 'Sawyer', 77.72, 2.42],
    [8, 'Hunter', 84.14, 'Ean', 81.34, 2.8],
    [8, 'Matt', 111.64, 'Trevor', 108.62, 3.02],
    [10, 'Matt', 97.20, 'Chaz', 94.06, 3.14],
    [5, 'Ean', 122.00, 'Sawyer', 117.70, 4.3],
    [1, 'Jared', 100.80, 'Chaz', 96.40, 4.4],
    [10, 'Willis', 75.72, 'Sawyer', 70.98, 4.74],
];

var highest2020 = [
    [2, 'Matt', 139.00, 'Hunter', 102.62, 241.62],
    [5, 'Ean', 122.00, 'Sawyer', 117.70, 239.70],
    [2, 'Ean', 127.54, 'Ross', 107.56, 235.10],
    [4, 'Majors', 118.56, 'Chaz', 113.52, 232.08],
    [2, 'Chaz', 132.72, 'Sawyer', 98.76, 231.48],
    [4, 'Sam', 131.80, 'Ross', 98.54, 230.34],
    [6, 'Basil', 120.20, 'Trevor', 108.84, 229.04],
    [7, 'Hunter', 117.02, 'Majors', 110.84, 227.86],
    [7, 'Matt', 113.02, 'Sawyer', 112.50, 225.52],
    [11, 'Sawyer', 126.86, 'Hunter', 98.18, 225.04]
];

var dumpster2020 = [
    [10, 'Basil', 70.54, 'Sam', 57.18, 127.72],
    [6, 'Jared', 79.28, 'Majors', 49.70, 128.98],
    [8, 'Majors', 90.46, 'Sam', 47.30, 137.76],
    [10, 'Willis', 75.72, 'Sawyer', 70.98, 146.70],
    [7, 'Sam', 82.06, 'Trevor', 66.46, 148.52],
    [9, 'Sam', 86.42, 'Sawyer', 65.02, 151.44],
    [4, 'Willis', 81.24, 'Hunter', 71.00, 152.24],
    [11, 'Jared', 95.10, 'Sam', 59.90, 155.00],
    [5, 'Matt', 84.54, 'Jared', 71.42, 155.96],
    [8, 'Basil', 80.14, 'Sawyer', 77.72, 157.86]
];
    
var fortunate2020 = [
    [10, 'Basil', 70.54, 'Sam', 57.18, 70.54],
    [10, 'Willis', 75.72, 'Sawyer', 70.98, 75.72],
    [6, 'Jared', 79.28, 'Majors', 49.70, 79.28],
    [8, 'Basil', 80.14, 'Sawyer', 77.72, 80.14],
    [4, 'Willis', 81.24, 'Hunter', 71.00, 81.24],
    [7, 'Sam', 82.06, 'Trevor', 66.46, 82.06],
    [8, 'Hunter', 84.14, 'Ean', 81.34, 84.14],
    [5, 'Matt', 84.54, 'Jared', 71.42, 84.54],
    [9, 'Sam', 86.42, 'Sawyer', 65.02, 86.42],
    [8, 'Willis', 86.62, 'Ross', 71.82, 86.62]
];

var unfortunate2020 = [
    [5, 'Ean', 122.00, 'Sawyer', 117.70, 117.70],
    [4, 'Majors', 118.56, 'Chaz', 113.52, 113.52],
    [7, 'Matt', 113.02, 'Sawyer', 112.50, 112.50],
    [7, 'Hunter', 117.02, 'Majors', 110.84, 110.84],
    [6, 'Basil', 120.20, 'Trevor', 108.84, 108.84],
    [8, 'Matt', 111.64, 'Trevor', 108.62, 108.62],
    [2, 'Ean', 127.54, 'Ross', 107.56, 107.56],
    [2, 'Matt', 139.00, 'Hunter', 102.62, 102.62],
    [3, 'Ean', 106.30, 'Willis', 101.00, 101.00],
    [2, 'Chaz', 132.72, 'Sawyer', 98.76, 98.76]
];
