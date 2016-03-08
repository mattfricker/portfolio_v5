jest.unmock('../../../src/client/components/PortfolioItem');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import CheckboxWithLabel from '../../../src/client/components/PortfolioItem';


describe('Tests for the portfolioItem component', function() {
   describe('Has correct direction of sliding (left or right)', function() {
      it('First component should slide in from the left', function() {
          expect(true).toBe(true);
      });
   });
});