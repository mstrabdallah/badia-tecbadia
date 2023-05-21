<template>
  <div class="nodata_">
    <div class="noData" v-if="type === 1">
      <v-icon>mdi-emoticon-neutral-outline</v-icon>
      <p>{{ $t(data) }}</p>
    </div>

    <div class="noData" v-else>
      <div class="noDataImg"></div>
      <p>{{ $t(data) }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["data", "type"],
};
</script>
<style scoped>

.nodata_{
      width: 100%;
    border: 1px solid #eeeeee;
    border-radius: 15px;
    margin-bottom: 80px;
}
.nodata_ {
  width: 100%;
}
.noData {
    padding: 20px;
    text-align: center;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 400px;
    justify-content: center;
}
.noDataImg {
  background-image: url("/images/no-data.png");
  height: 200px;
  width: 200px;
  margin: 0px;
  background-size: 100% 100%;
  margin-bottom: 25px;
}
.noData p {
  font-weight: bold;
}
.noData svg {
  font-size: 29px;
  margin-bottom: 11px;
}
</style>