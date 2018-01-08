import say from './util';
import Vue from 'vue';

say();
var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })
