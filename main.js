document.addEventListener('DOMContentLoaded', function() {
  // Garante que o primeiro trimestre seja exibido ao carregar a página
  if (document.getElementById('trimestre1')) {
    mostrarTrimestre(1);
  }
});

function mostrarTrimestre(numero) {
  // Esconde todos os trimestres
  if (document.getElementById('trimestre1')) {
    document.getElementById('trimestre1').style.display = 'none';
  }
  if (document.getElementById('trimestre2')) {
    document.getElementById('trimestre2').style.display = 'none';
  }
  if (document.getElementById('trimestre3')) {
    document.getElementById('trimestre3').style.display = 'none';
  }

  // Mostra apenas o trimestre selecionado
  var trim = document.getElementById('trimestre' + numero);
  if (trim) {
    trim.style.display = 'block';
  }
}

// --- Funções do Modal ---
function abrirModal(id) {
  if (document.getElementById(id)) {
    document.getElementById(id).style.display = 'block';
  }
}

function fecharModal(id) {
  if (document.getElementById(id)) {
    document.getElementById(id).style.display = 'none';
  }
}

// Fecha o modal se clicar fora do conteúdo
window.onclick = function(event) {
  const modais = document.querySelectorAll(".modal");
  modais.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}

