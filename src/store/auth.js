import { defineStore } from "pinia";

import { onMounted, reactive, ref } from "vue";

import {
    getAuth,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth'

export const useAuthStore = defineStore('authorization', () => {
    const isLoggedIn = ref(false)
    const auth = getAuth();

    const userAuth = reactive({
        photo: '',
        name: '',
        mail: '',
        meta: {
            creation: '',
            lastSign: '',
        }
    })
    const userAuthName = ref('')

    const onAuthState = () => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                isLoggedIn.value = !user

                userAuthName.value = '';
                userAuth.name = '';
                userAuth.photo = '';
                userAuth.mail = '';
                userAuth.meta.creation = '';
                userAuth.meta.lastSign = '';
            }

            isLoggedIn.value = !!user

            userAuthName.value = user?.displayName;
            userAuth.name = user?.displayName;
            userAuth.photo = user?.photoURL;
            userAuth.mail = user?.email;
            userAuth.meta.creation = user?.metadata?.creationTime;
            userAuth.meta.lastSign = user?.metadata?.lastSignInTime;
        })
    }

    onMounted(() => {
        onAuthState()
    })


    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('Всё, вы не авторизованы')
            })
            .catch(() => {
                console.log('что-то пошло не так c signOut()')
            })
            .finally(() => {
                onAuthState()
            })
    }

    return {
        isLoggedIn,
        userAuth,
        userAuthName,
        onAuthState,
        handleSignOut
    }
})
