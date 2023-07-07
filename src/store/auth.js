import { defineStore } from "pinia";

import { computed, onMounted, reactive, ref } from "vue";

const router = useRouter();
import { useRouter } from "vue-router";
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

export const useAuthStore = defineStore('authorization', () => {
    const router = useRouter();
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

    onMounted(() => {
        onAuthStateChanged(auth, (user) => {
            isLoggedIn.value = !!user
            userAuth.name = user.displayName
            userAuth.photo = user.photoURL
            userAuth.mail = user.email
            userAuth.meta.creation = user.metadata.creationTime
            userAuth.meta.lastSign = user.metadata.lastSignInTime
            console.log(user)
            console.log(userAuth)
        })
    })

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                router.push('/')
                console.log('Всё, вы не авторизованы')
            })
            .catch(() => {
                console.log('что-то пошло не так c signOut()')
            })
    }

    return {
        isLoggedIn,
        userAuth,
        handleSignOut,
    }
})
