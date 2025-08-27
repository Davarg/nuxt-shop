<script setup lang="ts"></script>

<template>
  <footer class="footer-container">
    <div class="footer-row">
      <div class="pages">
        <NuxtLink to="#" class="page-link"> Контакты </NuxtLink>
        <NuxtLink to="#" class="page-link"> Условия покупки </NuxtLink>
        <NuxtLink to="#" class="page-link"> Доставка и возврат </NuxtLink>
      </div>
      <div class="input-container">
        <CommonInput
          :with-accessory="true"
          placeholder="Ваш email для акций и предложений"
        />
      </div>
    </div>
    <div class="footer-row">
      <div class="credits">© 2025 (☭ ͜ʖ ☭)</div>
      <div class="icons">
        <NuxtLink to="#">
          <Icon class="icon" name="custom:vk-messenger" size="1.125rem" />
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
  border-top: 1px solid var(--border-color);
  padding-top: 8px;
}

.footer-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.pages {
  display: flex;
  flex-direction: row;
  gap: 29px;
  flex-wrap: wrap;
  font-weight: 400;
  font-size: 1rem;
  text-transform: uppercase;
  color: var(--font-tertiary-color);
}

.page-link:hover {
  color: var(--bg-hover-inverse-color);
}

.credits {
  font-weight: 400;
  font-size: 1rem;
  color: var(--font-color);
}

.icons {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.input-container {
  width: 27.5vw;
}

.icons .icon {
  color: var(--font-tertiary-color);
}

.icons .icon:hover {
  color: var(--bg-hover-inverse-color);
}
</style>
