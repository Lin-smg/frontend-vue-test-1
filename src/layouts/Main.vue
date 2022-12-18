<template>
    <div>
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-info p-2">
                <a class="navbar-brand me-auto" href="#">Players</a>

                <span class="navbar-text">
                    {{store.getUserName}}
                </span>
                <button class="btn btn-outline-danger ms-2" @click="logout">Logout</button>
            </nav>
        </header>
        <main>
            <RouterView />
        </main>
    </div>
</template>

<script setup>

import { RouterView , useRouter} from 'vue-router';
import { useAuthStore } from '../store/auth';

const store = useAuthStore();
const router = useRouter();

function logout() {
    store.logout();
    router.replace('/login')

}
</script>