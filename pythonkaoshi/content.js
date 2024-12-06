// 监听用户复制的内容
document.addEventListener('copy', function(e) {
    const copiedText = window.getSelection().toString();
    if (copiedText) {
      // 向背景脚本请求查找该 key 对应的值
      chrome.runtime.sendMessage(
        { action: 'getValueForKey', key: copiedText },
        function(response) {
          const value = response.value;
          
          // 将获取的 value 复制到剪贴板
          navigator.clipboard.writeText(value).then(() => {
            console.log(`已将 "${value}" 复制到剪贴板`);
          }).catch(err => {
            console.error('无法复制到剪贴板: ', err);
          });
        }
      );
    }
  });
  