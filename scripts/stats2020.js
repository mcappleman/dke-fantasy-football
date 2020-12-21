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
    ['Ean', 14, 9, 5, 0, 1480.1, 1394.54, 105.72, 99.61, 106, 44, 0, '70.67%', 9.89, 4.11, -0.89],
    ['Matt', 13, 10, 3, 0, 1346.12, 1220.76, 103.55, 93.90, 92, 51, 0, '64.34%', 8.36, 4.64, 1.64],
    ['Chaz', 14, 7, 7, 0, 1389.06, 1352.38, 99.22, 96.60, 86, 64, 0, '57.33%', 8.03, 5.97, -1.03],
    ['Sawyer', 14, 4, 10, 0, 1302, 1394.66, 93.00, 99.62, 75, 75, 0, '50.00%', 7.00, 7.00, -3.00],
    ['Majors', 14, 7, 7, 0, 1348.44, 1342.62, 96.32, 95.90, 81, 69, 0, '54.00%', 7.56, 6.44, -0.56],
    ['Hunter', 13, 6, 7, 0, 1244.54, 1246.86, 95.73, 95.91, 79, 64, 0, '55.24%', 7.18, 5.82, -1.18],
    ['Basil', 14, 8, 6, 0, 1351.66, 1262.26, 96.55, 90.16, 74, 76, 0, '49.33%', 6.91, 7.09, 1.09],
    ['Willis', 13, 10, 3, 0, 1288.8, 1096.22, 99.14, 84.32, 76, 67, 0, '53.15%', 6.91, 6.09, 3.09],
    ['Trevor', 14, 6, 8, 0, 1340.76, 1324.02, 95.77, 94.57, 78, 72, 0, '52.00%', 7.28, 6.72, -1.28],
    ['Ross', 13, 6, 7, 0, 1185.38, 1279.12, 91.18, 98.39, 62, 81, 0, '43.36%', 5.64, 7.36, 0.36],
    ['Jared', 14, 5, 9, 0, 1152.14, 1284.82, 82.30, 91.77, 47, 103, 0, '31.33%', 4.39, 9.61, 0.61],
    ['Sam', 14, 4, 10, 0, 1072.68, 1303.42, 76.62, 93.10, 30, 120, 0, '20.00%', 2.80, 11.20, 1.20]
];

var highScores2020 = [
    ['Willis', 12, 160.02, 'Majors'],
    ['Majors', 3, 151.02, 'Trevor'],
    ['Matt', 2, 139.0, 'Hunter'],
    ['Matt', 4, 133.68, 'Ean'],
    ['Chaz', 14, 132.82, 'Ean'],
    ['Chaz', 2, 132.72, 'Sawyer'],
    ['Sam', 4, 131.8, 'Ross'],
    ['Trevor', 4, 131.31, 'Sawyer'],
    ['Sawyer', 3, 127.64, 'Jared'],
    ['Ean', 2, 127.54, 'Ross']
];

var lowScores2020 = [
    ['Sam', 8, 47.3, 'Majors'],
    ['Majors', 6, 49.7, 'Jared'],
    ['Trevor', 3, 52.68, 'Majors'],
    ['Sam', 13, 54.98, 'Chaz'],
    ['Sam', 14, 55.64, 'Trevor'],
    ['Sawyer', 4, 56.7, 'Trevor'],
    ['Sam', 10, 57.56, 'Basil'],
    ['Jared', 9, 57.56, 'Willis'],
    ['Sawyer', 14, 58.68, 'Jared'],
    ['Jared', 12, 59.26, 'Hunter']
];

var blowouts2020 = [
    [3, 'Majors', 151.02, 'Trevor', 52.68, 98.34],
    [12, 'Willis', 160.02, 'Majors', 82.78, 77.24],
    [4, 'Trevor', 131.32, 'Sawyer', 56.70, 74.62],
    [14, 'Trevor', 120.72, 'Sam', 55.64, 65.08],
    [6, 'Sawyer', 124.56, 'Ross', 66.12, 58.44],
    [12, 'Basil', 124.78, 'Sawyer', 66.62, 58.16],
    [11, 'Ean', 114.42, 'Trevor', 65.44, 48.98],
    [3, 'Sawyer', 127.64, 'Jared', 78.88, 48.76],
    [1, 'Ean', 124.30, 'Sam', 77.22, 47.08],
    [4, 'Matt', 133.68, 'Ean', 88.02, 45.66]
];

