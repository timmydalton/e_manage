import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style/index.sass'
import 'tailwindcss/tailwind.css'

import {
  Button,
  Popover,
  Tooltip,
  Input,
  Dropdown,
  Menu,
  Select,
  SelectOption,
  Table,
  Modal,
  Avatar,
  Collapse,
  Upload,
  Radio,
  AutoComplete,
  Pagination,
  Checkbox,
  Tabs,
  Anchor,
  Switch,
  SelectOptGroup,
  Card,
  InputNumber,
  Badge,
  DatePicker,
  TimePicker,
  Empty,
  Divider,
  Slider,
  Breadcrumb,
  Drawer,
  Space,
  Tag,
  Progress,
  Spin,
  Rate,
  Steps,
  Step,
  Cascader,
  Alert,
  List,
  TreeSelect,
  Tree,
  Timeline
} from 'ant-design-vue'

// import 'ant-design-vue/dist/antd.css'

const app = createApp(App)

app.use(router)
app.mount('#app')

app.use(Button)
app.use(Popover)
app.use(Tooltip)
app.use(Input)
app.use(Dropdown)
app.use(Menu)
app.use(Select)
app.use(Table)
app.use(Modal)
app.use(Avatar)
app.use(Collapse)
app.use(Radio)
app.use(AutoComplete)
app.use(Tabs)
app.use(Card)
app.use(InputNumber)
app.use(Badge)
app.use(DatePicker)
app.use(TimePicker)
app.use(Progress)
app.use(Space)
app.use(Tag)
app.use(List)

app.use(Notification)
app.use(Message)
app.use(Pagination)
app.use(Checkbox)
app.use(Anchor)
app.use(Switch)
app.use(Empty)
app.use(Divider)
app.use(Slider)
app.use(Loading)
app.use(Breadcrumb)
app.use(Drawer)
app.use(VueApexCharts)
app.use(Spin)
app.use(Rate)
app.use(Steps)
app.use(Step)
app.use(Cascader)
app.use(Alert)
app.use(List)
app.use(TreeSelect)
app.use(Tree)
app.use(Timeline)