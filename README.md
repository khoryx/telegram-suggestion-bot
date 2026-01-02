[English](#english) | [Russian](#russian)


##English

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
9. Send a message to your bot in Telegram.


##Russian

smt

