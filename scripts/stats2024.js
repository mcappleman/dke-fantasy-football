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
  ["Sawyer", 3, 2, 1, 0, 339.24, 309.80, 113.08, 103.27, 26, 7, 0, "78.79%", 2.36, 0.64, -0.36],
  ["Trevor", 3, 2, 1, 0, 354.08, 306.06, 118.03, 102.02, 25, 8, 0, "75.76%", 2.27, 0.73, -0.27],
  ["Matt", 3, 3, 0, 0, 329.90, 312.10, 109.97, 104.03, 24, 9, 0, "72.73%", 2.18, 0.82, 0.82],
  ["Chaz", 3, 2, 1, 0, 346.04, 294.28, 115.35, 98.09, 23, 10, 0, "69.70%", 2.09, 0.91, -0.09],
  ["Majors", 3, 3, 0, 0, 337.58, 231.74, 112.53, 77.25, 22, 11, 0, "66.67%", 2.00, 1.00, 1.00],
  ["Sam", 3, 2, 1, 0, 343.76, 302.00, 114.59, 100.67, 19, 14, 0, "57.58%", 1.73, 1.27, 0.27],
  ["Hunter", 3, 1, 2, 0, 290.60, 353.24, 96.87, 117.75, 15, 18, 0, "45.45%", 1.36, 1.64, -0.36],
  ["Ross", 3, 2, 1, 0, 300.02, 299.90, 100.01, 99.97, 14, 19, 0, "42.42%", 1.27, 1.73, 0.73],
  ["Ean", 3, 1, 2, 0, 271.50, 327.10, 90.50, 109.03, 10, 23, 0, "30.30%", 0.91, 2.09, 0.09],
  ["Jared", 3, 0, 3, 0, 282.10, 309.40, 94.03, 103.13, 10, 23, 0, "30.30%", 0.91, 2.09, -0.91],
  ["Basil", 3, 0, 3, 0, 258.96, 338.18, 86.32, 112.73, 5, 28, 0, "15.15%", 0.45, 2.55, -0.45],
  ["Willis", 3, 0, 3, 0, 261.86, 331.84, 87.29, 110.61, 5, 28, 0, "15.15%", 0.45, 2.55, -0.45 ],
];

var highScores2024 = [
  ["Sam", 1, 143.28, "Hunter"],
  ["Trevor", 1, 130.82, "Ean"],
  ["Chaz", 1, 130.02, "Willis"],
  ["Matt", 3, 128.98, "Sawyer"],
  ["Trevor", 2, 128.98, "Chaz"],
  ["Ross", 2, 127.56, "Basil"],
  ["Sawyer", 3, 124.16, "Matt"],
  ["Majors", 1, 119.52, "Ross"],
  ["Majors", 3, 117.04, "Basil"],
  ["Sawyer", 2, 116.02, "Sam"],
];

var lowScores2024 = [
  ["Basil", 3, 71.10, "Majors"],
  ["Ean", 2, 77.56, "Majors"],
  ["Willis", 1, 78.84, "Chaz"],
  ["Willis", 3, 82.08, "Ross"],
  ["Ross", 1, 83.08, "Majors"],
  ["Hunter", 3, 86.46, "Chaz"],
  ["Jared", 1, 88.46, "Sawyer"],
  ["Basil", 1, 89.56, "Matt"],
  ["Ean", 1, 90.94, "Trevor"],
  ["Hunter", 1, 91.70, "Sam"],
];

var blowouts2024 = [
  [1, "Sam", 143.28, "Hunter", 91.70, 51.58],
  [1, "Chaz", 130.02, "Willis", 78.84, 51.18],
  [3, "Majors", 117.04, "Basil", 71.10, 45.94],
  [1, "Trevor", 130.82, "Ean", 90.94, 39.88],
  [1, "Majors", 119.52, "Ross", 83.08, 36.44],
  [2, "Ross", 127.56, "Basil", 98.30, 29.26],
  [2, "Sawyer", 116.02, "Sam", 92.36, 23.66],
  [2, "Majors", 101.02, "Ean", 77.56, 23.46],
  [3, "Chaz", 109.02, "Hunter", 86.46, 22.56],
  [2, "Trevor", 128.98, "Chaz", 107.00, 21.98],
];

