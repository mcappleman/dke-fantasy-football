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
    ['Basil', 9, 7, 2, 0, 1025.32, 795.6, 113.92, 88.40, 71, 28, 0, '71.72%', 6.45, 2.55, 0.55],
    ['Matt', 9, 6, 3, 0, 1012.38, 833.46, 112.49, 92.61, 69, 30, 0, '69.70%', 6.27, 2.73, -0.27],
    ['Sam', 9, 6, 3, 0, 936.82, 753.22, 104.09, 83.69, 58, 41, 0, '58.59%', 5.27, 3.73, 0.73],
    ['Trevor', 9, 5, 4, 0, 909.62, 976.54, 101.07, 108.50, 58, 41, 0, '58.59%', 5.27, 3.73, -0.27],
    ['Majors', 9, 6, 3, 0, 960.08, 887.84, 106.68, 98.65, 56, 43, 0, '56.57%', 5.09, 3.91, 0.91],
    ['Ean', 9, 2, 7, 0, 864.14, 922.24, 96.02, 102.47, 49, 50, 0, '49.49%', 4.45, 4.55, -2.45],
    ['Jared', 9, 4, 5, 0, 836.4, 890.3, 92.93, 98.92, 48, 51, 0, '48.48%', 4.36, 4.64, -0.36],
    ['Hunter', 9, 6, 3, 0, 837.54, 817.88, 93.06, 90.88, 46, 53, 0, '46.46%', 4.18, 4.82, 1.82],
    ['Sawyer', 9, 4, 5, 0, 835.22, 947.92, 92.80, 105.32, 46, 53, 0, '46.46%', 4.18, 4.82, -0.18],
    ['Chaz', 9, 5, 4, 0, 802.94, 805.66, 89.22, 89.52, 38, 61, 0, '38.38%', 3.45, 5.55, 1.55],
    ['Willis', 9, 3, 6, 0, 776.04, 898.48, 86.23, 99.83, 31, 68, 0, '31.31%', 2.82, 6.18, 0.18],
    ['Ross', 9, 0, 9, 0, 739.48, 1006.84, 82.16, 111.87, 24, 75, 0, '24.24%', 2.18, 6.82, -2.18]
];

var highScores2018 = [
    ['Majors', 4, 176.56, 'Jared'],
    ['Basil', 6, 162.9, 'Trevor'],
    ['Hunter', 8, 138.1, 'Sawyer'],
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
    [6, 'Basil', 162.9, 'Trevor', 101.38, 61.52],
    [4, 'Basil', 131.62, 'Sawyer', 77.78, 53.84]
];

var closeGames2018 = [
    [9, 'Sawyer', 89.98, 'Ean', 89.62, 0.36],
    [7, 'Sawyer', 83.16, 'Jared', 81.66, 1.5],
    [3, 'Trevor', 95.86, 'Ross', 94.22, 1.64],
    [9, 'Trevor', 118.78, 'Chaz', 116.6, 2.18],
    [4, 'Trevor', 114.46, 'Matt', 111.9, 2.56]
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
