<template>
  <div class="flex h-screen">
    <div :class="gridClasses">
      <Sidebar
        :collapsed="collapsed"
        @toggleCollapsed="toggleCollapsed"
        :shown="showSidebar"
      />
    </div>
    <!-- Dashboard Content -->
    <main class="flex-1 p-4">
      <!-- Your dashboard content goes here -->
      <div>
        <DesktopNavbar />
        <MobileNavBar />
      </div>
      <!-- Add dashboard components, charts, data, etc., as needed -->
      <MaryJane />
      <CheckupElements />
      <TodoList />
      <AppointmentList />
      <CovidUpdate />
    </main>
  </div>
</template>
<script lang="ts">
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
  data() {
    return {
      collapsed: false,
      showSidebar: true,
    };
  },
  computed: {
    gridClasses() {
      return {
        "grid bg-zinc-100 min-h-screen": true,
        "grid-cols-sidebar": !this.collapsed,
        "grid-cols-sidebar-collapsed": this.collapsed,
        "transition-[grid-template-columns] duration-300 ease-in-out": true,
      };
    },
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
  },
};
</script>

<!-- No need for additional styles -->
