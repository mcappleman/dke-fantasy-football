$(document).ready(function () {
  $("#tableall").DataTable({
    order: [[2, "desc"]],
    searching: false,
    sDom: "",
    lengthMenu: [[-1], ["All"]],
    data: dataSet,
    columns: columnNames,
  });

  $("#highScores").DataTable({
    order: [[3, "desc"]],
    sDom: "",
    lengthMenu: [[10], ["All"]],
    data: highScores,
    columns: scoreColumnNamesAll,
  });

  $("#lowScores").DataTable({
    order: [[3, "asc"]],
    sDom: "",
    lengthMenu: [[10], ["All"]],
    data: lowScores,
    columns: scoreColumnNamesAll,
  });

  $("#blowouts").DataTable({
    order: [[6, "desc"]],
    sDom: "",
    lengthMenu: [[10], ["All"]],
    data: blowouts,
    columns: gameColumnNamesAll,
  });

  $("#closeGames").DataTable({
    order: [[6, "asc"]],
    sDom: "",
    lengthMenu: [[10], ["All"]],
    data: closeGames,
    columns: gameColumnNamesAll,
  });

  $("#highest").DataTable({
    order: [[6, "desc"]],
    sDom: "",
    lengthMenu: [[10], ["All"]],
    data: highest,
    columns: gameScoringColumnNamesAll,
  });

  $("#dumpster").DataTable({
    order: [[6, "asc"]],
    sDom: "",
    lengthMenu: [[10], ["All"]],
    data: dumpster,
    columns: gameScoringColumnNamesAll,
  });

  $("#fortunate").DataTable({
    order: [[6, "asc"]],
    sDom: "",
    lengthMenu: [[10], ["All"]],
    data: fortunate,
    columns: fortunateColumnNamesAll,
  });

  $("#unfortunate").DataTable({
    order: [[6, "desc"]],
    sDom: "",
    lengthMenu: [[10], ["All"]],
    data: unfortunate,
    columns: fortunateColumnNamesAll,
  });
});

var dataSet = [
  [
    "Majors",
    189,
    120,
    69,
    0,
    "63.49%",
    18805.96,
    17083.92,
    99.5,
    90.39,
    1189,
    827,
    1,
    "58.97%",
    "4.52%",
    111.5,
    77.5,
    8.5,
  ],
  [
    "Matt",
    189,
    111,
    78,
    0,
    "58.73%",
    18084.22,
    17229.92,
    95.68,
    91.16,
    1101,
    916,
    0,
    "54.59%",
    "4.14%",
    103.2,
    85.8,
    7.8,
  ],
  [
    "Basil",
    161,
    93,
    67,
    1,
    "57.76%",
    15605.2,
    14609.34,
    96.93,
    90.74,
    960,
    775,
    2,
    "55.33%",
    "2.44%",
    89.1,
    71.9,
    3.9,
  ],
  [
    "Hunter",
    175,
    94,
    80,
    1,
    "53.71%",
    16563.06,
    16676.82,
    94.65,
    95.3,
    1026,
    863,
    2,
    "54.31%",
    "-0.6%",
    95.0,
    80.0,
    -1.0,
  ],
  [
    "Willis",
    191,
    100,
    91,
    0,
    "52.36%",
    17778.36,
    17576.36,
    93.08,
    92.02,
    1033,
    997,
    1,
    "50.89%",
    "1.47%",
    97.2,
    93.8,
    2.8,
  ],
  [
    "Chaz",
    157,
    77,
    80,
    0,
    "49.04%",
    14389.72,
    14271.84,
    91.65,
    90.9,
    823,
    886,
    0,
    "48.16%",
    "0.89%",
    75.6,
    81.4,
    1.4,
  ],
  [
    "Sam",
    190,
    91,
    99,
    0,
    "47.89%",
    17737.34,
    17279.4,
    93.35,
    90.94,
    1020,
    1003,
    1,
    "50.42%",
    "-2.53%",
    95.8,
    94.2,
    -4.8,
  ],
  [
    "Sawyer",
    191,
    94,
    97,
    0,
    "49.21%",
    17691.06,
    17608.88,
    92.62,
    92.19,
    1005,
    1026,
    0,
    "49.48%",
    "-0.27%",
    94.5,
    96.5,
    -0.5,
  ],
  [
    "Trevor",
    175,
    81,
    94,
    0,
    "46.29%",
    16032.04,
    16517.88,
    91.61,
    94.39,
    899,
    960,
    0,
    "48.36%",
    "-2.07%",
    84.6,
    90.4,
    -3.6,
  ],
  [
    "Ross",
    161,
    73,
    88,
    0,
    "45.34%",
    14974.84,
    15128.36,
    93.01,
    93.96,
    857,
    879,
    1,
    "49.37%",
    "-4.03%",
    79.5,
    81.5,
    -6.5,
  ],
  [
    "Ean",
    189,
    80,
    109,
    0,
    "42.33%",
    16947.4,
    17899.16,
    89.67,
    94.7,
    910,
    1105,
    2,
    "45.17%",
    "-2.84%",
    85.4,
    103.6,
    -5.4,
  ],
  [
    "Jared",
    187,
    61,
    126,
    0,
    "32.62%",
    15620.9,
    17962.78,
    83.53,
    96.06,
    731,
    1268,
    0,
    "36.57%",
    "-3.95%",
    68.4,
    118.6,
    -7.4,
  ],
];

