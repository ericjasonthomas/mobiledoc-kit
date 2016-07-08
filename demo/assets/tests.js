define('mobiledoc-kit-demo/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/components/ember-card-editor.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/ember-card-editor.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/ember-card-editor.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/components/ember-card.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/ember-card.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/ember-card.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/components/mobiledoc-dom-renderer.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/mobiledoc-dom-renderer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/mobiledoc-dom-renderer.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/components/mobiledoc-html-renderer.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/mobiledoc-html-renderer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/mobiledoc-html-renderer.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/components/mobiledoc-text-renderer.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/mobiledoc-text-renderer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/mobiledoc-text-renderer.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/controllers/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/helpers/format-object.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/format-object.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/format-object.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/helpers/mobiledoc-atoms-list.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/mobiledoc-atoms-list.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/mobiledoc-atoms-list.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/helpers/mobiledoc-cards-list.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/mobiledoc-cards-list.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/mobiledoc-cards-list.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'mobiledoc-kit-demo/tests/helpers/start-app', 'mobiledoc-kit-demo/tests/helpers/destroy-app'], function (exports, _qunit, _mobiledocKitDemoTestsHelpersStartApp, _mobiledocKitDemoTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _mobiledocKitDemoTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _mobiledocKitDemoTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('mobiledoc-kit-demo/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/helpers/resolver', ['exports', 'ember/resolver', 'mobiledoc-kit-demo/config/environment'], function (exports, _emberResolver, _mobiledocKitDemoConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _mobiledocKitDemoConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _mobiledocKitDemoConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('mobiledoc-kit-demo/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/helpers/start-app', ['exports', 'ember', 'mobiledoc-kit-demo/app', 'mobiledoc-kit-demo/config/environment'], function (exports, _ember, _mobiledocKitDemoApp, _mobiledocKitDemoConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _mobiledocKitDemoConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _mobiledocKitDemoApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('mobiledoc-kit-demo/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/integration/components/mobiledoc-dom-renderer-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('mobiledoc-dom-renderer', 'Integration | Component | mobiledoc dom renderer', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 26
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'mobiledoc-dom-renderer', ['loc', [null, [1, 0], [1, 26]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.equal(this.$().text().trim(), '');
  });
});
define('mobiledoc-kit-demo/tests/integration/components/mobiledoc-dom-renderer-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/mobiledoc-dom-renderer-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/mobiledoc-dom-renderer-test.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/mobiledoc-atoms/dom/image.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mobiledoc-atoms/dom/image.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mobiledoc-atoms/dom/image.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/mobiledoc-atoms/dom/mention.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mobiledoc-atoms/dom/mention.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mobiledoc-atoms/dom/mention.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/mobiledoc-atoms/dom.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mobiledoc-atoms/dom.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mobiledoc-atoms/dom.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/mobiledoc-atoms/html/image.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mobiledoc-atoms/html/image.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mobiledoc-atoms/html/image.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/mobiledoc-atoms/html/mention.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mobiledoc-atoms/html/mention.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mobiledoc-atoms/html/mention.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/mobiledoc-atoms/html.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mobiledoc-atoms/html.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mobiledoc-atoms/html.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/mobiledoc-atoms/text/mention.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mobiledoc-atoms/text/mention.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mobiledoc-atoms/text/mention.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/mobiledoc-atoms/text.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mobiledoc-atoms/text.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mobiledoc-atoms/text.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/mobiledoc-cards/dom/codemirror.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mobiledoc-cards/dom/codemirror.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mobiledoc-cards/dom/codemirror.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/mobiledoc-cards/dom/dragover.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mobiledoc-cards/dom/dragover.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mobiledoc-cards/dom/dragover.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/mobiledoc-cards/dom/image.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mobiledoc-cards/dom/image.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mobiledoc-cards/dom/image.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/mobiledoc-cards/dom/input.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mobiledoc-cards/dom/input.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mobiledoc-cards/dom/input.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/mobiledoc-cards/dom/selfie.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mobiledoc-cards/dom/selfie.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mobiledoc-cards/dom/selfie.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/mobiledoc-cards/dom/simple.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mobiledoc-cards/dom/simple.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mobiledoc-cards/dom/simple.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/mobiledoc-cards/dom.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mobiledoc-cards/dom.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mobiledoc-cards/dom.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/mobiledoc-cards/html/codemirror.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mobiledoc-cards/html/codemirror.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mobiledoc-cards/html/codemirror.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/mobiledoc-cards/html/dragover.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mobiledoc-cards/html/dragover.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mobiledoc-cards/html/dragover.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/mobiledoc-cards/html/image.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mobiledoc-cards/html/image.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mobiledoc-cards/html/image.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/mobiledoc-cards/html/input.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mobiledoc-cards/html/input.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mobiledoc-cards/html/input.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/mobiledoc-cards/html/selfie.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mobiledoc-cards/html/selfie.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mobiledoc-cards/html/selfie.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/mobiledoc-cards/html/simple.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mobiledoc-cards/html/simple.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mobiledoc-cards/html/simple.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/mobiledoc-cards/html.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mobiledoc-cards/html.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mobiledoc-cards/html.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/mobiledoc-cards/text/codemirror.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mobiledoc-cards/text/codemirror.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mobiledoc-cards/text/codemirror.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/mobiledoc-cards/text/dragover.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mobiledoc-cards/text/dragover.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mobiledoc-cards/text/dragover.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/mobiledoc-cards/text/image.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mobiledoc-cards/text/image.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mobiledoc-cards/text/image.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/mobiledoc-cards/text/input.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mobiledoc-cards/text/input.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mobiledoc-cards/text/input.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/mobiledoc-cards/text/selfie.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mobiledoc-cards/text/selfie.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mobiledoc-cards/text/selfie.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/mobiledoc-cards/text/simple.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mobiledoc-cards/text/simple.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mobiledoc-cards/text/simple.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/mobiledoc-cards/text.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mobiledoc-cards/text.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mobiledoc-cards/text.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/mobiledocs/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mobiledocs/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mobiledocs/index.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/test-helper', ['exports', 'mobiledoc-kit-demo/tests/helpers/resolver', 'ember-qunit'], function (exports, _mobiledocKitDemoTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_mobiledocKitDemoTestsHelpersResolver['default']);
});
define('mobiledoc-kit-demo/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/unit/helpers/content-kit-cards-list-test', ['exports', 'mobiledoc-kit-demo/helpers/mobiledoc-cards-list', 'qunit'], function (exports, _mobiledocKitDemoHelpersMobiledocCardsList, _qunit) {

  (0, _qunit.module)('Unit | Helper | mobiledoc cards list');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _mobiledocKitDemoHelpersMobiledocCardsList.mobiledocCardsList)();
    assert.ok(result instanceof Array);
  });
});
define('mobiledoc-kit-demo/tests/unit/helpers/content-kit-cards-list-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/helpers/content-kit-cards-list-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/content-kit-cards-list-test.js should pass jshint.');
  });
});
define('mobiledoc-kit-demo/tests/unit/helpers/format-object-test', ['exports', 'mobiledoc-kit-demo/helpers/format-object', 'qunit'], function (exports, _mobiledocKitDemoHelpersFormatObject, _qunit) {

  (0, _qunit.module)('Unit | Helper | format object');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _mobiledocKitDemoHelpersFormatObject.formatObject)([{}]);
    assert.ok(result);
  });
});
define('mobiledoc-kit-demo/tests/unit/helpers/format-object-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/helpers/format-object-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/format-object-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('mobiledoc-kit-demo/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map