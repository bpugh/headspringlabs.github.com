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
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="description" content="Headspring Labs"/>
    <meta name="author" content="Headspring"/>
    <title>Headspring Labs</title>
    <link rel="stylesheet" href="static/dist/vendor.css">
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700" type="text/css"/>
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
<!-- begin preloader -->
<div class="preloader">
    <div class="preloader-content-wrapper">
        <div class="preloader-content">
            <i class="fa fa-cog fa-3x fa-spin"></i>
        </div>
    </div>
</div>
<!-- end preloader -->

<!-- begin nav -->
<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span>Menu</span>
            </button>
            <!-- begin logo in navigation -->
            <a class="navbar-brand" href="#intro">
                <img src="static/images/footer-logo.png" alt="logo small">
            </a>
            <!-- end logo in navigation -->
        </div>
        <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav pull-right">
                <!-- begin navigation items -->
                <li class="current"><a href="#intro">Start</a></li>
                <li><a href="#features">Open source</a></li>
                <li><a href="#newsletter">Questions &amp; bugs</a></li>
                <li><a href="#customers">Team members</a></li>
                <!-- end navigation items -->
            </ul>
        </div>
    </div>
</nav>
<!-- end nav -->

<!-- begin intro section -->
<section class="intro" id="intro">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="intro-section">
                    <!-- begin logo intro section -->
                    <img src="static/images/hs-labs-logo-2.png" class="logo" alt="logo">
                    <!-- end logo intro section -->
                    <h1>We build software<br/>that transforms organizations</h1>
                    <a href="#" class="mouse">
                        <i class="fa fa-angle-down Drop animated"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <span class="mouse"></span>

</section>
<!-- end intro section -->

<!-- begin features section -->
<section class="features" id="features">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="section-head">
                    <h1>Open source</h1>
                    <p>We build stuff. And then share it with you.</p>
                    <span class="underline"></span>
                </div>
            </div>
        </div>
        <div class="row">
            {% for repo in site.github.public_repositories %}
            {% if page.featured contains repo.name %}
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 project-item">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h5 class="panel-title"><a href="{{ repo.html_url }}">{{ repo.name }}</a>
                        </h5>
                    </div>
                    <div class="panel-body">
                        <p class="project-desc">{{ repo.description }}</p>
                    </div>
                    <div class="panel-footer">
                        <iframe src="http://ghbtns.com/github-btn.html?user={{ repo.owner.login }}&amp;repo={{ repo.name }}&amp;type=watch&amp;count=true"
                                allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20"></iframe>
                        <iframe src="http://ghbtns.com/github-btn.html?user={{ repo.owner.login }}&amp;repo={{ repo.name }}&amp;type=fork&amp;count=true"
                                allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20"></iframe>
                    </div>
                </div>
            </div>
            {% endif %}
            {% endfor %}
        </div>
    </div>

</section>
<!-- end features section -->

<!-- begin newsletter section -->
<section class="newsletter" id="newsletter">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="section-head">
                    <h1>Questions &amp; bugs</h1>
                    <p style="margin-top: 20px;">If you have any questions or find a bug in any of our projects, please submit an issue on GitHub for that repo.</p>
                    <span class="underline"></span>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- end newsletter section -->

<!-- begin customer section -->
<section class="customers" id="customers">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="customer-slider">
                {% for member in site.github.organization_members %}
                    <div class="item">
                        <a href="#" data-toggle="modal" data-target="#{{ member.login }}-Modal">
                            <img src="{{ member.avatar_url }}&amp;s=100" alt="{{ member.login }}" width="100" />
                        </a>
                    </div>
                {% endfor %}
                </div>
            </div>
        </div>
    </div>
</section>
<!-- end customer section -->

<!-- begin footer section -->
<footer class="footer" id="footer">
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-sm-3">
                <!-- begin logo footer -->
                <img src="static/images/footer-logo.png" alt="footer logo">
                <!-- end logo footer -->
                <p>
                    We build software that transforms organizations.
                </p>
            </div>
            <div class="col-md-2 col-sm-3">
                <h4>More Headspring</h4>
                <div class="underline-small"></div>
                <ul>
                    <li>
                        <a href="http://www.headspring.com/">Headspring.com</a>
                    </li>
                    <li>
                        <a href="http://www.headspring.com/careers">
                            Jobs
                            <span class="jobs">We're hiring!</span>
                        </a>
                    </li>
                    <li>
                        <a href="http://www.twitter.com/Headspring">Headspring Twitter</a>
                    </li>
                    <li>
                        <a href="http://www.twitter.com/HeadspringLabs">Headspring Labs Twitter</a>
                    </li>
                </ul>
            </div>
            <div class="col-md-2 col-md-offset-1 col-sm-3">
                <h4>Events</h4>
                <div class="underline-small"></div>
                <ul>
                    <li>
                        <a href="http://austingivecamp.org/">Austin GiveCamp</a>
                    </li>
                    <li>
                        <a href="http://houstongivecamp.org/">Houston GiveCamp</a>
                    </li>
                    <li>
                        <a href="http://codecamp14.adnug.org/">Austin Code Camp</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-center">
                <p><small>Copyright &copy; 2014 Headspring Labs</small></p>
            </div>
        </div>
    </div>
</footer>
<!-- end footer section -->

{% for member in site.github.organization_members %}
<div class="modal fade headspringer-modal" id="{{ member.login }}-Modal" tabindex="-1" role="dialog" aria-labelledby="{{ member.login }}-Modal-Label" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                <div class="avatar-container">
                    <img src="{{ member.avatar_url }}&amp;s=200" alt="{{ member.login }}" width="200" />
                </div>
                <h4 class="modal-title">{{ member.login }}</h4>
            </div>
            <div class="modal-body">
                <h4>Links</h4>
                <ul>
                    <li>
                        <a href="{{ member.html_url }}">GitHub Profile</a>
                    </li>
                </ul>
                {% for blog in page.blogs %}
                {% assign feed = blog[member.login] %}
                {% if feed != nil %}
                <h4>Recent Blog Posts</h4>
                <ul data-blogfeed="{{ feed }}">
                </ul>
                {% endif %}
                {% endfor %}
            </div>
        </div>
    </div>
</div>
{% endfor %}

<!-- Javascripts -->
<script src="static/dist/vendor.js"></script>
<script src="static/dist/app.js"></script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create','UA-42793327-1','auto');ga('send','pageview');
</script>
</body>