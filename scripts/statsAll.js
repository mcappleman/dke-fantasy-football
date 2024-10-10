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
  ["Majors", 207, 131, 76, 0, "63.29%", 20574.30, 18721.42, 99.39, 90.44, 1296, 909, 2, "58.77%", "4.52%", 121.6, 85.4, 9.4],
  ["Matt", 206, 126, 80, 0, "61.17%", 19802.54, 18788.58, 96.13, 91.21, 1216, 984, 0, "55.27%", "5.89%", 113.9, 92.1, 12.1],
  ["Willis", 209, 111, 98, 0, "53.11%", 19503.56, 19236.75, 93.32, 92.04, 1124, 1096, 1, "50.63%", "2.48%", 105.8, 103.2, 5.2],
  ["Sam", 208, 100, 108, 0, "48.08%", 19445.92, 18920.56, 93.49, 90.96, 1108, 1105, 1, "50.07%", "-1.99%", 104.1, 103.9, -4.1],
  ["Sawyer", 208, 104, 104, 0, "50%", 19367.90, 19142.70, 93.11, 92.03, 1111, 1103, 0, "50.18%", "-0.18%", 104.4, 103.6, -0.4],
  ["Hunter", 192, 101, 90, 1, "52.6%", 18151.90, 18429.08, 94.54, 95.98, 1118, 954, 2, "53.95%", "-1.35%", 103.6, 88.4, -2.6],
  ["Basil", 178, 97, 80, 1, "54.49%", 17121.50, 16446.60, 96.19, 92.40, 1031, 887, 2, "53.75%", "0.74%", 95.7, 82.3, 1.3],
  ["Ean", 207, 87, 120, 0, "42.03%", 18632.24, 19740.56, 90.01, 95.37, 996, 1208, 3, "45.2%", "-3.17%", 93.6, 113.4, -6.6],
  ["Trevor", 192, 89, 103, 0, "46.35%", 17578.16, 18126.38, 91.55, 94.41, 974, 1068, 0, "47.7%", "-1.34%", 91.6, 100.4, -2.6],
  ["Ross", 178, 81, 97, 0, "45.51%", 16650.32, 16791.06, 93.54, 94.33, 942, 977, 1, "49.09%", "-3.58%", 87.4, 90.6, -6.4],
  ["Chaz", 174, 83, 91, 0, "47.7%", 15959.80, 15894.20, 91.72, 91.35, 903, 989, 0, "47.73%", "-0.03%", 83.0, 91.0, 0.0],
  ["Jared", 204, 69, 135, 0, "33.82%", 17450.99, 19615.80, 85.54, 96.16, 846, 1336, 0, "38.77%", "-4.95%", 79.1, 124.9, -10.1],
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
