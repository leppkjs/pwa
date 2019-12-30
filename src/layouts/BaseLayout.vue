<template>
    <div id="app">
        <Menu/>
        <router-view/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Menu from '@/components/Menu';

@Component({
    components: {
        Menu
    }
})
export default class BaseLayout extends Vue {

}
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>