# 品牌代理官網（多頁版）

已包含：
- 首頁 Banner 圖（assets/hero-banner.svg，可替換成你的照片）
- 品牌 Logo 區位置（assets/logo-*.svg，可替換成真實 Logo）
- 作品區（案例 / 型錄 / 展會卡片）
- 多頁版：index / brands / process / contact
- 聯絡表單（Netlify Forms；上線 Netlify 後可寄到你的信箱）

## 檔案結構
- index.html
- brands.html
- process.html
- contact.html
- styles.css
- script.js
- assets/
  - hero-banner.svg
  - logo-eteam.svg
  - logo-makita.svg
  - logo-hitachi.svg

## 上線方式（推薦 Netlify，表單最簡單）
1. 解壓縮後，把整個資料夾拖曳到 Netlify 介面上傳
2. 上線後到 Netlify 後台：Forms → Notifications → Email notifications
3. 填入你的信箱（czhenyu516@gmail.com），就能收到表單通知

## GitHub Pages（可上線，但表單不會寄信）
1. 建立 GitHub repo，把檔案放根目錄
2. Settings → Pages → Deploy from a branch → main / root
3. 表單要寄信：請改用 Formspree（把 contact.html 的 form 加上 action=...）
