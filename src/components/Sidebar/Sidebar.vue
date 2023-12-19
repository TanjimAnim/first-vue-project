<script setup></script>
<template>
  <div class="hidden sm:block">
    <div class="p-1 shadow-md rounded-md w-7 h-7 m-auto my-8">
      <img src="/fi_menu.png" alt="/fi_menu.png" class="" />
    </div>
    <div class="p-4 flex flex-col gap-10 cursor-pointer my-12">
      <!-- Your sidebar content goes here -->

      <div>
        <img src="/Icon_home.svg" alt="/Icon_home.svg" />
      </div>
      <div>
        <img src="/Group (1).svg" alt="/Group (1).svg" />
      </div>
      <div>
        <img src="/Group.svg" alt="/Group.svg" />
      </div>
      <div>
        <img src="/Icon_Account_setting.svg" alt="/Icon_Account_setting.svg" />
      </div>
      <div>
        <img src="/Icon_history.svg" alt="/Icon_history.svg" />
      </div>
      <!-- Add more sidebar items as needed -->
    </div>
    <div class="flex flex-col my-10 m-auto justify-center items-center">
      <button><img src="/sidebar_button.svg" /></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  // Add any necessary props, data, methods, etc., as needed
};
</script>

<!-- No need for additional styles -->
