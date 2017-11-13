$(document).ready(function () {
    
        $('#table2012').DataTable({
            order: [[2, "desc"]],
            searching: false,
            sDom: '',
            lengthMenu: [[-1], ["All"]],
            data: data2012,
            columns: yearColumnNames
        });
    
        $('#highScores2012').DataTable({
            order: [[2, "desc"]],
            sDom: '',
            data: highScores2012,
            columns: scoreColumnNames
        });
    
        $('#lowScores2012').DataTable({
            order: [[2, "asc"]],
            sDom: '',
            data: lowScores2012,
            columns: scoreColumnNames
        });
    
        $('#blowouts2012').DataTable({
            order: [[5, "desc"]],
            sDom: '',
            data: blowouts2012,
            columns: gameColumnNames
        });
    
        $('#closeGames2012').DataTable({
            order: [[5, "asc"]],
            sDom: '',
            data: closeGames2012,
            columns: gameColumnNames
        });
    
        $('#highest2012').DataTable({
            order: [[5, "desc"]],
            sDom: '',
            data: highest2012,
            columns: gameScoringColumnNames
        });
    
        $('#dumpster2012').DataTable({
            order: [[5, "asc"]],
            sDom: '',
            data: dumpster2012,
            columns: gameScoringColumnNames
        });
    
    });
    
    var data2012 = [
        ['CJ', 16, 11, 5, 0, 1453.96, 1404.68, 90.87, 87.79, 80, 88, 0, 7.27, 8.00, 3.73],
        ['Sawyer', 15, 10, 5, 0, 1409.5, 1274.06, 93.97, 84.94, 78, 83, 0, 7.09, 7.55, 2.91],
        ['Majors', 16, 9, 7, 0, 1446.4, 1444.32, 90.40, 90.27, 84, 84, 0, 7.64, 7.64, 1.36],
        ['Trevor', 16, 7, 9, 0, 1425.66, 1464.18, 89.10, 91.51, 71, 97, 0, 6.45, 8.82, 0.55],
        ['Matt', 15, 9, 6, 0, 1477.74, 1381.72, 98.52, 92.11, 98, 63, 0, 8.91, 5.73, 0.09],
        ['Hunter', 16, 8, 8, 0, 1524.42, 1564.12, 95.28, 97.76, 88, 79, 1, 8.00, 7.18, 0.00],
        ['Sam', 15, 7, 8, 0, 1350.84, 1298.1, 90.06, 86.54, 77, 84, 0, 7.00, 7.64, 0.00],
        ['Drew', 15, 7, 8, 0, 1380.86, 1460.66, 92.06, 97.38, 79, 82, 0, 7.18, 7.45, -0.18],
        ['Chaz', 15, 7, 8, 0, 1407.36, 1310.46, 93.82, 87.36, 85, 76, 0, 7.73, 6.91, -0.73],
        ['Ean', 15, 6, 9, 0, 1334.24, 1405.84, 88.95, 93.72, 76, 84, 1, 6.91, 7.64, -0.91],
        ['Jared', 15, 6, 9, 0, 1391.54, 1427.4, 92.77, 95.16, 86, 75, 0, 7.82, 6.82, -1.82],
        ['Willis', 15, 5, 10, 0, 1308.74, 1475.72, 87.25, 98.38, 77, 84, 0, 7.00, 7.64, -2.00]
    ];
    
    var highScores2012 = [
        ['Drew', 6, 159.48, 'Sawyer'],
        ['Chaz', 15, 154.98, 'Willis'],
        ['Sawyer', 9, 145.24, 'Jared'],
        ['Hunter', 4, 140.96, 'Trevor'],
        ['CJ', 12, 130.54, 'Hunter']
    ];
    
    
    var lowScores2012 = [
        ['CJ', 13, 31.9, 'Sam'],
        ['Drew', 5, 40.34, 'CJ'],
        ['Majors', 8, 47.34, 'Sawyer'],
        ['Willis', 14, 47.34, 'Hunter'],
        ['Jared', 14, 48.08, 'Majors']
    ];
    
    var blowouts2012 = [
        [13, 'Sam', 118.64, 'CJ', 31.9, 86.74],
        [8, 'Sawyer', 121.4, 'Majors', 47.34, 74.06],
        [11, 'Matt', 122.54, 'Hunter', 48.64, 73.9],
        [6, 'Sam', 123.78, 'CJ', 55.5, 68.28],
        [5, 'CJ', 98.44, 'Drew', 40.34, 58.1]
    ];
    
    var closeGames2012 = [
        [15, 'Sam', 57.24, 'Jared', 57.14, .1],
        [5, 'Jared', 115.36, 'Trevor', 115.2, .16],
        [16, 'Sawyer', 102.56, 'Matt', 102.38, .18],
        [12, 'Sawyer', 86.5, 'Willis', 86.3, .2],
        [11, 'Willis', 106.6, 'Drew', 106.2, .4]
    ];
    
    var highest2012 = [
        [6, 'Drew', 159.48, 'Sawyer', 109.96, 269.44],
        [15, 'Chaz', 154.98, 'Willis', 104.18, 259.16],
        [4, 'Hunter', 128.84, 'Trevor', 101.48, 250.3],
        [10, 'Hunter', 118.82, 'Chaz', 112.62, 241.46],
        [9, 'Sawyer', 145.24, 'Jared', 88.12, 233.36]
    ];
    
    var dumpster2012 = [
        [8, 'Trevor', 52.74, 'Willis', 48.26, 101],
        [15, 'Sam', 57.24, 'Jared', 57.14, 114.38],
        [3, 'Ean', 74.32, 'Sam', 50.82, 125.14],
        [13, 'Majors', 65.64, 'Willis', 63.94, 129.58],
        [7, 'Matt', 69.36, 'CJ', 61.22, 130.58]
    ];
    