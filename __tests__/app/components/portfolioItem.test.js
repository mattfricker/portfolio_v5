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

describe('Tests for the portfolioItem component', function() {
    describe('Items slide in from correct side', function() {
        let renderer = TestUtils.createRenderer();

        it('First item has a class of slideLeft', function() {
            renderer.render(<PortfolioItem
                css={css}
                key="0"
                title={items[0].title}
                link={items[0].link}
                description={items[0].description}
                image={items[0].image}
                status={items[0].status}
                codeSample={items[0].codeSample}
                index="0"
            />);
            let output = renderer.getRenderOutput();
            var card = findWithType(output, Card);
            expect(card.props.className).toContain(css.slideLeft);
        });
        
        it('Second item has a class of slideRight', function() {
            renderer.render(<PortfolioItem
                css={css}
                key="1"
                title={items[0].title}
                link={items[0].link}
                description={items[0].description}
                image={items[0].image}
                status={items[0].status}
                codeSample={items[0].codeSample}
                index="1"
            />);
            let output = renderer.getRenderOutput();
            var card = findWithType(output, Card);
            expect(card.props.className).toContain(css.slideRight);
        });
    });
});