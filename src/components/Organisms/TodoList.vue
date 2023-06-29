<script setup>
import { ref, onMounted, computed, watch } from "vue";

const todos = ref([])
const name = ref('')

const input_content = ref('')
const input_category = ref(null)

const todos_asc = computed(() => todos.value.sort((a, b) => b.created - a.created))

const addTodo = () => {
  if (input_content.value.trim() === '' || input_category.value === null) return
  
  todos.value.push({
    inputContent: input_content.value,
    category: input_category.value,
    done: false,
    created: new Date().getTime()
  })
  
  input_content.value = ''
  input_category.value = null
}
const removeTodo = todo => {
  todos.value = todos.value.filter(t => t !== todo)
}

watch(todos, (newVal) => {
  localStorage.setItem('todos', JSON.stringify(newVal))
}, {deep: true})

watch(name, (newVal) => {
  localStorage.setItem('name', newVal)
})
onMounted(() => {
  name.value = localStorage.getItem('name') || ''
  todos.value = JSON.parse(localStorage.getItem('todos')) || []
})

</script>

<template>
  <div class="create-todo">
    <form @submit.prevent="addTodo">
      <div class="create-todo__title">
        what's u todo list?
      </div>
      <input
        class="create-todo__make"
        type="text"
        placeholder="make"
        v-model="input_content"
      />
      <div class="create-todo__title">
        Pick a category
      </div>
      <div class="create-todo__options options">
        <label class="create-todo__label">
          <input
            type="radio"
            name="category"
            value="business"
            v-model="input_category"
          />
          <span class="create-todo__bubble bubble"/>
          <span class="create-todo__text">
            Business
          </span>
        </label>
        <label class="create-todo__label">
          <input
            type="radio"
            name="category"
            value="personal"
            v-model="input_category"
          />
          <span class="create-todo__bubble bubble personal"/>
          <span class="create-todo__text">
            Personal
          </span>
        </label>
      </div>
      <input type="submit" value="Add todo">
    </form>
  </div>
  <div class="todo-list">
    <h3>TODO LIST</h3>
    <div class="lost">
      <div
        v-for="todo in todos_asc"
        :class="`todo-item ${todo.done && 'done'}`"
      >
        <label class="options__label">
          <input type="checkbox" v-model="todo.done"/>
          <span :class="`bubble ${todo.category}`"/>
        </label>
        <div class="todo-content">
          <input type="text" v-model="todo.inputContent">
        </div>
        <div class="actions">
          <button class="delete" @click="removeTodo(todo)">
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.create-todo {
  input[type='text'] {
    display: block;
    width: 100%;
    padding: 1rem 1.5rem;
    margin-bottom: 1.5rem;
    box-shadow: var(--shadow);
    background-color: #fff;
    border-radius: 0.5rem;
    color: var(--dark);
    font-size: 1.125rem;
  }
  
  input[type='submit'] {
    display: block;
    width: 100%;
    padding: 1rem 1.5rem;
    box-shadow: var(--personal-glow);
    background-color: var(--primary);
    border-radius: 0.5rem;
    cursor: pointer;
    color: #fff;
    font-size: 1.125rem;
    transition: 0.2s ease-in-out;
    
    &:hover {
      opacity: 0.75;
    }
  }
  
  &__options {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 1.5rem;
  }
  
  
  &__label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    box-shadow: var(--shadow);
    background-color: #fff;
    border-radius: 0.5rem;
    cursor: pointer;
    
    input {
      display: none;
    }
  }
  
  &__text {
    margin-top: 1rem;
    color: var(--dark);
    font-size: 1.125rem;
  }
}

.bubble {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  box-shadow: 0 0 6px var(--business-glow);
  border: 2px solid var(--business);
  border-radius: 50%;
  
  &::after {
    display: block;
    width: 0;
    height: 0;
    box-shadow: 0 0 6px var(--business-glow);
    background-color: var(--business);
    border-radius: 50%;
    opacity: 0;
    transition: 0.2s ease-in-out;
    content: '';
  }
  
  &.personal {
    box-shadow: var(--personal-glow);
    border-color: var(--personal);
    
    &::after {
      box-shadow: 0 0 10px var(--personal-glow);
      background-color: var(--personal);
    }
  }
}

input:checked ~ .bubble::after {
  width: 10px;
  height: 10px;
  opacity: 1;
}

.todo-list {
  .list {
    margin: 1rem 0;
  }
  
  .options {
    &__label {
      display: block;
      margin-right: 1rem;
      cursor: pointer;
      
      input {
        display: none;
      }
    }
  }
  
}

.todo-item {
  display: flex;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: var(--shadow);
  background-color: #fff;
  border-radius: 0.5rem;
  
  .todo-content {
    flex: 1 1 100%;
    width: 100%;
    margin-right: 1rem;
    
    input {
      width: 100%;
      color: var(--dark);
      font-size: 1.125rem;
    }
  }
  
  .actions {
    display: flex;
    align-items: center;
    
    button {
      display: block;
      padding: 0.5rem;
      border-radius: 0.25rem;
      cursor: pointer;
      color: #fff;
      transition: 0.2s ease-in-out;
      
      &:hover {
        opacity: 0.75;
      }
    }
    
    .edit {
      margin-right: 0.5rem;
      background-color: var(--primary);
    }
    
    .delete {
      background-color: var(--danger);
    }
  }
  
  &.done {
    .todo-content {
      input {
        color: var(--grey);
        text-decoration: line-through;
      }
    }
  }
}

@media (max-width: 576px) {
  
  .create-todo {
    .options {
      // .options__label
      &__label {
        padding: 1rem 0.25rem;
        
        div {
          margin-top: 0.25rem;
        }
      }
    }
  }
}


</style>
