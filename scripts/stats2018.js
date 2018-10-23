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
    ['Basil', 7, 7, 0, 0, 844.02, 589.16, 120.57, 84.17, 63, 14, 0, '81.82%', 5.73, 1.27, 1.27],
    ['Matt', 7, 5, 2, 0, 793.86, 619.98, 113.41, 88.57, 57, 20, 0, '74.03%', 5.18, 1.82, -0.18],
    ['Majors', 7, 5, 2, 0, 775.1, 696.56, 110.73, 99.51, 46, 31, 0, '59.74%', 4.18, 2.82, 0.82],
    ['Ean', 7, 2, 5, 0, 714.14, 699.4, 102.02, 99.91, 43, 34, 0, '55.84%', 3.91, 3.09, -1.91],
    ['Jared', 7, 3, 4, 0, 648.46, 733.84, 92.64, 104.83, 37, 40, 0, '48.05%', 3.36, 3.64, -0.36],
    ['Trevor', 7, 3, 4, 0, 688.02, 778.78, 98.29, 111.25, 41, 36, 0, '53.25%', 3.73, 3.27, -0.73],
    ['Sam', 7, 4, 3, 0, 715.14, 641.48, 102.16, 91.64, 45, 32, 0, '58.44%', 4.09, 2.91, -0.09],
    ['Hunter', 7, 5, 2, 0, 648.08, 620, 92.58, 88.57, 35, 42, 0, '45.45%', 3.18, 3.82, 1.82],
    ['Sawyer', 7, 3, 4, 0, 636.18, 720.2, 90.88, 102.89, 32, 45, 0, '41.56%', 2.91, 4.09, 0.09],
    ['Chaz', 7, 4, 3, 0, 583.72, 594.04, 83.39, 84.86, 23, 54, 0, '29.87%', 2.09, 4.91, 1.91],
    ['Ross', 7, 0, 7, 0, 569.16, 761.14, 81.31, 108.73, 19, 58, 0, '24.68%', 1.73, 5.27, -1.73],
    ['Willis', 7, 1, 6, 0, 592.4, 753.7, 84.63, 107.67, 21, 56, 0, '27.27%', 1.91, 5.09, -0.91]
];

var highScores2018 = [
    ['Majors', 4, 176.56, 'Jared'],
    ['Basil', 6, 162.9, 'Trevor'],
    ['Sam', 7, 133.06, 'Trevor'],
    ['Matt', 1, 131.7, 'Sam'],
    ['Basil', 4, 131.62, 'Sawyer']
];


var lowScores2018 = [
    ['Willis', 3, 59.76, 'Sawyer'],
    ['Ross', 5, 61.94, 'Basil'],
    ['Willis', 6, 62.44, 'Sam'],
    ['Ross', 7, 62.5, 'Ean'],
    ['Jared', 6, 62.56, 'Hunter']
];

var blowouts2018 = [
    [4, 'Majors', 176.56, 'Jared', 104.58, 71.98],
    [5, 'Basil', 125.58, 'Ross', 61.94, 63.64],
    [6, 'Basil', 162.9, 'Trevor', 101.38, 61.52],
    [4, 'Basil', 131.62, 'Sawyer', 77.78, 53.84],
    [7, 'Ean', 115.76, 'Ross', 62.5, 53.26]
];

var closeGames2018 = [
    [7, 'Sawyer', 83.16, 'Jared', 81.66, 1.5],
    [3, 'Trevor', 95.86, 'Ross', 94.22, 1.64],
    [4, 'Trevor', 114.46, 'Matt', 111.9, 2.56],
    [5, 'Jared', 96.02, 'Trevor', 92.72, 3.3],
    [1, 'Ean', 102.36, 'Basil', 106.04, 3.68]
];

var highest2018 = [
    [4, 'Majors', 176.56, 'Jared', 104.58, 281.14],
    [6, 'Basil', 162.9, 'Trevor', 101.38, 264.28],
    [1, 'Matt', 131.7, 'Sam', 118.48, 250.18],
    [4, 'Willis', 129.2, 'Ean', 120.2, 249.4],
    [7, 'Sam', 133.06, 'Trevor', 104.42, 237.48]
];

var dumpster2018 = [
    [4, 'Hunter', 81.18, 'Chaz', 70.68, 151.86],
    [3, 'Sawyer', 95.74, 'Willis', 59.76, 155.5],
    [4, 'Sam', 82.76, 'Ross', 76, 158.76],
    [3, 'Basil', 98.6, 'Hunter', 63.38, 161.98],
    [5, 'Chaz', 96.02, 'Willis', 78.34, 164.36]
];
