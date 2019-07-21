function get(url) {
  const xhr = new XMLHttpRequest();
  // const script = document.createElement('script');

  xhr.open('get', url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
      }
    }
  };
  xhr.send();
}

get('//at.alicdn.com/t/font_1306426_y0g3zijd9t.js');
