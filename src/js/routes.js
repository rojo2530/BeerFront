/* eslint-disable no-undef */
import { renderBeersDom } from './beers.js';
import renderDetailDom from './detail.js';

page('/', () => {
	renderBeersDom();
});

page('/detail/:id', ctx => {
	renderDetailDom(ctx.params.id);
});

page();