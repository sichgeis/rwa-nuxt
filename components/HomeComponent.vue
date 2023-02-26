<template>
  <div>
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">

          <div class="article-preview">
            <div class="article-meta">
              <a href="profile.html"
                ><img src="http://i.imgur.com/Qr71crq.jpg"
              /></a>
              <div class="info">
                <a href="" class="author">Eric Simons</a>
                <span class="date">January 20th</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right">
                <i class="ion-heart"></i> 29
              </button>
            </div>
            <a href="" class="preview-link">
              <h1>How to build webapps that scale</h1>
              <p>This is the description for the post.</p>
              <span>Read more...</span>
            </a>
          </div>

          <div class="article-preview">
            <div class="article-meta">
              <a href="profile.html"
                ><img src="http://i.imgur.com/N4VcUeJ.jpg"
              /></a>
              <div class="info">
                <a href="" class="author">Albert Pai</a>
                <span class="date">January 20th</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right">
                <i class="ion-heart"></i> 32
              </button>
            </div>
            <a href="" class="preview-link">
              <h1>
                The song you won't ever stop singing. No matter how hard you
                try.
              </h1>
              <p>This is the description for the post.</p>
              <span>Read more...</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomePage',
}
</script>
<style lang="scss">
@import 'shared/styles/variables';
@import 'shared/styles/overrides';

.banner {
  background: $brand-primary;
  box-shadow: inset 0 8px 8px -8px rgba(0, 0, 0, 0.3),
    inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3);

  p {
    color: #fff;
    text-align: center;
    // line-height: 2.5rem;
    font-size: 1.5rem;
    font-weight: 300 !important;
    margin-bottom: 0px;
  }
  h1 {
    text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
    font-weight: 700 !important;
    text-align: center;
    font-size: 3.5rem;
    padding-bottom: 0.5rem;
  }
}

.feed-toggle {
  margin-bottom: -1px;
}

.sidebar {
  padding: 5px 10px 10px 10px;
  background: #f3f3f3;
  border-radius: 4px;

  p {
    margin-bottom: 0.2rem;
  }
}

.logo-font {
  font-family: $font-family-logo;
}

// create style for nav-link pills that do an outline instead of block
.nav-pills.outline-active {
  .nav-link {
    border-radius: 0px;
    border: none;
    border-bottom: 2px solid transparent;
    background: transparent;
    color: #aaa;
    &:hover {
      color: #555;
    }

    &.active {
      background: #fff !important;
      border-bottom: 2px solid $brand-primary !important;
      color: $brand-primary !important;
    }
  }
}

.banner {
  color: #fff;
  background: $brand-primary;
  padding: 2rem;
  margin-bottom: 2rem;

  h1 {
    text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
    margin-bottom: 0px;
  }
}

// Auto offset from top for pages
.container.page {
  margin-top: 1.5rem;
}

// Link that doesn't modify color/style of text
.preview-link {
  color: inherit !important;

  &:hover {
    text-decoration: inherit !important;
  }
}

.article-meta {
  display:block;
  position:relative;
  font-weight: 300;

  img {
    display:inline-block;
    vertical-align: middle;
    height:32px;
    width:32px;
    border-radius:30px;
  }

  .info {
    margin:0 1.5rem 0 0.3rem;
    display:inline-block;
    vertical-align: middle;
    line-height: 1rem;

    .author {
      display:block;
      font-weight: 500 !important;
    }
    .date {
      color:#bbb;
      font-size:0.8rem;
      display:block;
    }

  }
}

.article-preview {
  border-top:1px solid rgba(0,0,0,.1);
  padding:1.5rem 0;

  .article-meta {
    margin:0 0 1rem 0;
  }
  .preview-link {
    h1 {
      font-weight:700 !important;
      font-size:2rem !important;
    }
    p {
      font-family: 'Source Serif Pro', serif;
      margin-bottom:0;
    }
    // "Read more" span
    span {
      font-size:0.8rem;
      font-weight:300;
      color:#bbb;
    }
  }
}
</style>
