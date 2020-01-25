<template>
<div>
    <header>
        <div class="ennumeration">
            <span class="section-number">{{sectionNumber}}</span>
            <svg 
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="27" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke-width="3" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                class="feather feather-checkx"
            >
            <polyline points="20 6 9 17 4 12">
            </svg>
        </div>
        <h2>{{headerTitle}}</h2>
    </header>
    <div>
        <slot />
        <div>
            <SectionButton v-if="cancelAction" label="cancel" :click="cancelAction"> </SectionButton>
            <SectionButton v-if="continueAction" label="continue" :click="continueAction"> </SectionButton>
        </div>
    </div>
</div>

    
</template>
<script>
import SectionButton from './SectionButton.vue';

export default {
  components: {
    SectionButton
  },
  props: {
    headerTitle: {
      type: String,
      required: true
    },
    sectionNumber: {
        type: Number,
        required: true
    },
    continueAction:{
        type: Function,
        required: false,
        default: null
    },
    cancelAction: {
        type: Function,
        required: false,
        default: null
    }
  },
    
}
</script>
<style scoped>
    .ennumeration{
        position: absolute;
        left: 13px;
        margin: 4px 0 0;
        border-radius: 50%;
        height: 25px;
        width: 25px;
        background: #fff;
        color: #fff;
        text-align: center;
        font-size: 12px;
        line-height: 25px;
    }
    .section-number{
        position: relative;
        z-index: 2;
    }
    h2{
        font-weight: normal;
        font-family: "Circular Black",sans-serif;
        margin: 0 0 .73em;
    }



</style>