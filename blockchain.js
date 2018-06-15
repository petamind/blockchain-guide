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

    isValidChain(chain){
        if(JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) return false;
        for(let i=1; i<chain.length; i++){
            const block = chain[i];
            const lastBlock = chain[i-1];
            if(block.lastHash !== lastBlock.hash ||
                block.hash !== Block.blockHash(block)){
                return false;
            }
        }
        return true;
    }

    replaceChain(newChain){
        if(newChain.length <= this.chain.length){
            console.log('Received chain is not longer than the current chain.');     
        } else if(!this.isValidChain(newChain)){
            console.log('Invalid new chain');
        } else {
            this.chain = newChain;
            console.log('Relacing blockchain with the new chain');
        }
    }
}

module.exports = Blockchain;