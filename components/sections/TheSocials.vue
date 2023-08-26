<template>
  <div class="flex justify-between items-center">
    <div class="flex gap-1">
      <SocialIcon
        title="Github"
        link="https://github.com/vlxdsxd"
        icon="ant-design:github-filled"
      />
      <SocialIcon
        title="Instagram"
        link="https://instagram.com/vlxdsxd?igshid=MzRlODBiNWFlZA=="
        icon="ant-design:instagram-outlined"
      />
    </div>
    <ActionButton link="mailto:vlxdoncloudnine@gmail.com">Email Me</ActionButton>
  </div>
</template>

<script setup lang="ts">
import ActionButton from "../ui/ActionButton.ts";
import SocialIcon from "../ui/SocialIcon.ts";
</script>
