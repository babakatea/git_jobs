import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const {Response, Request, Headers, fetch} = require('whatwg-fetch');
global.Response = Response;
global.Request = Request;
global.Headers = Headers;
global.fetch = fetch;
