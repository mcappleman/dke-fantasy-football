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
    212,
    136,
    76,
    0,
    "64.15%",
    21268.84,
    19217.82,
    100.32,
    90.65,
    1344,
    916,
    2,
    "59.46%",
    "4.69%",
    126.1,
    85.9,
    9.9,
  ],
  [
    "Matt",
    211,
    130,
    81,
    0,
    "61.61%",
    20415.88,
    19239.24,
    96.76,
    91.18,
    1262,
    993,
    0,
    "55.96%",
    "5.65%",
    118.1,
    92.9,
    11.9,
  ],
  [
    "Basil",
    183,
    99,
    83,
    1,
    "54.1%",
    17618.14,
    16994.42,
    96.27,
    92.87,
    1056,
    917,
    2,
    "53.52%",
    "0.58%",
    97.9,
    85.1,
    1.1,
  ],
  [
    "Hunter",
    197,
    101,
    95,
    1,
    "51.27%",
    18508.98,
    19016.56,
    93.95,
    96.53,
    1122,
    1005,
    2,
    "52.75%",
    "-1.48%",
    103.9,
    93.1,
    -2.9,
  ],
  [
    "Willis",
    214,
    113,
    101,
    0,
    "52.8%",
    19984.46,
    19792.65,
    93.39,
    92.49,
    1143,
    1132,
    1,
    "50.24%",
    "2.56%",
    107.5,
    106.5,
    5.5,
  ],
  [
    "Sam",
    213,
    104,
    109,
    0,
    "48.83%",
    19979.56,
    19380.66,
    93.8,
    90.99,
    1138,
    1130,
    1,
    "50.18%",
    "-1.35%",
    106.9,
    106.1,
    -2.9,
  ],
  [
    "Sawyer",
    213,
    108,
    105,
    0,
    "50.7%",
    19858.4,
    19602.02,
    93.23,
    92.03,
    1135,
    1134,
    0,
    "50.02%",
    "0.68%",
    106.5,
    106.5,
    1.5,
  ],
  [
    "Trevor",
    197,
    90,
    107,
    0,
    "45.69%",
    18173.38,
    18764.74,
    92.25,
    95.25,
    1015,
    1082,
    0,
    "48.4%",
    "-2.72%",
    95.4,
    101.6,
    -5.4,
  ],
  [
    "Ross",
    183,
    82,
    101,
    0,
    "44.81%",
    17066.0,
    17258.82,
    93.26,
    94.31,
    953,
    1021,
    1,
    "48.28%",
    "-3.47%",
    88.3,
    94.7,
    -6.3,
  ],
  [
    "Chaz",
    179,
    84,
    95,
    0,
    "46.93%",
    16495.98,
    16456.26,
    92.16,
    91.93,
    935,
    1012,
    0,
    "48.02%",
    "-1.1%",
    86.0,
    93.0,
    -2.0,
  ],
  [
    "Ean",
    212,
    89,
    123,
    0,
    "41.98%",
    19110.42,
    20246.52,
    90.14,
    95.5,
    1019,
    1240,
    3,
    "45.11%",
    "-3.13%",
    95.6,
    116.4,
    -6.6,
  ],
  [
    "Jared",
    209,
    73,
    136,
    0,
    "34.93%",
    17962.33,
    20087.22,
    85.94,
    96.11,
    873,
    1364,
    0,
    "39.03%",
    "-4.1%",
    81.6,
    127.4,
    -8.6,
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

// 2023
highScores = combineArrays(highScores, highScores2023, 2023);
lowScores = combineArrays(lowScores, lowScores2023, 2023);
blowouts = combineArrays(blowouts, blowouts2023, 2023);
closeGames = combineArrays(closeGames, closeGames2023, 2023);
highest = combineArrays(highest, highest2023, 2023);
dumpster = combineArrays(dumpster, dumpster2023, 2023);
fortunate = combineArrays(fortunate, fortunate2023, 2023);
unfortunate = combineArrays(unfortunate, unfortunate2023, 2023);

// 2024
highScores = combineArrays(highScores, highScores2024, 2024);
lowScores = combineArrays(lowScores, lowScores2024, 2024);
blowouts = combineArrays(blowouts, blowouts2024, 2024);
closeGames = combineArrays(closeGames, closeGames2024, 2024);
highest = combineArrays(highest, highest2024, 2024);
dumpster = combineArrays(dumpster, dumpster2024, 2024);
fortunate = combineArrays(fortunate, fortunate2024, 2024);
unfortunate = combineArrays(unfortunate, unfortunate2024, 2024);

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
