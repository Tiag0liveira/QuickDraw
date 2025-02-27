<template>
  <div class="div-colors">
    <label>
      <input type="radio" name="colors" class="color-radio" checked />
      <div></div>
    </label>
    <label>
      <input type="radio" name="colors" class="color-radio" />
      <div></div>
    </label>
    <label>
      <input type="radio" name="colors" class="color-radio" />
      <div></div>
    </label>
    <label>
      <input type="radio" name="colors" class="color-radio" />
      <div></div>
    </label>
    <label>
      <input type="radio" name="colors" class="color-radio" />
      <div></div>
    </label>
    <label>
      <input type="radio" name="colors" class="color-radio" />
      <div></div>
    </label>
  </div>
</template>

<script></script>

<style scoped>
.color-radio {
  display: none;
}

.color-radio:checked + div {
  outline: 2px solid var(--main-color);
}
.div-colors {
  background: var(--navbar-color);
  border-radius: 10px;
  padding: 12px;
  width: fit-content;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.div-colors label div {
  width: 32px;
  height: 32px;
  border-radius: 100%;
  cursor: pointer;
}

.div-colors label div:hover {
  outline: 2px solid var(--main-color);
}

.div-colors label:nth-child(1) div {
  background: var(--gray-color);
}

.div-colors label:nth-child(2) div {
  background: var(--background-color);
}

.div-colors label:nth-child(3) div {
  background: var(--main-color);
}

.div-colors label:nth-child(4) div {
  background: var(--blue-color);
}

.div-colors label:nth-child(5) div {
  background: var(--red-color);
}

.div-colors label:nth-child(6) div {
  background: var(--yellow-color);
}
</style>
