import DefaultTheme from 'vitepress/theme'
import {injectSpeedInsights} from '@vercel/speed-insights'

// 在页面中注入性能监控脚本
injectSpeedInsights()

export default DefaultTheme