var highScores = [];
var lowScores = [];
var blowouts = [];
var closeGames = [];
var highest = [];
var dumpster = [];
var fortunate = [];
var unfortunate = [];

// 2011
highScores = combineArrays(highScores, highScores2011, 2011);
lowScores = combineArrays(lowScores, lowScores2011, 2011);
blowouts = combineArrays(blowouts, blowouts2011, 2011);
closeGames = combineArrays(closeGames, closeGames2011, 2011);
highest = combineArrays(highest, highest2011, 2011);
dumpster = combineArrays(dumpster, dumpster2011, 2011);
fortunate = combineArrays(fortunate, fortunate2011, 2011);
unfortunate = combineArrays(unfortunate, unfortunate2011, 2011);

// 2012
highScores = combineArrays(highScores, highScores2012, 2012);
lowScores = combineArrays(lowScores, lowScores2012, 2012);
blowouts = combineArrays(blowouts, blowouts2012, 2012);
closeGames = combineArrays(closeGames, closeGames2012, 2012);
highest = combineArrays(highest, highest2012, 2012);
dumpster = combineArrays(dumpster, dumpster2012, 2012);
fortunate = combineArrays(fortunate, fortunate2012, 2012);
unfortunate = combineArrays(unfortunate, unfortunate2012, 2012);

// 2013
highScores = combineArrays(highScores, highScores2013, 2013);
lowScores = combineArrays(lowScores, lowScores2013, 2013);
blowouts = combineArrays(blowouts, blowouts2013, 2013);
closeGames = combineArrays(closeGames, closeGames2013, 2013);
highest = combineArrays(highest, highest2013, 2013);
dumpster = combineArrays(dumpster, dumpster2013, 2013);
fortunate = combineArrays(fortunate, fortunate2013, 2013);
unfortunate = combineArrays(unfortunate, unfortunate2013, 2013);

// 2014
highScores = combineArrays(highScores, highScores2014, 2014);
lowScores = combineArrays(lowScores, lowScores2014, 2014);
blowouts = combineArrays(blowouts, blowouts2014, 2014);
closeGames = combineArrays(closeGames, closeGames2014, 2014);
highest = combineArrays(highest, highest2014, 2014);
dumpster = combineArrays(dumpster, dumpster2014, 2014);
fortunate = combineArrays(fortunate, fortunate2014, 2014);
unfortunate = combineArrays(unfortunate, unfortunate2014, 2014);

// 2015
highScores = combineArrays(highScores, highScores2015, 2015);
lowScores = combineArrays(lowScores, lowScores2015, 2015);
blowouts = combineArrays(blowouts, blowouts2015, 2015);
closeGames = combineArrays(closeGames, closeGames2015, 2015);
highest = combineArrays(highest, highest2015, 2015);
dumpster = combineArrays(dumpster, dumpster2015, 2015);
fortunate = combineArrays(fortunate, fortunate2015, 2015);
unfortunate = combineArrays(unfortunate, unfortunate2015, 2015);

