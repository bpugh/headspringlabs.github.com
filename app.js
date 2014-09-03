(function ($) {
	Filter = {
		Repo: {
			WhiteList: ['Enumeration', 'Tarantino', 'Naak', 'hsbot', 'HeadspringTime', 'bulk-writer', 'Ferdinand', 'OptionalWCF', 'HeadspringWebAccessibility']
		}
	},
	Sort = {
		Repos: function (self, other) {
			return ((other.watchers < self.watchers) ? -1
					: (other.watchers > self.watchers) ? 1
					: (0));
		}
	},
	Members = {
		load: function (payload) {
			var memberBox = $('.members-list');
			$.each(payload.data, function (index, member) {
				var image = $('<img>').prop('src', 'http://www.gravatar.com/avatar/' + member.gravatar_id);
				var link = $('<a>').prop('href', member.html_url).text(member.login);
				var name = $('<h5>').append(link);
				var block = $('<div>').append(image).append('<br />').append(name).addClass('col-lg-2 col-md-3 col-sm-4 col-xs-4');
				block.appendTo(memberBox);
			});
		}
	},
	Repos = {
		load: function (payload) {
			var projectBox = $('.projects-list');
			$.each(payload.data.sort(Sort.Repos), function (index, repo) {
				if (Filter.Repo.WhiteList.indexOf(repo.name) === -1)
					return;
				var link = $('<a>').prop('href', repo.html_url).text(repo.name);
				var name = $('<h4>').append(link);
				var desc = $('<p>').text(repo.description);
				var block = $('<div>').append(name).append(desc).addClass('col-lg-4 col-md-4 col-sm-6 col-xs-12');
				block.appendTo(projectBox);
			});
		}
	}
})(jQuery);
