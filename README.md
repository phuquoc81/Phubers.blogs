# Phubers.blogs - Complete AI-Powered Webapp

<img src="https://octodex.github.com/images/Professortocat_v2.png" align="right" height="200px" />

A comprehensive GitHub Pages website featuring intelligent AI assistance, code optimization, community platform, and media integration.

## 🚀 Features

### Phu AI - Intelligent Problem Solver
- Problem-solving for mathematics, physics, and astronomy
- Puzzle solver with step-by-step solutions
- Multi-language support (English, Vietnamese, Spanish)
- Future predictions based on trends and data
- Interactive UI with real-time responses

### PhuOptimizer 81 - Code Optimization
- Code analysis and optimization suggestions
- Real-time metrics tracking (performance, efficiency, quality)
- Benchmarking against industry standards
- Support for 10+ programming languages
- Interactive code editor

### Phubers - Community Platform
- Dynamic user profiles with avatars
- Activity tracking and statistics
- Community guidelines and features
- Social interactions and networking

### HelloPhú YouTube Channel
- Video embeds and latest content
- Channel statistics and growth metrics
- Content categories and playlists
- Subscription integration

### Creator Profile
- Professional background and bio
- Technical skills showcase
- Projects and achievements
- Education and certifications
- Contact information

## 🛠️ Technology Stack

- **Jekyll 4.4.1** - Static site generator
- **HTML5, CSS3** - Modern web standards
- **Vanilla JavaScript** - No build tools required
- **Responsive Design** - Mobile-friendly layouts
- **GitHub Pages** - Free hosting

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/phuquoc81/Phubers.blogs.git
cd Phubers.blogs
```

2. Install dependencies:
```bash
gem install bundler
bundle install
```

3. Run the development server:
```bash
bundle exec jekyll serve
```

4. Open your browser to `http://localhost:4000/Phubers.blogs/`

## 📁 Project Structure

```
Phubers.blogs/
├── _config.yml           # Jekyll configuration
├── _layouts/             # Page layouts
│   └── default.html
├── _includes/            # Reusable components
│   ├── header.html
│   └── footer.html
├── pages/                # Feature pages
│   ├── ai-solver.html
│   ├── optimizer.html
│   ├── phubers.html
│   ├── youtube.html
│   └── about.html
├── assets/               # Static assets
│   ├── css/
│   │   └── style.css    # Custom styling (13KB+)
│   └── js/
│       └── main.js      # Interactive functionality (19KB+)
├── index.md              # Homepage
└── Gemfile               # Ruby dependencies
```

## 🎨 Customization

### Update Site Information
Edit `_config.yml` to customize:
- Site title and description
- Author information
- Base URL for deployment
- Theme settings

### Replace YouTube Videos
Update `assets/js/main.js` in the `loadVideos()` function:
```javascript
const videos = [
    {
        title: 'Your Video Title',
        id: 'YOUR_VIDEO_ID',  // Replace with actual YouTube video ID
        description: 'Your description'
    }
];
```

### Modify Styling
Edit `assets/css/style.css` to customize:
- Colors and themes
- Typography
- Layout and spacing
- Animations

## 🚀 Deployment

### GitHub Pages
1. Push your changes to the repository
2. Go to Settings → Pages
3. Select source branch (usually `main`)
4. Your site will be published at `https://phuquoc81.github.io/Phubers.blogs/`

### Custom Domain (Optional)
1. Add a `CNAME` file with your domain
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

## 🧪 Testing

The site has been tested and validated:
- ✅ Site builds successfully with Jekyll
- ✅ All pages load correctly
- ✅ Navigation works across all pages
- ✅ JavaScript functionality verified
- ✅ Responsive design tested
- ✅ Security scan passed (CodeQL)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Jekyll team for the excellent static site generator
- GitHub for free hosting via GitHub Pages
- Font Awesome for icons
- The open-source community

## 📞 Contact

- **GitHub**: [@phuquoc81](https://github.com/phuquoc81)
- **YouTube**: [@HelloPhú](https://youtube.com/@HelloPhú)
- **Email**: phuquoc81@example.com

---

&copy; 2026 Phu Quoc Nguyen &bull; [Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md) &bull; [MIT License](https://gh.io/mit)

