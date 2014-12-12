(function ($, gaq) {

	$(function () {
		$('.headspringer-modal').on('show.bs.modal', function (e) {
			var modal = $(e.currentTarget);
			if (modal && modal.length) {
				var login = modal.data('member-login');
				gaq.push(['_trackEvent', 'MemberView', 'Login', login]);
			}
		})
	});

})(jQuery, _gaq);
