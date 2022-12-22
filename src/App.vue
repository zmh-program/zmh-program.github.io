<script setup>
import index from './components/index.vue'
</script>
<template>
  <main data-spy="scroll" data-target=".main-nav">
    <div class="message-window" id="message-window"></div>
    <section id="section-banner">
      <div class="section-container">
        <div class="row">
          <div class="banner-content  fadeInRight">
            <h2 class="title">Hello, <br/><span>🎉 welcome to Zh-Website.</span></h2>
            <div class="button-list">
              <a href="/register/" class="glass-button btn btn-default">Sign up</a>
              <a href="/login/" class="glass-button btn btn-default">Sign in</a>
              <br>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="section-overview" class="section-padding glass-section glass-tools">
      <div class="section-container" style="margin: auto 0; width: 100%;">
        <div class="row">
          <div class="service-wrapper">
            <div class="service-inner fadeInLeft glass-box toolsCard">
              <h3 class="glass-title">Function | Applications</h3>
              <div class="service-box list">
                <div class="imageBox"><img src="https://cdn-icons-png.flaticon.com/128/7579/7579853.png" alt></div>
                <div class="content">
                  <div class="rank"><small>#</small>1</div>
                  <h4>User Token</h4>
                  <p>JWT(Json Web Token)</p>
                </div>
              </div>
              <div class="service-box list">
                <div class="imageBox"><img src="https://cdn-icons-png.flaticon.com/128/1689/1689391.png" alt></div>
                <div class="content">
                  <div class="rank"><small>#</small>2</div>
                  <h4>User Cookies</h4>
                  <p>Remember the user-cookie for two months.</p>
                </div>
              </div>
              <div class="service-box list">
                <div class="imageBox"><img src="https://cdn-icons-png.flaticon.com/128/4132/4132870.png" alt></div>
                <div class="content">
                  <div class="rank"><small>#</small>3</div>
                  <h4>IM Websocket</h4>
                  <p>HTCP Websocket(django-dwebsocket + javascript transport)</p>
                </div>
              </div>
              <div class="list application-list">
                <div class="imageBox">
                  <img src="https://cdn-icons-png.flaticon.com/128/3245/3245498.png" alt>
                </div>
                <div class="content">
                  <h2 class="rank application-rank"><small>#</small>1</h2>
                  <h4>RL Snake</h4>
                  <p>snake by zmh</p>
                </div>
              </div>
              <div class="clearfix"></div>
            </div>
            <div class="service-inner fadeInRight glass-box toolsCard">
              <h3 class="glass-title">Language | Framework</h3>
              <div class="list service-box">
                <div class="imageBox"><img src="https://cdn-icons-png.flaticon.com/128/5968/5968350.png" alt></div>
                <div class="content">
                  <div class="rank"><small>#</small>1</div>
                  <h4>Python</h4>
                  <p>Python Script</p>
                  <a href="https://www.python.org/">about Python (python.org)</a>
                </div>
              </div>
              <div class="list service-box">
                <div class="imageBox"><img src="https://cdn-icons-png.flaticon.com/128/5968/5968267.png" alt></div>
                <div class="content">
                  <div class="rank"><small>#</small>2</div>
                  <h4>html5</h4>
                  <p>HyperText Markup Language</p>
                </div>
              </div>
              <div class="list service-box">
                <div class="imageBox"><img src="https://cdn-icons-png.flaticon.com/128/5968/5968242.png" alt></div>
                <div class="content">
                  <div class="rank"><small>#</small>3</div>
                  <h4>css3</h4>
                  <p>Cascading Style Sheets</p>
                </div>
              </div>
              <div class="list service-box">
                <div class="imageBox"><img src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png" alt></div>
                <div class="content">
                  <div class="rank"><small>#</small>5</div>
                  <h4>js</h4>
                  <p>JavaScript</p>
                </div>
              </div>
              <div class="list service-box">
                <div class="imageBox"><img src="https://cdn-icons-png.flaticon.com/128/5968/5968672.png" alt></div>
                <div class="content">
                  <div class="rank"><small>#</small>4</div>
                  <h4>Bootstrap 3</h4>
                  <p>Powerful, extensible, and feature-packed frontend toolkit.</p>
                </div>
              </div>
              <div class="list service-box">
                <div class="imageBox"><img src="https://cdn-icons-png.flaticon.com/128/37/37256.png" alt></div>
                <div class="content">
                  <div class="rank"><small>#</small>5</div>
                  <h4>jQuery.js</h4>
                  <p>A fast, small, and feature-rich JavaScript library.</p>
                </div>
              </div>
            </div>
            <div class="service-inner fadeInRight glass-box toolsCard">
              <h3 class="glass-title">Website</h3>
              <div class="list service-box">
                <div class="imageBox"><img src="https://p5.ssl.qhimgs1.com/sdr/400__/t01a60bad0a2b714f2f.webp" alt></div>
                <div class="content">
                  <div class="rank"><small>#</small>1</div>
                  <h4>Django</h4>
                  <p>web framework</p>
                  <a href="https://www.djangoproject.com/">about Django (djangoproject.com)</a>
                </div>
              </div>
              <div class="list service-box">
                <div class="imageBox"><img src="https://simpleui.72wo.com/_nuxt/img/logo.111a249.png" alt></div>
                <div class="content">
                  <div class="rank"><small>#</small>2</div>
                  <h4>Django SimpleUi</h4>
                  <p>Back office management</p>
                  <a href="https://simpleui.72wo.com/simpleui/">about SimpleUi (simpleui.72wo.com)</a>
                </div>
              </div>
              <div class="list service-box">
                <div class="imageBox"><img src="https://redis.io/images/favicons/apple-touch-icon.png" alt></div>
                <div class="content">
                  <div class="rank"><small>#</small>3</div>
                  <h4>Django Dwebsocket</h4>
                  <p>Redis + Web Socket (ws)</p>
                  <a href="https://github.com/duanhongyi/dwebsocket">about GitHub dwebsocket</a>
                  <a href="https://redis.io/">about Redis (redis.io)</a>
                </div>
              </div>
              <div class="list service-box">
                <div class="imageBox"><img src="https://cdn-icons-png.flaticon.com/128/5968/5968363.png" alt></div>
                <div class="content">
                  <div class="rank"><small>#</small>4</div>
                  <h4>MySQL</h4>
                  <p>SQL Database</p>
                  <a href="https://www.mysql.com/">about MySQL (mysql.com)</a>
                </div>
              </div>
              <div class="clearfix"></div>
            </div>
            <div class="service-inner fadeInLeft glass-box toolsCard">
              <h3 class="glass-title">Reinforcement Learning</h3>
              <div class="service-box list">
                <div class="imageBox"><img src="https://pytorch.org/docs/stable/_static/images/logo-icon.svg" alt></div>
                <div class="content">
                  <div class="rank"><small>#</small>1</div>
                  <h4>PyTorch</h4>
                  <p>An open source machine learning framework that accelerates the path from research prototyping to production deployment.</p>
                  <a href="https://pytorch.org/">about Pytorch (pytorch.org)</a>
                </div>
              </div>
              <div class="service-box list">
                <div class="imageBox"><img src="https://www.pygame.org/images/logo_lofi.png" alt></div>
                <div class="content">
                  <div class="rank"><small>#</small>2</div>
                  <h4>Pygame</h4>
                  <p>A cross-platform Pyth, RL environment.</p>
                  <a href="https://www.pygame.org/">about Pygame (pygame.org)</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="resume-details" class="section-padding">

      <div class="section-container">
        <div class="row">
          <div class="timeline-centered">
            <article class="timeline-entry">
              <div class="timeline-entry-inner">
                <div class="timeline-icon bg-success"><i class="entypo-feather"></i></div>
                <div class="timeline-label">
                  <h3 class="resume-title">IM Server</h3>
                  <p>-  Instant  Messaging  Server</p><br>
                  <div class="info">Django & JavaScript Websocket.</div>
                </div>
              </div>
            </article>
            <article class="timeline-entry">
              <div class="timeline-entry-inner">
                <div class="timeline-icon bg-info">
                  <i class="entypo-location"></i>
                </div>
                <div class="timeline-label">
                  <h3 class="resume-title">File Transfer</h3>
                  <p>-  File Upload & Download</p><br>
                  <div class="info">Django Upload & Download + MD5 + SQLite3.</div>
                </div>
              </div>
            </article>
            <article class="timeline-entry">
              <div class="timeline-entry-inner">
                <div class="timeline-icon bg-secondary"><i class="entypo-suitcase"></i></div>
                <div class="timeline-label">
                  <h3 class="resume-title">RL Snake</h3>
                  <p>- Deep Reinforcement Learning Snake</p>
                  <div class="info"><b>Online Game</b></div>
                  <div class="info">A gluttonous snake that learns by RL.</div>
                </div>
              </div>
            </article>
            <article class="timeline-entry">
              <div class="timeline-entry-inner">

                <div class="timeline-icon bg-warning">
                  <i class="entypo-camera"></i>
                </div>
                <div class="timeline-label">
                  <h3 class="resume-title">More Plugins Coming Soon</h3>
                  <p><br></p>
                  <div class="info">Welcome everyone's contribution and the improvement suggestion</div>
                  <div>...</div>
                </div>
              </div>
            </article>
            <article class="timeline-entry begin">
              <div class="timeline-entry-inner">
                <div class="timeline-icon" style="transform: rotate(-90deg);">
                  <i class="entypo-flight"></i> +
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      <section id="section-contact" class="section-padding">
        <div class="section-container">
          <div class="row"><div class="col-md-12"><h2 class="heading-title">Developer - Zmh</h2></div></div>
          <div class="row">
            <div class="col-md-6 col-sm-6  fadeInLeft">
              <div class="contact-left">
                <ul>
                  <li><span>Country :</span> <a>China Mainland</a></li>
                  <li><span>Province :</span> <a>Shandong</a></li>
                  <li><span>Email :</span> <a>zmh13054618081@dingtalk.com</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer id="section-footer"><div class="section-container"><div class="row"><div class="col-md-12 text-center"><h4>by Minghan Zhang(zmh)</h4></div></div></div></footer>
    </section>
  </main>
