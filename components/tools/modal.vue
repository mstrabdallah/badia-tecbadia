<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="text-h5"> Thank you </v-card-title>

        <v-card-text> we will replay very soon </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["dialog"],
};
</script>

<style></style>
