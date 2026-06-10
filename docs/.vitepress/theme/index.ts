import DefaultTheme from 'vitepress/theme'
import {injectSpeedInsights} from '@vercel/speed-insights'
import {inject} from "@vercel/analytics"

// 流量分析
inject()
// 性能监控
injectSpeedInsights()

export default DefaultTheme