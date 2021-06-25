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