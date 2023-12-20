<template>
  <div class="p-4 w-1/2 rounded-md border-[1px] border-[#EDEBEB]">
    <div class="my-2">Upcoming Appointments</div>
    <AppointmentCard />
    <AppointmentCard />
    <AppointmentCard />
    <AppointmentCard />
  </div>
</template>

<script lang="ts">
import AppointmentCard from "./AppointmentCard.vue";
export default {
  name: "AppointmentList",
  components: { AppointmentCard },
};
</script>
