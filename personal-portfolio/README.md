How to Launch on Firebase...

1. You'll need to bypass securities to do any scripting in VS Code...

- in terminal on ./personal-portfolio (vscode), type:
```Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass```

2. In the project folder, you'll need to update and create an optimized Build folder by running: 
```firebase logout```
```firebase login```
```npm install -g firebase-tools```
```npm run build```
3. Run firebase now! You'll likely have to initialize it first.
```firebase init```

- follow the instructions 
```? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys```

```? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys```

```? What do you want to use as your public directory? build```
```? Configure as a single-page app (rewrite all urls to /index.html)? Yes```
```? Set up automatic builds and deploys with GitHub? No```
```? File build/index.html already exists. Overwrite? No```
```i  Skipping write of build/index.html```

4. Deploy and go to your website!
```firebase deploy```
```Deploy complete!```