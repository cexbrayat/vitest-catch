import { useUtils } from "./utils";

export function main() {
  try {
    useUtils().something();
    console.log("something called");
  } catch (e) {
    console.log("something threw");
  }
}
