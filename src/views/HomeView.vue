<script lang="ts">
import { ref, computed } from "vue";
import DesktopNavbar from "../components/Navbar/DesktopNavbar.vue";
import MobileNavBar from "@/components/Navbar/MobileNavBar.vue";
import MaryJane from "../components/Dashboard/MaryJane.vue";
import CheckupElements from "../components/Dashboard/CheckupElements.vue";
import Todolist from "@/components/Dashboard/Todolist.vue";
import AppointmentList from "../components/Dashboard/AppointmentList.vue";
import CovidUpdate from "@/components/Dashboard/CovidUpdate.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
export default {
  name: "HomePageLayout",
  // Add any necessary props, data, methods, etc., as needed
  components: {
    DesktopNavbar,
    MobileNavBar,
    MaryJane,
    CheckupElements,
    Todolist,
    AppointmentList,
    CovidUpdate,
    Sidebar,
  },
  setup() {
    const collapsed = ref(true);
    const showSidebar = ref(true);
    const gridClasses = computed(() => ({
      "grid min-h-screen": true,
      "grid-cols-sidebar": !collapsed.value,
      "grid-cols-sidebar-collapsed": collapsed.value,
      "transition-[grid-template-columns] duration-300 ease-in-out": true,
    }));
    const toggleCollapsed = () => {
      collapsed.value = !collapsed.value;
    };
    const toggleSidebar = () => {
      showSidebar.value = !showSidebar.value;
    };

    return {
      collapsed,
      showSidebar,
      gridClasses,
      toggleCollapsed,
      toggleSidebar,
    };
  },
};
</script>
<template>
  <div :class="gridClasses">
    <Sidebar
      :collapsed="collapsed"
      @toggleCollapsed="toggleCollapsed"
      :shown="showSidebar"
    />
    <div>
      <!-- Dashboard Content -->

      <!-- Your dashboard content goes here -->
      <div>
        <DesktopNavbar />
        <MobileNavBar />
      </div>
      <!-- Add dashboard components, charts, data, etc., as needed -->
      <MaryJane />
      <CheckupElements />
      <Todolist />
      <AppointmentList />
      <CovidUpdate />
    </div>
  </div>
</template>

<!-- No need for additional styles -->
