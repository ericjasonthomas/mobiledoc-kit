"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('mobiledoc-kit-demo/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'mobiledoc-kit-demo/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _mobiledocKitDemoConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _mobiledocKitDemoConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _mobiledocKitDemoConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _mobiledocKitDemoConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('mobiledoc-kit-demo/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'mobiledoc-kit-demo/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _mobiledocKitDemoConfigEnvironment) {

  var name = _mobiledocKitDemoConfigEnvironment['default'].APP.name;
  var version = _mobiledocKitDemoConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('mobiledoc-kit-demo/components/ember-card-editor', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('mobiledoc-kit-demo/components/ember-card', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('mobiledoc-kit-demo/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
define('mobiledoc-kit-demo/components/mobiledoc-component-card', ['exports', 'ember-mobiledoc-editor/components/mobiledoc-component-card/component'], function (exports, _emberMobiledocEditorComponentsMobiledocComponentCardComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMobiledocEditorComponentsMobiledocComponentCardComponent['default'];
    }
  });
});
define('mobiledoc-kit-demo/components/mobiledoc-dom-renderer', ['exports', 'ember', 'mobiledoc-kit-demo/mobiledoc-cards/dom', 'mobiledoc-kit-demo/mobiledoc-atoms/dom', 'ember-mobiledoc-dom-renderer'], function (exports, _ember, _mobiledocKitDemoMobiledocCardsDom, _mobiledocKitDemoMobiledocAtomsDom, _emberMobiledocDomRenderer) {

  var renderer = new _emberMobiledocDomRenderer['default']({ cards: _mobiledocKitDemoMobiledocCardsDom['default'], atoms: _mobiledocKitDemoMobiledocAtomsDom['default'] });

  exports['default'] = _ember['default'].Component.extend({
    didRender: function didRender() {
      var mobiledoc = this.get('mobiledoc');
      if (!mobiledoc) {
        return;
      }

      if (this._teardownRender) {
        this._teardownRender();
        this._teardownRender = null;
      }

      var target = this.$();
      target.empty();
      try {
        var _renderer$render = renderer.render(mobiledoc);

        var result = _renderer$render.result;
        var teardown = _renderer$render.teardown;

        target.append(result);
        this._teardownRender = teardown;
      } catch (e) {
        console.error(e);
        var result = document.createTextNode(e.message);
        target.append(result);
      }
    }
  });
});
define('mobiledoc-kit-demo/components/mobiledoc-editor', ['exports', 'ember-mobiledoc-editor/components/mobiledoc-editor/component'], function (exports, _emberMobiledocEditorComponentsMobiledocEditorComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMobiledocEditorComponentsMobiledocEditorComponent['default'];
    }
  });
});
define('mobiledoc-kit-demo/components/mobiledoc-html-renderer', ['exports', 'ember', 'mobiledoc-kit-demo/mobiledoc-cards/html', 'mobiledoc-kit-demo/mobiledoc-atoms/html', 'ember-mobiledoc-html-renderer'], function (exports, _ember, _mobiledocKitDemoMobiledocCardsHtml, _mobiledocKitDemoMobiledocAtomsHtml, _emberMobiledocHtmlRenderer) {

  var renderer = new _emberMobiledocHtmlRenderer['default']({ cards: _mobiledocKitDemoMobiledocCardsHtml['default'], atoms: _mobiledocKitDemoMobiledocAtomsHtml['default'] });

  exports['default'] = _ember['default'].Component.extend({
    didRender: function didRender() {
      var mobiledoc = this.get('mobiledoc');
      if (!mobiledoc) {
        return;
      }

      var target = this.$();
      target.empty();
      try {
        var _renderer$render = renderer.render(mobiledoc);

        var html = _renderer$render.result;

        target.text(html);
      } catch (e) {
        console.error(e);
        var result = document.createTextNode(e.message);
        target.append(result);
      }
    }
  });
});
define('mobiledoc-kit-demo/components/mobiledoc-link-button', ['exports', 'ember-mobiledoc-editor/components/mobiledoc-link-button/component'], function (exports, _emberMobiledocEditorComponentsMobiledocLinkButtonComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMobiledocEditorComponentsMobiledocLinkButtonComponent['default'];
    }
  });
});
define('mobiledoc-kit-demo/components/mobiledoc-link-prompt', ['exports', 'ember-mobiledoc-editor/components/mobiledoc-link-prompt/component'], function (exports, _emberMobiledocEditorComponentsMobiledocLinkPromptComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMobiledocEditorComponentsMobiledocLinkPromptComponent['default'];
    }
  });
});
define('mobiledoc-kit-demo/components/mobiledoc-markup-button', ['exports', 'ember-mobiledoc-editor/components/mobiledoc-markup-button/component'], function (exports, _emberMobiledocEditorComponentsMobiledocMarkupButtonComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMobiledocEditorComponentsMobiledocMarkupButtonComponent['default'];
    }
  });
});
define('mobiledoc-kit-demo/components/mobiledoc-section-button', ['exports', 'ember-mobiledoc-editor/components/mobiledoc-section-button/component'], function (exports, _emberMobiledocEditorComponentsMobiledocSectionButtonComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMobiledocEditorComponentsMobiledocSectionButtonComponent['default'];
    }
  });
});
define('mobiledoc-kit-demo/components/mobiledoc-text-renderer', ['exports', 'ember', 'mobiledoc-kit-demo/mobiledoc-cards/text', 'mobiledoc-kit-demo/mobiledoc-atoms/text', 'ember-mobiledoc-text-renderer'], function (exports, _ember, _mobiledocKitDemoMobiledocCardsText, _mobiledocKitDemoMobiledocAtomsText, _emberMobiledocTextRenderer) {

  var renderer = new _emberMobiledocTextRenderer['default']({ cards: _mobiledocKitDemoMobiledocCardsText['default'], atoms: _mobiledocKitDemoMobiledocAtomsText['default'] });

  var addHTMLEntitites = function addHTMLEntitites(str) {
    return str.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>');
  };

  exports['default'] = _ember['default'].Component.extend({
    didRender: function didRender() {
      var mobiledoc = this.get('mobiledoc');
      if (!mobiledoc) {
        return;
      }
      if (this._teardownRender) {
        this._teardownRender();
        this._teardownRender = null;
      }

      var target = this.$();
      target.empty();
      try {
        var _renderer$render = renderer.render(mobiledoc);

        var text = _renderer$render.result;
        var teardown = _renderer$render.teardown;

        text = addHTMLEntitites(text);
        target.html(text);

        this._teardownRender = teardown;
      } catch (e) {
        console.error(e);
        var result = document.createTextNode(e.message);
        target.append(result);
      }
    }
  });
});
define('mobiledoc-kit-demo/components/mobiledoc-toolbar', ['exports', 'ember-mobiledoc-editor/components/mobiledoc-toolbar/component'], function (exports, _emberMobiledocEditorComponentsMobiledocToolbarComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMobiledocEditorComponentsMobiledocToolbarComponent['default'];
    }
  });
});
define('mobiledoc-kit-demo/components/render-mobiledoc', ['exports', 'ember-mobiledoc-dom-renderer/components/render-mobiledoc'], function (exports, _emberMobiledocDomRendererComponentsRenderMobiledoc) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMobiledocDomRendererComponentsRenderMobiledoc['default'];
    }
  });
});
define('mobiledoc-kit-demo/components/tether-to-selection', ['exports', 'ember-mobiledoc-editor/components/tether-to-selection/component'], function (exports, _emberMobiledocEditorComponentsTetherToSelectionComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMobiledocEditorComponentsTetherToSelectionComponent['default'];
    }
  });
});
define('mobiledoc-kit-demo/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('mobiledoc-kit-demo/controllers/index', ['exports', 'ember', 'mobiledoc-kit-demo/mobiledocs/index'], function (exports, _ember, _mobiledocKitDemoMobiledocsIndex) {

  var INITIAL_MOBILEDOC = 'simple';

  var $ = _ember['default'].$;
  exports['default'] = _ember['default'].Controller.extend({
    init: function init() {
      this._super.apply(this, arguments);
      var mobiledoc = _mobiledocKitDemoMobiledocsIndex['default'][INITIAL_MOBILEDOC];
      this.set('mobiledoc', mobiledoc);
      this.set('editedMobiledoc', mobiledoc);
      this.set('rendererName', 'dom');
    },

    actions: {
      didCreateEditor: function didCreateEditor(editor) {
        this.enableLogging(editor);
      },

      changeMobiledoc: function changeMobiledoc() {
        var selectElement = $('#select-mobiledoc');
        var name = selectElement.val();
        var mobiledoc = _mobiledocKitDemoMobiledocsIndex['default'][name];

        this.set('mobiledoc', mobiledoc);
        this.set('editedMobiledoc', mobiledoc);
      },

      setRenderer: function setRenderer(rendererName) {
        this.set('rendererName', rendererName);
      },

      didEdit: function didEdit(value) {
        this.set('editedMobiledoc', value);
      }
    },

    enableLogging: function enableLogging(editor) {
      editor.enableLogging();
    }
  });
});
define('mobiledoc-kit-demo/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('mobiledoc-kit-demo/helpers/format-object', ['exports', 'ember', 'npm:mobiledoc-pretty-json-renderer'], function (exports, _ember, _npmMobiledocPrettyJsonRenderer) {
  var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

  exports.formatObject = formatObject;

  function formatObject(_ref) {
    var _ref2 = _slicedToArray(_ref, 1);

    var object = _ref2[0];

    return (0, _npmMobiledocPrettyJsonRenderer['default'])(object);
  }

  exports['default'] = _ember['default'].Helper.helper(formatObject);
});
define('mobiledoc-kit-demo/helpers/hash', ['exports', 'ember-mobiledoc-editor/helpers/hash'], function (exports, _emberMobiledocEditorHelpersHash) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMobiledocEditorHelpersHash['default'];
    }
  });
  Object.defineProperty(exports, 'hash', {
    enumerable: true,
    get: function get() {
      return _emberMobiledocEditorHelpersHash.hash;
    }
  });
});
define('mobiledoc-kit-demo/helpers/in-array', ['exports', 'ember-mobiledoc-editor/helpers/in-array'], function (exports, _emberMobiledocEditorHelpersInArray) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMobiledocEditorHelpersInArray['default'];
    }
  });
  Object.defineProperty(exports, 'inArray', {
    enumerable: true,
    get: function get() {
      return _emberMobiledocEditorHelpersInArray.inArray;
    }
  });
});
define('mobiledoc-kit-demo/helpers/mobiledoc-atoms-list', ['exports', 'ember', 'mobiledoc-kit-demo/mobiledoc-atoms/dom'], function (exports, _ember, _mobiledocKitDemoMobiledocAtomsDom) {
  exports.mobiledocAtomsList = mobiledocAtomsList;

  function mobiledocAtomsList() {
    return _mobiledocKitDemoMobiledocAtomsDom['default'];
  }

  exports['default'] = _ember['default'].Helper.helper(mobiledocAtomsList);
});
define('mobiledoc-kit-demo/helpers/mobiledoc-cards-list', ['exports', 'ember', 'mobiledoc-kit-demo/mobiledoc-cards/dom'], function (exports, _ember, _mobiledocKitDemoMobiledocCardsDom) {
  exports.mobiledocCardsList = mobiledocCardsList;

  function mobiledocCardsList() {
    return _mobiledocKitDemoMobiledocCardsDom['default'];
  }

  exports['default'] = _ember['default'].Helper.helper(mobiledocCardsList);
});
define('mobiledoc-kit-demo/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'mobiledoc-kit-demo/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _mobiledocKitDemoConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_mobiledocKitDemoConfigEnvironment['default'].APP.name, _mobiledocKitDemoConfigEnvironment['default'].APP.version)
  };
});
define('mobiledoc-kit-demo/initializers/export-application-global', ['exports', 'ember', 'mobiledoc-kit-demo/config/environment'], function (exports, _ember, _mobiledocKitDemoConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_mobiledocKitDemoConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _mobiledocKitDemoConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_mobiledocKitDemoConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('mobiledoc-kit-demo/mobiledoc-atoms/dom/image', ['exports'], function (exports) {
  exports['default'] = {
    name: 'image-atom',
    type: 'dom',
    render: function render() {
      var element = document.createElement("img");
      element.style.display = 'inline';
      element.src = 'https://placehold.it/30x20';
      return element;
    }
  };
});
define('mobiledoc-kit-demo/mobiledoc-atoms/dom/mention', ['exports'], function (exports) {
  exports['default'] = {
    name: 'mention-atom',
    type: 'dom',
    render: function render(_ref) {
      var value = _ref.value;

      var element = document.createElement("span");
      element.className = 'mention-atom';
      element.appendChild(document.createTextNode('Hello ' + value));
      return element;
    }
  };
});
define('mobiledoc-kit-demo/mobiledoc-atoms/dom', ['exports', 'mobiledoc-kit-demo/mobiledoc-atoms/dom/mention', 'mobiledoc-kit-demo/mobiledoc-atoms/dom/image'], function (exports, _mobiledocKitDemoMobiledocAtomsDomMention, _mobiledocKitDemoMobiledocAtomsDomImage) {
  exports['default'] = [_mobiledocKitDemoMobiledocAtomsDomMention['default'], _mobiledocKitDemoMobiledocAtomsDomImage['default']];
});
define('mobiledoc-kit-demo/mobiledoc-atoms/html/image', ['exports'], function (exports) {
  exports['default'] = {
    name: 'image-atom',
    type: 'html',
    render: function render(_ref) {
      var value = _ref.value;

      return '<img src="' + value + '">';
    }
  };
});
define('mobiledoc-kit-demo/mobiledoc-atoms/html/mention', ['exports'], function (exports) {
  exports['default'] = {
    name: 'mention-atom',
    type: 'html',
    render: function render(_ref) {
      var value = _ref.value;

      return '<span class="mention-atom">Hello ' + value + '</span>';
    }
  };
});
define('mobiledoc-kit-demo/mobiledoc-atoms/html', ['exports', 'mobiledoc-kit-demo/mobiledoc-atoms/html/mention', 'mobiledoc-kit-demo/mobiledoc-atoms/html/image'], function (exports, _mobiledocKitDemoMobiledocAtomsHtmlMention, _mobiledocKitDemoMobiledocAtomsHtmlImage) {
  exports['default'] = [_mobiledocKitDemoMobiledocAtomsHtmlMention['default'], _mobiledocKitDemoMobiledocAtomsHtmlImage['default']];
});
define('mobiledoc-kit-demo/mobiledoc-atoms/text/mention', ['exports'], function (exports) {
  exports['default'] = {
    name: 'mention-atom',
    type: 'text',
    render: function render(_ref) {
      var value = _ref.value;

      return 'Hello ' + value;
    }
  };
});
define('mobiledoc-kit-demo/mobiledoc-atoms/text', ['exports', 'mobiledoc-kit-demo/mobiledoc-atoms/text/mention'], function (exports, _mobiledocKitDemoMobiledocAtomsTextMention) {
  exports['default'] = [_mobiledocKitDemoMobiledocAtomsTextMention['default']];
});
define('mobiledoc-kit-demo/mobiledoc-cards/dom/codemirror', ['exports'], function (exports) {
  /* global $, CodeMirror */
  var defaultCode = 'let x = 3;';

  function codeMirror(element, code) {
    var readOnly = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
    var callback = arguments.length <= 3 || arguments[3] === undefined ? function () {} : arguments[3];

    setTimeout(function () {
      var ta = $('<textarea>' + code + '</textarea>').appendTo(element);
      var options = {
        mode: 'javascript'
      };
      if (readOnly) {
        options.readOnly = 'nocursor';
      }
      var cm = CodeMirror.fromTextArea(ta[0], options);
      callback(cm);
    });
  }

  exports['default'] = {
    name: 'codemirror-card',
    type: 'dom',

    render: function render(_ref) {
      var env = _ref.env;
      var options = _ref.options;
      var payload = _ref.payload;

      var element = $('<div></div>')[0];
      var code = payload.code || defaultCode;

      if (env.isInEditor) {
        $('<button>Edit</button>').appendTo(element).on('click', env.edit);
      }

      var readOnly = true;
      codeMirror(element, code, readOnly);

      return element;
    },

    edit: function edit(_ref2) {
      var env = _ref2.env;
      var options = _ref2.options;
      var payload = _ref2.payload;

      var element = $('<div></div>')[0];
      var code = payload.code || defaultCode;

      var saveButton = $('<button>Save</button>').appendTo(element);

      var readOnly = false;
      var callback = function callback(cm) {
        saveButton.on('click', function () {
          return env.save({ code: cm.getValue() });
        });
      };
      codeMirror(element, code, readOnly, callback);

      return element;
    }
  };
});
define('mobiledoc-kit-demo/mobiledoc-cards/dom/dragover', ['exports', 'ember'], function (exports, _ember) {
  var $ = _ember['default'].$;
  exports['default'] = {
    name: 'dragover',
    type: 'dom',
    render: function render(_ref) {
      var env = _ref.env;
      var payload = _ref.payload;

      var color = payload.didDrop ? 'red' : payload.didDrag ? 'green' : 'black';
      var text = payload.didDrop ? 'dropped' : payload.didDrag ? 'dragged' : 'nothing';
      var div = $('<div>' + text + '</div>').css({
        border: '2px solid ' + color
      });

      if (env.isInEditor) {
        div.on('dragover', function (event) {
          event.preventDefault();

          div.css({ border: '2px solid green' }).text('DRAGOVER');
          payload.didDrag = true;
          env.save(payload);
        });
        div.on('drop', function (event) {
          event.preventDefault();

          div.css({ border: '2px solid red' }).text('DROP');
          payload.didDrop = true;
          env.save(payload);
        });
      }

      return div[0];
    }
  };
});
define('mobiledoc-kit-demo/mobiledoc-cards/dom/image', ['exports'], function (exports) {
  /* global $ */
  var defaultSrc = 'http://placekitten.com/200/75';

  function makeImageInWrapper() {
    var src = arguments.length <= 0 || arguments[0] === undefined ? defaultSrc : arguments[0];

    return $('<div></div>').append('<img src="' + src + '">')[0];
  }

  exports['default'] = {
    name: 'image-card',
    type: 'dom',
    render: function render(_ref) {
      var env = _ref.env;
      var payload = _ref.payload;

      var element = makeImageInWrapper(payload.src);
      var isInEditor = env.isInEditor;

      if (isInEditor) {
        $('<button>Change</button>').appendTo(element).on('click', env.edit);
      }

      return element;
    },
    edit: function edit(_ref2) {
      var env = _ref2.env;
      var payload = _ref2.payload;

      var element = makeImageInWrapper(payload.src);

      function importImage(event) {
        var reader = new FileReader();
        var file = event.target.files[0];
        reader.onloadend = function () {
          env.save({ src: reader.result });
        };
        reader.readAsDataURL(file);
      }

      $('<input type="file">').appendTo(element).on('change', importImage);

      $('<button>Save</button>').appendTo(element).on('click', function () {
        env.save(payload);
      });

      return element;
    }
    /* FIXME: html and text
    html: {
      setup(buffer, options, env, payload) {
        let src = payload.src || defaultSrc;
        let html = `<img src="${src}">`;
        buffer.push(html);
      }
    },
    text: {
      setup(str, options, env, payload) {
        return "[image]";
      }
    }
    */
  };
});
define('mobiledoc-kit-demo/mobiledoc-cards/dom/input', ['exports', 'ember'], function (exports, _ember) {
  var $ = _ember['default'].$;
  exports['default'] = {
    name: 'input-card',
    type: 'dom',
    render: function render(_ref) {
      var env = _ref.env;
      var payload = _ref.payload;

      var text = 'I am in display mode';
      if (payload.name) {
        text = 'Hello, ' + payload.name + '!';
      }
      var card = $('<div>' + text + '</div>');
      var button = $('<button>Edit</button>');
      button.on('click', env.edit);

      if (env.edit) {
        card.append(button);
      }
      return card[0];
    },
    edit: function edit(_ref2) {
      var env = _ref2.env;

      var card = $('<div>What is your name?</div>');
      card.innerHTML = 'What is your name?';

      var input = $('<input placeholder="Enter your name...">');
      var button = $('<button>Save</button>');
      button.on('click', function () {
        var name = input.val();
        env.save({ name: name });
      });

      card.append(input);
      card.append(button);
      return card[0];
    }
  };
});
define('mobiledoc-kit-demo/mobiledoc-cards/dom/selfie', ['exports', 'ember'], function (exports, _ember) {
  var $ = _ember['default'].$;
  exports['default'] = {
    name: 'selfie-card',
    type: 'dom',
    render: function render(_ref) {
      var env = _ref.env;
      var payload = _ref.payload;

      var element = $('<div></div>')[0];
      var isInEditor = env.isInEditor;

      if (payload.src) {
        $('<div>' + '<img src="' + payload.src + '"><br>' + '<div>You look nice today.</div>' + (isInEditor ? "<div><button id='go-edit'>Take a better picture</button></div>" : "") + '</div>').appendTo(element);
      } else {
        $('<div>' + 'Hello there!' + (isInEditor ? "<button id='go-edit'>Click here to take a picture</button>" : "") + '</div>').appendTo(element);
      }

      if (isInEditor) {
        setTimeout(function () {
          $('#go-edit').on('click', env.edit);
        });
      }

      return element;
    },

    edit: function edit(_ref2) {
      var env = _ref2.env;

      var element = $('<div></div>')[0];
      $('<div>' + '<video id="video" width="400" height="300" autoplay></video>' + '<button id="snap">Snap Photo</button>' + '<canvas id="canvas" width="400" height="300"></canvas>' + '</div>').appendTo(element);

      setTimeout(function () {
        var canvas = document.getElementById("canvas"),
            context = canvas.getContext("2d"),
            video = document.getElementById("video"),
            videoObj = { "video": true },
            errBack = function errBack() {
          return alert('error getting video feed');
        };

        navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

        navigator.getMedia(videoObj, function (stream) {
          var vendorURL = undefined;
          if (navigator.mozGetUserMedia) {
            video.mozSrcObject = stream;
          } else {
            vendorURL = window.URL || window.webkitURL;
            video.src = vendorURL.createObjectURL(stream);
            video.play();
          }

          $('#snap').click(function () {
            context.drawImage(video, 0, 0, 400, 300);
            var src = canvas.toDataURL('image/png');
            env.save({ src: src });
          });
        }, errBack);
      });

      return element;
    }
    /*
    html: {
      setup(buffer, options, env, payload) {
        buffer.push(`<img src="${payload.src}>"`);
      }
    },
    text: {
      setup() {
        return "[ :-) ]";
      }
    }
    */
  };
});
define('mobiledoc-kit-demo/mobiledoc-cards/dom/simple', ['exports', 'ember'], function (exports, _ember) {
  var $ = _ember['default'].$;
  exports['default'] = {
    name: 'simple-card',
    type: 'dom',
    render: function render(_ref) {
      var env = _ref.env;

      var element = document.createElement('div');
      var card = document.createElement('span');
      card.innerHTML = 'Hello, world';
      element.appendChild(card);
      var button = $('<button>Remove card</button>');
      button.on('click', env.remove);
      return element;
    }
  };
});
define('mobiledoc-kit-demo/mobiledoc-cards/dom', ['exports', 'mobiledoc-kit-demo/mobiledoc-cards/dom/input', 'mobiledoc-kit-demo/mobiledoc-cards/dom/simple', 'mobiledoc-kit-demo/mobiledoc-cards/dom/selfie', 'mobiledoc-kit-demo/mobiledoc-cards/dom/image', 'mobiledoc-kit-demo/mobiledoc-cards/dom/codemirror', 'mobiledoc-kit-demo/mobiledoc-cards/dom/dragover', 'ember-mobiledoc-editor/utils/create-component-card'], function (exports, _mobiledocKitDemoMobiledocCardsDomInput, _mobiledocKitDemoMobiledocCardsDomSimple, _mobiledocKitDemoMobiledocCardsDomSelfie, _mobiledocKitDemoMobiledocCardsDomImage, _mobiledocKitDemoMobiledocCardsDomCodemirror, _mobiledocKitDemoMobiledocCardsDomDragover, _emberMobiledocEditorUtilsCreateComponentCard) {
  exports['default'] = [_mobiledocKitDemoMobiledocCardsDomInput['default'], _mobiledocKitDemoMobiledocCardsDomSimple['default'], _mobiledocKitDemoMobiledocCardsDomSelfie['default'], _mobiledocKitDemoMobiledocCardsDomImage['default'], _mobiledocKitDemoMobiledocCardsDomCodemirror['default'], (0, _emberMobiledocEditorUtilsCreateComponentCard['default'])('ember-card'), _mobiledocKitDemoMobiledocCardsDomDragover['default']];
});
define('mobiledoc-kit-demo/mobiledoc-cards/html/codemirror', ['exports'], function (exports) {
  exports['default'] = {
    name: 'codemirror-card',
    type: 'html',
    render: function render(_ref) {
      var payload = _ref.payload;

      if (payload.code) {
        return '<code>' + payload.code + '</code>';
      }
    }
  };
});
define('mobiledoc-kit-demo/mobiledoc-cards/html/dragover', ['exports'], function (exports) {
  exports['default'] = {
    name: 'dragover',
    type: 'html',
    render: function render(_ref) {
      var payload = _ref.payload;

      return 'Hello, ' + (payload.didDrop ? 'did drop' : 'did not drop') + ', ' + (payload.didDrag ? 'did drag' : 'did not drag');
    }
  };
});
define('mobiledoc-kit-demo/mobiledoc-cards/html/image', ['exports'], function (exports) {
  var defaultSrc = 'http://placekitten.com/200/75';

  exports['default'] = {
    name: 'image-card',
    type: 'html',
    render: function render(_ref) {
      var payload = _ref.payload;

      return '<img src="' + (payload.src || defaultSrc) + '">';
    }
  };
});
define('mobiledoc-kit-demo/mobiledoc-cards/html/input', ['exports'], function (exports) {
  exports['default'] = {
    name: 'input-card',
    type: 'html',
    render: function render(_ref) {
      var payload = _ref.payload;

      return 'Hello, ' + (payload.name || 'unknown') + '!';
    }
  };
});
define('mobiledoc-kit-demo/mobiledoc-cards/html/selfie', ['exports'], function (exports) {
  exports['default'] = {
    name: 'selfie-card',
    type: 'html',
    render: function render(_ref) {
      var env = _ref.env;
      var payload = _ref.payload;

      return '<img src="' + payload.src + '">';
    }
  };
});
define('mobiledoc-kit-demo/mobiledoc-cards/html/simple', ['exports'], function (exports) {
  exports['default'] = {
    name: 'simple-card',
    type: 'html',
    render: function render() {
      return 'Hello, world';
    }
  };
});
define('mobiledoc-kit-demo/mobiledoc-cards/html', ['exports', 'mobiledoc-kit-demo/mobiledoc-cards/html/input', 'mobiledoc-kit-demo/mobiledoc-cards/html/selfie', 'mobiledoc-kit-demo/mobiledoc-cards/html/simple', 'mobiledoc-kit-demo/mobiledoc-cards/html/image', 'mobiledoc-kit-demo/mobiledoc-cards/html/codemirror', 'mobiledoc-kit-demo/mobiledoc-cards/html/dragover'], function (exports, _mobiledocKitDemoMobiledocCardsHtmlInput, _mobiledocKitDemoMobiledocCardsHtmlSelfie, _mobiledocKitDemoMobiledocCardsHtmlSimple, _mobiledocKitDemoMobiledocCardsHtmlImage, _mobiledocKitDemoMobiledocCardsHtmlCodemirror, _mobiledocKitDemoMobiledocCardsHtmlDragover) {
  exports['default'] = [_mobiledocKitDemoMobiledocCardsHtmlInput['default'], _mobiledocKitDemoMobiledocCardsHtmlSelfie['default'], _mobiledocKitDemoMobiledocCardsHtmlSimple['default'], _mobiledocKitDemoMobiledocCardsHtmlImage['default'], _mobiledocKitDemoMobiledocCardsHtmlCodemirror['default'], _mobiledocKitDemoMobiledocCardsHtmlDragover['default']];
});
define('mobiledoc-kit-demo/mobiledoc-cards/text/codemirror', ['exports'], function (exports) {
  exports['default'] = {
    name: 'codemirror-card',
    type: 'text',
    render: function render(_ref) {
      var payload = _ref.payload;

      if (payload.code) {
        return '[code] ' + payload.code;
      }
    }
  };
});
define('mobiledoc-kit-demo/mobiledoc-cards/text/dragover', ['exports'], function (exports) {
  exports['default'] = {
    name: 'dragover',
    type: 'text',
    render: function render(_ref) {
      var payload = _ref.payload;

      return 'Hello, ' + (payload.didDrop ? 'did drop' : 'did not drop') + ', ' + (payload.didDrag ? 'did drag' : 'did not drag');
    }
  };
});
define('mobiledoc-kit-demo/mobiledoc-cards/text/image', ['exports'], function (exports) {
  exports['default'] = {
    name: 'image-card',
    type: 'text',
    render: function render() {
      return '[image]';
    }
  };
});
define('mobiledoc-kit-demo/mobiledoc-cards/text/input', ['exports'], function (exports) {
  exports['default'] = {
    name: 'input-card',
    type: 'text',
    render: function render(_ref) {
      var payload = _ref.payload;

      return 'Hello, ' + (payload.name || 'unknown') + '!';
    }
  };
});
define('mobiledoc-kit-demo/mobiledoc-cards/text/selfie', ['exports'], function (exports) {
  exports['default'] = {
    name: 'selfie-card',
    type: 'text',
    render: function render() {
      return '[ :) ]';
    }
  };
});
define('mobiledoc-kit-demo/mobiledoc-cards/text/simple', ['exports'], function (exports) {
  exports['default'] = {
    name: 'simple-card',
    type: 'text',
    render: function render() {
      return 'Hello, world';
    }
  };
});
define('mobiledoc-kit-demo/mobiledoc-cards/text', ['exports', 'mobiledoc-kit-demo/mobiledoc-cards/text/codemirror', 'mobiledoc-kit-demo/mobiledoc-cards/text/simple', 'mobiledoc-kit-demo/mobiledoc-cards/text/input', 'mobiledoc-kit-demo/mobiledoc-cards/text/image', 'mobiledoc-kit-demo/mobiledoc-cards/text/selfie', 'mobiledoc-kit-demo/mobiledoc-cards/text/dragover'], function (exports, _mobiledocKitDemoMobiledocCardsTextCodemirror, _mobiledocKitDemoMobiledocCardsTextSimple, _mobiledocKitDemoMobiledocCardsTextInput, _mobiledocKitDemoMobiledocCardsTextImage, _mobiledocKitDemoMobiledocCardsTextSelfie, _mobiledocKitDemoMobiledocCardsTextDragover) {
  exports['default'] = [_mobiledocKitDemoMobiledocCardsTextCodemirror['default'], _mobiledocKitDemoMobiledocCardsTextSimple['default'], _mobiledocKitDemoMobiledocCardsTextInput['default'], _mobiledocKitDemoMobiledocCardsTextImage['default'], _mobiledocKitDemoMobiledocCardsTextSelfie['default'], _mobiledocKitDemoMobiledocCardsTextDragover['default']];
});
define('mobiledoc-kit-demo/mobiledoc-titleize/helper', ['exports', 'ember-mobiledoc-editor/helpers/mobiledoc-titleize'], function (exports, _emberMobiledocEditorHelpersMobiledocTitleize) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMobiledocEditorHelpersMobiledocTitleize['default'];
    }
  });
  Object.defineProperty(exports, 'mobiledocTitleize', {
    enumerable: true,
    get: function get() {
      return _emberMobiledocEditorHelpersMobiledocTitleize.mobiledocTitleize;
    }
  });
});
define('mobiledoc-kit-demo/mobiledocs/index', ['exports'], function (exports) {
  exports['default'] = {
    dragover: {
      version: '0.3.0',
      atoms: [],
      markups: [],
      cards: [['dragover', {}]],
      sections: [[1, 'h2', [[0, [], 0, 'Mention Atom']]], [10, 0], [1, 'P', [[0, [], 0, 'some text']]]]
    },
    mentionAtom: {
      version: '0.3.0',
      atoms: [['mention-atom', 'Bob', {}], ['mention-atom', 'Bob', {}], ['mention-atom', 'Bob', {}], ['mention-atom', 'Bob', {}], ['mention-atom', 'Bob', {}], ['mention-atom', 'Bob', {}], ['mention-atom', 'Bob', {}], ['image-atom', 'n/a', {}]],
      markups: [],
      cards: [],
      sections: [[1, 'h2', [[0, [], 0, 'Mention Atom']]], [1, 'P', [[0, [], 0, 'Text before the atom. '], [1, [], 0, 0], [0, [], 0, ' Text after the atom, before image: '], [1, [], 0, 7], [0, [], 0, ' text after the image atom']]], [1, 'P', [[1, [], 0, 1], [0, [], 0, ' atom at start']]], [1, 'P', [[0, [], 0, 'atom at end '], [1, [], 0, 2]]], [1, 'P', [[1, [], 0, 3], [1, [], 0, 4], [0, [], 0, ' multiple atoms at start and end '], [1, [], 0, 5], [1, [], 0, 6]]]]
    },
    codemirrorCard: {
      version: '0.3.0',
      atoms: [],
      markups: [],
      cards: [['codemirror-card']],
      sections: [[1, 'h2', [[0, [], 0, 'Codemirror']]], [10, 0]]
    },
    'null': null,
    blank: '',
    empty: {
      version: '0.3.0',
      atoms: [],
      markups: [],
      cards: [],
      sections: []
    },
    inputCard: {
      version: '0.3.0',
      atoms: [],
      markups: [],
      cards: [['input-card']],
      sections: [[1, 'H2', [[0, [], 0, 'Input Card']]], [10, 0], [1, 'P', [[0, [], 0, 'Text after the card.']]]]
    },
    imageCard: {
      version: '0.3.0',
      atoms: [],
      markups: [],
      cards: [['image-card']],
      sections: [[1, 'p', [[0, [], 0, 'before']]], [10, 0], [1, 'p', [[0, [], 0, 'after']]]]
    },
    selfieCard: {
      version: '0.3.0',
      atoms: [],
      markups: [],
      cards: [['selfie-card']],
      sections: [[1, 'H2', [[0, [], 0, 'Selfie Card']]], [10, 0]]
    },
    simpleCard: {
      version: '0.3.0',
      atoms: [],
      markups: [],
      cards: [['simple-card']],
      sections: [[1, 'p', [[0, [], 0, 'before']]], [10, 0], [1, 'p', [[0, [], 0, 'after']]]]
    },
    simpleList: {
      version: '0.3.0',
      atoms: [],
      markups: [],
      cards: [],
      sections: [[1, 'H2', [[0, [], 0, 'To do today:']]], [3, 'ul', [[[0, [], 0, 'buy milk']], [[0, [], 0, 'water plants']], [[0, [], 0, 'world domination']]]]]
    },
    simple: {
      version: '0.3.0',
      atoms: [],
      markups: [],
      cards: [],
      sections: [[1, 'H2', [[0, [], 0, 'Hello World']]], [1, 'p', [[0, [], 0, 'This is Mobiledoc-kit.']]]]
    },
    emberCard: {
      version: '0.2.0',
      sections: [[], [[1, 'p', [[[], 0, 'before']]], [10, 'ember-card'], [1, 'p', [[[], 0, 'after']]]]]
    }
  };
});
define('mobiledoc-kit-demo/router', ['exports', 'ember', 'mobiledoc-kit-demo/config/environment'], function (exports, _ember, _mobiledocKitDemoConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _mobiledocKitDemoConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define("mobiledoc-kit-demo/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "mobiledoc-kit-demo/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "section");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("Mobiledoc");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "headline-note");
        var el4 = dom.createTextNode("beta!");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        dom.setAttribute(el2, "class", "subheadline");
        var el3 = dom.createTextNode("A web-friendly file format for WYSIWYG editors");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("hr");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [7, 0], [7, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("mobiledoc-kit-demo/templates/components/ember-card-editor", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "mobiledoc-kit-demo/templates/components/ember-card-editor.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Neato! An Ember card in edit mode!");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        var el2 = dom.createTextNode("Save");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        var el2 = dom.createTextNode("Cancel");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [4]);
        var element1 = dom.childAt(fragment, [6]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[1] = dom.createAttrMorph(element0, 'onclick');
        morphs[2] = dom.createAttrMorph(element1, 'onclick');
        return morphs;
      },
      statements: [["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "data.name", ["loc", [null, [3, 14], [3, 23]]]]], [], []]], ["loc", [null, [3, 0], [3, 25]]]], ["attribute", "onclick", ["subexpr", "action", [["get", "saveCard", ["loc", [null, [5, 25], [5, 33]]]], ["subexpr", "hash", [], ["name", ["get", "data.name", ["loc", [null, [5, 45], [5, 54]]]]], ["loc", [null, [5, 34], [5, 55]]]]], [], ["loc", [null, [5, 16], [5, 57]]]]], ["attribute", "onclick", ["get", "cancelCard", ["loc", [null, [6, 18], [6, 28]]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("mobiledoc-kit-demo/templates/components/ember-card", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "mobiledoc-kit-demo/templates/components/ember-card.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("Name: ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "data.name", ["loc", [null, [4, 11], [4, 24]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "mobiledoc-kit-demo/templates/components/ember-card.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Wowza, this card is rendered by Ember!");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        var el2 = dom.createTextNode("Edit");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [4]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[1] = dom.createAttrMorph(element0, 'onclick');
        return morphs;
      },
      statements: [["block", "if", [["get", "data.name", ["loc", [null, [3, 6], [3, 15]]]]], [], 0, null, ["loc", [null, [3, 0], [5, 7]]]], ["attribute", "onclick", ["get", "editCard", ["loc", [null, [7, 18], [7, 26]]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("mobiledoc-kit-demo/templates/components/mobiledoc-dom-renderer", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "mobiledoc-kit-demo/templates/components/mobiledoc-dom-renderer.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "rendered-mobiledoc");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("mobiledoc-kit-demo/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 35,
              "column": 6
            },
            "end": {
              "line": 45,
              "column": 6
            }
          },
          "moduleName": "mobiledoc-kit-demo/templates/index.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          var el2 = dom.createTextNode("Add image");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createElementMorph(element0);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [["element", "action", [["get", "editor.addCardInEditMode", ["loc", [null, [43, 25], [43, 49]]]], "image-card"], [], ["loc", [null, [43, 16], [43, 64]]]], ["inline", "mobiledoc-toolbar", [], ["editor", ["subexpr", "@mut", [["get", "editor", ["loc", [null, [44, 35], [44, 41]]]]], [], []]], ["loc", [null, [44, 8], [44, 43]]]]],
        locals: ["editor"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 71,
            "column": 0
          }
        },
        "moduleName": "mobiledoc-kit-demo/templates/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "section");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("\n    Mobiledoc is a publishing solution designed for both text and\n    dynamically rendered cards. Posts are serialized into ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "https://github.com/bustlelabs/mobiledoc-kit/blob/master/MOBILEDOC.md");
        var el4 = dom.createTextNode("Mobiledoc");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(", and\n    rendered to DOM in a reader's browser.\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("\n    Read more on the ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "https://github.com/bustlelabs/mobiledoc-kit");
        var el4 = dom.createTextNode("mobiledoc-kit");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    GitHub repo.\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "section");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        var el3 = dom.createTextNode("Try a Demo");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "pane");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "output full-left");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("select");
        dom.setAttribute(el4, "id", "select-mobiledoc");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("option");
        dom.setAttribute(el5, "disabled", "");
        var el6 = dom.createTextNode("Load a new Mobiledoc");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("option");
        dom.setAttribute(el5, "value", "simple");
        var el6 = dom.createTextNode("Simple text content");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("option");
        dom.setAttribute(el5, "value", "empty");
        var el6 = dom.createTextNode("Empty mobiledoc");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("option");
        dom.setAttribute(el5, "value", "null");
        var el6 = dom.createTextNode("Null mobiledoc");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("option");
        dom.setAttribute(el5, "value", "blank");
        var el6 = dom.createTextNode("Blank string");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("option");
        dom.setAttribute(el5, "value", "simpleList");
        var el6 = dom.createTextNode("List example");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("option");
        dom.setAttribute(el5, "value", "simpleCard");
        var el6 = dom.createTextNode("Simple Card");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("option");
        dom.setAttribute(el5, "value", "emberCard");
        var el6 = dom.createTextNode("Ember Card");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("option");
        dom.setAttribute(el5, "value", "imageCard");
        var el6 = dom.createTextNode("Image Card");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("option");
        dom.setAttribute(el5, "value", "inputCard");
        var el6 = dom.createTextNode("Card with Input");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("option");
        dom.setAttribute(el5, "value", "selfieCard");
        var el6 = dom.createTextNode("Selfie Card");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("option");
        dom.setAttribute(el5, "value", "codemirrorCard");
        var el6 = dom.createTextNode("Codemirror Card");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("option");
        dom.setAttribute(el5, "value", "mentionAtom");
        var el6 = dom.createTextNode("Mention Atom");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("option");
        dom.setAttribute(el5, "value", "dragover");
        var el6 = dom.createTextNode("Drag drop cards");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "pane");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "output");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h4");
        var el5 = dom.createTextNode("Mobiledoc Output");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("pre");
        dom.setAttribute(el4, "class", "serialized-mobiledoc-wrapper");
        var el5 = dom.createElement("code");
        dom.setAttribute(el5, "id", "serialized-mobiledoc");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "pane");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "output full-right");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h4");
        var el5 = dom.createTextNode("Rendered with ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" renderer");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createTextNode("Use ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("button");
        var el7 = dom.createTextNode("DOM-Renderer");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createTextNode("Use ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("button");
        var el7 = dom.createTextNode("HTML Renderer");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createTextNode("Use ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("button");
        var el7 = dom.createTextNode("Text Renderer");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("hr");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [4]);
        var element2 = dom.childAt(element1, [1, 1]);
        var element3 = dom.childAt(element2, [1]);
        var element4 = dom.childAt(element1, [5, 1]);
        var element5 = dom.childAt(element4, [3]);
        var element6 = dom.childAt(element5, [1, 1]);
        var element7 = dom.childAt(element5, [3, 1]);
        var element8 = dom.childAt(element5, [5, 1]);
        var morphs = new Array(8);
        morphs[0] = dom.createElementMorph(element3);
        morphs[1] = dom.createMorphAt(element2, 3, 3);
        morphs[2] = dom.createMorphAt(dom.childAt(element1, [3, 1, 3, 0]), 0, 0);
        morphs[3] = dom.createMorphAt(dom.childAt(element4, [1]), 1, 1);
        morphs[4] = dom.createElementMorph(element6);
        morphs[5] = dom.createElementMorph(element7);
        morphs[6] = dom.createElementMorph(element8);
        morphs[7] = dom.createMorphAt(element4, 7, 7);
        return morphs;
      },
      statements: [["element", "action", ["changeMobiledoc"], ["on", "change"], ["loc", [null, [19, 36], [19, 76]]]], ["block", "mobiledoc-editor", [], ["class", "post-editor__editor", "mobiledoc", ["subexpr", "@mut", [["get", "mobiledoc", ["loc", [null, [37, 20], [37, 29]]]]], [], []], "cards", ["subexpr", "mobiledoc-cards-list", [], [], ["loc", [null, [38, 16], [38, 38]]]], "atoms", ["subexpr", "mobiledoc-atoms-list", [], [], ["loc", [null, [39, 16], [39, 38]]]], "on-change", ["subexpr", "action", ["didEdit"], [], ["loc", [null, [40, 20], [40, 38]]]], "did-create-editor", ["subexpr", "action", ["didCreateEditor"], [], ["loc", [null, [41, 28], [41, 54]]]]], 0, null, ["loc", [null, [35, 6], [45, 27]]]], ["inline", "format-object", [["get", "editedMobiledoc", ["loc", [null, [53, 24], [53, 39]]]]], [], ["loc", [null, [53, 6], [53, 43]]]], ["content", "rendererName", ["loc", [null, [59, 24], [59, 40]]]], ["element", "action", ["setRenderer", "dom"], [], ["loc", [null, [61, 24], [61, 54]]]], ["element", "action", ["setRenderer", "html"], [], ["loc", [null, [62, 24], [62, 55]]]], ["element", "action", ["setRenderer", "text"], [], ["loc", [null, [63, 24], [63, 55]]]], ["inline", "component", [["subexpr", "concat", ["mobiledoc-", ["get", "rendererName", ["loc", [null, [66, 39], [66, 51]]]], "-renderer"], [], ["loc", [null, [66, 18], [66, 64]]]]], ["mobiledoc", ["subexpr", "@mut", [["get", "editedMobiledoc", ["loc", [null, [66, 75], [66, 90]]]]], [], []]], ["loc", [null, [66, 6], [66, 92]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('mobiledoc-kit-demo/config/environment', ['ember'], function(Ember) {
  var prefix = 'mobiledoc-kit-demo';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("mobiledoc-kit-demo/app")["default"].create({"name":"mobiledoc-kit-demo","version":"v0.9.8"});
}

/* jshint ignore:end */
//# sourceMappingURL=mobiledoc-kit-demo.map