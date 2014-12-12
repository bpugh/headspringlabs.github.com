(function ($, ga) {

	$(function () {
		$('.headspringer-modal').on('show.bs.modal', function (e) {
			var modal = $(e.currentTarget);
			if (ga && modal && modal.length) {
				var login = modal.data('member-login');
				login && ga.push(['_trackEvent', 'MemberView', 'Login', login]);
			}
		})
	});

})(jQuery, ga);
