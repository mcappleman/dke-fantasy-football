$(document).ready(function() {

    $('#tableall').DataTable( {
        order: [[2, "desc"]],
        searching: false,
        sDom: '',
        lengthMenu: [[-1], ["All"]],
        data: dataSet,
        columns: columnNames
    } );

    $('#table2017').DataTable( {
        order: [[2, "desc"]],
        searching: false,
        sDom: '',
        lengthMenu: [[-1], ["All"]],
        data: data2017,
        columns: yearColumnNames
    } );

    $('#table2016').DataTable( {
        order: [[2, "desc"]],
        searching: false,
        sDom: '',
        lengthMenu: [[-1], ["All"]],
        data: data2016,
        columns: yearColumnNames
    } );

    $('#table2015').DataTable( {
        order: [[2, "desc"]],
        searching: false,
        sDom: '',
        lengthMenu: [[-1], ["All"]],
        data: data2015,
        columns: yearColumnNames
    } );

    $('#table2014').DataTable( {
        order: [[2, "desc"]],
        searching: false,
        sDom: '',
        lengthMenu: [[-1], ["All"]],
        data: data2014,
        columns: yearColumnNames
    } );

    $('#table2013').DataTable( {
        order: [[2, "desc"]],
        searching: false,
        sDom: '',
        lengthMenu: [[-1], ["All"]],
        data: data2013,
        columns: yearColumnNames
    } );

    $('#table2012').DataTable( {
        order: [[2, "desc"]],
        searching: false,
        sDom: '',
        lengthMenu: [[-1], ["All"]],
        data: data2012,
        columns: yearColumnNames
    } );

    $('#table2011').DataTable( {
        order: [[2, "desc"]],
        searching: false,
        sDom: '',
        lengthMenu: [[-1], ["All"]],
        data: data2011,
        columns: yearColumnNames
    } );

} );

var columnNames = [
    { title: "Name" },
    { title: "Games" },
    { title: "Wins" },
    { title: "Losses" },
    { title: "Ties" },
    { title: "Win Percentage" },
    { title: "Points For" },
    { title: "Points Against" },
    { title: "Points per Game" },
    { title: "PA per game" },
    { title: "Total Wins" },
    { title: "Total Losses" },
    { title: "Total Ties" },
    { title: "Expected Win Percentage" },
    { title: "Excess Win Percentage" },
    { title: "Expected Wins" },
    { title: "Expected Losses" },
    { title: "Excess Wins" },
];

var yearColumnNames = [
    { title: "Name" },
    { title: "Games" },
    { title: "Wins" },
    { title: "Losses" },
    { title: "Ties" },
    { title: "Points For" },
    { title: "Points Against" },
    { title: "Points per Game" },
    { title: "PA per game" },
    { title: "Total Wins" },
    { title: "Total Losses" },
    { title: "Total Ties" },
    { title: "Expected Wins" },
    { title: "Expected Losses" },
    { title: "Excess Wins" },
];

var dataSet = [
    ['Basil',70,38,31,1,'54.29%',6827.52,6476.72,97.54,92.52,448,323,1,'58.10%','-3.81%',40.7,29.3,-2.7],
    ['Willis',101,58,43,0,'57.43%',9670.1,9222.96,95.74,91.32,610,463,0,'56.85%','0.58%',57.4,43.6,0.6],
    ['Hunter',86,50,35,1,'58.14%',8194.48,7911.88,95.28,92.00,532,406,2,'56.70%','1.44%',48.8,37.2,1.2],
    ['Majors',100,59,41,0,'59.00%',9655.5,9029.7,96.56,90.30,590,476,0,'55.35%','3.65%',55.3,44.7,3.7],
    ['Matt',99,55,44,0,'55.56%',9201.78,8966.32,92.95,90.57,550,509,0,'51.94%','3.62%',51.4,47.6,3.6],
    ['Sawyer',102,56,46,0,'54.90%',9523.58,9324.64,93.37,91.42,551,529,0,'51.02%','3.88%',52.0,50.0,4.0],
    ['Ross',69,37,32,0,'53.62%',6479.34,6152.28,93.90,89.16,382,383,0,'49.93%','3.69%',34.5,34.5,2.5],
    ['Chaz',68,33,35,0,'48.53%',6210.28,6096.96,91.33,89.66,375,383,0,'49.47%','-0.94%',33.6,34.4,-0.6],
    ['Sam',101,45,56,0,'44.55%',9244.98,8991.56,91.53,89.03,516,557,0,'48.09%','-3.54%',48.6,52.4,-3.6],
    ['Trevor',84,38,46,0,'45.24%',7596.52,7931.72,90.43,94.43,429,465,0,'47.99%','-2.75%',40.3,43.7,-2.3],
    ['Ean',99,36,63,0,'36.36%',8597.68,9381.54,86.85,94.76,443,615,1,'41.88%','-5.52%',41.5,57.5,-5.5],
    ['Jared',96,30,66,0,'31.25%',7945.88,9275.92,82.77,96.62,383,651,0,'37.04%','-5.79%',35.6,60.4,-5.6]
];

