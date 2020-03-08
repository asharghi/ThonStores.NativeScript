<template>
  <Scrollview>
        <GridLayout columns="*,*" rows="auto,auto,auto,auto,auto,auto,auto,auto">
          <StackLayout
            v-for="(item, index) in menuItems"
            :key="item.id"
            :col="index%2 === 0 ? 0 : 1"
            :row="index%2 === 0 ? index : index-1"
            @tap="$emit('selected', item)"
            :backgroundColor="item.values.color"
            marginTop="10"
            :marginRight="index%2 === 0 ? '5' : '10'"
            :marginLeft="index%2 === 0 ? '10' : '5'"
            padding="10"
            borderRadius="10"
          >
            <GridLayout horizontalAlignment="right">
              <Label
                :text="'fa-certificate' | fonticon"
                class="fas"
                :color="item.values.offers > 0 ? '#333' :  item.values.color"
                fontSize="35"
              />
              <Label
                android:style="padding-top:5;"
                v-if="item.values.offers > 0"
                :text="item.values.offers"
                color="white"
                fontSize="18"
                horizontalAlignment="center"
              />
            </GridLayout>
            <Label
              :text="item.values.icon | fonticon"
              class="fas"
              fontSize="30"
              color="white"
              horizontalAlignment="center"
              marginTop="5"
            />
            <Label
              :text="item.values.label"
              color="white"
              horizontalAlignment="center"
              marginTop="10"
              marginBottom="30"
            />
          </StackLayout>
        </GridLayout>
      </Scrollview>
</template>

<script>

export default {
  props: {
    menuItems: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import "../app-variables";
// End custom common variables

</style>
