<template>
  <div class="mx-12 my-12 w-3/4">
    <div class="flex w-full justify-center">
      <nuxt-link to="/mypage/reservations" type="button" class="flex justify-center items-center select-none bg-yellow-400 border-2 text-white
      text-xl font-bold p-2 mx-8 rounded-full shadow h-48 w-48 hover:bg-yellow-300 focus:outline-none
      focus:shadow-outline">
        予約履歴
      </nuxt-link>
      <nuxt-link to="/mypage/likes" type="button" class="flex justify-center items-center select-none bg-yellow-400 border-2 text-white
      text-xl font-bold p-2 mx-8 rounded-full shadow h-48 w-48 hover:bg-yellow-300 focus:outline-none
      focus:shadow-outline">
        お気に入り
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'mypage',
}
</script>