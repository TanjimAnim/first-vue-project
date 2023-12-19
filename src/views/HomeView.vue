<script setup>
import Sidebar from "../components/Sidebar/Sidebar.vue";
import DesktopNavbar from "../components/Navbar/DesktopNavbar.vue";
import MobileNavBar from "@/components/Navbar/MobileNavBar.vue";
</script>

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
      <h2 class="text-2xl font-semibold mb-4">Dashboard</h2>
      <img src="/fi_menu.png" />
      <!-- Add dashboard components, charts, data, etc., as needed -->
    </main>
  </div>
</template>
<script>
export default {
  name: "HomePageLayout",
  // Add any necessary props, data, methods, etc., as needed
  components: {
    Sidebar,
  },
};
</script>

<!-- No need for additional styles -->
