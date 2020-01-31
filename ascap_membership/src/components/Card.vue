<template>
    <div class="card-frame">
        <button class="c-card no-padding" v-bind:class="[(chosenMembership === title) ? 'c-card-interactive' : '']" v-on:click.stop="clickUpdate">
            <div id="membershipCardContent">
            <div class="card-header" v-bind:class="[(chosenMembership === title) ? 'card-header-colors-interactive' : 'card-header-colors']">
                <div class="c-marked-text c-marked-text--center">
                    <div class="c-marked-text__icon" v-html="cardheaderSvg">
                    </div>
                    <div class="c-marked-text__content">
                        <h2 
                            class="header-text">{{title}}
                        </h2>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <p>
                    {{membership.description}}</p>
                <p>
                <span class="h-color-b500 h-text-transform-uppercase t-weight_bold c-card__state-color-control">
                    ${{membership.price}} Application Fee
                </span>
                <br>
                <span v-if="!membership.refundable" class="t-body_sm h-color-m600 c-card__state-color-control">
                    non-refundable 
                </span>
                </p
                ><h5 class="u-spacing-outside-bottom t-weight_medium">
                    Requirements
                </h5>
                <ul class="ome-list--checkmarks u-spacing-outside-bottom-lg">
                    <li v-for="requirement in membership.requirements" v-bind:key="requirement.title" class="u-spacing-outside-bottom">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" class="card-icon"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        {{requirement}}
                    </li>
                </ul>
            </div>
        </div>
        </button>
</div>
    
</template>
<script>
import { WRITER_PUBLISHER_TITLE, WRITER_TITLE, PUBLISHER_TITLE, WRITE_PUBLISHER_SVG, WRITER_SVG, PUBLISHER_SVG } from '../globals.js'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

export default {
    props: {
        name: {
            type: String,
            required: false //need to re-think whether it should be mandatory or not
        },
        type: {
            type: String,
            required: false
        },
        title: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            membership: {
                "title": "",
                "description": "",
                "price": 0,
                "refundable": false,
                "requirements": [],
                "comments": []  //to be used in parent to display all * comments
            }
        };
    },
    computed: {
        cardheaderSvg(){
            switch(this.title){
                case WRITER_PUBLISHER_TITLE:
                    return WRITE_PUBLISHER_SVG
                case WRITER_TITLE:
                    return WRITER_SVG
                case PUBLISHER_TITLE:
                    return PUBLISHER_SVG
                default:
                    return WRITE_PUBLISHER_SVG
            }
        },
        ...mapGetters(['chosenMembership'])
    },
    methods: {
        ...mapActions([
            'chosenMembership',
            'chosenPublisherCompanyType'
        ]),
        updateChosenMembership(){
            console.log("in chosen membership action-title", this.title)
            this.$store.dispatch('chosenMembership',this.title)
            if(this.title === WRITER_TITLE)  this.chosenPublisherCompanyType('')
        },
        chosenPublisherCompanyType(publisherCompanyType){
            this.$store.dispatch('chosenPublisherCompanyType',publisherCompanyType)
        },
        clickUpdate(event){
            this.updateChosenMembership()
        }

    },
    mounted: function(){
        //initializing memrbership list - next step, need to be taken from the VueX store
        
        switch(this.title){
            case WRITER_PUBLISHER_TITLE:
                this.membership.title = WRITER_PUBLISHER_TITLE
                this.membership.description = "ASCAP royalties are split evenly between Writers and Publishers. Join as both to ensure you get paid everything you deserve."
                this.membership.price = 100
                this.membership.refundable = false
                this.membership.requirements = ["Legal Name", "Mailing Address", "Valid Email Address","SSN/ITIN or EIN","Must be 18 or older*"]
                break
            case WRITER_TITLE:
                this.membership.title = WRITER_TITLE
                this.membership.description = "A Writer is someone who creates a musical composition: the melody, harmony, lyrics, arrangements, beats, etc."
                this.membership.price = 50
                this.membership.refundable = false
                this.membership.requirements = ["Legal Name", "Mailing Address", "Valid Email Address","SSN/ITIN or EIN","Must be 18 or older*"]
                break
            case PUBLISHER_TITLE:
                this.membership.title = PUBLISHER_TITLE
                this.membership.description = "A Publisher is a person or company that handles the business side of music. Publishers may control the copyrights of a musical composition, licensing, etc."
                this.membership.price = 50
                this.membership.refundable = false
                this.membership.requirements = ["Legal Name", "Mailing Address", "Valid Email Address","SSN/ITIN or EIN","Must be 18 or older*"]
                break
            default:
                break
        }
        console.log("svg: ", this.cardheaderSvg)
    }
}
</script>
<style scoped>
    .card-frame{
        position: relative;
        width: 100%;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
    }
    .selectedBoth{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
        position: absolute !important;
        clip: rect(0 0 0 0) !important;
        width: 1px !important;
        height: 1px !important;
        overflow: hidden !important;

    }
    .c-card {
        display: block;
        background: #fafafa;
        border: 1px solid #85868c;
        border-radius: 2px;
        margin-bottom: 0;
    }
    .c-card:hover{
        border-color: #4dbdff;
    }
    .c-card-interactive {
        background: #fff;
        cursor: pointer;
        transition: all .5s;
        border-color:  #1178ce;
    }
    /* #membershipCardContent{
        margin-top: 10px;
    } */
    
    .card-header:hover{
        border-color: #4dbdff;
    }

    .header-text{
        margin-top: 0px;
        margin-bottom: 0px;
        font-size: 16px;
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
    .card-header, .card-body {
        padding: 24px 24px;
    }
    .card-body{
        font-size: 12px;
        line-height: 1.5;
        font-weight: medium;
    }
    .h-text-transform-uppercase {
        text-transform: uppercase;
    }
    .card-header{
        border-bottom: 1px solid #85868c;
        font-size: 1.25em;
        line-height: 1.3;
    }
    .card-header-colors{
        color: #85868c;
        background: #fafafa;
    }
    .card-header-colors-interactive{
        color: #fff;
        background: #1178ce;
        border-color: #1178ce
    }
    /* .card-header-interactive{
        color: #fff;
        background: #1178ce;
        border-color: #1178ce;
    } */
    .card-header:hover{
        color: #004183;
    }
    /* .c-card__header:focus{
        border-bottom: 1px solid #85868c;
    } */
    /* .c-card--interactive:not(:hover).is-unselected .c-card__header {
        color: #85868c;
        background: #fafafa;
    } */
    .h-color-b500 {
        color: #175da7;
    }
    .t-weight_bold {
        font-family: "Circular Bold",sans-serif;
    }
    .h-color-m600 {
        color: #6d6d6d !important;
    }
    .t-body_sm {
        font-size: 14px;
    }
    .t-weight_medium {
    font-family: "Circular Medium",sans-serif;
}
    .u-spacing-outside-bottom {
        margin-bottom: 16px !important;
    }
    h5, .t-heading_sm {
        margin: 0 0 .25em;
        font-family: "Circular Black",sans-serif;
        font-size: 1em;
        line-height: 1.5;
    }
    h5 {
        font-size: 1.25rem;
    }
    .u-spacing-outside-bottom-lg {
        margin-bottom: 24px !important;
    }
    .u-spacing-outside-bottom {
        margin-bottom: 16px !important;
    }
    .c-icon:not(.c-icon--size-auto) {
        width: 1.13em;
        height: 1.13em;
        stroke-width: 2px;
    }
    svg:not(:root) {
        overflow: hidden;
    }
</style>

