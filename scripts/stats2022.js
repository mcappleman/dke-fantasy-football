$(document).ready(function () {

    $('#table2022').DataTable({
        order: [[2, "desc"]],
        searching: false,
        sDom: '',
        lengthMenu: [[-1], ["All"]],
        data: data2022,
        columns: yearColumnNames
    });

    $('#highScores2022').DataTable({
        order: [[2, "desc"]],
        sDom: '',
        data: highScores2022,
        columns: scoreColumnNames
    });

    $('#lowScores2022').DataTable({
        order: [[2, "asc"]],
        sDom: '',
        data: lowScores2022,
        columns: scoreColumnNames
    });

    $('#blowouts2022').DataTable({
        order: [[5, "desc"]],
        sDom: '',
        data: blowouts2022,
        columns: gameColumnNames
    });

    $('#closeGames2022').DataTable({
        order: [[5, "asc"]],
        sDom: '',
        data: closeGames2022,
        columns: gameColumnNames
    });

    $('#highest2022').DataTable({
        order: [[5, "desc"]],
        sDom: '',
        data: highest2022,
        columns: gameScoringColumnNames
    });

    $('#dumpster2022').DataTable({
        order: [[5, "asc"]],
        sDom: '',
        data: dumpster2022,
        columns: gameScoringColumnNames
    });

    $('#fortunate2022').DataTable({
        order: [[5, "asc"]],
        sDom: '',
        data: fortunate2022,
        columns: fortunateColumnNames
    });

    $('#unfortunate2022').DataTable({
        order: [[5, "desc"]],
        sDom: '',
        data: unfortunate2022,
        columns: fortunateColumnNames
    });

});

var data2022 = [
    ['Majors', 9, 7, 2, 0, 962.66, 761.76, 106.96, 84.64, 76, 23, 0, '76.77%', 6.91, 2.09, 0.09],
    ['Chaz', 9, 9, 0, 0, 877.04, 690.80, 97.45, 76.76, 60, 39, 0, '60.61%', 5.45, 3.55, 3.55],
    ['Hunter', 9, 4, 5, 0, 862.68, 889.02, 95.85, 89.98, 58, 41, 0, '58.59%', 5.27, 3.73, -1.27],
    ['Ross', 9, 4, 5, 0, 839.00, 849.58, 93.22, 94.40, 56, 43, 0, '56.57%', 5.09, 3.91, -1.09],
    ['Sam', 9, 5, 4, 0, 814.08, 853.60, 90.45, 94.84, 55, 44, 0, '55.56%', 5.00, 4.00, 0.00],
    ['Sawyer', 9, 5, 4, 0, 837.00, 809.76, 93.00, 89.97, 55, 44, 0, '55.56%', 5.00, 4.00, 0.00],
    ['Basil', 9, 4, 5, 0, 872.62, 727.62, 96.96, 78.72, 54, 45, 0, '54.55%', 4.91, 4.09, -0.91],
    ['Ean', 9, 5, 4, 0, 826.52, 795.44, 91.84, 88.38, 47, 52, 0, '47.47%', 4.27, 4.73, 0.73],
    ['Jared', 9, 2, 7, 0, 780.18, 924.72, 86.69, 102.75, 42, 57, 0, '42.42%', 3.82, 5.18, -1.82],
    ['Willis', 9, 4, 5, 0, 785.96, 800.22, 87.33, 88.91, 38, 61, 0, '38.38%', 3.45, 5.55, 0.55],
    ['Trevor', 9, 3, 6, 0, 749.76, 923.88, 83.31, 102.65, 34, 65, 0, '34.34%', 3.09, 5.91, -0.09],
    ['Matt', 9, 2, 7, 0, 666.30, 847.40, 74.03, 94.16, 19, 80, 0, '19.19%', 1.73, 7.27, 0.27],
];

var highScores2022 = [
    ['Basil', 9, 170.34, 'Trevor'],
    ['Willis', 2, 142.16, 'Hunter'],
    ['Sawyer', 5, 133.96, 'Sam'],
    ['Trevor', 8, 128.40, 'Hunter'],
    ['Majors', 5, 127.86, 'Jared'],
    ['Sawyer', 4, 122.90, 'Ean'],
    ['Ean', 9, 122.40, 'Matt'],
    ['Majors', 2, 122.02, 'Matt'],
    ['Ean', 8, 120.74, 'Sam'],
    ['Hunter', 7, 119.40, 'Sam'],
];

var lowScores2022 = [
    ['Willis', 9, 52.16, 'Chaz'],
    ['Ean', 1, 56.02, 'Basil'],
    ['Matt', 3, 58.14, 'Chaz'],
    ['Trevor', 9, 58.54, 'Basil'],
    ['Trevor', 7, 59.64, 'Ross'],
    ['Trevor', 6, 59.64, 'Ean'],
    ['Matt', 5, 59.80, 'Hunter'],
    ['Matt', 9, 60.84, 'Ean'],
    ['Ean', 3, 61.76, 'Sam'],
    ['Basil', 2, 62.90, 'Sam'],
];

