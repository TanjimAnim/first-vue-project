<script lang="ts">
export default {
  name: "CheckupElements",
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Pulse Count",
          subtitle: "60 bpm",
          status: "Normal",
          img: "/Frame 2846.svg",
        },
        {
          id: 2,
          title: "Blood Pressure",
          subtitle: "110/70 mmHg",
          status: "Slightly higher",
          img: "/Frame 2846 (1).svg",
        },
        {
          id: 3,
          title: "Oxygen Saturation",
          subtitle: "97 %",
          status: "Slightly higher",
          img: "/Frame 2846 (2).svg",
        },
        {
          id: 4,
          title: "Glucose Count",
          subtitle: "100 mm/dL",
          status: "Normal",
          img: "/Frame 2846 (3).svg",
        },
      ],
    };
  },
};
</script>
<template>
  <div>
    <ul class="flex items-center gap-4 my-2">
      <li v-for="(item, index) in items" :key="item.id">
        <div
          class="w-48 rounded-md shadow-md hover:shadow-lg shadow-[#EDEBEB] p-2 cursor-pointer transition-all"
        >
          <div class="w-10 h-10">
            <img :src="item.img" class="w-full h-full object-contain" />
          </div>
          <div class="text-xl font-bold">
            {{ item.title }}
          </div>
          <div class="text-lg font-medium">
            {{ item.subtitle }}
          </div>
          <div class="flex items-center gap-2">
            <div><img src="/up-arrow.svg" /></div>
            <div
              :class="
                item.status === 'Normal'
                  ? 'text-red-400 font-bold'
                  : 'text-green-400 font-bold'
              "
            >
              {{ item.status }}
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
