import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React",
      "Hello": "Hello",
      "QA": "QA",
      "This is a page where users can see common questions and answers about their channel.": "This is a page where users can see common questions and answers about their channel.",
      "1. How to upload my video?": "1. How to upload my video?",
      "You can upload video by clicking the upload button on your channel and following the steps to upload.": "You can upload video by clicking the upload button on your channel and following the steps to upload.",
      "2. How to modify my playlist?": "2. How to modify my playlist?",
      "You can modify your playlist on your user page by clicking the editing button inside the playlist to modify the title, description, or videos inside it.": "You can modify your playlist on your user page by clicking the editing button inside the playlist to modify the title, description, or videos inside it.",
      "3. Where is the parental control function?": "3. Where is the parental control function?",
      "You can find the parental control module in the settings page. To enable or disable the function, you need to enter your password.": "You can find the parental control module in the settings page. To enable or disable the function, you need to enter your password."
    }
  },
  zh: {
    translation: {
      "Welcome to React": "欢迎使用React",
      "Hello": "你好",
      "QA": "问题解答",
      "This is a page where users can see common questions and answers about their channel.": "这是一个用户可以查看关于其频道的常见问题及答案的页面。",
      "1. How to upload my video?": "1. 如何上传我的视频？",
      "You can upload video by clicking the upload button on your channel and following the steps to upload.": "您可以通过点击频道上的上传按钮并按照上传步骤来上传视频。",
      "2. How to modify my playlist?": "2. 如何修改我的播放列表？",
      "You can modify your playlist on your user page by clicking the editing button inside the playlist to modify the title, description, or videos inside it.": "您可以在用户页面上点击播放列表中的编辑按钮来修改标题、描述或其内的视频。",
      "3. Where is the parental control function?": "3. 家长控制功能在哪里？",
      "You can find the parental control module in the settings page. To enable or disable the function, you need to enter your password.": "您可以在设置页面找到家长控制模块。要启用或禁用该功能，您需要输入密码。"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // not needed for React as it escapes by default
    }
  });

export default i18n;
