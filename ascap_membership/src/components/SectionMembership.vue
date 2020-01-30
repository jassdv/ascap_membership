<template>
    <div>
        <p class="pb-4">Select your membership type below:</p>
        <div class="row">
            <Card name="membership" type="radio" v-bind:title="WRITER_PUBLISHER_TITLE" />
            <Card name="membership1" type="radio" v-bind:title="WRITER_TITLE" />
            <Card name="membership2" type="radio" v-bind:title="PUBLISHER_TITLE" />
        </div>
        <div v-if="chosenMembership === WRITER_PUBLISHER_TITLE">{{chosenMembership}}</div>
        <div>
          <SectionButton label="cancel" :click="cancelAction"> </SectionButton>
          <SectionButton label="continue" :click="continueAction"> </SectionButton>
        </div>
    </div>
</template>
<script>
import Section from './Section.vue'
import Card from './Card.vue'
import SectionButton from './SectionButton.vue'
import { mapMutations,mapGetters } from 'vuex'

import { WRITER_PUBLISHER_TITLE, WRITER_TITLE, PUBLISHER_TITLE } from '../globals'

export default {
    components: {
        Section,
        Card,
        SectionButton
    },
    data() {
        return {
            //needs to be bind to the chosen card and to
            //v-if to render or not the drop down list
            WRITER_PUBLISHER_TITLE: WRITER_PUBLISHER_TITLE,
            WRITER_TITLE: WRITER_TITLE,
            PUBLISHER_TITLE: PUBLISHER_TITLE
        };
    },
    methods: {
        ...mapMutations([
            'chosenFederalTaxClassification'
        ]),
        continueAction(){
            

        },
        cancelAction(){

        },
        selectMembership(event){
            //according to the chosen card decidning 
            debugger
            console.log("event", event.target)

        }
    },
    computed: {
       ...mapGetters(['chosenMembership'])
    }
    
}

</script>
<style scoped>
.col-lg-4{
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
}
.u-spacing-outside-bottom {
    margin-bottom: 16px !important;
}
.t-body_sm {
    font-size: 14px;
}
.pb-4, .py-4 {
    padding-bottom: 1.5rem !important;
}
.row {
    display: flex;
    flex-wrap: nowrap;
}

</style>