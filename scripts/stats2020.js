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
    ['Ean', 9, 6, 3, 0, 947.54, 901.98, 105.28, 16.84, 100.22, 17.49, 68, 31, 0, '68.69%', 6.18, 2.82, -0.18],
    ['Matt', 9, 8, 1, 0, 955.84, 823.32, 106.20, 20.22, 91.48, 16.21, 65, 34, 0, '65.66%', 5.91, 3.09, 2.09],
    ['Chaz', 9, 5, 4, 0, 935.52, 886.02, 103.95, 14.30, 98.45, 10.45, 63, 36, 0, '63.64%', 5.73, 3.27, -0.73],
    ['Majors', 9, 4, 5, 0, 901.12, 829.4, 100.12, 26.99, 92.16, 27.06, 57, 42, 0, '57.58%', 5.18, 3.82, -1.18],
    ['Hunter', 9, 5, 4, 0, 880.02, 844.18, 97.78, 17.10, 93.80, 21.23, 55, 44, 0, '55.56%', 5.00, 4.00, 0.00],
    ['Sawyer', 9, 3, 6, 0, 883.6, 905.44, 98.18, 26.01, 100.60, 24.75, 55, 44, 0, '55.56%', 5.00, 4.00, -2.00],
    ['Basil', 9, 5, 4, 0, 883.38, 868.54, 98.15, 15.86, 96.50, 11.39, 49, 50, 0, '49.49%', 4.45, 4.55, 0.55],
    ['Willis', 9, 6, 3, 0, 841.56, 769.92, 93.51, 9.99, 85.55, 17.81, 45, 54, 0, '45.45%', 4.09, 4.91, 1.91],
    ['Trevor', 9, 2, 7, 0, 842.78, 935.1, 93.64, 25.26, 103.90, 27.01, 45, 54, 0, '45.45%', 4.09, 4.91, -2.09],
    ['Ross', 9, 3, 6, 0, 816.86, 939.66, 90.76, 17.16, 104.41, 21.35, 39, 60, 0, '39.39%', 3.55, 5.45, -0.55],
    ['Jared', 9, 3, 6, 0, 754.76, 860.9, 83.86, 15.19, 95.66, 22.53, 30, 69, 0, '30.30%', 2.73, 6.27, 0.27],
    ['Sam', 9, 4, 5, 0, 741.34, 819.86, 82.37, 22.58, 91.10, 18.59, 23, 76, 0, '23.23%', 2.09, 6.91, 1.91]
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
    ['Jared', 9, 57.56, 'Willis'],
    ['Sawyer', 9, 65.02, 'Sam'],
    ['Ross', 6, 66.12, 'Sawyer'],
    ['Trevor', 7, 66.46, 'Sam'],
    ['Sam', 6, 68.1, 'Hunter'],
    ['Hunter', 4, 71.00, 'Sam']
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
    [5, 'Ean', 122.00, 'Sawyer', 117.70, 4.3],
    [1, 'Jared', 100.80, 'Chaz', 96.40, 4.4],
    [4, 'Majors', 118.56, 'Chaz', 113.52, 5.04],
    [7, 'Ross', 92.44, 'Jared', 87.22, 5.22],
    [3, 'Ean', 106.30, 'Willis', 101.00, 5.3]
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
    [6, 'Jared', 79.28, 'Majors', 49.70, 128.98],
    [8, 'Majors', 90.46, 'Sam', 47.30, 137.76],
    [7, 'Sam', 82.06, 'Trevor', 66.46, 148.52],
    [9, 'Sam', 86.42, 'Sawyer', 65.02, 151.44],
    [4, 'Willis', 81.24, 'Hunter', 71.00, 152.24],
    [5, 'Matt', 84.54, 'Jared', 71.42, 155.96],
    [8, 'Basil', 80.14, 'Sawyer', 77.72, 157.86],
    [9, 'Willis', 100.84, 'Jared', 57.56, 158.40],
    [8, 'Willis', 86.62, 'Ross', 71.82, 158.44],
    [6, 'Hunter', 91.78, 'Sam', 68.10, 159.88]
];
    
var fortunate2020 = [
    [6, 'Jared', 79.28, 'Majors', 49.70, 79.28],
    [8, 'Basil', 80.14, 'Sawyer', 77.72, 80.14],
    [4, 'Willis', 81.24, 'Hunter', 71.00, 81.24],
    [7, 'Sam', 82.06, 'Trevor', 66.46, 82.06],
    [8, 'Hunter', 84.14, 'Ean', 81.34, 84.14],
    [5, 'Matt', 84.54, 'Jared', 71.42, 84.54],
    [9, 'Sam', 86.42, 'Sawyer', 65.02, 86.42],
    [8, 'Willis', 86.62, 'Ross', 71.82, 86.62],
    [5, 'Sam', 88.88, 'Willis', 82.44, 88.88],
    [8, 'Majors', 90.46, 'Sam', 47.30, 90.46]
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
