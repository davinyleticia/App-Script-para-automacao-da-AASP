# Script Google Apps Script para Importar Dados da API de Intimação da AASP

Este script em Google Apps Script foi desenvolvido para importar dados da API de intimação da AASP (Associação dos Advogados de São Paulo) para uma planilha do Google Sheets. O script realiza uma solicitação GET à API, processa os dados JSON recebidos e preenche a planilha com as informações relevantes.

## Instruções de Instalação:

1. **Abrir o Google Sheets:**
   Certifique-se de estar logado na sua conta do Google e acesse o Google Sheets em [sheets.google.com](https://sheets.google.com/).

2. **Criar uma Nova Planilha:**
   Crie uma nova planilha onde deseja importar os dados da API.

3. **Abrir o Editor de Scripts:**
   No menu da planilha, clique em "Extensões" -> "Apps Script" para abrir o Editor de Scripts.

4. **Cole o Código:**
   No Editor de Scripts, cole o código fornecido no espaço em branco.

5. **Configurar o Código:**
   - Substitua `< código ID do Adv na AAASP >` na linha da URL da API pelo seu código de identificação da AASP.
   - Certifique-se de ajustar qualquer outra configuração conforme necessário.

6. **Salvar o Projeto:**
   Dê um nome ao projeto clicando em "Arquivo" -> "Salvar" no Editor de Scripts.

7. **Executar o Script Manualmente (Opcional):**
   Se desejar executar o script manualmente, clique no ícone de "play" (seta triangular) no menu superior do Editor de Scripts.

8. **Configurar Atualizações Automáticas (Opcional):**
   Se desejar que o script seja executado automaticamente em intervalos específicos, configure um acionador (trigger) seguindo estas etapas:
   - No Editor de Scripts, clique em "Editar" -> "Configurar acionador".
   - Adicione um acionador para executar a função `fetchAndFillSheet` em um intervalo específico (por exemplo, a cada hora).

9. **Verificar Logs:**
   Certifique-se de verificar os logs no Editor de Scripts após a execução para acompanhar eventuais mensagens de sucesso ou erro.

## Notas Importantes:

- **Código de Identificação da AASP:**
  Substitua `< código ID do Adv na AAASP >` na URL da API pelo seu código de identificação pessoal fornecido pela AASP.

- **Limpar Guia Atual (Opcional):**
  Se desejar limpar a guia atual antes de preencher com novos dados, descomente a linha `// guia.clear();` removendo as barras duplas no início.

- **Logs:**
  Os logs no Editor de Scripts fornecerão informações sobre o status da execução e eventuais erros. Certifique-se de verificar os logs regularmente.

Lembre-se de que este script depende da estabilidade e disponibilidade da API da AASP, e qualquer alteração na estrutura da API pode exigir ajustes no código. Certifique-se de manter o script atualizado conforme necessário.

Espero que este guia seja útil! Se houver dúvidas ou problemas, sinta-se à vontade para entrar em contato.

# Licença GNU e Créditos

Este script é distribuído sob os termos da Licença Pública Geral GNU (GNU GPL), conforme detalhado a seguir. Além disso, incluí o crédito para a autora, Daviny Letícia Vidal, como solicitado.

## Licença GNU (GNU GPL):

Este programa é software livre: você pode redistribuí-lo e/ou modificá-lo conforme os termos da Licença Pública Geral GNU, conforme publicada pela Free Software Foundation, seja na versão 3 da Licença ou (a seu critério) em qualquer versão posterior.

Este programa é distribuído na esperança de que seja útil, mas SEM QUALQUER GARANTIA; sem mesmo a garantia implícita de COMERCIALIZAÇÃO ou ADEQUAÇÃO A UM PROPÓSITO ESPECÍFICO. Consulte a Licença Pública Geral GNU para obter mais detalhes.

Você deve ter recebido uma cópia da Licença Pública Geral GNU junto com este programa. Se não, veja [http://www.gnu.org/licenses/](http://www.gnu.org/licenses/).

## Créditos:

Este script foi desenvolvido por Daviny Letícia Vidal. Daviny é a autora original do código fornecido neste script. Ao utilizar este script, por favor, mantenha o crédito para Daviny Letícia Vidal.

---

**Observação:** Certifique-se de revisar a [Licença Pública Geral GNU](http://www.gnu.org/licenses/) para entender completamente os termos e condições da licença. Certas ações podem ser permitidas ou restritas pela licença, e é importante estar em conformidade com seus requisitos ao usar ou distribuir o código.
