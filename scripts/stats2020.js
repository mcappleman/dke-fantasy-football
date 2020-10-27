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
    ['Ean', 7, 5, 2, 0, 758.08, 723.44, 108.30, 103.35, 53, 24, 0, '68.83%', 4.82, 2.18, 0.18],
    ['Sawyer', 7, 3, 4, 0, 740.86, 738.88, 105.84, 105.55, 52, 25, 0, '67.53%', 4.73, 2.27, -1.73],
    ['Matt', 7, 6, 1, 0, 753.4, 626.22, 107.63, 89.46, 49, 28, 0, '63.64%', 4.45, 2.55, 1.55],
    ['Chaz', 7, 3, 4, 0, 726.62, 716.06, 103.80, 102.29, 44, 33, 0, '57.14%', 4.00, 3.00, -1.00],
    ['Hunter', 7, 4, 3, 0, 706.88, 666.18, 100.98, 95.17, 44, 33, 0, '57.14%', 4.00, 3.00, 0.00],
    ['Basil', 7, 4, 3, 0, 714.76, 700.02, 102.11, 100.00, 42, 35, 0, '54.55%', 3.82, 3.18, 0.18],
    ['Majors', 7, 3, 4, 0, 716.26, 673.98, 102.32, 96.28, 42, 35, 0, '54.55%', 3.82, 3.18, -0.82],
    ['Trevor', 7, 2, 5, 0, 654.86, 706.22, 93.55, 100.89, 34, 43, 0, '44.16%', 3.09, 3.91, -1.09],
    ['Willis', 7, 4, 3, 0, 654.1, 640.54, 93.44, 91.51, 29, 48, 0, '37.66%', 2.64, 4.36, 1.36],
    ['Ross', 7, 2, 5, 0, 627.8, 773.74, 89.69, 110.53, 27, 50, 0, '35.06%', 2.45, 4.55, -0.45],
    ['Jared', 7, 3, 4, 0, 616.24, 647.82, 88.03, 92.55, 26, 51, 0, '33.77%', 2.36, 4.64, 0.64],
    ['Sam', 7, 3, 4, 0, 607.62, 664.38, 86.80, 94.91, 20, 57, 0, '25.97%', 1.82, 5.18, 1.18]
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
    ['Trevor', 7, 66.46, 'Sam'],
    ['Sam', 6, 68.1, 'Hunter'],
    ['Hunter', 4, 71.00, 'Sam'],
    ['Jared', 5, 71.42, 'Matt'],
    ['Sam', 3, 72.66, 'Matt'],
    ['Ross', 1, 74.38, 'Matt']
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
    [7, 'Matt', 113.02, 'Sawyer', 112.50, 0.52],
    [5, 'Ean', 122.00, 'Sawyer', 117.70, 4.3],
    [1, 'Jared', 100.80, 'Chaz', 96.40, 4.4],
    [4, 'Majors', 118.56, 'Chaz', 113.52, 5.04],
    [7, 'Ross', 92.44, 'Jared', 87.22, 5.22],
    [3, 'Ean', 106.30, 'Willis', 101.00, 5.3],
    [7, 'Hunter', 117.02, 'Majors', 110.84, 6.18],
    [5, 'Sam', 88.88, 'Willis', 82.44, 6.44],
    [5, 'Chaz', 103.56, 'Trevor', 96.70, 6.86],
    [7, 'Basil', 98.00, 'Ean', 90.60, 7.4]
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
    [7, 'Sam', 82.06, 'Trevor', 66.46, 148.52],
    [4, 'Willis', 81.24, 'Hunter', 71.00, 152.24],
    [5, 'Matt', 84.54, 'Jared', 71.42, 155.96],
    [6, 'Hunter', 91.78, 'Sam', 68.10, 159.88],
    [1, 'Matt', 92.04, 'Ross', 74.38, 166.42],
    [5, 'Sam', 88.88, 'Willis', 82.44, 171.32],
    [3, 'Matt', 106.28, 'Sam', 72.66, 178.94],
    [7, 'Ross', 92.44, 'Jared', 87.22, 179.66],
    [2, 'Willis', 94.58, 'Sam', 86.90, 181.48]
];
    
var fortunate2020 = [
    [6, 'Jared', 79.28, 'Majors', 49.70, 79.28],
    [4, 'Willis', 81.24, 'Hunter', 71.00, 81.24],
    [7, 'Sam', 82.06, 'Trevor', 66.46, 82.06],
    [5, 'Matt', 84.54, 'Jared', 71.42, 84.54],
    [5, 'Sam', 88.88, 'Willis', 82.44, 88.88],
    [6, 'Hunter', 91.78, 'Sam', 68.10, 91.78],
    [1, 'Matt', 92.04, 'Ross', 74.38, 92.04],
    [7, 'Ross', 92.44, 'Jared', 87.22, 92.44],
    [2, 'Willis', 94.58, 'Sam', 86.90, 94.58],
    [7, 'Basil', 98.00, 'Ean', 90.60, 98.00]
];

var unfortunate2020 = [
    [5, 'Ean', 122.00, 'Sawyer', 117.70, 117.70],
    [4, 'Majors', 118.56, 'Chaz', 113.52, 113.52],
    [7, 'Matt', 113.02, 'Sawyer', 112.50, 112.50],
    [7, 'Hunter', 117.02, 'Majors', 110.84, 110.84],
    [6, 'Basil', 120.20, 'Trevor', 108.84, 108.84],
    [2, 'Ean', 127.54, 'Ross', 107.56, 107.56],
    [2, 'Matt', 139.00, 'Hunter', 102.62, 102.62],
    [3, 'Ean', 106.30, 'Willis', 101.00, 101.00],
    [2, 'Chaz', 132.72, 'Sawyer', 98.76, 98.76],
    [4, 'Sam', 131.80, 'Ross', 98.54, 98.54]
];
