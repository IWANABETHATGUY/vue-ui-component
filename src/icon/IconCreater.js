export default function RegisterIcon(url) {
  const xhr = new XMLHttpRequest();
  const script = document.createElement('script');
  get(url);
  function get(url) {
    xhr.open('get', url, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          script.innerText = xhr.responseText;
          document.body.append(script);
        }
      }
    };
    xhr.send();
  }
}
