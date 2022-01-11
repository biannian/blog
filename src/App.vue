<template>
  <div id="app">
    <transition :name="SkipSwitchName">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        SkipSwitchName: '',
      }
    },
    watch: {
      $route(to, from) {
        if (to.meta.tx > from.meta.tx) {
          this.SkipSwitchName= "Skright";
        } else {
          this.SkipSwitchName= "Skleft";
        }
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .Skright-enter-active,
  .Skright-leave-active,
  .Skleft-enter-active,
  .Sklef-leave-active {
    transition: all 600ms;
  }

  .Skright-enter {
    transform: translate3d(-100%, 0, 0);
  }

  .Skright-leave-to {
    transform: translate3d(100%, 0, 0);
  }

  .Skleft-enter {
    transform: translate3d(100%, 0, 0);
  }

  .Skleft-leave-to {
    transform: translate3d(-100%, 0, 0);
  }

</style>
