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
  ["Matt", 6, 6, 0, 0, 672.34, 607.86, 112.06, 101.31, 51, 15, 0, "77.27%", 4.64, 1.36, 1.36],
  ["Majors", 6, 5, 1, 0, 688.42, 565.84, 114.74, 94.31, 51, 14, 1, "78.03%", 4.68, 1.32, 0.32],
  ["Trevor", 6, 4, 2, 0, 667.26, 618.08, 111.21, 103.01, 42, 24, 0, "63.64%", 3.82, 2.18, 0.18],
  ["Ean", 6, 3, 3, 0, 617.88, 657.74, 102.98, 109.62, 36, 29, 1, "55.30%", 3.32, 2.68, -0.32],
  ["Sawyer", 6, 3, 3, 0, 615.18, 593.36, 102.53, 98.89, 35, 31, 0, "53.03%", 3.18, 2.82, -0.18],
  ["Chaz", 6, 2, 4, 0, 646.24, 615.56, 107.71, 102.59, 34, 32, 0, "51.52%", 3.09, 2.91, -1.09],
  ["Sam", 6, 3, 3, 0, 635.50, 612.84, 105.92, 102.14, 33, 33, 0, "50.00%", 3.00, 3.00, 0.00],
  ["Hunter", 6, 2, 4, 0, 585.00, 658.92, 97.50, 109.82, 28, 38, 0, "42.42%", 2.55, 3.45, -0.55],
  ["Ross", 6, 3, 3, 0, 589.86, 628.72, 98.31, 104.79, 27, 39, 0, "40.91%", 2.45, 3.55, 0.55],
  ["Willis", 6, 2, 4, 0, 569.40, 629.23, 94.90, 104.87, 23, 43, 0, "34.85%", 2.09, 3.91, -0.09],
  ["Basil", 6, 2, 4, 0, 556.28, 596.52, 92.71, 99.42, 19, 47, 0, "28.79%", 1.73, 4.27, 0.27],
  ["Jared", 6, 1, 5, 0, 554.39, 613.08, 92.40, 102.18, 16, 50, 0, "24.24%", 1.45, 4.55, -0.45],
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
  ["Matt", 6, 121.86, "Ean"],
];

var lowScores2024 = [
  ["Basil", 3, 71.10, "Majors"],
  ["Sawyer", 6, 72.42, "Basil"],
  ["Ean", 2, 77.56, "Majors"],
  ["Willis", 1, 78.84, "Chaz"],
  ["Hunter", 6, 79.36, "Jared"],
  ["Willis", 5, 79.86, "Sawyer"],
  ["Chaz", 4, 80.70, "Matt"],
  ["Ross", 6, 81.26, "Sam"],
  ["Willis", 3, 82.08, "Ross"],
  ["Ross", 1, 83.08, "Majors"],
];

var blowouts2024 = [
  [1, "Sam", 143.28, "Hunter", 91.70, 51.58],
  [1, "Chaz", 130.02, "Willis", 78.84, 51.18],
  [3, "Majors", 117.04, "Basil", 71.10, 45.94],
  [1, "Trevor", 130.82, "Ean", 90.94, 39.88],
  [1, "Majors", 119.52, "Ross", 83.08, 36.44],
  [4, "Ean", 131.32, "Ross", 100.94, 30.38],
  [2, "Ross", 127.56, "Basil", 98.30, 29.26],
  [6, "Matt", 121.86, "Ean", 97.70, 24.16],
  [2, "Sawyer", 116.02, "Sam", 92.36, 23.66],
  [2, "Majors", 101.02, "Ean", 77.56, 23.46],
];

var closeGames2024 = [
  [4, "Hunter", 108.72, "Sawyer", 105.54, 3.18],
  [4, "Trevor", 88.44, "Basil", 86.80, 1.64],
  [5, "Ross", 107.64, "Chaz", 104.30, 3.34],
  [1, "Matt", 93.58, "Basil", 89.56, 4.02],
  [3, "Matt", 128.98, "Sawyer", 124.16, 4.82],
  [5, "Trevor", 112.22, "Hunter", 106.32, 5.9],
  [6, "Majors", 121.26, "Chaz", 115.20, 6.06],
  [6, "Willis", 118.90, "Trevor", 112.52, 6.38],
  [3, "Ross", 89.38, "Willis", 82.08, 7.3],
  [3, "Ean", 103.00, "Jared", 95.26, 7.74],
];

var highest2024 = [
  [3, "Matt", 128.98, "Sawyer", 124.16, 253.14],
  [5, "Matt", 128.20, "Majors", 117.36, 245.56],
  [6, "Majors", 121.26, "Chaz", 115.20, 236.46],
  [2, "Trevor", 128.98, "Chaz", 107.00, 235.98],
  [1, "Sam", 143.28, "Hunter", 91.70, 234.98],
  [4, "Ean", 131.32, "Ross", 100.94, 232.26],
  [6, "Willis", 118.90, "Trevor", 112.52, 231.42],
  [2, "Ross", 127.56, "Basil", 98.30, 225.86],
  [5, "Ean", 117.36, "Sam", 107.84, 225.20],
  [1, "Trevor", 130.82, "Ean", 90.94, 221.76],
];

var dumpster2024 = [
  [6, "Jared", 87.92, "Hunter", 79.36, 167.28],
  [6, "Basil", 94.98, "Sawyer", 72.42, 167.40],
  [3, "Ross", 89.38, "Willis", 82.08, 171.46],
  [4, "Matt", 92.38, "Chaz", 80.70, 173.08],
  [6, "Sam", 93.20, "Ross", 81.26, 174.46],
  [4, "Trevor", 88.44, "Basil", 86.80, 175.24],
  [5, "Sawyer", 97.98, "Willis", 79.86, 177.84],
  [2, "Majors", 101.02, "Ean", 77.56, 178.58],
  [1, "Matt", 93.58, "Basil", 89.56, 183.14],
  [1, "Sawyer", 99.06, "Jared", 88.46, 187.52],
];

var fortunate2024 = [
  [4, "Trevor", 88.44, "Basil", 86.80, 88.44],
  [6, "Jared", 87.92, "Hunter", 79.36, 87.92],
  [3, "Ross", 89.38, "Willis", 82.08, 89.38],
  [4, "Matt", 92.38, "Chaz", 80.70, 92.38],
  [6, "Sam", 93.20, "Ross", 81.26, 93.20],
  [1, "Matt", 93.58, "Basil", 89.56, 93.58],
  [6, "Basil", 94.98, "Sawyer", 72.42, 94.98],
  [5, "Sawyer", 97.98, "Willis", 79.86, 97.98],
  [1, "Sawyer", 99.06, "Jared", 88.46, 99.06],
  [2, "Majors", 101.02, "Ean", 77.56, 101.02],
];

var unfortunate2024 = [
  [3, "Matt", 128.98, "Sawyer", 124.16, 124.16],
  [5, "Matt", 128.20, "Majors", 117.36, 117.36],
  [6, "Majors", 121.26, "Chaz", 115.20, 115.20],
  [6, "Willis", 118.90, "Trevor", 112.52, 112.52],
  [5, "Ean", 117.36, "Sam", 107.84, 107.84],
  [2, "Trevor", 128.98, "Chaz", 107.00, 107.00],
  [5, "Trevor", 112.22, "Hunter", 106.32, 106.32],
  [4, "Hunter", 108.72, "Sawyer", 105.54, 105.54],
  [5, "Ross", 107.64, "Chaz", 104.30, 104.30],
  [2, "Hunter", 112.44, "Willis", 100.94, 100.94],
];