</template>
<style scoped>
html {
  overflow-x: hidden !important;
  width: 100%;
  height: 100%;
  position: relative;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility
}
body {
  border: 0;
  margin: 0;
  padding: 0;
  color: #27282C;
  font-size: 10px;
  background: #070A11
}
a:link,a:visited {
  text-decoration: none
}

a:hover {
  text-decoration: none;
  color: #09C3E7;
  cursor: pointer
}

section {
  position: relative
}

.no-padding {
  padding: 0
}

a:focus {
  outline: 0
}

a {
  color: #00D6FF
}

a.read-more:hover {
  color: #09C3E7
}

ul,li {
  list-style: none
}

h1 {
  font-size: 36px;
  line-height: 48px
}

h2 {
  font-size: 30px;
  line-height: 24px;
  font-weight: 500;
  text-transform: uppercase;
  color: #566366
}

h3 {
  font-size: 22px;
  line-height: 24px;
  text-transform: uppercase;
  font-weight: 500;
  color: white
}

h4 {
  font-size: 17px;
  line-height: 20px;
  font-weight: 400
}

h5 {
  font-size: 14px;
  line-height: 24px
}

.btn-default {
  font-size: 18px;
  line-height: 24px;
  padding: 20px 19px;
  border: 0;
  margin: 7px;
  text-transform: uppercase;
  border-radius: 1px;
  font-weight: 700;
  background: transparent;
  color: #fff;
  -webkit-transition: all .4s ease-in 0s;
  -o-transition: all .4s ease-in 0s;
  transition: all .4s ease-in 0s;
  letter-spacing: 1px;
}

