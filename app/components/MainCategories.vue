<template>
  <Page class="page" :actionBarHidden="true">
    <StackLayout>
      <Label :text="h1" class="h1" horizontalAlignment="center" marginTop="20" />
      <Label :text="mainIntro" horizontalAlignment="center" marginBottom="20" />
      <Menu :menuItems="listItems" @selected="navigateTo($event)" />
    </StackLayout>
  </Page>
</template>

<script>
import SubCategories from "./SubCategories";
import Menu from "./Menu";

export default {
  components: {
    SubCategories,
    Menu
  },
  methods: {
    navigateTo(mainCategory) {
      this.$navigateTo(SubCategories, {
        clearHistory: false,
        props: {
          mainCategory: mainCategory
        }
      });
    }
  },
  data() {
    return {
      h1: "Hva nå?",
      mainIntro: "Trykk på kategorien du vil utforske",
      categoryDesign: {
        1: { icon: "fa-tshirt", offers: 6, color: "#BA84D6", label: "Mote" },
        2: {
          icon: "fa-running",
          offers: 0,
          color: "#9DB4F0",
          label: "Aktivitet"
        },
        3: {
          icon: "fa-concierge-bell",
          offers: 3,
          color: "#74DDA4",
          label: "Tjenester"
        },
        4: { icon: "fa-hamburger", offers: 0, color: "#F3BB70", label: "Mat" },
        5: { icon: "fa-tv", offers: 0, color: "#7CECEE", label: "Fritid" },
        6: { icon: "fa-couch", offers: 0, color: "#B1DC77", label: "Interiør" },
        7: {
          icon: "fa-heartbeat",
          offers: 0,
          color: "#FB82A6",
          label: "Helse og skjønnhet"
        }
      }
    };
  },
  computed: {
    listItems() {
      const cat = this.categoryDesign;
      const createItem = (id, values) => {
        return { id, values };
      };
      return Object.keys(cat).map(id => createItem(id, cat[id]));
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
