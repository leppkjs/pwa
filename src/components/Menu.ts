import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Menu extends Vue {
    protected mounted() {
        console.log('Menu.....');
    }
}
