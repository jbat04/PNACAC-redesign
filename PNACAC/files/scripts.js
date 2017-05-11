var $body = $("#body");
var $left = $("#left");
$(window).on('scroll resize', function() {
	if ($body.length != 0 && $left.length != 0) {
		if ($body.offset().top < $(this).scrollTop()) {
			$left.css({
				"position": "fixed",
				"top": "0px",
				"width": ($left.parent().width() / 5) + "px"
			});
			$body.css({
				"margin-left": "20%"
			});
		}
		else {
			$left.removeAttr("style");
			$body.removeAttr("style");
		}
	}
}).trigger('scroll');

$("#nav .search input[type='text']").on('keydown', function(e) {
	if (!e) { var e = window.event; }
    //e.preventDefault(); // sometimes useful
    if (e.keyCode == 13 && $(this).val() != "") {
		gotoSearch($(this).val());
    }
});

$("#nav .search input[type='button']").on('click', function() {
	var val = $("#nav .search input[type='text']").val();
	if (val != "") {
		gotoSearch(val);
	}
})

var re = new RegExp("search.html\\?q=(.*)$");
var result = window.location.href.match(re);
if (result) {
	$("#nav .search input[type='text']").val(result[1]);
}

function gotoSearch(val) {
	window.location.href = "./search.html?q=" + val;
}