var data2017 = [
    ['Trevor',8,6,2,0,764.2,675.04,95.53,84.38,59,29,0,5.36,2.64,0.64],
    ['Majors',8,6,2,0,780.02,672.86,97.50,84.11,56,32,0,5.09,2.91,0.91],
    ['Basil',8,3,4,1,712.46,754.18,89.06,94.27,47,40,1,4.32,3.68,-1.32],
    ['Matt',8,4,4,0,696.12,719.16,87.02,89.90,47,41,0,4.27,3.73,-0.27],
    ['Ean',8,3,5,0,678.66,736.56,84.83,92.07,46,42,0,4.18,3.82,-1.18],
    ['Chaz',8,3,5,0,673.86,681.84,84.23,85.23,46,42,0,4.18,3.82,-1.18],
    ['Willis',8,4,4,0,682.42,658.28,85.30,82.29,43,45,0,3.91,4.09,0.09],
    ['Sawyer',8,6,2,0,687.18,603.08,85.90,75.39,42,46,0,3.82,4.18,2.18],
    ['Sam',8,3,5,0,683.04,678.92,85.38,84.87,42,46,0,3.82,4.18,-0.82],
    ['Hunter',8,5,2,1,664.82,634.28,83.10,79.29,41,46,1,3.77,4.23,1.23],
    ['Ross',8,3,5,0,631.76,676.6,78.97,84.58,31,57,0,2.82,5.18,0.18],
    ['Jared',8,1,7,0,571.04,734.78,71.38,91.85,27,61,0,2.45,5.55,-1.45]
];

var data2016 = [
    ['Majors',15,10,5,0,1317.34,1209.34,87.82,80.62,63,98,0,5.73,8.91,4.27],
    ['Willis',15,9,6,0,1317.58,1310.62,87.84,87.37,74,87,0,6.73,7.91,2.27],
    ['Ross',16,10,6,0,1584.58,1483.32,99.04,92.71,92,76,0,8.36,6.91,1.64],
    ['Matt',15,8,7,0,1347.42,1341.32,89.83,89.42,74,87,0,6.73,7.91,1.27],
    ['Sam',15,8,7,0,1415.16,1353.58,94.34,90.24,81,80,0,7.36,7.27,0.64],
    ['Basil',15,11,4,0,1682.8,1421.68,112.19,94.78,122,39,0,11.09,3.55,-0.09],
    ['Hunter',16,8,8,0,1518.98,1527.84,94.94,95.49,89,79,0,8.09,7.18,-0.09],
    ['Sawyer',16,6,10,0,1410.18,1545.6,88.14,96.60,68,100,0,6.18,9.09,-0.18],
    ['Jared',15,4,11,0,1231.6,1445.32,82.11,96.35,56,105,0,5.09,9.55,-1.09],
    ['Chaz',15,8,7,0,1552.02,1431.52,103.47,95.43,102,59,0,9.27,5.36,-1.27],
    ['Ean',15,5,10,0,1353.44,1495.18,90.23,99.68,76,85,0,6.91,7.73,-1.91],
    ['Trevor',16,5,11,0,1466.1,1631.88,91.63,101.99,83,85,0,7.55,7.73,-2.55]
];

