(function ($) {

	Blog = {
		Entries: [],
		load: function (payload) {
			Blog.Entries = payload.responseData.feed.entries;
		},
		getFeeds: function (lists, handler) {
			lists.each(function (index, list) {
				var url = $(list).data('blogfeed');
				$.getScript('http://ajax.googleapis.com/ajax/services/feed/load?callback=Blog.load&v=1.0&num=5&q=' + encodeURI(url), function () {
					$.each(Blog.Entries, function (index, entry) {
						handler($(list), entry);
					});
				});
			});
		}
	}

	$(function () {
		Blog.getFeeds($('ul[data-blogfeed]'), function (list, entry) {
			var link = $('<a>').prop('href', entry.link).text(entry.title),
				item = $('<li>').append(link);
			list.append(item);
		});
	});

})(jQuery);
