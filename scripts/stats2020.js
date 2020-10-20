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
    ['Majors', 6, 3, 3, 0, 605.42, 556.96, 100.90, 92.83, 34, 32, 0, '51.52%', 3.09, 2.91, -0.09],
    ['Ross', 6, 1, 5, 0, 535.36, 686.52, 89.23, 114.42, 22, 44, 0, '33.33%', 2.00, 4.00, -1.00],
    ['Sam', 6, 2, 4, 0, 525.56, 597.92, 87.59, 99.65, 19, 47, 0, '28.79%', 1.73, 4.27, 0.27],
    ['Matt', 6, 5, 1, 0, 640.38, 513.72, 106.73, 85.62, 39, 27, 0, '59.09%', 3.55, 2.45, 1.45],
    ['Willis', 6, 3, 3, 0, 548.08, 553.62, 91.35, 92.27, 22, 44, 0, '33.33%', 2.00, 4.00, 1.00],
    ['Trevor', 6, 2, 4, 0, 588.4, 624.16, 98.07, 104.03, 34, 32, 0, '51.52%', 3.09, 2.91, -1.09],
    ['Ean', 6, 5, 1, 0, 667.48, 625.44, 111.25, 104.24, 49, 17, 0, '74.24%', 4.45, 1.55, 0.55],
    ['Hunter', 6, 3, 3, 0, 589.86, 555.34, 98.31, 92.56, 33, 33, 0, '50.00%', 3.00, 3.00, 0.00],
    ['Chaz', 6, 3, 3, 0, 639.7, 610.04, 106.62, 101.67, 42, 24, 0, '63.64%', 3.82, 2.18, -0.82],
    ['Basil', 6, 3, 3, 0, 616.76, 609.42, 102.79, 101.57, 36, 30, 0, '54.55%', 3.27, 2.73, -0.27],
    ['Sawyer', 6, 3, 3, 0, 628.36, 625.86, 104.73, 104.31, 43, 23, 0, '65.15%', 3.91, 2.09, -0.91],
    ['Jared', 6, 3, 3, 0, 529.02, 555.38, 88.17, 92.56, 23, 43, 0, '34.85%', 2.09, 3.91, 0.91]
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
    ['Majors', 6, 49.7, 'Jared'],
    ['Trevor', 3, 52.68, 'Majors'],
    ['Sawyer', 4, 56.7, 'Trevor'],
    ['Ross', 6, 66.12, 'Sawyer'],
    ['Sam', 6, 68.1, 'Hunter'],
    ['Hunter', 4, 71.00, 'Sam'],
    ['Jared', 5, 71.42, 'Matt'],
    ['Sam', 3, 72.66, 'Matt'],
    ['Ross', 1, 74.38, 'Matt'],
    ['Sam', 1, 77.22, 'Ean']
];

var blowouts2020 = [
    [3, 'Majors', 151.02, 'Trevor', 52.68, 98.34],
    [4, 'Trevor', 131.32, 'Sawyer', 56.70, 74.62],
    [6, 'Sawyer', 124.56, 'Ross', 66.12, 58.44],
    [3, 'Sawyer', 127.64, 'Jared', 78.88, 48.76],
    [1, 'Ean', 124.30, 'Sam', 77.22, 47.08],
    [4, 'Matt', 133.68, 'Ean', 88.02, 45.66],
    [2, 'Matt', 139.00, 'Hunter', 102.62, 36.38],
    [1, 'Hunter', 113.88, 'Basil', 78.24, 35.64],
    [2, 'Chaz', 132.72, 'Sawyer', 98.76, 33.96],
    [3, 'Matt', 106.28, 'Sam', 72.66, 33.62]
];

