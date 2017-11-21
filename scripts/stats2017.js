$(document).ready(function () {

    $('#table2017').DataTable({
        order: [[2, "desc"]],
        searching: false,
        sDom: '',
        lengthMenu: [[-1], ["All"]],
        data: data2017,
        columns: yearColumnNames
    });

    $('#highScores2017').DataTable({
        order: [[2, "desc"]],
        sDom: '',
        data: highScores2017,
        columns: scoreColumnNames
    });

    $('#lowScores2017').DataTable({
        order: [[2, "asc"]],
        sDom: '',
        data: lowScores2017,
        columns: scoreColumnNames
    });

    $('#blowouts2017').DataTable({
        order: [[5, "desc"]],
        sDom: '',
        data: blowouts2017,
        columns: gameColumnNames
    });

    $('#closeGames2017').DataTable({
        order: [[5, "asc"]],
        sDom: '',
        data: closeGames2017,
        columns: gameColumnNames
    });

    $('#highest2017').DataTable({
        order: [[5, "desc"]],
        sDom: '',
        data: highest2017,
        columns: gameScoringColumnNames
    });

    $('#dumpster2017').DataTable({
        order: [[5, "asc"]],
        sDom: '',
        data: dumpster2017,
        columns: gameScoringColumnNames
    });

});

var data2017 = [
    ['Majors', 11, 8, 3, 0, 1114.56, 976.84, 101.32, 88.80, 86, 35, 0, '71.07%', 7.82, 3.18, 0.18],
    ['Trevor', 11, 8, 3, 0, 1046.54, 930.84, 95.14, 84.62, 77, 44, 0, '63.64%', 7.00, 4.00, 1.00],
    ['Matt', 11, 6, 5, 0, 1004.06, 943.74, 91.28, 85.79, 69, 52, 0, '57.02%', 6.27, 4.73, -0.27],
    ['Sam', 11, 5, 6, 0, 979.84, 938.68, 89.08, 85.33, 66, 55, 0, '54.55%', 6.00, 5.00, -1.00],
    ['Basil', 11, 5, 5, 1, 988.08, 999.8, 89.83, 90.89, 66, 54, 1, '54.96%', 6.05, 4.95, -1.05],
    ['Willis', 11, 6, 5, 0, 952.26, 926.92, 86.57, 84.27, 61, 60, 0, '50.41%', 5.55, 5.45, 0.45],
    ['Chaz', 11, 5, 6, 0, 945.98, 941, 86.00, 85.55, 62, 59, 0, '51.24%', 5.64, 5.36, -0.64],
    ['Ean', 11, 5, 6, 0, 912.88, 957.68, 82.99, 87.06, 55, 66, 0, '45.45%', 5.00, 6.00, 0.00],
    ['Sawyer', 11, 6, 5, 0, 878.24, 850.62, 79.84, 77.33, 47, 74, 0, '38.84%', 4.27, 6.73, 1.73],
    ['Hunter', 11, 6, 4, 1, 933, 974.02, 84.82, 88.55, 55, 65, 1, '45.87%', 5.05, 5.95, 0.95],
    ['Ross', 11, 3, 8, 0, 881.48, 1002.36, 80.13, 91.12, 46, 75, 0, '38.02%', 4.18, 6.82, -1.18],
    ['Jared', 11, 2, 9, 0, 784.24, 978.66, 71.29, 88.97, 35, 86, 0, '28.93%', 3.18, 7.82, -1.18]
];

var highScores2017 = [
    ['Matt', 9, 131.52, 'Hunter'],
    ['Majors', 7, 127.52, 'Willis'],
    ['Sam', 3, 121.82, 'Ean'],
    ['Chaz', 8, 119.66, 'Basil'],
    ['Trevor', 8, 118.78, 'Sawyer']
];


var lowScores2017 = [
    ['Jared', 8, 41.72, 'Willis'],
    ['Sawyer', 9, 50.28, 'Basil'],
    ['Jared', 11, 51, 'Matt'],
    ['Sawyer', 11, 52.22, 'Ean'],
    ['Ross', 10, 53.32, 'Sam']
];

var blowouts2017 = [
    [10, 'Sam', 112.44, 'Ross', 53.32, 59.12],
    [5, 'Trevor', 112.14, 'Hunter', 55.18, 56.96],
    [9, 'Matt', 131.52, 'Hunter', 74.92, 56.6],
    [4, 'Trevor', 107.78, 'Willis', 55.22, 52.56],
    [7, 'Basil', 106.02, 'Trevor', 56.62, 49.4]
];

var closeGames2017 = [
    [1, 'Sawyer', 58.64, 'Ean', 57.72, .92],
    [9, 'Sam', 105.8, 'Majors', 103.88, 1.92],
    [3, 'Matt', 82.22, 'Chaz', 80.1, 2.12],
    [7, 'Ean', 77.08, 'Matt', 74.58, 2.5],
    [1, 'Matt', 84.16, 'Sam', 81.58, 2.58]
];

var highest2017 = [
    [7, 'Majors', 127.52, 'Willis', 112.7, 240.22],
    [11, 'Hunter', 120.4, 'Basil', 116.12, 236.52],
    [11, 'Majors', 121.38, 'Ross', 109.62, 231],
    [3, 'Sam', 121.82, 'Ean', 104.92, 226.74],
    [6, 'Trevor', 110.7, 'Ean', 103.82, 214.52]
];

var dumpster2017 = [
    [9, 'Basil', 60.56, 'Sawyer', 50.28, 110.84],
    [1, 'Sawyer', 58.64, 'Ean', 57.72, 116.36],
    [1, 'Majors', 64.1, 'Ross', 54.92, 119.02],
    [8, 'Willis', 77.72, 'Jared', 41.72, 119.44],
    [8, 'Hunter', 65.76, 'Sam', 57.42, 123.18]
];
