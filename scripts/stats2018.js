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
    ['Basil', 10, 8, 2, 0, 1118.08, 873.06, 111.81, 87.31, 74, 36, 0, '67.27%', 6.73, 3.27, 1.27],
    ['Matt', 10, 6, 4, 0, 1089.84, 926.22, 108.98, 92.62, 70, 40, 0, '63.64%', 6.36, 3.64, -0.36],
    ['Sam', 10, 6, 4, 0, 1038.76, 875.92, 103.88, 87.59, 62, 48, 0, '56.36%', 5.64, 4.36, 0.36],
    ['Trevor', 10, 5, 5, 0, 1017.42, 1087.16, 101.74, 108.72, 65, 45, 0, '59.09%', 5.91, 4.09, -0.91],
    ['Majors', 10, 7, 3, 0, 1097.98, 962.36, 109.80, 96.24, 67, 43, 0, '60.91%', 6.09, 3.91, 0.91],
    ['Ean', 10, 2, 8, 0, 938.66, 1060.14, 93.87, 106.01, 49, 61, 0, '44.55%', 4.45, 5.55, -2.45],
    ['Jared', 10, 5, 5, 0, 959.1, 992.24, 95.91, 99.22, 58, 52, 0, '52.73%', 5.27, 4.73, -0.27],
    ['Hunter', 10, 7, 3, 0, 942.1, 921.9, 94.21, 92.19, 52, 58, 0, '47.27%', 4.73, 5.27, 2.27],
    ['Sawyer', 10, 5, 5, 0, 945.84, 1055.72, 94.58, 105.57, 54, 56, 0, '49.09%', 4.91, 5.09, 0.09],
    ['Chaz', 10, 5, 5, 0, 883.26, 923.76, 88.33, 92.38, 40, 70, 0, '36.36%', 3.64, 6.36, 1.36],
    ['Willis', 10, 3, 7, 0, 880.06, 1003.04, 88.01, 100.30, 36, 74, 0, '32.73%', 3.27, 6.73, -0.27],
    ['Ross', 10, 1, 9, 0, 857.58, 1087.16, 85.76, 108.72, 33, 77, 0, '30.00%', 3.00, 7.00, -2.00]
];

var highScores2018 = [
    ['Majors', 4, 176.56, 'Jared'],
    ['Basil', 6, 162.9, 'Trevor'],
    ['Hunter', 8, 138.1, 'Sawyer'],
    ['Majors', 10, 137.9, 'Ean'],
    ['Matt', 8, 133.06, 'Ross'],
    ['Sam', 7, 133.06, 'Trevor']
];


var lowScores2018 = [
    ['Hunter', 9, 51.36, 'Sam'],
    ['Willis', 3, 59.76, 'Sawyer'],
    ['Jared', 8, 59.8, 'Willis'],
    ['Ean', 8, 60.38, 'Sam'],
    ['Ross', 5, 61.94, 'Basil']
];

var blowouts2018 = [
    [8, 'Sam', 132.86, 'Ean', 60.38, 72.48],
    [4, 'Majors', 176.56, 'Jared', 104.58, 71.98],
    [5, 'Basil', 125.58, 'Ross', 61.94, 63.64],
    [10, 'Majors', 137.9, 'Ean', 74.52, 63.38],
    [6, 'Basil', 162.9, 'Trevor', 101.38, 61.52]
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
    [8, 'Willis', 71, 'Jared', 59.8, 130.8],
    [9, 'Sam', 88.82, 'Hunter', 51.36, 140.18],
    [4, 'Hunter', 81.18, 'Chaz', 70.68, 151.86],
    [3, 'Sawyer', 95.74, 'Willis', 59.76, 155.5],
    [4, 'Sam', 82.76, 'Ross', 76, 158.76]
];
