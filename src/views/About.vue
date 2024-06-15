<template>
    <div>
        About: {{ id }}
        <button @click="pre">pre</button>
        <button @click="next">next</button>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

defineProps({
    id: String
})

const router = useRouter();
function pre() {
    router.go(1)
}

function next() {
    router.go(-1)
}
</script>