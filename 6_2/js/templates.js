var header = new Vue({
        el: '#header',
     data: {
      header: `<div id="header-burger">
      <div class="header-burger-1"></div>
      <span class="header-burger-2"></span>
      <span class="header-burger-3"></span>
    </div>
    <div id="header-right">
      <div class="main-results-filter-lang-point lang-point-added" data-lang="RU">RU</div>
      <div id="header-heart"></div>
      <div id="header-user"></div>
        <div id="header-user-ath">
            <div id="header-user-ath-img"><div id="header-user-ath-img-message">3</div></div>&nbsp&nbspGastrotravel
        </div>
        
      </div>
    <img id="header-logo" src="images/logo.png">
<div id="menu" class="popup-scroll">
  <a href="#" class="menu-line">Места</a>
  <a href="#" class="menu-line">События</a>
  <a href="#" class="menu-line">Туры и экскурсии</a>
  <a href="#" class="menu-line">Организаторы</a>
</div>`
   }
});
var footer = new Vue({
        el: '#footer',
     data: {
      footer: `<div id="footer-l">
    <a href="#" class="footer-l-nav">Туристам</a>
    <a href="#" class="footer-l-nav">Организаторам</a>
    <a href="#" class="footer-l-nav">О сервисе</a>
  </div>
  <div id="footer-r">
    <img src="images/icon_facebook.png" class="footer-r-icons">
    <img src="images/icon_vk.png" class="footer-r-icons">
    <img src="images/icon_instagram.png" class="footer-r-icons">
    <div id="main-bottom">
    <img src="images/icon_share.svg" class="main-bottom-icon">
    <img src="images/icon_menu.svg" class="main-bottom-icon">
    
    </div>
    <div id="main-bottom-icon-menu">
    <a href="#" class="href-none">Рекомендовать</a><br>
    <a href="#" class="href-none">Неточность</a><br>
    <a href="#" class="href-none">Жалоба</a><br>
    <a href="#" class="href-none">Вопрос</a><br>
    <a href="#" class="href-none">Другое</a><br>
    </div>`
   }
});
var reg = new Vue({
        el: '#reg',
     data: {
      reg: `<div class="form__wrapper">
    
   <form id="register" action="#" method="POST">
<div id="reg-close-bg"><img src="images/icon_cross.png" class="reg-close"></div>
      <h1 style="display: flex; justify-content: center; with: 100%;">Регистрация</h1>
      <div class="fields">
         <label for="login">Ваш логин:</label>
         <input type="text" id="login" value="" placeholder="AmateR">
         <span class="dot">*</span>
      </div>
      <div class="fields">
         <label for="email">Ваш e-mail:</label>
         <input type="text" id="email" value="" placeholder="youmail@domain.ru">
         <span class="dot">*</span>
      </div>
      <div class="fields">
         <label for="pass1">Пароль:</label>
         <input type="password" id="pass1" value="" >
         <span class="dot">*</span>
      </div>
      <div class="fields">
         <label for="pass2">Пароль еще раз:</label>
         <input type="password" id="pass2" value="" >
         <span class="dot">*</span>
      </div>


      <button type="submit" name="button" id="send">Зарегистрироваться</button>
   </form>
</div>`
   }
});
var ath = new Vue({
        el: '#ath',
     data: {
      ath: `<div id="ath-form">
        <div id="ath-close-bg"><img src="images/icon_cross.png" class="ath-close"></div>
      <h1 style="display: flex; justify-content: center; with: 100%;">Авторизация</h1>
        <label for="ath-form-line">Ваш логин:</label>
         <input type="text" class="ath-form-line" value="" placeholder="AmateR"><br><br>
        <label for="ath-form-line">Ваш пароль:</label>
         <input type="password" class="ath-form-line" value="" placeholder="123456">
        <button type="submit" name="button" class="ath-form-submit">Войти</button>
    </div>`
   }
});
