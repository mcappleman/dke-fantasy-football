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
    ['Majors', 6, 5, 1, 0, 661.56, 495.84, 110.26, 82.64, 56, 10, 0, '84.85%', 5.09, 0.91, -0.09],
    ['Chaz', 6, 6, 0, 0, 617.7, 474.5, 102.95, 79.08, 48, 18, 0, '72.73%', 4.36, 1.64, 1.64],
    ['Sam', 6, 4, 2, 0, 553.28, 533.74, 92.21, 88.96, 41, 25, 0, '62.12%', 3.73, 2.27, 0.27],
    ['Sawyer', 6, 4, 2, 0, 577.7, 526.98, 96.28, 87.83, 40, 26, 0, '60.61%', 3.64, 2.36, 0.36],
    ['Ross', 6, 2, 4, 0, 546.94, 593.58, 91.16, 98.93, 33, 33, 0, '50.00%', 3.00, 3.00, -1.00],
    ['Hunter', 6, 2, 4, 0, 545.86, 598.7, 90.98, 99.78, 32, 34, 0, '48.48%', 2.91, 3.09, -0.91],
    ['Basil', 6, 2, 4, 0, 518.84, 484.9, 86.47, 80.82, 31, 35, 0, '46.97%', 2.82, 3.18, -0.82],
    ['Willis', 6, 3, 3, 0, 563.38, 542.4, 93.90, 90.40, 31, 35, 0, '46.97%', 2.82, 3.18, 0.18],
    ['Ean', 6, 3, 3, 0, 507.32, 561.36, 84.55, 93.56, 26, 40, 0, '39.39%', 2.36, 3.64, 0.64],
    ['Jared', 6, 1, 5, 0, 508.64, 627.04, 84.77, 104.51, 25, 41, 0, '37.88%', 2.27, 3.73, -1.27],
    ['Trevor', 6, 2, 4, 0, 503.9, 554.44, 83.98, 92.41, 22, 44, 0, '33.33%', 2.00, 4.00, 0.00],
    ['Matt', 6, 2, 4, 0, 434.44, 546.08, 72.41, 91.01, 11, 55, 0, '16.67%', 1.00, 5.00, 1.00],
];

var highScores2022 = [
    ['Willis', 2, 142.16, 'Hunter'],
    ['Sawyer', 5, 133.96, 'Sam'],
    ['Majors', 5, 127.86, 'Jared'],
    ['Sawyer', 4, 122.90, 'Ean'],
    ['Majors', 2, 122.02, 'Matt'],
    ['Chaz', 1, 117.28, 'Majors'],
    ['Majors', 4, 117.06, 'Ross'],
    ['Ean', 2, 115.98, 'Ross'],
    ['Basil', 4, 114.86, 'Jared'],
    ['Ean', 5, 113.50, 'Willis'],
];

var lowScores2022 = [
    ['Ean', 1, 56.02, 'Basil'],
    ['Matt', 3, 58.14, 'Chaz'],
    ['Trevor', 6, 59.64, 'Ean'],
    ['Matt', 5, 59.80, 'Hunter'],
    ['Ean', 3, 61.76, 'Sam'],
    ['Basil', 2, 62.90, 'Sam'],
    ['Willis', 5, 64.06, 'Ean'],
    ['Hunter', 6, 64.88, 'Majors'],
    ['Sawyer', 2, 66.80, 'Chaz'],
    ['Basil', 3, 66.88, 'Majors'],
];

var blowouts2022 = [
    [1, 'Basil', 109.40, 'Ean', 56.02, 53.38],
    [5, 'Majors', 127.86, 'Jared', 75.62, 52.24],
    [5, 'Ean', 113.50, 'Willis', 64.06, 49.44],
    [5, 'Sawyer', 133.96, 'Sam', 85.74, 48.22],
    [2, 'Majors', 122.02, 'Matt', 80.68, 41.34],
    [2, 'Willis', 142.16, 'Hunter', 101.16, 41],
    [2, 'Chaz', 106.98, 'Sawyer', 66.80, 40.18],
    [4, 'Sawyer', 122.90, 'Ean', 84.08, 38.82],
    [4, 'Basil', 114.86, 'Jared', 78.46, 36.4],
    [5, 'Hunter', 94.08, 'Matt', 59.80, 34.28],
];

