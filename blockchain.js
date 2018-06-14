const Block = require('./block');

class Blockchain {
    constructor(){
        this.chain = [Block.genesis()];//first element of the chain
    }

    addBlock(data) {
        const lastBlock = this.chain[this.chain.length - 1]; //last element of the chain
        const block = Block.mineBlock(lastBlock, data);
        this.chain.push(block);

        return block;
    }
}

module.exports = Blockchain;