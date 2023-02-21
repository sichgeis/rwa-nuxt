<template>
  <div>
    <NavigationHeader />
    <HomeComponent />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HomeComponent from '~/components/HomeComponent.vue';
import NavigationHeader from '~/components/NavigationHeader.vue';

export default Vue.extend({
    name: "IndexPage",
    components: { HomeComponent, NavigationHeader }
})
</script>
 <style lang="scss">
html {
  position: relative;
  min-height: 100vh;
  padding-bottom:100px;
}
</style>