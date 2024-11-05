git clean -xfd
git pull origin main -X theirs --allow-unrelated-histories
git reset --hard origin/main