.btn-default.featured {
  font-size: 18px;
  line-height: 24px;
  padding: 20px 19px;
  border: 2px solid#09C3E7;
  text-transform: uppercase;
  border-radius: 0;
  font-weight: 700;
  background: transparent;
  color: #09C3E7;
  margin-top: 50px;
  -webkit-transition: all .4s ease-in 0s;
  -o-transition: all .4s ease-in 0s;
  transition: all .4s ease-in 0s
}

.btn-default:hover {
  background: #fff;
  color: #066FA9;
  border: #fff
}

.btn-default.featured:hover {
  background: #09C3E7;
  color: #fff;
  border: #09C3E7
}

.section-padding {
  padding: 100px 0
}

p {
  color: #FFFFFFB3
}

h2.heading-title {
  margin-bottom: 50px;
  font-weight: 700
}

.section-heading {
  width: 80%;
  margin: 0 auto
}

#section-banner {
  background: url("@/assets/index.jpg");
  background-size: cover;
}

.banner-content {
  padding: 250px 0 300px 0;
}

h2.title {
  font-size: 57px;
  line-height: 72px;
  color: #fff;
  font-weight: 600;
  text-transform: capitalize
}

h2.title span {
  font-size: 26px;
  line-height: 51px;
  color: #DCF3FF;
  text-transform: capitalize;
  display: inline-block;
  padding: 15px 0;
  font-weight: normal;
}

