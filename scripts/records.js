$(document).ready(function() {

    $('#winstreak').DataTable( {
        order: [[1, "desc"]],
        searching: false,
        ordering: false,
        sDom: '',
        lengthMenu: [[-1], ["All"]],
        data: dataSet,
        columns: columnNames
    } );

});

var streakData = [
	['Ross', 7, 'Week 15, 2014 vs. Majors', 'Week 7, 2015 vs. Sam'],
	['Hunter', 7, 'Week 1, 2014 vs. CJ', 'Week 8, 2014 vs. CJ'],
	['Willis', 7, 'Week 1, 2013 vs. Sawyer', 'Week 8, 2013 vs. Basil'],
	['Matt', 7, 'Week 7, 2011 vs. Skip', 'Week 14, 2011 vs. Willis'],
	['Sawyer', 6, 'Week 1, 2017 vs. Ean', 'Week 7, 2017 vs. Hunter'],
	['Jared', 6, 'Week 10, 2015 vs. Basil', 'Week 1, 2015 vs. Hunter'],
]

var streakColums = [
	{ title: 'Team' },
	{ title: 'Wins' },
	{ title: 'Started' },
	{ title: 'Ended' }
]