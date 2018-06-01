<template>
  <div id="app">
    <main>
      <section class="hero is-fullheight">
        <div class="hero-head">
          <header>
            <span>Pluber</span>
          </header>
        </div>

        <div class="hero-body">
          <router-view></router-view>
        </div>

        <div class="hero-foot">
          <Footer></Footer>
        </div>

      </section>
    </main>
  </div>
</template>

<script>
  import Footer from '@/components/footer'

  export default {
    name: 'app',
    components: {Footer}
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  main {
    text-align: center;
  }

  header {
    margin: 0;
    height: 56px;
    padding: 0 16px 0 24px;
    background-color: #35495E;
    color: #ffffff;
  }

  header span {
    display: block;
    position: relative;
    font-size: 20px;
    line-height: 1;
    letter-spacing: .02em;
    font-weight: 400;
    box-sizing: border-box;
    padding-top: 16px;
  }
</style>
