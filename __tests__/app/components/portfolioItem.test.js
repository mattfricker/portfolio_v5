jest.unmock('../../../src/client/components/PortfolioItem');
jest.unmock('../../../src/data/portfolio');
jest.unmock('material-ui/lib/card/card');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import {findWithType} from 'react-shallow-testutils';

import Card from 'material-ui/lib/card/card';
import PortfolioItem from '../../../src/client/components/PortfolioItem';

import items from '../../../src/data/portfolio';

const css = {slideLeft: "slideLeft", slideRight: "slideRight"};

function renderPortfolioItem(items, css, index) {
    let renderer = TestUtils.createRenderer();
    renderer.render(<PortfolioItem
        css={css}
        key={index}
        title={items[index].title}
        link={items[index].link}
        description={items[index].description}
        image={items[index].image}
        status={items[index].status}
        codeSample={items[index].codeSample}
        index={index}
    />);
    return renderer.getRenderOutput();
}

describe('Tests for the portfolioItem component', function() {
    describe('Items slide in from correct side', function() {

        it('First item has a class of slideLeft', function() {
            let output = renderPortfolioItem(items, css, 0);
            let card = findWithType(output, Card);
            expect(card.props.className).toContain(css.slideLeft);
        });
        
        it('Second item has a class of slideRight', function() {
            let output = renderPortfolioItem(items, css, 1);
            let card = findWithType(output, Card);
            expect(card.props.className).toContain(css.slideRight);
        });
    });
});