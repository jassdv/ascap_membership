<template>
    <div class="container">
        <fieldset class="no-border">
            <p class="pb-4">Select your membership type below:</p>
            <div class="row">
                <Card v-for="membership in memberships" v-bind:key="membership.title" v-bind:focus="getChosenmembership == membership.title" v-bind:error="membershipChoiceMissing" v-bind:title="membership.title" v-on:card-chosen="cardClick">
                    <template v-slot:header>
                        <div class="c-marked-text c-marked-text--center">
                            <div class="c-marked-text__icon" v-html="membership.svg">
                            </div>
                            <div class="c-marked-text__content">
                                <h2 
                                    class="header-text">{{membership.title}}
                                </h2>
                            </div>
                        </div>
                    </template>
                    <template v-slot:body>
                        <p>
                            {{membership.description}}</p>
                        <p>
                        <span class="h-color-b500 h-text-transform-uppercase t-weight_bold">
                            ${{membership.price}} Application Fee
                        </span>
                        <br>
                        <span v-if="!membership.refundable" class="t-body h-color-m600">
                            non-refundable 
                        </span>
                        </p
                        ><h5 class="u-spacing-outside-bottom t-weight_medium">
                            Requirements
                        </h5>
                        <ul class="u-spacing-outside-bottom">
                            <li v-for="requirement in membership.requirements" v-bind:key="requirement.title" class="u-spacing-outside-bottom">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" class="card-icon"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                {{requirement}}
                            </li>
                        </ul>
                    </template>
                </Card>
            </div>
            <p v-if="membershipChoiceMissing" class="red-text information-text">{{membershipChoiceerrorMessage}}</p>
            <p class="information-text">
                *If you are under 18 years of age please 
                <a href="https://ome.ascap.com/helpcenter#underAge" target="_blank">read more about how to join ASCAP. </a>
            </p>
            <div v-if="((getChosenmembership === WRITER_PUBLISHER_TITLE) || (getChosenmembership === PUBLISHER_TITLE ))" class="dropdown">
                <h3 class="publisher-type-title">Publisher Company Type</h3>
                <p class="information-text"> Please select the federal tax classification of your publisher company.</p>
                <DropDown v-bind:contentList="getPublisheCompanyType"/>
                <p v-if="publisherCompanyTypeChoiceMissing" class="red-text information-text">{{publisherCompanyTypeErrorMessage}}</p>
            </div>
            <p class="information-text">
                ASCAP uses TINCheck and SmartyStreets to verify certain information provided by you in connection with your application. Any information
                processed by TINCheck and SmartyStreets shall be subject to the privacy policies of
                <a href="https://www.tincheck.com/pages/tincheck-agreement" target="_blank">TINCheck</a> and
                <a href="https://smartystreets.com/legal/privacy-policy" target="_blank">SmartyStreets</a>.
            </p>
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
import { mapGetters, mapActions } from 'vuex'
import { WRITER_PUBLISHER_TITLE, WRITER_TITLE, PUBLISHER_TITLE, WRITE_PUBLISHER_SVG, WRITER_SVG, PUBLISHER_SVG } from '../globals.js'

