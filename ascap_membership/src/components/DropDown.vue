<template>
<div class="input-container dropdown my-2">
    <label>Publisher Company Type</label>
    <div class="dropdown bootstrap-select validation-error">
        <button type="button" role="button" class="dropdown-toggle" v-on:click="togleList">
            <span class="filter-option"></span>
        </button>
        <div class="dropdown-menu" v-bind:class="[showList ? 'show' : 'dont-show']" >
            <ul role="menu" class="dropdown-menu inner">
                <li v-for="(element) in contentList" v-bind:key="element" v-on:click="updatePublisherType">
                    <a tabindex=index>
                        <span>{{element}}</span>
                    </a>
                </li>
            </ul>
        </div>
        <!-- <select name="pets" id="pet-select">
            <option v-for="(element) in contentList" v-bind:key="element">{{element}}</option>
            
        </select> -->
        <!-- <button v-on:click="togleList" class="dropbtn">Dropdown</button>
        <div id="myDropdown" class="dropdown-content" v-bind:class="[showList ? 'show' : 'dont-show']">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </div> -->
    </div>
</div>
    
</template>
<script>
import { mapActions } from 'vuex'

export default {
     props: {
        contentList: {
            type: Array,
            required: true
        },
    },
    data() {
        return {
            showList: false
        }
    },
    mounted: function(){
        console.log(this.contentList)

    },
    methods:{
        ...mapActions([
            'chosenPublisherCompanyType'
        ]),
        chosenPublisherCompanyType(publisherCompanyType){
            this.$store.dispatch('chosenPublisherCompanyType',publisherCompanyType)
        },
        togleList(){
            console.log("element was chosen")
            this.showList = !this.showList
        },
        updatePublisherType(event){
            this.togleList()
            debugger
            //console.log(event.target.textContent)
            this.chosenPublisherCompanyType(event.target.textContent)

        }
    }
    
}
</script>
<style scoped>
.dropdown.bootstrap-select {
    background-color: #fff;
    width: 100% !important;
}
.dropup, .dropdown {
    position: relative;
}
.dropdown-toggle{
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    border: thin solid #85868c;
    border-radius: 2px;
    padding: 0 12px;
    font-family: "Circular Book",sans-serif;
}
.dropdown-toggle:before {
    content: '';
    display: inline-block;
}
.dropdow .btn.dropdown-toggle::after{
    content: url(data:image/svg+xml;base64,PHN2ZyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZ…I2Nic+PHBvbHlsaW5lIHBvaW50cz0nNiA5IDEyIDE1IDE4IDknPjwvcG9seWxpbmU+PC9zdmc+);
    transition: transform .3s ease;
    border: none;
    width: auto;
    height: 28px;
    position: relative;
    top: 6px;
}
.dropdown-toggle::after {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: .255em;
    vertical-align: .255em;
    content: "";
    border-top: .3em solid;
    border-right: .3em solid transparent;
    border-bottom: 0;
    border-left: .3em solid transparent;
}
.dropdown.bootstrap-select div.dropdown-menu {
    min-width: 100% !important;
    margin: -1px 0 0 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    padding: 0;
    transition: opacity .2s ease;
    border: 1px solid #1178ce;
    border-top: none;
}
.dropdown-menu {
    word-break: break-word;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    /* display: none; */
    float: left;
    min-width: 10rem;
    padding: .5rem 0;
    margin: .125rem 0 0;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: .25rem;
} 
.dropdown.bootstrap-select div.dropdown-menu .inner {
    overflow-x: hidden !important;
    display: block;
}
.bootstrap-select .dropdown-menu.inner {
    position: static;
    float: none;
    border: 0;
    padding: 0;
    margin: 0;
    border-radius: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
}
.div.dropdown-menu ul li a {
    display: block;
    padding: 12px 10px;
    color: #0d0d0d;
    border-bottom: 1px solid #ededed;
    font-size: 18px;
    min-width: 0;
    word-wrap: break-word;
    white-space: pre-wrap;
}
.bootstrap-select .dropdown-menu li a {
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
/* .dropbtn {
  background-color: #3498DB;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropbtn:hover, .dropbtn:focus {
  background-color: #2980B9;
}

.dropdown {
  position: relative;
  display: block;
}

.dropdown-content { */
  /* display: none; */
  /* position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 200;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown a:hover {background-color: #ddd;} */

.show {display: block;}
.dont-show{display: none;}
</style>