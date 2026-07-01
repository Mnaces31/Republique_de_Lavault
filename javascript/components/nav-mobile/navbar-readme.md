# Navbar Responsiva

Componente de **navbar responsiva** desenvolvido para a République de Lavault, com suporte a:

- Navegação **desktop**
- Menu **hambúrguer mobile**
- **Dropdown** de províncias no desktop
- **Submenu deslizante** no mobile
- Barra de **pesquisa integrada**

---

## Funcionalidades

✔ Layout responsivo  
✔ Dropdown com hover no desktop  
✔ Sidebar lateral no mobile  
✔ Overlay ao abrir menu  
✔ Transição animada entre menu principal e submenu  
✔ Campo de pesquisa estilizado

---

## Dependências

Este componente utiliza:

- **HTML5**
- **CSS3**
- **JavaScript Vanilla**
- **Font Awesome** (ícones)

Importe o Font Awesome no `<head>`:

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
/>
```

---

# Estrutura HTML

Utilize o seguinte código dentro do `<body>`:

```html
<header>
  <div class="nav-container">
    <div class="nav-title">
      <div class="nav-img">
        <img src="../assets/icons/noto_fleur-de-lis.svg" alt="Home" />
      </div>
      <div class="nav-text">
        <h1>Republique de Lavault</h1>
        <p>Gouvernement officiel</p>
      </div>
    </div>

    <button class="hamburger" id="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <div class="mobile-menu" id="mobileMenu">
      <!--Fechar Menu-->
      <div class="overlay" id="overlay"></div>

      <button class="close-menu" id="closeMenu">
        <i class="fa-solid fa-xmark"></i>
      </button>

      <!--Menu Principal-->
      <div class="menu-panel open" id="mainPanel">
        <a href="">L'actualités</a>
        <a href="">Immigration</a>
        <a href="">Prestations</a>

        <button class="go-submenu" id="goProvinces">
          Provinces
          <i class="fa-solid fa-angle-right"></i>
        </button>
      </div>

      <!--Sub-menu Provinces-->
      <div class="menu-panel" id="provincePanel">
        <button class="back-btn" id="backBtn">
          <i class="fa-solid fa-arrow-left"></i>
          Retour
        </button>

        <a href="">Amons</a>
        <a href="">Gremont</a>
        <a href="">Licques</a>
        <a href="">Mauvais</a>
        <a href="">Nubecourt</a>
      </div>
    </div>

    <nav class="nav">
      <!-- Desktop-->
      <ul class="menu">
        <li class="item"><a href="#">L'actualités</a></li>
        <li class="item"><a href="#">Immigration</a></li>
        <li class="item"><a href="#">Prestations</a></li>

        <li class="item dropdown">
          <a href="#">Provinces</a>

          <ul class="submenu">
            <li><a href="#">Amons</a></li>
            <li><a href="#">Gremont</a></li>
            <li><a href="#">Licques</a></li>
            <li><a href="#">Mauvais</a></li>
            <li><a href="#">Nubecourt</a></li>
          </ul>
        </li>
      </ul>
    </nav>
    <div class="nav-search">
      <form action="/search" method="get">
        <img src="../assets/icons/Magnifying-Glass.svg" alt="Recherches" />
        <input type="search" name="q" id="search" placeholder="Recherches" />
      </form>
    </div>
  </div>
</header>
```

---

# Estilização CSS

Adicione os estilos da navbar ao seu arquivo CSS ou utilize um arquivo dedicado como:

```css
header {
  position: relative;
  background: var(--ColorMain);
  color: var(--ColorText);
}

