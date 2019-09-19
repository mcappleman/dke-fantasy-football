$(document).ready(function () {

    $('#table2019').DataTable({
        order: [[2, "desc"]],
        searching: false,
        sDom: '',
        lengthMenu: [[-1], ["All"]],
        data: data2019,
        columns: yearColumnNames
    });

    $('#highScores2019').DataTable({
        order: [[2, "desc"]],
        sDom: '',
        data: highScores2019,
        columns: scoreColumnNames
    });

    $('#lowScores2019').DataTable({
        order: [[2, "asc"]],
        sDom: '',
        data: lowScores2019,
        columns: scoreColumnNames
    });

    $('#blowouts2019').DataTable({
        order: [[5, "desc"]],
        sDom: '',
        data: blowouts2019,
        columns: gameColumnNames
    });

    $('#closeGames2019').DataTable({
        order: [[5, "asc"]],
        sDom: '',
        data: closeGames2019,
        columns: gameColumnNames
    });

    $('#highest2019').DataTable({
        order: [[5, "desc"]],
        sDom: '',
        data: highest2019,
        columns: gameScoringColumnNames
    });

    $('#dumpster2019').DataTable({
        order: [[5, "asc"]],
        sDom: '',
        data: dumpster2019,
        columns: gameScoringColumnNames
    });

});

var data2019 = [
    ['Basil', 2, 1, 1, 0, 173.12, 154.14, 86.56, 77.07, 7, 15, 0, '31.82%', 0.64, 1.36, '0.36'],
    ['Matt', 2, 0, 2, 0, 157.22, 184.28, 78.61, 92.14, 3, 19, 0, '13.64%', 0.27, 1.73, '-0.27'],
    ['Majors', 2, 1, 1, 0, 221.36, 210.88, 110.68, 105.44, 18, 4, 0, '81.82%', 1.64, 0.36, '-0.64'],
    ['Trevor', 2, 1, 1, 0, 215.54, 212.58, 107.77, 106.29, 17, 5, 0, '77.27%', 1.55, 0.45, '-0.55'],
    ['Sam', 2, 1, 1, 0, 202.08, 217.32, 101.04, 108.66, 13, 9, 0, '59.09%', 1.18, 0.82, '-0.18'],
    ['Hunter', 2, 1, 1, 0, 194.74, 196.52, 97.37, 98.26, 9, 13, 0, '40.91%', 0.82, 1.18, '0.18'],
    ['Ross', 2, 1, 1, 0, 168.78, 180.18, 84.39, 90.09, 4, 18, 0, '18.18%', 0.36, 1.64, '0.64'],
    ['Sawyer', 2, 0, 2, 0, 175.32, 212.94, 87.66, 106.47, 8, 14, 0, '36.36%', 0.73, 1.27, '-0.73'],
    ['Ean', 2, 1, 1, 0, 204.18, 209.36, 102.09, 104.68, 13, 9, 0, '59.09%', 1.18, 0.82, '-0.18'],
    ['Jared', 2, 1, 1, 0, 168.86, 156.16, 84.43, 78.08, 11, 11, 0, '50.00%', 1.00, 1.00, '0.00'],
    ['Willis', 2, 2, 0, 0, 204.76, 196.2, 102.38, 98.10, 12, 10, 0, '54.55%', 1.09, 0.91, '0.91'],
    ['Chaz', 2, 2, 0, 0, 211.44, 166.84, 105.72, 83.42, 17, 5, 0, '77.27%', 1.55, 0.45, '0.45']
];

var highScores2019 = [
    ['Majors', 1, 122.62, 'Trevor'],
    ['Jared', 2, 112.22, 'Ross'],
    ['Sam', 1, 112.12, 'Sawyer'],
    ['Chaz', 1, 110.62, 'Ean'],
    ['Sawyer', 1, 109.5, 'Sam']
];


var lowScores2019 = [
    ['Jared', 1, 56.64, 'Basil'],
    ['Sawyer', 2, 65.82, 'Chaz'],
    ['Matt', 1, 67.96, 'Ross'],
    ['Ross', 2, 74.9, 'Jared'],
    ['Basil', 1, 81.26, 'Jared']
];

var blowouts2019 = [
    [2, 'Jared', 112.22, 'Ross', 74.9, 37.32],
    [2, 'Chaz', 100.82, 'Sawyer', 65.82, 35],
    [1, 'Ross', 93.88, 'Matt', 67.96, 25.92],
    [1, 'Basil', 81.26, 'Jared', 56.64, 24.62],
    [2, 'Trevor', 107.82, 'Sam', 89.96, 17.86]
];

var closeGames2019 = [
    [2, 'Hunter', 90.4, 'Matt', 89.26, 1.14],
    [1, 'Sam', 112.12, 'Sawyer', 109.5, 2.62],
    [1, 'Willis', 107.26, 'Hunter', 104.34, 2.92],
    [2, 'Ean', 103.16, 'Majors', 98.74, 4.42],
    [2, 'Willis', 97.5, 'Basil', 91.86, 5.64]
];

var highest2019 = [
    [1, 'Majors', 122.62, 'Trevor', 107.72, 230.34],
    [1, 'Sam', 112.12, 'Sawyer', 109.5, 221.62],
    [1, 'Chaz', 110.62, 'Ean', 101.02, 211.64],
    [1, 'Willis', 107.26, 'Hunter', 104.34, 211.6],
    [2, 'Ean', 103.16, 'Majors', 98.74, 201.9]
];

var dumpster2019 = [
    [1, 'Basil', 81.26, 'Jared', 56.64, 137.9],
    [1, 'Ross', 93.88, 'Matt', 67.96, 161.84],
    [2, 'Chaz', 100.82, 'Sawyer', 65.82, 166.64],
    [2, 'Hunter', 90.4, 'Matt', 89.26, 179.66],
    [2, 'Jared', 112.22, 'Ross', 74.9, 187.12]
];
