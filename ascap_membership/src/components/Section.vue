<template>
<section>
    <header>
        <div class="ennumeration">
            <span class="section-number">{{number}}</span>
        </div>
        <h2>{{headerTitle}}</h2>
    </header>
    <div>
        <slot />
    </div>
</section>
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
        type: String,
        required: true
    },
  },
  computed: {
      number(){
          return parseInt(this.sectionNumber)
      }
  }
    
}
</script>
<style scoped>
    .ennumeration{
        display: inline-block;
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
    .ennumeration:before{
        top: -8px;
        left: -8px;
        width: 41px;
        height: 41px;
        background: #fff;
    }
    .ennumeration:after, .ennumeration:before {
        content: "";
        position: absolute;
        z-index: 1;
        border-radius: 50%;
    }
    .ennumeration:after {
        top: 0;
        left: 0;
        width: 25px;
        height: 25px;
        background: #1178ce;
        /* margin-top: 8px; */
        /* margin-left: 5px; */
    }
    .section-number{
        position: relative;
        z-index: 2;
        color: #fff
    }
    h2{
        font-weight: normal;
        font-family: "Circular Black",sans-serif;
        margin: 0 0 .73em;
        display: inline-block;
        font-size: 1.5em;
        line-height: 1.29;
        margin-block-end: 0.83em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
</style>