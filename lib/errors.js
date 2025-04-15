'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on neobytescore-p2p Module {0}'
};

module.exports = require('neobytescore-lib').errors.extend(spec);
