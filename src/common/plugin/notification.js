import { notification } from 'ant-design-vue'
import { h } from 'vue'

import CloneIcon from '@/assets/close.svg?raw'

export default {
  install(app, options) {
    const defaultConfig = {
      closeIcon: () => h('span', { innerHTML: CloneIcon })
    }

    app.mixin({
      created() {
        if(!this.$notification) {
          this.$notification = {
            success: config => notification.success({ ...config, ...defaultConfig }),
            warning: config => notification.warning({ ...config, ...defaultConfig }),
            error: config => notification.error({ ...config, ...defaultConfig }),
            info: config => notification.info({ ...config, ...defaultConfig }),
            destroy: () => notification.destroy()
          }
        }
      }
    })
  }
}
