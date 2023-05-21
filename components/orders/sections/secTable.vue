<template>
  <div class="orderTabel">

 
    
   <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th>#</th>
            <th>{{ $t("Order") }}</th>
            <th>{{ $t("Status") }}</th>
            <th>{{ $t("Domain") }}</th>
            <th>{{ $t("Total") }}</th>
            <th>{{ $t("Date") }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="res in data" :key="res.id">
            <td>#{{ res.id }}</td>
            <td>{{res.tec && res.tec.title }}</td>
            <td>
              <span :class="res.status + ' status'"></span>{{ $t(res.status) }}
            </td>
            <td>
              <a
                :href="'https://' + res.domain + '.tecbadia.com'"
                target="_blank"
                rel="noopener"
                >{{ res.domain }}.tecbadia.com</a
              >
            </td>
            <td>{{ res.final_price }} {{ $t(allAuth.country) }}</td>
            <td>{{ res.date_1 }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table> 
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: ["data"],
  computed:{
    ...mapGetters(['allAuth'])
  }
};
</script>