var blowouts2022 = [
    ['Basil', 9, 170.34, 'Trevor', 58.54, 111.8],
    ['Ean', 9, 122.40, 'Matt', 60.84, 61.56],
    ['Basil', 1, 109.40, 'Ean', 56.02, 53.38],
    ['Majors', 5, 127.86, 'Jared', 75.62, 52.24],
    ['Ean', 5, 113.50, 'Willis', 64.06, 49.44],
    ['Sawyer', 5, 133.96, 'Sam', 85.74, 48.22],
    ['Chaz', 9, 93.50, 'Willis', 52.16, 41.34],
    ['Majors', 2, 122.02, 'Matt', 80.68, 41.34],
    ['Willis', 2, 142.16, 'Hunter', 101.16, 41],
    ['Chaz', 2, 106.98, 'Sawyer', 66.80, 40.18],
];

var closeGames2022 = [
    ['Ross', 3, 78.78, 'Jared', 78.46, 0.32],
    ['Jared', 6, 99.52, 'Sam', 99.10, 0.42],
    ['Chaz', 8, 88.68, 'Matt', 88.08, 0.6],
    ['Chaz', 7, 77.16, 'Ean', 76.06, 1.1],
    ['Trevor', 2, 102.12, 'Jared', 100.38, 1.74],
    ['Sawyer', 1, 97.28, 'Ross', 95.26, 2.02],
    ['Sam', 2, 64.94, 'Basil', 62.90, 2.04],
    ['Ean', 2, 115.98, 'Ross', 112.26, 3.72],
    ['Matt', 6, 76.66, 'Sawyer', 72.62, 4.04],
    ['Sam', 9, 85.40, 'Majors', 79.72, 5.68],
];

var highest2022 = [
    ['Willis', 2, 142.16, 'Hunter', 101.16, 243.32],
    ['Trevor', 8, 128.40, 'Hunter', 106.48, 234.88],
    ['Basil', 9, 170.34, 'Trevor', 58.54, 228.88],
    ['Ean', 2, 115.98, 'Ross', 112.26, 228.24],
    ['Ross', 8, 116.84, 'Jared', 106.14, 222.98],
    ['Sawyer', 5, 133.96, 'Sam', 85.74, 219.70],
    ['Chaz', 1, 117.28, 'Majors', 100.72, 218.00],
    ['Ean', 8, 120.74, 'Sam', 96.08, 216.82],
    ['Chaz', 4, 113.32, 'Hunter', 97.48, 210.80],
    ['Majors', 4, 117.06, 'Ross', 90.50, 207.56],
];

var dumpster2022 = [
    ['Sam', 2, 64.94, 'Basil', 62.90, 127.84],
    ['Ean', 6, 75.98, 'Trevor', 59.64, 135.62],
    ['Chaz', 9, 93.50, 'Willis', 52.16, 145.66],
    ['Matt', 6, 76.66, 'Sawyer', 72.62, 149.28],
    ['Chaz', 3, 92.30, 'Matt', 58.14, 150.44],
    ['Ross', 7, 92.62, 'Trevor', 58.92, 151.54],
    ['Chaz', 7, 77.16, 'Ean', 76.06, 153.22],
    ['Hunter', 5, 94.08, 'Matt', 59.80, 153.88],
    ['Sam', 3, 93.10, 'Ean', 61.76, 154.86],
    ['Matt', 4, 83.60, 'Trevor', 71.96, 155.56],
];

var fortunate2022 = [
    ['Sam', 2, 64.94, 'Basil', 62.90, 64.94],
    ['Ean', 6, 75.98, 'Trevor', 59.64, 75.98],
    ['Matt', 6, 76.66, 'Sawyer', 72.62, 76.66],
    ['Chaz', 7, 77.16, 'Ean', 76.06, 77.16],
    ['Ross', 3, 78.78, 'Jared', 78.46, 78.78],
    ['Matt', 4, 83.60, 'Trevor', 71.96, 83.60],
    ['Sawyer', 3, 84.14, 'Willis', 78.26, 84.14],
    ['Sam', 9, 85.40, 'Majors', 79.72, 85.40],
    ['Chaz', 6, 86.86, 'Basil', 77.22, 86.86],
    ['Chaz', 8, 88.68, 'Matt', 88.08, 88.68],
];

var unfortunate2022 = [
    ['Ean', 2, 115.98, 'Ross', 112.26, 112.26],
    ['Trevor', 8, 128.40, 'Hunter', 106.48, 106.48],
    ['Ross', 8, 116.84, 'Jared', 106.14, 106.14],
    ['Willis', 2, 142.16, 'Hunter', 101.16, 101.16],
    ['Chaz', 1, 117.28, 'Majors', 100.72, 100.72],
    ['Trevor', 2, 102.12, 'Jared', 100.38, 100.38],
    ['Jared', 6, 99.52, 'Sam', 99.10, 99.10],
    ['Chaz', 4, 113.32, 'Hunter', 97.48, 97.48],
    ['Ean', 8, 120.74, 'Sam', 96.08, 96.08],
    ['Sawyer', 1, 97.28, 'Ross', 95.26, 95.26],
];
