import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import 'semantic-ui-css/semantic.min.css'
import Swal from 'sweetalert2'

const app = createApp(App)
app.config.globalProperties.$swal = Swal

app.use(router).mount('#app')