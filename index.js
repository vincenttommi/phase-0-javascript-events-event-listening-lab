input.addEventListener('click', clickAlert);

function addingEventListener() {
  const input = document.getElementById("button")
  input.addEventListener('click', function(event) {
      return "clicked"
    });
}