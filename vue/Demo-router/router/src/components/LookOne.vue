<template>
  <div class="look">
    {{message}}
    <p>接受参数：{{$route.params.id}}</p>
  </div>
</template>

<script>
export default {
  name: "LookOne",
  data() {
    return {
      message: "World"
    };
  }
};
</script>