var closeGames2024 = [
  [1, "Matt", 93.58, "Basil", 89.56, 4.02],
  [3, "Matt", 128.98, "Sawyer", 124.16, 4.82],
  [3, "Ross", 89.38, "Willis", 82.08, 7.3],
  [3, "Ean", 103.00, "Jared", 95.26, 7.74],
  [2, "Matt", 107.34, "Jared", 98.38, 8.96],
  [1, "Sawyer", 99.06, "Jared", 88.46, 10.6],
  [2, "Hunter", 112.44, "Willis", 100.94, 11.5],
  [3, "Sam", 108.12, "Trevor", 94.28, 13.84],
  [2, "Trevor", 128.98, "Chaz", 107.00, 21.98],
  [3, "Chaz", 109.02, "Hunter", 86.46, 22.56],
];

var highest2024 = [
  [3, "Matt", 128.98, "Sawyer", 124.16, 253.14],
  [2, "Trevor", 128.98, "Chaz", 107.00, 235.98],
  [1, "Sam", 143.28, "Hunter", 91.70, 234.98],
  [2, "Ross", 127.56, "Basil", 98.30, 225.86],
  [1, "Trevor", 130.82, "Ean", 90.94, 221.76],
  [2, "Hunter", 112.44, "Willis", 100.94, 213.38],
  [1, "Chaz", 130.02, "Willis", 78.84, 208.86],
  [2, "Sawyer", 116.02, "Sam", 92.36, 208.38],
  [2, "Matt", 107.34, "Jared", 98.38, 205.72],
  [1, "Majors", 119.52, "Ross", 83.08, 202.60],
];

var dumpster2024 = [
  [3, "Ross", 89.38, "Willis", 82.08, 171.46],
  [2, "Majors", 101.02, "Ean", 77.56, 178.58],
  [1, "Matt", 93.58, "Basil", 89.56, 183.14],
  [1, "Sawyer", 99.06, "Jared", 88.46, 187.52],
  [3, "Majors", 117.04, "Basil", 71.10, 188.14],
  [3, "Chaz", 109.02, "Hunter", 86.46, 195.48],
  [3, "Ean", 103.00, "Jared", 95.26, 198.26],
  [3, "Sam", 108.12, "Trevor", 94.28, 202.40],
  [1, "Majors", 119.52, "Ross", 83.08, 202.60],
  [2, "Matt", 107.34, "Jared", 98.38, 205.72],
];

var fortunate2024 = [
  [3, "Ross", 89.38, "Willis", 82.08, 89.38],
  [1, "Matt", 93.58, "Basil", 89.56, 93.58],
  [1, "Sawyer", 99.06, "Jared", 88.46, 99.06],
  [2, "Majors", 101.02, "Ean", 77.56, 101.02],
  [3, "Ean", 103.00, "Jared", 95.26, 103.00],
  [2, "Matt", 107.34, "Jared", 98.38, 107.34],
  [3, "Sam", 108.12, "Trevor", 94.28, 108.12],
  [3, "Chaz", 109.02, "Hunter", 86.46, 109.02],
  [2, "Hunter", 112.44, "Willis", 100.94, 112.44],
  [2, "Sawyer", 116.02, "Sam", 92.36, 116.02],
];

var unfortunate2024 = [
  [3, "Matt", 128.98, "Sawyer", 124.16, 124.16],
  [2, "Trevor", 128.98, "Chaz", 107.00, 107.00],
  [2, "Hunter", 112.44, "Willis", 100.94, 100.94],
  [2, "Matt", 107.34, "Jared", 98.38, 98.38],
  [2, "Ross", 127.56, "Basil", 98.30, 98.30],
  [3, "Ean", 103.00, "Jared", 95.26, 95.26],
  [3, "Sam", 108.12, "Trevor", 94.28, 94.28],
  [2, "Sawyer", 116.02, "Sam", 92.36, 92.36],
  [1, "Sam", 143.28, "Hunter", 91.70, 91.70],
  [1, "Trevor", 130.82, "Ean", 90.94, 90.94],
];