.line-top {
  width: 930px;
  color: #fff;
  background: #fff;
  height: 2px;
  margin: 32px auto
}

.line-btm {
  width: 930px;
  color: #fff;
  background: #fff;
  height: 2px;
  margin: 32px auto
}

.banner-content a.btn-default {
  padding: 15px 36px!important
}

.navbar-default .navbar-toggle:focus,.navbar-default .navbar-toggle:hover {
  background: #002037
}

.navbar-default .navbar-toggle {
  border: #070A11
}

.navbar-default .navbar-toggle .icon-bar {
  background: #070A11
}

.navbar-toggle {
  position: relative;
  float: right;
  padding: 9px 10px;
  margin: 8px 15px 8px 0;
  background: transparent none;
  border: 1px solid transparent;
  border-radius: 0
}

.section-menu {
  z-index: 9999
}

.navbar {
}

.navbar-default {
  background: #16C1E2;
  border: 0;
  border-radius: 0;
  border-top: 2px solid #fff
}

.navbar-nav {
}

.navbar-nav li {
}

.navbar-default .navbar-nav > li > a {
  padding: 30px 20px;
  color: #fff;
  text-transform: uppercase
}

.navbar-default .navbar-nav > li > a:hover,.navbar-default .navbar-nav > li > a:focus {
  color: #000
}

.main-nav {
  width: 100%;
  margin: 0 auto
}

.navbar-default .navbar-nav > .active > a,.navbar-default .navbar-nav > .active > a:focus,.navbar-default .navbar-nav > .active > a:hover {
  color: #F0F0EF;
  background: #070A11
}

.navbar-brand img {
  float: left;
  margin-right: 20px
}

.navbar-brand {
  text-transform: uppercase;
  font-weight: 700;
  color: #070A11!important;
  line-height: 40px;
  padding-top: 25px;
  font-size: 22px
}

.navbar-brand span {
  color: #09C3E7
}

#section-overview {
  padding: 75px 0 80px
}

.overview-box {
}

.overview-box h3 {
  margin-bottom: 35px
}

.service-wrapper {
}

.service-inner {
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
}