// 2016
highScores = combineArrays(highScores, highScores2016, 2016);
lowScores = combineArrays(lowScores, lowScores2016, 2016);
blowouts = combineArrays(blowouts, blowouts2016, 2016);
closeGames = combineArrays(closeGames, closeGames2016, 2016);
highest = combineArrays(highest, highest2016, 2016);
dumpster = combineArrays(dumpster, dumpster2016, 2016);
fortunate = combineArrays(fortunate, fortunate2016, 2016);
unfortunate = combineArrays(unfortunate, unfortunate2016, 2016);

// 2017
highScores = combineArrays(highScores, highScores2017, 2017);
lowScores = combineArrays(lowScores, lowScores2017, 2017);
blowouts = combineArrays(blowouts, blowouts2017, 2017);
closeGames = combineArrays(closeGames, closeGames2017, 2017);
highest = combineArrays(highest, highest2017, 2017);
dumpster = combineArrays(dumpster, dumpster2017, 2017);
fortunate = combineArrays(fortunate, fortunate2017, 2017);
unfortunate = combineArrays(unfortunate, unfortunate2017, 2017);

// 2018
highScores = combineArrays(highScores, highScores2018, 2018);
lowScores = combineArrays(lowScores, lowScores2018, 2018);
blowouts = combineArrays(blowouts, blowouts2018, 2018);
closeGames = combineArrays(closeGames, closeGames2018, 2018);
highest = combineArrays(highest, highest2018, 2018);
dumpster = combineArrays(dumpster, dumpster2018, 2018);
fortunate = combineArrays(fortunate, fortunate2018, 2018);
unfortunate = combineArrays(unfortunate, unfortunate2018, 2018);

// 2019
highScores = combineArrays(highScores, highScores2019, 2019);
lowScores = combineArrays(lowScores, lowScores2019, 2019);
blowouts = combineArrays(blowouts, blowouts2019, 2019);
closeGames = combineArrays(closeGames, closeGames2019, 2019);
highest = combineArrays(highest, highest2019, 2019);
dumpster = combineArrays(dumpster, dumpster2019, 2019);
fortunate = combineArrays(fortunate, fortunate2019, 2019);
unfortunate = combineArrays(unfortunate, unfortunate2019, 2019);

// 2020
highScores = combineArrays(highScores, highScores2020, 2020);
lowScores = combineArrays(lowScores, lowScores2020, 2020);
blowouts = combineArrays(blowouts, blowouts2020, 2020);
closeGames = combineArrays(closeGames, closeGames2020, 2020);
highest = combineArrays(highest, highest2020, 2020);
dumpster = combineArrays(dumpster, dumpster2020, 2020);
fortunate = combineArrays(fortunate, fortunate2020, 2020);
unfortunate = combineArrays(unfortunate, unfortunate2020, 2020);

// 2021
highScores = combineArrays(highScores, highScores2021, 2021);
lowScores = combineArrays(lowScores, lowScores2021, 2021);
blowouts = combineArrays(blowouts, blowouts2021, 2021);
closeGames = combineArrays(closeGames, closeGames2021, 2021);
highest = combineArrays(highest, highest2021, 2021);
dumpster = combineArrays(dumpster, dumpster2021, 2021);
fortunate = combineArrays(fortunate, fortunate2021, 2021);
unfortunate = combineArrays(unfortunate, unfortunate2021, 2021);

// 2022
highScores = combineArrays(highScores, highScores2022, 2022);
lowScores = combineArrays(lowScores, lowScores2022, 2022);
blowouts = combineArrays(blowouts, blowouts2022, 2022);
closeGames = combineArrays(closeGames, closeGames2022, 2022);
highest = combineArrays(highest, highest2022, 2022);
dumpster = combineArrays(dumpster, dumpster2022, 2022);
fortunate = combineArrays(fortunate, fortunate2022, 2022);
unfortunate = combineArrays(unfortunate, unfortunate2022, 2022);

// helper functions

function combineArrays(allList, list, year) {
  var copy = [];
  list.forEach((subArray, index) => {
    copy[index] = [];
    subArray.forEach((item) => {
      copy[index].push(item);
    });
  });

  copy.forEach((subArray) => {
    subArray = subArray.unshift(year);
  });

  allList = allList.concat(copy);

  return allList;
}
