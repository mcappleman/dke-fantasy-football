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
  ["Sawyer", 4, 2, 2, 0, 444.78, 418.52, 111.20, 104.63, 33, 11, 0, "75.00%", 3.00, 1.00, -1.00],
  ["Majors", 4, 4, 0, 0, 449.80, 322.44, 112.45, 80.61, 32, 12, 0, "72.73%", 2.91, 1.09, 1.09],
  ["Matt", 4, 4, 0, 0, 422.28, 392.80, 105.57, 98.20, 29, 15, 0, "65.91%", 2.64, 1.36, 1.36],
  ["Trevor", 4, 3, 1, 0, 442.52, 392.86, 110.63, 98.22, 28, 16, 0, "63.64%", 2.55, 1.45, 0.45],
  ["Chaz", 4, 2, 2, 0, 426.74, 386.66, 106.69, 96.67, 23, 21, 0, "52.27%", 2.09, 1.91, -0.09],
  ["Sam", 4, 2, 2, 0, 434.46, 414.22, 108.62, 103.56, 23, 21, 0, "52.27%", 2.09, 1.91, -0.09],
  ["Hunter", 4, 2, 2, 0, 399.32, 458.78, 99.83, 114.70, 23, 21, 0, "52.27%", 2.09, 1.91, -0.09],
  ["Ean", 4, 2, 2, 0, 402.82, 428.04, 100.71, 107.01, 21, 23, 0, "47.73%", 1.91, 2.09, 0.09],
  ["Ross", 4, 2, 2, 0, 400.96, 431.22, 100.24, 107.81, 20, 24, 0, "45.45%", 1.82, 2.18, 0.18],
  ["Willis", 4, 1, 3, 0, 370.64, 418.73, 92.66, 104.68, 14, 30, 0, "31.82%", 1.27, 2.73, -0.27],
  ["Jared", 4, 0, 4, 0, 368.99, 418.18, 92.25, 104.55, 12, 32, 0, "27.27%", 1.09, 2.91, -1.09],
  ["Basil", 4, 0, 4, 0, 345.76, 426.62, 86.44, 106.66, 6, 38, 0, "13.64%", 0.55, 3.45, -0.55],
];

var highScores2024 = [
  ["Sam", 1, 143.28, "Hunter"],
  ["Ean", 4, 131.32, "Ross"],
  ["Trevor", 1, 130.82, "Ean"],
  ["Chaz", 1, 130.02, "Willis"],
  ["Matt", 3, 128.98, "Sawyer"],
  ["Trevor", 2, 128.98, "Chaz"],
  ["Ross", 2, 127.56, "Basil"],
  ["Sawyer", 3, 124.16, "Matt"],
  ["Majors", 1, 119.52, "Ross"],
  ["Majors", 3, 117.04, "Basil"],
];

var lowScores2024 = [
  ["Basil", 3, 71.10, "Majors"],
  ["Ean", 2, 77.56, "Majors"],
  ["Willis", 1, 78.84, "Chaz"],
  ["Chaz", 4, 80.70, "Matt"],
  ["Willis", 3, 82.08, "Ross"],
  ["Ross", 1, 83.08, "Majors"],
  ["Hunter", 3, 86.46, "Chaz"],
  ["Basil", 4, 86.80, "Trevor"],
  ["Jared", 4, 86.89, "Willis"],
  ["Jared", 1, 88.46, "Sawyer"],
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
  [1, "Matt", 93.58, "Basil", 89.56, 4.02],
  [3, "Matt", 128.98, "Sawyer", 124.16, 4.82],
  [3, "Ross", 89.38, "Willis", 82.08, 7.3],
  [3, "Ean", 103.00, "Jared", 95.26, 7.74],
  [2, "Matt", 107.34, "Jared", 98.38, 8.96],
  [1, "Sawyer", 99.06, "Jared", 88.46, 10.6],
  [2, "Hunter", 112.44, "Willis", 100.94, 11.5],
  [4, "Matt", 92.38, "Chaz", 80.70, 11.68],
];

var highest2024 = [
  [3, "Matt", 128.98, "Sawyer", 124.16, 253.14],
  [2, "Trevor", 128.98, "Chaz", 107.00, 235.98],
  [1, "Sam", 143.28, "Hunter", 91.70, 234.98],
  [4, "Ean", 131.32, "Ross", 100.94, 232.26],
  [2, "Ross", 127.56, "Basil", 98.30, 225.86],
  [1, "Trevor", 130.82, "Ean", 90.94, 221.76],
  [4, "Hunter", 108.72, "Sawyer", 105.54, 214.26],
  [2, "Hunter", 112.44, "Willis", 100.94, 213.38],
  [1, "Chaz", 130.02, "Willis", 78.84, 208.86],
  [2, "Sawyer", 116.02, "Sam", 92.36, 208.38],
];

var dumpster2024 = [
  [3, "Ross", 89.38, "Willis", 82.08, 171.46],
  [4, "Matt", 92.38, "Chaz", 80.70, 173.08],
  [4, "Trevor", 88.44, "Basil", 86.80, 175.24],
  [2, "Majors", 101.02, "Ean", 77.56, 178.58],
  [1, "Matt", 93.58, "Basil", 89.56, 183.14],
  [1, "Sawyer", 99.06, "Jared", 88.46, 187.52],
  [3, "Majors", 117.04, "Basil", 71.10, 188.14],
  [3, "Chaz", 109.02, "Hunter", 86.46, 195.48],
  [4, "Willis", 108.78, "Jared", 86.89, 195.67],
  [3, "Ean", 103.00, "Jared", 95.26, 198.26],
];

var fortunate2024 = [
  [4, "Trevor", 88.44, "Basil", 86.80, 88.44],
  [3, "Ross", 89.38, "Willis", 82.08, 89.38],
  [4, "Matt", 92.38, "Chaz", 80.70, 92.38],
  [1, "Matt", 93.58, "Basil", 89.56, 93.58],
  [1, "Sawyer", 99.06, "Jared", 88.46, 99.06],
  [2, "Majors", 101.02, "Ean", 77.56, 101.02],
  [3, "Ean", 103.00, "Jared", 95.26, 103.00],
  [2, "Matt", 107.34, "Jared", 98.38, 107.34],
  [3, "Sam", 108.12, "Trevor", 94.28, 108.12],
  [4, "Hunter", 108.72, "Sawyer", 105.54, 108.72],
];

var unfortunate2024 = [
  [3, "Matt", 128.98, "Sawyer", 124.16, 124.16],
  [2, "Trevor", 128.98, "Chaz", 107.00, 107.00],
  [4, "Hunter", 108.72, "Sawyer", 105.54, 105.54],
  [2, "Hunter", 112.44, "Willis", 100.94, 100.94],
  [4, "Ean", 131.32, "Ross", 100.94, 100.94],
  [2, "Matt", 107.34, "Jared", 98.38, 98.38],
  [2, "Ross", 127.56, "Basil", 98.30, 98.30],
  [3, "Ean", 103.00, "Jared", 95.26, 95.26],
  [3, "Sam", 108.12, "Trevor", 94.28, 94.28],
  [2, "Sawyer", 116.02, "Sam", 92.36, 92.36],
];