export default {
    components: {
        Section,
        Card,
        SectionButton,
        DropDown
    },
    data() {
        return {
            WRITER_PUBLISHER_TITLE: WRITER_PUBLISHER_TITLE,
            WRITER_TITLE: WRITER_TITLE,
            PUBLISHER_TITLE: PUBLISHER_TITLE,
            WRITER_PUBLISHER_SVG: WRITE_PUBLISHER_SVG,
            WRITER_SVG: WRITER_SVG,
            PUBLISHER_SVG: PUBLISHER_SVG,
            membershipChoiceerrorMessage: "Please select your membership type.",
            publisherCompanyTypeErrorMessage: "Please select your publisher company type.",
            membershipChoiceMissing: false,
            publisherCompanyTypeChoiceMissing: false,
            sectionSuccess: false,
            memberships: {}
            


        };
    },
    methods: {
        ...mapActions([
            'publisherError',
            'chosenMembership',
            'chosenPublisherCompanyType'
        ]),
        updatePublisherError(status){   //trigger the publisherError action
            this.$store.dispatch('publisherError',status)
        },
        continueAction(){   //handler for "coninue" button. if there is missing data, needs to show error and notify store
            switch(this.getChosenmembership){
                case WRITER_PUBLISHER_TITLE:
                    this.membershipChoiceMissing = false
                    if(!this.getChosenPublisherCompanyType){
                        this.publisherCompanyTypeChoiceMissing = true
                        this.updatePublisherError(true)
                    }else{
                        this.publisherCompanyTypeChoiceMissing = false
                        this.updatePublisherError(false)
                        this.sectionSuccess = true
                    }
                    break
                case WRITER_TITLE:
                    this.membershipChoiceMissing = false
                    this.sectionSuccess = true
                    break
                case PUBLISHER_TITLE:
                    this.membershipChoiceMissing = false
                    if(!this.getChosenPublisherCompanyType){
                        this.publisherCompanyTypeChoiceMissing = true
                        this.updatePublisherError(true)
                    }else{
                        this.publisherCompanyTypeChoiceMissing = false
                        this.updatePublisherError(false)
                        this.sectionSuccess = true
                    }
                    break
                default:
                    this.membershipChoiceMissing = true
            }

        },
        cancelAction(){     //cancel button navigates to ASCAP home page
            window.location.href = "https://www.ascap.com/"
        },
        cardClick(title){
            this.membershipChoiceMissing = false
            this.updateChosenMembership(title)
        },
        updateChosenMembership(title){   //triggers chosenMembership store action
            this.$store.dispatch('chosenMembership',title)
            if(title === this.WRITER_TITLE)  this.chosenPublisherCompanyType('') //if the chosen card is "writer" clear the previous chosen publisher type
        },
        initMemberships(){
            //setting up "writer & publisher" membership
            this.memberships[WRITER_PUBLISHER_TITLE] = {
                "title": WRITER_PUBLISHER_TITLE,
                "description": "ASCAP royalties are split evenly between Writers and Publishers. Join as both to ensure you get paid everything you deserve.",
                "price": 100,
                "refundable": false,
                "requirements": ["Legal Name", "Mailing Address", "Valid Email Address","SSN/ITIN or EIN","Must be 18 or older*"],
                "svg": WRITE_PUBLISHER_SVG
            }
            //setting up "writer" membership
            this.memberships[WRITER_TITLE] = {
                "title": WRITER_TITLE,
                "description": "A Writer is someone who creates a musical composition: the melody, harmony, lyrics, arrangements, beats, etc.",
                "price": 50,
                "refundable": false,
                "requirements": ["Legal Name", "Mailing Address", "Valid Email Address","SSN/ITIN or EIN","Must be 18 or older*"],
                "svg": WRITER_SVG
            }
            //setting up "publisher" membership
            this.memberships[PUBLISHER_TITLE] = {
                "title": PUBLISHER_TITLE,
                "description": "A Publisher is a person or company that handles the business side of music. Publishers may control the copyrights of a musical composition, licensing, etc.",
                "price": 50,
                "refundable": false,
                "requirements": ["Legal Name", "Mailing Address", "Valid Email Address","SSN/ITIN or EIN","Must be 18 or older*"],
                "svg": PUBLISHER_SVG
            }
        }
    },
    computed: {
     ...mapGetters({
         getChosenmembership: 'chosenMembership',
         getPublisheCompanyType: 'publisherCompanyType',
         getChosenPublisherCompanyType: 'chosenPublisherCompanyType'
        }),
    },
    created(){
        this.initMemberships()
    }
    
}

</script>
<style scoped>
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
.c-marked-text--center {
    justify-content: center;
}
.c-marked-text {
    display: flex;
}
.c-marked-text__icon{
    margin-right: 16px;
    flex-shrink: 0;
    padding-top: .1em;
    padding-bottom: .1em;
}
.c-marked-text--center .c-marked-text__content {
    flex-grow: 0;
}
.c-marked-text__content {
    flex: 1 1 auto;
    align-self: center;
}
.card-icon {
    vertical-align: sub;
    fill: none;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
}
.header-text{
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 16px;
}
.h-color-b500 {
    color: #175da7;
}
.h-text-transform-uppercase {
    text-transform: uppercase;
}
.t-weight_bold {
    font-family: "Circular Bold",sans-serif;
}
.h-color-m600 {
    color: #6d6d6d !important;
}
.t-body {
    font-size: 14px;
}
</style>