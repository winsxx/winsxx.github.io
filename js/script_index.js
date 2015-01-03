$(document).ready(
		function() {
			$('#fullpage')
					.fullpage(
							{
								navigation : true,
								anchors : [ 'my_home', 'my_experience',
										'my_portfolio', 'my_achievement',
										'my_education', 'my_contact' ],
								navigationTooltips : [ 'Home',
										'Experience', 'Portfolio',
										'Achievement', 'Education',
										'Contact' ],
								verticalCentered : false
							});
		});