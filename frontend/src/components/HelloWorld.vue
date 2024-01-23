<template>
  <v-container class="fill-height home-container">
    <v-responsive class="align-center text-center fill-height">
      <v-img height="300" src="@/assets/template.jpg" />
      <div class="text-home">Template Projectos To - Jvaletim</div>
      <div class="button-container">
        <v-btn color="#295477">Test</v-btn>
        <v-btn color="#295477">Test</v-btn>
        <v-btn color="#295477">Test</v-btn>
      </div>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
  //
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Marvel:ital,wght@0,400;0,700;1,400;1,700&display=swap');

  .text-home {
    font-family: 'Marvel', sans-serif;
    color: #87bdf7;
    font-size: 37px;
  }

  .button-container {
    display: flex;
    gap: 15px;
    justify-content: center;
  }
</style>
