**准备**

安装git、GitHub账号

```bash
git init
```

GitHub上create repo

**运行**

```bash
git config
git remote orgrin xxx.git
```

初次使用

```bash
git clone xxx.git
```

```bash
//仅clone部分
git config core.sparsecheckout true
echo "xx/xx" >> .git/info/sparse-checkout
git pull origin main
```



后续使用

```bash
git pull -u origin main
```

```bas
git add -A
git commit -m "修改注释"
git push origin main
```



