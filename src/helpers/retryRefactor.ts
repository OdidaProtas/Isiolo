export default async function retryRefactor(promise: Promise<any>) {
  try {
    return [await promise, null];
  } catch (e) {
    return [null, e];
  }
}
