const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const videosDir = path.join(__dirname, '../public/videos');
const thumbnailsDir = path.join(__dirname, '../public/temp-images-new');

// 确保缩略图目录存在
if (!fs.existsSync(thumbnailsDir)) {
  fs.mkdirSync(thumbnailsDir, { recursive: true });
}

// 获取所有视频文件
const videoFiles = fs.readdirSync(videosDir)
  .filter(file => file.endsWith('.mp4'));

// 为每个视频生成缩略图
videoFiles.forEach(videoFile => {
  const videoPath = path.join(videosDir, videoFile);
  const thumbnailPath = path.join(thumbnailsDir, `${path.parse(videoFile).name}.jpg`);
  
  // 使用 ffmpeg 在视频的第 1 秒处截取一帧
  const command = `ffmpeg -i "${videoPath}" -ss 00:00:10 -vframes 1 "${thumbnailPath}"`;
  
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`处理视频 ${videoFile} 时出错:`, error);
      return;
    }
    console.log(`成功为 ${videoFile} 生成缩略图`);
  });
}); 