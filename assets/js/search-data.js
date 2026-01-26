// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-workshop-announcement-interpretability-in-llms-using-geometric-and-statistical-methods-i-am-organizing-a-workshop-taking-place-on-may-27-28-where-we-will-explore-recent-developments-in-interpretability-for-large-language-models-llms-using-geometric-and-statistical-methods-for-further-details-check-out-the-workshop-page",
          title: 'Workshop Announcement: Interpretability in LLMs using Geometric and Statistical Methods I am organizing...',
          description: "",
          section: "News",},{id: "news-i-m-participating-in-mars-3-0-mentorship-for-alignment-research-students-a-research-program-run-by-the-cambridge-ai-safety-hub-as-part-of-this-program-i-will-be-working-alongside-a-group-of-talented-researchers-on-problems-related-to-chain-of-thought-reasoning-in-ai-systems",
          title: 'I’m participating in MARS 3.0 (Mentorship for Alignment Research Students), a research program...',
          description: "",
          section: "News",},{id: "news-i-m-attending-icml-2025-where-i-ll-be-presenting-some-of-my-recent-work-on-interpretability-in-large-language-models-conference-persistent-topological-features-in-large-language-models-workshop-on-high-dimensional-learning-dynamics-probing-geometry-of-next-token-prediction-using-cumulant-expansion-of-the-softmax-entropy",
          title: 'I’m attending ICML 2025, where I’ll be presenting some of my recent work...',
          description: "",
          section: "News",},{id: "news-i-will-be-participating-in-mats-9-0-ml-alignment-amp-amp-theory-scholars-program-in-berkeley-i-will-be-working-with-adam-shai-and-paul-riechers-simplex-ai-safety-on-interpreting-chain-of-thought-in-toy-models-using-computational-mechanics",
          title: 'I will be participating in MATS 9.0 (ML Alignment &amp;amp;amp; Theory Scholars Program)...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%76%6B%61%72%74%68%69%6B%30%39%35@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Qreb6HQAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/karthikviswanathn", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/karthik-viswanathan-6b8a0111a", "_blank");
        },
      },{
        id: 'social-lesswrong',
        title: 'Lesswrong',
        section: 'Socials',
        handler: () => {
          window.open("https://www.lesswrong.com/users/karthik-viswanathan", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
