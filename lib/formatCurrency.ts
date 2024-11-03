export function formatCurrency(
  amount: number,
  currencyCode: string = "EUR"
): string {
  try {
    return new Intl.NumberFormat("el-GR", {
      style: "currency",
      currency: currencyCode.toUpperCase(),
    }).format(amount);
  } catch (error) {
    console.error("Invalid currency code", currencyCode, error);
    return `${currencyCode.toUpperCase()} ${amount.toFixed(2)}`;
  }
}
