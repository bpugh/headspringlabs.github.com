---
featured:
  - Enumeration
  - Tarantino
  - Naak
  - hsbot
  - HeadspringTime
  - bulk-writer
  - Ferdinand
  - OptionalWCF
  - HeadspringWebAccessibility
blogs:
  - scichelli: http://feeds.feedburner.com/lostechies/gwc
  - ChrisMissal: http://feeds.feedburner.com/ChrisMissalsBlog
  - seanbiefeld: http://lostechies.com/seanbiefeld/feed/
  - ryanande: http://www.flapstack.com/rss/
  - plioi: http://lostechies.com/patricklioi/feed/
  - gbHeadspring: http://glennburnside.com/rss
  - davidsavagejr: http://kemahshore.com/atom.xml
  - pmcvtm: http://loudandabrasive.com/rss/
  - derans: http://feeds.feedburner.com/derans
---

<head>
<!-- Meta, title, CSS, favicons, etc. -->
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>Headspring Labs</title>
<link href="bootstrap.min.css" rel="stylesheet">
<link href="custom.css" rel="stylesheet">

<!-- Favicons -->
<link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-precomposed.png">
<link rel="icon" href="favicon.ico">
  </head>
  <body>
    <a class="sr-only sr-only-focusable" href="#content">Skip to main content</a>

    <!-- Docs master nav -->
    <nav class="navbar navbar-default navbar-fixed-top" id="top" role="navigation">
  <div class="container">
    <div class="navbar-header">
      <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a href="/" class="navbar-brand">Headspring Labs</a>
    </div>
    <nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation">
      <ul class="nav navbar-nav">
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#team-members">Team Members</a>
        </li>
        <li>
          <a href="#questions">Questions / Bugs</a>
        </li>
      </ul>
    </nav>
  </div>
</nav>


    <div class="container">

      <div class="row-fluid" id="hero">
        <div class="jumbotron hidden-xs">
          We build software that transforms organizations
        </div>
        <div class="jumbotron visible-xs">
        </div>
      </div>

      <div class="row-fluid">
        <div class="col-md-9" role="main">
          <div class="row projects-list">
            <h4 class="section"><a class="anchor" name="projects"></a>Projects</h4>
            {% for repo in site.github.public_repositories %}
            {% if page.featured contains repo.name %}
			<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
			  <div class="panel panel-default">
			    <div class="panel-heading"><h5 class="panel-title"><a href="{{ repo.html_url }}">{{ repo.name }}</a></h5></div>
			    <div class="panel-body">
			      <p class="project-desc">{{ repo.description }}</p>
			    </div>
			    <div class="panel-footer">
			      <iframe src="http://ghbtns.com/github-btn.html?user={{ repo.owner.login }}&amp;repo={{ repo.name }}&amp;type=watch&amp;count=true" allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20"></iframe>
			      <iframe src="http://ghbtns.com/github-btn.html?user={{ repo.owner.login }}&amp;repo={{ repo.name }}&amp;type=fork&amp;count=true" allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20"></iframe>
			    </div>
			  </div>
			</div>
			{% endif %}
            {% endfor %}
          </div>

          <hr class="dashed" />

          <div class="row">
            <h4 class="section"><a class="anchor" name="team-members"></a>Team Members</h4>
            <div class="well col-lg-12 col-md-12 col-sm-12 col-xs-12 members-list">
              {% for member in site.github.organization_members %}
				<div class="col-lg-2 col-md-2 col-sm-2 col-xs-6 member" id="member-{{ member.login }}" data-member-name="{{ member.login }}">
				  <p class="text-center clickable-member" data-toggle="modal" data-target="#modal-{{ member.login }}">
				    <img src="{{ member.avatar_url }}&amp;s=100" class="img-rounded" width="100" />
				    <p>{{ member.login }}</p>
				  </p>
				  <div id="modal-{{ member.login }}" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true" aria-labelledby="modal-{{ member.login }}-label">
				    <div class="modal-dialog">
				      <div class="modal-content">
				        <div class="modal-header">
				          <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
				          <h4 class="modal-title" id="modal-{{ member.login }}-label">{{ member.login }}</h4>
				        </div>
				        <div class="row modal-body">
				          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
				            <img src="{{ member.avatar_url }}&amp;s=200" class="img-rounded" width="200" />
				          </div>
				          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
				            <h5>Links</h5>
				            <ul>
				              <li><a href="{{ member.html_url }}">GitHub Profile</a></li>
				            </ul>
				            {% for blog in page.blogs %}
				            {% assign feed = blog[member.login] %}
				            {% if feed != nil %}
				            <h5>Recent Blog Posts</h5>
				            <ul data-blogfeed="{{ feed }}">
				            </ul>
				            {% endif %}
				            {% endfor %}
				          </div>
				        </div>
				        <div class="modal-footer">
				          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				        </div>
				      </div>
				    </div>
				  </div>
				</div>
              {% endfor %}
            </div>
          </div>

          <hr class="row dashed" />

          <div class="row questions">
            <h4 class="section"><a class="anchor" name="questions"></a>Questions / Bugs</h4>
            <p>If you have any questions or find a bug/defect in any of our projects, please submit an issue on GitHub for that repo. Depending on the size and popularity of the project, you may find that there will be more people paying attention and able to help on Stackoverflow. Please use your best judgement.</p>
          </div>

        </div>

        <div class="col-md-3 sidebar">
          <div class="row-fluid">
            <div class="col-lg-12 col-md-12 col-sm-4">
              <h4 class="section">More of Headspring</h4>
              <ul class="nav nav-pills nav-stacked">
                <li><a href="http://www.headspring.com">Headspring</a></li>
                <li><a href="http://www.twitter.com/Headspring">Headspring Twitter</a></li>
                <li><a href="http://www.twitter.com/HeadspringLabs">Headspring Labs Twitter</a></li>
              </ul>
            </div>
            <div class="col-lg-12 col-md-12 col-sm-4">
              <h4 class="section">Events</h4>
              <ul class="nav nav-pills nav-stacked">
                <li><a href="http://austingivecamp.org">Austin GiveCamp</a></li>
                <li><a href="http://houstongivecamp.org/">Houston GiveCamp</a></li>
                <li><a href="http://codecamp14.adnug.org/">Austin Code Camp</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr class="dashed" />

  <footer role="contentinfo">
    <div class="container">
      <div class="row-fluid">
        <p>Copyright © 2014 Headspring Labs</p>
      </div>
    </div>
  </footer>

<script src="jquery.min.js"></script>
<script src="bootstrap.min.js"></script>
<script type="text/javascript" src="blogs.js"></script>
  </body>
