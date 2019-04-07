const defaultMineFunction = require('../utils/fnFoot');

class TableStorage {
    constructor(mineFunction = defaultMineFunction,
            refreshTime = 3600000) {
        // refreshTime - measured in ms, default is an hour
        this.mineFunction = mineFunction;
        this.refreshTime = refreshTime;
        this.table = undefined;
        this.mineTable();
        setInterval(this.refreshTable.bind(this), this.refreshTime);
    }

    refreshTable() {
        this.mineTable();    
    }

    getTable() {
        return this.table;
    }

    setTable(table) {
        this.table = table;
    }

    mineTable() {
        this.mineFunction().then((table) => {
            this.setTable(table);
        });
    }
}

module.exports = new TableStorage();
