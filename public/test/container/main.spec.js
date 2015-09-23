/**
	*Why to include es5-shim?
	*PhantomJS is built with an old version of JavaScriptCore that is missing the "bind" implementation,
	*henceforth we have to include es5-shim [https://github.com/duojs/test/issues/55]
 */

require('es5-shim');
var React = require('react/addons');
var ReactTestUtils = React.addons.TestUtils;
var expect = require("chai").expect;
var Well = require("../../src/container/main");

describe('Container Tests', function () {

    it("should render container",function() {

        var component = ReactTestUtils.renderIntoDocument(<Well/>);
        var container = ReactTestUtils.findRenderedDOMComponentWithClass(component, "container-fluid");
        expect(container).to.exist;

    });
});