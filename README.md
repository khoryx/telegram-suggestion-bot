[English](#english) | [Russian](#russian)


## English

Free and open-source Telegram bot for collecting suggestions and feedback from users.

How to deploy:

1. Create a bot in @BotFather.
2. If you want to forward messages from the bot, create a group or use your own chat and get its ID using @userinfobot
3. Open [https://dash.cloudflare.com/login](https://dash.cloudflare.com/login) and sign up. After authorization, open [https://dash.cloudflare.com/](https://dash.cloudflare.com/).
4. In the left menu choose Compute & AI -> Workers & Pages -> Create application -> Start with Hello World -> choose a Worker name -> Deploy.
5. Edit the code. Paste the code into index.js and deploy again.
6. Open the settings of your Worker and find Variables and Secrets.
7. Add a secret:
   - Name: BOT_TOKEN
   - Value: your token from BotFather

   Add a variable or secret:
   - Name: GROUP_ID
   - Value: -100... group ID or your user ID

8. Open
   [https://api.telegram.org/bot<YOUR_BOT_TOKEN>/setWebhook?url=https://your-worker-name.your-subdomain.workers.dev] 
   If everything is correct, you will see the following result:
   {"ok":true,"result":true,"description":"Webhook was set"}
9. Send a message to your bot in Telegram!


## Russian

Бесплатный и open-source Telegram-бот для сбора предложений и отзывов от пользователей.


Как запустить

1. Создайте бота в @BotFather.
2. Если вы хотите пересылать сообщения от бота, создайте группу или используйте свой личный чат и получите его ID с помощью @userinfobot.
3. Откройте https://dash.cloudflare.com/login и зарегистрируйтесь. После авторизации откройте https://dash.cloudflare.com/.
4. В левом меню выберите Compute & AI -> Workers & Pages -> Create application -> Start with Hello World -> выберите имя Worker -> Deploy.
5. Отредактируйте код. Вставьте код в index.js и выполните Deploy ещё раз.
6. Откройте настройки вашего Worker и найдите раздел Variables and Secrets.
7. Добавьте secret:
   Name: BOT_TOKEN
   Value: ваш токен из BotFather
   Добавьте variable или secret:
   Name: GROUP_ID
   Value: -100... ID группы или ваш ID пользователя
8. Откройте
   https://api.telegram.org/bot<YOUR_BOT_TOKEN>/setWebhook?url=https://your-worker-name.your-subdomain.workers.dev
   
   Если всё сделано правильно, вы увидите следующий результат:
   {"ok":true,"result":true,"description":"Webhook was set"}
   
 9. Отправьте сообщение вашему боту в Telegram!

