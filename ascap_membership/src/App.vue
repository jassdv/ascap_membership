<template>
  <div id="app" class="container ome-container">
    <Section
      headerTitle="Membership"
      sectionNumber=1
    >
      <SectionMembership />
    </Section>
  </div>
</template>

<script>
import SectionButton from './components/SectionButton.vue';
import SectionMembership from './components/SectionMembership.vue'
import Section from './components/Section.vue'
import { PUBLISHER_COMPANY_TYPE } from './globals.js'
import { mapActions } from 'vuex'

export default {
  components: {
    SectionButton,
    SectionMembership,
    Section

  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
      ...mapActions([
            'publisherCompanyType'
        ]),
      publisherCompanyType(){
            this.$store.dispatch('publisherCompanyType',PUBLISHER_COMPANY_TYPE)
        },
    },
    created: function(){
      this.publisherCompanyType()
    }
}
</script>

<style>
</style>
