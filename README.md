export const readme = `# WON96 Blog (Astro)

## 本地开发
```bash
pnpm i
pnpm dev
```

## 构建
```bash
pnpm build
```

## Cloudflare Pages 部署
1. 推送到 GitHub 仓库（例如 won96-blog）。
2. Cloudflare Dashboard → Pages → Create project → 连接该仓库。
3. Build command: \\\'astro build\\\'；Output directory: \\\'dist\\\'。
4. 绑定自定义域名：blog.won96.com。
5. SSL 设为 Full (strict)，Cache Rules 可对 /posts/* 设较长 TTL。

## SEO 提示
- 在 /about 与页脚放出同站链接（support/promo/主站），形成品牌主题集群。
- 关键占位页 (/login, /register, /app, /agent, /customer-service) 放出清晰引导到主站相应模块。
- 提交 Search Console，并提交 https://blog.won96.com/sitemap.xml`;
