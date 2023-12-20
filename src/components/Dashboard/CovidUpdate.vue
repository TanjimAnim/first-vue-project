<template>
  <div class="p-2 rounded-md my-2">
    <div class="flex items-center justify-between">
      <div>Covid-19 Updates</div>
      <div>
        <div>10 September 2022</div>
        <div>Thursday 10:00:00 AM</div>
      </div>
    </div>
    <div class="flex items-center justify-between">
      <div class="w-1/2">
        <img src="/vaccine.png" alt="/vaccine.png" />
      </div>
      <div
        class="w-1/2 h-1/2 overflow-scroll"
        style="
          background-image: linear-gradient(
            92deg,
            #ff7594 19.86%,
            #ff797b 84.16%,
            #ff7c65 139.72%
          );
        "
      >
        <div v-for="(item, index) in items" :key="item.id">
          <div>{{ item.title }}</div>
          <div>{{ item.subtitle }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "CovidUpdate",
  data: () => {
    return {
      items: [
        {
          id: 1,
          title: "Infection Number",
          subtitle: "500",
        },
        {
          id: 2,
          title: "Total Infection",
          subtitle: "500,000",
        },
        {
          id: 3,
          title: "Infection Rate",
          subtitle: "10%",
        },
        {
          id: 4,
          title: "Number Of Death",
          subtitle: "20",
        },
      ],
    };
  },
};
</script>
