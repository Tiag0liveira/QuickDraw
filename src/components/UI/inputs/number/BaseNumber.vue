<template>
  <div class="number-participants">
    <button id="decrease">-</button>
    <input type="number" id="participantInput" value="2" min="2" max="32" />
    <button id="increase">+</button>
  </div>
</template>

<script></script>

<style scoped>
.number-participants {
  background-color: #444444;
  display: flex;
  border-radius: 10px;
  height: 32px;
  width: fit-content;
}

#decrease,
#increase {
  background-color: #666;
  border-radius: 10px;
  outline: none;
  border: none;
  color: #cccccc;
  height: 32px;
  width: 48px;
  cursor: pointer;
}

#decrease:hover,
#increase:hover {
  outline: 1px solid #2ed573;
}

#participantInput {
  background-color: transparent;
  outline: none;
  border: none;
  color: #cccccc;
  text-align: center;
  height: 32px;
  width: 80px;
}

#participantInput::-webkit-outer-spin-button,
#participantInput::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
