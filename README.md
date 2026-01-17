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

Open `data/members.json` - you'll see existing members in an array like this:

```json
[
  {
    "name": "Existing Member",
    ...
  },
  {
    "name": "Another Member",
    ...
  }
]
```

⚠️ **IMPORTANT - DO NOT DELETE ANYONE!** 

**Add your entry at the END, before the closing `]`:**

1. Go to the **last member's closing `}`**
2. Add a **comma `,`** after it
3. Paste your entry below

**Your entry format:**
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

**Example - How the file should look after you add yourself:**
```json
[
  {
    "name": "Existing Member",
    "github": "existinguser",
    ...
  },
  {
    "name": "Your Name",
    "github": "yourusername",
    ...
  }
]
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

After pushing, go to your fork on GitHub: `https://github.com/YOUR-USERNAME/ikpc-town-board`

You'll see a green **"Compare & pull request"** button - **click it!**

**CHECK THIS:** At the top of the page, make sure it shows:

```
base: isu-ik-programming-club/ikpc-town-board   main   ←   head: YOUR-USERNAME/ikpc-town-board   add-my-avatar
```

✅ **Left side must say `main`** - this is where your code goes!  
✅ **Right side shows your username** and `add-my-avatar`

**If the left doesn't say `main`**: Click that dropdown and select `main`

Add title: `Add [Your Name] to town board`  
Click the green **"Create pull request"** button

✅ Done! You'll be notified when merged!

## 💻 Run Locally

```bash
cd ikpc-town-board
python3 -m http.server 8000
```

Open http://localhost:8000 in your browser

**Note:** You need a local server to avoid CORS errors. Can't just open `index.html` directly.


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
