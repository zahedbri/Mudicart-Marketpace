<template>
  <div id="mudicart-marketplace" class="mb-3">
    <slide-x-left-transition :duration="{ enter: 400, leave: 0 }">
      <router-view/>
    </slide-x-left-transition>
  </div>
</template>

<script>
import { SlideXLeftTransition } from 'vue2-transitions'

export default {
  name: 'MudicartMarketplace',
  components: {
    SlideXLeftTransition
  }
}
</script>
