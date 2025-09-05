function editarDados() {
      document.getElementById('inputNome').value = document.getElementById('nome').innerText;
      document.getElementById('inputEmail').value = document.getElementById('email').innerText;
      document.getElementById('inputTelefone').value = document.getElementById('telefone').innerText;
      document.getElementById('inputEndereco').value = document.getElementById('endereco').innerText;

      var editModal = new bootstrap.Modal(document.getElementById('editModal'));
      editModal.show();
    }

    function salvarDados() {
      document.getElementById('nome').innerText = document.getElementById('inputNome').value;
      document.getElementById('email').innerText = document.getElementById('inputEmail').value;
      document.getElementById('telefone').innerText = document.getElementById('inputTelefone').value;
      document.getElementById('endereco').innerText = document.getElementById('inputEndereco').value;

      var editModal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
      editModal.hide();
    }

    const inputAvatar = document.getElementById('inputAvatar');
    const avatar = document.getElementById('avatar');

    inputAvatar.addEventListener('change', function() {
      const file = this.files[0];
      if(file) {
        const reader = new FileReader();
        reader.onload = function(e) {
          avatar.src = e.target.result;
        }
        reader.readAsDataURL(file);
      }
    });