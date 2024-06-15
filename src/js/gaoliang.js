document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll('#nav a');
  const sections = document.querySelectorAll('.section');

  function activateNavLink() {
    let index = sections.length;

    while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove('active'));
    navLinks[index].classList.add('active');
  }

  window.addEventListener('scroll', activateNavLink);
  activateNavLink(); // 初始调用以便页面加载时设置高亮

  // 导航栏高亮功能（点击时也高亮）
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      navLinks.forEach(link => link.classList.remove('active'));
      event.currentTarget.classList.add('active');
    });
  });
});