.nav-container {
  width: 100%;
  padding: 8px 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.nav-title {
  display: flex;
  align-items: center;
  gap: 7px;
}

.nav-img {
  padding: 5px;
  background-color: rgba(243, 156, 18, 0.75);
  border-radius: 5px;
}

.nav-text h1 {
  font-size: 16px;
  font-weight: 700;
  line-height: 20px; /* 125% */
}

.nav-text p {
  color: var(--ColorText2);
  font-size: 10px;
  font-weight: 400;
  line-height: 15px; /* 150% */
}

/*=======MENU NAV========*/
nav {
  padding: 16px 40px;
}

.menu {
  display: flex;
  gap: 32px;
  list-style: none;
  align-items: center;
}

.item {
  position: relative;
}

.item a {
  color: var(--ColorText);
  text-decoration: none;
  font-size: 16px;
  padding: 10px 8px;
  display: inline-block;
}

/*====== Drop Down ========*/

.submenu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;

  min-width: 180px;
  background: var(--ColorMain);
  border-radius: 8px;
  padding: 8px 0;

  display: flex;
  flex-direction: column;
  list-style: none;

  opacity: 0;
  visibility: hidden;
  transform: translateY(-8px);

  pointer-events: none;

  transition: 0.2s ease;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
}

.submenu li a {
  padding: 10px 16px;
  display: block;
  color: var(--ColorText2);
  font-size: 14px;
  transition: background 0.2s;
}

.submenu li a:hover {
  background: rgba(10, 61, 98, 0.4);
}

/*Ativação*/

.dropdown:hover .submenu,
.dropdown:focus-within .submenu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
  pointer-events: auto;
}

/*-------Search-------*/

.nav-search form {
  display: flex;
  align-items: center;
  gap: 10px;

  width: 320px;
  padding: 12px 16px;

  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 10px;

  background-color: rgba(255, 255, 255, 0.08);

  transition: all 0.3s ease-out;
}

.nav-search form:hover {
  background-color: rgba(255, 255, 255, 0.12);
}

.nav-search form:focus-within {
  border-color: var(--ColorSecundary);
  box-shadow: 0 0 0 3px rgba(243, 156, 18, 0.2);
}

.nav-search input {
  flex: 1;

  border: none;
  outline: none;

  background: transparent;

  color: var(--ColorText);
  font-size: 14px;
}

.nav-search input::placeholder {
  color: var(--ColorText2);
}

/* Hamburger */

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 22px;
  background: none;
  border: none;
  cursor: pointer;
}

.hamburger span {
  width: 100%;
  height: 3px;
  background: white;
  border-radius: 999px;
}

/* Header Responsiveness*/

@media (max-width: 1024px) {
  .hamburger {
    display: flex;
  }

  .nav,
  .nav-search {
    display: none;
  }

  .nav.active {
    display: block;
    position: absolute;
    top: 90px;
    left: 0;
    width: 100%;
    background: var(--ColorText4);
    padding: 20px;
    z-index: 999;
  }

  .nav.active .menu {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .nav.active .submenu {
    position: static;
    margin-top: 10px;
  }
}

/*Province Sub-menu*/

.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 320px;
  height: 100vh;
  background: var(--ColorMain);
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
  transition: right 0.3s ease;
  z-index: 999;
}

.mobile-menu.open {
  right: 0;
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  pointer-events: none;
  transition: 0.3s;
}

.overlay.show {
  opacity: 1;
  pointer-events: all;
}

.close-menu {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 20px;
  color: var(--ColorBackground);
  cursor: pointer;
  z-index: 1000;
}

.menu-panel {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  left: 100%;
  transition: left 0.3s ease;
}

.menu-panel.open {
  left: 0;
}

.menu-panel a,
.menu-panel button,
.go-submenu {
  font-size: 1.1rem;
  background: none;
  border: none;

  text-align: center;
  text-decoration: none;
  color: var(--ColorText5);

  cursor: pointer;
}
```

# JavaScript

O arquivo `menu.js` é responsável por:

- Abrir o menu mobile
- Fechar o menu
- Exibir overlay
- Navegar entre menu principal e submenu

### Importante

O script deve ser carregado **antes do fechamento da tag `body`**:

```html
<script src="../javascript/components/nav-mobile/menu.js"></script>
</body>
```

# Observações

- Certifique-se de que as variáveis CSS (`--ColorMain`, `--ColorText`, etc.) estejam definidas no `:root`.
- O componente foi desenvolvido com abordagem **desktop-first**.
- Para maior modularidade, recomenda-se manter HTML, CSS e JavaScript separados.
