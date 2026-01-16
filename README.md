# <img src="assets/images/logo.svg" alt="IKPC" width="35" height="35" style="vertical-align: middle;" /> IKPC Town Board

A visual showcase of our programming club members displayed as RPG-style avatars. Add yourself by making your first pull request!

![IKPC Town Board Preview](assets/images/ikpc-town-board.png)

## 🚀 How to Add Yourself

1. **Fork this repository**

2. **Clone your fork**
```bash
git clone https://github.com/YOUR-USERNAME/ikpc-town-board.git
cd ikpc-town-board
```

3. **Create a new branch**
```bash
git checkout -b add-my-avatar
```

4. **Edit `data/members.json` and add your entry**
```json
{
  "name": "Your Name",
  "github": "yourusername",
  "quote": "Your cool quote here!",
  "gender": "male",
  "hairColor": "#8b4513",
  "dressColor": "#3b7f7a",
  "nameColor": "#2f3328",
  "eyes": "happy",
  "mouth": "smile",
  "badge": "Newbie"
}
```

**Field options:**
- `gender`: `"male"` or `"female"`
- `eyes`: `"normal"`, `"happy"`, `"sleepy"`, `"wide"`, `"wink"`
- `mouth`: `"neutral"`, `"smile"`, `"happy"`, `"surprised"`, `"sad"`
- Colors: Any valid CSS color (hex, rgb, or color names)
- Badge: Put any word that you wanna see on your avatar card.

5. **Commit and push**
```bash
git add data/members.json
git commit -m "Add [Your Name] to town board"
git push origin add-my-avatar
```

6. **Open a Pull Request**

Go to your fork on GitHub and click **"Compare & pull request"**

## 💻 Run Locally

```bash
cd ikpc-town-board
python3 -m http.server 8000
```

Open http://localhost:8000 in your browser

**Note:** You need a local server to avoid CORS errors. Can't just open `index.html` directly.

## 🤝 Contributing

Want to improve the site? See [CONTRIBUTING.md](CONTRIBUTING.md)

## 📁 Project Structure

```
ikpc-town-board/
├── assets/
│   ├── css/        # Modular stylesheets
│   ├── js/         # Modular scripts
│   └── images/
├── data/
│   └── members.json    # ⭐ Add yourself here
└── index.html
```



## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed instructions on how to contribute.


## 📄 License

This project is open-source and available under the MIT License.


## 💡 Questions?

Open an issue or reach out to the club organizers!
