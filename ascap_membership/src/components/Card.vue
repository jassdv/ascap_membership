<template>
    <div class="card">
        <input type="type" name="name" id="selectedBoth">
        <label for="selectedBoth" class="c-card c-card--interactive is-unselected">
            <div id="membershipCardContent">
            <div class="card__header">
                <div class="c-marked-text c-marked-text--center">
                    <div class="c-marked-text__icon">
                        <svg id="quavers-and-briefcases" xmlns="http://www.w3.org/2000/svg" stroke-width="2" width="40px" height="29px" viewBox="-24.652 -22.871 40 27" class="c-icon c-icon--size-auto">
                            {{cardheaderSvg}}
                        </svg>
                    </div>
                    <div class="c-marked-text__content">
                        <h2 
                            class="t-font-heading_lg t-weight_medium">{{title}}
                        </h2>
                    </div>
                </div>
            </div>
            <div class="c-card__body">
                <p>
                    {{membership.description}}</p>
                <p>
                <span class="h-color-b500 h-text-transform-uppercase t-weight_bold c-card__state-color-control">
                    $ {{membership.pric}} Application Fee
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" class="c-icon">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        {{requirement}}
                    </li>
                </ul>
            </div>
        </div>
    </label>
</div>
    
</template>
<script>
import { WRITER_PUBLISHER_TITLE, WRITER_TITLE, PUBLISHER_TITLE, WRITE_PUBLISHER_SVG, WRITER_SVG, PUBLISHER_SVG } from '../globals.js'

export default {
    props: {
        name: {
            type: String,
            required: false //need to re-think whether it should be mandatory or not
        },
        type: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        }
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
        }
    },
    mounted: () =>{
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
    }




    
}
</script>
<style scoped>
    .card{
        position: relative;
        width: 100%;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
    }
    #selectedBoth{
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
    .c-card--interactive {
        background: #fff;
        cursor: pointer;
        transition: all .5s;
    }
    #membershipCardContent{
        margin-top: 10px;
    }
    .card_header{
        color: #fff;
        background: #1178ce;
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
    .c-icon {
        vertical-align: sub;
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
    }
    .c-card__header, .c-card__body, .c-card__footer {
        padding: 24px 24px;
    }
    .h-text-transform-uppercase {
        text-transform: uppercase;
    }
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
    .c-icon {
        vertical-align: sub;
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
    }

</style>