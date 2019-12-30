<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld v-bind:msg="msg"/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import mainService from '../services/MainService';

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
    private msg: string = 'Welcome to Your Vue.js + TypeScript App';

    protected created() {
        console.log('created...');
        mainService.main$.subscribe((value: string) => {
            console.log('created value::', value);
            this.msg = this.msg + value;
        });
    }

    protected mounted() {
        console.log('MOUNTED...');
        mainService.retrieve();
    }
}
</script>
