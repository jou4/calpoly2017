"# calpoly2017" 

## リポジトリからチェックアウト
git clone https://github.com/jou4/calpoly2017.git

## リポジトリの更新をローカルへ反映
git pull

## ローカルからチェックイン
git add *  
git commit -m "Some comment here.."  
git push -u origin master  

## 誤ったコミットを戻す
git log  
git revert <COMMIT ID>  
git push -u origin master  

