import numberBackend from '../../src/number-backend';

describe('numberBackend', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(numberBackend, 'greet');
      numberBackend.greet();
    });

    it('should have been run once', () => {
      expect(numberBackend.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(numberBackend.greet).to.have.always.returned('hello');
    });
  });
});
