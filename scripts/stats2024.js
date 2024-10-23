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
  ["Majors", 7, 6, 1, 0, 838.18, 675.08, 119.74, 96.44, 62, 14, 1, "81.17%", 5.68, 1.32, 0.32],
  ["Matt", 7, 7, 0, 0, 801.34, 649.90, 114.48, 92.84, 61, 16, 0, "79.22%", 5.55, 1.45, 1.45],
  ["Trevor", 7, 4, 3, 0, 776.50, 767.84, 110.93, 109.69, 49, 28, 0, "63.64%", 4.45, 2.55, -0.45],
  ["Ean", 7, 4, 3, 0, 727.56, 749.60, 103.94, 107.09, 44, 32, 1, "57.79%", 4.05, 2.95, -0.05],
  ["Sawyer", 7, 4, 3, 0, 731.28, 700.54, 104.47, 100.08, 44, 33, 0, "57.14%", 4.00, 3.00, 0.00],
  ["Chaz", 7, 2, 5, 0, 753.42, 731.66, 107.63, 104.52, 39, 38, 0, "50.65%", 3.55, 3.45, -1.55],
  ["Sam", 7, 4, 3, 0, 742.72, 692.98, 106.10, 99.00, 39, 38, 0, "50.65%", 3.55, 3.45, 0.45],
  ["Hunter", 7, 2, 5, 0, 627.04, 787.92, 89.58, 112.56, 28, 49, 0, "36.36%", 2.55, 4.45, -0.55],
  ["Ross", 7, 3, 4, 0, 656.12, 695.16, 93.73, 99.31, 28, 49, 0, "36.36%", 2.55, 4.45, 0.45],
  ["Willis", 7, 2, 5, 0, 661.26, 738.91, 94.47, 105.56, 27, 50, 0, "35.06%", 2.45, 4.55, -0.45],
  ["Basil", 7, 2, 5, 0, 636.42, 703.74, 90.92, 100.53, 22, 55, 0, "28.57%", 2.00, 5.00, 0.00],
  ["Jared", 7, 2, 5, 0, 620.83, 679.34, 88.69, 97.05, 18, 59, 0, "23.38%", 1.64, 5.36, 0.36],
];

var highScores2024 = [
  ["Majors", 7, 149.76, "Trevor"],
  ["Sam", 1, 143.28, "Hunter"],
  ["Ean", 4, 131.32, "Ross"],
  ["Trevor", 1, 130.82, "Ean"],
  ["Chaz", 1, 130.02, "Willis"],
  ["Matt", 7, 129.00, "Hunter"],
  ["Matt", 3, 128.98, "Sawyer"],
  ["Trevor", 2, 128.98, "Chaz"],
  ["Matt", 5, 128.20, "Majors"],
  ["Ross", 2, 127.56, "Basil"],
];

var lowScores2024 = [
  ["Hunter", 7, 42.04, "Matt"],
  ["Ross", 7, 66.26, "Jared"],
  ["Basil", 3, 71.10, "Majors"],
  ["Sawyer", 6, 72.42, "Basil"],
  ["Ean", 2, 77.56, "Majors"],
  ["Willis", 1, 78.84, "Chaz"],
  ["Hunter", 6, 79.36, "Jared"],
  ["Willis", 5, 79.86, "Sawyer"],
  ["Basil", 7, 80.14, "Sam"],
  ["Chaz", 4, 80.70, "Matt"],
];

var blowouts2024 = [
  [7, "Matt", 129.00, "Hunter", 42.04, 86.96],
  [1, "Sam", 143.28, "Hunter", 91.70, 51.58],
  [1, "Chaz", 130.02, "Willis", 78.84, 51.18],
  [3, "Majors", 117.04, "Basil", 71.10, 45.94],
  [7, "Majors", 149.76, "Trevor", 109.24, 40.52],
  [1, "Trevor", 130.82, "Ean", 90.94, 39.88],
  [1, "Majors", 119.52, "Ross", 83.08, 36.44],
  [4, "Ean", 131.32, "Ross", 100.94, 30.38],
  [2, "Ross", 127.56, "Basil", 98.30, 29.26],
  [7, "Sam", 107.22, "Basil", 80.14, 27.08],
];

