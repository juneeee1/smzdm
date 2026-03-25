# Master Plan - Valogeo 集团官网（第1版）

## 项目概述
Valogeo 是一家新加坡 AI 原生技术公司，专注于内容电商解决方案，面向合资企业合作伙伴。本项目为其集团官网，展示公司产品价值、合作模式、核心竞争力等信息。

## 设计规格
- **设计稿来源**: Figma 第1版（node: 70:458）
- **设计宽度**: 1920px（PC优先）
- **总页面高度**: ~12534px（长滚动单页）
- **主字体**: Poppins (标题/正文), Noto Sans (辅助)
- **主色调**:
  - 红色 #FA0F00 (品牌主色)
  - 蓝色 #005FFA (AIUC标识)
  - 金色 #D1B70C (Data标识)
  - 黑色 #000000 (标题)
  - 灰色 #737373 (正文)
  - 背景: #F9F9F9, #FFFFFF

## 页面结构（12个区块）
1. **Banner/Hero** - 深色背景，Logo+导航，大标题，标签，装饰光效
2. **Co-created with Valogeo** - 公司介绍，4个核心定位，手机截图
3. **Product Value** - AIUC/AIGC/DATA 三大产品卡片
4. **AI Foundation** - 4个AI能力卡片（Creation/Personalization/Monetization/Insights）
5. **Core Competence** - 垂直时间轴式核心能力展示
6. **Cooperation** - 三列卡片（We Bring/You Bring/Together）
7. **Steps** - 三阶段合作流程（评估/建设/上线）
8. **Value of Cooperation** - 合作价值，配图
9. **Partner** - 6宫格合作伙伴特质
10. **Contact Us** - 双卡片联系信息，滑动指示器
11. **CTA** - 品牌名+联系方式
12. **Footer** - Logo，版权，社交媒体链接

## 技术方案
- 纯 HTML + CSS + 原生 JavaScript
- Google Fonts (Poppins, Noto Sans)
- CSS 动画 + Intersection Observer 滚动动画
- 响应式设计（PC优先，兼容移动端）
- 可部署到 Vercel（静态站点）

## 交互要求
- 导航平滑滚动到对应区块
- 滚动入场动画（fade-in, slide-up）
- 卡片 hover 效果
- Contact 区域滑动/切换
- 导航栏滚动后背景变化
