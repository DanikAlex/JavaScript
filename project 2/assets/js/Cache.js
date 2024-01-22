export default class Cache {
    data = [];
    timeout = 1000 * 30;
    static instance;
    static getInstance() {
        if (!this.instance)
            this.instance = new Cache();
        return this.instance;
    }
    constructor() { }
    async getData(key) {
        const existingData = this.data.find(e => e.key === key);
        if (existingData) {
            const now = new Date(); // this is now
            const when = new Date(existingData.when); // this is the time when the record was pushed to cache
            const diff = now.getTime() - when.getTime(); // this is the difference in milliseconds
            // date.getTime() return a timestamp, which is the number of milliseconds since the Epoch
            if (diff < this.timeout) {
                console.log('CACHE HIT');
                return existingData.content;
            }
        }
        const response = await fetch(key);
        const json = await response.json();
        this.setData(key, json);
        console.log('CACHE MISS');
        return this.data.find(e => e.key === key).content;
    }
    setData(key, content) {
        const existingDataIndex = this.data.findIndex(e => e.key === key);
        console.log(existingDataIndex);
        if (existingDataIndex > 0) {
            this.data[existingDataIndex] = {
                key,
                content,
                when: new Date()
            };
        }
        else {
            this.data.push({
                key,
                content,
                when: new Date()
            });
        }
    }
}
