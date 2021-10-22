<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <newChatForm />
  </div>
</template>

<script>
import newChatForm from "../components/newChatForm.vue";
import ChatWindow from "../components/ChatWindow.vue";
import { watch } from "@vue/runtime-core";
import Navbar from "../components/Navbar.vue";
import getUser from "../Compousable/getUser";
import { useRouter } from "vue-router";
export default {
  components: { Navbar, newChatForm, ChatWindow },
  setup() {
    const { user } = getUser();
    const router = useRouter();
    watch(user, () => {
      if (!user.value) {
        router.push({ name: "Welcome" });
      }
    });
  },
};
</script>

<style></style>