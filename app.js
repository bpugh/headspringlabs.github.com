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
	Template = {
		Member: $.templates('#memberTmpl'),
		Repo: $.templates('#projectTmpl')
	},
	Members = {
		load: function (payload) {
			var memberBox = $('.members-list');
			$.each(payload.data, function (index, member) {
				var content = Template.Member.render(member);
				memberBox.append(content);
			});
		}
	},
	Repos = {
		load: function (payload) {
			var projectBox = $('.projects-list');
			$.each(payload.data.sort(Sort.Repos), function (index, repo) {
				if (Filter.Repo.WhiteList.indexOf(repo.name) === -1)
					return;
				var content = Template.Repo.render(repo);
				projectBox.append(content);
			});
		}
	}
})(jQuery);
