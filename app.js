(function ($) {
	Date.prototype.addDays = function(days) {
	    var date = new Date(this.valueOf());
	    date.setDate(date.getDate() + days);
	    return date;
	}

	Blogs = {
		scichelli: { feed: 'http://feeds.feedburner.com/lostechies/gwc' },
		ChrisMissal: { feed: 'http://feeds.feedburner.com/ChrisMissalsBlog' },
		load: function (payload) {
			BlogFeed = payload.responseData.feed.entries;
		},
		applyBlogEntries: function (member, complete) {
			var hasBlog = !!Blogs[member.login];
			if (!hasBlog) {
				complete();
				return;
			}
			$.getScript('http://ajax.googleapis.com/ajax/services/feed/load?callback=Blogs.load&v=1.0&num=5&q=' + encodeURI(Blogs[member.login].feed), function () {
				member.Blogs = BlogFeed;
				complete();
			});
		}
	},
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
	Cache = {
		hasLocalStorage: function () {
			try {
				return 'localStorage' in window && window['localStorage'] !== null;
			} catch (e) {
				return false;
			}
		},
		fetch: function (url, callback) {
			var today = new Date();
			var tomorrow = today.addDays(1);

			var raw = localStorage[url];
			if (raw) {
				var value = JSON.parse(raw);
				if (value.expires < today) {
					console.log('expired, refreshing');
					$.getJSON(url, function (data) {
						value.data = data;
						value.expires = tomorrow;
						return callback(value);
					});
				} else {
					return callback(value);
				}
			} else {
				$.getJSON(url, function (data) {
					var value = {
						data: data,
						expires: tomorrow,
					};
					localStorage[url] = JSON.stringify(value);
					return callback(value);
				});
			}
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
				Blogs.applyBlogEntries(member, function () {
					var content = Template.Member.render(member);
					memberBox.append(content);
				});
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

	$(function () {
		Cache.fetch('https://api.github.com/organizations/1236851/members?page=1', Members.load);
		Cache.fetch('https://api.github.com/organizations/1236851/members?page=2', Members.load);
		Cache.fetch('https://api.github.com/organizations/1236851/repos', Repos.load);
	})
})(jQuery);

