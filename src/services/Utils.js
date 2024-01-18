const Utils = {
  parseRequestURL: () => {
    console.log(location)
    let url = window.location.hash.slice(1).toLowerCase() || "/";

    console.log(url);
    let params = url.split("/");
    let request = {
      resource: null,
      id: null,
      verb: null,
    };
    request.resource = params[0];
    request.id = params[1];
    request.verb = params[2];
    return request;
  },
  sleep: (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  },
};

export default Utils;