.service-inner i {
  font-size: 32px;
  color: #09C3E7;
  float: left
}

.service-box {
  padding: 0;
  margin-left: 60px;
  margin-top: -15px
}

.service-box h3 {
  text-transform: uppercase;
  margin-bottom: 16px;
  font-size: 20px;
  line-height: 24px
}

.service-box p {
  font-size: 14px;
  line-height: 22px
}

#section-testimonial {
  background: #f2f2f1;
  padding-bottom: 105px
}

.carousel-indicators li {
  display: inline-block;
  width: 11px;
  height: 11px
}

.carousel-indicators {
  bottom: -25px
}

.carousel-indicators .active {
  background: #09C3E7
}

.carousel-indicators li {
  border: #09C3E7
}

#testimonial-carousel {
  width: 63%;
  margin: -10px auto 0;
}

#testimonial-carousel p {
  color: #77787B;
  font-style: italic;
  margin-bottom: 40px;
  font-size: 15px
}

.client-name {
  color: #566366;
  text-transform: uppercase;
  margin-bottom: 50px
}

#section-portfolio.section-heading {
  margin-bottom: 100px
}

.portfolio-box {
  position: relative;
  margin-bottom: 30px;
  -webkit-transition: all .4s linear 0s;
  -o-transition: all .4s linear 0s;
  transition: all .4s linear 0s
}

.image-overlay {
  position: absolute;
  text-align: center;
  width: 100%;
  height: 100%;
  background: rgba(8,194,230,0.8);
  top: 0;
  opacity: 0;
  -webkit-transition: all .3s linear 0s;
  -o-transition: all .3s linear 0s;
  transition: all .3s linear 0s
}

.image-overlay a i {
  font-size: 50px;
  color: #fff;
  margin-top: 96px
}
.section-container {
  padding: 100px;
}
.portfolio-box:hover .image-overlay {
  opacity: 1
}

#section-contact {
  background: #002037;
  margin: 10px;
}

#section-contact .heading-title {
  color: #fff
}

.contact-left {
  padding-top: 30px
}

.contact-left p {
  color: #A1B9CA;
  font-size: 16px;
  line-height: 30px
}

.contact-left h2 {
  color: #fff
}

.location {
  margin: 45px 0
}

.contact-left ul {
  margin-left: -40px
}

.contact-left ul li a {
  color: #08C2E6;
  margin-left: 40px
}

.contact-left ul li span {
  color: #fff
}

.contact-box {
  margin-bottom: 40px
}

.contact-box .form-group {
  margin-bottom: 39px
}

.contact-box label {
  color: #09C3E7;
  margin-bottom: 20px;
  font-size: 18px
}

.contact-box .form-control {
  height: 50px;
  border-radius: 0;
  background: #002037;
  border: 1px solid #09C3E7;
  color: #B9D0E1
}

.contact-form .btn-default {
  background: #09C3E7;
  border: 0
}

img {
  vertical-align: middle
}

.form-control {
  background: #002037;
  border-radius: 0;
  margin-bottom: 8px;
  display: inline-block;
  padding: 6px 10px;
  height: 42px;
  border: #16C1E2
}

.img-responsive {
  display: block;
  height: auto;
  max-width: 100%
}

.img-rounded {
  border-radius: 3px
}

.img-thumbnail {
  background: #fff;
  border: 1px solid #ededf0;
  border-radius: 3px;
  display: inline-block;
  height: auto;
  line-height: 1.428571429;
  max-width: 100%;
  padding: 2px;
  transition: all .2s ease-in-out;
}

.img-circle {
  border-radius: 50%
}

.timeline-centered {
  position: relative;
  margin: 20px 0 30px
}

.timeline-centered:before,.timeline-centered:after {
  content: " ";
  display: table
}

.timeline-centered:after {
  clear: both
}

.timeline-centered:before,.timeline-centered:after {
  content: " ";
  display: table
}

