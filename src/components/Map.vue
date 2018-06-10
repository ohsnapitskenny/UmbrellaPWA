<template>
    <div class="container">
      <div class="map">
        <l-map ref="map" :zoom="zoom" :center="[51.9076993, 4.4612965]">
          <l-tilelayer :url="url"></l-tilelayer>

          <l-marker v-for="marker in markers" :key="marker.id"
                    :visible="marker.visible" :draggable="false"
                    :lat-lng="marker.position" :icon="marker.icon">
          </l-marker>


        </l-map>
      </div>
    </div>
</template>


<script>
  import "leaflet/dist/leaflet.css"
  import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

  let icon = L.icon({
    iconUrl: 'static/img/icons/marker-icon.png',
    iconSize: [25, 40],
    iconAnchor: [10,30],
    shadowUrl: '',
  });

  let markers = [
    { id: "m1", position : {lat:51.9076993, lng:4.4612965}, visible: true, icon: icon},
    { id: "m2", position : {lat:51.906222, lng:4.459334}, visible: true, icon: icon},
    { id: "m3", position : {lat:51.9095132, lng:4.4580803}, visible: true, icon: icon},
    { id: "m4", position : {lat:51.9040953, lng:4.4590053}, visible: true, icon: icon},
    { id: "m5", position : {lat:51.9098597, lng:4.4658407}, visible: true, icon: icon},
    { id: "m6", position : {lat:51.9128279, lng:4.4674571}, visible: true, icon: icon}
  ];

  export default {
    name: 'app-menu',
    data () {
      return {
        msg: 'Map',
        zoom: 17,
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        markers: markers,
      }
    },
    components: {
      'l-map': LMap,
      'l-tilelayer': LTileLayer,
      'l-marker': LMarker
    },
    methods: {
      createMarker () {
        let marker = L.icon({

        });

        return marker;

      }
    },

    beforeMount() {
      this.createMarker()
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

  .map {
    height: 500px;
  }


</style>
