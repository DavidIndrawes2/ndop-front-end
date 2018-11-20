import * as CommonUtils from './lambda-common-utils-ES5.js';

var LOGGER = null;

exports.renderer = function(event, context) {
  var metaData = CommonUtils.getMetaData(event, context);
  metaData.sessionId = CommonUtils.COOKIE_NOT_SET;
  LOGGER = CommonUtils.configureLogger(metaData);
  LOGGER.info('starting_lambda | lambda_progress=started');
  var response = CommonUtils.generateResponse(
    CommonUtils.RESPONSE_BODY_QUOTA_EXCEEDED_ERROR,
    CommonUtils.HTTP_RESPONSE_QUOTA_EXCEEDED,
    CommonUtils.CONTENT_TYPE_APPLICATION_JSON_HEADER,
    null);
  LOGGER.info('finishing_lambda | lambda_progress=finished');
  context.succeed(response);
};

