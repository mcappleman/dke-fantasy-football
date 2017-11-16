$(document).ready(function () {
    
        $('#table2013').DataTable({
            order: [[2, "desc"]],
            searching: false,
            sDom: '',
            lengthMenu: [[-1], ["All"]],
            data: data2013,
            columns: yearColumnNames
        });
    
        $('#highScores2013').DataTable({
            order: [[2, "desc"]],
            sDom: '',
            data: highScores2013,
            columns: scoreColumnNames
        });
    
        $('#lowScores2013').DataTable({
            order: [[2, "asc"]],
            sDom: '',
            data: lowScores2013,
            columns: scoreColumnNames
        });
    
        $('#blowouts2013').DataTable({
            order: [[5, "desc"]],
            sDom: '',
            data: blowouts2013,
            columns: gameColumnNames
        });
    
        $('#closeGames2013').DataTable({
            order: [[5, "asc"]],
            sDom: '',
            data: closeGames2013,
            columns: gameColumnNames
        });
    
        $('#highest2013').DataTable({
            order: [[5, "desc"]],
            sDom: '',
            data: highest2013,
            columns: gameScoringColumnNames
        });
    
        $('#dumpster2013').DataTable({
            order: [[5, "asc"]],
            sDom: '',
            data: dumpster2013,
            columns: gameScoringColumnNames
        });
    
    });
    
    var data2013 = [
        ['Chaz', 15, 9, 6, 0, 1336.36, 1344.74, 89.09, 89.65, 90, 97, 0, 6.92, 7.46, 2.08],
        ['Ean', 15, 9, 6, 0, 1400.98, 1392.56, 93.40, 92.84, 95, 92, 0, 7.31, 7.08, 1.69],
        ['Sawyer', 16, 10, 6, 0, 1566.02, 1413, 97.88, 88.31, 109, 85, 0, 8.38, 6.54, 1.62],
        ['Matt', 15, 6, 9, 0, 1218.5, 1354.36, 81.23, 90.29, 66, 121, 0, 5.08, 9.31, 0.92],
        ['Hunter', 16, 8, 8, 0, 1402.62, 1463.58, 87.66, 91.47, 94, 100, 0, 7.23, 7.69, 0.77],
        ['Willis', 15, 11, 4, 0, 1569.36, 1252.32, 104.62, 83.49, 138, 49, 0, 10.62, 3.77, 0.38],
        ['Basil', 15, 11, 4, 0, 1584.44, 1294.96, 105.63, 86.33, 139, 48, 0, 10.69, 3.69, 0.31],
        ['Majors', 15, 8, 7, 0, 1407.34, 1341.64, 93.82, 89.44, 104, 83, 0, 8.00, 6.38, 0.00],
        ['Ross', 15, 7, 8, 0, 1340.58, 1336.3, 89.37, 89.09, 91, 96, 0, 7.00, 7.38, 0.00],
        ['Sam', 16, 7, 9, 0, 1453.02, 1354.48, 90.81, 84.66, 91, 103, 0, 7.00, 7.92, 0.00],
        ['Drew', 16, 8, 8, 0, 1478.54, 1414.62, 92.41, 88.41, 105, 89, 0, 8.08, 6.85, -0.08],
        ['CJ', 15, 7, 8, 0, 1339.5, 1462.46, 89.30, 97.50, 100, 87, 0, 7.69, 6.69, -0.69],
        ['Trevor', 13, 3, 10, 0, 1011.84, 1217.3, 77.83, 93.64, 52, 117, 0, 4.00, 9.00, -1.00],
        ['Jared', 13, 1, 12, 0, 882.58, 1349.36, 67.89, 103.80, 31, 138, 0, 2.38, 10.62, -1.38]
    ];
    
    var highScores2013 = [
        ['Sawyer', 13, 181.92, 'Jared'],
        ['Ean', 9, 151.54, 'CJ'],
        ['Basil', 11, 151.48, 'Jared'],
        ['Sam', 14, 143.82, 'Ross'],
        ['Majors', 6, 139.1, 'Chaz']
    ];
    
    
    var lowScores2013 = [
        ['Jared', 8, 16.94, 'Sam'],
        ['Hunter', 13, 36.88, 'Ross'],
        ['CJ', 8, 43.76, 'Sawyer'],
        ['Jared', 7, 42.82, 'Basil'],
        ['Jared', 12, 44.86, 'Willis']
    ];
    
    var blowouts2013 = [
        [11, 'Basil', 151.48, 'Jared', 58.34, 93.14],
        [9, 'Ross', 126.5, 'Willis', 49.94, 76.56],
        [13, 'Sawyer', 181.92, 'Jared', 105.44, 76.48],
        [8, 'Sawyer', 117.14, 'CJ', 43.76, 73.38],
        [6, 'Majors', 139.1, 'Chaz', 66.98, 72.12]
    ];
    
    var closeGames2013 = [
        [5, 'Drew', 102.76, 'Majors', 101.66, 1.1],
        [15, 'Hunter', 99.12, 'CJ', 97.94, 1.18],
        [10, 'Sam', 90.72, 'Majors', 88.46, 2.26],
        [4, 'CJ', 89.42, 'Basil', 85.48, 3.94],
        [4, 'Hunter', 118.82, 'Sam', 114.84, 3.98]
    ];
    
    var highest2013 = [
        [13, 'Sawyer', 181.92, 'Jared', 105.44, 287.36],
        [9, 'Ean', 151.54, 'CJ', 92.08, 243.62],
        [8, 'Basil', 133.42, 'Willis', 101.48, 234.9],
        [4, 'Hunter', 118.82, 'Sam', 114.84, 233.66],
        [15, 'Ross', 118.02, 'Matt', 111.5, 229.52]
    ];
    
    var dumpster2013 = [
        [8, 'Sam', 65.74, 'Jared', 16.94, 82.68],
        [6, 'CJ', 68.88, 'Jared', 52.76, 121.64],
        [9, 'Drew', 79.3, 'Matt', 48.34, 127.64],
        [5, 'Matt', 70.76, 'Hunter', 58.4, 133.48],
        [12, 'Matt', 71.32, 'Ross', 63.26, 134.58]
    ];
    