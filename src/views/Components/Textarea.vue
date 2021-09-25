<template>
  <div class="row">
      <div class="col">
          <tokyo-card header="Example Textarea">
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus inventore quod totam suscipit possimus numquam. At amet ut soluta. Sint quia, nihil tenetur optio quisquam provident porro rerum dicta perferendis!
              </p>
              <tokyo-textarea v-model="text" label="Example Textarea"></tokyo-textarea>
              <p>
                  Text : {{text}}
              </p>
          </tokyo-card>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            text: null
        }
    }
}
</script>

<style>

</style>