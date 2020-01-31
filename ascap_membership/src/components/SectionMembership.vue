<template>
    <div class="container">
        <fieldset class="no-border">
            <p class="pb-4">Select your membership type below:</p>
            <div class="row">
                <Card name="membership" type="radio" v-bind:title="WRITER_PUBLISHER_TITLE" />
                <Card name="membership1" type="radio" v-bind:title="WRITER_TITLE" />
                <Card name="membership2" type="radio" v-bind:title="PUBLISHER_TITLE" />
            </div>
            <p v-if="membershipChoiceMissing" class="red-text information-text">{{membershipChoiceerrorMessage}}</p>
            <p class="information-text">
                *If you are under 18 years of age please 
                <a href="https://ome.ascap.com/helpcenter#underAge" target="_blank">read more about how to join ASCAP. </a>
            </p>
            <p class="information-text">
                ASCAP uses TINCheck and SmartyStreets to verify certain information provided by you in connection with your application. Any information
                processed by TINCheck and SmartyStreets shall be subject to the privacy policies of
                <a href="https://www.tincheck.com/pages/tincheck-agreement" target="_blank">TINCheck</a> and
                <a href="https://smartystreets.com/legal/privacy-policy" target="_blank">SmartyStreets</a>.
            </p>
            <div v-if="((chosenMembership === WRITER_PUBLISHER_TITLE) || (chosenMembership === PUBLISHER_TITLE ))" class="dropdown">
                <h3 class="publisher-type-title">Publisher Company Type</h3>
                <p class="information-text"> Please select the federal tax classification of your publisher company.</p>
                <DropDown v-bind:contentList="publisherCompanyType"/>
                <p v-if="piblisherCompanyTypeChoiceMissing" class="red-text information-text">{{publisherCompanyTypeErrorMessage}}</p>
            </div>
            <div>
            <SectionButton label="cancel" :click="cancelAction"> </SectionButton>
            <SectionButton label="continue" :click="continueAction"> </SectionButton>
            </div>
            <div v-if="sectionSuccess"><h1>SUCCESS</h1></div>
        </fieldset>
       
    </div>
</template>
<script>
import Section from './Section.vue'
import Card from './Card.vue'
import DropDown from './DropDown.vue'
import SectionButton from './SectionButton.vue'
import { mapGetters } from 'vuex'

import { WRITER_PUBLISHER_TITLE, WRITER_TITLE, PUBLISHER_TITLE } from '../globals'

export default {
    components: {
        Section,
        Card,
        SectionButton,
        DropDown
    },
    data() {
        return {
            //needs to be bind to the chosen card and to
            //v-if to render or not the drop down list
            WRITER_PUBLISHER_TITLE: WRITER_PUBLISHER_TITLE,
            WRITER_TITLE: WRITER_TITLE,
            PUBLISHER_TITLE: PUBLISHER_TITLE,
            membershipChoiceerrorMessage: "Please select your membership type.",
            publisherCompanyTypeErrorMessage: "Please select your publisher company type.",
            membershipChoiceMissing: false,
            piblisherCompanyTypeChoiceMissing: false,
            sectionSuccess: false


        };
    },
    methods: {
        continueAction(){
            debugger
            switch(this.chosenMembership){
                case WRITER_PUBLISHER_TITLE:
                    this.membershipChoiceMissing = false
                    if(!this.chosenPublisherCompanyType){
                        this.piblisherCompanyTypeChoiceMissing = true
                    }else{
                        this.piblisherCompanyTypeChoiceMissing = false
                        this.sectionSuccess = true
                    }
                    break
                case WRITER_TITLE:
                    this.membershipChoiceMissing = false
                    this.sectionSuccess = true
                    break
                case PUBLISHER_TITLE:
                    this.membershipChoiceMissing = false
                    if(!this.chosenPublisherCompanyType){
                        this.piblisherCompanyTypeChoiceMissing = true
                    }else{
                        this.piblisherCompanyTypeChoiceMissing = false
                        this.sectionSuccess = true
                    }
                    break
                default:
                    this.membershipChoiceMissing = true


            }

        },
        cancelAction(){
            window.location.href = "https://www.ascap.com/"
        },
        selectMembership(event){
            //according to the chosen card decidning 
            console.log("event", event.target)

        }
    },
    computed: {
       ...mapGetters(['chosenMembership','publisherCompanyType','chosenPublisherCompanyType']),
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
.pb-4, .py-4 {
    padding-bottom: 1.5rem !important;
}
.row {
    display: flex;
    flex-wrap: nowrap;
}
.red-text{
    color: red;
}
.information-text{
    font-size: 12px;
    font-weight: 500;
}
.publisher-type-title{
    font-size: 16px;
    margin-top: 30px;
    margin-bottom: 10px;
}
.dropdown{
    max-width: 80%;
}
</style>