.timeline-centered:after {
  clear: both
}

.timeline-centered:before {
  content: '';
  position: absolute;
  display: block;
  width: 4px;
  background: #1E2431;
  top: 20px;
  bottom: 20px;
  margin-left: 30px
}

.timeline-centered .timeline-entry {
  position: relative;
  margin: 5px 0 10px 30px;
  clear: both
}

.timeline-centered .timeline-entry:before,.timeline-centered .timeline-entry:after {
  content: " ";
  display: table
}

.timeline-centered .timeline-entry:after {
  clear: both
}

.timeline-centered .timeline-entry:before,.timeline-centered .timeline-entry:after {
  content: " ";
  display: table
}

.timeline-centered .timeline-entry:after {
  clear: both
}

.timeline-centered .timeline-entry.begin {
  margin-bottom: 0
}

.timeline-centered .timeline-entry.left-aligned {
  float: left
}

.timeline-centered .timeline-entry.left-aligned .timeline-entry-inner {
  margin-left: 0;
  margin-right: -18px
}

.timeline-centered .timeline-entry.left-aligned .timeline-entry-inner .timeline-time {
  left: auto;
  right: -100px;
  text-align: left
}

.timeline-centered .timeline-entry.left-aligned .timeline-entry-inner .timeline-icon {
  float: right
}

.timeline-centered .timeline-entry.left-aligned .timeline-entry-inner .timeline-label {
  margin: 0 70px 0 0
}

.timeline-centered .timeline-entry.left-aligned .timeline-entry-inner .timeline-label:after {
  left: auto;
  right: 0;
  margin-left: 0;
  margin-right: -9px;
  -ms-transform: rotate(180deg);
  transform: rotate(180deg)
}

.timeline-centered .timeline-entry .timeline-entry-inner {
  position: relative;
  margin-left: -20px
}

.timeline-centered .timeline-entry .timeline-entry-inner:before,.timeline-centered .timeline-entry .timeline-entry-inner:after {
  content: " ";
  display: table
}

.timeline-centered .timeline-entry .timeline-entry-inner:after {
  clear: both
}

.timeline-centered .timeline-entry .timeline-entry-inner:before,.timeline-centered .timeline-entry .timeline-entry-inner:after {
  content: " ";
  display: table
}

.timeline-centered .timeline-entry .timeline-entry-inner:after {
  clear: both
}

.timeline-centered .timeline-entry .timeline-entry-inner .timeline-time {
  position: absolute;
  left: -100px;
  text-align: right;
  padding: 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box
}

.timeline-centered .timeline-entry .timeline-entry-inner .timeline-time > span {
  display: block
}

.timeline-centered .timeline-entry .timeline-entry-inner .timeline-time > span:first-child {
  font-size: 15px;
  font-weight: bold
}

.timeline-centered .timeline-entry .timeline-entry-inner .timeline-time > span:last-child {
  font-size: 12px
}

.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon {
  background: #fff;
  color: #737881;
  display: block;
  width: 40px;
  height: 40px;
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding;
  background-clip: padding-box;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  text-align: center;
  -moz-box-shadow: 0 0 0 5px #f5f5f6;
  -webkit-box-shadow: 0 0 0 5px #f5f5f6;
  box-shadow: 0 0 0 5px #f5f5f6;
  line-height: 40px;
  font-size: 15px;
  float: left
}

.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-primary {
  background: #303641;
  color: #fff
}

.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-secondary {
  background: #ee4749;
  color: #fff
}

.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-success {
  background: #00a651;
  color: #fff
}

.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-info {
  background: #21a9e1;
  color: #fff
}

.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-warning {
  background: #fad839;
  color: #fff
}

.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-danger {
  background: #cc2424;
  color: #fff
}

.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label {
  position: relative;
  background: #1E2431;
  padding: 20px 30px;
  margin: 0 0 25px 60px;
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding;
  background-clip: padding-box;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px
}