var closeGames2022 = [
    [3, 'Ross', 78.78, 'Jared', 78.46, 0.32],
    [6, 'Jared', 99.52, 'Sam', 99.10, 0.42],
    [2, 'Trevor', 102.12, 'Jared', 100.38, 1.74],
    [1, 'Sawyer', 97.28, 'Ross', 95.26, 2.02],
    [2, 'Sam', 64.94, 'Basil', 62.90, 2.04],
    [2, 'Ean', 115.98, 'Ross', 112.26, 3.72],
    [6, 'Matt', 76.66, 'Sawyer', 72.62, 4.04],
    [3, 'Sawyer', 84.14, 'Willis', 78.26, 5.88],
    [6, 'Chaz', 86.86, 'Basil', 77.22, 9.64],
    [4, 'Matt', 83.60, 'Trevor', 71.96, 11.64],
];

var highest2022 = [
    [2, 'Willis', 142.16, 'Hunter', 101.16, 243.32],
    [2, 'Ean', 115.98, 'Ross', 112.26, 228.24],
    [5, 'Sawyer', 133.96, 'Sam', 85.74, 219.70],
    [1, 'Chaz', 117.28, 'Majors', 100.72, 218.00],
    [4, 'Chaz', 113.32, 'Hunter', 97.48, 210.80],
    [4, 'Majors', 117.06, 'Ross', 90.50, 207.56],
    [4, 'Sawyer', 122.90, 'Ean', 84.08, 206.98],
    [5, 'Majors', 127.86, 'Jared', 75.62, 203.48],
    [2, 'Majors', 122.02, 'Matt', 80.68, 202.70],
    [2, 'Trevor', 102.12, 'Jared', 100.38, 202.50],
];

var dumpster2022 = [
    [2, 'Sam', 64.94, 'Basil', 62.90, 127.84],
    [6, 'Ean', 75.98, 'Trevor', 59.64, 135.62],
    [6, 'Matt', 76.66, 'Sawyer', 72.62, 149.28],
    [3, 'Chaz', 92.30, 'Matt', 58.14, 150.44],
    [5, 'Hunter', 94.08, 'Matt', 59.80, 153.88],
    [3, 'Sam', 93.10, 'Ean', 61.76, 154.86],
    [4, 'Matt', 83.60, 'Trevor', 71.96, 155.56],
    [3, 'Ross', 78.78, 'Jared', 78.46, 157.24],
    [3, 'Sawyer', 84.14, 'Willis', 78.26, 162.40],
    [3, 'Majors', 95.70, 'Basil', 66.88, 162.58],
];

var fortunate2022 = [
    [2, 'Sam', 64.94, 'Basil', 62.90, 64.94],
    [6, 'Ean', 75.98, 'Trevor', 59.64, 75.98],
    [6, 'Matt', 76.66, 'Sawyer', 72.62, 76.66],
    [3, 'Ross', 78.78, 'Jared', 78.46, 78.78],
    [4, 'Matt', 83.60, 'Trevor', 71.96, 83.60],
    [3, 'Sawyer', 84.14, 'Willis', 78.26, 84.14],
    [6, 'Chaz', 86.86, 'Basil', 77.22, 86.86],
    [3, 'Chaz', 92.30, 'Matt', 58.14, 92.30],
    [3, 'Sam', 93.10, 'Ean', 61.76, 93.10],
    [1, 'Willis', 93.10, 'Matt', 75.56, 93.10],
];

var unfortunate2022 = [
    [2, 'Ean', 115.98, 'Ross', 112.26, 112.26],
    [2, 'Willis', 142.16, 'Hunter', 101.16, 101.16],
    [1, 'Chaz', 117.28, 'Majors', 100.72, 100.72],
    [2, 'Trevor', 102.12, 'Jared', 100.38, 100.38],
    [6, 'Jared', 99.52, 'Sam', 99.10, 99.10],
    [4, 'Chaz', 113.32, 'Hunter', 97.48, 97.48],
    [1, 'Sawyer', 97.28, 'Ross', 95.26, 95.26],
    [4, 'Majors', 117.06, 'Ross', 90.50, 90.50],
    [4, 'Sam', 100.82, 'Willis', 88.58, 88.58],
    [5, 'Ross', 102.92, 'Basil', 87.58, 87.58],
];
