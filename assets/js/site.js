(function () {
  function setLanguage(isUa) {
    document.body.classList.toggle("lang-ua", isUa);

    var langBtn = document.getElementById("langBtn");
    if (langBtn) {
      langBtn.textContent = isUa ? "EN" : "UA";
    }

    document.documentElement.lang = isUa ? "uk" : "en";
    localStorage.setItem("siteLang", isUa ? "ua" : "en");
  }

  var savedLang = localStorage.getItem("siteLang");
  if (savedLang === "ua") {
    setLanguage(true);
  }

  window.toggleLang = function toggleLang() {
    setLanguage(!document.body.classList.contains("lang-ua"));
  };
})();
