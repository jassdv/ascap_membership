<template>
    <section
        headerTitle="Membership"
        sectionNumber=1
        continueAction="continueAction"
        cancelAction="cancelAction"
    >
        <div>HERE I PUT THE 3 CARDS AND THE DROP DOWN LIST</div>

    </section>
    
</template>
<script>
import Section from './Section.vue';

export default {
    components: {
        Section
    },
    data() {
        return {
            chosenMembership: ""    //needs to be bind to the chosen card and to
                                    //v-if to render or not the drop down list
        };
    },
    methods: {
        continueAction(){
            

        },
        cancelAction(){

        },
        selectMemberShip(){
            //according to the chosen card decidning 

        }
    }
    
}

</script>
<style scoped>

</style>