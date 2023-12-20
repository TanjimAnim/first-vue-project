<template>
  <div class="flex h-screen">
    <!-- Navbar -->

    <!-- Sidebar -->

    <Sidebar />
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
import Sidebar from "../components/Sidebar/Sidebar.vue";
import DesktopNavbar from "../components/Navbar/DesktopNavbar.vue";
import MobileNavBar from "@/components/Navbar/MobileNavBar.vue";
import MaryJane from "../components/Dashboard/MaryJane.vue";
import CheckupElements from "../components/Dashboard/CheckupElements.vue";
import TodoList from "../components/Dashboard/TodoList.vue";
import AppointmentList from "../components/Dashboard/AppointmentList.vue";
import CovidUpdate from "@/components/Dashboard/CovidUpdate.vue";
export default {
  name: "HomePageLayout",
  // Add any necessary props, data, methods, etc., as needed
  components: {
    Sidebar,
    DesktopNavbar,
    MobileNavBar,
    MaryJane,
    CheckupElements,
    TodoList,
    AppointmentList,
    CovidUpdate,
  },
};
</script>

<!-- No need for additional styles -->
