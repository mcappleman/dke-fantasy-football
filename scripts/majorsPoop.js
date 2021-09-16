$(document).ready(function () {

    var table = $('#majorsPoopTable').DataTable({
        order: [[0, "desc"]],
        data: poopSchedule.data,
        columns: poopSchedule.headers,
        columnDefs: [{
            targets: 0,
            render: $.fn.dataTable.render.moment('X', 'MMMM Do YYYY, h:mm:ss a')
        }]
    });

    $('#majorsPoopTable tfoot th').each(function (i) {
        var title = $(this).text();
        var htmlString = '<input type="text" class="form-control column-search" placeholder="' + poopSchedule.headers[i].title + '" />';
        $(this).html(htmlString);

    });

    // Apply the search
    table.columns().every(function () {
        var that = this;

        $('input', this.footer()).on('keyup change', function () {
            if (that.search() !== this.value) {
                that
                    .search(this.value)
                    .draw();
            }
        });
    });

    $('#majorsPoopTable_filter').addClass('hidden');

});

var poopSchedule = {
    headers: [
        { "title": "Pooped At" },
        { "title": "Likes" },
        { "title": "Name" },
        { "title": "Days Until Draft" },
    ],
    data: [
        [1630157863, 4, 'LIVE DRAFT', 0],
        [1630078202, 2, '1 Day Until the Live Draft', 1],
        [1629983490, 2, '2 Days Until the Live Draft', 2],
        [1629895307, 2, '3 Days Until the Live Draft', 3],
        [1629808149, 2, '4 Days Until the Live Draft', 4],
        [1629721898, 3, '5 Days Until the Live Draft', 5],
        [1629642852, 3, '6 Days Until the Live Draft', 6],
        [1629554783, 2, '7 Days Until the Live Draft', 7],
        [1629463248, 1, '8 Days Until the Live Draft', 8],
        [1629376289, 2, '9 Days Until the Live Draft', 9],
        [1629291148, 3, '10 Days Until the Live Draft', 10],
        [1629120693, 2, '12 Days Until the Live Draft', 12],
        [1628950354, 3, '14 Days Until the Live Draft', 14],
        [1628857850, 2, '15 Days Until the Live Draft', 15],
        [1628771241, 2, '16 Days Until the Live Draft', 16],
        [1628684905, 3, '17 Days Until the Live Draft', 17],
        [1628631982, 3, '18 Days Until the Live Draft', 18],
        [1627390175, 2, '32 Days Until the Live Draft', 32],
        [1627302433, 2, '33 Days Until the Live Draft', 33],
        [1627221635, 3, '34 Days Until the Live Draft', 34],
        [1627136793, 2, '35 Days Until the Live Draft', 35],
        [1627042918, 2, '36 Days Until the Live Draft', 36],
        [1626957051, 1, '37 Days Until the Live Draft', 37],
        [1626870585, 1, '38 Days Until the Live Draft', 38],
        [1626780371, 1, '39 Days Until the Live Draft', 39],
        [1626693434, 3, '40 Days Until the Live Draft', 40],
        [1626620813, 4, '41 Days Until the Live Draft', 41],
        [1626530171, 2, '42 Days Until the Live Draft', 42],
        [1626438609, 3, '43 Days Until the Live Draft', 43],
        [1626354614, 3, '44 Days Until the Live Draft', 44],
        [1626264448, 3, '45 Days Until the Live Draft', 45],
        [1626179491, 3, '46 Days Until the Live Draft', 46],
        [1626093934, 3, '47 Days Until the Live Draft', 47],
        [1625981087, 2, '48 Days Until the Live Draft', 48],
        [1625926678, 3, '49 Days Until the Live Draft', 49],
        [1625832285, 2, '50 Days Until the Live Draft', 50],
        [1625746552, 3, '51 Days Until the Live Draft', 51],
        [1625661241, 2, '52 Days Until the Live Draft', 52],
        [1625582535, 3, '53 Days Until the Live Draft', 53],
        [1625488157, 2, '54 Days Until the Live Draft', 54],
        [1625375291, 3, '55 Days Until the Live Draft', 55],
        [1625286958, 4, '56 Days Until the Live Draft', 56],
        [1625234231, 3, '57 Days Until the Live Draft', 57],
        [1625152862, 1, '58 Days Until the Live Draft', 58],
        [1625053522, 2, '59 Days Until the Live Draft', 59],
        [1624975498, 0, '60 Days Until the Live Draft', 60],
        [1624883449, 1, '61 Days Until the Live Draft', 61],
        [1624803400, 2, '62 Days Until the Live Draft', 62],
        [1624717261, 0, '63 Days Until the Live Draft', 63],
        [1624623629, 3, '64 Days Until the Live Draft', 64],
        [1624537910, 4, '65 Days Until the Live Draft', 65],
        [1624451642, 0, '66 Days Until the Live Draft', 66],
        [1624364227, 3, '67 Days Until the Live Draft', 67],
        [1624250351, 2, '68 Days Until the Live Draft', 68],

        [1624199941, 5, '69 Days Until the Live Draft', 69],
        [1624112156, 3, '70 Days Until the Live Draft', 70],
        [1624020863, 3, '71 Days Until the Live Draft', 71],
        [1623933068, 3, '72 Days Until the Live Draft', 72],
        [1623848141, 3, '73 Days Until the Live Draft', 73],
        [1623759381, 2, '74 Days Until the Live Draft', 74],
        [1623644562, 5, '75 Days Until the Live Draft', 75],
        [1623556941, 1, '76 Days Until the Live Draft', 76],
        [1623474249, 3, '77 Days Until the Live Draft', 77],
        [1623414776, 4, '78 Days Until the Live Draft', 78],
        [1623329068, 4, '79 Days Until the Live Draft', 79],
        [1623243116, 3, '80 Days Until the Live Draft', 80],
        [1623155705, 2, '81 Days Until the Live Draft', 81],
        [1623042313, 3, '82 Days Until the Live Draft', 82],
        [1622991566, 1, '83 Days Until the Live Draft', 83],
        [1622903222, 4, '84 Days Until the Live Draft', 84],
        [1622795156, 3, '85 Days Until the Live Draft', 85],
        [1622699144, 4, '86 Days Until the Live Draft', 86],
        [1622637334, 3, '87 Days Until the Live Draft', 87],
        [1622554638, 2, '88 Days Until the Live Draft', 88],
        [1622450487, 3, '89 Days Until the Live Draft', 89],
        [1622384329, 8, '90 Days Until the Live Draft', 90],
        [1622307134, 3, '91 Days Until the Live Draft', 91],
        [1622205181, 2, '92 Days Until the Live Draft', 92],
        [1622118979, 2, '93 Days Until the Live Draft', 93],
        [1622033700, 2, '94 Days Until the Live Draft', 94],
        [1621948416, 1, '95 Days Until the Live Draft', 95],
        [1621860237, 3, '96 Days Until the Live Draft', 96],
        [1621774143, 1, '97 Days Until the Live Draft', 97],
        [1621694200, 0, '98 Days Until the Live Draft', 98],
        [1621600343, 2, '99 Days Until the Live Draft', 99],
        [1621514094, 2, '100 Days Until the Live Draft', 100],
        [1621431264, 1, '101 Days Until the Live Draft', 101],
        [1621340518, 2, '102 Days Until the Live Draft', 102],
        [1621255760, 1, '103 Days Until the Live Draft', 103],
        [1621177792, 0, '104 Days Until the Live Draft', 104],
        [1621091800, 3, '105 Days Until the Live Draft', 105],
        [1620996817, 2, '106 Days Until the Live Draft', 106],
        [1620910405, 0, '107 Days Until the Live Draft', 107],
        [1620822110, 4, '108 Days Until the Live Draft', 108],
        [1620737344, 1, '109 Days Until the Live Draft', 109],
        [1620649813, 2, '110 Days Until the Live Draft', 110],
        [1620570810, 2, '111 Days Until the Live Draft', 111],
        [1620491574, 0, '112 Days Until the Live Draft', 112],
        [1620390553, 0, '113 Days Until the Live Draft', 113],
        [1620320755, 0, '114 Days Until the Live Draft', 114],
        [1620219122, 3, '115 Days Until the Live Draft', 115],
        [1620132464, 2, '116 Days Until the Live Draft', 116],
        [1620044330, 0, '117 Days Until the Live Draft', 117],
        [1619972261, 2, '118 Days Until the Live Draft', 118],
        [1619876978, 1, '119 Days Until the Live Draft', 119],
        [1619793648, 3, '120 Days Until the Live Draft', 120],
        [1619614358, 2, '121 Days Until the Live Draft', 121],
        [1619527557, 0, '122 Days Until the Live Draft', 122],
        [1619410334, 1, '123 Days Until the Live Draft', 123],
        [1619362008, 0, '124 Days Until the Live Draft', 124],
        [1619287663, 3, '125 Days Until the Live Draft', 125],
        [1619180877, 2, '126 Days Until the Live Draft', 126],
        [1619095666, 5, '127 Days Until the Live Draft', 127],
        [1619008159, 3, '128 Days Until the Live Draft', 128],
        [1618924825, 5, '129 Days Until the Live Draft', 129],
        [1618834879, 0, '130 Days Until the Live Draft', 130],
        [1618723919, 0, '131 Days Until the Live Draft', 131],
        [1618669590, 0, '132 Days Until the Live Draft', 132],
        [1618579310, 2, '133 Days Until the Live Draft', 133],
        [1618491390, 4, '134 Days Until the Live Draft', 134],
        [1618404520, 4, '135 Days Until the Live Draft', 135],
        [1618319858, 5, '136 Days Until the Live Draft', 136],
        [1618200013, 3, '137 Days Until the Live Draft', 137],
        [1618150562, 3, '138 Days Until the Live Draft', 138],
        [1618030795, 4, '139 Days Until the Live Draft', 139],
        [1617971515, 3, '140 Days Until the Live Draft', 140],
        [1617908467, 5, '141 Days Until the Live Draft', 141]
    ]
}