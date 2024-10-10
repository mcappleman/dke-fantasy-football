$(document).ready(function () {
  $("#table2024").DataTable({
    order: [[2, "desc"]],
    searching: false,
    sDom: "",
    lengthMenu: [[-1], ["All"]],
    data: data2024,
    columns: yearColumnNames,
  });

  $("#highScores2024").DataTable({
    order: [[2, "desc"]],
    sDom: "",
    data: highScores2024,
    columns: scoreColumnNames,
  });

  $("#lowScores2024").DataTable({
    order: [[2, "asc"]],
    sDom: "",
    data: lowScores2024,
    columns: scoreColumnNames,
  });

  $("#blowouts2024").DataTable({
    order: [[5, "desc"]],
    sDom: "",
    data: blowouts2024,
    columns: gameColumnNames,
  });

  $("#closeGames2024").DataTable({
    order: [[5, "asc"]],
    sDom: "",
    data: closeGames2024,
    columns: gameColumnNames,
  });

  $("#highest2024").DataTable({
    order: [[5, "desc"]],
    sDom: "",
    data: highest2024,
    columns: gameScoringColumnNames,
  });

  $("#dumpster2024").DataTable({
    order: [[5, "asc"]],
    sDom: "",
    data: dumpster2024,
    columns: gameScoringColumnNames,
  });

  $("#fortunate2024").DataTable({
    order: [[5, "asc"]],
    sDom: "",
    data: fortunate2024,
    columns: fortunateColumnNames,
  });

  $("#unfortunate2024").DataTable({
    order: [[5, "desc"]],
    sDom: "",
    data: unfortunate2024,
    columns: fortunateColumnNames,
  });
});

var data2024 = [
  ["Sawyer", 5, 3, 2, 0, 542.76, 498.38, 108.55, 99.68, 35, 20, 0, "63.64%", 3.18, 1.82, -0.18],
  ["Majors", 5, 4, 1, 0, 567.16, 450.64, 113.43, 90.13, 41, 13, 1, "75.45%", 3.77, 1.23, 0.23],
  ["Matt", 5, 5, 0, 0, 550.48, 510.16, 110.10, 102.03, 40, 15, 0, "72.73%", 3.64, 1.36, 1.36],
  ["Trevor", 5, 4, 1, 0, 554.74, 499.18, 110.95, 99.84, 35, 20, 0, "63.64%", 3.18, 1.82, 0.82],
  ["Chaz", 5, 2, 3, 0, 531.04, 494.30, 106.21, 98.86, 26, 29, 0, "47.27%", 2.36, 2.64, -0.36],
  ["Sam", 5, 2, 3, 0, 542.30, 531.58, 108.46, 106.32, 29, 26, 0, "52.73%", 2.64, 2.36, -0.64],
  ["Hunter", 5, 2, 3, 0, 505.64, 571.00, 101.13, 114.20, 27, 28, 0, "49.09%", 2.45, 2.55, -0.45],
  ["Ean", 5, 3, 2, 0, 520.18, 535.88, 104.04, 107.18, 30, 24, 1, "55.45%", 2.77, 2.23, 0.23],
  ["Ross", 5, 3, 2, 0, 508.60, 535.52, 101.72, 107.10, 25, 30, 0, "45.45%", 2.27, 2.73, 0.73],
  ["Willis", 5, 1, 4, 0, 450.50, 516.71, 90.10, 103.34, 14, 41, 0, "25.45%", 1.27, 3.73, -0.27],
  ["Jared", 5, 0, 5, 0, 466.47, 533.72, 93.29, 106.74, 13, 42, 0, "23.64%", 1.18, 3.82, -1.18],
  ["Basil", 5, 1, 4, 0, 461.30, 524.10, 92.26, 104.82, 14, 41, 0, "25.45%", 1.27, 3.73, -0.27],
];

var highScores2024 = [
  ["Sam", 1, 143.28, "Hunter"],
  ["Ean", 4, 131.32, "Ross"],
  ["Trevor", 1, 130.82, "Ean"],
  ["Chaz", 1, 130.02, "Willis"],
  ["Matt", 3, 128.98, "Sawyer"],
  ["Trevor", 2, 128.98, "Chaz"],
  ["Matt", 5, 128.20, "Majors"],
  ["Ross", 2, 127.56, "Basil"],
  ["Sawyer", 3, 124.16, "Matt"],
  ["Majors", 1, 119.52, "Ross"],
];

var lowScores2024 = [
  ["Basil", 3, 71.10, "Majors"],
  ["Ean", 2, 77.56, "Majors"],
  ["Willis", 1, 78.84, "Chaz"],
  ["Willis", 5, 79.86, "Sawyer"],
  ["Chaz", 4, 80.70, "Matt"],
  ["Willis", 3, 82.08, "Ross"],
  ["Ross", 1, 83.08, "Majors"],
  ["Hunter", 3, 86.46, "Chaz"],
  ["Basil", 4, 86.80, "Trevor"],
  ["Jared", 4, 86.89, "Willis"],
];

