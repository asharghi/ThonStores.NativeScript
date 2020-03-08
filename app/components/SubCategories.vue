<template>
  <Page class="page">
    <ActionBar color="#24292E" flat="true">
      <NavigationButton text="Tilbake"></NavigationButton>
      <Label
        class="action-bar-title"
        fontWeight="bold"
        fontSize="30"
        color="#24292E"
        :text="mainCategory.values.label"
      ></Label>
    </ActionBar>
    <Menu :menuItems="listItems" @selected="navigateTo($event)"/>
  </Page>
</template>

<script>
import MapPage from "./Map";
import Menu from "./Menu";

export default {
  components: {
    MapPage,
    Menu
  },
  props: {
    mainCategory: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      subCategories: {
        1: {
          1: { icon: "fa-female", offers: 2, label: "Dameklær" },
          2: { icon: "fa-gem", offers: 1, label: "Gullsmed" },
          3: { icon: "fa-tshirt", offers: 1, label: "Klesbutikk" },
          4: { icon: "fa-glasses", offers: 0, label: "Optiker" },
          5: { icon: "fa-shoe-prints", offers: 0, label: "Skobutikk" },
          6: { icon: "fa-ring", offers: 2, label: "Smykkebutikk" },
          7: { icon: "fa-shopping-bag", offers: 0, label: "Veskebutikk" }
        },
        2: {
          1: { icon: "fa-book", offers: 0, label: "Bibliotek" },
          2: { icon: "fa-bowling-ball", offers: 0, label: "Bowling" },
          3: { icon: "fa-film", offers: 0, label: "Kino" }
        },
        3: {
          1: { icon: "fa-university", offers: 0, label: "Bank" },
          2: { icon: "fa-cross", offers: 0, label: "Begravelsesbyrå" },
          3: { icon: "fa-mobile", offers: 0, label: "Mobilreperatør" },
          4: { icon: "fa-shower", offers: 0, label: "Renseri" }
        },
        4: {
          1: {
            icon: "fa-birthday-cake",
            offers: 0,
            label: "Bakeri og konditori"
          },
          2: {
            icon: "fa-shopping-basket",
            offers: 0,
            label: "Delikatessebutikk"
          },
          3: { icon: "fa-coffee", offers: 0, label: "Kafé" },
          4: { icon: "fa-shopping-cart", offers: 0, label: "Matbuikk" },
          5: { icon: "fa-utensils", offers: 0, label: "Restaurant" },
          6: { icon: "fa-hand-holding", offers: 0, label: "Takeaway" },
          7: { icon: "fa-wine-glass", offers: 0, label: "Vinmonopol" }
        },
        5: {
          1: { icon: "fa-gamepad", offers: 0, label: "Barnebutikk" }
        },
        6: {
          1: { icon: "fa-leaf", offers: 0, label: "Blomsterbutikk" }
        },
        7: {
          1: { icon: "fa-prescription-bottle-alt", offers: 0, label: "Apotek" },
          2: { icon: "fa-cut", offers: 0, label: "Frisør" },
          3: { icon: "fa-heartbeat", offers: 0, label: "Helse og velvære" },
          3: { icon: "fa-mortar-pestle", offers: 0, label: "Helsekost" }
        }
      }
    };
  },
  methods: {
    navigateTo(subCategory) {
      const comp = this;
      this.$navigateTo(MapPage, {
        clearHistory: false,
        props: {
          mainCategory: comp.mainCategory,
          subCategory: subCategory
        }
      });
    },
    lightenColor(color, percent) {
      var num = parseInt(color.replace("#", ""), 16),
        amt = Math.round(2.55 * percent),
        R = (num >> 16) + amt,
        B = ((num >> 8) & 0x00ff) + amt,
        G = (num & 0x0000ff) + amt;
      return (
        "#" +
        (
          0x1000000 +
          (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
          (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
          (G < 255 ? (G < 1 ? 0 : G) : 255)
        )
          .toString(16)
          .slice(1)
      );
    }
  },
  computed: {
    listItems() {
      const comp = this;
      const cat = this.subCategories[comp.mainCategory.id];
      const darkerBaseColor = comp.lightenColor(
        comp.mainCategory.values.color,
        -8
      );
      let index = 0;
      const createItem = (id, values) => {
        values.color = comp.lightenColor(
          darkerBaseColor,
          (index > 7 ? index : index++) * 3
        );
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
</style>
