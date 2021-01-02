<template>
  <q-page class="fit">
    <q-scroll-area class="fit">
      <div v-for="n in 10" :key="n">
        Lorem ipsum dolor sit amet, consectetur adipisicing
      </div>
    </q-scroll-area>
    <div v-for="n in 20" :key="n">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae ea cum ipsum quidem iure quo veritatis, labore necessitatibus! Voluptatibus voluptate non explicabo expedita animi, repellendus vitae perspiciatis. Laboriosam, ad quis.</div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
