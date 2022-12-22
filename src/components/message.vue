<script setup>
function alerts(types, html, document_body, href) {
  let message = document.createElement("div");
  message.classList.add("alert");
  for (let i = 0; i < types.length; i++) {
    message.classList.add(types[i]);
  }
  message.innerHTML = html;
  if (href){
    message.onclick = function() {
      window.location.href = href;
    };
  }
  document_body.appendChild(message);

  setTimeout(function() {
    $(message).fadeOut(2000);
    setTimeout(function() {
      document_body.removeChild(message);
    }, 2000)
  }, 2000);
  return message;
}
</script>