.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label:after {
  content: '';
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  border: 9px 9px 9px 0 solid transparent #1E2431 transparent transparent;
  left: 0;
  top: 10px;
  margin-left: -9px
}

.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label p + p {
  margin-top: 15px
}

.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 {
  font-size: 16px;
  margin-bottom: 10px
}

.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 a {
  color: #303641
}

.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 span {
  -moz-opacity: .6;
  opacity: .6;
  -ms-filter: alpha(opacity=60);
  filter: alpha(opacity=60)
}

#section-footer {
  width: auto;
  height: auto;
}

#section-footer h4 {
  color: #0E788D;
  margin-top: 30px
}

.socail-link {
}

.socail-link a i {
  width: 35px;
  height: 35px;
  border-radius: 100%;
  color: #08C2E6;
  font-size: 20px;
  line-height: 35px
}

.socail-link a:hover i {
  color: #fff
}

div.button-list{
  width: max-content;
}

@keyframes fade-in {0%{opacity: 0;}100%{opacity: 1;}}

a.goto-user{
  animation-name: fade-in;
  animation-duration: 1.5s;
  transition: .2s;
  animation-timing-function: linear;

  background: #449d44 !important;
  text-transform: initial !important;
  color: white;
  left:50%;  transform: translateX(-55%);
}
a.goto-user:hover,
a.goto-user:active,
a.goto-user:focus{
  background: #449d44;
}

a.goto-user::before,
a.goto-user::after{
  background: gold;
}

a.goto-user:hover::before,
a.goto-user:hover::after{
  width: calc(100% - 5px);
}

@media (min-width:1200px) {
}

@media (min-width:992px) {
}

@media (min-width:768px) and (max-width:991px) {
  .banner-content {
    padding: 65px 0
  }

  h2.title {
    font-size: 40px;
    line-height: 40px
  }

  .line-top {
    width: 600px
  }

  .line-btm {
    width: 600px
  }

  .navbar-brand {
    padding-top: 10px
  }

  .navbar-brand img {
    margin-right: 4px
  }

  .navbar-default .navbar-nav > li > a {
    padding: 15px 9px;
    font-size: 14px
  }

  .service-inner {
    width: 48%
  }

  .image-overlay a i {
    margin-top: 65px
  }
}

@media (max-width:767px) {
}

@media (max-width:479px) {
  h2.heading-title {
    margin-bottom: 30px;
    font-weight: 700
  }
}

@media (max-width:478px) {
  .navbar-default {
    padding: 10px 0
  }
  .section-container {
    padding: 20px;
  }
  .banner-content a.btn-default {
    padding: 15px 25px!important;
    margin-left: 25px;
    font-size: 16px
  }

  .banner-content {
    padding: 0 15px
  }

  h2.title {
    font-size: 38px;
    line-height: 72px;
    margin-left: 15px
  }

  h2.title span {
    font-size: 18px;
    line-height: 35px;
    padding: 10px 20px
  }

  h2.heading-title {
    margin-bottom: 30px;
    font-weight: 700
  }

  .navbar-default .navbar-nav > li > a {
    padding: 15px 20px
  }

  .banner-content {
    padding: 55px 0
  }

  .navbar-brand {
    padding-top: 4px
  }

  .profile-desc {
    padding-left: 10px
  }

  .service-wrapper {
    padding-left: 20px
  }

  .service-inner {
    width: 100%
  }

  .skill-desc {
    margin-bottom: 40px
  }

  .resume-inner {
    margin-bottom: 40px
  }

  .image-overlay a i {
    margin-top: 110px
  }
}
html,body,main,.full{width: 100%; height: 100%;}
@media screen and (orientation: landscape) {
  html{
    width : 100vmax;
    height : 100vmin;
  }
  body{
    width : 100vmax;
    height : 100vmin;
  }
}
</style>
