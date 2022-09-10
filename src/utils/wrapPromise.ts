export default function wrapPromise(promise: Promise<any>) {
  let status = 'pending';
  let response: any | Error;

  const suspender = promise.then(
    (res: any) => {
      status = 'success';
      response = res;
    },
    (err: Error) => {
      status = 'error';
      response = err;
    },
  );

  const read = () => {
    switch (status) {
      case 'pending':
        throw suspender;
      case 'error':
        throw response;
      default:
        return response;
    }
  };

  return {read};
}
