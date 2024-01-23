<template>
  <v-container class="fill-height home-container">
    <v-responsive class="align-center text-center fill-height">
      <v-img height="300" src="@/assets/eevee.jpg" />
      <div class="text-home">Templet Eevee Route - Jvaletim</div>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Marvel:ital,wght@0,400;0,700;1,400;1,700&display=swap');

  .text-home {
    font-family: 'Marvel', sans-serif;
    color: #C2997B;
    font-size: 37px;
  }

  .button-container {
    display: flex;
    gap: 15px;
    justify-content: center;
  }
</style>
