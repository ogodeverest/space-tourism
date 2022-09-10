interface Endpoints {
  models: string;
  api: string;
  images: string;
}

const baseUrl = 'https://space-tourism-ed892.web.app/';

const endpoints: Endpoints = {
  models: baseUrl + 'models/',
  api: baseUrl + 'api/',
  images: baseUrl + 'images/',
};

export default endpoints;
