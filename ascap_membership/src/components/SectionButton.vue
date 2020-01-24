<template>
    <button v-bind:class="style"  @click="click">{{label}}</button>
    
</template>
<script>
export default {
  props: {
    click: {
      type: Function,
      required: false
    },
    label: {
        type: String,
        required: true
    }
  },
  computed: {
      //check if that could be a data object instead of computed
      style () {
          return this.label == 'continue' ? 'btn mb-2 uppercase' : 'btn mb-2 cancel uppercase';
      }
    },
    methods: {
        
    }

    
}
</script>
<style scoped>
.uppercase{
    text-transform: uppercase;
}
.cancel{
    background-color: #fff;
    color: #0d0d0d;
    border: 1px solid #ededed;
}


</style>