<template>
  <div class="dashboard">
    <div class="grd">
      <div class="grd-row">
        <div class="col-1-offset-1">
          <h1>{{ msg }}</h1>
        </div>
      </div>

      <div class="grd-row">
        <div class="col-3">
          <button class="btn">Button 1</button>
        </div>

        <div class="col-3">
          <button class="btn">Button 2</button>
        </div>
      </div>

      <div class="grd-row">
        <div class="col-3">
          <button class="btn">Button 3</button>
        </div>

        <div class="col-3">
          <button class="btn">Button 4</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'dashboard',
    data () {
      return {
        msg: 'Dashboard'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  h1, h2 {
    font-weight: normal;
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
</style>
