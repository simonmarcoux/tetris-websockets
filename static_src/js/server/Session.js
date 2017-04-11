class Session {
    constructor (id) {
        this.id = id;
        this.clients = new Set; // Set to have .add and .delete
    }

    join(client) {
        if(client.session) {
            throw new Error('Client already in session');
        }
        this.clients.add(client);
        client.session = this;
    }
    leave(client) {
        if(client.session != this) {
            throw new Error('client not in session');

        }
        this.clients.delete(client);
        client.session = null;
    }
}

module.exports = Session;