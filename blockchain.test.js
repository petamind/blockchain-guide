const Block = require('./block');
const Blockchain = require('./blockchain');

describe('Blockchain', () => {
    let bc;

    beforeEach(() => {
        bc = new Blockchain();
    });

    it('start with genesis block', () => {
        expect(bc.chain[0]).toEqual(Block.genesis());
    });

    it('add a new block', () => {
        const data = 'foo';
        bc.addBlock(data);
        expect(data).toEqual(bc.chain[bc.chain.length -1].data);
    });
});