<template>
    <div class="alert-container">
      <transition name="slide" type="animation" appear mode="out-in">
        <div v-if="success != ''" class="alert alert-success" role="alert">
          <i class="fas fa-check"></i>&nbsp;&nbsp;{{ success }}
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div v-else-if="error != ''" class="alert alert-danger" role="alert">
          <i class="fas fa-times"></i>&nbsp;&nbsp;{{ error }}
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </transition>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data () {
    return {
      
    }
  },
  computed: {
    ...mapGetters([
      'error',
      'success'
    ])
  },
}
</script>


<style lang="scss" scoped>

.alert-container {
  position: absolute;
  width: 100%;
  z-index: 999;
  top: 30px;
}

.alert{
    position: relative;
    width: 500px;
    margin: 0 auto;
    z-index: 999;
}

</style>