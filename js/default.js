$(function() {
    // Script simples para demonstrar interação
        const form = document.getElementById('demoForm');
        const mensagens = document.getElementById('mensagens');
        const tabelaCorpo = document.getElementById('tabelaCorpo');

        form.addEventListener('submit', function(e){
            e.preventDefault();
            const data = new FormData(form);
            const nome = data.get('nome').trim() || '—';
            const email = data.get('email').trim() || '—';
            const tipo = data.get('tipo');

            // Adiciona linha na tabela
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${escapeHtml(nome)}</td><td>${escapeHtml(email)}</td><td>${escapeHtml(tipo)}</td>`;
            tabelaCorpo.appendChild(tr);

            // Mostra mensagem breve
            const p = document.createElement('p');
            p.textContent = `Dados enviados: ${nome} — ${email} (${tipo})`;
            mensagens.prepend(p);

            form.reset();
        });

        // Função simples de escape para proteger contra injeção via innerHTML
        function escapeHtml(str){
            return String(str)
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
        }
})