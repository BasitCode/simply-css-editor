<template>
  <div class="column no-wrap fit">
    <q-toolbar>
      <q-btn flat round dense icon="assignment_ind" />
      <q-toolbar-title> Toolbar </q-toolbar-title>
      <q-btn flat round dense icon="mdi-import" class="q-mr-xs" />
      <q-btn flat round dense icon="mdi-export" />
    </q-toolbar>
    <q-separator inset />
    <q-splitter v-model="ui.splitter" class="fit">
      <template v-slot:before>
        <q-scroll-area class="fit" :thumb-style="$glb.styles.scrollbar.thumb" :bar-style="$glb.styles.scrollbar.bar">
          <q-list>
            <q-expansion-item expand-separator icon="perm_identity" label="Account settings" caption="John Doe" v-for="e in 10" :key="e">
                <q-item clickable v-ripple v-for="n in 10" :key="n">
                <q-item-section avatar>
                    <q-icon color="primary" name="bluetooth" />
                </q-item-section>
                <q-item-section>Icon as avatar</q-item-section>
                </q-item>
            </q-expansion-item>
          </q-list>
        </q-scroll-area>
      </template>
      <template v-slot:separator> </template>
      <template v-slot:after> B</template>
    </q-splitter>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ui: {
        splitter: 50,
      },
    };
  },
};
</script>

<style>
</style>