設定完成後，再在terminal輸入git remote -v確認push網站，若還是https開頭，則輸入git remote set-url origin [剛剛ssh提供的網址]，然後再git remote -v確認
如果顯示自己的網址，則代表ssh通道完全連結，就可以開始使用git push了，而不再需要特別登入github在這台裝置上