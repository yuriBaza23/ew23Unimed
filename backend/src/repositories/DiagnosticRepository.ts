// 1 - O usuario preenche o formulario
// 2 - Atualiza os dados do paciente
// 3 - Buscar todas as doenças e calcular o resultado do formulario com base nas métricas
// 4 - A doença calculada com maior fator de risco é colocada no campo illnessId do diagnostico e seu nome no campo illnessName
// No diagnóstico ---------
// 5 - quando o usuário é chamado você coloca o fator de risco na porcentagem (campo porcentage)
// 6 - Coloca o resultado da busca do usuário no campo address
// 7 - Coloca o resultado da busca de endereços no campo address
// 8 - Envia todo o resultado
// Lembrete 1: É um array de diagnosticos
// Lembrete 2: Os campos illnessName, porcentage, patient e address são colocados no resultado depois da inserção do diagnostico no banco

// Observação sobre as métricas:
// As metricas serão colocadas no banco no seguinte formato: {1:[0, 1, 4, 6], 2:[1, 3, 5, 6] ...}
// Se lê: A pergunta um tem o valor 0 na primeira opção, 1 na segunda, 4 na terceira e 6 na quarta. A pergunta dois tem o valor 1 na primeira opção etc...
// Veja o video do Medici no grupo para saber a ordem de cada opção no forms