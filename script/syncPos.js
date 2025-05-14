const elemA = document.getElementById('sprite_01');
const elemB = document.getElementById('title');

function syncPosition() {
  const rect = elemB.getBoundingClientRect();
  const offsetX = rect.left + window.scrollX + 12;
  const offsetY = rect.top + window.scrollY + 21;

  // 将 A 元素的位置设置为与 B 元素一样（相对页面）
  elemA.style.left = offsetX + 'px';
  elemA.style.top = offsetY + 'px';
}

// 初次同步
syncPosition();

// 监听窗口 resize 或 scroll 时重新同步
window.addEventListener('resize', syncPosition);
window.addEventListener('scroll', syncPosition);