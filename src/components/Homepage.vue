<template>
  <div class="homepage flex-1 flex flex-col items-center align-center">
    <div class="homepage-content">
      <div v-for="table in tables" :key="table.key" class="table">
        <div class="table-button">
          <div class="table-icon">
            <svg width="128" height="128" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fill="#000000" d="M22 7.5C22 5.57 17.52 4 12 4S2 5.57 2 7.5c0 1.81 3.95 3.31 9 3.48V15H9.35c-.82 0-1.55.5-1.86 1.26L6 20h2l1.2-3h5.6l1.2 3h2l-1.5-3.74c-.3-.76-1.04-1.26-1.85-1.26H13v-4.02c5.05-.17 9-1.67 9-3.48zM12 6c4.05 0 6.74.86 7.72 1.5C18.74 8.14 16.05 9 12 9s-6.74-.86-7.72-1.5C5.26 6.86 7.95 6 12 6z"/>
            </svg>
          </div>
          <div class="table-name">{{table.name}}</div>
        </div>
      </div>
    </div>
    <div class="noti-box">
      <div class="content w-full h-full">
        <Alert message="Bàn 1: Có order mới!!" type="success" class="mb-2 cursor-pointer"/>
        <Alert message="Bàn 5: Có order mới!!" type="success" class="mb-2 cursor-pointer"/>
      </div>
    </div>
  </div>
</template>

<script>
import { Alert } from 'ant-design-vue'

export default {
  data() {
    return {
      tables: [
        {
          name: 'Bàn 1',
          key: 'table-1'
        },
        {
          name: 'Bàn 2',
          key: 'table-2'
        },
        {
          name: 'Bàn 3',
          key: 'table-3'
        },
        {
          name: 'Bàn 4',
          key: 'table-4'
        },
        {
          name: 'Bàn 5',
          key: 'table-5'
        },
        {
          name: 'Bàn 6',
          key: 'table-6'
        }
      ]
    }
  },
  components: {
    Alert
  }
}
</script>