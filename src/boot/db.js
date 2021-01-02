import Vue from 'vue'
import constantColors from '../data/constant-colors.json'
import unitsGroups from '../data/units-groups.json'
import unitsLength from '../data/units-length.json'


var db = {
    constants: {
        colors: constantColors
    },
    unitsGroups: unitsGroups,
    units: {
        length: unitsLength
    }
}

Vue.prototype.$db = db