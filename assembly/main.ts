import { ContractPromise } from "near-sdk-as";
import { AddArgs, Print } from "./model";

const OTHER_CONTRACT = "mayday.testnet";

@nearBindgen
export class CalculatorApi {
  add(a: string, b: string): ContractPromise {
    let args: AddArgs = { a, b };
    let promise = ContractPromise.create(
      OTHER_CONTRACT,
      "addLongNumbers",
      args.encode(),
      100000000000000
    );
    return promise;
  }
}

export function calculate(a: string, b: string): void {
  let calculator = new CalculatorApi();
  let promise = calculator.add(a, b);
  promise.returnAsResult();
}

export function print(): void {
  let args: Print = {};
  let promise = ContractPromise.create(
    OTHER_CONTRACT,
    "printHelloWorld",
    args.encode(),
    100000000000000
  );
  promise.returnAsResult();
}
