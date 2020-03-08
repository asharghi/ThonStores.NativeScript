<template>
  <Page class="page" :actionBarHidden="$isAndroid">
    <ActionBar color="#24292E" flat="true">
      <NavigationButton text="Tilbake"></NavigationButton>
    </ActionBar>
    <Mapbox
      left="0"
      top="0"
      width="100%"
      height="100%"
      :latitude="latitude"
      :longitude="longitude"
      :accessToken="mapBoxToken"
      mapStyle="streets"
      hideCompass="true"
      zoomLevel="15"
      showUserLocation="true"
      disableZoom="false"
      disableRotation="false"
      disableScroll="false"
      :mapReady="onMapReady()"
      disableTilt="false"
      ref="map"
    ></Mapbox>
  </Page>
</template>
<script>
export default {
   props: {
    mainCategory: {
      type: Object,
      required: true
    },
    subCategory: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      latitude: 59.913407,
      longitude: 10.756271,
      mapBoxToken:
        "pk.eyJ1IjoiYXNoYXJnaGkiLCJhIjoiY2s2cDM5Y2tiMWlhbTNmbDlwbXIzamN3diJ9.ZJXEtCwDXrTRmSW5lxwuIA"
    };
  },
  methods: {
    navigateTo(storeid) {
      
    },
    onMapReady: function() {
      var vm = this;
      setTimeout(function() {
        vm.$refs.map.nativeView.trackUser({
          mode: "FOLLOW",
          animated: true
        });
        vm.addMarker();
      }, 100);
    },
    addMarker: function() {
      this.$refs.map.nativeView.addMarkers([
        {
          lat: 59.948508,
          lng: 11.009141,
          title: "Strømmen storsenter",
          subtitle: "",
          selected: false,
          onCalloutTap: () => this.navigateTo(1)
        },
        {
          lat: 59.919630,
          lng: 10.953142,
          title: "Triaden Lørenskog Storsenter",
          subtitle: "",
          selected: false,
          onCalloutTap: () => this.navigateTo(2)
        }
      ]);
    }
  }
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import "../app-variables";
// End custom common variables

.menu-icon {
  font-size: 30;
  color: white;
}
</style>