var data2015 = [
    ['Jared',15,9,6,0,1372.86,1332.26,91.52,88.82,82,79,0,7.45,7.18,1.55],
    ['Basil',16,6,10,0,1332.12,1505.42,83.26,94.09,52,116,0,4.73,10.55,1.27],
    ['Willis',16,10,6,0,1612.68,1436.14,100.79,89.76,100,68,0,9.09,6.18,0.91],
    ['Majors',15,9,6,0,1485.5,1368.36,99.03,91.22,89,72,0,8.09,6.55,0.91],
    ['Ross',15,8,7,0,1419.12,1332.74,94.61,88.85,82,79,0,7.45,7.18,0.55],
    ['Sawyer',15,7,8,0,1359.46,1419.6,90.63,94.64,73,88,0,6.64,8.00,0.36],
    ['Hunter',15,9,6,0,1485.84,1303.64,99.06,86.91,97,64,0,8.82,5.82,0.18],
    ['CJ',16,8,8,0,1466.8,1469.24,91.68,91.83,86,82,0,7.82,7.45,0.18],
    ['Sam',16,8,8,0,1539.62,1439.82,96.23,89.99,89,79,0,8.09,7.18,-0.09],
    ['Trevor',15,7,8,0,1360.08,1481.8,90.67,98.79,82,79,0,7.45,7.18,-0.45],
    ['Matt',15,9,6,0,1514.06,1482.64,100.94,98.84,105,56,0,9.55,5.09,-0.55],
    ['Ean',15,2,13,0,1146.04,1522.52,76.40,101.50,43,118,0,3.91,10.73,-1.91]
];

var data2014 = [
    ['CJ',15,10,5,0,1411.4,1392.18,94.09,92.81,88,73,0,8.00,6.64,2.00],
    ['Chaz',15,6,9,0,1240.68,1328.4,82.71,88.56,52,109,0,4.73,9.91,1.27],
    ['Ross',15,9,6,0,1503.3,1323.32,100.22,88.22,86,75,0,7.82,6.82,1.18],
    ['Jared',16,6,10,0,1327.6,1532.02,82.98,95.75,56,112,0,5.09,10.18,0.91],
    ['Hunter',15,12,3,0,1597.8,1418.42,106.52,94.56,123,38,0,11.18,3.45,0.82],
    ['Sam',15,7,8,0,1323,1364.12,88.20,90.94,68,93,0,6.18,8.45,0.82],
    ['Matt',15,7,8,0,1311.2,1271.82,87.41,84.79,70,91,0,6.36,8.27,0.64],
    ['Ean',15,3,12,0,1090.84,1351.46,72.72,90.10,31,130,0,2.82,11.82,0.18],
    ['Sawyer',16,10,6,0,1628.58,1543.76,101.79,96.49,114,54,0,10.36,4.91,-0.36],
    ['Basil',16,7,9,0,1515.7,1500.48,94.73,93.78,88,80,0,8.00,7.27,-1.00],
    ['Willis',16,7,9,0,1555.4,1630.18,97.21,101.89,94,74,0,8.55,6.73,-1.55],
    ['Majors',15,8,7,0,1604,1453.34,106.93,96.89,110,51,0,10.00,4.64,-2.00]
];

