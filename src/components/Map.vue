<template>
    <div class="container">
      <div class="columns">
        <div class="column">
          Map
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'app-menu',
    data () {
      return {
        msg: 'Map'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  h1, h2 {
    font-weight: normal;
  }

  h2 {
    font-size: 22px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #35495E;
  }

  button {
    height: 100px;
    width: 100px;
  }

  img {
    height: 200px;
    width: 200px;
    margin-bottom: 20px;
    border-radius: 50%;
  }
</style>
