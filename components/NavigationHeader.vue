<template lang="">
  <div>
    <nav class="navbar navbar-expand navbar-light">
      <div class="container">
        <a class="navbar-brand" href="index.html">conduit</a>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <a class="nav-link active" href="">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">
              <i class="ion-compose"></i>&nbsp;New Article
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">
              <i class="ion-gear-a"></i>&nbsp;Settings
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">Sign in</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">Sign up</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import "shared/styles/variables";
@import "shared/styles/overrides";

.navbar-brand {
  font-family: $font-family-logo;
  font-size: 1.5rem !important;
  padding-top: 0rem !important;
  margin-right: 2rem !important;
  color: $brand-primary !important;
}

// set a smooth transition for nav-link hover effects
.nav-link:hover {
  transition: 0.1s all;
}
</style>
