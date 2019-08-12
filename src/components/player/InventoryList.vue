<template>
  <div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Inventory from '@/class/Inventory';

export default Vue.extend({
  name: "InventoryList",
  computed: {
    inventory(): Inventory {
      return this.$store.state.player.inventory;
    },
    inventorySlots(): number {
      return this.inventory.slots;
    }
  }
});
</script>
