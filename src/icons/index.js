import svgIcon from '@/components/svgIcon/index.vue'
import 'virtual:svg-icons-register'

export function loadSvg(app) {
  app.component('svgIcon', svgIcon)
}
