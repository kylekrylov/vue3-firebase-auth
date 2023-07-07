<script setup>
import Section from "@/components/Organisms/Section.vue";
import { reactive } from "vue";

const requestURL = 'https://jsonplaceholder.typicode.com/users'

const body = {
  name: "Kyle",
  age: 35
}


const user = reactive({
  name: '',
  age: '',
  id: ''
})

const sendRequest = (method, url, body = null) => {
  const headers = {
    'Content-Type': 'application/json'
  }
  
  const params = {
    method: method,
    body: JSON.stringify(body),
    headers: headers
  }
  
  const isMethod = method !== 'GET' ? params : null
  
  return fetch(url, isMethod)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      
      return response.json().then(error => {
        const responseError = new Error('Что-то пошло не так')
        responseError.data = error
        throw responseError
      })
    })
}

sendRequest('POST', requestURL, body)
  .then(data => {
    setTimeout(()=> {
    user.id = data.id
    }, 100)
    setTimeout(()=> {
      user.name = data.name
    }, 1500)
    setTimeout(()=> {
    user.age = data.age
    }, 1000)
  })
  .catch(err => console.log(err))

// sendRequest('GET', requestURL)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))


</script>

<template>
  <Section center>
    <div class="fetch">
      <ul class="fetch__list" >
        <li v-if="user.id">
          id: {{ user.id }}
        </li>
        <li v-if="user.name">
          name: {{ user.name }}
        </li>
        <li v-if="user.age">
          age: {{ user.age }}
        </li>
      </ul>
    </div>
  </Section>
</template>

<style scoped lang="scss">
.fetch {
  display: flex;
  flex-direction: column;
  min-width: 240px;
}
</style>
