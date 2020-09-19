export class ThemeSwitch {
  constructor(bodyRef, Theme) {
    this.bodyRef = bodyRef;
    this.Theme = Theme;
  }
  swithDarkTheme() {
    this.bodyRef.classList.add(this.Theme.DARK);
    this.bodyRef.classList.remove(this.Theme.LIGHT);
  }
  swithLightTheme() {
    this.bodyRef.classList.add(this.Theme.LIGHT);
    this.bodyRef.classList.remove(this.Theme.DARK);
  }
}

const refs = {
  switcher: document.querySelector('.js-switch-input'),
  body: document.querySelector('body'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitch = new ThemeSwitch(refs.body, Theme);

const checkBoxHandler = event => {
  if (event.target.checked) {
    themeSwitch.swithDarkTheme();
    localStorage.setItem('DARK', 'true');
  }
  if (!event.target.checked) {
    themeSwitch.swithLightTheme();
    localStorage.setItem('DARK', 'false');
  }
};

refs.switcher.addEventListener('change', checkBoxHandler);

const onPageLoad = () => {
    const condition = localStorage.getItem("DARK")
    if (condition === "true") {
        refs.switcher.checked = true;
        themeSwitch.swithDarkTheme();
    }
    if (condition === "false") {
        refs.switcher.checked = false;
        themeSwitch.swithLightTheme();
    }

}

onPageLoad();