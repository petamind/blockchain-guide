const Block = require('./block');
const Blockchain = require('./blockchain');

describe('Blockchain', () => {
    let bc, bc2;

    beforeEach(() => {
        bc = new Blockchain();
        bc2 = new Blockchain();
    });

    it('start with genesis block', () => {
        expect(bc.chain[0]).toEqual(Block.genesis());
    });

    it('add a new block', () => {
        const data = 'foo';
        bc.addBlock(data);
        expect(data).toEqual(bc.chain[bc.chain.length -1].data);
    });

    it('validates a valid chain', () => {
        bc2.addBlock('foo');
        expect(bc.isValidChain(bc2.chain)).toBe(true);//check itself valid?
    });

    it('invalidates a chain with a currupt genesis block', () => {
        bc2.chain[0].data = 'Bad data';
        expect(bc.isValidChain(bc2.chain)).toBe(false);
    });

    it('invalidates a corrupted chain', () => {
        bc2.addBlock('foo');
        bc2.chain[1].data = 'Not foo';
        expect(bc.isValidChain(bc2.chain)).toBe(false);
    });
});