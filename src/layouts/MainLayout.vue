<template>
  <div class="absolute fit no-scroll column no-wrap">
    <window-titlebar></window-titlebar>
    <div class="fit row no-wrap">
      <q-tabs v-model="ui.tab" active-color="primary" vertical switch-indicator>
        <q-tab name="editor" icon="mdi-tune-variant">
          <q-tooltip anchor="center right" self="center left" transition-show="scale" transition-hide="fade" :delay="500">Editor</q-tooltip>
        </q-tab>
        <q-tab name="library" icon="mdi-checkbox-multiple-blank-circle-outline">
          <q-tooltip anchor="center right" self="center left" transition-show="scale" transition-hide="fade" :delay="500">Library</q-tooltip>
        </q-tab>
        <q-tab name="settings" icon="mdi-toggle-switch-outline">
          <q-tooltip anchor="center right" self="center left" transition-show="scale" transition-hide="fade" :delay="500">Settings</q-tooltip>
        </q-tab>
      </q-tabs>
      <q-tab-panels v-model="ui.tab" animated class="col">
        <q-tab-panel name="editor" class="q-pa-none">
          <view-editor></view-editor>
        </q-tab-panel>
        <q-tab-panel name="library" class="q-pa-none">
          <div class="text-h6">Mails</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
        <q-tab-panel name="settings" class="q-pa-none">
          <div class="text-h6">Alarms</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script>
import WindowTitlebar from "src/components/WindowTitlebar.vue";
import ViewEditor from "src/components/ViewEditor.vue";
export default {
  components: { WindowTitlebar, ViewEditor },
  data() {
    return {
      ui: {
        tab: "editor",
      },
      right: false,
    };
  },
};
</script>