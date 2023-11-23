How to Launch on Firebase...

1. You'll need to bypass securities to do any scripting in VS Code... (can skip if you know what you're doing)

- in terminal on ./personal-portfolio (vscode), type:
```Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass```

2. In the project folder, you'll need to run some updates and create an optimized Build folder by running: 
```firebase logout```
```firebase login```

Update firebase if needed (I had to after a year of revisiting the website)
```npm install -g firebase-tools```
```npm run build```

3. Run firebase now! You'll likely have to initialize it first.
```firebase init```

- follow the instructions 
```? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys```

```? What do you want to use as your public directory? build```
```? Configure as a single-page app (rewrite all urls to /index.html)? Yes```
```? Set up automatic builds and deploys with GitHub? No```
Important... dont overwrite the index! It will auto build a default firebase app if you do...
```? File build/index.html already exists. Overwrite? No```
<!-- ```Skipping write of build/index.html``` -->

4. Deploy and go to your website!
```firebase deploy```
longpham.ca
Deploy complete!


CHEAT SHEET FOR UPDATING!
1. go to /components/resume/documents and upload a new PDF resume.
2. go to /components/resume/resume.js and enter the new resume name:
```import pdfFile from "../../documents/longpham_resume_2023.pdf"``
3. go to /components/blog/blogData.js and update anything you want to update there. Copy, paste, and type away!
4. Save, and follow instructions to relaunch the website. Dont forget to commit and push your new files.