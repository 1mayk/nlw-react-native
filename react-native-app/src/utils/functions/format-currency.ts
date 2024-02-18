// Ja dá o formato de R$.. automaticamente ao passar o valor
// Retorna uma string
export function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