var blowouts2024 = [
  [1, "Sam", 143.28, "Hunter", 91.70, 51.58],
  [1, "Chaz", 130.02, "Willis", 78.84, 51.18],
  [3, "Majors", 117.04, "Basil", 71.10, 45.94],
  [1, "Trevor", 130.82, "Ean", 90.94, 39.88],
  [1, "Majors", 119.52, "Ross", 83.08, 36.44],
  [4, "Ean", 131.32, "Ross", 100.94, 30.38],
  [2, "Ross", 127.56, "Basil", 98.30, 29.26],
  [2, "Sawyer", 116.02, "Sam", 92.36, 23.66],
  [2, "Majors", 101.02, "Ean", 77.56, 23.46],
  [3, "Chaz", 109.02, "Hunter", 86.46, 22.56],
];

var closeGames2024 = [
  [4, "Trevor", 88.44, "Basil", 86.80, 1.64],
  [4, "Hunter", 108.72, "Sawyer", 105.54, 3.18],
  [5, "Ross", 107.64, "Chaz", 104.30, 3.34],
  [1, "Matt", 93.58, "Basil", 89.56, 4.02],
  [3, "Matt", 128.98, "Sawyer", 124.16, 4.82],
  [5, "Trevor", 112.22, "Hunter", 106.32, 5.9],
  [3, "Ross", 89.38, "Willis", 82.08, 7.3],
  [3, "Ean", 103.00, "Jared", 95.26, 7.74],
  [2, "Matt", 107.34, "Jared", 98.38, 8.96],
  [5, "Ean", 117.36, "Sam", 107.84, 9.52],
];

var highest2024 = [
  [3, "Matt", 128.98, "Sawyer", 124.16, 253.14],
  [5, "Matt", 128.20, "Majors", 117.36, 245.56],
  [2, "Trevor", 128.98, "Chaz", 107.00, 235.98],
  [1, "Sam", 143.28, "Hunter", 91.70, 234.98],
  [4, "Ean", 131.32, "Ross", 100.94, 232.26],
  [2, "Ross", 127.56, "Basil", 98.30, 225.86],
  [5, "Ean", 117.36, "Sam", 107.84, 225.20],
  [1, "Trevor", 130.82, "Ean", 90.94, 221.76],
  [5, "Trevor", 112.22, "Hunter", 106.32, 218.54],
  [4, "Hunter", 108.72, "Sawyer", 105.54, 214.26],
];

var dumpster2024 = [
  [3, "Ross", 89.38, "Willis", 82.08, 171.46],
  [4, "Matt", 92.38, "Chaz", 80.70, 173.08],
  [4, "Trevor", 88.44, "Basil", 86.80, 175.24],
  [5, "Sawyer", 97.98, "Willis", 79.86, 177.84],
  [2, "Majors", 101.02, "Ean", 77.56, 178.58],
  [1, "Matt", 93.58, "Basil", 89.56, 183.14],
  [1, "Sawyer", 99.06, "Jared", 88.46, 187.52],
  [3, "Majors", 117.04, "Basil", 71.10, 188.14],
  [3, "Chaz", 109.02, "Hunter", 86.46, 195.48],
  [4, "Willis", 108.78, "Jared", 86.89, 195.67],
];

var fortunate2024 = [
  [4, "Trevor", 88.44, "Basil", 86.80, 88.44],
  [3, "Ross", 89.38, "Willis", 82.08, 89.38],
  [4, "Matt", 92.38, "Chaz", 80.70, 92.38],
  [1, "Matt", 93.58, "Basil", 89.56, 93.58],
  [5, "Sawyer", 97.98, "Willis", 79.86, 97.98],
  [1, "Sawyer", 99.06, "Jared", 88.46, 99.06],
  [2, "Majors", 101.02, "Ean", 77.56, 101.02],
  [3, "Ean", 103.00, "Jared", 95.26, 103.00],
  [2, "Matt", 107.34, "Jared", 98.38, 107.34],
  [5, "Ross", 107.64, "Chaz", 104.30, 107.64],
];

var unfortunate2024 = [
  [3, "Matt", 128.98, "Sawyer", 124.16, 124.16],
  [5, "Matt", 128.20, "Majors", 117.36, 117.36],
  [5, "Ean", 117.36, "Sam", 107.84, 107.84],
  [2, "Trevor", 128.98, "Chaz", 107.00, 107.00],
  [5, "Trevor", 112.22, "Hunter", 106.32, 106.32],
  [4, "Hunter", 108.72, "Sawyer", 105.54, 105.54],
  [5, "Ross", 107.64, "Chaz", 104.30, 104.30],
  [2, "Hunter", 112.44, "Willis", 100.94, 100.94],
  [4, "Ean", 131.32, "Ross", 100.94, 100.94],
  [2, "Matt", 107.34, "Jared", 98.38, 98.38],
];
