(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

var user = null;

$(document).ready(function(){
    $('.modal').modal();
    url = laravel + '/checklogin';
	
	$.ajax({
			type: 'get',
			url: url,
			crossDomain: true,
			xhrFields: {
				withCredentials: true
			},
	   	   success: function(response) {
		      user =  response;
		      userReload();
		   }
	});
	

$('#logoutnavmob').on('click', function(e) {
	e.preventDefault();
	var url = laravel + '/logout';
	$.ajax({
	   	type: 'get',
	   	url: url,
		crossDomain: true,
		xhrFields: {
			withCredentials: true
		},
	   success: function(response) {
	      user = null;
	      userReload();
	   }
	});
});


$('#logoutnav').on('click', function(e) {
	e.preventDefault();
	var url = laravel + '/logout';
	$.ajax({
	   	type: 'get',
	   	url: url,
		crossDomain: true,
		xhrFields: {
			withCredentials: true
		},
	   success: function(response) {
	      user = null;
	      userReload();
	   }
	});
});
});

function userReload() {
		if(user && Object.keys(user).length !== 0) {
			// document.getElementById('signupnavmob').style.display =  'none';
			if(document.getElementById('signupnav')) {

				document.getElementById('signupnav').style.display =  'none';
			// document.getElementById('loginnavmob').style.display =  'none';
				document.getElementById('loginnav').style.display =  'none';
				document.getElementById('mini-profile').style.display =  'none';
			}
			document.getElementById('usernav').innerHTML = user.name;
			document.getElementById('usernavmob').innerHTML = user.name;
			document.getElementById('usernavmob').style.display =  'block';
			document.getElementById('usernav').style.display =  'block';
			document.getElementById('logoutnav').style.display =  'block';
			document.getElementById('logoutnavmob').style.display =  'block';
		} else {
			// document.getElementById('signupnavmob').style.display =  'block';
			if(document.getElementById('signupnav')) {
				document.getElementById('signupnav').style.display =  'block';
			// document.getElementById('loginnavmob').style.display =  'block';
				document.getElementById('loginnav').style.display =  'block';
				document.getElementById('mini-profile').style.display =  'block';
			}
			document.getElementById('usernavmob').style.display =  'none';
			document.getElementById('usernav').style.display =  'none';
			document.getElementById('logoutnav').style.display =  'none';
			document.getElementById('logoutnavmob').style.display =  'none';

		}
	}