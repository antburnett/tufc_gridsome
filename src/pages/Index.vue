<template>
  <Layout :showFooter="true">
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/assets/images/favicon.png" height="200" width="200" fit="fill" />

    <h1>Hello, brthtr!</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam
      non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>
    <!-- <Footer></Footer> -->
  </Layout>
</template>

<script>
import Footer from '~/components/Footer.vue';
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    Footer
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
