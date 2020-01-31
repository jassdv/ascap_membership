<template>
  <div id="app" class="container ome-container">
    <Section
      headerTitle="Membership"
      sectionNumber=1
    >
      <SectionMembership />
      
    </Section>
    
    <!-- <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul> -->
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
            console.log("in chosen membership action-title", this.title)
            this.$store.dispatch('publisherCompanyType',PUBLISHER_COMPANY_TYPE)
        },
    },
    created: function(){
      this.publisherCompanyType()
    }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.ome-container {
    position: relative;
    margin-top: 35px;
    margin-bottom: 50px;
}
*{
  font-family: "Circular Black",sans-serif;
}

</style>
