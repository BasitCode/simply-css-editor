<template>
  <q-bar dense class="no-scroll q-pr-none bg-auto">
    <q-icon name="mdi-language-css3" class="q-mr-sm"/>
    <q-btn size="sm" flat label="file"></q-btn>

    <q-space class="window-drag full-height"></q-space>

    <q-btn size="sm" flat icon="mdi-brightness-4" @click="$q.dark.toggle()"/>
    <q-btn size="sm" flat icon="mdi-window-minimize" />
    <q-btn size="sm" flat icon="mdi-window-maximize" />
    <q-btn size="sm" color="negative" flat icon="mdi-close" />
  </q-bar>
</template>

<script>
export default {
    data() {
        return {
            
        }
    }
};
</script>

<style>
</style>