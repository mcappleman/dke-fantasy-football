$(document).ready(function () {
    
        $('#table2011').DataTable({
            order: [[2, "desc"]],
            searching: false,
            sDom: '',
            lengthMenu: [[-1], ["All"]],
            data: data2011,
            columns: yearColumnNames
        });
    
        $('#highScores2011').DataTable({
            order: [[2, "desc"]],
            sDom: '',
            data: highScores2011,
            columns: scoreColumnNames
        });
    
        $('#lowScores2011').DataTable({
            order: [[2, "asc"]],
            sDom: '',
            data: lowScores2011,
            columns: scoreColumnNames
        });
    
        $('#blowouts2011').DataTable({
            order: [[5, "desc"]],
            sDom: '',
            data: blowouts2011,
            columns: gameColumnNames
        });
    
        $('#closeGames2011').DataTable({
            order: [[5, "asc"]],
            sDom: '',
            data: closeGames2011,
            columns: gameColumnNames
        });
    
        $('#highest2011').DataTable({
            order: [[5, "desc"]],
            sDom: '',
            data: highest2011,
            columns: gameScoringColumnNames
        });
    
        $('#dumpster2011').DataTable({
            order: [[5, "asc"]],
            sDom: '',
            data: dumpster2011,
            columns: gameScoringColumnNames
        });
    
    });
    
    var data2011 = [
        ['Willis', 16, 12, 4, 0, 1623.92, 1459.7, 101.50, 91.23, 84, 56, 0, 9.33, 6.22, 2.67],
        ['Matt', 16, 12, 4, 0, 1636.74, 1415.3, 102.30, 88.46, 90, 50, 0, 10.00, 5.56, 2.00],
        ['Skip', 16, 8, 8, 0, 1397.92, 1393.82, 87.37, 87.11, 58, 82, 0, 6.44, 9.11, 1.56],
        ['Trevor', 16, 10, 6, 0, 1568.64, 1461.52, 98.04, 91.35, 82, 58, 0, 9.11, 6.44, 0.89],
        ['Connor', 14, 4, 10, 0, 987.1, 1303.86, 70.51, 93.13, 32, 94, 0, 3.56, 10.44, 0.44],
        ['Majors', 16, 9, 7, 0, 1614.9, 1539.84, 100.93, 96.24, 84, 56, 0, 9.33, 6.22, -0.33],
        ['Ean', 16, 8, 8, 0, 1593.48, 1477.42, 99.59, 92.34, 76, 64, 0, 8.44, 7.11, -0.44],
        ['Sawyer', 16, 7, 9, 0, 1462.66, 1525.54, 91.42, 95.35, 67, 73, 0, 7.44, 8.11, -0.44],
        ['Jared', 14, 3, 11, 0, 1168.66, 1454.78, 83.48, 103.91, 45, 81, 0, 5.00, 9.00, -2.00],
        ['Sam', 16, 5, 11, 0, 1480.3, 1502.54, 92.52, 93.91, 68, 72, 0, 7.56, 8.00, -2.56]
    ];
    
    var highScores2011 = [
        ['Ean', 2, 163.1, 'Jared'],
        ['Majors', 14, 148.24, 'Jared'],
        ['Majors', 8, 141.1, 'Sawyer'],
        ['Willis', 1, 133.78, 'Majors'],
        ['Ean', 12, 130.52, 'Sam']
    ];
    
    var lowScores2011 = [
        ['Connor', 6, 20.1, 'Sawyer'],
        ['Connor', 8, 32.9, 'Willis'],
        ['Connor', 14, 41.2, 'Sam'],
        ['Willis', 7, 49.64, 'Ean'],
        ['Sam', 3, 54.64, 'Ean']
    ];
    
    var blowouts2011 = [
        [2, 'Ean', 163.1, 'Jared', 71.42, 91.68],
        [6, 'Sawyer', 101.48, 'Connor', 20.1, 81.38],
        [14, 'Sam', 118.24, 'Connor', 41.2, 77.04],
        [7, 'Majors', 121.64, 'Connor', 58.9, 62.74],
        [14, 'Majors', 148.24, 'Jared', 88.6, 59.64]
    ];
    
    var closeGames2011 = [
        [5, 'Willis', 104.54, 'Matt', 104.04, .5],
        [9, 'Skip', 79.4, 'Ean', 77.52, 1.88],
        [11, 'Majors', 97.2, 'Trevor', 94.78, 2.42],
        [13, 'Willis', 102.26, 'Skip', 98.64, 3.62],
        [7, 'Matt', 83.2, 'Skip', 78.34, 4.86]
    ];
    
    var highest2011 = [
        [8, 'Majors', 141.1, 'Sawyer', 102.46, 243.56],
        [16, 'Matt', 129.52, 'Willis', 111.66, 241.18],
        [2, 'Majors', 125.52, 'Trevor', 113.5, 239.02],
        [14, 'Majors', 148.24, 'Jared', 88.6, 236.84],
        [2, 'Ean', 163.1, 'Jared', 71.42, 234.52]
    ];
    
    var dumpster2011 = [
        [8, 'Willis', 83.92, 'Connor', 32.9, 116.82],
        [6, 'Sawyer', 20.1, 'Connor', 101.48, 121.58],
        [11, 'Matt', 72.66, 'Connor', 63, 135.66],
        [3, 'Ean', 82.3, 'Sam', 54.64, 136.94],
        [12, 'Jared', 74.02, 'Connor', 69.1, 143.12]
    ];
    