export interface Order {
  orderId: string;
  amountA: string;
  amountB: string;
  amountLeftToFill: string;
  fees: string;
  tokenA: string;
  tokenB: string;
  user: string;
  isCancelled: string;
}
