<script lang="ts">
export default {
  name: "MaryJane",
};
</script>

<template>
  <div
    class="flex items-center justify-between rounded-md p-2"
    style="
      background-image: linear-gradient(
        92deg,
        #ff7594 19.86%,
        #ff797b 84.16%,
        #ff7c65 139.72%
      );
    "
  >
    <div class="w-60 h-60">
      <img src="/maryjane.svg" class="w-full h-full object-contain" />
    </div>
    <div>
      <div class="text-white text-2xl font-bold">Hello, Mary Jane!</div>
      <div class="text-white text-xl font-bold">
        Stay Up-to-Date with your appointments.
      </div>
      <div class="text-white text-xl font-bold">
        You Have No pending Reports
      </div>
    </div>
  </div>
</template>