var data2013 = [
    ['Chaz',15,9,6,0,1336.36,1344.74,89.09,89.65,90,97,0,6.92,7.46,2.08],
    ['Ean',15,9,6,0,1400.98,1392.56,93.40,92.84,95,92,0,7.31,7.08,1.69],
    ['Sawyer',16,10,6,0,1566.02,1413,97.88,88.31,109,85,0,8.38,6.54,1.62],
    ['Matt',15,6,9,0,1218.5,1354.36,81.23,90.29,66,121,0,5.08,9.31,0.92],
    ['Hunter',16,8,8,0,1402.62,1463.58,87.66,91.47,94,100,0,7.23,7.69,0.77],
    ['Willis',15,11,4,0,1569.36,1252.32,104.62,83.49,138,49,0,10.62,3.77,0.38],
    ['Basil',15,11,4,0,1584.44,1294.96,105.63,86.33,139,48,0,10.69,3.69,0.31],
    ['Majors',15,8,7,0,1407.34,1341.64,93.82,89.44,104,83,0,8.00,6.38,0.00],
    ['Ross',15,7,8,0,1340.58,1336.3,89.37,89.09,91,96,0,7.00,7.38,0.00],
    ['Sam',16,7,9,0,1453.02,1354.48,90.81,84.66,91,103,0,7.00,7.92,0.00],
    ['Drew',16,8,8,0,1478.54,1414.62,92.41,88.41,105,89,0,8.08,6.85,-0.08],
    ['CJ',15,7,8,0,1339.5,1462.46,89.30,97.50,100,87,0,7.69,6.69,-0.69],
    ['Trevor',13,3,10,0,1011.84,1217.3,77.83,93.64,52,117,0,4.00,9.00,-1.00],
    ['Jared',13,1,12,0,882.58,1349.36,67.89,103.80,31,138,0,2.38,10.62,-1.38]
];

var data2012 = [
    ['CJ',16,11,5,0,1453.96,1404.68,90.87,87.79,80,88,0,7.27,8.00,3.73],
    ['Sawyer',15,10,5,0,1409.5,1274.06,93.97,84.94,78,83,0,7.09,7.55,2.91],
    ['Majors',16,9,7,0,1446.4,1444.32,90.40,90.27,84,84,0,7.64,7.64,1.36],
    ['Trevor',16,7,9,0,1425.66,1464.18,89.10,91.51,71,97,0,6.45,8.82,0.55],
    ['Matt',15,9,6,0,1477.74,1381.72,98.52,92.11,98,63,0,8.91,5.73,0.09],
    ['Hunter',16,8,8,0,1524.42,1564.12,95.28,97.76,88,79,1,8.00,7.18,0.00],
    ['Sam',15,7,8,0,1350.84,1298.1,90.06,86.54,77,84,0,7.00,7.64,0.00],
    ['Drew',15,7,8,0,1380.86,1460.66,92.06,97.38,79,82,0,7.18,7.45,-0.18],
    ['Chaz',15,7,8,0,1407.36,1310.46,93.82,87.36,85,76,0,7.73,6.91,-0.73],
    ['Ean',15,6,9,0,1334.24,1405.84,88.95,93.72,76,84,1,6.91,7.64,-0.91],
    ['Jared',15,6,9,0,1391.54,1427.4,92.77,95.16,86,75,0,7.82,6.82,-1.82],
    ['Willis',15,5,10,0,1308.74,1475.72,87.25,98.38,77,84,0,7.00,7.64,-2.00]
];

var data2011 = [
    ['Willis',16,12,4,0,1623.92,1459.7,101.50,91.23,84,56,0,9.33,6.22,2.67],
    ['Matt',16,12,4,0,1636.74,1415.3,102.30,88.46,90,50,0,10.00,5.56,2.00],
    ['Skip',16,8,8,0,1397.92,1393.82,87.37,87.11,58,82,0,6.44,9.11,1.56],
    ['Trevor',16,10,6,0,1568.64,1461.52,98.04,91.35,82,58,0,9.11,6.44,0.89],
    ['Connor',14,4,10,0,987.1,1303.86,70.51,93.13,32,94,0,3.56,10.44,0.44],
    ['Majors',16,9,7,0,1614.9,1539.84,100.93,96.24,84,56,0,9.33,6.22,-0.33],
    ['Ean',16,8,8,0,1593.48,1477.42,99.59,92.34,76,64,0,8.44,7.11,-0.44],
    ['Sawyer',16,7,9,0,1462.66,1525.54,91.42,95.35,67,73,0,7.44,8.11,-0.44],
    ['Jared',14,3,11,0,1168.66,1454.78,83.48,103.91,45,81,0,5.00,9.00,-2.00],
    ['Sam',16,5,11,0,1480.3,1502.54,92.52,93.91,68,72,0,7.56,8.00,-2.56]
];