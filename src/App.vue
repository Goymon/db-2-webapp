<template>
  <div id="app">
    <app-header></app-header>
    <div class="container">
      <transition name="slide" type="animation" appear mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import appHeader from './components/Header.vue'
export default {
  data () {
    return {
      
    }
  },
  components: {
    appHeader
  }

}
</script>

<style lang="scss">

// ANIMATIONS
.slide {
  &-enter {
        opacity: 0;
  }
  &-enter-active {
        animation: slide-in .3s ease-out forwards;
        transition: all .3s;
  }
  &-leave {

  }
  &-leave-active {
        animation: slide-out .3s ease-out forwards;
        transition: all .3s;
        opacity: 0;
  }
}


  @keyframes slide-in {
      from {
          transform: translateY(-30px);
      }
      to {
          transform: translateY(0)
      }
  }

  
  @keyframes slide-out {
      from {
          transform: translateY(0);
      }
      to {
          transform: translateY(-30px)
      }
  }

</style>
