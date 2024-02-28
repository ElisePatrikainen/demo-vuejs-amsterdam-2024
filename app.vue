<template>
  <div class="mx-auto w-full">
    <!-- Left sidebar & main wrapper -->
    <TheHeader />
    <div class="flex">
      <div class="w-84 grow border-r border-gray-200 px-4 py-6">
        <!-- Left column area -->
        <TheSidebar />
      </div>
      <div>
        <NuxtLoadingIndicator />
        <div class="px-4 py-6">
          <NuxtPage />
        </div>
      </div>
    </div>
  </div>
</template>