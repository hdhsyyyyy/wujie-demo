<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/app1">app1</RouterLink>
        <RouterLink to="/app2">app2</RouterLink>
        <RouterLink to="/">home</RouterLink>
        <RouterLink to="/about">about</RouterLink>
      </nav>
    </div>
  </header> -->
  <RouterLink to="/app1">app1</RouterLink>

  <RouterView />
</template>
