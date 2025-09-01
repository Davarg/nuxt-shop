<script setup lang="ts"></script>

<template>
  <header class="header-container">
    <NuxtLink to="/">
      <div class="header-logo">
        <span>(</span>
        <span>☭</span>
        <span> ͜ʖ </span>
        <span>☭</span>
        <span>)</span>
      </div>
    </NuxtLink>
    <div class="header-navigation">
      <div class="header-nav-titles">
        <NuxtLink to="/catalog" class="header-nav-title">Магазин</NuxtLink>
        <NuxtLink to="/about" class="header-nav-title">О нас</NuxtLink>
        <div class="header-nav-border"></div>
      </div>
      <div class="header-nav-icons">
        <NuxtLink to="/" class="header-nav-icon">
          <Icon name="simple-line-icons:magnifier" size="1.3125rem" />
        </NuxtLink>
        <NuxtLink to="/cart" class="header-nav-icon">
          <Icon name="simple-line-icons:basket" size="1.3125rem" />
        </NuxtLink>
        <NuxtLink to="/favorites" class="header-nav-icon">
          <Icon name="simple-line-icons:heart" size="1.3125rem" />
        </NuxtLink>
        <NuxtLink to="/profile" class="header-nav-icon">
          <Icon name="simple-line-icons:emotsmile" size="1.3125rem" />
        </NuxtLink>
      </div>      
    </div>
  </header>
</template>

<style scoped>
.header-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-color);
}

.header-navigation {
  display: flex;
  flex-direction: row;
  gap: 62px;
}

.header-navigation a {
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}

.header-navigation a.router-link-active {
  border-bottom: 2px solid var(--bg-inverse-color);
}

.header-nav-icons {
  display: flex;
  flex-direction: row;
  gap: 39px;
  align-items: center;
  justify-content: center;
}

.header-nav-icon:hover {
  color: var(--bg-inverse-color);
}

.header-nav-icon:hover {
  color: var(--bg-hover-inverse-color);
}

.header-nav-titles {
  display: flex;
  flex-direction: row;
  gap: 59px;
  align-items: center;
  justify-content: center;
}

.header-nav-border {
  background-color: var(--font-tertiary-color);
  height: 17px;
  width: 1px;
}

.header-nav-title {
  font-size: 1rem;
  font-weight: 400;
  color: var(--bg-inverse-color);
}

.header-nav-title:hover {
  color: var(--bg-hover-inverse-color);
}

.header-logo {
  font-size: 2rem;
}

@keyframes header-logo-crazy-shake {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
    color: #f7e842;
  }
  25% {
    transform: translate(-5px, -5px) rotate(-5deg);
    color: #8bf346;
  }
  50% {
    transform: translate(5px, 5px) rotate(5deg);
    color: transparent;
  }
  75% {
    transform: translate(5px, -5px) rotate(5deg);
    color: #ff2400;
  }
}

.header-logo span {
  display: inline-block;
  animation: header-logo-crazy-shake 0.5s infinite alternate;
}

.header-logo span:nth-child(1) {
  animation-delay: 0.1s;
}
.header-logo span:nth-child(2) {
  animation-delay: 0.2s;
}
.header-logo span:nth-child(3) {
  animation-delay: 0.3s;
}
.header-logo span:nth-child(4) {
  animation-delay: 0.4s;
}
.header-logo span:nth-child(5) {
  animation-delay: 0.5s;
}
</style>
