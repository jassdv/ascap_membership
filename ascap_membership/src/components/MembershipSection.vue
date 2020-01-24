<template>
<div>
    <header>
        
    </header>
    <div>
        <slot />
        <div> </div>
    </div>
</div>

    
</template>
<script>
export default {
  props: {
    headerTitle: {
      type: String,
      required: true
    },
    sectionNumber: {
        type: Number,
        required: true
    }
  },
    
}
</script>
<style scoped>

</style>