var closeGames2024 = [
  [7, "Jared", 66.44, "Ross", 66.26, 0.18],
  [4, "Trevor", 88.44, "Basil", 86.80, 1.64],
  [4, "Hunter", 108.72, "Sawyer", 105.54, 3.18],
  [5, "Ross", 107.64, "Chaz", 104.30, 3.34],
  [1, "Matt", 93.58, "Basil", 89.56, 4.02],
  [3, "Matt", 128.98, "Sawyer", 124.16, 4.82],
  [5, "Trevor", 112.22, "Hunter", 106.32, 5.9],
  [6, "Majors", 121.26, "Chaz", 115.20, 6.06],
  [6, "Willis", 118.90, "Trevor", 112.52, 6.38],
  [3, "Ross", 89.38, "Willis", 82.08, 7.3],
];

var highest2024 = [
  [7, "Majors", 149.76, "Trevor", 109.24, 259.00],
  [3, "Matt", 128.98, "Sawyer", 124.16, 253.14],
  [5, "Matt", 128.20, "Majors", 117.36, 245.56],
  [6, "Majors", 121.26, "Chaz", 115.20, 236.46],
  [2, "Trevor", 128.98, "Chaz", 107.00, 235.98],
  [1, "Sam", 143.28, "Hunter", 91.70, 234.98],
  [4, "Ean", 131.32, "Ross", 100.94, 232.26],
  [6, "Willis", 118.90, "Trevor", 112.52, 231.42],
  [2, "Ross", 127.56, "Basil", 98.30, 225.86],
  [5, "Ean", 117.36, "Sam", 107.84, 225.20],
];

var dumpster2024 = [
  [7, "Jared", 66.44, "Ross", 66.26, 132.70],
  [6, "Jared", 87.92, "Hunter", 79.36, 167.28],
  [6, "Basil", 94.98, "Sawyer", 72.42, 167.40],
  [7, "Matt", 129.00, "Hunter", 42.04, 171.04],
  [3, "Ross", 89.38, "Willis", 82.08, 171.46],
  [4, "Matt", 92.38, "Chaz", 80.70, 173.08],
  [6, "Sam", 93.20, "Ross", 81.26, 174.46],
  [4, "Trevor", 88.44, "Basil", 86.80, 175.24],
  [5, "Sawyer", 97.98, "Willis", 79.86, 177.84],
  [2, "Majors", 101.02, "Ean", 77.56, 178.58],
];

var fortunate2024 = [
  [7, "Jared", 66.44, "Ross", 66.26, 66.44],
  [6, "Jared", 87.92, "Hunter", 79.36, 87.92],
  [4, "Trevor", 88.44, "Basil", 86.80, 88.44],
  [3, "Ross", 89.38, "Willis", 82.08, 89.38],
  [4, "Matt", 92.38, "Chaz", 80.70, 92.38],
  [6, "Sam", 93.20, "Ross", 81.26, 93.20],
  [1, "Matt", 93.58, "Basil", 89.56, 93.58],
  [6, "Basil", 94.98, "Sawyer", 72.42, 94.98],
  [5, "Sawyer", 97.98, "Willis", 79.86, 97.98],
  [1, "Sawyer", 99.06, "Jared", 88.46, 99.06],
];

var unfortunate2024 = [
  [3, "Matt", 128.98, "Sawyer", 124.16, 124.16],
  [5, "Matt", 128.20, "Majors", 117.36, 117.36],
  [6, "Majors", 121.26, "Chaz", 115.20, 115.20],
  [6, "Willis", 118.90, "Trevor", 112.52, 112.52],
  [7, "Majors", 149.76, "Trevor", 109.24, 109.24],
  [5, "Ean", 117.36, "Sam", 107.84, 107.84],
  [7, "Sawyer", 116.10, "Chaz", 107.18, 107.18],
  [2, "Trevor", 128.98, "Chaz", 107.00, 107.00],
  [5, "Trevor", 112.22, "Hunter", 106.32, 106.32],
  [4, "Hunter", 108.72, "Sawyer", 105.54, 105.54],
];
