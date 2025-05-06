document.addEventListener('DOMContentLoaded', function() {
    const engineBtns = document.querySelectorAll('.engine-btn');
    const searchForm = document.getElementById('search-form');
    
    engineBtns.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 移除所有按钮的active类
        engineBtns.forEach(b => b.classList.remove('active'));
        
        // 给当前点击的按钮添加active类
        this.classList.add('active');
        
        // 根据选择的搜索引擎更新表单action
        const engine = this.getAttribute('data-engine');
        if (engine === 'bing') {
          searchForm.action = 'https://www.bing.com/search';
        } else {
          searchForm.action = 'https://www.google.com/search';
        }
      });
    });
  });