var closeGames2020 = [
    [5, 'Ean', 122.00, 'Sawyer', 117.70, 4.3],
    [1, 'Jared', 100.80, 'Chaz', 96.40, 4.4],
    [4, 'Majors', 118.56, 'Chaz', 113.52, 5.04],
    [3, 'Ean', 106.30, 'Willis', 101.00, 5.3],
    [5, 'Sam', 88.88, 'Willis', 82.44, 6.44],
    [5, 'Chaz', 103.56, 'Trevor', 96.70, 6.86],
    [2, 'Willis', 94.58, 'Sam', 86.90, 7.68],
    [1, 'Sawyer', 103.00, 'Majors', 94.82, 8.18],
    [3, 'Chaz', 105.22, 'Basil', 95.90, 9.32],
    [5, 'Majors', 100.42, 'Basil', 90.40, 10.02]
];

var highest2020 = [
    [2, 'Matt', 139.00, 'Hunter', 102.62, 241.62],
    [5, 'Ean', 122.00, 'Sawyer', 117.70, 239.70],
    [2, 'Ean', 127.54, 'Ross', 107.56, 235.10],
    [4, 'Majors', 118.56, 'Chaz', 113.52, 232.08],
    [2, 'Chaz', 132.72, 'Sawyer', 98.76, 231.48],
    [4, 'Sam', 131.80, 'Ross', 98.54, 230.34],
    [6, 'Basil', 120.20, 'Trevor', 108.84, 229.04],
    [4, 'Matt', 133.68, 'Ean', 88.02, 221.70],
    [3, 'Hunter', 122.00, 'Ross', 89.50, 211.50],
    [2, 'Basil', 118.08, 'Majors', 90.90, 208.98]
];

var dumpster2020 = [
    [6, 'Jared', 79.28, 'Majors', 49.70, 128.98],
    [4, 'Willis', 81.24, 'Hunter', 71.00, 152.24],
    [5, 'Matt', 84.54, 'Jared', 71.42, 155.96],
    [6, 'Hunter', 91.78, 'Sam', 68.10, 159.88],
    [1, 'Matt', 92.04, 'Ross', 74.38, 166.42],
    [5, 'Sam', 88.88, 'Willis', 82.44, 171.32],
    [3, 'Matt', 106.28, 'Sam', 72.66, 178.94],
    [2, 'Willis', 94.58, 'Sam', 86.90, 181.48],
    [6, 'Ean', 99.32, 'Chaz', 88.28, 187.60],
    [5, 'Ross', 99.26, 'Hunter', 88.58, 187.84]
];
    
var fortunate2020 = [
    [6, 'Jared', 79.28, 'Majors', 49.70, 79.28],
    [4, 'Willis', 81.24, 'Hunter', 71.00, 81.24],
    [5, 'Matt', 84.54, 'Jared', 71.42, 84.54],
    [5, 'Sam', 88.88, 'Willis', 82.44, 88.88],
    [6, 'Hunter', 91.78, 'Sam', 68.10, 91.78],
    [1, 'Matt', 92.04, 'Ross', 74.38, 92.04],
    [2, 'Willis', 94.58, 'Sam', 86.90, 94.58],
    [5, 'Ross', 99.26, 'Hunter', 88.58, 99.26],
    [6, 'Ean', 99.32, 'Chaz', 88.28, 99.32],
    [5, 'Majors', 100.42, 'Basil', 90.40, 100.42]
];

var unfortunate2020 = [
    [5, 'Ean', 122.00, 'Sawyer', 117.70, 117.70],
    [4, 'Majors', 118.56, 'Chaz', 113.52, 113.52],
    [6, 'Basil', 120.20, 'Trevor', 108.84, 108.84],
    [2, 'Ean', 127.54, 'Ross', 107.56, 107.56],
    [2, 'Matt', 139.00, 'Hunter', 102.62, 102.62],
    [3, 'Ean', 106.30, 'Willis', 101.00, 101.00],
    [2, 'Chaz', 132.72, 'Sawyer', 98.76, 98.76],
    [4, 'Sam', 131.80, 'Ross', 98.54, 98.54],
    [5, 'Chaz', 103.56, 'Trevor', 96.70, 96.70],
    [1, 'Jared', 100.80, 'Chaz', 96.40, 96.40]
];
