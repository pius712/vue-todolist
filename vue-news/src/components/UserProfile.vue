<template>
  <div class="user-container">
    <div>
      <i class="fas fa-user"></i>
    </div>
    <div class="user-description">
      <!-- <div>username: {{ info.id }}</div> -->
      <!-- template tag로 분기하지 않는 방법 -->
      <div>
        <slot name="username"></slot>
      </div>
      <!-- <router-link :to="`/user/${fetchedItem.user}`">
        {{ user.id }}
      </router-link>-->
      <div class="time">
        <!-- time: {{ info.created }} -->
        <slot name="time"></slot>
        <slot name="karma"></slot>
      </div>
      <!-- <div> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  // props: {
  //   info: {
  //     type: Object
  //   }
  // }
};
</script>

<style>
.user-container {
  display: flex;
  align-items: center;
  padding: 1rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>