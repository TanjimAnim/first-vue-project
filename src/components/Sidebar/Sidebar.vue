<script lang="ts">
import { defaultNavItems } from "./defaultNavbar.vue";
import type { NavItem } from "./defaultNavbar.vue";
import Medidoc from "../Dashboard/Medidoc.vue";
import { ref } from "vue";

export default {
  props: {
    collapsed: Boolean,
    navItems: {
      type: Array as () => NavItem[],
      default: () => defaultNavItems,
    },
    shown: Boolean,
  },
  name: "Sidebar",
  components: {
    Medidoc,
  },
  setup(props, { emit }) {
    const collapsed = ref(props.collapsed);

    const toggleCollapsed = () => {
      collapsed.value = !collapsed.value;
      emit("update:collapsed", collapsed.value);
    };
    return {
      collapsed,
      toggleCollapsed,
    };
  },
};
</script>

<template>
  <div
    :class="{
      'bg-white text-black fixed md:static md:translate-x-0 z-20': true,
      'transition-all duration-300 ease-in-out': true,
      'w-[300px]': !collapsed,
      'w-16': collapsed,
      '-translate-x-full': !shown,
    }"
  >
    <div
      :class="{
        'flex flex-col justify-between h-screen md:h-full sticky inset-0': true,
      }"
    >
      <!-- logo and collapse button -->
      <div
        :class="{
          'flex items-center transition-none': true,
          'p-4 justify-between': !collapsed,
          'py-4 justify-center': collapsed,
        }"
      >
        <span v-if="!collapsed" class="whitespace-nowrap"><Medidoc /></span>
        <button
          class="grid place-content-center w-10 h-10 rounded-full opacity-0 md:opacity-100"
          @click="toggleCollapsed"
        >
          <template v-if="collapsed">
            <div class="p-1 shadow-md rounded-md w-7 h-7 m-auto my-8">
              <img src="/fi_menu.png" alt="/fi_menu.png" />
            </div>
          </template>
          <template v-else>
            <img src="/doubleLeftIcon.svg" />
          </template>
        </button>
      </div>
      <nav class="flex-grow">
        <ul
          :class="{
            'my-2 flex flex-col gap-2 items-stretch': true,
          }"
        >
          <li
            v-for="(item, index) in navItems"
            :key="index"
            :class="{
              'text-black  flex': true,
              'transition-colors duration-300': true,
              'rounded-md p-2 mx-3 gap-4': !collapsed,
              'rounded-full p-2 mx-3 w-10 h-10': collapsed,
            }"
          >
            <router-link :to="item.href" class="flex gap-2">
              <img :src="item.icon" />
              <span v-if="!collapsed">{{ item.label }}</span>
            </router-link>
          </li>
        </ul>
      </nav>
      <div
        :class="{
          'grid place-content-stretch p-4': true,
        }"
      >
        <div class="flex gap-4 items-center h-11 overflow-hidden">
          <div v-if="!collapsed" class="flex flex-col">
            <div class="flex flex-col my-10 m-auto justify-center items-center">
              <button><img src="/sidebar_button.svg" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
