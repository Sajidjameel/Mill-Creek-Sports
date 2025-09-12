"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_account_js"],{

/***/ "./assets/js/theme/account.js":
/*!************************************!*\
  !*** ./assets/js/theme/account.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Account)
/* harmony export */ });
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/reduce */ "./node_modules/lodash/reduce.js");
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wishlist */ "./assets/js/theme/wishlist.js");
/* harmony import */ var _common_form_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/form-validation */ "./assets/js/theme/common/form-validation.js");
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _common_payment_method__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/payment-method */ "./assets/js/theme/common/payment-method.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }










var Account = /*#__PURE__*/function (_PageManager) {
  function Account(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.validationDictionary = (0,_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_8__.createTranslationDictionary)(context);
    _this.$state = $('[data-field-type="State"]');
    _this.$body = $('body');
    return _this;
  }
  _inheritsLoose(Account, _PageManager);
  var _proto = Account.prototype;
  _proto.onReady = function onReady() {
    var $editAccountForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.classifyForm)('form[data-edit-account-form]');
    var $addressForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.classifyForm)('form[data-address-form]');
    var $inboxForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.classifyForm)('form[data-inbox-form]');
    var $accountReturnForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.classifyForm)('[data-account-return-form]');
    var $paymentMethodForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.classifyForm)('form[data-payment-method-form]');
    var $reorderForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.classifyForm)('[data-account-reorder-form]');
    var $invoiceButton = $('[data-print-invoice]');
    var $bigCommerce = window.BigCommerce;
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_11__["default"])(this.context);

    // Injected via template
    this.passwordRequirements = this.context.passwordRequirements;

    // Instantiates wish list JS
    _wishlist__WEBPACK_IMPORTED_MODULE_4__["default"].load(this.context);
    if ($editAccountForm.length) {
      this.registerEditAccountValidation($editAccountForm);
      if (this.$state.is('input')) {
        (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.insertStateHiddenField)(this.$state);
      }
    }
    if ($invoiceButton.length) {
      $invoiceButton.on('click', function () {
        var left = window.screen.availWidth / 2 - 450;
        var top = window.screen.availHeight / 2 - 320;
        var url = $invoiceButton.data('printInvoice');
        window.open(url, 'orderInvoice', "width=900,height=650,left=" + left + ",top=" + top + ",scrollbars=1");
      });
    }
    if ($addressForm.length) {
      this.initAddressFormValidation($addressForm);
      if (this.$state.is('input')) {
        (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.insertStateHiddenField)(this.$state);
      }
    }
    if ($inboxForm.length) {
      this.registerInboxValidation($inboxForm);
    }
    if ($accountReturnForm.length) {
      this.initAccountReturnFormValidation($accountReturnForm);
    }
    if ($paymentMethodForm.length) {
      this.initPaymentMethodFormValidation($paymentMethodForm);
    }
    if ($reorderForm.length) {
      this.initReorderForm($reorderForm);
    }
    if ($bigCommerce && $bigCommerce.renderAccountPayments) {
      var _this$context = this.context,
        countries = _this$context.countries,
        paymentsUrl = _this$context.paymentsUrl,
        storeHash = _this$context.storeHash,
        storeLocale = _this$context.storeLocale,
        vaultToken = _this$context.vaultToken,
        shopperId = _this$context.shopperId,
        customerEmail = _this$context.customerEmail,
        providerId = _this$context.providerId,
        currencyCode = _this$context.currencyCode,
        paymentMethodsUrl = _this$context.paymentMethodsUrl,
        paymentProviderInitializationData = _this$context.paymentProviderInitializationData,
        themeSettings = _this$context.themeSettings;
      $bigCommerce.renderAccountPayments({
        styles: {
          inputBase: {
            color: themeSettings['input-font-color'],
            borderColor: themeSettings['input-border-color']
          },
          inputValidationError: {
            color: themeSettings['color-error'],
            borderColor: themeSettings['color-error']
          },
          inputValidationSuccess: {
            color: themeSettings['color-success'],
            borderColor: themeSettings['color-success']
          },
          submitButton: {
            color: themeSettings['button--primary-color'],
            backgroundColor: themeSettings['button--primary-backgroundColor'],
            borderColor: themeSettings['button--primary-backgroundColor'],
            '&:hover': {
              color: themeSettings['button--primary-colorHover'],
              backgroundColor: themeSettings['button--primary-backgroundColorHover'],
              borderColor: themeSettings['button--primary-backgroundColorHover']
            },
            '&:active': {
              color: themeSettings['button--primary-colorActive'],
              backgroundColor: themeSettings['button--primary-backgroundColorActive'],
              borderColor: themeSettings['button--primary-backgroundColorActive']
            },
            '&[disabled]': {
              backgroundColor: themeSettings['button--disabled-backgroundColor'],
              borderColor: themeSettings['button--disabled-borderColor'],
              color: themeSettings['button--disabled-color'],
              cursor: 'not-allowed'
            }
          },
          cancelButton: {
            color: themeSettings['button--default-color'],
            backgroundColor: 'transparent',
            borderColor: themeSettings['button--default-borderColor'],
            '&:hover': {
              color: themeSettings['button--default-colorHover'],
              backgroundColor: 'transparent',
              borderColor: themeSettings['button--default-borderColorHover']
            },
            '&:active': {
              color: themeSettings['button--default-colorActive'],
              backgroundColor: 'transparent',
              borderColor: themeSettings['button--default-borderColorActive']
            }
          },
          label: {
            color: themeSettings['form-label-font-color']
          },
          validationError: {
            color: themeSettings['color-error']
          },
          heading: {
            color: themeSettings['color-textHeading']
          }
        },
        storeContextData: {
          countries: countries,
          paymentsUrl: paymentsUrl,
          storeHash: storeHash,
          storeLocale: storeLocale,
          vaultToken: vaultToken,
          shopperId: shopperId,
          customerEmail: customerEmail,
          providerId: providerId,
          currencyCode: currencyCode,
          paymentMethodsUrl: paymentMethodsUrl,
          paymentProviderInitializationData: paymentProviderInitializationData
        },
        errorHandler: _global_modal__WEBPACK_IMPORTED_MODULE_10__.showAlertModal
      });
    }
    this.bindDeleteAddress();
    this.bindDeletePaymentMethod();
  }

  /**
   * Binds a submit hook to ensure the customer receives a confirmation dialog before deleting an address
   */;
  _proto.bindDeleteAddress = function bindDeleteAddress() {
    $('[data-delete-address]').on('submit', function (event) {
      var message = $(event.currentTarget).data('deleteAddress');
      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };
  _proto.bindDeletePaymentMethod = function bindDeletePaymentMethod() {
    $('[data-delete-payment-method]').on('submit', function (event) {
      var message = $(event.currentTarget).data('deletePaymentMethod');
      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };
  _proto.initReorderForm = function initReorderForm($reorderForm) {
    var _this2 = this;
    $reorderForm.on('submit', function (event) {
      var $productReorderCheckboxes = $('.account-listItem .form-checkbox:checked');
      var submitForm = false;
      $reorderForm.find('[name^="reorderitem"]').remove();
      $productReorderCheckboxes.each(function (index, productCheckbox) {
        var productId = $(productCheckbox).val();
        var $input = $('<input>', {
          type: 'hidden',
          name: "reorderitem[" + productId + "]",
          value: '1'
        });
        submitForm = true;
        $reorderForm.append($input);
      });
      if (!submitForm) {
        event.preventDefault();
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_10__.showAlertModal)(_this2.context.selectItem);
      }
    });
  };
  _proto.initAddressFormValidation = function initAddressFormValidation($addressForm) {
    var _this3 = this;
    var validationModel = (0,_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($addressForm, this.context);
    var stateSelector = 'form[data-address-form] [data-field-type="State"]';
    var $stateElement = $(stateSelector);
    var addressValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: 'form[data-address-form] input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.announceInputErrorMessage
    });
    addressValidator.add(validationModel);
    if ($stateElement) {
      var $last;

      // Requests the states for a country with AJAX
      (0,_common_state_country__WEBPACK_IMPORTED_MODULE_6__["default"])($stateElement, this.context, function (err, field) {
        if (err) {
          throw new Error(err);
        }
        var $field = $(field);
        if (addressValidator.getStatus($stateElement) !== 'undefined') {
          addressValidator.remove($stateElement);
        }
        if ($last) {
          addressValidator.remove($last);
        }
        if ($field.is('select')) {
          $last = field;
          _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.Validators.setStateCountryValidation(addressValidator, field, _this3.validationDictionary.field_not_blank);
        } else {
          _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.Validators.cleanUpStateValidation(field);
        }
      });
    }
    $addressForm.on('submit', function (event) {
      addressValidator.performCheck();
      if (addressValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.initAccountReturnFormValidation = function initAccountReturnFormValidation($accountReturnForm) {
    var errorMessage = $accountReturnForm.data('accountReturnFormError');
    $accountReturnForm.on('submit', function (event) {
      var formSubmit = false;

      // Iterate until we find a non-zero value in the dropdown for quantity
      $('[name^="return_qty"]', $accountReturnForm).each(function (i, ele) {
        if (parseInt($(ele).val(), 10) !== 0) {
          formSubmit = true;

          // Exit out of loop if we found at least one return
          return true;
        }
      });
      if (formSubmit) {
        return true;
      }
      (0,_global_modal__WEBPACK_IMPORTED_MODULE_10__.showAlertModal)(errorMessage);
      return event.preventDefault();
    });
  };
  _proto.initPaymentMethodFormValidation = function initPaymentMethodFormValidation($paymentMethodForm) {
    var _this4 = this;
    // Inject validations into form fields before validation runs
    $paymentMethodForm.find('#first_name.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.firstNameLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#last_name.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.lastNameLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#company.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.companyLabel + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#phone.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.phoneLabel + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#address1.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.address1Label + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#address2.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.address2Label + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#city.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.cityLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#country.form-field').attr('data-validation', "{ \"type\": \"singleselect\", \"label\": \"" + this.context.countryLabel + "\", \"required\": true, \"prefix\": \"" + this.context.chooseCountryLabel + "\" }");
    $paymentMethodForm.find('#state.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.stateLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#postal_code.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.postalCodeLabel + "\", \"required\": true, \"maxlength\": 0 }");
    var validationModel = (0,_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($paymentMethodForm, this.context);
    var paymentMethodSelector = 'form[data-payment-method-form]';
    var paymentMethodValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: paymentMethodSelector + " input[type=\"submit\"]",
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.announceInputErrorMessage
    });
    var $stateElement = $(paymentMethodSelector + " [data-field-type=\"State\"]");
    var $last;
    // Requests the states for a country with AJAX
    (0,_common_state_country__WEBPACK_IMPORTED_MODULE_6__["default"])($stateElement, this.context, function (err, field) {
      if (err) {
        throw new Error(err);
      }
      var $field = $(field);
      if (paymentMethodValidator.getStatus($stateElement) !== 'undefined') {
        paymentMethodValidator.remove($stateElement);
      }
      if ($last) {
        paymentMethodValidator.remove($last);
      }
      if ($field.is('select')) {
        $last = field;
        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.Validators.setStateCountryValidation(paymentMethodValidator, field, _this4.validationDictionary.field_not_blank);
      } else {
        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.Validators.cleanUpStateValidation(field);
      }
    });

    // Use credit card number input listener to highlight credit card type
    var cardType;
    $(paymentMethodSelector + " input[name=\"credit_card_number\"]").on('keyup', function (_ref) {
      var target = _ref.target;
      cardType = (0,_common_payment_method__WEBPACK_IMPORTED_MODULE_9__.creditCardType)(target.value);
      if (cardType) {
        $(paymentMethodSelector + " img[alt=\"" + cardType + "\"]").siblings().css('opacity', '.2');
      } else {
        $(paymentMethodSelector + " img").css('opacity', '1');
      }
    });

    // Set of credit card validation
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__.Validators.setCreditCardNumberValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"credit_card_number\"]", this.context.creditCardNumber);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__.Validators.setExpirationValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"expiration\"]", this.context.expiration);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__.Validators.setNameOnCardValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"name_on_card\"]", this.context.nameOnCard);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__.Validators.setCvvValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"cvv\"]", this.context.cvv, function () {
      return cardType;
    });

    // Set of credit card format
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__.Formatters.setCreditCardNumberFormat(paymentMethodSelector + " input[name=\"credit_card_number\"]");
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__.Formatters.setExpirationFormat(paymentMethodSelector + " input[name=\"expiration\"]");

    // Billing address validation
    paymentMethodValidator.add(validationModel);
    $paymentMethodForm.on('submit', function (event) {
      event.preventDefault();
      // Perform final form validation
      paymentMethodValidator.performCheck();
      if (paymentMethodValidator.areAll('valid')) {
        // Serialize form data and reduce it to object
        var data = lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default()($paymentMethodForm.serializeArray(), function (obj, item) {
          var refObj = obj;
          refObj[item.name] = item.value;
          return refObj;
        }, {});

        // Assign country and state code
        var country = lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(_this4.context.countries, function (_ref2) {
          var value = _ref2.value;
          return value === data.country;
        });
        var state = country && lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(country.states, function (_ref3) {
          var value = _ref3.value;
          return value === data.state;
        });
        data.country_code = country ? country.code : data.country;
        data.state_or_province_code = state ? state.code : data.state;

        // Default Instrument
        data.default_instrument = !!data.default_instrument;

        // Store credit card
        (0,_common_payment_method__WEBPACK_IMPORTED_MODULE_9__.storeInstrument)(_this4.context, data, function () {
          window.location.href = _this4.context.paymentMethodsUrl;
        }, function () {
          (0,_global_modal__WEBPACK_IMPORTED_MODULE_10__.showAlertModal)(_this4.context.generic_error);
        });
      }
    });
  };
  _proto.registerEditAccountValidation = function registerEditAccountValidation($editAccountForm) {
    var validationModel = (0,_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($editAccountForm, this.context);
    var formEditSelector = 'form[data-edit-account-form]';
    var editValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: formEditSelector + " input[type=\"submit\"]",
      delay: 900
    });
    var emailSelector = formEditSelector + " [data-field-type=\"EmailAddress\"]";
    var $emailElement = $(emailSelector);
    var passwordSelector = formEditSelector + " [data-field-type=\"Password\"]";
    var $passwordElement = $(passwordSelector);
    var password2Selector = formEditSelector + " [data-field-type=\"ConfirmPassword\"]";
    var $password2Element = $(password2Selector);
    var currentPasswordSelector = formEditSelector + " [data-field-type=\"CurrentPassword\"]";
    var $currentPassword = $(currentPasswordSelector);

    // This only handles the custom fields, standard fields are added below
    editValidator.add(validationModel);
    if ($emailElement) {
      editValidator.remove(emailSelector);
      _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.Validators.setEmailValidation(editValidator, emailSelector, this.validationDictionary.valid_email);
    }
    if ($passwordElement && $password2Element) {
      var _this$validationDicti = this.validationDictionary,
        enterPassword = _this$validationDicti.password,
        matchPassword = _this$validationDicti.password_match;
      editValidator.remove(passwordSelector);
      editValidator.remove(password2Selector);
      _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.Validators.setPasswordValidation(editValidator, passwordSelector, password2Selector, this.passwordRequirements, (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.createPasswordValidationErrorTextObject)(enterPassword, enterPassword, matchPassword, this.passwordRequirements.error), true);
    }
    if ($currentPassword) {
      editValidator.add({
        selector: currentPasswordSelector,
        validate: function validate(cb, val) {
          var result = true;
          if (val === '' && $passwordElement.val() !== '') {
            result = false;
          }
          cb(result);
        },
        errorMessage: this.context.currentPassword
      });
    }
    editValidator.add([{
      selector: formEditSelector + " input[name='account_firstname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.firstName
    }, {
      selector: formEditSelector + " input[name='account_lastname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.lastName
    }]);
    $editAccountForm.on('submit', function (event) {
      editValidator.performCheck();
      if (editValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
      setTimeout(function () {
        var earliestError = $('span.form-inlineMessage:first').prev('input');
        earliestError.trigger('focus');
      }, 900);
    });
  };
  _proto.registerInboxValidation = function registerInboxValidation($inboxForm) {
    var inboxValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: 'form[data-inbox-form] input[type="submit"]',
      delay: 900
    });
    inboxValidator.add([{
      selector: 'form[data-inbox-form] select[name="message_order_id"]',
      validate: function validate(cb, val) {
        var result = Number(val) !== 0;
        cb(result);
      },
      errorMessage: this.context.enterOrderNum
    }, {
      selector: 'form[data-inbox-form] input[name="message_subject"]',
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.enterSubject
    }, {
      selector: 'form[data-inbox-form] textarea[name="message_content"]',
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.enterMessage
    }]);
    $inboxForm.on('submit', function (event) {
      inboxValidator.performCheck();
      if (inboxValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
      setTimeout(function () {
        var earliestError = $('span.form-inlineMessage:first').prev('input');
        earliestError.trigger('focus');
      }, 900);
    });
  };
  return Account;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./assets/js/theme/common/payment-method.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/payment-method.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Formatters: () => (/* binding */ Formatters),
/* harmony export */   Validators: () => (/* binding */ Validators),
/* harmony export */   creditCardType: () => (/* binding */ creditCardType),
/* harmony export */   storeInstrument: () => (/* binding */ storeInstrument)
/* harmony export */ });
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! creditcards */ "./node_modules/creditcards/index.js");
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(creditcards__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


/**
 * Omit null or empty string properties of object
 * @param {Object} object
 * @returns {Object}
 */
var omitNullString = function omitNullString(obj) {
  var refObj = obj;
  $.each(refObj, function (key, value) {
    if (value === null || value === '') {
      delete refObj[key];
    }
  });
  return refObj;
};

/**
 * Get credit card type from credit card number
 * @param {string} value
 */
var creditCardType = function creditCardType(value) {
  return creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.type(creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.parse(value), true);
};

/**
 * Wrapper for ajax request to store a new instrument in bigpay
 * @param {object} Representing the data needed for the header
 * @param {object} Representing the data needed for the body
 * @param {function} done Function to execute on a successful response
 * @param {function} fail Function to execute on a unsuccessful response
 */
var storeInstrument = function storeInstrument(_ref, _ref2, done, fail) {
  var paymentsUrl = _ref.paymentsUrl,
    shopperId = _ref.shopperId,
    storeHash = _ref.storeHash,
    vaultToken = _ref.vaultToken;
  var provider_id = _ref2.provider_id,
    currency_code = _ref2.currency_code,
    credit_card_number = _ref2.credit_card_number,
    expiration = _ref2.expiration,
    name_on_card = _ref2.name_on_card,
    cvv = _ref2.cvv,
    default_instrument = _ref2.default_instrument,
    address1 = _ref2.address1,
    address2 = _ref2.address2,
    city = _ref2.city,
    postal_code = _ref2.postal_code,
    state_or_province_code = _ref2.state_or_province_code,
    country_code = _ref2.country_code,
    company = _ref2.company,
    first_name = _ref2.first_name,
    last_name = _ref2.last_name,
    email = _ref2.email,
    phone = _ref2.phone;
  var expiry = expiration.split('/');
  $.ajax({
    url: paymentsUrl + "/stores/" + storeHash + "/customers/" + shopperId + "/stored_instruments",
    dataType: 'json',
    method: 'POST',
    cache: false,
    headers: {
      Authorization: vaultToken,
      Accept: 'application/vnd.bc.v1+json',
      'Content-Type': 'application/vnd.bc.v1+json'
    },
    data: JSON.stringify({
      instrument: {
        type: 'card',
        cardholder_name: name_on_card,
        number: creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.parse(credit_card_number),
        expiry_month: creditcards__WEBPACK_IMPORTED_MODULE_0___default().expiration.month.parse(expiry[0]),
        expiry_year: creditcards__WEBPACK_IMPORTED_MODULE_0___default().expiration.year.parse(expiry[1], true),
        verification_value: cvv
      },
      billing_address: omitNullString({
        address1: address1,
        address2: address2,
        city: city,
        postal_code: postal_code,
        state_or_province_code: state_or_province_code,
        country_code: country_code,
        company: company,
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone
      }),
      provider_id: provider_id,
      default_instrument: default_instrument,
      currency_code: currency_code
    })
  }).done(done).fail(fail);
};
var Formatters = {
  /**
   * Sets up a format for credit card number
   * @param field
   */
  setCreditCardNumberFormat: function setCreditCardNumberFormat(field) {
    if (field) {
      $(field).on('keyup', function (_ref3) {
        var target = _ref3.target;
        var refTarget = target;
        refTarget.value = creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.format(creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.parse(target.value));
      });
    }
  },
  /**
   * Sets up a format for expiration date
   * @param field
   */
  setExpirationFormat: function setExpirationFormat(field) {
    if (field) {
      $(field).on('keyup', function (_ref4) {
        var target = _ref4.target,
          which = _ref4.which;
        var refTarget = target;
        if (which === 8 && /.*(\/)$/.test(target.value)) {
          refTarget.value = target.value.slice(0, -1);
        } else if (target.value.length > 4) {
          refTarget.value = target.value.slice(0, 5);
        } else if (which !== 8) {
          refTarget.value = target.value.replace(/^([1-9]\/|[2-9])$/g, '0$1/').replace(/^(0[1-9]|1[0-2])$/g, '$1/').replace(/^([0-1])([3-9])$/g, '0$1/$2').replace(/^(0[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2').replace(/^([0]+)\/|[0]+$/g, '0').replace(/[^\d\/]|^[\/]*$/g, '').replace(/\/\//g, '/');
        }
      });
    }
  }
};
var Validators = {
  /**
   * Sets up a validation for credit card number
   * @param validator
   * @param field
   * @param errorMessage
   */
  setCreditCardNumberValidation: function setCreditCardNumberValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.isValid(creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.parse(val));
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },
  /**
   * Sets up a validation for expiration date
   * @param validator
   * @param field
   * @param errorMessage
   */
  setExpirationValidation: function setExpirationValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var expiry = val.split('/');
          var result = val.length && /^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(val);
          result = result && !creditcards__WEBPACK_IMPORTED_MODULE_0___default().expiration.isPast(creditcards__WEBPACK_IMPORTED_MODULE_0___default().expiration.month.parse(expiry[0]), creditcards__WEBPACK_IMPORTED_MODULE_0___default().expiration.year.parse(expiry[1], true));
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },
  /**
   * Sets up a validation for name on card
   * @param validator
   * @param field
   * @param errorMessage
   */
  setNameOnCardValidation: function setNameOnCardValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = !!val.length;
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },
  /**
   * Sets up a validation for cvv
   * @param validator
   * @param field
   * @param errorMessage
   * @param {any} cardType The credit card number type
   */
  setCvvValidation: function setCvvValidation(validator, field, errorMessage, cardType) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var type = typeof cardType === 'function' ? cardType() : cardType;
          var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_0___default().cvc.isValid(val, type);
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  }
};

