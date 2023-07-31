import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import path from 'path';

const app = express();

// Vite의 프록시 설정에 따라 프록시 미들웨어 설정
app.use(
  '/v1',
  createProxyMiddleware({
    target: 'http://ec2-3-34-80-242.ap-northeast-2.compute.amazonaws.com:8080',
    changeOrigin: true,
  }),
);

// Vite로 빌드한 정적 파일 제공
app.use(express.static(path.resolve(__dirname, 'dist')));

// 모든 요청을 index.html로 라우팅
app.get('*', (req, res) => {
  console.log(req);
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

const PORT: number = Number(process.env.PORT) || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
