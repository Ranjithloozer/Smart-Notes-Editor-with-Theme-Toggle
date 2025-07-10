function handleSubmit() {
    const val1 = document.getElementById('input1').value;
    const val2 = document.getElementById('input2').value;
    document.getElementById('editInput1').value = val1;
    document.getElementById('editInput2').value = val2;
  }
  function handleSave() {
    const edited1 = document.getElementById('editInput1').value;
    const edited2 = document.getElementById('editInput2').value;
    showPopup("Saved successfully!");
  }
  function showPopup(message) {
    const popup = document.getElementById('popupMessage');
    popup.textContent = message;
    popup.classList.add('show');
  
    setTimeout(() => {
      popup.classList.remove('show');
    }, 2500);
  }
  
  function toggleMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
  }
  window.onload = function () {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "enabled") {
      document.body.classList.add("dark-mode");
      document.getElementById("modeToggle").checked = true;
    }
  };
  