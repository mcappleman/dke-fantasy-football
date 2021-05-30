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
        [1622384329, 5, "90 Days Until the Live Draft", 90],
        [1622307134, 3, "91 Days Until the Live Draft", 91],
        [1622205181, 2, "92 Days Until the Live Draft", 92],
        [1622118979, 2, "93 Days Until the Live Draft", 93],
        [1622033700, 2, "94 Days Until the Live Draft", 94],
        [1621948416, 1, "95 Days Until the Live Draft", 95],
        [1621860237, 3, "96 Days Until the Live Draft", 96],
        [1621774143, 1, "97 Days Until the Live Draft", 97],
        [1621694200, 0, "98 Days Until the Live Draft", 98],
        [1621600343, 2, "99 Days Until the Live Draft", 99],
        [1621514094, 2, "100 Days Until the Live Draft", 100],
        [1621431264, 1, "101 Days Until the Live Draft", 101],
        [1621340518, 2, "102 Days Until the Live Draft", 102],
        [1621255760, 1, "103 Days Until the Live Draft", 103],
        [1621177792, 0, "104 Days Until the Live Draft", 104],
        [1621091800, 3, "105 Days Until the Live Draft", 105],
        [1620996817, 2, "106 Days Until the Live Draft", 106],
        [1620910405, 0, "107 Days Until the Live Draft", 107],
        [1620822110, 4, "108 Days Until the Live Draft", 108],
        [1620737344, 1, "109 Days Until the Live Draft", 109],
        [1620649813, 2, "110 Days Until the Live Draft", 110],
        [1620570810, 2, "111 Days Until the Live Draft", 111],
        [1620491574, 0, "112 Days Until the Live Draft", 112],
        [1620390553, 0, "113 Days Until the Live Draft", 113],
        [1620320755, 0, "114 Days Until the Live Draft", 114],
        [1620219122, 3, "115 Days Until the Live Draft", 115],
        [1620132464, 2, "116 Days Until the Live Draft", 116],
        [1620044330, 0, "117 Days Until the Live Draft", 117],
        [1619972261, 2, "118 Days Until the Live Draft", 118],
        [1619876978, 1, "119 Days Until the Live Draft", 119],
        [1619793648, 3, "120 Days Until the Live Draft", 120],
        [1619614358, 2, "121 Days Until the Live Draft", 121],
        [1619527557, 0, "122 Days Until the Live Draft", 122],
        [1619410334, 1, "123 Days Until the Live Draft", 123],
        [1619362008, 0, "124 Days Until the Live Draft", 124],
        [1619287663, 3, "125 Days Until the Live Draft", 125],
        [1619180877, 2, "126 Days Until the Live Draft", 126],
        [1619095666, 5, "127 Days Until the Live Draft", 127],
        [1619008159, 3, "128 Days Until the Live Draft", 128],
        [1618924825, 5, "129 Days Until the Live Draft", 129],
        [1618834879, 0, "130 Days Until the Live Draft", 130],
        [1618723919, 0, "131 Days Until the Live Draft", 131],
        [1618669590, 0, "132 Days Until the Live Draft", 132],
        [1618579310, 2, "133 Days Until the Live Draft", 133],
        [1618491390, 4, "134 Days Until the Live Draft", 134],
        [1618404520, 4, "135 Days Until the Live Draft", 135],
        [1618319858, 5, "136 Days Until the Live Draft", 136],
        [1618200013, 3, "137 Days Until the Live Draft", 137],
        [1618150562, 3, "138 Days Until the Live Draft", 138],
        [1618030795, 4, "139 Days Until the Live Draft", 139],
        [1617971515, 3, "140 Days Until the Live Draft", 140],
        [1617908467, 5, "141 Days Until the Live Draft", 141]
    ]
}