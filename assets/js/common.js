// 載入共用 Navbar 和 Footer
function loadComponent(id, url) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;

      // 在這裡綁定事件，確保 navbar 載入完再加載事件
      const menuToggle = document.getElementById('menu-toggle');
      const menuItems = document.getElementById('menu-items');
      const closeMenu = document.getElementById('close-menu');

      if (menuToggle && menuItems && closeMenu) {
        // 顯示選單
        menuToggle.addEventListener('click', function() {
        //   menuItems.style.display = 'flex';
          menuItems.classList.add("active");
        });

        // 關閉選單
        closeMenu.addEventListener('click', function() {
        //   menuItems.style.display = 'none';
        menuItems.classList.remove("active");
        });
      } else {
        console.log("元素未找到");
      }
    })
    .catch(error => console.error('Error loading component:', error));
}

// 載入 navbar 和 footer
loadComponent('navbar', 'components/navbar.html');
loadComponent('footer', 'components/footer.html');

console.log("Hello, JavaScript is working!");
