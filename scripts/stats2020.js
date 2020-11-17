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
    ['Ean', 10, 7, 3, 0, 1054.5, 986.7, 105.45, 98.67, 79, 31, 0, '71.82%', 7.18, 2.82, -0.18],
    ['Matt', 10, 9, 1, 0, 1053.04, 917.38, 105.30, 91.74, 74, 36, 0, '67.27%', 6.73, 3.27, 2.27],
    ['Chaz', 10, 5, 5, 0, 1029.58, 983.22, 102.96, 98.32, 71, 39, 0, '64.55%', 6.45, 3.55, -1.45],
    ['Majors', 10, 4, 6, 0, 980.14, 920.78, 98.01, 92.08, 62, 48, 0, '56.36%', 5.64, 4.36, -1.64],
    ['Hunter', 10, 5, 5, 0, 958.54, 942.44, 95.85, 94.24, 59, 51, 0, '53.64%', 5.36, 4.64, -0.36],
    ['Sawyer', 10, 3, 7, 0, 954.58, 981.16, 95.46, 98.12, 57, 53, 0, '51.82%', 5.18, 4.82, -2.18],
    ['Trevor', 10, 3, 7, 0, 941.04, 1013.62, 94.10, 101.36, 55, 55, 0, '50.00%', 5.00, 5.00, -2.00],
    ['Basil', 10, 6, 4, 0, 953.92, 925.72, 95.39, 92.57, 50, 60, 0, '45.45%', 4.55, 5.45, 1.45],
    ['Willis', 10, 7, 3, 0, 917.28, 840.9, 91.73, 84.09, 48, 62, 0, '43.64%', 4.36, 5.64, 2.64],
    ['Ross', 10, 4, 6, 0, 908.24, 1018.68, 90.82, 101.87, 46, 64, 0, '41.82%', 4.18, 5.82, -0.18],
    ['Jared', 10, 3, 7, 0, 839.48, 967.86, 83.95, 96.79, 36, 74, 0, '32.73%', 3.27, 6.73, -0.27],
    ['Sam', 10, 4, 6, 0, 798.52, 890.4, 79.85, 89.04, 23, 87, 0, '20.91%', 2.09, 7.91, 1.91]
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
    ['Sawyer', 6, 124.56, 'Ross'],
    ['Ean', 1, 124.3, 'Sam']
];

var lowScores2020 = [
    ['Sam', 8, 47.3, 'Majors'],
    ['Majors', 6, 49.7, 'Jared'],
    ['Trevor', 3, 52.68, 'Majors'],
    ['Sawyer', 4, 56.7, 'Trevor'],
    ['Sam', 10, 57.56, 'Basil'],
    ['Jared', 9, 57.56, 'Willis'],
    ['Sawyer', 9, 65.02, 'Sam'],
    ['Ross', 6, 66.12, 'Sawyer'],
    ['Trevor', 7, 66.46, 'Sam'],
    ['Sam', 6, 68.1, 'Hunter']
];

var blowouts2020 = [
    [3, 'Majors', 151.02, 'Trevor', 52.68, 98.34],
    [4, 'Trevor', 131.32, 'Sawyer', 56.70, 74.62],
    [6, 'Sawyer', 124.56, 'Ross', 66.12, 58.44],
    [3, 'Sawyer', 127.64, 'Jared', 78.88, 48.76],
    [1, 'Ean', 124.30, 'Sam', 77.22, 47.08],
    [4, 'Matt', 133.68, 'Ean', 88.02, 45.66],
    [9, 'Willis', 100.84, 'Jared', 57.56, 43.28],
    [8, 'Majors', 90.46, 'Sam', 47.30, 43.16],
    [9, 'Ross', 117.24, 'Trevor', 79.30, 37.94],
    [2, 'Matt', 139.00, 'Hunter', 102.62, 36.38]
];

var closeGames2020 = [
    [7, 'Matt', 113.02, 'Sawyer', 112.50, 0.52],
    [9, 'Matt', 90.80, 'Basil', 88.48, 2.32],
    [8, 'Basil', 80.14, 'Sawyer', 77.72, 2.42],
    [8, 'Hunter', 84.14, 'Ean', 81.34, 2.8],
    [8, 'Matt', 111.64, 'Trevor', 108.62, 3.02],
    [10, 'Matt', 97.20, 'Chaz', 94.06, 3.14],
    [5, 'Ean', 122.00, 'Sawyer', 117.70, 4.3],
    [1, 'Jared', 100.80, 'Chaz', 96.40, 4.4],
    [10, 'Willis', 75.72, 'Sawyer', 70.98, 4.74],
    [4, 'Majors', 118.56, 'Chaz', 113.52, 5.04],
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
    [4, 'Matt', 133.68, 'Ean', 88.02, 221.70]
];

var dumpster2020 = [
    [10, 'Basil', 70.54, 'Sam', 57.18, 127.72],
    [6, 'Jared', 79.28, 'Majors', 49.70, 128.98],
    [8, 'Majors', 90.46, 'Sam', 47.30, 137.76],
    [10, 'Willis', 75.72, 'Sawyer', 70.98, 146.70],
    [7, 'Sam', 82.06, 'Trevor', 66.46, 148.52],
    [9, 'Sam', 86.42, 'Sawyer', 65.02, 151.44],
    [4, 'Willis', 81.24, 'Hunter', 71.00, 152.24],
    [5, 'Matt', 84.54, 'Jared', 71.42, 155.96],
    [8, 'Basil', 80.14, 'Sawyer', 77.72, 157.86],
    [9, 'Willis', 100.84, 'Jared', 57.56, 158.40]
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
