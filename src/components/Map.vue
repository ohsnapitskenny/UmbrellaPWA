<template>
    <div class="container">
      <div class="map">
        <l-map ref="map" :zoom="zoom" :center="[51.9076993, 4.4612965]">
          <l-tilelayer :url="url"></l-tilelayer>
        </l-map>
      </div>
      <!--<button v-bind:onclick="getGeo()">Test</button>-->
      <!--<geolocation :auto="true">-->
        <!--<div slot-scope="{ getCurrentPosition, currentLocation, loading, error }">&lt;!&ndash; slot-scope allow to use methods and properties &ndash;&gt;-->
          <!--<div>-->
            <!--<div v-if="error">{{error.code}}: {{error.message}}</div>-->
            <!--<div v-if="currentLocation.coords.latitude && currentLocation.coords.longitude">{{currentLocation.coords.latitude}}: {{currentLocation.coords.longitude}}</div>-->
            <!--&lt;!&ndash;<button @click="getCurrentPosition" :disabled="loading">Geolocate me</button>&ndash;&gt;-->
          <!--</div>-->
        <!--</div>-->
      <!--</geolocation>-->
    </div>
</template>


<script>
  import l from 'leaflet';
  import "leaflet/dist/leaflet.css"
  import * as Vue2leaflet from 'vue2-leaflet'
  import Geolocation from 'vue-component-geolocation'

  export default {
    name: 'app-menu',
    data () {
      return {
        msg: 'Map',
        zoom: 17,
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      }
    },
    components: {
      'l-map': Vue2leaflet.LMap,
      'l-tilelayer': Vue2leaflet.LTileLayer,
      'geolocation': Geolocation,
    },

    methods : {
      getGeo () {
      }
    },

    mounted() {

    },
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

  .map {
    height: 500px;
  }


</style>
