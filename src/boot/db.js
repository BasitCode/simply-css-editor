import Vue from 'vue'
import constantColors from '../data/constant-colors.json'
import units_groups from '../data/units-groups.json'
import units from '../data/units.json'


var db = {
    constants: {
        colors: constantColors
    },
    units_groups,
    units
}

Vue.prototype.$db = db