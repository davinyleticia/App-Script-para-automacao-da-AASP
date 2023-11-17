function fetchAndFillSheet() {

   // Obter a data atual
  var hoje = new Date();

  // Subtrair um dia da data atual
  var ontem = new Date(hoje);
  ontem.setDate(hoje.getDate() - 1);

  // Formatar a data no formato desejado (DD/MM/YYYY)
  var dataFormatada = Utilities.formatDate(ontem, 'GMT', 'dd/MM/yyyy');

  // Construir a URL da API GET com a data de ontem
  var apiUrl = 'https://intimacaoapi.aasp.org.br/api/Associado/intimacao/?chave=< código ID do Adv na AAASP>&data=' + dataFormatada + '&diferencial=';


  // Fazer a solicitação à API GET
  var response = UrlFetchApp.fetch(apiUrl);

  // Verificar se a solicitação foi bem-sucedida (código 200)
  if (response.getResponseCode() === 200) {
    // Tentar analisar o JSON
    try {
      var responseData = JSON.parse(response.getContentText());

      // Verificar se há dados na resposta
      if (responseData && responseData.intimacoes && responseData.intimacoes.length > 0) {
        Logger.log('Dados da API: ' + JSON.stringify(responseData));

        // Abrir a planilha ativa
        var planilha = SpreadsheetApp.getActiveSpreadsheet();

        // Selecionar a guia (sheet)
        var guia = planilha.getSheets()[0];

        // // Limpar a guia atual antes de preencher com novos dados
        // guia.clear();

        // Preencher os dados na guia
        for (var linha = 0; linha < responseData.intimacoes.length; linha++) {
          var dadosLinha = responseData.intimacoes[linha];
          Logger.log('Dados da linha: ' + JSON.stringify(dadosLinha));

          // Criar uma matriz para armazenar os valores da linha
          var linhaArray = [];

          // Preencher a matriz com os valores da linha
          for (var coluna = 0; coluna < Object.keys(dadosLinha).length; coluna++) {
            linhaArray.push(dadosLinha[Object.keys(dadosLinha)[coluna]]);
          }

          // Adicionar uma nova linha para cada conjunto de dados
          guia.appendRow(linhaArray);
        }

        Logger.log('Dados preenchidos com sucesso no Google Sheets.');
      } else {
        Logger.log('A resposta da API está vazia ou não contém dados de intimações.');
      }
    } catch (error) {
      Logger.log('Erro ao analisar a resposta JSON da API: ' + error);
    }
  } else {
    Logger.log('Falha ao acessar a API. Código de status: ' + response.getResponseCode());
  }
}