var closeGames2020 = [
    [7, 'Matt', 113.02, 'Sawyer', 112.50, 0.52],
    [9, 'Matt', 90.80, 'Basil', 88.48, 2.32],
    [11, 'Majors', 94.62, 'Matt', 92.24, 2.38],
    [8, 'Basil', 80.14, 'Sawyer', 77.72, 2.42],
    [8, 'Hunter', 84.14, 'Ean', 81.34, 2.8],
    [8, 'Matt', 111.64, 'Trevor', 108.62, 3.02],
    [10, 'Matt', 97.20, 'Chaz', 94.06, 3.14],
    [12, 'Ean', 107.80, 'Sam', 103.64, 4.16],
    [5, 'Ean', 122.00, 'Sawyer', 117.70, 4.3],
    [1, 'Jared', 100.80, 'Chaz', 96.40, 4.4],
];

var highest2020 = [
    [14, 'Chaz', 132.82, 'Ean', 119.86, 252.68],
    [12, 'Willis', 160.02, 'Majors', 82.78, 242.80],
    [2, 'Matt', 139.00, 'Hunter', 102.62, 241.62],
    [5, 'Ean', 122.00, 'Sawyer', 117.70, 239.70],
    [2, 'Ean', 127.54, 'Ross', 107.56, 235.10],
    [4, 'Majors', 118.56, 'Chaz', 113.52, 232.08],
    [2, 'Chaz', 132.72, 'Sawyer', 98.76, 231.48],
    [4, 'Sam', 131.80, 'Ross', 98.54, 230.34],
    [6, 'Basil', 120.20, 'Trevor', 108.84, 229.04],
    [7, 'Hunter', 117.02, 'Majors', 110.84, 227.86],
];

var dumpster2020 = [
    [10, 'Basil', 70.54, 'Sam', 57.18, 127.72],
    [6, 'Jared', 79.28, 'Majors', 49.70, 128.98],
    [8, 'Majors', 90.46, 'Sam', 47.30, 137.76],
    [12, 'Hunter', 84.20, 'Jared', 59.26, 143.46],
    [13, 'Chaz', 89.40, 'Sam', 54.98, 144.38],
    [14, 'Jared', 86.94, 'Sawyer', 58.68, 145.62],
    [10, 'Willis', 75.72, 'Sawyer', 70.98, 146.70],
    [7, 'Sam', 82.06, 'Trevor', 66.46, 148.52],
    [9, 'Sam', 86.42, 'Sawyer', 65.02, 151.44],
    [4, 'Willis', 81.24, 'Hunter', 71.00, 152.24],
];
    
var fortunate2020 = [
    [10, 'Basil', 70.54, 'Sam', 57.18, 70.54],
    [10, 'Willis', 75.72, 'Sawyer', 70.98, 75.72],
    [6, 'Jared', 79.28, 'Majors', 49.70, 79.28],
    [8, 'Basil', 80.14, 'Sawyer', 77.72, 80.14],
    [4, 'Willis', 81.24, 'Hunter', 71.00, 81.24],
    [7, 'Sam', 82.06, 'Trevor', 66.46, 82.06],
    [8, 'Hunter', 84.14, 'Ean', 81.34, 84.14],
    [12, 'Hunter', 84.20, 'Jared', 59.26, 84.20],
    [5, 'Matt', 84.54, 'Jared', 71.42, 84.54],
    [9, 'Sam', 86.42, 'Sawyer', 65.02, 86.42],
];

var unfortunate2020 = [
    [14, 'Chaz', 132.82, 'Ean', 119.86, 119.86],
    [5, 'Ean', 122.00, 'Sawyer', 117.70, 117.70],
    [4, 'Majors', 118.56, 'Chaz', 113.52, 113.52],
    [7, 'Matt', 113.02, 'Sawyer', 112.50, 112.50],
    [7, 'Hunter', 117.02, 'Majors', 110.84, 110.84],
    [6, 'Basil', 120.20, 'Trevor', 108.84, 108.84],
    [8, 'Matt', 111.64, 'Trevor', 108.62, 108.62],
    [2, 'Ean', 127.54, 'Ross', 107.56, 107.56],
    [12, 'Ean', 107.8, 'Sam', 103.64, 103.64],
    [13, 'Matt', 118.30, 'Hunter', 103.62, 103.62],
];
