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
  background: #444444;
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
  outline: 2px solid #2ed573;
}

.div-colors label:nth-child(1) div {
  background: #cccccc;
}

.div-colors label:nth-child(2) div {
  background: #1f1f1f;
}

.div-colors label:nth-child(3) div {
  background: #2ed573;
}

.div-colors label:nth-child(4) div {
  background: #4a90e2;
}

.div-colors label:nth-child(5) div {
  background: #c0392b;
}

.div-colors label:nth-child(6) div {
  background: #ffc300;
}
</style>