/***/ }),

/***/ "./assets/js/theme/global/compare-products.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/global/compare-products.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

function decrementCounter(counter, item) {
  var index = counter.indexOf(item);
  if (index > -1) {
    counter.splice(index, 1);
  }
}
function incrementCounter(counter, item) {
  counter.push(item);
}
function updateCounterNav(counter, $link, urls) {
  if (counter.length !== 0) {
    if (!$link.is('visible')) {
      $link.addClass('show');
    }
    $link.attr('href', urls.compare + "/" + counter.join('/'));
    $link.find('span.countPill').html(counter.length);
  } else {
    $link.removeClass('show');
  }
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_ref) {
  var noCompareMessage = _ref.noCompareMessage,
    urls = _ref.urls;
  var compareCounter = [];
  var $compareLink = $('a[data-compare-nav]');
  $('body').on('compareReset', function () {
    var $checked = $('body').find('input[name="products\[\]"]:checked');
    compareCounter = $checked.length ? $checked.map(function (index, element) {
      return element.value;
    }).get() : [];
    updateCounterNav(compareCounter, $compareLink, urls);
  });
  $('body').triggerHandler('compareReset');
  $('body').on('click', '[data-compare-id]', function (event) {
    var product = event.currentTarget.value;
    var $clickedCompareLink = $('a[data-compare-nav]');
    if (event.currentTarget.checked) {
      incrementCounter(compareCounter, product);
    } else {
      decrementCounter(compareCounter, product);
    }
    updateCounterNav(compareCounter, $clickedCompareLink, urls);
  });
  $('body').on('click', 'a[data-compare-nav]', function () {
    var $clickedCheckedInput = $('body').find('input[name="products\[\]"]:checked');
    if ($clickedCheckedInput.length <= 1) {
      (0,_modal__WEBPACK_IMPORTED_MODULE_0__.showAlertModal)(noCompareMessage);
      return false;
    }
  });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9hY2NvdW50X2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBRVY7QUFDRztBQUNnQjtBQUNBO0FBT2Y7QUFDNkM7QUFDa0Q7QUFDbEY7QUFDUTtBQUFBLElBRW5Da0IsT0FBTywwQkFBQUMsWUFBQTtFQUN4QixTQUFBRCxRQUFZRSxPQUFPLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQ2pCQSxLQUFBLEdBQUFGLFlBQUEsQ0FBQUcsSUFBQSxPQUFNRixPQUFPLENBQUM7SUFDZEMsS0FBQSxDQUFLRSxvQkFBb0IsR0FBR2IsNkZBQTJCLENBQUNVLE9BQU8sQ0FBQztJQUNoRUMsS0FBQSxDQUFLRyxNQUFNLEdBQUdDLENBQUMsQ0FBQywyQkFBMkIsQ0FBQztJQUM1Q0osS0FBQSxDQUFLSyxLQUFLLEdBQUdELENBQUMsQ0FBQyxNQUFNLENBQUM7SUFBQyxPQUFBSixLQUFBO0VBQzNCO0VBQUNNLGNBQUEsQ0FBQVQsT0FBQSxFQUFBQyxZQUFBO0VBQUEsSUFBQVMsTUFBQSxHQUFBVixPQUFBLENBQUFXLFNBQUE7RUFBQUQsTUFBQSxDQUVERSxPQUFPLEdBQVAsU0FBQUEsT0FBT0EsQ0FBQSxFQUFHO0lBQ04sSUFBTUMsZ0JBQWdCLEdBQUcxQixzRUFBWSxDQUFDLDhCQUE4QixDQUFDO0lBQ3JFLElBQU0yQixZQUFZLEdBQUczQixzRUFBWSxDQUFDLHlCQUF5QixDQUFDO0lBQzVELElBQU00QixVQUFVLEdBQUc1QixzRUFBWSxDQUFDLHVCQUF1QixDQUFDO0lBQ3hELElBQU02QixrQkFBa0IsR0FBRzdCLHNFQUFZLENBQUMsNEJBQTRCLENBQUM7SUFDckUsSUFBTThCLGtCQUFrQixHQUFHOUIsc0VBQVksQ0FBQyxnQ0FBZ0MsQ0FBQztJQUN6RSxJQUFNK0IsWUFBWSxHQUFHL0Isc0VBQVksQ0FBQyw2QkFBNkIsQ0FBQztJQUNoRSxJQUFNZ0MsY0FBYyxHQUFHWixDQUFDLENBQUMsc0JBQXNCLENBQUM7SUFDaEQsSUFBTWEsWUFBWSxHQUFHQyxNQUFNLENBQUNDLFdBQVc7SUFFdkN2QixxRUFBZSxDQUFDLElBQUksQ0FBQ0csT0FBTyxDQUFDOztJQUU3QjtJQUNBLElBQUksQ0FBQ3FCLG9CQUFvQixHQUFHLElBQUksQ0FBQ3JCLE9BQU8sQ0FBQ3FCLG9CQUFvQjs7SUFFN0Q7SUFDQXZDLGlEQUFRLENBQUN3QyxJQUFJLENBQUMsSUFBSSxDQUFDdEIsT0FBTyxDQUFDO0lBRTNCLElBQUlXLGdCQUFnQixDQUFDWSxNQUFNLEVBQUU7TUFDekIsSUFBSSxDQUFDQyw2QkFBNkIsQ0FBQ2IsZ0JBQWdCLENBQUM7TUFDcEQsSUFBSSxJQUFJLENBQUNQLE1BQU0sQ0FBQ3FCLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUN6QnJDLGdGQUFzQixDQUFDLElBQUksQ0FBQ2dCLE1BQU0sQ0FBQztNQUN2QztJQUNKO0lBRUEsSUFBSWEsY0FBYyxDQUFDTSxNQUFNLEVBQUU7TUFDdkJOLGNBQWMsQ0FBQ1MsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFNO1FBQzdCLElBQU1DLElBQUksR0FBR1IsTUFBTSxDQUFDUyxNQUFNLENBQUNDLFVBQVUsR0FBRyxDQUFDLEdBQUcsR0FBRztRQUMvQyxJQUFNQyxHQUFHLEdBQUdYLE1BQU0sQ0FBQ1MsTUFBTSxDQUFDRyxXQUFXLEdBQUcsQ0FBQyxHQUFHLEdBQUc7UUFDL0MsSUFBTUMsR0FBRyxHQUFHZixjQUFjLENBQUNnQixJQUFJLENBQUMsY0FBYyxDQUFDO1FBRS9DZCxNQUFNLENBQUNlLElBQUksQ0FBQ0YsR0FBRyxFQUFFLGNBQWMsaUNBQStCTCxJQUFJLGFBQVFHLEdBQUcsa0JBQWUsQ0FBQztNQUNqRyxDQUFDLENBQUM7SUFDTjtJQUVBLElBQUlsQixZQUFZLENBQUNXLE1BQU0sRUFBRTtNQUNyQixJQUFJLENBQUNZLHlCQUF5QixDQUFDdkIsWUFBWSxDQUFDO01BRTVDLElBQUksSUFBSSxDQUFDUixNQUFNLENBQUNxQixFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDekJyQyxnRkFBc0IsQ0FBQyxJQUFJLENBQUNnQixNQUFNLENBQUM7TUFDdkM7SUFDSjtJQUVBLElBQUlTLFVBQVUsQ0FBQ1UsTUFBTSxFQUFFO01BQ25CLElBQUksQ0FBQ2EsdUJBQXVCLENBQUN2QixVQUFVLENBQUM7SUFDNUM7SUFFQSxJQUFJQyxrQkFBa0IsQ0FBQ1MsTUFBTSxFQUFFO01BQzNCLElBQUksQ0FBQ2MsK0JBQStCLENBQUN2QixrQkFBa0IsQ0FBQztJQUM1RDtJQUVBLElBQUlDLGtCQUFrQixDQUFDUSxNQUFNLEVBQUU7TUFDM0IsSUFBSSxDQUFDZSwrQkFBK0IsQ0FBQ3ZCLGtCQUFrQixDQUFDO0lBQzVEO0lBRUEsSUFBSUMsWUFBWSxDQUFDTyxNQUFNLEVBQUU7TUFDckIsSUFBSSxDQUFDZ0IsZUFBZSxDQUFDdkIsWUFBWSxDQUFDO0lBQ3RDO0lBRUEsSUFBSUUsWUFBWSxJQUFJQSxZQUFZLENBQUNzQixxQkFBcUIsRUFBRTtNQUNwRCxJQUFBQyxhQUFBLEdBYUksSUFBSSxDQUFDekMsT0FBTztRQVpaMEMsU0FBUyxHQUFBRCxhQUFBLENBQVRDLFNBQVM7UUFDVEMsV0FBVyxHQUFBRixhQUFBLENBQVhFLFdBQVc7UUFDWEMsU0FBUyxHQUFBSCxhQUFBLENBQVRHLFNBQVM7UUFDVEMsV0FBVyxHQUFBSixhQUFBLENBQVhJLFdBQVc7UUFDWEMsVUFBVSxHQUFBTCxhQUFBLENBQVZLLFVBQVU7UUFDVkMsU0FBUyxHQUFBTixhQUFBLENBQVRNLFNBQVM7UUFDVEMsYUFBYSxHQUFBUCxhQUFBLENBQWJPLGFBQWE7UUFDYkMsVUFBVSxHQUFBUixhQUFBLENBQVZRLFVBQVU7UUFDVkMsWUFBWSxHQUFBVCxhQUFBLENBQVpTLFlBQVk7UUFDWkMsaUJBQWlCLEdBQUFWLGFBQUEsQ0FBakJVLGlCQUFpQjtRQUNqQkMsaUNBQWlDLEdBQUFYLGFBQUEsQ0FBakNXLGlDQUFpQztRQUNqQ0MsYUFBYSxHQUFBWixhQUFBLENBQWJZLGFBQWE7TUFHakJuQyxZQUFZLENBQUNzQixxQkFBcUIsQ0FBQztRQUMvQmMsTUFBTSxFQUFFO1VBQ0pDLFNBQVMsRUFBRTtZQUNQQyxLQUFLLEVBQUVILGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztZQUN4Q0ksV0FBVyxFQUFFSixhQUFhLENBQUMsb0JBQW9CO1VBQ25ELENBQUM7VUFDREssb0JBQW9CLEVBQUU7WUFDbEJGLEtBQUssRUFBRUgsYUFBYSxDQUFDLGFBQWEsQ0FBQztZQUNuQ0ksV0FBVyxFQUFFSixhQUFhLENBQUMsYUFBYTtVQUM1QyxDQUFDO1VBQ0RNLHNCQUFzQixFQUFFO1lBQ3BCSCxLQUFLLEVBQUVILGFBQWEsQ0FBQyxlQUFlLENBQUM7WUFDckNJLFdBQVcsRUFBRUosYUFBYSxDQUFDLGVBQWU7VUFDOUMsQ0FBQztVQUNETyxZQUFZLEVBQUU7WUFDVkosS0FBSyxFQUFFSCxhQUFhLENBQUMsdUJBQXVCLENBQUM7WUFDN0NRLGVBQWUsRUFBRVIsYUFBYSxDQUFDLGlDQUFpQyxDQUFDO1lBQ2pFSSxXQUFXLEVBQUVKLGFBQWEsQ0FBQyxpQ0FBaUMsQ0FBQztZQUM3RCxTQUFTLEVBQUU7Y0FDUEcsS0FBSyxFQUFFSCxhQUFhLENBQUMsNEJBQTRCLENBQUM7Y0FDbERRLGVBQWUsRUFBRVIsYUFBYSxDQUFDLHNDQUFzQyxDQUFDO2NBQ3RFSSxXQUFXLEVBQUVKLGFBQWEsQ0FBQyxzQ0FBc0M7WUFDckUsQ0FBQztZQUNELFVBQVUsRUFBRTtjQUNSRyxLQUFLLEVBQUVILGFBQWEsQ0FBQyw2QkFBNkIsQ0FBQztjQUNuRFEsZUFBZSxFQUFFUixhQUFhLENBQUMsdUNBQXVDLENBQUM7Y0FDdkVJLFdBQVcsRUFBRUosYUFBYSxDQUFDLHVDQUF1QztZQUN0RSxDQUFDO1lBQ0QsYUFBYSxFQUFFO2NBQ1hRLGVBQWUsRUFBRVIsYUFBYSxDQUFDLGtDQUFrQyxDQUFDO2NBQ2xFSSxXQUFXLEVBQUVKLGFBQWEsQ0FBQyw4QkFBOEIsQ0FBQztjQUMxREcsS0FBSyxFQUFFSCxhQUFhLENBQUMsd0JBQXdCLENBQUM7Y0FDOUNTLE1BQU0sRUFBRTtZQUNaO1VBQ0osQ0FBQztVQUNEQyxZQUFZLEVBQUU7WUFDVlAsS0FBSyxFQUFFSCxhQUFhLENBQUMsdUJBQXVCLENBQUM7WUFDN0NRLGVBQWUsRUFBRSxhQUFhO1lBQzlCSixXQUFXLEVBQUVKLGFBQWEsQ0FBQyw2QkFBNkIsQ0FBQztZQUN6RCxTQUFTLEVBQUU7Y0FDUEcsS0FBSyxFQUFFSCxhQUFhLENBQUMsNEJBQTRCLENBQUM7Y0FDbERRLGVBQWUsRUFBRSxhQUFhO2NBQzlCSixXQUFXLEVBQUVKLGFBQWEsQ0FBQyxrQ0FBa0M7WUFDakUsQ0FBQztZQUNELFVBQVUsRUFBRTtjQUNSRyxLQUFLLEVBQUVILGFBQWEsQ0FBQyw2QkFBNkIsQ0FBQztjQUNuRFEsZUFBZSxFQUFFLGFBQWE7Y0FDOUJKLFdBQVcsRUFBRUosYUFBYSxDQUFDLG1DQUFtQztZQUNsRTtVQUNKLENBQUM7VUFDRFcsS0FBSyxFQUFFO1lBQ0hSLEtBQUssRUFBRUgsYUFBYSxDQUFDLHVCQUF1QjtVQUNoRCxDQUFDO1VBQ0RZLGVBQWUsRUFBRTtZQUNiVCxLQUFLLEVBQUVILGFBQWEsQ0FBQyxhQUFhO1VBQ3RDLENBQUM7VUFDRGEsT0FBTyxFQUFFO1lBQ0xWLEtBQUssRUFBRUgsYUFBYSxDQUFDLG1CQUFtQjtVQUM1QztRQUNKLENBQUM7UUFDRGMsZ0JBQWdCLEVBQUU7VUFDZHpCLFNBQVMsRUFBVEEsU0FBUztVQUNUQyxXQUFXLEVBQVhBLFdBQVc7VUFDWEMsU0FBUyxFQUFUQSxTQUFTO1VBQ1RDLFdBQVcsRUFBWEEsV0FBVztVQUNYQyxVQUFVLEVBQVZBLFVBQVU7VUFDVkMsU0FBUyxFQUFUQSxTQUFTO1VBQ1RDLGFBQWEsRUFBYkEsYUFBYTtVQUNiQyxVQUFVLEVBQVZBLFVBQVU7VUFDVkMsWUFBWSxFQUFaQSxZQUFZO1VBQ1pDLGlCQUFpQixFQUFqQkEsaUJBQWlCO1VBQ2pCQyxpQ0FBaUMsRUFBakNBO1FBQ0osQ0FBQztRQUNEZ0IsWUFBWSxFQUFFeEUsMERBQWNBO01BQ2hDLENBQUMsQ0FBQztJQUNOO0lBRUEsSUFBSSxDQUFDeUUsaUJBQWlCLENBQUMsQ0FBQztJQUN4QixJQUFJLENBQUNDLHVCQUF1QixDQUFDLENBQUM7RUFDbEM7O0VBRUE7QUFDSjtBQUNBLEtBRkk7RUFBQTlELE1BQUEsQ0FHQTZELGlCQUFpQixHQUFqQixTQUFBQSxpQkFBaUJBLENBQUEsRUFBRztJQUNoQmhFLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDcUIsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFBNkMsS0FBSyxFQUFJO01BQzdDLElBQU1DLE9BQU8sR0FBR25FLENBQUMsQ0FBQ2tFLEtBQUssQ0FBQ0UsYUFBYSxDQUFDLENBQUN4QyxJQUFJLENBQUMsZUFBZSxDQUFDO01BRTVELElBQUksQ0FBQ2QsTUFBTSxDQUFDdUQsT0FBTyxDQUFDRixPQUFPLENBQUMsRUFBRTtRQUMxQkQsS0FBSyxDQUFDSSxjQUFjLENBQUMsQ0FBQztNQUMxQjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQW5FLE1BQUEsQ0FFRDhELHVCQUF1QixHQUF2QixTQUFBQSx1QkFBdUJBLENBQUEsRUFBRztJQUN0QmpFLENBQUMsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDcUIsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFBNkMsS0FBSyxFQUFJO01BQ3BELElBQU1DLE9BQU8sR0FBR25FLENBQUMsQ0FBQ2tFLEtBQUssQ0FBQ0UsYUFBYSxDQUFDLENBQUN4QyxJQUFJLENBQUMscUJBQXFCLENBQUM7TUFFbEUsSUFBSSxDQUFDZCxNQUFNLENBQUN1RCxPQUFPLENBQUNGLE9BQU8sQ0FBQyxFQUFFO1FBQzFCRCxLQUFLLENBQUNJLGNBQWMsQ0FBQyxDQUFDO01BQzFCO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBbkUsTUFBQSxDQUVEK0IsZUFBZSxHQUFmLFNBQUFBLGVBQWVBLENBQUN2QixZQUFZLEVBQUU7SUFBQSxJQUFBNEQsTUFBQTtJQUMxQjVELFlBQVksQ0FBQ1UsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFBNkMsS0FBSyxFQUFJO01BQy9CLElBQU1NLHlCQUF5QixHQUFHeEUsQ0FBQyxDQUFDLDBDQUEwQyxDQUFDO01BQy9FLElBQUl5RSxVQUFVLEdBQUcsS0FBSztNQUV0QjlELFlBQVksQ0FBQytELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDQyxNQUFNLENBQUMsQ0FBQztNQUVuREgseUJBQXlCLENBQUNJLElBQUksQ0FBQyxVQUFDQyxLQUFLLEVBQUVDLGVBQWUsRUFBSztRQUN2RCxJQUFNQyxTQUFTLEdBQUcvRSxDQUFDLENBQUM4RSxlQUFlLENBQUMsQ0FBQ0UsR0FBRyxDQUFDLENBQUM7UUFDMUMsSUFBTUMsTUFBTSxHQUFHakYsQ0FBQyxDQUFDLFNBQVMsRUFBRTtVQUN4QmtGLElBQUksRUFBRSxRQUFRO1VBQ2RDLElBQUksbUJBQWlCSixTQUFTLE1BQUc7VUFDakNLLEtBQUssRUFBRTtRQUNYLENBQUMsQ0FBQztRQUVGWCxVQUFVLEdBQUcsSUFBSTtRQUVqQjlELFlBQVksQ0FBQzBFLE1BQU0sQ0FBQ0osTUFBTSxDQUFDO01BQy9CLENBQUMsQ0FBQztNQUVGLElBQUksQ0FBQ1IsVUFBVSxFQUFFO1FBQ2JQLEtBQUssQ0FBQ0ksY0FBYyxDQUFDLENBQUM7UUFDdEIvRSw4REFBYyxDQUFDZ0YsTUFBSSxDQUFDNUUsT0FBTyxDQUFDMkYsVUFBVSxDQUFDO01BQzNDO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBbkYsTUFBQSxDQUVEMkIseUJBQXlCLEdBQXpCLFNBQUFBLHlCQUF5QkEsQ0FBQ3ZCLFlBQVksRUFBRTtJQUFBLElBQUFnRixNQUFBO0lBQ3BDLElBQU1DLGVBQWUsR0FBRzlHLG1FQUFVLENBQUM2QixZQUFZLEVBQUUsSUFBSSxDQUFDWixPQUFPLENBQUM7SUFDOUQsSUFBTThGLGFBQWEsR0FBRyxtREFBbUQ7SUFDekUsSUFBTUMsYUFBYSxHQUFHMUYsQ0FBQyxDQUFDeUYsYUFBYSxDQUFDO0lBQ3RDLElBQU1FLGdCQUFnQixHQUFHbkgsdURBQUcsQ0FBQztNQUN6Qm9ILE1BQU0sRUFBRSw4Q0FBOEM7TUFDdERDLEdBQUcsRUFBRS9HLCtFQUF5QkE7SUFDbEMsQ0FBQyxDQUFDO0lBRUY2RyxnQkFBZ0IsQ0FBQ0csR0FBRyxDQUFDTixlQUFlLENBQUM7SUFFckMsSUFBSUUsYUFBYSxFQUFFO01BQ2YsSUFBSUssS0FBSzs7TUFFVDtNQUNBcEgsaUVBQVksQ0FBQytHLGFBQWEsRUFBRSxJQUFJLENBQUMvRixPQUFPLEVBQUUsVUFBQ3FHLEdBQUcsRUFBRUMsS0FBSyxFQUFLO1FBQ3RELElBQUlELEdBQUcsRUFBRTtVQUNMLE1BQU0sSUFBSUUsS0FBSyxDQUFDRixHQUFHLENBQUM7UUFDeEI7UUFFQSxJQUFNRyxNQUFNLEdBQUduRyxDQUFDLENBQUNpRyxLQUFLLENBQUM7UUFFdkIsSUFBSU4sZ0JBQWdCLENBQUNTLFNBQVMsQ0FBQ1YsYUFBYSxDQUFDLEtBQUssV0FBVyxFQUFFO1VBQzNEQyxnQkFBZ0IsQ0FBQ2hCLE1BQU0sQ0FBQ2UsYUFBYSxDQUFDO1FBQzFDO1FBRUEsSUFBSUssS0FBSyxFQUFFO1VBQ1BKLGdCQUFnQixDQUFDaEIsTUFBTSxDQUFDb0IsS0FBSyxDQUFDO1FBQ2xDO1FBRUEsSUFBSUksTUFBTSxDQUFDL0UsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1VBQ3JCMkUsS0FBSyxHQUFHRSxLQUFLO1VBQ2JwSCxnRUFBVSxDQUFDd0gseUJBQXlCLENBQUNWLGdCQUFnQixFQUFFTSxLQUFLLEVBQUVWLE1BQUksQ0FBQ3pGLG9CQUFvQixDQUFDd0csZUFBZSxDQUFDO1FBQzVHLENBQUMsTUFBTTtVQUNIekgsZ0VBQVUsQ0FBQzBILHNCQUFzQixDQUFDTixLQUFLLENBQUM7UUFDNUM7TUFDSixDQUFDLENBQUM7SUFDTjtJQUVBMUYsWUFBWSxDQUFDYyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUE2QyxLQUFLLEVBQUk7TUFDL0J5QixnQkFBZ0IsQ0FBQ2EsWUFBWSxDQUFDLENBQUM7TUFFL0IsSUFBSWIsZ0JBQWdCLENBQUNjLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUNsQztNQUNKO01BRUF2QyxLQUFLLENBQUNJLGNBQWMsQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQW5FLE1BQUEsQ0FFRDZCLCtCQUErQixHQUEvQixTQUFBQSwrQkFBK0JBLENBQUN2QixrQkFBa0IsRUFBRTtJQUNoRCxJQUFNaUcsWUFBWSxHQUFHakcsa0JBQWtCLENBQUNtQixJQUFJLENBQUMsd0JBQXdCLENBQUM7SUFFdEVuQixrQkFBa0IsQ0FBQ1ksRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFBNkMsS0FBSyxFQUFJO01BQ3JDLElBQUl5QyxVQUFVLEdBQUcsS0FBSzs7TUFFdEI7TUFDQTNHLENBQUMsQ0FBQyxzQkFBc0IsRUFBRVMsa0JBQWtCLENBQUMsQ0FBQ21FLElBQUksQ0FBQyxVQUFDZ0MsQ0FBQyxFQUFFQyxHQUFHLEVBQUs7UUFDM0QsSUFBSUMsUUFBUSxDQUFDOUcsQ0FBQyxDQUFDNkcsR0FBRyxDQUFDLENBQUM3QixHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRTtVQUNsQzJCLFVBQVUsR0FBRyxJQUFJOztVQUVqQjtVQUNBLE9BQU8sSUFBSTtRQUNmO01BQ0osQ0FBQyxDQUFDO01BRUYsSUFBSUEsVUFBVSxFQUFFO1FBQ1osT0FBTyxJQUFJO01BQ2Y7TUFFQXBILDhEQUFjLENBQUNtSCxZQUFZLENBQUM7TUFFNUIsT0FBT3hDLEtBQUssQ0FBQ0ksY0FBYyxDQUFDLENBQUM7SUFDakMsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBbkUsTUFBQSxDQUVEOEIsK0JBQStCLEdBQS9CLFNBQUFBLCtCQUErQkEsQ0FBQ3ZCLGtCQUFrQixFQUFFO0lBQUEsSUFBQXFHLE1BQUE7SUFDaEQ7SUFDQXJHLGtCQUFrQixDQUFDZ0UsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUNzQyxJQUFJLENBQUMsaUJBQWlCLGdEQUF1QyxJQUFJLENBQUNySCxPQUFPLENBQUNzSCxjQUFjLCtDQUF1QyxDQUFDO0lBQ2xMdkcsa0JBQWtCLENBQUNnRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQ3NDLElBQUksQ0FBQyxpQkFBaUIsZ0RBQXVDLElBQUksQ0FBQ3JILE9BQU8sQ0FBQ3VILGFBQWEsK0NBQXVDLENBQUM7SUFDaEx4RyxrQkFBa0IsQ0FBQ2dFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDc0MsSUFBSSxDQUFDLGlCQUFpQixnREFBdUMsSUFBSSxDQUFDckgsT0FBTyxDQUFDd0gsWUFBWSxnREFBd0MsQ0FBQztJQUM5S3pHLGtCQUFrQixDQUFDZ0UsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUNzQyxJQUFJLENBQUMsaUJBQWlCLGdEQUF1QyxJQUFJLENBQUNySCxPQUFPLENBQUN5SCxVQUFVLGdEQUF3QyxDQUFDO0lBQzFLMUcsa0JBQWtCLENBQUNnRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQ3NDLElBQUksQ0FBQyxpQkFBaUIsZ0RBQXVDLElBQUksQ0FBQ3JILE9BQU8sQ0FBQzBILGFBQWEsK0NBQXVDLENBQUM7SUFDL0szRyxrQkFBa0IsQ0FBQ2dFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDc0MsSUFBSSxDQUFDLGlCQUFpQixnREFBdUMsSUFBSSxDQUFDckgsT0FBTyxDQUFDMkgsYUFBYSxnREFBd0MsQ0FBQztJQUNoTDVHLGtCQUFrQixDQUFDZ0UsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUNzQyxJQUFJLENBQUMsaUJBQWlCLGdEQUF1QyxJQUFJLENBQUNySCxPQUFPLENBQUM0SCxTQUFTLCtDQUF1QyxDQUFDO0lBQ3ZLN0csa0JBQWtCLENBQUNnRSxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQ3NDLElBQUksQ0FBQyxpQkFBaUIsa0RBQXlDLElBQUksQ0FBQ3JILE9BQU8sQ0FBQzZILFlBQVksOENBQW1DLElBQUksQ0FBQzdILE9BQU8sQ0FBQzhILGtCQUFrQixTQUFLLENBQUM7SUFDL00vRyxrQkFBa0IsQ0FBQ2dFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDc0MsSUFBSSxDQUFDLGlCQUFpQixnREFBdUMsSUFBSSxDQUFDckgsT0FBTyxDQUFDK0gsVUFBVSwrQ0FBdUMsQ0FBQztJQUN6S2hILGtCQUFrQixDQUFDZ0UsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUNzQyxJQUFJLENBQUMsaUJBQWlCLGdEQUF1QyxJQUFJLENBQUNySCxPQUFPLENBQUNnSSxlQUFlLCtDQUF1QyxDQUFDO0lBRXBMLElBQU1uQyxlQUFlLEdBQUc5RyxtRUFBVSxDQUFDZ0Msa0JBQWtCLEVBQUUsSUFBSSxDQUFDZixPQUFPLENBQUM7SUFDcEUsSUFBTWlJLHFCQUFxQixHQUFHLGdDQUFnQztJQUM5RCxJQUFNQyxzQkFBc0IsR0FBR3JKLHVEQUFHLENBQUM7TUFDL0JvSCxNQUFNLEVBQUtnQyxxQkFBcUIsNEJBQXVCO01BQ3ZEL0IsR0FBRyxFQUFFL0csK0VBQXlCQTtJQUNsQyxDQUFDLENBQUM7SUFDRixJQUFNNEcsYUFBYSxHQUFHMUYsQ0FBQyxDQUFJNEgscUJBQXFCLGlDQUE0QixDQUFDO0lBRTdFLElBQUk3QixLQUFLO0lBQ1Q7SUFDQXBILGlFQUFZLENBQUMrRyxhQUFhLEVBQUUsSUFBSSxDQUFDL0YsT0FBTyxFQUFFLFVBQUNxRyxHQUFHLEVBQUVDLEtBQUssRUFBSztNQUN0RCxJQUFJRCxHQUFHLEVBQUU7UUFDTCxNQUFNLElBQUlFLEtBQUssQ0FBQ0YsR0FBRyxDQUFDO01BQ3hCO01BRUEsSUFBTUcsTUFBTSxHQUFHbkcsQ0FBQyxDQUFDaUcsS0FBSyxDQUFDO01BRXZCLElBQUk0QixzQkFBc0IsQ0FBQ3pCLFNBQVMsQ0FBQ1YsYUFBYSxDQUFDLEtBQUssV0FBVyxFQUFFO1FBQ2pFbUMsc0JBQXNCLENBQUNsRCxNQUFNLENBQUNlLGFBQWEsQ0FBQztNQUNoRDtNQUVBLElBQUlLLEtBQUssRUFBRTtRQUNQOEIsc0JBQXNCLENBQUNsRCxNQUFNLENBQUNvQixLQUFLLENBQUM7TUFDeEM7TUFFQSxJQUFJSSxNQUFNLENBQUMvRSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDckIyRSxLQUFLLEdBQUdFLEtBQUs7UUFDYnBILGdFQUFVLENBQUN3SCx5QkFBeUIsQ0FBQ3dCLHNCQUFzQixFQUFFNUIsS0FBSyxFQUFFYyxNQUFJLENBQUNqSCxvQkFBb0IsQ0FBQ3dHLGVBQWUsQ0FBQztNQUNsSCxDQUFDLE1BQU07UUFDSHpILGdFQUFVLENBQUMwSCxzQkFBc0IsQ0FBQ04sS0FBSyxDQUFDO01BQzVDO0lBQ0osQ0FBQyxDQUFDOztJQUVGO0lBQ0EsSUFBSTZCLFFBQVE7SUFDWjlILENBQUMsQ0FBSTRILHFCQUFxQix3Q0FBbUMsQ0FBQyxDQUFDdkcsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBMEcsSUFBQSxFQUFnQjtNQUFBLElBQWJDLE1BQU0sR0FBQUQsSUFBQSxDQUFOQyxNQUFNO01BQ2hGRixRQUFRLEdBQUc1SSxzRUFBYyxDQUFDOEksTUFBTSxDQUFDNUMsS0FBSyxDQUFDO01BQ3ZDLElBQUkwQyxRQUFRLEVBQUU7UUFDVjlILENBQUMsQ0FBSTRILHFCQUFxQixtQkFBYUUsUUFBUSxRQUFJLENBQUMsQ0FBQ0csUUFBUSxDQUFDLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUM7TUFDeEYsQ0FBQyxNQUFNO1FBQ0hsSSxDQUFDLENBQUk0SCxxQkFBcUIsU0FBTSxDQUFDLENBQUNNLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDO01BQ3pEO0lBQ0osQ0FBQyxDQUFDOztJQUVGO0lBQ0E5SSw4REFBWSxDQUFDK0ksNkJBQTZCLENBQUNOLHNCQUFzQixFQUFLRCxxQkFBcUIsMENBQXFDLElBQUksQ0FBQ2pJLE9BQU8sQ0FBQ3lJLGdCQUFnQixDQUFDO0lBQzlKaEosOERBQVksQ0FBQ2lKLHVCQUF1QixDQUFDUixzQkFBc0IsRUFBS0QscUJBQXFCLGtDQUE2QixJQUFJLENBQUNqSSxPQUFPLENBQUMySSxVQUFVLENBQUM7SUFDMUlsSiw4REFBWSxDQUFDbUosdUJBQXVCLENBQUNWLHNCQUFzQixFQUFLRCxxQkFBcUIsb0NBQStCLElBQUksQ0FBQ2pJLE9BQU8sQ0FBQzZJLFVBQVUsQ0FBQztJQUM1SXBKLDhEQUFZLENBQUNxSixnQkFBZ0IsQ0FBQ1osc0JBQXNCLEVBQUtELHFCQUFxQiwyQkFBc0IsSUFBSSxDQUFDakksT0FBTyxDQUFDK0ksR0FBRyxFQUFFO01BQUEsT0FBTVosUUFBUTtJQUFBLEVBQUM7O0lBRXJJO0lBQ0F4SSw4REFBWSxDQUFDcUoseUJBQXlCLENBQUlmLHFCQUFxQix3Q0FBbUMsQ0FBQztJQUNuR3RJLDhEQUFZLENBQUNzSixtQkFBbUIsQ0FBSWhCLHFCQUFxQixnQ0FBMkIsQ0FBQzs7SUFFckY7SUFDQUMsc0JBQXNCLENBQUMvQixHQUFHLENBQUNOLGVBQWUsQ0FBQztJQUUzQzlFLGtCQUFrQixDQUFDVyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUE2QyxLQUFLLEVBQUk7TUFDckNBLEtBQUssQ0FBQ0ksY0FBYyxDQUFDLENBQUM7TUFDdEI7TUFDQXVELHNCQUFzQixDQUFDckIsWUFBWSxDQUFDLENBQUM7TUFDckMsSUFBSXFCLHNCQUFzQixDQUFDcEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ3hDO1FBQ0EsSUFBTTdFLElBQUksR0FBR2lILG9EQUFBLENBQVNuSSxrQkFBa0IsQ0FBQ29JLGNBQWMsQ0FBQyxDQUFDLEVBQUUsVUFBQ0MsR0FBRyxFQUFFQyxJQUFJLEVBQUs7VUFDdEUsSUFBTUMsTUFBTSxHQUFHRixHQUFHO1VBQ2xCRSxNQUFNLENBQUNELElBQUksQ0FBQzdELElBQUksQ0FBQyxHQUFHNkQsSUFBSSxDQUFDNUQsS0FBSztVQUM5QixPQUFPNkQsTUFBTTtRQUNqQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7O1FBRU47UUFDQSxJQUFNQyxPQUFPLEdBQUdDLGtEQUFBLENBQU9wQyxNQUFJLENBQUNwSCxPQUFPLENBQUMwQyxTQUFTLEVBQUUsVUFBQStHLEtBQUE7VUFBQSxJQUFHaEUsS0FBSyxHQUFBZ0UsS0FBQSxDQUFMaEUsS0FBSztVQUFBLE9BQU9BLEtBQUssS0FBS3hELElBQUksQ0FBQ3NILE9BQU87UUFBQSxFQUFDO1FBQ3JGLElBQU1HLEtBQUssR0FBR0gsT0FBTyxJQUFJQyxrREFBQSxDQUFPRCxPQUFPLENBQUNJLE1BQU0sRUFBRSxVQUFBQyxLQUFBO1VBQUEsSUFBR25FLEtBQUssR0FBQW1FLEtBQUEsQ0FBTG5FLEtBQUs7VUFBQSxPQUFPQSxLQUFLLEtBQUt4RCxJQUFJLENBQUN5SCxLQUFLO1FBQUEsRUFBQztRQUNwRnpILElBQUksQ0FBQzRILFlBQVksR0FBR04sT0FBTyxHQUFHQSxPQUFPLENBQUNPLElBQUksR0FBRzdILElBQUksQ0FBQ3NILE9BQU87UUFDekR0SCxJQUFJLENBQUM4SCxzQkFBc0IsR0FBR0wsS0FBSyxHQUFHQSxLQUFLLENBQUNJLElBQUksR0FBRzdILElBQUksQ0FBQ3lILEtBQUs7O1FBRTdEO1FBQ0F6SCxJQUFJLENBQUMrSCxrQkFBa0IsR0FBRyxDQUFDLENBQUMvSCxJQUFJLENBQUMrSCxrQkFBa0I7O1FBRW5EO1FBQ0F4Syx1RUFBZSxDQUFDNEgsTUFBSSxDQUFDcEgsT0FBTyxFQUFFaUMsSUFBSSxFQUFFLFlBQU07VUFDdENkLE1BQU0sQ0FBQzhJLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHOUMsTUFBSSxDQUFDcEgsT0FBTyxDQUFDbUQsaUJBQWlCO1FBQ3pELENBQUMsRUFBRSxZQUFNO1VBQ0x2RCw4REFBYyxDQUFDd0gsTUFBSSxDQUFDcEgsT0FBTyxDQUFDbUssYUFBYSxDQUFDO1FBQzlDLENBQUMsQ0FBQztNQUNOO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBM0osTUFBQSxDQUVEZ0IsNkJBQTZCLEdBQTdCLFNBQUFBLDZCQUE2QkEsQ0FBQ2IsZ0JBQWdCLEVBQUU7SUFDNUMsSUFBTWtGLGVBQWUsR0FBRzlHLG1FQUFVLENBQUM0QixnQkFBZ0IsRUFBRSxJQUFJLENBQUNYLE9BQU8sQ0FBQztJQUNsRSxJQUFNb0ssZ0JBQWdCLEdBQUcsOEJBQThCO0lBQ3ZELElBQU1DLGFBQWEsR0FBR3hMLHVEQUFHLENBQUM7TUFDdEJvSCxNQUFNLEVBQUttRSxnQkFBZ0IsNEJBQXVCO01BQ2xERSxLQUFLLEVBQUU7SUFDWCxDQUFDLENBQUM7SUFDRixJQUFNQyxhQUFhLEdBQU1ILGdCQUFnQix3Q0FBbUM7SUFDNUUsSUFBTUksYUFBYSxHQUFHbkssQ0FBQyxDQUFDa0ssYUFBYSxDQUFDO0lBQ3RDLElBQU1FLGdCQUFnQixHQUFNTCxnQkFBZ0Isb0NBQStCO0lBQzNFLElBQU1NLGdCQUFnQixHQUFHckssQ0FBQyxDQUFDb0ssZ0JBQWdCLENBQUM7SUFDNUMsSUFBTUUsaUJBQWlCLEdBQU1QLGdCQUFnQiwyQ0FBc0M7SUFDbkYsSUFBTVEsaUJBQWlCLEdBQUd2SyxDQUFDLENBQUNzSyxpQkFBaUIsQ0FBQztJQUM5QyxJQUFNRSx1QkFBdUIsR0FBTVQsZ0JBQWdCLDJDQUFzQztJQUN6RixJQUFNVSxnQkFBZ0IsR0FBR3pLLENBQUMsQ0FBQ3dLLHVCQUF1QixDQUFDOztJQUVuRDtJQUNBUixhQUFhLENBQUNsRSxHQUFHLENBQUNOLGVBQWUsQ0FBQztJQUVsQyxJQUFJMkUsYUFBYSxFQUFFO01BQ2ZILGFBQWEsQ0FBQ3JGLE1BQU0sQ0FBQ3VGLGFBQWEsQ0FBQztNQUNuQ3JMLGdFQUFVLENBQUM2TCxrQkFBa0IsQ0FBQ1YsYUFBYSxFQUFFRSxhQUFhLEVBQUUsSUFBSSxDQUFDcEssb0JBQW9CLENBQUM2SyxXQUFXLENBQUM7SUFDdEc7SUFFQSxJQUFJTixnQkFBZ0IsSUFBSUUsaUJBQWlCLEVBQUU7TUFDdkMsSUFBQUsscUJBQUEsR0FBbUUsSUFBSSxDQUFDOUssb0JBQW9CO1FBQTFFK0ssYUFBYSxHQUFBRCxxQkFBQSxDQUF2QkUsUUFBUTtRQUFpQ0MsYUFBYSxHQUFBSCxxQkFBQSxDQUE3QkksY0FBYztNQUMvQ2hCLGFBQWEsQ0FBQ3JGLE1BQU0sQ0FBQ3lGLGdCQUFnQixDQUFDO01BQ3RDSixhQUFhLENBQUNyRixNQUFNLENBQUMyRixpQkFBaUIsQ0FBQztNQUN2Q3pMLGdFQUFVLENBQUNvTSxxQkFBcUIsQ0FDNUJqQixhQUFhLEVBQ2JJLGdCQUFnQixFQUNoQkUsaUJBQWlCLEVBQ2pCLElBQUksQ0FBQ3RKLG9CQUFvQixFQUN6QmhDLGlHQUF1QyxDQUFDNkwsYUFBYSxFQUFFQSxhQUFhLEVBQUVFLGFBQWEsRUFBRSxJQUFJLENBQUMvSixvQkFBb0IsQ0FBQ2tLLEtBQUssQ0FBQyxFQUNySCxJQUNKLENBQUM7SUFDTDtJQUVBLElBQUlULGdCQUFnQixFQUFFO01BQ2xCVCxhQUFhLENBQUNsRSxHQUFHLENBQUM7UUFDZHFGLFFBQVEsRUFBRVgsdUJBQXVCO1FBQ2pDWSxRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBR0MsRUFBRSxFQUFFckcsR0FBRyxFQUFLO1VBQ25CLElBQUlzRyxNQUFNLEdBQUcsSUFBSTtVQUVqQixJQUFJdEcsR0FBRyxLQUFLLEVBQUUsSUFBSXFGLGdCQUFnQixDQUFDckYsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDN0NzRyxNQUFNLEdBQUcsS0FBSztVQUNsQjtVQUVBRCxFQUFFLENBQUNDLE1BQU0sQ0FBQztRQUNkLENBQUM7UUFDRDVFLFlBQVksRUFBRSxJQUFJLENBQUMvRyxPQUFPLENBQUM0TDtNQUMvQixDQUFDLENBQUM7SUFDTjtJQUVBdkIsYUFBYSxDQUFDbEUsR0FBRyxDQUFDLENBQ2Q7TUFDSXFGLFFBQVEsRUFBS3BCLGdCQUFnQixxQ0FBa0M7TUFDL0RxQixRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBR0MsRUFBRSxFQUFFckcsR0FBRyxFQUFLO1FBQ25CLElBQU1zRyxNQUFNLEdBQUd0RyxHQUFHLENBQUM5RCxNQUFNO1FBRXpCbUssRUFBRSxDQUFDQyxNQUFNLENBQUM7TUFDZCxDQUFDO01BQ0Q1RSxZQUFZLEVBQUUsSUFBSSxDQUFDL0csT0FBTyxDQUFDNkw7SUFDL0IsQ0FBQyxFQUNEO01BQ0lMLFFBQVEsRUFBS3BCLGdCQUFnQixvQ0FBaUM7TUFDOURxQixRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBR0MsRUFBRSxFQUFFckcsR0FBRyxFQUFLO1FBQ25CLElBQU1zRyxNQUFNLEdBQUd0RyxHQUFHLENBQUM5RCxNQUFNO1FBRXpCbUssRUFBRSxDQUFDQyxNQUFNLENBQUM7TUFDZCxDQUFDO01BQ0Q1RSxZQUFZLEVBQUUsSUFBSSxDQUFDL0csT0FBTyxDQUFDOEw7SUFDL0IsQ0FBQyxDQUNKLENBQUM7SUFFRm5MLGdCQUFnQixDQUFDZSxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUE2QyxLQUFLLEVBQUk7TUFDbkM4RixhQUFhLENBQUN4RCxZQUFZLENBQUMsQ0FBQztNQUU1QixJQUFJd0QsYUFBYSxDQUFDdkQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQy9CO01BQ0o7TUFFQXZDLEtBQUssQ0FBQ0ksY0FBYyxDQUFDLENBQUM7TUFDdEJvSCxVQUFVLENBQUMsWUFBTTtRQUNiLElBQU1DLGFBQWEsR0FBRzNMLENBQUMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDNEwsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0RUQsYUFBYSxDQUFDRSxPQUFPLENBQUMsT0FBTyxDQUFDO01BQ2xDLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDWCxDQUFDLENBQUM7RUFDTixDQUFDO0VBQUExTCxNQUFBLENBRUQ0Qix1QkFBdUIsR0FBdkIsU0FBQUEsdUJBQXVCQSxDQUFDdkIsVUFBVSxFQUFFO0lBQ2hDLElBQU1zTCxjQUFjLEdBQUd0Tix1REFBRyxDQUFDO01BQ3ZCb0gsTUFBTSxFQUFFLDRDQUE0QztNQUNwRHFFLEtBQUssRUFBRTtJQUNYLENBQUMsQ0FBQztJQUVGNkIsY0FBYyxDQUFDaEcsR0FBRyxDQUFDLENBQ2Y7TUFDSXFGLFFBQVEsRUFBRSx1REFBdUQ7TUFDakVDLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFHQyxFQUFFLEVBQUVyRyxHQUFHLEVBQUs7UUFDbkIsSUFBTXNHLE1BQU0sR0FBR1MsTUFBTSxDQUFDL0csR0FBRyxDQUFDLEtBQUssQ0FBQztRQUVoQ3FHLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDO01BQ2QsQ0FBQztNQUNENUUsWUFBWSxFQUFFLElBQUksQ0FBQy9HLE9BQU8sQ0FBQ3FNO0lBQy9CLENBQUMsRUFDRDtNQUNJYixRQUFRLEVBQUUscURBQXFEO01BQy9EQyxRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBR0MsRUFBRSxFQUFFckcsR0FBRyxFQUFLO1FBQ25CLElBQU1zRyxNQUFNLEdBQUd0RyxHQUFHLENBQUM5RCxNQUFNO1FBRXpCbUssRUFBRSxDQUFDQyxNQUFNLENBQUM7TUFDZCxDQUFDO01BQ0Q1RSxZQUFZLEVBQUUsSUFBSSxDQUFDL0csT0FBTyxDQUFDc007SUFDL0IsQ0FBQyxFQUNEO01BQ0lkLFFBQVEsRUFBRSx3REFBd0Q7TUFDbEVDLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFHQyxFQUFFLEVBQUVyRyxHQUFHLEVBQUs7UUFDbkIsSUFBTXNHLE1BQU0sR0FBR3RHLEdBQUcsQ0FBQzlELE1BQU07UUFFekJtSyxFQUFFLENBQUNDLE1BQU0sQ0FBQztNQUNkLENBQUM7TUFDRDVFLFlBQVksRUFBRSxJQUFJLENBQUMvRyxPQUFPLENBQUN1TTtJQUMvQixDQUFDLENBQ0osQ0FBQztJQUVGMUwsVUFBVSxDQUFDYSxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUE2QyxLQUFLLEVBQUk7TUFDN0I0SCxjQUFjLENBQUN0RixZQUFZLENBQUMsQ0FBQztNQUU3QixJQUFJc0YsY0FBYyxDQUFDckYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ2hDO01BQ0o7TUFFQXZDLEtBQUssQ0FBQ0ksY0FBYyxDQUFDLENBQUM7TUFFdEJvSCxVQUFVLENBQUMsWUFBTTtRQUNiLElBQU1DLGFBQWEsR0FBRzNMLENBQUMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDNEwsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0RUQsYUFBYSxDQUFDRSxPQUFPLENBQUMsT0FBTyxDQUFDO01BQ2xDLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDWCxDQUFDLENBQUM7RUFDTixDQUFDO0VBQUEsT0FBQXBNLE9BQUE7QUFBQSxFQW5oQmdDbEIscURBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCVjs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU04TixjQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQUd0RCxHQUFHLEVBQUk7RUFDMUIsSUFBTUUsTUFBTSxHQUFHRixHQUFHO0VBRWxCL0ksQ0FBQyxDQUFDNEUsSUFBSSxDQUFDcUUsTUFBTSxFQUFFLFVBQUNxRCxHQUFHLEVBQUVsSCxLQUFLLEVBQUs7SUFDM0IsSUFBSUEsS0FBSyxLQUFLLElBQUksSUFBSUEsS0FBSyxLQUFLLEVBQUUsRUFBRTtNQUNoQyxPQUFPNkQsTUFBTSxDQUFDcUQsR0FBRyxDQUFDO0lBQ3RCO0VBQ0osQ0FBQyxDQUFDO0VBRUYsT0FBT3JELE1BQU07QUFDakIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU0vSixjQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQUdrRyxLQUFLO0VBQUEsT0FBSWdILHVEQUFnQixDQUFDbEgsSUFBSSxDQUFDa0gsdURBQWdCLENBQUNJLEtBQUssQ0FBQ3BILEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQztBQUFBOztBQUVqRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1qRyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUE0SSxJQUFBLEVBQUFxQixLQUFBLEVBZ0N6QnFELElBQUksRUFBRUMsSUFBSSxFQUFLO0VBQUEsSUE5QmRwSyxXQUFXLEdBQUF5RixJQUFBLENBQVh6RixXQUFXO0lBQ1hJLFNBQVMsR0FBQXFGLElBQUEsQ0FBVHJGLFNBQVM7SUFDVEgsU0FBUyxHQUFBd0YsSUFBQSxDQUFUeEYsU0FBUztJQUNURSxVQUFVLEdBQUFzRixJQUFBLENBQVZ0RixVQUFVO0VBQUEsSUFJVmtLLFdBQVcsR0FBQXZELEtBQUEsQ0FBWHVELFdBQVc7SUFDWEMsYUFBYSxHQUFBeEQsS0FBQSxDQUFid0QsYUFBYTtJQUdiQyxrQkFBa0IsR0FBQXpELEtBQUEsQ0FBbEJ5RCxrQkFBa0I7SUFDbEJ2RSxVQUFVLEdBQUFjLEtBQUEsQ0FBVmQsVUFBVTtJQUNWd0UsWUFBWSxHQUFBMUQsS0FBQSxDQUFaMEQsWUFBWTtJQUNacEUsR0FBRyxHQUFBVSxLQUFBLENBQUhWLEdBQUc7SUFDSGlCLGtCQUFrQixHQUFBUCxLQUFBLENBQWxCTyxrQkFBa0I7SUFHbEJvRCxRQUFRLEdBQUEzRCxLQUFBLENBQVIyRCxRQUFRO0lBQ1JDLFFBQVEsR0FBQTVELEtBQUEsQ0FBUjRELFFBQVE7SUFDUkMsSUFBSSxHQUFBN0QsS0FBQSxDQUFKNkQsSUFBSTtJQUNKQyxXQUFXLEdBQUE5RCxLQUFBLENBQVg4RCxXQUFXO0lBQ1h4RCxzQkFBc0IsR0FBQU4sS0FBQSxDQUF0Qk0sc0JBQXNCO0lBQ3RCRixZQUFZLEdBQUFKLEtBQUEsQ0FBWkksWUFBWTtJQUNaMkQsT0FBTyxHQUFBL0QsS0FBQSxDQUFQK0QsT0FBTztJQUNQQyxVQUFVLEdBQUFoRSxLQUFBLENBQVZnRSxVQUFVO0lBQ1ZDLFNBQVMsR0FBQWpFLEtBQUEsQ0FBVGlFLFNBQVM7SUFDVEMsS0FBSyxHQUFBbEUsS0FBQSxDQUFMa0UsS0FBSztJQUNMQyxLQUFLLEdBQUFuRSxLQUFBLENBQUxtRSxLQUFLO0VBR0wsSUFBTUMsTUFBTSxHQUFHbEYsVUFBVSxDQUFDbUYsS0FBSyxDQUFDLEdBQUcsQ0FBQztFQUVwQ3pOLENBQUMsQ0FBQzBOLElBQUksQ0FBQztJQUNIL0wsR0FBRyxFQUFLVyxXQUFXLGdCQUFXQyxTQUFTLG1CQUFjRyxTQUFTLHdCQUFxQjtJQUNuRmlMLFFBQVEsRUFBRSxNQUFNO0lBQ2hCQyxNQUFNLEVBQUUsTUFBTTtJQUNkQyxLQUFLLEVBQUUsS0FBSztJQUNaQyxPQUFPLEVBQUU7TUFDTEMsYUFBYSxFQUFFdEwsVUFBVTtNQUN6QnVMLE1BQU0sRUFBRSw0QkFBNEI7TUFDcEMsY0FBYyxFQUFFO0lBQ3BCLENBQUM7SUFDRHBNLElBQUksRUFBRXFNLElBQUksQ0FBQ0MsU0FBUyxDQUFDO01BQ2pCQyxVQUFVLEVBQUU7UUFDUmpKLElBQUksRUFBRSxNQUFNO1FBQ1prSixlQUFlLEVBQUV0QixZQUFZO1FBQzdCdUIsTUFBTSxFQUFFakMsdURBQWdCLENBQUNJLEtBQUssQ0FBQ0ssa0JBQWtCLENBQUM7UUFDbER5QixZQUFZLEVBQUVsQyw2REFBc0IsQ0FBQ21DLEtBQUssQ0FBQy9CLEtBQUssQ0FBQ2dCLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRGdCLFdBQVcsRUFBRXBDLDZEQUFzQixDQUFDcUMsSUFBSSxDQUFDakMsS0FBSyxDQUFDZ0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQztRQUMvRGtCLGtCQUFrQixFQUFFaEc7TUFDeEIsQ0FBQztNQUNEaUcsZUFBZSxFQUFFdEMsY0FBYyxDQUFDO1FBQzVCVSxRQUFRLEVBQVJBLFFBQVE7UUFDUkMsUUFBUSxFQUFSQSxRQUFRO1FBQ1JDLElBQUksRUFBSkEsSUFBSTtRQUNKQyxXQUFXLEVBQVhBLFdBQVc7UUFDWHhELHNCQUFzQixFQUF0QkEsc0JBQXNCO1FBQ3RCRixZQUFZLEVBQVpBLFlBQVk7UUFDWjJELE9BQU8sRUFBUEEsT0FBTztRQUNQQyxVQUFVLEVBQVZBLFVBQVU7UUFDVkMsU0FBUyxFQUFUQSxTQUFTO1FBQ1RDLEtBQUssRUFBTEEsS0FBSztRQUNMQyxLQUFLLEVBQUxBO01BQ0osQ0FBQyxDQUFDO01BQ0ZaLFdBQVcsRUFBWEEsV0FBVztNQUNYaEQsa0JBQWtCLEVBQWxCQSxrQkFBa0I7TUFDbEJpRCxhQUFhLEVBQWJBO0lBQ0osQ0FBQztFQUNMLENBQUMsQ0FBQyxDQUNHSCxJQUFJLENBQUNBLElBQUksQ0FBQyxDQUNWQyxJQUFJLENBQUNBLElBQUksQ0FBQztBQUNuQixDQUFDO0FBRU0sSUFBTXJOLFVBQVUsR0FBRztFQUN0QjtBQUNKO0FBQ0E7QUFDQTtFQUNJc0oseUJBQXlCLEVBQUUsU0FBM0JBLHlCQUF5QkEsQ0FBRTFDLEtBQUssRUFBSTtJQUNoQyxJQUFJQSxLQUFLLEVBQUU7TUFDUGpHLENBQUMsQ0FBQ2lHLEtBQUssQ0FBQyxDQUFDNUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBa0ksS0FBQSxFQUFnQjtRQUFBLElBQWJ2QixNQUFNLEdBQUF1QixLQUFBLENBQU52QixNQUFNO1FBQzFCLElBQU00RyxTQUFTLEdBQUc1RyxNQUFNO1FBQ3hCNEcsU0FBUyxDQUFDeEosS0FBSyxHQUFHZ0gsdURBQWdCLENBQUN5QyxNQUFNLENBQUN6Qyx1REFBZ0IsQ0FBQ0ksS0FBSyxDQUFDeEUsTUFBTSxDQUFDNUMsS0FBSyxDQUFDLENBQUM7TUFDbkYsQ0FBQyxDQUFDO0lBQ047RUFDSixDQUFDO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7RUFDSXdELG1CQUFtQixFQUFFLFNBQXJCQSxtQkFBbUJBLENBQUUzQyxLQUFLLEVBQUk7SUFDMUIsSUFBSUEsS0FBSyxFQUFFO01BQ1BqRyxDQUFDLENBQUNpRyxLQUFLLENBQUMsQ0FBQzVFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQXlOLEtBQUEsRUFBdUI7UUFBQSxJQUFwQjlHLE1BQU0sR0FBQThHLEtBQUEsQ0FBTjlHLE1BQU07VUFBRStHLEtBQUssR0FBQUQsS0FBQSxDQUFMQyxLQUFLO1FBQ2pDLElBQU1ILFNBQVMsR0FBRzVHLE1BQU07UUFDeEIsSUFBSStHLEtBQUssS0FBSyxDQUFDLElBQUksU0FBUyxDQUFDQyxJQUFJLENBQUNoSCxNQUFNLENBQUM1QyxLQUFLLENBQUMsRUFBRTtVQUM3Q3dKLFNBQVMsQ0FBQ3hKLEtBQUssR0FBRzRDLE1BQU0sQ0FBQzVDLEtBQUssQ0FBQzZKLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxNQUFNLElBQUlqSCxNQUFNLENBQUM1QyxLQUFLLENBQUNsRSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQ2hDME4sU0FBUyxDQUFDeEosS0FBSyxHQUFHNEMsTUFBTSxDQUFDNUMsS0FBSyxDQUFDNkosS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUMsQ0FBQyxNQUFNLElBQUlGLEtBQUssS0FBSyxDQUFDLEVBQUU7VUFDcEJILFNBQVMsQ0FBQ3hKLEtBQUssR0FBRzRDLE1BQU0sQ0FBQzVDLEtBQUssQ0FDekI4SixPQUFPLENBQUMsb0JBQW9CLEVBQUUsTUFBTSxDQUFDLENBQ3JDQSxPQUFPLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLENBQ3BDQSxPQUFPLENBQUMsbUJBQW1CLEVBQUUsUUFBUSxDQUFDLENBQ3RDQSxPQUFPLENBQUMsOEJBQThCLEVBQUUsT0FBTyxDQUFDLENBQ2hEQSxPQUFPLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLENBQ2hDQSxPQUFPLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDLENBQy9CQSxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztRQUM5QjtNQUNKLENBQUMsQ0FBQztJQUNOO0VBQ0o7QUFDSixDQUFDO0FBRU0sSUFBTXJRLFVBQVUsR0FBRztFQUN0QjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSXNKLDZCQUE2QixFQUFFLFNBQS9CQSw2QkFBNkJBLENBQUdnSCxTQUFTLEVBQUVsSixLQUFLLEVBQUVTLFlBQVksRUFBSztJQUMvRCxJQUFJVCxLQUFLLEVBQUU7TUFDUGtKLFNBQVMsQ0FBQ3JKLEdBQUcsQ0FBQztRQUNWcUYsUUFBUSxFQUFFbEYsS0FBSztRQUNmbUYsUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUdDLEVBQUUsRUFBRXJHLEdBQUcsRUFBSztVQUNuQixJQUFNc0csTUFBTSxHQUFHdEcsR0FBRyxDQUFDOUQsTUFBTSxJQUFJa0wsdURBQWdCLENBQUNnRCxPQUFPLENBQUNoRCx1REFBZ0IsQ0FBQ0ksS0FBSyxDQUFDeEgsR0FBRyxDQUFDLENBQUM7VUFFbEZxRyxFQUFFLENBQUNDLE1BQU0sQ0FBQztRQUNkLENBQUM7UUFDRDVFLFlBQVksRUFBWkE7TUFDSixDQUFDLENBQUM7SUFDTjtFQUNKLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSTJCLHVCQUF1QixFQUFFLFNBQXpCQSx1QkFBdUJBLENBQUc4RyxTQUFTLEVBQUVsSixLQUFLLEVBQUVTLFlBQVksRUFBSztJQUN6RCxJQUFJVCxLQUFLLEVBQUU7TUFDUGtKLFNBQVMsQ0FBQ3JKLEdBQUcsQ0FBQztRQUNWcUYsUUFBUSxFQUFFbEYsS0FBSztRQUNmbUYsUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUdDLEVBQUUsRUFBRXJHLEdBQUcsRUFBSztVQUNuQixJQUFNd0ksTUFBTSxHQUFHeEksR0FBRyxDQUFDeUksS0FBSyxDQUFDLEdBQUcsQ0FBQztVQUM3QixJQUFJbkMsTUFBTSxHQUFHdEcsR0FBRyxDQUFDOUQsTUFBTSxJQUFJLCtCQUErQixDQUFDOE4sSUFBSSxDQUFDaEssR0FBRyxDQUFDO1VBQ3BFc0csTUFBTSxHQUFHQSxNQUFNLElBQUksQ0FBQ2MsNkRBQXNCLENBQUNpRCxNQUFNLENBQUNqRCw2REFBc0IsQ0FBQ21DLEtBQUssQ0FBQy9CLEtBQUssQ0FBQ2dCLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFcEIsNkRBQXNCLENBQUNxQyxJQUFJLENBQUNqQyxLQUFLLENBQUNnQixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7VUFFcEpuQyxFQUFFLENBQUNDLE1BQU0sQ0FBQztRQUNkLENBQUM7UUFDRDVFLFlBQVksRUFBWkE7TUFDSixDQUFDLENBQUM7SUFDTjtFQUNKLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSTZCLHVCQUF1QixFQUFFLFNBQXpCQSx1QkFBdUJBLENBQUc0RyxTQUFTLEVBQUVsSixLQUFLLEVBQUVTLFlBQVksRUFBSztJQUN6RCxJQUFJVCxLQUFLLEVBQUU7TUFDUGtKLFNBQVMsQ0FBQ3JKLEdBQUcsQ0FBQztRQUNWcUYsUUFBUSxFQUFFbEYsS0FBSztRQUNmbUYsUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUdDLEVBQUUsRUFBRXJHLEdBQUcsRUFBSztVQUNuQixJQUFNc0csTUFBTSxHQUFHLENBQUMsQ0FBQ3RHLEdBQUcsQ0FBQzlELE1BQU07VUFFM0JtSyxFQUFFLENBQUNDLE1BQU0sQ0FBQztRQUNkLENBQUM7UUFDRDVFLFlBQVksRUFBWkE7TUFDSixDQUFDLENBQUM7SUFDTjtFQUNKLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJK0IsZ0JBQWdCLEVBQUUsU0FBbEJBLGdCQUFnQkEsQ0FBRzBHLFNBQVMsRUFBRWxKLEtBQUssRUFBRVMsWUFBWSxFQUFFb0IsUUFBUSxFQUFLO0lBQzVELElBQUk3QixLQUFLLEVBQUU7TUFDUGtKLFNBQVMsQ0FBQ3JKLEdBQUcsQ0FBQztRQUNWcUYsUUFBUSxFQUFFbEYsS0FBSztRQUNmbUYsUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUdDLEVBQUUsRUFBRXJHLEdBQUcsRUFBSztVQUNuQixJQUFNRSxJQUFJLEdBQUcsT0FBTzRDLFFBQVEsS0FBSyxVQUFVLEdBQUdBLFFBQVEsQ0FBQyxDQUFDLEdBQUdBLFFBQVE7VUFDbkUsSUFBTXdELE1BQU0sR0FBR3RHLEdBQUcsQ0FBQzlELE1BQU0sSUFBSWtMLHNEQUFlLENBQUNnRCxPQUFPLENBQUNwSyxHQUFHLEVBQUVFLElBQUksQ0FBQztVQUUvRG1HLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDO1FBQ2QsQ0FBQztRQUNENUUsWUFBWSxFQUFaQTtNQUNKLENBQUMsQ0FBQztJQUNOO0VBQ0o7QUFDSixDQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6T3dDO0FBRXpDLFNBQVM2SSxnQkFBZ0JBLENBQUNDLE9BQU8sRUFBRXhHLElBQUksRUFBRTtFQUNyQyxJQUFNbkUsS0FBSyxHQUFHMkssT0FBTyxDQUFDQyxPQUFPLENBQUN6RyxJQUFJLENBQUM7RUFFbkMsSUFBSW5FLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtJQUNaMkssT0FBTyxDQUFDRSxNQUFNLENBQUM3SyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQzVCO0FBQ0o7QUFFQSxTQUFTOEssZ0JBQWdCQSxDQUFDSCxPQUFPLEVBQUV4RyxJQUFJLEVBQUU7RUFDckN3RyxPQUFPLENBQUNJLElBQUksQ0FBQzVHLElBQUksQ0FBQztBQUN0QjtBQUVBLFNBQVM2RyxnQkFBZ0JBLENBQUNMLE9BQU8sRUFBRU0sS0FBSyxFQUFFQyxJQUFJLEVBQUU7RUFDNUMsSUFBSVAsT0FBTyxDQUFDdE8sTUFBTSxLQUFLLENBQUMsRUFBRTtJQUN0QixJQUFJLENBQUM0TyxLQUFLLENBQUMxTyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUU7TUFDdEIwTyxLQUFLLENBQUNFLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDMUI7SUFDQUYsS0FBSyxDQUFDOUksSUFBSSxDQUFDLE1BQU0sRUFBSytJLElBQUksQ0FBQ0UsT0FBTyxTQUFJVCxPQUFPLENBQUNVLElBQUksQ0FBQyxHQUFHLENBQUcsQ0FBQztJQUMxREosS0FBSyxDQUFDcEwsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUN5TCxJQUFJLENBQUNYLE9BQU8sQ0FBQ3RPLE1BQU0sQ0FBQztFQUNyRCxDQUFDLE1BQU07SUFDSDRPLEtBQUssQ0FBQ00sV0FBVyxDQUFDLE1BQU0sQ0FBQztFQUM3QjtBQUNKO0FBRUEsNkJBQWUsb0NBQUFySSxJQUFBLEVBQXNDO0VBQUEsSUFBMUJzSSxnQkFBZ0IsR0FBQXRJLElBQUEsQ0FBaEJzSSxnQkFBZ0I7SUFBRU4sSUFBSSxHQUFBaEksSUFBQSxDQUFKZ0ksSUFBSTtFQUM3QyxJQUFJTyxjQUFjLEdBQUcsRUFBRTtFQUV2QixJQUFNQyxZQUFZLEdBQUd2USxDQUFDLENBQUMscUJBQXFCLENBQUM7RUFFN0NBLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ3FCLEVBQUUsQ0FBQyxjQUFjLEVBQUUsWUFBTTtJQUMvQixJQUFNbVAsUUFBUSxHQUFHeFEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDMEUsSUFBSSxDQUFDLG9DQUFvQyxDQUFDO0lBRXJFNEwsY0FBYyxHQUFHRSxRQUFRLENBQUN0UCxNQUFNLEdBQUdzUCxRQUFRLENBQUNDLEdBQUcsQ0FBQyxVQUFDNUwsS0FBSyxFQUFFNkwsT0FBTztNQUFBLE9BQUtBLE9BQU8sQ0FBQ3RMLEtBQUs7SUFBQSxFQUFDLENBQUN1TCxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUU7SUFDN0ZkLGdCQUFnQixDQUFDUyxjQUFjLEVBQUVDLFlBQVksRUFBRVIsSUFBSSxDQUFDO0VBQ3hELENBQUMsQ0FBQztFQUVGL1AsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDNFEsY0FBYyxDQUFDLGNBQWMsQ0FBQztFQUV4QzVRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ3FCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsVUFBQTZDLEtBQUssRUFBSTtJQUNoRCxJQUFNMk0sT0FBTyxHQUFHM00sS0FBSyxDQUFDRSxhQUFhLENBQUNnQixLQUFLO0lBQ3pDLElBQU0wTCxtQkFBbUIsR0FBRzlRLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQztJQUVwRCxJQUFJa0UsS0FBSyxDQUFDRSxhQUFhLENBQUMyTSxPQUFPLEVBQUU7TUFDN0JwQixnQkFBZ0IsQ0FBQ1csY0FBYyxFQUFFTyxPQUFPLENBQUM7SUFDN0MsQ0FBQyxNQUFNO01BQ0h0QixnQkFBZ0IsQ0FBQ2UsY0FBYyxFQUFFTyxPQUFPLENBQUM7SUFDN0M7SUFFQWhCLGdCQUFnQixDQUFDUyxjQUFjLEVBQUVRLG1CQUFtQixFQUFFZixJQUFJLENBQUM7RUFDL0QsQ0FBQyxDQUFDO0VBRUYvUCxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNxQixFQUFFLENBQUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFlBQU07SUFDL0MsSUFBTTJQLG9CQUFvQixHQUFHaFIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDMEUsSUFBSSxDQUFDLG9DQUFvQyxDQUFDO0lBRWpGLElBQUlzTSxvQkFBb0IsQ0FBQzlQLE1BQU0sSUFBSSxDQUFDLEVBQUU7TUFDbEMzQixzREFBYyxDQUFDOFEsZ0JBQWdCLENBQUM7TUFDaEMsT0FBTyxLQUFLO0lBQ2hCO0VBQ0osQ0FBQyxDQUFDO0FBQ04sQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2FjY291bnQuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3BheW1lbnQtbWV0aG9kLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBub2QgZnJvbSAnLi9jb21tb24vbm9kJztcclxuaW1wb3J0IFdpc2hsaXN0IGZyb20gJy4vd2lzaGxpc3QnO1xyXG5pbXBvcnQgdmFsaWRhdGlvbiBmcm9tICcuL2NvbW1vbi9mb3JtLXZhbGlkYXRpb24nO1xyXG5pbXBvcnQgc3RhdGVDb3VudHJ5IGZyb20gJy4vY29tbW9uL3N0YXRlLWNvdW50cnknO1xyXG5pbXBvcnQge1xyXG4gICAgY2xhc3NpZnlGb3JtLFxyXG4gICAgVmFsaWRhdG9ycyxcclxuICAgIGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXHJcbiAgICBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkLFxyXG4gICAgY3JlYXRlUGFzc3dvcmRWYWxpZGF0aW9uRXJyb3JUZXh0T2JqZWN0LFxyXG59IGZyb20gJy4vY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMnO1xyXG5pbXBvcnQgeyBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgfSBmcm9tICcuL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMnO1xyXG5pbXBvcnQgeyBjcmVkaXRDYXJkVHlwZSwgc3RvcmVJbnN0cnVtZW50LCBWYWxpZGF0b3JzIGFzIENDVmFsaWRhdG9ycywgRm9ybWF0dGVycyBhcyBDQ0Zvcm1hdHRlcnMgfSBmcm9tICcuL2NvbW1vbi9wYXltZW50LW1ldGhvZCc7XHJcbmltcG9ydCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi9nbG9iYWwvbW9kYWwnO1xyXG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3VudCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5ID0gY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5KGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMuJHN0YXRlID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJyk7XHJcbiAgICAgICAgdGhpcy4kYm9keSA9ICQoJ2JvZHknKTtcclxuICAgIH1cclxuXHJcbiAgICBvblJlYWR5KCkge1xyXG4gICAgICAgIGNvbnN0ICRlZGl0QWNjb3VudEZvcm0gPSBjbGFzc2lmeUZvcm0oJ2Zvcm1bZGF0YS1lZGl0LWFjY291bnQtZm9ybV0nKTtcclxuICAgICAgICBjb25zdCAkYWRkcmVzc0Zvcm0gPSBjbGFzc2lmeUZvcm0oJ2Zvcm1bZGF0YS1hZGRyZXNzLWZvcm1dJyk7XHJcbiAgICAgICAgY29uc3QgJGluYm94Rm9ybSA9IGNsYXNzaWZ5Rm9ybSgnZm9ybVtkYXRhLWluYm94LWZvcm1dJyk7XHJcbiAgICAgICAgY29uc3QgJGFjY291bnRSZXR1cm5Gb3JtID0gY2xhc3NpZnlGb3JtKCdbZGF0YS1hY2NvdW50LXJldHVybi1mb3JtXScpO1xyXG4gICAgICAgIGNvbnN0ICRwYXltZW50TWV0aG9kRm9ybSA9IGNsYXNzaWZ5Rm9ybSgnZm9ybVtkYXRhLXBheW1lbnQtbWV0aG9kLWZvcm1dJyk7XHJcbiAgICAgICAgY29uc3QgJHJlb3JkZXJGb3JtID0gY2xhc3NpZnlGb3JtKCdbZGF0YS1hY2NvdW50LXJlb3JkZXItZm9ybV0nKTtcclxuICAgICAgICBjb25zdCAkaW52b2ljZUJ1dHRvbiA9ICQoJ1tkYXRhLXByaW50LWludm9pY2VdJyk7XHJcbiAgICAgICAgY29uc3QgJGJpZ0NvbW1lcmNlID0gd2luZG93LkJpZ0NvbW1lcmNlO1xyXG5cclxuICAgICAgICBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0KTtcclxuXHJcbiAgICAgICAgLy8gSW5qZWN0ZWQgdmlhIHRlbXBsYXRlXHJcbiAgICAgICAgdGhpcy5wYXNzd29yZFJlcXVpcmVtZW50cyA9IHRoaXMuY29udGV4dC5wYXNzd29yZFJlcXVpcmVtZW50cztcclxuXHJcbiAgICAgICAgLy8gSW5zdGFudGlhdGVzIHdpc2ggbGlzdCBKU1xyXG4gICAgICAgIFdpc2hsaXN0LmxvYWQodGhpcy5jb250ZXh0KTtcclxuXHJcbiAgICAgICAgaWYgKCRlZGl0QWNjb3VudEZvcm0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJFZGl0QWNjb3VudFZhbGlkYXRpb24oJGVkaXRBY2NvdW50Rm9ybSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRzdGF0ZS5pcygnaW5wdXQnKSkge1xyXG4gICAgICAgICAgICAgICAgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCh0aGlzLiRzdGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkaW52b2ljZUJ1dHRvbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJGludm9pY2VCdXR0b24ub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGVmdCA9IHdpbmRvdy5zY3JlZW4uYXZhaWxXaWR0aCAvIDIgLSA0NTA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b3AgPSB3aW5kb3cuc2NyZWVuLmF2YWlsSGVpZ2h0IC8gMiAtIDMyMDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9ICRpbnZvaWNlQnV0dG9uLmRhdGEoJ3ByaW50SW52b2ljZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKHVybCwgJ29yZGVySW52b2ljZScsIGB3aWR0aD05MDAsaGVpZ2h0PTY1MCxsZWZ0PSR7bGVmdH0sdG9wPSR7dG9wfSxzY3JvbGxiYXJzPTFgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJGFkZHJlc3NGb3JtLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRBZGRyZXNzRm9ybVZhbGlkYXRpb24oJGFkZHJlc3NGb3JtKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRzdGF0ZS5pcygnaW5wdXQnKSkge1xyXG4gICAgICAgICAgICAgICAgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCh0aGlzLiRzdGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkaW5ib3hGb3JtLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVySW5ib3hWYWxpZGF0aW9uKCRpbmJveEZvcm0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCRhY2NvdW50UmV0dXJuRm9ybS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0QWNjb3VudFJldHVybkZvcm1WYWxpZGF0aW9uKCRhY2NvdW50UmV0dXJuRm9ybSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJHBheW1lbnRNZXRob2RGb3JtLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRQYXltZW50TWV0aG9kRm9ybVZhbGlkYXRpb24oJHBheW1lbnRNZXRob2RGb3JtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkcmVvcmRlckZvcm0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdFJlb3JkZXJGb3JtKCRyZW9yZGVyRm9ybSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJGJpZ0NvbW1lcmNlICYmICRiaWdDb21tZXJjZS5yZW5kZXJBY2NvdW50UGF5bWVudHMpIHtcclxuICAgICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICAgICAgY291bnRyaWVzLFxyXG4gICAgICAgICAgICAgICAgcGF5bWVudHNVcmwsXHJcbiAgICAgICAgICAgICAgICBzdG9yZUhhc2gsXHJcbiAgICAgICAgICAgICAgICBzdG9yZUxvY2FsZSxcclxuICAgICAgICAgICAgICAgIHZhdWx0VG9rZW4sXHJcbiAgICAgICAgICAgICAgICBzaG9wcGVySWQsXHJcbiAgICAgICAgICAgICAgICBjdXN0b21lckVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcHJvdmlkZXJJZCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbmN5Q29kZSxcclxuICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2RzVXJsLFxyXG4gICAgICAgICAgICAgICAgcGF5bWVudFByb3ZpZGVySW5pdGlhbGl6YXRpb25EYXRhLFxyXG4gICAgICAgICAgICAgICAgdGhlbWVTZXR0aW5ncyxcclxuICAgICAgICAgICAgfSA9IHRoaXMuY29udGV4dDtcclxuXHJcbiAgICAgICAgICAgICRiaWdDb21tZXJjZS5yZW5kZXJBY2NvdW50UGF5bWVudHMoe1xyXG4gICAgICAgICAgICAgICAgc3R5bGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRCYXNlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZVNldHRpbmdzWydpbnB1dC1mb250LWNvbG9yJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZVNldHRpbmdzWydpbnB1dC1ib3JkZXItY29sb3InXSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0VmFsaWRhdGlvbkVycm9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZVNldHRpbmdzWydjb2xvci1lcnJvciddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogdGhlbWVTZXR0aW5nc1snY29sb3ItZXJyb3InXSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0VmFsaWRhdGlvblN1Y2Nlc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lU2V0dGluZ3NbJ2NvbG9yLXN1Y2Nlc3MnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lU2V0dGluZ3NbJ2NvbG9yLXN1Y2Nlc3MnXSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWVTZXR0aW5nc1snYnV0dG9uLS1wcmltYXJ5LWNvbG9yJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWVTZXR0aW5nc1snYnV0dG9uLS1wcmltYXJ5LWJhY2tncm91bmRDb2xvciddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogdGhlbWVTZXR0aW5nc1snYnV0dG9uLS1wcmltYXJ5LWJhY2tncm91bmRDb2xvciddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZVNldHRpbmdzWydidXR0b24tLXByaW1hcnktY29sb3JIb3ZlciddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZVNldHRpbmdzWydidXR0b24tLXByaW1hcnktYmFja2dyb3VuZENvbG9ySG92ZXInXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZVNldHRpbmdzWydidXR0b24tLXByaW1hcnktYmFja2dyb3VuZENvbG9ySG92ZXInXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyY6YWN0aXZlJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lU2V0dGluZ3NbJ2J1dHRvbi0tcHJpbWFyeS1jb2xvckFjdGl2ZSddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZVNldHRpbmdzWydidXR0b24tLXByaW1hcnktYmFja2dyb3VuZENvbG9yQWN0aXZlJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogdGhlbWVTZXR0aW5nc1snYnV0dG9uLS1wcmltYXJ5LWJhY2tncm91bmRDb2xvckFjdGl2ZSddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnJltkaXNhYmxlZF0nOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lU2V0dGluZ3NbJ2J1dHRvbi0tZGlzYWJsZWQtYmFja2dyb3VuZENvbG9yJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogdGhlbWVTZXR0aW5nc1snYnV0dG9uLS1kaXNhYmxlZC1ib3JkZXJDb2xvciddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lU2V0dGluZ3NbJ2J1dHRvbi0tZGlzYWJsZWQtY29sb3InXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ25vdC1hbGxvd2VkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWVTZXR0aW5nc1snYnV0dG9uLS1kZWZhdWx0LWNvbG9yJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lU2V0dGluZ3NbJ2J1dHRvbi0tZGVmYXVsdC1ib3JkZXJDb2xvciddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZVNldHRpbmdzWydidXR0b24tLWRlZmF1bHQtY29sb3JIb3ZlciddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lU2V0dGluZ3NbJ2J1dHRvbi0tZGVmYXVsdC1ib3JkZXJDb2xvckhvdmVyJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICcmOmFjdGl2ZSc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZVNldHRpbmdzWydidXR0b24tLWRlZmF1bHQtY29sb3JBY3RpdmUnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZVNldHRpbmdzWydidXR0b24tLWRlZmF1bHQtYm9yZGVyQ29sb3JBY3RpdmUnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZVNldHRpbmdzWydmb3JtLWxhYmVsLWZvbnQtY29sb3InXSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWVTZXR0aW5nc1snY29sb3ItZXJyb3InXSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRpbmc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lU2V0dGluZ3NbJ2NvbG9yLXRleHRIZWFkaW5nJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdG9yZUNvbnRleHREYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRyaWVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnRzVXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlSGFzaCxcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZUxvY2FsZSxcclxuICAgICAgICAgICAgICAgICAgICB2YXVsdFRva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3BwZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICBjdXN0b21lckVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGVySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lDb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2RzVXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnRQcm92aWRlckluaXRpYWxpemF0aW9uRGF0YSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvckhhbmRsZXI6IHNob3dBbGVydE1vZGFsLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYmluZERlbGV0ZUFkZHJlc3MoKTtcclxuICAgICAgICB0aGlzLmJpbmREZWxldGVQYXltZW50TWV0aG9kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCaW5kcyBhIHN1Ym1pdCBob29rIHRvIGVuc3VyZSB0aGUgY3VzdG9tZXIgcmVjZWl2ZXMgYSBjb25maXJtYXRpb24gZGlhbG9nIGJlZm9yZSBkZWxldGluZyBhbiBhZGRyZXNzXHJcbiAgICAgKi9cclxuICAgIGJpbmREZWxldGVBZGRyZXNzKCkge1xyXG4gICAgICAgICQoJ1tkYXRhLWRlbGV0ZS1hZGRyZXNzXScpLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2RlbGV0ZUFkZHJlc3MnKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghd2luZG93LmNvbmZpcm0obWVzc2FnZSkpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kRGVsZXRlUGF5bWVudE1ldGhvZCgpIHtcclxuICAgICAgICAkKCdbZGF0YS1kZWxldGUtcGF5bWVudC1tZXRob2RdJykub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnZGVsZXRlUGF5bWVudE1ldGhvZCcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF3aW5kb3cuY29uZmlybShtZXNzYWdlKSkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRSZW9yZGVyRm9ybSgkcmVvcmRlckZvcm0pIHtcclxuICAgICAgICAkcmVvcmRlckZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RSZW9yZGVyQ2hlY2tib3hlcyA9ICQoJy5hY2NvdW50LWxpc3RJdGVtIC5mb3JtLWNoZWNrYm94OmNoZWNrZWQnKTtcclxuICAgICAgICAgICAgbGV0IHN1Ym1pdEZvcm0gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICRyZW9yZGVyRm9ybS5maW5kKCdbbmFtZV49XCJyZW9yZGVyaXRlbVwiXScpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgJHByb2R1Y3RSZW9yZGVyQ2hlY2tib3hlcy5lYWNoKChpbmRleCwgcHJvZHVjdENoZWNrYm94KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSAkKHByb2R1Y3RDaGVja2JveCkudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkaW5wdXQgPSAkKCc8aW5wdXQ+Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGByZW9yZGVyaXRlbVske3Byb2R1Y3RJZH1dYCxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJzEnLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc3VibWl0Rm9ybSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgJHJlb3JkZXJGb3JtLmFwcGVuZCgkaW5wdXQpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghc3VibWl0Rm9ybSkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKHRoaXMuY29udGV4dC5zZWxlY3RJdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRBZGRyZXNzRm9ybVZhbGlkYXRpb24oJGFkZHJlc3NGb3JtKSB7XHJcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbk1vZGVsID0gdmFsaWRhdGlvbigkYWRkcmVzc0Zvcm0sIHRoaXMuY29udGV4dCk7XHJcbiAgICAgICAgY29uc3Qgc3RhdGVTZWxlY3RvciA9ICdmb3JtW2RhdGEtYWRkcmVzcy1mb3JtXSBbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nO1xyXG4gICAgICAgIGNvbnN0ICRzdGF0ZUVsZW1lbnQgPSAkKHN0YXRlU2VsZWN0b3IpO1xyXG4gICAgICAgIGNvbnN0IGFkZHJlc3NWYWxpZGF0b3IgPSBub2Qoe1xyXG4gICAgICAgICAgICBzdWJtaXQ6ICdmb3JtW2RhdGEtYWRkcmVzcy1mb3JtXSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcclxuICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhZGRyZXNzVmFsaWRhdG9yLmFkZCh2YWxpZGF0aW9uTW9kZWwpO1xyXG5cclxuICAgICAgICBpZiAoJHN0YXRlRWxlbWVudCkge1xyXG4gICAgICAgICAgICBsZXQgJGxhc3Q7XHJcblxyXG4gICAgICAgICAgICAvLyBSZXF1ZXN0cyB0aGUgc3RhdGVzIGZvciBhIGNvdW50cnkgd2l0aCBBSkFYXHJcbiAgICAgICAgICAgIHN0YXRlQ291bnRyeSgkc3RhdGVFbGVtZW50LCB0aGlzLmNvbnRleHQsIChlcnIsIGZpZWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgJGZpZWxkID0gJChmaWVsZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFkZHJlc3NWYWxpZGF0b3IuZ2V0U3RhdHVzKCRzdGF0ZUVsZW1lbnQpICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3NWYWxpZGF0b3IucmVtb3ZlKCRzdGF0ZUVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkbGFzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3NWYWxpZGF0b3IucmVtb3ZlKCRsYXN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJGZpZWxkLmlzKCdzZWxlY3QnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICRsYXN0ID0gZmllbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uKGFkZHJlc3NWYWxpZGF0b3IsIGZpZWxkLCB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5LmZpZWxkX25vdF9ibGFuayk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuY2xlYW5VcFN0YXRlVmFsaWRhdGlvbihmaWVsZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJGFkZHJlc3NGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGFkZHJlc3NWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYWRkcmVzc1ZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0QWNjb3VudFJldHVybkZvcm1WYWxpZGF0aW9uKCRhY2NvdW50UmV0dXJuRm9ybSkge1xyXG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9ICRhY2NvdW50UmV0dXJuRm9ybS5kYXRhKCdhY2NvdW50UmV0dXJuRm9ybUVycm9yJyk7XHJcblxyXG4gICAgICAgICRhY2NvdW50UmV0dXJuRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZm9ybVN1Ym1pdCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgLy8gSXRlcmF0ZSB1bnRpbCB3ZSBmaW5kIGEgbm9uLXplcm8gdmFsdWUgaW4gdGhlIGRyb3Bkb3duIGZvciBxdWFudGl0eVxyXG4gICAgICAgICAgICAkKCdbbmFtZV49XCJyZXR1cm5fcXR5XCJdJywgJGFjY291bnRSZXR1cm5Gb3JtKS5lYWNoKChpLCBlbGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCgkKGVsZSkudmFsKCksIDEwKSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1TdWJtaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBFeGl0IG91dCBvZiBsb29wIGlmIHdlIGZvdW5kIGF0IGxlYXN0IG9uZSByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZm9ybVN1Ym1pdCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKGVycm9yTWVzc2FnZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0UGF5bWVudE1ldGhvZEZvcm1WYWxpZGF0aW9uKCRwYXltZW50TWV0aG9kRm9ybSkge1xyXG4gICAgICAgIC8vIEluamVjdCB2YWxpZGF0aW9ucyBpbnRvIGZvcm0gZmllbGRzIGJlZm9yZSB2YWxpZGF0aW9uIHJ1bnNcclxuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2ZpcnN0X25hbWUuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmZpcnN0TmFtZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xyXG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjbGFzdF9uYW1lLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5sYXN0TmFtZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xyXG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjY29tcGFueS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuY29tcGFueUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IGZhbHNlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcclxuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI3Bob25lLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5waG9uZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IGZhbHNlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcclxuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2FkZHJlc3MxLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5hZGRyZXNzMUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xyXG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjYWRkcmVzczIuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmFkZHJlc3MyTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogZmFsc2UsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xyXG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjY2l0eS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuY2l0eUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xyXG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjY291bnRyeS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlc2VsZWN0XCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5jb3VudHJ5TGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJwcmVmaXhcIjogXCIke3RoaXMuY29udGV4dC5jaG9vc2VDb3VudHJ5TGFiZWx9XCIgfWApO1xyXG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjc3RhdGUuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LnN0YXRlTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XHJcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNwb3N0YWxfY29kZS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQucG9zdGFsQ29kZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xyXG5cclxuICAgICAgICBjb25zdCB2YWxpZGF0aW9uTW9kZWwgPSB2YWxpZGF0aW9uKCRwYXltZW50TWV0aG9kRm9ybSwgdGhpcy5jb250ZXh0KTtcclxuICAgICAgICBjb25zdCBwYXltZW50TWV0aG9kU2VsZWN0b3IgPSAnZm9ybVtkYXRhLXBheW1lbnQtbWV0aG9kLWZvcm1dJztcclxuICAgICAgICBjb25zdCBwYXltZW50TWV0aG9kVmFsaWRhdG9yID0gbm9kKHtcclxuICAgICAgICAgICAgc3VibWl0OiBgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W3R5cGU9XCJzdWJtaXRcIl1gLFxyXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgJHN0YXRlRWxlbWVudCA9ICQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl1gKTtcclxuXHJcbiAgICAgICAgbGV0ICRsYXN0O1xyXG4gICAgICAgIC8vIFJlcXVlc3RzIHRoZSBzdGF0ZXMgZm9yIGEgY291bnRyeSB3aXRoIEFKQVhcclxuICAgICAgICBzdGF0ZUNvdW50cnkoJHN0YXRlRWxlbWVudCwgdGhpcy5jb250ZXh0LCAoZXJyLCBmaWVsZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgJGZpZWxkID0gJChmaWVsZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAocGF5bWVudE1ldGhvZFZhbGlkYXRvci5nZXRTdGF0dXMoJHN0YXRlRWxlbWVudCkgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kVmFsaWRhdG9yLnJlbW92ZSgkc3RhdGVFbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCRsYXN0KSB7XHJcbiAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kVmFsaWRhdG9yLnJlbW92ZSgkbGFzdCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICgkZmllbGQuaXMoJ3NlbGVjdCcpKSB7XHJcbiAgICAgICAgICAgICAgICAkbGFzdCA9IGZpZWxkO1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uKHBheW1lbnRNZXRob2RWYWxpZGF0b3IsIGZpZWxkLCB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5LmZpZWxkX25vdF9ibGFuayk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLmNsZWFuVXBTdGF0ZVZhbGlkYXRpb24oZmllbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFVzZSBjcmVkaXQgY2FyZCBudW1iZXIgaW5wdXQgbGlzdGVuZXIgdG8gaGlnaGxpZ2h0IGNyZWRpdCBjYXJkIHR5cGVcclxuICAgICAgICBsZXQgY2FyZFR5cGU7XHJcbiAgICAgICAgJChgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJjcmVkaXRfY2FyZF9udW1iZXJcIl1gKS5vbigna2V5dXAnLCAoeyB0YXJnZXQgfSkgPT4ge1xyXG4gICAgICAgICAgICBjYXJkVHlwZSA9IGNyZWRpdENhcmRUeXBlKHRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGlmIChjYXJkVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgJChgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGltZ1thbHQ9XCIke2NhcmRUeXBlfVwiXWApLnNpYmxpbmdzKCkuY3NzKCdvcGFjaXR5JywgJy4yJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW1nYCkuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTZXQgb2YgY3JlZGl0IGNhcmQgdmFsaWRhdGlvblxyXG4gICAgICAgIENDVmFsaWRhdG9ycy5zZXRDcmVkaXRDYXJkTnVtYmVyVmFsaWRhdGlvbihwYXltZW50TWV0aG9kVmFsaWRhdG9yLCBgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJjcmVkaXRfY2FyZF9udW1iZXJcIl1gLCB0aGlzLmNvbnRleHQuY3JlZGl0Q2FyZE51bWJlcik7XHJcbiAgICAgICAgQ0NWYWxpZGF0b3JzLnNldEV4cGlyYXRpb25WYWxpZGF0aW9uKHBheW1lbnRNZXRob2RWYWxpZGF0b3IsIGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImV4cGlyYXRpb25cIl1gLCB0aGlzLmNvbnRleHQuZXhwaXJhdGlvbik7XHJcbiAgICAgICAgQ0NWYWxpZGF0b3JzLnNldE5hbWVPbkNhcmRWYWxpZGF0aW9uKHBheW1lbnRNZXRob2RWYWxpZGF0b3IsIGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cIm5hbWVfb25fY2FyZFwiXWAsIHRoaXMuY29udGV4dC5uYW1lT25DYXJkKTtcclxuICAgICAgICBDQ1ZhbGlkYXRvcnMuc2V0Q3Z2VmFsaWRhdGlvbihwYXltZW50TWV0aG9kVmFsaWRhdG9yLCBgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJjdnZcIl1gLCB0aGlzLmNvbnRleHQuY3Z2LCAoKSA9PiBjYXJkVHlwZSk7XHJcblxyXG4gICAgICAgIC8vIFNldCBvZiBjcmVkaXQgY2FyZCBmb3JtYXRcclxuICAgICAgICBDQ0Zvcm1hdHRlcnMuc2V0Q3JlZGl0Q2FyZE51bWJlckZvcm1hdChgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJjcmVkaXRfY2FyZF9udW1iZXJcIl1gKTtcclxuICAgICAgICBDQ0Zvcm1hdHRlcnMuc2V0RXhwaXJhdGlvbkZvcm1hdChgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJleHBpcmF0aW9uXCJdYCk7XHJcblxyXG4gICAgICAgIC8vIEJpbGxpbmcgYWRkcmVzcyB2YWxpZGF0aW9uXHJcbiAgICAgICAgcGF5bWVudE1ldGhvZFZhbGlkYXRvci5hZGQodmFsaWRhdGlvbk1vZGVsKTtcclxuXHJcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIC8vIFBlcmZvcm0gZmluYWwgZm9ybSB2YWxpZGF0aW9uXHJcbiAgICAgICAgICAgIHBheW1lbnRNZXRob2RWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XHJcbiAgICAgICAgICAgIGlmIChwYXltZW50TWV0aG9kVmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gU2VyaWFsaXplIGZvcm0gZGF0YSBhbmQgcmVkdWNlIGl0IHRvIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IF8ucmVkdWNlKCRwYXltZW50TWV0aG9kRm9ybS5zZXJpYWxpemVBcnJheSgpLCAob2JqLCBpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVmT2JqID0gb2JqO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZk9ialtpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVmT2JqO1xyXG4gICAgICAgICAgICAgICAgfSwge30pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEFzc2lnbiBjb3VudHJ5IGFuZCBzdGF0ZSBjb2RlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb3VudHJ5ID0gXy5maW5kKHRoaXMuY29udGV4dC5jb3VudHJpZXMsICh7IHZhbHVlIH0pID0+IHZhbHVlID09PSBkYXRhLmNvdW50cnkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBjb3VudHJ5ICYmIF8uZmluZChjb3VudHJ5LnN0YXRlcywgKHsgdmFsdWUgfSkgPT4gdmFsdWUgPT09IGRhdGEuc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgZGF0YS5jb3VudHJ5X2NvZGUgPSBjb3VudHJ5ID8gY291bnRyeS5jb2RlIDogZGF0YS5jb3VudHJ5O1xyXG4gICAgICAgICAgICAgICAgZGF0YS5zdGF0ZV9vcl9wcm92aW5jZV9jb2RlID0gc3RhdGUgPyBzdGF0ZS5jb2RlIDogZGF0YS5zdGF0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBEZWZhdWx0IEluc3RydW1lbnRcclxuICAgICAgICAgICAgICAgIGRhdGEuZGVmYXVsdF9pbnN0cnVtZW50ID0gISFkYXRhLmRlZmF1bHRfaW5zdHJ1bWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTdG9yZSBjcmVkaXQgY2FyZFxyXG4gICAgICAgICAgICAgICAgc3RvcmVJbnN0cnVtZW50KHRoaXMuY29udGV4dCwgZGF0YSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5jb250ZXh0LnBheW1lbnRNZXRob2RzVXJsO1xyXG4gICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKHRoaXMuY29udGV4dC5nZW5lcmljX2Vycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJFZGl0QWNjb3VudFZhbGlkYXRpb24oJGVkaXRBY2NvdW50Rm9ybSkge1xyXG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25Nb2RlbCA9IHZhbGlkYXRpb24oJGVkaXRBY2NvdW50Rm9ybSwgdGhpcy5jb250ZXh0KTtcclxuICAgICAgICBjb25zdCBmb3JtRWRpdFNlbGVjdG9yID0gJ2Zvcm1bZGF0YS1lZGl0LWFjY291bnQtZm9ybV0nO1xyXG4gICAgICAgIGNvbnN0IGVkaXRWYWxpZGF0b3IgPSBub2Qoe1xyXG4gICAgICAgICAgICBzdWJtaXQ6IGAke2Zvcm1FZGl0U2VsZWN0b3J9IGlucHV0W3R5cGU9XCJzdWJtaXRcIl1gLFxyXG4gICAgICAgICAgICBkZWxheTogOTAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGVtYWlsU2VsZWN0b3IgPSBgJHtmb3JtRWRpdFNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPVwiRW1haWxBZGRyZXNzXCJdYDtcclxuICAgICAgICBjb25zdCAkZW1haWxFbGVtZW50ID0gJChlbWFpbFNlbGVjdG9yKTtcclxuICAgICAgICBjb25zdCBwYXNzd29yZFNlbGVjdG9yID0gYCR7Zm9ybUVkaXRTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT1cIlBhc3N3b3JkXCJdYDtcclxuICAgICAgICBjb25zdCAkcGFzc3dvcmRFbGVtZW50ID0gJChwYXNzd29yZFNlbGVjdG9yKTtcclxuICAgICAgICBjb25zdCBwYXNzd29yZDJTZWxlY3RvciA9IGAke2Zvcm1FZGl0U2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJDb25maXJtUGFzc3dvcmRcIl1gO1xyXG4gICAgICAgIGNvbnN0ICRwYXNzd29yZDJFbGVtZW50ID0gJChwYXNzd29yZDJTZWxlY3Rvcik7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFBhc3N3b3JkU2VsZWN0b3IgPSBgJHtmb3JtRWRpdFNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPVwiQ3VycmVudFBhc3N3b3JkXCJdYDtcclxuICAgICAgICBjb25zdCAkY3VycmVudFBhc3N3b3JkID0gJChjdXJyZW50UGFzc3dvcmRTZWxlY3Rvcik7XHJcblxyXG4gICAgICAgIC8vIFRoaXMgb25seSBoYW5kbGVzIHRoZSBjdXN0b20gZmllbGRzLCBzdGFuZGFyZCBmaWVsZHMgYXJlIGFkZGVkIGJlbG93XHJcbiAgICAgICAgZWRpdFZhbGlkYXRvci5hZGQodmFsaWRhdGlvbk1vZGVsKTtcclxuXHJcbiAgICAgICAgaWYgKCRlbWFpbEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZWRpdFZhbGlkYXRvci5yZW1vdmUoZW1haWxTZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIFZhbGlkYXRvcnMuc2V0RW1haWxWYWxpZGF0aW9uKGVkaXRWYWxpZGF0b3IsIGVtYWlsU2VsZWN0b3IsIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkudmFsaWRfZW1haWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCRwYXNzd29yZEVsZW1lbnQgJiYgJHBhc3N3b3JkMkVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgeyBwYXNzd29yZDogZW50ZXJQYXNzd29yZCwgcGFzc3dvcmRfbWF0Y2g6IG1hdGNoUGFzc3dvcmQgfSA9IHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnk7XHJcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IucmVtb3ZlKHBhc3N3b3JkU2VsZWN0b3IpO1xyXG4gICAgICAgICAgICBlZGl0VmFsaWRhdG9yLnJlbW92ZShwYXNzd29yZDJTZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIFZhbGlkYXRvcnMuc2V0UGFzc3dvcmRWYWxpZGF0aW9uKFxyXG4gICAgICAgICAgICAgICAgZWRpdFZhbGlkYXRvcixcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkU2VsZWN0b3IsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDJTZWxlY3RvcixcclxuICAgICAgICAgICAgICAgIHRoaXMucGFzc3dvcmRSZXF1aXJlbWVudHMsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVQYXNzd29yZFZhbGlkYXRpb25FcnJvclRleHRPYmplY3QoZW50ZXJQYXNzd29yZCwgZW50ZXJQYXNzd29yZCwgbWF0Y2hQYXNzd29yZCwgdGhpcy5wYXNzd29yZFJlcXVpcmVtZW50cy5lcnJvciksXHJcbiAgICAgICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCRjdXJyZW50UGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgZWRpdFZhbGlkYXRvci5hZGQoe1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGN1cnJlbnRQYXNzd29yZFNlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPT09ICcnICYmICRwYXNzd29yZEVsZW1lbnQudmFsKCkgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5jdXJyZW50UGFzc3dvcmQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWRpdFZhbGlkYXRvci5hZGQoW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogYCR7Zm9ybUVkaXRTZWxlY3Rvcn0gaW5wdXRbbmFtZT0nYWNjb3VudF9maXJzdG5hbWUnXWAsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmZpcnN0TmFtZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGAke2Zvcm1FZGl0U2VsZWN0b3J9IGlucHV0W25hbWU9J2FjY291bnRfbGFzdG5hbWUnXWAsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0Lmxhc3ROYW1lLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICAkZWRpdEFjY291bnRGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZWRpdFZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlYXJsaWVzdEVycm9yID0gJCgnc3Bhbi5mb3JtLWlubGluZU1lc3NhZ2U6Zmlyc3QnKS5wcmV2KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgZWFybGllc3RFcnJvci50cmlnZ2VyKCdmb2N1cycpO1xyXG4gICAgICAgICAgICB9LCA5MDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVySW5ib3hWYWxpZGF0aW9uKCRpbmJveEZvcm0pIHtcclxuICAgICAgICBjb25zdCBpbmJveFZhbGlkYXRvciA9IG5vZCh7XHJcbiAgICAgICAgICAgIHN1Ym1pdDogJ2Zvcm1bZGF0YS1pbmJveC1mb3JtXSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcclxuICAgICAgICAgICAgZGVsYXk6IDkwMCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaW5ib3hWYWxpZGF0b3IuYWRkKFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdmb3JtW2RhdGEtaW5ib3gtZm9ybV0gc2VsZWN0W25hbWU9XCJtZXNzYWdlX29yZGVyX2lkXCJdJyxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IE51bWJlcih2YWwpICE9PSAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmVudGVyT3JkZXJOdW0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZm9ybVtkYXRhLWluYm94LWZvcm1dIGlucHV0W25hbWU9XCJtZXNzYWdlX3N1YmplY3RcIl0nLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5lbnRlclN1YmplY3QsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZm9ybVtkYXRhLWluYm94LWZvcm1dIHRleHRhcmVhW25hbWU9XCJtZXNzYWdlX2NvbnRlbnRcIl0nLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5lbnRlck1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgICRpbmJveEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgaW5ib3hWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5ib3hWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVhcmxpZXN0RXJyb3IgPSAkKCdzcGFuLmZvcm0taW5saW5lTWVzc2FnZTpmaXJzdCcpLnByZXYoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBlYXJsaWVzdEVycm9yLnRyaWdnZXIoJ2ZvY3VzJyk7XHJcbiAgICAgICAgICAgIH0sIDkwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IGNyZWRpdGNhcmRzIGZyb20gJ2NyZWRpdGNhcmRzJztcclxuXHJcbi8qKlxyXG4gKiBPbWl0IG51bGwgb3IgZW1wdHkgc3RyaW5nIHByb3BlcnRpZXMgb2Ygb2JqZWN0XHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcclxuICogQHJldHVybnMge09iamVjdH1cclxuICovXHJcbmNvbnN0IG9taXROdWxsU3RyaW5nID0gb2JqID0+IHtcclxuICAgIGNvbnN0IHJlZk9iaiA9IG9iajtcclxuXHJcbiAgICAkLmVhY2gocmVmT2JqLCAoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgZGVsZXRlIHJlZk9ialtrZXldO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZWZPYmo7XHJcbn07XHJcblxyXG4vKipcclxuICogR2V0IGNyZWRpdCBjYXJkIHR5cGUgZnJvbSBjcmVkaXQgY2FyZCBudW1iZXJcclxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY3JlZGl0Q2FyZFR5cGUgPSB2YWx1ZSA9PiBjcmVkaXRjYXJkcy5jYXJkLnR5cGUoY3JlZGl0Y2FyZHMuY2FyZC5wYXJzZSh2YWx1ZSksIHRydWUpO1xyXG5cclxuLyoqXHJcbiAqIFdyYXBwZXIgZm9yIGFqYXggcmVxdWVzdCB0byBzdG9yZSBhIG5ldyBpbnN0cnVtZW50IGluIGJpZ3BheVxyXG4gKiBAcGFyYW0ge29iamVjdH0gUmVwcmVzZW50aW5nIHRoZSBkYXRhIG5lZWRlZCBmb3IgdGhlIGhlYWRlclxyXG4gKiBAcGFyYW0ge29iamVjdH0gUmVwcmVzZW50aW5nIHRoZSBkYXRhIG5lZWRlZCBmb3IgdGhlIGJvZHlcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gZG9uZSBGdW5jdGlvbiB0byBleGVjdXRlIG9uIGEgc3VjY2Vzc2Z1bCByZXNwb25zZVxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmYWlsIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgb24gYSB1bnN1Y2Nlc3NmdWwgcmVzcG9uc2VcclxuICovXHJcbmV4cG9ydCBjb25zdCBzdG9yZUluc3RydW1lbnQgPSAoe1xyXG4gICAgLy8gSG9zdG5hbWUsIElkcyAmIFRva2VuXHJcbiAgICBwYXltZW50c1VybCxcclxuICAgIHNob3BwZXJJZCxcclxuICAgIHN0b3JlSGFzaCxcclxuICAgIHZhdWx0VG9rZW4sXHJcbn0sIHtcclxuICAgIC8qIGVzbGludC1kaXNhYmxlICovXHJcbiAgICAvLyBQcm92aWRlciBJbmZvXHJcbiAgICBwcm92aWRlcl9pZCxcclxuICAgIGN1cnJlbmN5X2NvZGUsXHJcblxyXG4gICAgLy8gSW5zdHJ1bWVudCBEZXRhaWxzXHJcbiAgICBjcmVkaXRfY2FyZF9udW1iZXIsXHJcbiAgICBleHBpcmF0aW9uLFxyXG4gICAgbmFtZV9vbl9jYXJkLFxyXG4gICAgY3Z2LFxyXG4gICAgZGVmYXVsdF9pbnN0cnVtZW50LFxyXG5cclxuICAgIC8vIEJpbGxpbmcgQWRkcmVzc1xyXG4gICAgYWRkcmVzczEsXHJcbiAgICBhZGRyZXNzMixcclxuICAgIGNpdHksXHJcbiAgICBwb3N0YWxfY29kZSxcclxuICAgIHN0YXRlX29yX3Byb3ZpbmNlX2NvZGUsXHJcbiAgICBjb3VudHJ5X2NvZGUsXHJcbiAgICBjb21wYW55LFxyXG4gICAgZmlyc3RfbmFtZSxcclxuICAgIGxhc3RfbmFtZSxcclxuICAgIGVtYWlsLFxyXG4gICAgcGhvbmUsXHJcbiAgICAvKiBlc2xpbnQtZW5hYmxlICovXHJcbn0sIGRvbmUsIGZhaWwpID0+IHtcclxuICAgIGNvbnN0IGV4cGlyeSA9IGV4cGlyYXRpb24uc3BsaXQoJy8nKTtcclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogYCR7cGF5bWVudHNVcmx9L3N0b3Jlcy8ke3N0b3JlSGFzaH0vY3VzdG9tZXJzLyR7c2hvcHBlcklkfS9zdG9yZWRfaW5zdHJ1bWVudHNgLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogdmF1bHRUb2tlbixcclxuICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vdm5kLmJjLnYxK2pzb24nLFxyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3ZuZC5iYy52MStqc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgaW5zdHJ1bWVudDoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2NhcmQnLFxyXG4gICAgICAgICAgICAgICAgY2FyZGhvbGRlcl9uYW1lOiBuYW1lX29uX2NhcmQsXHJcbiAgICAgICAgICAgICAgICBudW1iZXI6IGNyZWRpdGNhcmRzLmNhcmQucGFyc2UoY3JlZGl0X2NhcmRfbnVtYmVyKSxcclxuICAgICAgICAgICAgICAgIGV4cGlyeV9tb250aDogY3JlZGl0Y2FyZHMuZXhwaXJhdGlvbi5tb250aC5wYXJzZShleHBpcnlbMF0pLFxyXG4gICAgICAgICAgICAgICAgZXhwaXJ5X3llYXI6IGNyZWRpdGNhcmRzLmV4cGlyYXRpb24ueWVhci5wYXJzZShleHBpcnlbMV0sIHRydWUpLFxyXG4gICAgICAgICAgICAgICAgdmVyaWZpY2F0aW9uX3ZhbHVlOiBjdnYsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJpbGxpbmdfYWRkcmVzczogb21pdE51bGxTdHJpbmcoe1xyXG4gICAgICAgICAgICAgICAgYWRkcmVzczEsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzMixcclxuICAgICAgICAgICAgICAgIGNpdHksXHJcbiAgICAgICAgICAgICAgICBwb3N0YWxfY29kZSxcclxuICAgICAgICAgICAgICAgIHN0YXRlX29yX3Byb3ZpbmNlX2NvZGUsXHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5X2NvZGUsXHJcbiAgICAgICAgICAgICAgICBjb21wYW55LFxyXG4gICAgICAgICAgICAgICAgZmlyc3RfbmFtZSxcclxuICAgICAgICAgICAgICAgIGxhc3RfbmFtZSxcclxuICAgICAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGhvbmUsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBwcm92aWRlcl9pZCxcclxuICAgICAgICAgICAgZGVmYXVsdF9pbnN0cnVtZW50LFxyXG4gICAgICAgICAgICBjdXJyZW5jeV9jb2RlLFxyXG4gICAgICAgIH0pLFxyXG4gICAgfSlcclxuICAgICAgICAuZG9uZShkb25lKVxyXG4gICAgICAgIC5mYWlsKGZhaWwpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvcm1hdHRlcnMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdXAgYSBmb3JtYXQgZm9yIGNyZWRpdCBjYXJkIG51bWJlclxyXG4gICAgICogQHBhcmFtIGZpZWxkXHJcbiAgICAgKi9cclxuICAgIHNldENyZWRpdENhcmROdW1iZXJGb3JtYXQ6IGZpZWxkID0+IHtcclxuICAgICAgICBpZiAoZmllbGQpIHtcclxuICAgICAgICAgICAgJChmaWVsZCkub24oJ2tleXVwJywgKHsgdGFyZ2V0IH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlZlRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICAgICAgICAgIHJlZlRhcmdldC52YWx1ZSA9IGNyZWRpdGNhcmRzLmNhcmQuZm9ybWF0KGNyZWRpdGNhcmRzLmNhcmQucGFyc2UodGFyZ2V0LnZhbHVlKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHVwIGEgZm9ybWF0IGZvciBleHBpcmF0aW9uIGRhdGVcclxuICAgICAqIEBwYXJhbSBmaWVsZFxyXG4gICAgICovXHJcbiAgICBzZXRFeHBpcmF0aW9uRm9ybWF0OiBmaWVsZCA9PiB7XHJcbiAgICAgICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICQoZmllbGQpLm9uKCdrZXl1cCcsICh7IHRhcmdldCwgd2hpY2ggfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVmVGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHdoaWNoID09PSA4ICYmIC8uKihcXC8pJC8udGVzdCh0YXJnZXQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmVGFyZ2V0LnZhbHVlID0gdGFyZ2V0LnZhbHVlLnNsaWNlKDAsIC0xKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LnZhbHVlLmxlbmd0aCA+IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWZUYXJnZXQudmFsdWUgPSB0YXJnZXQudmFsdWUuc2xpY2UoMCwgNSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHdoaWNoICE9PSA4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmVGFyZ2V0LnZhbHVlID0gdGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eKFsxLTldXFwvfFsyLTldKSQvZywgJzAkMS8nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXigwWzEtOV18MVswLTJdKSQvZywgJyQxLycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eKFswLTFdKShbMy05XSkkL2csICcwJDEvJDInKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXigwWzEtOV18MVswLTJdKShbMC05XXsyfSkkL2csICckMS8kMicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eKFswXSspXFwvfFswXSskL2csICcwJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1teXFxkXFwvXXxeW1xcL10qJC9nLCAnJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcL1xcLy9nLCAnLycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFZhbGlkYXRvcnMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdXAgYSB2YWxpZGF0aW9uIGZvciBjcmVkaXQgY2FyZCBudW1iZXJcclxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcclxuICAgICAqIEBwYXJhbSBmaWVsZFxyXG4gICAgICogQHBhcmFtIGVycm9yTWVzc2FnZVxyXG4gICAgICovXHJcbiAgICBzZXRDcmVkaXRDYXJkTnVtYmVyVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQsIGVycm9yTWVzc2FnZSkgPT4ge1xyXG4gICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGggJiYgY3JlZGl0Y2FyZHMuY2FyZC5pc1ZhbGlkKGNyZWRpdGNhcmRzLmNhcmQucGFyc2UodmFsKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB1cCBhIHZhbGlkYXRpb24gZm9yIGV4cGlyYXRpb24gZGF0ZVxyXG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxyXG4gICAgICogQHBhcmFtIGZpZWxkXHJcbiAgICAgKiBAcGFyYW0gZXJyb3JNZXNzYWdlXHJcbiAgICAgKi9cclxuICAgIHNldEV4cGlyYXRpb25WYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCwgZXJyb3JNZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvci5hZGQoe1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhwaXJ5ID0gdmFsLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHZhbC5sZW5ndGggJiYgL14oMFsxLTldfDFbMC0yXSlcXC8oWzAtOV17Mn0pJC8udGVzdCh2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCAmJiAhY3JlZGl0Y2FyZHMuZXhwaXJhdGlvbi5pc1Bhc3QoY3JlZGl0Y2FyZHMuZXhwaXJhdGlvbi5tb250aC5wYXJzZShleHBpcnlbMF0pLCBjcmVkaXRjYXJkcy5leHBpcmF0aW9uLnllYXIucGFyc2UoZXhwaXJ5WzFdLCB0cnVlKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB1cCBhIHZhbGlkYXRpb24gZm9yIG5hbWUgb24gY2FyZFxyXG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxyXG4gICAgICogQHBhcmFtIGZpZWxkXHJcbiAgICAgKiBAcGFyYW0gZXJyb3JNZXNzYWdlXHJcbiAgICAgKi9cclxuICAgIHNldE5hbWVPbkNhcmRWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCwgZXJyb3JNZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvci5hZGQoe1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gISF2YWwubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdXAgYSB2YWxpZGF0aW9uIGZvciBjdnZcclxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcclxuICAgICAqIEBwYXJhbSBmaWVsZFxyXG4gICAgICogQHBhcmFtIGVycm9yTWVzc2FnZVxyXG4gICAgICogQHBhcmFtIHthbnl9IGNhcmRUeXBlIFRoZSBjcmVkaXQgY2FyZCBudW1iZXIgdHlwZVxyXG4gICAgICovXHJcbiAgICBzZXRDdnZWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCwgZXJyb3JNZXNzYWdlLCBjYXJkVHlwZSkgPT4ge1xyXG4gICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgY2FyZFR5cGUgPT09ICdmdW5jdGlvbicgPyBjYXJkVHlwZSgpIDogY2FyZFR5cGU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aCAmJiBjcmVkaXRjYXJkcy5jdmMuaXNWYWxpZCh2YWwsIHR5cGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufTtcclxuIiwiaW1wb3J0IHsgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tICcuL21vZGFsJztcclxuXHJcbmZ1bmN0aW9uIGRlY3JlbWVudENvdW50ZXIoY291bnRlciwgaXRlbSkge1xyXG4gICAgY29uc3QgaW5kZXggPSBjb3VudGVyLmluZGV4T2YoaXRlbSk7XHJcblxyXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICBjb3VudGVyLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluY3JlbWVudENvdW50ZXIoY291bnRlciwgaXRlbSkge1xyXG4gICAgY291bnRlci5wdXNoKGl0ZW0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVDb3VudGVyTmF2KGNvdW50ZXIsICRsaW5rLCB1cmxzKSB7XHJcbiAgICBpZiAoY291bnRlci5sZW5ndGggIT09IDApIHtcclxuICAgICAgICBpZiAoISRsaW5rLmlzKCd2aXNpYmxlJykpIHtcclxuICAgICAgICAgICAgJGxpbmsuYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJGxpbmsuYXR0cignaHJlZicsIGAke3VybHMuY29tcGFyZX0vJHtjb3VudGVyLmpvaW4oJy8nKX1gKTtcclxuICAgICAgICAkbGluay5maW5kKCdzcGFuLmNvdW50UGlsbCcpLmh0bWwoY291bnRlci5sZW5ndGgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkbGluay5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoeyBub0NvbXBhcmVNZXNzYWdlLCB1cmxzIH0pIHtcclxuICAgIGxldCBjb21wYXJlQ291bnRlciA9IFtdO1xyXG5cclxuICAgIGNvbnN0ICRjb21wYXJlTGluayA9ICQoJ2FbZGF0YS1jb21wYXJlLW5hdl0nKTtcclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2NvbXBhcmVSZXNldCcsICgpID0+IHtcclxuICAgICAgICBjb25zdCAkY2hlY2tlZCA9ICQoJ2JvZHknKS5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xyXG5cclxuICAgICAgICBjb21wYXJlQ291bnRlciA9ICRjaGVja2VkLmxlbmd0aCA/ICRjaGVja2VkLm1hcCgoaW5kZXgsIGVsZW1lbnQpID0+IGVsZW1lbnQudmFsdWUpLmdldCgpIDogW107XHJcbiAgICAgICAgdXBkYXRlQ291bnRlck5hdihjb21wYXJlQ291bnRlciwgJGNvbXBhcmVMaW5rLCB1cmxzKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJ2JvZHknKS50cmlnZ2VySGFuZGxlcignY29tcGFyZVJlc2V0Jyk7XHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS1jb21wYXJlLWlkXScsIGV2ZW50ID0+IHtcclxuICAgICAgICBjb25zdCBwcm9kdWN0ID0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcclxuICAgICAgICBjb25zdCAkY2xpY2tlZENvbXBhcmVMaW5rID0gJCgnYVtkYXRhLWNvbXBhcmUtbmF2XScpO1xyXG5cclxuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIGluY3JlbWVudENvdW50ZXIoY29tcGFyZUNvdW50ZXIsIHByb2R1Y3QpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRlY3JlbWVudENvdW50ZXIoY29tcGFyZUNvdW50ZXIsIHByb2R1Y3QpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXBkYXRlQ291bnRlck5hdihjb21wYXJlQ291bnRlciwgJGNsaWNrZWRDb21wYXJlTGluaywgdXJscyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ2FbZGF0YS1jb21wYXJlLW5hdl0nLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgJGNsaWNrZWRDaGVja2VkSW5wdXQgPSAkKCdib2R5JykuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcclxuXHJcbiAgICAgICAgaWYgKCRjbGlja2VkQ2hlY2tlZElucHV0Lmxlbmd0aCA8PSAxKSB7XHJcbiAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKG5vQ29tcGFyZU1lc3NhZ2UpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlBhZ2VNYW5hZ2VyIiwibm9kIiwiV2lzaGxpc3QiLCJ2YWxpZGF0aW9uIiwic3RhdGVDb3VudHJ5IiwiY2xhc3NpZnlGb3JtIiwiVmFsaWRhdG9ycyIsImFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UiLCJpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkIiwiY3JlYXRlUGFzc3dvcmRWYWxpZGF0aW9uRXJyb3JUZXh0T2JqZWN0IiwiY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IiwiY3JlZGl0Q2FyZFR5cGUiLCJzdG9yZUluc3RydW1lbnQiLCJDQ1ZhbGlkYXRvcnMiLCJGb3JtYXR0ZXJzIiwiQ0NGb3JtYXR0ZXJzIiwic2hvd0FsZXJ0TW9kYWwiLCJjb21wYXJlUHJvZHVjdHMiLCJBY2NvdW50IiwiX1BhZ2VNYW5hZ2VyIiwiY29udGV4dCIsIl90aGlzIiwiY2FsbCIsInZhbGlkYXRpb25EaWN0aW9uYXJ5IiwiJHN0YXRlIiwiJCIsIiRib2R5IiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJvblJlYWR5IiwiJGVkaXRBY2NvdW50Rm9ybSIsIiRhZGRyZXNzRm9ybSIsIiRpbmJveEZvcm0iLCIkYWNjb3VudFJldHVybkZvcm0iLCIkcGF5bWVudE1ldGhvZEZvcm0iLCIkcmVvcmRlckZvcm0iLCIkaW52b2ljZUJ1dHRvbiIsIiRiaWdDb21tZXJjZSIsIndpbmRvdyIsIkJpZ0NvbW1lcmNlIiwicGFzc3dvcmRSZXF1aXJlbWVudHMiLCJsb2FkIiwibGVuZ3RoIiwicmVnaXN0ZXJFZGl0QWNjb3VudFZhbGlkYXRpb24iLCJpcyIsIm9uIiwibGVmdCIsInNjcmVlbiIsImF2YWlsV2lkdGgiLCJ0b3AiLCJhdmFpbEhlaWdodCIsInVybCIsImRhdGEiLCJvcGVuIiwiaW5pdEFkZHJlc3NGb3JtVmFsaWRhdGlvbiIsInJlZ2lzdGVySW5ib3hWYWxpZGF0aW9uIiwiaW5pdEFjY291bnRSZXR1cm5Gb3JtVmFsaWRhdGlvbiIsImluaXRQYXltZW50TWV0aG9kRm9ybVZhbGlkYXRpb24iLCJpbml0UmVvcmRlckZvcm0iLCJyZW5kZXJBY2NvdW50UGF5bWVudHMiLCJfdGhpcyRjb250ZXh0IiwiY291bnRyaWVzIiwicGF5bWVudHNVcmwiLCJzdG9yZUhhc2giLCJzdG9yZUxvY2FsZSIsInZhdWx0VG9rZW4iLCJzaG9wcGVySWQiLCJjdXN0b21lckVtYWlsIiwicHJvdmlkZXJJZCIsImN1cnJlbmN5Q29kZSIsInBheW1lbnRNZXRob2RzVXJsIiwicGF5bWVudFByb3ZpZGVySW5pdGlhbGl6YXRpb25EYXRhIiwidGhlbWVTZXR0aW5ncyIsInN0eWxlcyIsImlucHV0QmFzZSIsImNvbG9yIiwiYm9yZGVyQ29sb3IiLCJpbnB1dFZhbGlkYXRpb25FcnJvciIsImlucHV0VmFsaWRhdGlvblN1Y2Nlc3MiLCJzdWJtaXRCdXR0b24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjdXJzb3IiLCJjYW5jZWxCdXR0b24iLCJsYWJlbCIsInZhbGlkYXRpb25FcnJvciIsImhlYWRpbmciLCJzdG9yZUNvbnRleHREYXRhIiwiZXJyb3JIYW5kbGVyIiwiYmluZERlbGV0ZUFkZHJlc3MiLCJiaW5kRGVsZXRlUGF5bWVudE1ldGhvZCIsImV2ZW50IiwibWVzc2FnZSIsImN1cnJlbnRUYXJnZXQiLCJjb25maXJtIiwicHJldmVudERlZmF1bHQiLCJfdGhpczIiLCIkcHJvZHVjdFJlb3JkZXJDaGVja2JveGVzIiwic3VibWl0Rm9ybSIsImZpbmQiLCJyZW1vdmUiLCJlYWNoIiwiaW5kZXgiLCJwcm9kdWN0Q2hlY2tib3giLCJwcm9kdWN0SWQiLCJ2YWwiLCIkaW5wdXQiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwiYXBwZW5kIiwic2VsZWN0SXRlbSIsIl90aGlzMyIsInZhbGlkYXRpb25Nb2RlbCIsInN0YXRlU2VsZWN0b3IiLCIkc3RhdGVFbGVtZW50IiwiYWRkcmVzc1ZhbGlkYXRvciIsInN1Ym1pdCIsInRhcCIsImFkZCIsIiRsYXN0IiwiZXJyIiwiZmllbGQiLCJFcnJvciIsIiRmaWVsZCIsImdldFN0YXR1cyIsInNldFN0YXRlQ291bnRyeVZhbGlkYXRpb24iLCJmaWVsZF9ub3RfYmxhbmsiLCJjbGVhblVwU3RhdGVWYWxpZGF0aW9uIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwiZXJyb3JNZXNzYWdlIiwiZm9ybVN1Ym1pdCIsImkiLCJlbGUiLCJwYXJzZUludCIsIl90aGlzNCIsImF0dHIiLCJmaXJzdE5hbWVMYWJlbCIsImxhc3ROYW1lTGFiZWwiLCJjb21wYW55TGFiZWwiLCJwaG9uZUxhYmVsIiwiYWRkcmVzczFMYWJlbCIsImFkZHJlc3MyTGFiZWwiLCJjaXR5TGFiZWwiLCJjb3VudHJ5TGFiZWwiLCJjaG9vc2VDb3VudHJ5TGFiZWwiLCJzdGF0ZUxhYmVsIiwicG9zdGFsQ29kZUxhYmVsIiwicGF5bWVudE1ldGhvZFNlbGVjdG9yIiwicGF5bWVudE1ldGhvZFZhbGlkYXRvciIsImNhcmRUeXBlIiwiX3JlZiIsInRhcmdldCIsInNpYmxpbmdzIiwiY3NzIiwic2V0Q3JlZGl0Q2FyZE51bWJlclZhbGlkYXRpb24iLCJjcmVkaXRDYXJkTnVtYmVyIiwic2V0RXhwaXJhdGlvblZhbGlkYXRpb24iLCJleHBpcmF0aW9uIiwic2V0TmFtZU9uQ2FyZFZhbGlkYXRpb24iLCJuYW1lT25DYXJkIiwic2V0Q3Z2VmFsaWRhdGlvbiIsImN2diIsInNldENyZWRpdENhcmROdW1iZXJGb3JtYXQiLCJzZXRFeHBpcmF0aW9uRm9ybWF0IiwiX3JlZHVjZSIsInNlcmlhbGl6ZUFycmF5Iiwib2JqIiwiaXRlbSIsInJlZk9iaiIsImNvdW50cnkiLCJfZmluZCIsIl9yZWYyIiwic3RhdGUiLCJzdGF0ZXMiLCJfcmVmMyIsImNvdW50cnlfY29kZSIsImNvZGUiLCJzdGF0ZV9vcl9wcm92aW5jZV9jb2RlIiwiZGVmYXVsdF9pbnN0cnVtZW50IiwibG9jYXRpb24iLCJocmVmIiwiZ2VuZXJpY19lcnJvciIsImZvcm1FZGl0U2VsZWN0b3IiLCJlZGl0VmFsaWRhdG9yIiwiZGVsYXkiLCJlbWFpbFNlbGVjdG9yIiwiJGVtYWlsRWxlbWVudCIsInBhc3N3b3JkU2VsZWN0b3IiLCIkcGFzc3dvcmRFbGVtZW50IiwicGFzc3dvcmQyU2VsZWN0b3IiLCIkcGFzc3dvcmQyRWxlbWVudCIsImN1cnJlbnRQYXNzd29yZFNlbGVjdG9yIiwiJGN1cnJlbnRQYXNzd29yZCIsInNldEVtYWlsVmFsaWRhdGlvbiIsInZhbGlkX2VtYWlsIiwiX3RoaXMkdmFsaWRhdGlvbkRpY3RpIiwiZW50ZXJQYXNzd29yZCIsInBhc3N3b3JkIiwibWF0Y2hQYXNzd29yZCIsInBhc3N3b3JkX21hdGNoIiwic2V0UGFzc3dvcmRWYWxpZGF0aW9uIiwiZXJyb3IiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJyZXN1bHQiLCJjdXJyZW50UGFzc3dvcmQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInNldFRpbWVvdXQiLCJlYXJsaWVzdEVycm9yIiwicHJldiIsInRyaWdnZXIiLCJpbmJveFZhbGlkYXRvciIsIk51bWJlciIsImVudGVyT3JkZXJOdW0iLCJlbnRlclN1YmplY3QiLCJlbnRlck1lc3NhZ2UiLCJkZWZhdWx0IiwiY3JlZGl0Y2FyZHMiLCJvbWl0TnVsbFN0cmluZyIsImtleSIsImNhcmQiLCJwYXJzZSIsImRvbmUiLCJmYWlsIiwicHJvdmlkZXJfaWQiLCJjdXJyZW5jeV9jb2RlIiwiY3JlZGl0X2NhcmRfbnVtYmVyIiwibmFtZV9vbl9jYXJkIiwiYWRkcmVzczEiLCJhZGRyZXNzMiIsImNpdHkiLCJwb3N0YWxfY29kZSIsImNvbXBhbnkiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJwaG9uZSIsImV4cGlyeSIsInNwbGl0IiwiYWpheCIsImRhdGFUeXBlIiwibWV0aG9kIiwiY2FjaGUiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIkFjY2VwdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJpbnN0cnVtZW50IiwiY2FyZGhvbGRlcl9uYW1lIiwibnVtYmVyIiwiZXhwaXJ5X21vbnRoIiwibW9udGgiLCJleHBpcnlfeWVhciIsInllYXIiLCJ2ZXJpZmljYXRpb25fdmFsdWUiLCJiaWxsaW5nX2FkZHJlc3MiLCJyZWZUYXJnZXQiLCJmb3JtYXQiLCJfcmVmNCIsIndoaWNoIiwidGVzdCIsInNsaWNlIiwicmVwbGFjZSIsInZhbGlkYXRvciIsImlzVmFsaWQiLCJpc1Bhc3QiLCJjdmMiLCJkZWNyZW1lbnRDb3VudGVyIiwiY291bnRlciIsImluZGV4T2YiLCJzcGxpY2UiLCJpbmNyZW1lbnRDb3VudGVyIiwicHVzaCIsInVwZGF0ZUNvdW50ZXJOYXYiLCIkbGluayIsInVybHMiLCJhZGRDbGFzcyIsImNvbXBhcmUiLCJqb2luIiwiaHRtbCIsInJlbW92ZUNsYXNzIiwibm9Db21wYXJlTWVzc2FnZSIsImNvbXBhcmVDb3VudGVyIiwiJGNvbXBhcmVMaW5rIiwiJGNoZWNrZWQiLCJtYXAiLCJlbGVtZW50IiwiZ2V0IiwidHJpZ2dlckhhbmRsZXIiLCJwcm9kdWN0IiwiJGNsaWNrZWRDb21wYXJlTGluayIsImNoZWNrZWQiLCIkY2xpY2tlZENoZWNrZWRJbnB1dCJdLCJzb3VyY2VSb290IjoiIn0=