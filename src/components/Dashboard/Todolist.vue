<script></script>

<template>
  <div class="w-10/12 rounded-md shadow-md p-4">
    <div>To-Do List</div>
    <div class="flex items-start gap-2">
      <input />
      <button
        class="flex items-center gap-2 p-1 rounded-md"
        style="
          background: linear-gradient(101deg, #ff7594 -6.58%, #ff7c65 102.46%);
        "
      >
        <img src="/checkmark.svg" />
        Add
      </button>
    </div>
    <div class="my-2">
      <div class="flex items-center gap-2 justify-between">
        <fieldset>
          <div>
            <input type="checkbox" id="select-all" name="select-all" checked />
            <label for="scales">Select All</label>
          </div>
        </fieldset>
        <button
          class="flex items-center gap-2 p-1 rounded-md"
          style="
            background: linear-gradient(
              101deg,
              #ff7594 -6.58%,
              #ff7c65 102.46%
            );
          "
        >
          <img src="/checkmark.svg" />
          Done
        </button>
      </div>
      <fieldset>
        <div>
          <input type="checkbox" id="select-all" name="select-all" checked />
          <label for="scales"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <span>Last Added: 10 sep 2022</span></label
          >
        </div>
        <div>
          <input type="checkbox" id="select-all" name="select-all" checked />
          <label for="scales"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <span>Last Added: 10 sep 2022</span></label
          >
        </div>
        <div>
          <input type="checkbox" id="select-all" name="select-all" checked />
          <label for="scales"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <span>Last Added: 10 sep 2022</span></label
          >
        </div>
        <div>
          <input type="checkbox" id="select-all" name="select-all" checked />
          <label for="scales"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <span>Last Added: 10 sep 2022</span></label
          >
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList",
};
</script>
