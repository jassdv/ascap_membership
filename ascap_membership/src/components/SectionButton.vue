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
          return this.label == 'continue' ? 'continue uppercase section-button' : 'cancel uppercase section-button';
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
.continue{
  background-color: #1178ce;
  color: #fff;
}
.section-button{
  border-radius: 2px;
  margin: 0;
  display: inline-block;
  overflow: hidden;
  padding: 8px 20px;
  line-height: 18px;
  height: 40px;
  transition: all .3s ease-in-out;
  -moz-transition: all .3s ease-in-out;
  -webkit-transition: all .3s ease-in-out;
}

</style>