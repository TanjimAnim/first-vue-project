<script lang="ts">
import { ref } from "vue";
import { Switch } from "@headlessui/vue";

export default {
  name: "DesktopNavbar",
  setup() {
    const enabled = ref(false);

    return {
      enabled,
    };
  },
  components: {
    Switch,
  },
};
</script>
<template>
  <div class="hidden sm:flex items-center justify-between w-full p-2">
    <div class="text-[#646F75] font-bold text-2xl">Home</div>
    <div class="flex items-center gap-5">
      <Switch
        v-model="enabled"
        :class="enabled ? 'bg-black' : 'bg-gray-500'"
        class="relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
      >
        <!-- <v-icon
          v-if="!enabled"
          name="md-Night-light-Two-tone"
          class="text-white"
        /> -->
        <span class="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          :class="enabled ? 'translate-x-9' : 'translate-x-0'"
          class="pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
        >
        </span>

        <!-- <v-icon v-if="enabled" name="co-sun" class="text-white" /> -->
      </Switch>

      <div class="w-10 h-10">
        <img src="/Avatar.svg" class="w-full h-full object-contain" />
      </div>
    </div>
  </div>
</template>
