
// only for simulators
const domainForSimulator = 'localhost';

// Work in both simulator and mobiles in the same wifi
// Replace with the IP expo when you run the app
const expoIP = '192.168.1.6';

class BaseHttpService  {
    
    baseUrl = `http://${expoIP}:4000`;

    urls = {
        users: this.baseUrl + '/api/users',
        categories: this.baseUrl +'/api/categories'
    }

}

export default new BaseHttpService();