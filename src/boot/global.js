import Vue from 'vue'

var glb = Vue.observable({
  styles: {
    scrollbar: {
      thumb: {
        right: '4px',
        top: '5px',
        bottom: '5px',
        borderRadius: '5px',
        backgroundColor: 'grey',
        width: '5px',
        opacity: 0.75
      },
      bar: {
        right: '2px',
        top: '2px',
        bottom: '2px',
        borderRadius: '9px',
        backgroundColor: 'grey',
        width: '9px',
        opacity: 0.2
      }
    }
  }
})

Vue.prototype.$glb = glb