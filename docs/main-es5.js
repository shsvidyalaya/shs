function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admissions/admissions.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admissions/admissions.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdmissionsAdmissionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"section-admission\">\r\n    <div class=\"breadcum\">\r\n        <a>\r\n            <i class=\"icon icon-ex-small\">\r\n                <svg focusable=\"false\">\r\n                    <use xlink:href=\"#icon_home\"></use>\r\n                </svg>\r\n            </i>\r\n        </a>\r\n        <span> |</span>\r\n        <a>\r\n            Join SHS VIDYALAYA Pride\r\n        </a>\r\n    </div>\r\n    <div class=\"row-f sub-header\">\r\n        <h1  data-aos=\"fade-up\" data-aos-once=\"true\">\r\n            Join SHS VIDYALAYA Pride\r\n        </h1>\r\n\r\n        <div class=\"col-lg-11 col-md-11 col-sm-12 admission-info\">\r\n           \r\n         <div class=\"panel\"  data-aos=\"fade-up\" data-aos-once=\"true\">\r\n              \r\n                <div class=\"panel-body\">\r\n                <p>\r\n                   <img  class=\"image-wrap\" align=\"right\" src=\"assets/images/9.jpg\"  data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                     Thank You for expressing interest in shs .  We at shs , welcome all learners to a vibrant school community delivering an ethical education in an academic setting.<br><br>\r\n                    Our admissions policy ensures an appropriate admission procedure with respect to each application received for admission. We pursue to set a selection standard that is fair and consistent. Assessment for admissions to preprimary and primary would be an analysis to evaluate  developmental preparedness of students, using a range of assessment methods to understand  applicant’s skills. Prior to admissions, we assess applicants to determine ir readiness for our School providing practical and ethical methods of teaching.</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row add-spec\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                    <p >\r\n                        We at shs , aspire to ensure that our students nurture ir passion for knowledge so y may pursue ir dreams and become successful \r\n                    </p>\r\n                </div>\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                    <div class=\"row\">\r\n                    <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngFor=\"let item of admission; index as i\">\r\n                        <div class=\"panel\">\r\n                            <div class=\"panel-front\">\r\n                                <div class=\"panel-heading\">\r\n                                    <i class=\"icon icon-medium\">\r\n                                        <svg focusable=\"false\">\r\n                                            <use attr.xlink:href=\"{{item.icon}}\"></use>\r\n                                        </svg>\r\n                                    </i>\r\n                                     \r\n                                        <p>{{item.description}}</p>\r\n                                </div>\r\n                             </div>\r\n                            \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            </div>\r\n            <div class=\"doodle\">\r\n                Join SHS VIDYALAYA Pride\r\n            </div>\r\n        </div>\r\n    \r\n\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n    <section class=\"section-admission-2\">\r\n      <div class=\"container\">\r\n        <div class=\"row addmin-sec\">\r\n                <div class=\"col-lg-3 col-md-3 col-sm-12 add-info\" *ngFor=\"let item of admission_2; index as i\">\r\n                    <div class=\"panel\"  data-aos=\"fade\" data-aos-once=\"true\">\r\n                        <div class=\"panel-heading\">\r\n                                <h3 class=\"bar {{item.bar}}\">\r\n                                    {{item.title}}\r\n                                </h3> \r\n                                <p>{{item.description}}</p> \r\n                                    \r\n                            </div>\r\n                            <button class=\"btn btn-primary\" (click)=\"open(content)\" data-aos=\"fade-up\" data-aos-once=\"true\">APPLY NOW</button>\r\n                       </div>\r\n                </div>\r\n      </div>          \r\n   </div>\r\n    \r\n    </section>\r\n</section>\r\n\r\n<ng-template #content let-modal>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Apply</h4>\r\n          <a class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n            <i class=\"icon icon-ex-small\">\r\n              <svg focusable=\"false\">\r\n                <use xlink:href=\"#icon_close\"></use>\r\n              </svg>\r\n            </i>\r\n          </a>\r\n    </div>\r\n    <div class=\"modal-body apply-form\">\r\n            <form>\r\n                <div class=\"row\">\r\n                    <div class=\"col\">\r\n                        <label for=\"sel1\">Academic Year</label>\r\n                        <select class=\"form-control\" id=\"sel1\">\r\n                            <option>2020-2021</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                      <label for=\"pn\">Parent Name</label>\r\n                      <input type=\"pn\" class=\"form-control\" placeholder=\"Parent Name\" name=\"pn\">\r\n                  </div>\r\n                  </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col\">\r\n                    <label for=\"pn\">Parent Email ID</label>\r\n                    <input type=\"pi\" class=\"form-control\" placeholder=\"Parent Email ID\" name=\"pi\">\r\n                  </div>\r\n                    <div class=\"col\">\r\n                        <label for=\"phone\">Parent Mobile No</label>\r\n                        <input type=\"phone\" class=\"form-control\" placeholder=\"Phone\" name=\"phone\">\r\n                    </div>\r\n                   \r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"Date\">Student DOB</label>\r\n                        <div class=\"input-group\">\r\n                          <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n                                 name=\"dp\" ngModel=\"model\" ngbDatepicker #d=\"ngbDatepicker\">\r\n                          <div class=\"input-group-append\">\r\n                            <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\">\r\n                                <i class=\"icon icon-ex-small\">\r\n                                    <svg focusable=\"false\">\r\n                                      <use xlink:href=\"#icon_calender\"></use>\r\n                                    </svg>\r\n                                  </i>\r\n                            </button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                 </div>\r\n                    <div class=\"col\">\r\n                        <label for=\"Grade\">Grade</label>\r\n                        <select class=\"form-control\" id=\"Grade\">\r\n                            <option>Select-class</option>\r\n                            <option>Grade-1</option>\r\n                            <option>Grade-2</option>\r\n                            <option>Grade-3</option>\r\n                            <option>Grade-4</option>\r\n                            <option>Grade-5</option>\r\n                            <option>Grade-6</option>\r\n                            <option>Grade-7</option>\r\n                        </select>\r\n                    </div>\r\n                    \r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col\">\r\n                        <button class=\"btn btn-primary\">APPLY NOW</button>\r\n                    </div>\r\n                </div>\r\n                \r\n            </form>\r\n\r\n    </div>\r\n  </ng-template>    \r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n\r\n<!-- <div class=\"flying-img _1\">\r\n    <img src=\"assets/images/flying/1.png\">\r\n</div>\r\n<div class=\"flying-img _2\">\r\n    <img src=\"assets/images/flying/2.png\">\r\n</div>\r\n<div class=\"flying-img _3\">\r\n    <img src=\"assets/images/flying/3.png\">\r\n</div>\r\n<div class=\"flying-img _4\">\r\n    <img src=\"assets/images/flying/4.png\">\r\n</div>\r\n<div class=\"flying-img _5\">\r\n    <img src=\"assets/images/flying/5.png\">\r\n</div>\r\n<div class=\"flying-img _6\">\r\n    <img src=\"assets/images/flying/6.png\">\r\n</div>\r\n<div class=\"flying-img _7\">\r\n    <img src=\"assets/images/flying/7.png\">\r\n</div>\r\n<div class=\"flying-img _8\">\r\n    <img src=\"assets/images/flying/8.png\">\r\n</div>\r\n<div class=\"flying-img _9\">\r\n    <img src=\"assets/images/flying/9.png\">\r\n</div>\r\n<div class=\"flying-img _10\">\r\n    <img src=\"assets/images/flying/10.png\">\r\n</div>\r\n<div class=\"flying-img _11\">\r\n    <img src=\"assets/images/flying/11.png\">\r\n</div>\r\n<div class=\"flying-img _12\">\r\n    <img src=\"assets/images/flying/12.png\">\r\n</div>\r\n<div class=\"flying-img _13\">\r\n    <img src=\"assets/images/flying/13.png\">\r\n</div>\r\n<div class=\"flying-img _14\">\r\n    <img src=\"assets/images/flying/14.png\">\r\n</div>\r\n<div class=\"flying-img _15\">\r\n    <img src=\"assets/images/flying/15.png\">\r\n</div>\r\n<div class=\"flying-img _16\">\r\n    <img src=\"assets/images/flying/16.png\">\r\n</div>\r\n<div class=\"flying-img _17\">\r\n    <img src=\"assets/images/flying/17.png\">\r\n</div>\r\n<div class=\"flying-img _18\">\r\n    <img src=\"assets/images/flying/18.png\">\r\n</div> -->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/apply/apply.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apply/apply.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppApplyApplyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"section-study-culture section-inner-subheader\">\r\n    <div class=\"breadcum\">\r\n        <a>\r\n            <i class=\"icon icon-ex-small\">\r\n                <svg focusable=\"false\">\r\n                    <use xlink:href=\"#icon_home\"></use>\r\n                </svg>\r\n            </i>\r\n        </a>\r\n        <span> |</span>\r\n        <a>\r\n            How to apply\r\n        </a>\r\n    </div>\r\n\r\n\r\n    <div class=\"row-f sub-header\">\r\n        <h1>\r\n            How to apply?\r\n        </h1>\r\n\r\n        <div class=\"col-lg-11 col-md-11 col-sm-12 inner-info\">\r\n           \r\n         <div class=\"panel\">\r\n              \r\n                <div class=\"panel-body\">\r\n                <p>At shs , our school year calendar will begin from June through April. \r\n                    We encourage parents to submit  admission application, documents and payment as soon as possible.  Admissions Department will review completed applications prior to enrollment.\r\n                   </p>\r\n                \r\n                    <ul class=\"list\">\r\n                        <li *ngFor=\"let data of moreInfo\">\r\n                            {{data.info}}\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n\r\n                <div class=\"doodle\">\r\n                    How to apply?\r\n                </div>\r\n            </div>\r\n\r\n            </div>\r\n        <div class=\"img-flag\">\r\n            <img src=\"assets/images/10.jpg\">\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n\r\n    <div class=\"row applycation-rules\">\r\n       <button class=\"btn btn-primary \">APPLY</button>\r\n    </div>\r\n\r\n\r\n\r\n\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/blob/blob.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blob/blob.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBlobBlobComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"section-inner-subheader\">\r\n    <div class=\"breadcum\">\r\n        <a>\r\n            <i class=\"icon icon-ex-small\">\r\n                <svg focusable=\"false\">\r\n                    <use xlink:href=\"#icon_home\"></use>\r\n                </svg>\r\n            </i>\r\n        </a>\r\n        <span> |</span>\r\n        <a>\r\n            SHS VIDYALAYA Corner \r\n        </a>\r\n    </div>\r\n\r\n</section>\r\n\r\n<!-- <section class=\"blob-article\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n              <div class=\"panel\"><h2>Check mate!  We would like to invite you to<br>\r\n                Gorki campus to take part in our traditional<br>\r\n                Сambridge Chess Tournament 2020.</h2>\r\n                <p>\r\n                    We are a group of committed individuals who believe that “What sculpture is to a block of marble, education is to  human soul.” Joseph Addison.\r\n                    <br><br>\r\nOur advisory board comprises of diverse academicians who have a keen interest in providing a unique perspective to our collective vision. Individually y have contributed tremendously to  field of education, toger y bring ir unique capacities to our advisory board supporting continual improvement and sustainability.\r\n<br><br>\r\nWe want to nurture a confident, compassionate student body that is ready to make a positive difference to  World. We affirm that every child deserves a childhood filled with love and positivism. That is  core belief, with which we will take care of each child, as this will contribute to making exemplary individuals.\r\n                </p></div>\r\n                <div class=\"btn-wrapper\">\r\n                    <div class=\"div-btn\">\r\n                    <button class=\"btn btn-primary\" (click)=\"knowMore('culture');\">\r\n                        READ MORE\r\n                    </button>\r\n                </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section> -->\r\n\r\n<section class=\"recent-article\">\r\n    <div class=\"container\">\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n            <h6>SHS VIDYALAYA Corner</h6>\r\n            <h2><span>Recent Articles</span></h2>\r\n        </div>\r\n        <div class=\"row\">\r\n            <ngx-slick-carousel class=\"carousel\" #slickModal=\"slick-carousel\"\r\n                [config]=\"recentConfig\">\r\n                <div ngxSlickItem *ngFor=\"let item of admission; index as i\" class=\"slide col-lg-4 col-md-4 col-sm-12\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"panel-heading\">\r\n                                <p>{{item.date}}</p>\r\n                                 <h3>{{item.title}}</h3>\r\n                        </div>\r\n                        <div class=\"panel-body\">\r\n                            <p>{{item.description}}</p>\r\n                   </div>\r\n                   <button class=\"btn btn-primary\" (click)=\"knowMore('culture');\">\r\n                    READ MORE\r\n                </button>\r\n                    </div>\r\n                </div>\r\n            </ngx-slick-carousel>\r\n        </div>\r\n    </div>  \r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"map\">\r\n    <iframe frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"\r\n        src=\"https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Pillar%20No.102,%20PVNR%20Express%20way,%20501%20Karwan%20Sahu%20Road,%20%20Attapur,%20Hyderabad,%20Telangana%20500008,%20India%20Hyderabad+(%20shs%20)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed\"></iframe>\r\n    <script type='text/javascript'\r\n        src='https://embedmaps.com/google-maps-authorization/script.js?id=f9059a527fc461bcc6e4ca8c957752c8ece552e0'></script>\r\n</div>\r\n<section class=\"section-inner-subheader\">\r\n    <div class=\"breadcum\">\r\n        <a>\r\n            <i class=\"icon icon-ex-small\">\r\n                <svg focusable=\"false\">\r\n                    <use xlink:href=\"#icon_home\"></use>\r\n                </svg>\r\n            </i>\r\n        </a>\r\n        <span> |</span>\r\n        <a>\r\n            Catch Up Over Coffee\r\n        </a>\r\n    </div>\r\n    <div class=\"row\">\r\n        <h1>\r\n            Contact Us\r\n        </h1>\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n            <div class=\"row inner-contact-info\">\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12 contact-form\">\r\n                    <h5 class=\"col\">Get in touch</h5>\r\n                    <form action=\"/action_page.php\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Name\" name=\"name\">\r\n                            </div>\r\n                            <div class=\"col\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"in\" placeholder=\"Last Name\" name=\"ln\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <input type=\"phone\" class=\"form-control\" placeholder=\"Phone\" name=\"phone\">\r\n                            </div>\r\n                            <div class=\"col\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"Mail ID\" name=\"email\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <label for=\"comment\">Comment:</label>\r\n                                <textarea class=\"form-control\" rows=\"3\" id=\"comment\"></textarea>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row flex-end\">\r\n                        <button type=\"submit\" class=\"btn btn-primary\">\r\n                            <i class=\"icon icon-medium\">\r\n                            <svg focusable=\"false\">\r\n                                <use xlink:href=\"#icon_plane\"></use>\r\n                            </svg>\r\n                            </i> \r\n                        </button>\r\n                    </div>\r\n                    </form>\r\n                </div>\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12 contact-info\">\r\n                    <h5 class=\"col info-title\">CONTACT<br>\r\n                        INFORMATION</h5>\r\n                    <div class=\"row tel\">\r\n                        <i class=\"icon icon-small\">\r\n                            <svg focusable=\"false\">\r\n                                <use xlink:href=\"#icon_phone\"></use>\r\n                            </svg>\r\n                        </i>\r\n                        <p>\r\n                            +91 9111 399 399\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"row address\">\r\n                        <i class=\"icon icon-small\">\r\n                            <svg focusable=\"false\">\r\n                                <use xlink:href=\"#icon_map\"></use>\r\n                            </svg>\r\n                        </i>\r\n                        <p>\r\n                            Pillar No.102, PVNR Express way,<br> 501 Karwan Sahu Road, <br>Attapur, Hyderabad, Telangana 500008,<br>\r\n                            India\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"row email\">\r\n                        <i class=\"icon icon-small\">\r\n                            <svg focusable=\"false\">\r\n                                <use xlink:href=\"#icon_message\"></use>\r\n                            </svg>\r\n                        </i>\r\n                        <p>\r\n                            <a href=\"mailto:admissions@shs.com\">admissions@shs.com</a><br>\r\n                            <a href=\"mailto:enquiry@shs.com\">enquiry@shs.com</a>\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"social-net\">\r\n                        <ul>\r\n                            <li *ngFor=\"let item of socialNet; index as i\">\r\n                                <a href=\"https://www.{{item.icon}}.com\" target=\"_blank\">\r\n                                    <i class=\"icon icon-ex-small\">\r\n                                        <svg focusable=\"false\">\r\n                                            <use attr.xlink:href=\"{{item.icon}}\"></use>\r\n                                        </svg>\r\n                                    </i>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"clearfix\"></div>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/eng/eng.component.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/eng/eng.component.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEngEngComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"breadcum\">\r\n    <a>\r\n        <i class=\"icon icon-ex-small\">\r\n            <svg focusable=\"false\">\r\n                <use xlink:href=\"#icon_home\"></use>\r\n            </svg>\r\n        </i>\r\n    </a>\r\n    <span> |</span>\r\n    <a>\r\n        Page under construction.\r\n    </a>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"contact-info\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 col-md-4 col-sm-12\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                <p>\r\n                    SHS VIDYALAYA <br>\r\n                    Pillar No. 102, 501 Karwan Sahu Road,<br>\r\n                    Attapur, Hyderabad, Telangana 500008\r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-4 col-sm-12\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                <p>\r\n                    +91 9111 399 399<br>\r\n                    admissions@shs.com<br>\r\n                    enquiry@shs.com\r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-4 col-sm-12\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                <div>\r\n                    <div class=\"social-net\">\r\n                        <ul>\r\n                            <li><a routerLink=\"shsStory\" routerLinkActive=\"active\" skipLocationChange=true>\r\n                                    SHS VIDYALAYA story\r\n                                </a>\r\n                            </li>\r\n                            <li><a routerLink=\"shsCulture\" routerLinkActive=\"active\" skipLocationChange=true>\r\n                                    SHS VIDYALAYA Culture\r\n                                </a>\r\n                            </li>\r\n                            <li><a routerLink=\"shsEdge\" routerLinkActive=\"active\" skipLocationChange=true>\r\n                                    SHS VIDYALAYA Edge\r\n                                </a>\r\n                            </li>\r\n                            <li><a routerLink=\"JoinshsPride\" routerLinkActive=\"active\" skipLocationChange=true>\r\n                                    Join SHS VIDYALAYA Pride\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header>\r\n  <nav class=\"navbar navbar-expand-lg navbar-light\">\r\n    <div class=\"container\">\r\n    <a href=\"javascript:void(0)\" class=\"logo\" routerLink=\"Home\" routerLinkActive=\"active\"\r\n    skipLocationChange=true>\r\n      <img src=\"assets/images/logo.png\">\r\n  </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"slideToggel()\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n  </div>\r\n    <ul class=\"navbar-nav navbar-nav-list header-nav\">\r\n      <li class=\"nav-item login\">\r\n        <a class=\"nav-link\">\r\n          <i class=\"icon icon-small\">\r\n            <svg focusable=\"false\">\r\n              <use xlink:href=\"#icon_chatroom\"></use>\r\n            </svg>\r\n          </i><br>\r\n          <span>Chat</span> \r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item login dropping\">\r\n        <a class=\"nav-link\">\r\n          <i class=\"icon icon-small\">\r\n            <svg focusable=\"false\">\r\n              <use xlink:href=\"#icon_enquiry\"></use>\r\n            </svg>\r\n          </i><br>\r\n         <span>Enquiry</span> \r\n        </a>\r\n\r\n        <div class=\"dropper\">\r\n          <a (click)=\"open(apply)\">\r\n            Admission to Foundation Stage\r\n          </a>\r\n          <a (click)=\"open(apply)\">\r\n            Admission to Preparatory Stage\r\n          </a>\r\n          <a (click)=\"open(apply)\">\r\n            Admission to Middle Stage\r\n          </a>\r\n          <a (click)=\"open(apply)\">\r\n            Admission to Secondary Stage\r\n          </a>\r\n        </div>\r\n  \r\n        <ng-template #apply let-modal>\r\n          <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\" id=\"modal-basic-title\">Apply</h4>\r\n                <a class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n                  <i class=\"icon icon-ex-small\">\r\n                    <svg focusable=\"false\">\r\n                      <use xlink:href=\"#icon_close\"></use>\r\n                    </svg>\r\n                  </i>\r\n                </a>\r\n          </div>\r\n          <div class=\"modal-body apply-form\">\r\n          \r\n                  <form>\r\n                      <div class=\"row\">\r\n                          <div class=\"col\">\r\n                              <label for=\"sel1\">Academic Year</label>\r\n                              <select class=\"form-control\" id=\"sel1\">\r\n                                  <option>2020-2021</option>\r\n                              </select>\r\n                          </div>\r\n                          <div class=\"col\">\r\n                            <label for=\"pn\">Parent Name</label>\r\n                            <input type=\"pn\" class=\"form-control\" placeholder=\"Parent Name\" name=\"pn\">\r\n                        </div>\r\n                        </div>\r\n                      <div class=\"row\">\r\n                        <div class=\"col\">\r\n                          <label for=\"pn\">Parent Email ID</label>\r\n                          <input type=\"pi\" class=\"form-control\" placeholder=\"Parent Email ID\" name=\"pi\">\r\n                        </div>\r\n                          <div class=\"col\">\r\n                              <label for=\"phone\">Parent Mobile No</label>\r\n                              <input type=\"phone\" class=\"form-control\" placeholder=\"Phone\" name=\"phone\">\r\n                          </div>\r\n                         \r\n                      </div>\r\n                      <div class=\"row\">\r\n                        <div class=\"col\">\r\n                          <div class=\"form-group\">\r\n                              <label for=\"Date\">Student DOB</label>\r\n                              <div class=\"input-group\">\r\n                                <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n                                       name=\"dp\" ngModel=\"model\" ngbDatepicker #d=\"ngbDatepicker\">\r\n                                <div class=\"input-group-append\">\r\n                                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\">\r\n                                      <i class=\"icon icon-ex-small\">\r\n                                          <svg focusable=\"false\">\r\n                                            <use xlink:href=\"#icon_calender\"></use>\r\n                                          </svg>\r\n                                        </i>\r\n                                  </button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                       </div>\r\n                          <div class=\"col\">\r\n                              <label for=\"Grade\">Grade</label>\r\n                              <select class=\"form-control\" id=\"Grade\">\r\n                                  <option>Select-class</option>\r\n                                  <option>Grade-1</option>\r\n                                  <option>Grade-2</option>\r\n                                  <option>Grade-3</option>\r\n                                  <option>Grade-4</option>\r\n                                  <option>Grade-5</option>\r\n                                  <option>Grade-6</option>\r\n                                  <option>Grade-7</option>\r\n                              </select>\r\n                          </div>\r\n                          \r\n                      </div>\r\n                      <div class=\"row\">\r\n                          <div class=\"col\">\r\n                              <button class=\"btn btn-primary\">APPLY NOW</button>\r\n                          </div>\r\n                      </div>\r\n                      \r\n                  </form>\r\n          \r\n          </div>\r\n        </ng-template>  \r\n      </li>\r\n      <li class=\"nav-item login\">\r\n         <a class=\"nav-link\" (click)=\"openlogin(login)\">\r\n           <i class=\"icon icon-small\">\r\n             <svg focusable=\"false\">\r\n               <use xlink:href=\"#icon_login\"></use>\r\n             </svg>\r\n           </i><br>\r\n         <span>Login</span>   \r\n         </a>\r\n  \r\n         <ng-template #login let-modal>\r\n          <div class=\"modal-header\">\r\n             <h4 class=\"modal-title\" id=\"modal-basic-title\">Login/ Register</h4>\r\n                <a class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n                  <i class=\"icon icon-ex-small\">\r\n                    <svg focusable=\"false\">\r\n                      <use xlink:href=\"#icon_close\"></use>\r\n                    </svg>\r\n                  </i>\r\n                </a>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-6 col-md-6 col-sm-12 login-form\">\r\n                <h6>Login</h6>\r\n                <form action=\"\">\r\n               \r\n                <div class=\"row\">\r\n                  <div class=\"col\">\r\n                      <label for=\"userName\">User Name</label>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"User Name\" name=\"userName\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col\">\r\n                    <label for=\"pass\">Password</label>\r\n                    <input type=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"pass\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col form-check\">\r\n                  <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\"> Remember me\r\n                  </label>\r\n                  <a href=\"\" class=\"ml-5\">Forgot Password?</a>\r\n              </div>\r\n              </div>\r\n              <button class=\"btn btn-primary\">Login</button>\r\n              </form>\r\n              </div>\r\n              <div class=\"col-lg-6 col-md-6 col-sm-12 login-form\">\r\n                <h6>Register</h6>\r\n                <form action=\"\">\r\n               \r\n                  <div class=\"row\">\r\n                    <div class=\"col\">\r\n                        <label for=\"userName\">User Name</label>\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"User Name\" name=\"userName\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col\">\r\n                      <label for=\"email\">Email ID</label>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Email ID\" name=\"EmailID\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col\">\r\n                    <label for=\"phoneno\">Phone No.</label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Phone Number\" name=\"phoneno\">\r\n                </div>\r\n              </div>\r\n                 <button class=\"btn btn-primary\" >Register</button>\r\n                </form>\r\n              </div>\r\n            </div>\r\n  \r\n          </div>\r\n        </ng-template>\r\n  \r\n       </li>\r\n     </ul>\r\n \r\n  \r\n  </nav>\r\n</header>\r\n\r\n<nav class=\"navbar-vertical\">\r\n  <a class=\"nav-link\" (click)=\"slideToggel()\">\r\n    <i class=\"icon icon-small\">\r\n      <svg focusable=\"false\">\r\n        <use xlink:href=\"#icon_menu\"></use>\r\n      </svg>\r\n    </i>\r\n  </a> \r\n  \r\n  <div class=\"social-net\">\r\n\r\n    <ul>\r\n        <li><a href=\"https://www.facebook.com/shs/\" target=\"_blank\">\r\n                <i class=\"icon icon-ex-small\">\r\n                    <svg focusable=\"false\">\r\n                        <use xlink:href=\"#icon_facebook\"></use>\r\n                    </svg>\r\n                </i>\r\n                <span>Facebook</span>\r\n            </a>\r\n        </li>\r\n        <li><a href=\"https://www.linkedin.com/company/shs\" target=\"_blank\">\r\n                <i class=\"icon icon-ex-small\">\r\n                    <svg focusable=\"false\">\r\n                        <use xlink:href=\"#icon_linkedin\"></use>\r\n                    </svg>\r\n                </i>\r\n                <span>Linkedin</span>\r\n            </a>\r\n        </li>\r\n        <li><a href=\"https://instagram.com/shs?igshid=1qcxjqxa75x37\" target=\"_blank\">\r\n                <i class=\"icon icon-ex-small\">\r\n                    <svg focusable=\"false\">\r\n                        <use xlink:href=\"#icon_instagram\"></use>\r\n                    </svg>\r\n                </i>\r\n                <span>Instagram</span>\r\n            </a>\r\n        </li>\r\n\r\n        <li class=\"notice-board\"><a  target=\"_blank\" (click)=\"notifyOpen(notify)\">\r\n          <i class=\"icon icon-ex-small\">\r\n              <svg focusable=\"false\">\r\n                  <use xlink:href=\"#icon_noticeBoard\"></use>\r\n              </svg>\r\n          </i>\r\n          <span>Notice Board</span>\r\n       </a>\r\n    </li>\r\n    </ul>\r\n</div>\r\n</nav>\r\n\r\n<ng-template #notify let-modal>\r\n  <div class=\"modal-header\">\r\n    <i class=\"icon icon-ex-small\">\r\n      <svg focusable=\"false\">\r\n          <use xlink:href=\"#icon_noticeBoard\"></use>\r\n      </svg>\r\n  </i>\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">NOTICE BOARD</h4>\r\n        <a class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n          <i class=\"icon icon-ex-small\">\r\n            <svg focusable=\"false\">\r\n              <use xlink:href=\"#icon_close\"></use>\r\n            </svg>\r\n          </i>\r\n        </a>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12 v-flex\">\r\n       <p>\r\n        Admissions open<br>\r\n        for  academic<br>\r\n        year of 2020 - 2021\r\n       </p>\r\n       <button class=\"btn btn-primary\"  aria-label=\"Close\" (click)=\"knowMore('admission');\">APPLY NOW</button>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n       <img src=\"assets/images/notice-board.png\">\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n<div class=\"overlay\" [ngClass]=\"isOpen ? '' : 'active'\">\r\n  <img src=\"assets/images/2.jpg\">\r\n  <a class=\"nav-link\" (click)=\"slideToggel()\">\r\n    <i class=\"icon icon-small close-menu\">\r\n      <svg focusable=\"false\">\r\n        <use xlink:href=\"#icon_close\"></use>\r\n      </svg>\r\n    </i>\r\n  </a> \r\n<ul class=\"main-nav\">\r\n      <li class=\"main-nav-list\" *ngFor=\"let item of list; index as i\">\r\n        <a class=\"main-nav-link\" routerLink=\"{{item.name}}\" routerLinkActive=\"active\" skipLocationChange=true (click)=\"slideToggel()\">\r\n          {{item.name | createSpace}}\r\n        </a>\r\n      </li>\r\n    </ul>\r\n\r\n    <ul class=\"navbar-nav navbar-nav-list notify-show\">\r\n      <li class=\"nav-item social-media\">\r\n\r\n      <a class=\"nav-link\" href=\"https://www.facebook.com/shs/\" target=\"_blank\">\r\n          <i class=\"icon icon-small\">\r\n              <svg focusable=\"false\">\r\n                  <use xlink:href=\"#icon_facebook\"></use>\r\n              </svg>\r\n          </i>\r\n      </a>\r\n      </li>\r\n      <li class=\"nav-item social-media\">\r\n        <a class=\"nav-link\" href=\"https://www.linkedin.com/company/shs\" target=\"_blank\">\r\n          <i class=\"icon icon-small\">\r\n              <svg focusable=\"false\">\r\n                  <use xlink:href=\"#icon_linkedin\"></use>\r\n              </svg>\r\n          </i>\r\n      </a>\r\n      </li>\r\n      <li class=\"nav-item social-media\">\r\n        <a class=\"nav-link\" href=\"https://instagram.com/shs?igshid=1qcxjqxa75x37\" target=\"_blank\">\r\n          <i class=\"icon icon-small\">\r\n              <svg focusable=\"false\">\r\n                  <use xlink:href=\"#icon_instagram\"></use>\r\n              </svg>\r\n          </i>\r\n      </a>\r\n       </li>\r\n       <li class=\"nav-item social-media\">\r\n        <a class=\"nav-link\" target=\"_blank\" (click)=\"notifyOpen(notify)\">\r\n          <i class=\"icon icon-small\">\r\n              <svg focusable=\"false\">\r\n                  <use xlink:href=\"#icon_noticeBoard\"></use>\r\n              </svg>\r\n          </i>\r\n       </a>\r\n       </li>\r\n     </ul>\r\n    <div class=\"general-info-nav\">\r\n      <a>Sitemap</a> |\r\n      <a>Privacy Policy</a> |\r\n      <a>FAQ</a> |\r\n      <a>Careers</a>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-banner\">\r\n    <!-- <ngb-carousel #carousel interval=\"5000\" [showNavigationArrows]=\"showNavigationArrows\" [pauseOnHover]=\"pauseOnHover\"\r\n    (slide)=\"onSlide($event)\">\r\n        <ng-template ngbSlide  *ngFor=\"let info of banner; index as i\">\r\n          <div class=\"picsum-img-wrapper\">\r\n            <img src=\"assets/images/banner{{i+1}}.jpg\" alt=\"Random first slide\">\r\n          </div>\r\n          <div class=\"carousel-caption\">\r\n           <h3>{{info.title}}</h3>\r\n            <p>{{info.description}}</p>\r\n          </div>\r\n        </ng-template>     \r\n      </ngb-carousel> -->\r\n\r\n    <video controls autoplay>\r\n        <source src=\"assets/images/banner.mp4\" type=\"video/mp4\">\r\n        Your browser does not support  video tag.\r\n    </video>\r\n\r\n</div>\r\n\r\n<section class=\"section-admission\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-3 col-sm-12 admission-flag\">\r\n                <div class=\"flag-pos\">\r\n                    <div class=\"v-align\">\r\n                        <h1>Join<br>\r\n                            SHS VIDYALAYA<br>\r\n                            Family\r\n                            <br>\r\n                            <button class=\"btn btn-primary\" (click)=\"knowMore('apply');\">Apply Now</button></h1>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <ngx-slick-carousel class=\"carousel col-lg-9 col-md-9 col-sm-12\" #slickModal=\"slick-carousel\"\r\n                [config]=\"admissionConfig\">\r\n                <div ngxSlickItem *ngFor=\"let item of admission; index as i\" class=\"slide\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"panel-front\">\r\n                            <div class=\"panel-heading\">\r\n                                <i class=\"icon icon-medium\">\r\n                                    <svg focusable=\"false\">\r\n                                        <use attr.xlink:href=\"{{item.icon}}\"></use>\r\n                                    </svg>\r\n                                </i>\r\n\r\n                                <p>{{item.description}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </ngx-slick-carousel>\r\n\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"section-info\">\r\n    <img src=\"assets/images/1.jpg\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 center\">\r\n                <h1 data-aos=\"fade-up\" data-aos-once=\"true\">We don’t just\r\n                    teach kids,<br>\r\n                    we nurture m</h1>\r\n            </div>\r\n            <div *ngFor=\"let item of solution\" class=\"col-lg-4 col-md-4 col-sm-12 panel-container\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                <div class=\"panel\">\r\n                    <div class=\"panel-front\">\r\n                        <div class=\"panel-heading\">\r\n                            <i class=\"icon icon-medium\">\r\n                                <svg focusable=\"false\">\r\n                                    <use attr.xlink:href=\"{{item.icon}}\"></use>\r\n                                </svg>\r\n                            </i>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"panel-back\">\r\n                        <p>{{item.description}}\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"section-nofify\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-3 col-sm-12\">\r\n                <h1 data-aos=\"fade-up\" data-aos-once=\"true\">What drives<br>\r\n                    us?</h1>\r\n            </div>\r\n            <div *ngFor=\"let item of notify\" class=\"{{item.col}} col-sm-12\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                <div class=\"panel\">\r\n                    <div class=\"panel-front\">\r\n                        <div class=\"panel-heading\">\r\n                            <h5><span>{{item.title}}</span></h5>\r\n                            <p>{{item.description}}</p>\r\n                            <ul class=\"list\">\r\n                                <li *ngFor=\"let data of item.moreInfo\">\r\n                                    {{data.info}}\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</section>\r\n<section class=\"section-curriculum\">\r\n    <div class=\"row-f\">\r\n        <div class=\"col-lg-9 col-md-9 col-sm-12 float-right p0\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n            <img src=\"assets/images/2.jpg\">\r\n        </div>\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n    <div class=\"container\">\r\n        <div class=\"row\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n            <ul ngbNav #collapse #nav=\"ngbNav\" [ngClass]=\"isOpen ? '' : 'drop-down-active'\" [(activeId)]=\"active\" \r\n                    class=\"nav-pills section-curriculum-list col-lg-4 col-md-4 col-sm-12\" orientation=\"vertical\">\r\n                    <li class=\"d-sm-block d-md-none drop-down\" (click)=\"drowDownToggle()\"> \r\n                         <i class=\"icon icon-ex-small\">\r\n                            <svg focusable=\"false\">\r\n                                <use xlink:href=\"#icon_downArrow\"></use>\r\n                            </svg>\r\n                        </i>\r\n                    </li>\r\n                    <li ngbNavItem=\"1\" (click)=\"drowDownToggle()\">\r\n                        <a ngbNavLink>CURRICULUM</a>\r\n                        <ng-template ngbNavContent>\r\n                            <p>\r\n                                An integrated curriculum extends a framework with significant and expressive learning including assessments and evaluation to meet  standards and benchmarks of  boards whose learning objectives are  guide. At SHS VIDYALAYA  we believe that education is not memorizing  facts but training  mind to think creatively and critically! APPLICATION- LEARN HOW TO LEARN -  Students creating meaningful lifelong experiences!\r\n                            </p>\r\n                            <ul class=\"list\">\r\n                                <li>\r\n                                    <h5>Best possible start to learning</h5>\r\n                                    <p>Our caring, experienced teachers and teacher assistants give our youngest students  best possible start to learning. Our play-based learning environment captures ir natural curiosity and sense of wonder. Our core subjects are complemented by all core subject classes, including Physical Education, Visual & Performing Arts and Music are all delivered in a warm, nurturing environment.</p>\r\n                                </li>\r\n                                <li>\r\n                                    <h5>A positive foundation for learning</h5>\r\n                                    <p>At SHS VIDYALAYA  children are introduced to a love of play and learning, by creating opportunities to explore, experiment, solve problems and express mselves as individuals. Sustained learning and  ability to apply concepts facilitates self-confidence and motivation. A deeper understanding of science and math concepts, improved reading and writing skills, fostering positive attitudes and personal growth, critical thinking skills and improved quality of work, will result in remarkable academic success.</p>\r\n                                </li>\r\n                                <li>\r\n                                    <h5>Personal development for life</h5>\r\n                                    <p> Along with a positive start to learning, our teachers place an emphasis on oral language development and nurturing social relationships. Our teachers know a structured foundation is important for young children, to help m develop and grow into confident individuals.\r\n                                    An exceptional learning space is provided for our young students, with high-quality trained staff who care and guide  young children.</p>\r\n                                </li>\r\n                            </ul>\r\n                                <button class=\"btn btn-primary\" (click)=\"knowMore('culture');\">KNOW MORE</button>\r\n                            \r\n                        </ng-template>\r\n                    </li>\r\n                    <li ngbNavItem=\"2\" (click)=\"drowDownToggle()\">\r\n                        <a ngbNavLink>shs EDGE</a>\r\n                        <ng-template ngbNavContent>\r\n                            <p>\r\n                                 integrated curriculum at shs comprises & aligns with all  learning outcomes in\r\n                                CBSE, IGCSE & AERO standards.  curriculum includes reading, writing, listening,\r\n                                speaking, social studies, math, science, health, physical education, music, and visual\r\n                                arts, experiential learning, public speaking, emphasis on projects, etc. We at shs\r\n                                will utilize different approaches of integration best suited for  students:\r\n                            </p>\r\n                                <ul class=\"list\">\r\n                                    <li>\r\n                                        <h5>Multi-Disciplinary Integration -</h5>\r\n                                        <p>To focus on reading, writing, and communication in all its forms, in language arts. This\r\n                                approach focuses on integration within one subject area, teaching  content with\r\n                                deeper understanding.</p>\r\n                                    </li>\r\n                                    <li>\r\n                                        <h5>Inter-disciplinary integration -</h5>\r\n                                        <p>Focuses on project-based learning in more than one subject area. Interdisciplinary\r\n                                        integration assembles  teaching of several subjects around common issues, or\r\n                                        problems, highlighting matic concepts in which a common me is studied.\r\n                                    </p> </li>\r\n                                    <li>\r\n                                        <h5>Trans-disciplinary integration -</h5>\r\n                                    <p> Involves understanding  student’s interests, and concerns while encouraging m to\r\n                                        ask questions to inquire about  subject matter from a variety of perspectives.\r\n                                        Interdisciplinary integration incorporates information, involving students’ interests\r\n                                        and questions.</p>\r\n                                    </li>\r\n                              </ul>\r\n                                <button class=\"btn btn-primary\" (click)=\"knowMore('edge');\">KNOW MORE</button>\r\n                            \r\n                        </ng-template>\r\n                    </li>\r\n                    <li ngbNavItem=\"3\" (click)=\"drowDownToggle()\">\r\n                        <a ngbNavLink>COMMUNICATION\r\n                            AND LANGUAGE</a>\r\n                        <ng-template ngbNavContent>\r\n                            <p>\r\n                                Communication and language development is about different ways a child understands and communicates, using words, gestures or facial expressions. As an indicator of fine motor skills development and a reflection of cognitive development, reading is one of  best ways to encourage communication and language development. SHS VIDYALAYA  has introduced Guided Reading into  curriculum using a broad spectrum of reading material from different genres to help children become accomplished readers at ir grade levels.\r\n\r\n                            </p>\r\n                        </ng-template>\r\n                    </li>\r\n                    <li ngbNavItem=\"4\" (click)=\"drowDownToggle()\">\r\n                        <a ngbNavLink>PERSONAL, SOCIAL AND\r\n                            EMOTIONAL DEVELOPMENT</a>\r\n                        <ng-template ngbNavContent>\r\n                            <p>\r\n                                It’s essential for children to feel comfortable, emotionally and physically to learn effectively. Helping children to learn how to regulate and manage ir feelings is, refore, a vital stepping stone for success in learning and life. Children have an innate potential and our specialized life skills program takes m on a journey of exploration enhancing enduring leadership skills. \r\n                            </p>\r\n                        </ng-template>\r\n                    </li>\r\n                    <li ngbNavItem=\"5\" (click)=\"drowDownToggle()\">\r\n                        <a ngbNavLink>PHYSICAL DEVELOPMENT</a>\r\n                        <ng-template ngbNavContent>\r\n                            <p>\r\n                                Children meet a myriad of physical development milestones in  first few years of life, from walking to drawing, which focuses on increasing  skill and performance of  body.  development of a child’s physical skills is developed holistically across all areas of learning.\r\n                                SHS VIDYALAYA  recognises  benefits of instilling lifelong fitness habits in our students ensuring long term physical, cognitive and psychosocial health & development.  \r\n                            </p>\r\n                        </ng-template>\r\n                    </li>\r\n                </ul>\r\n\r\n                <div [ngbNavOutlet]=\"nav\" class=\"col-lg-8 col-md-8 col-sm-12 curriculum-info\"></div>\r\n         </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n<div class=\"clear-float\"></div>\r\n<section class=\"shsn-league\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 center\">\r\n                <h1 data-aos=\"fade-up\" data-aos-once=\"true\">SHS VIDYALAYA League</h1>\r\n            </div>\r\n        \r\n        <!-- <ngx-slick-carousel class=\"carousel\" #slickModal=\"slick-carousel\" [config]=\"slideConfig\">\r\n            <div ngxSlickItem *ngFor=\"let list of shsnLeague; index as i\" class=\"slide\">\r\n                <img src=\"assets/images/shsnleague{{i+1}}.jpg\" alt=\"\" width=\"100%\">\r\n                <h6>{{list.name}}</h6>\r\n                <p>{{list.post}}</p>\r\n                <p>{{list.desc}}</p>\r\n            </div>\r\n        </ngx-slick-carousel> -->\r\n             <div *ngFor=\"let list of shsnLeague; index as i\" class=\"col-lg-4 col-md-4 col-sm-12\">\r\n                <img src=\"assets/images/shsnleague{{i+1}}.jpg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                <h6 data-aos=\"fade-up\" data-aos-once=\"true\">{{list.name}}</h6>\r\n             </div>\r\n       \r\n    </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n<section class=\"testimonials\">\r\n    <img src=\"assets/images/7.jpg\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <h1  data-aos=\"fade-up\" data-aos-once=\"true\">Parents Speak</h1>\r\n                <ngb-carousel  #carousel interval=\"5000\" [showNavigationArrows]='true' [showNavigationIndicators]='false'\r\n                    [pauseOnHover]=\"pauseOnHover\" (slide)=\"onSlide($event)\">\r\n                    <ng-template ngbSlide *ngFor=\"let info of testimonials; index as i\">\r\n                        <p data-aos=\"fade-up\" data-aos-once=\"true\" >\r\n                            {{info.clientView_1}}\r\n                        </p>\r\n                        <p data-aos=\"fade-up\" data-aos-once=\"true\" >\r\n                            {{info.clientView_2}}\r\n                        </p>\r\n                        <p data-aos=\"fade-up\" data-aos-once=\"true\" >\r\n                            {{info.clientView_3}}\r\n                        </p>\r\n                        <p data-aos=\"fade-up\" data-aos-once=\"true\" >\r\n                            <span class=\"client-name\"> <b>{{info.clientName}}<br>\r\n                            {{info.desti}}</b></span>\r\n                        </p>\r\n                    </ng-template>\r\n                </ngb-carousel>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<div class=\"container partner\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 float-right\">\r\n                <h2 data-aos=\"fade-up\" data-aos-once=\"true\" >\r\n                    Our Partners\r\n                </h2>\r\n                    <p data-aos=\"fade-up\" data-aos-once=\"true\" >Our quest for creating  perfect learning environment led to collaborating with a few organisations whose vision aligned with ours. Each of  programs are well researched to cater to  needs of  millennials who require constant innovation. With combined ideologies and compassion, successful partnerships are created on a trajectory to deliver nothing but  best! </p>\r\n               \r\n            </div>\r\n\r\n            <ngx-slick-carousel class=\"carousel col-lg-12 col-md-12 col-sm-12\" #slickModal=\"slick-carousel\"\r\n                [config]=\"partnerConfig\">\r\n                <div ngxSlickItem *ngFor=\"let item of partner; index as i\" class=\"slide\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                    <div class=\"panel\">\r\n                       <div class=\"panel-heading\">\r\n                                <div class=\"img-box\">\r\n                                    <img src=\"assets/images/partner{{i+1}}.png\">\r\n                                </div>\r\n                                <p>{{item.description}}</p>\r\n                            </div>\r\n                        <div class=\"info-view\">\r\n                            <div class=\"panel-heading\">\r\n                                <div class=\"img-box\">\r\n                                    <img src=\"assets/images/partner{{i+1}}.png\">\r\n                                </div>\r\n                                <h5>{{item.description}}</h5>\r\n                                <p>{{item.description_2}}</p>\r\n                                <a href=\"{{item.link}}\" target=\"blank\">{{item.link}}</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </ngx-slick-carousel>\r\n        </div>\r\n    </div>\r\n \r\n<section class=\"newsletter\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <form class=\"form-inline\" action=\"/action_page.php\">\r\n                <label for=\"email\">Newsletter </label>\r\n                <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\" id=\"email\">\r\n                <button type=\"submit\" class=\"btn btn-primary\"> Subscribe</button>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shsedge/shsedge.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shsedge/shsedge.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShsedgeShsedgeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"section-study-culture\">\r\n    <div class=\"breadcum\">\r\n        <a>\r\n            <i class=\"icon icon-ex-small\">\r\n                <svg focusable=\"false\">\r\n                    <use xlink:href=\"#icon_home\"></use>\r\n                </svg>\r\n            </i>\r\n        </a>\r\n        <span> |</span>\r\n        <a>\r\n            SHS VIDYALAYA Edge\r\n        </a>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n            <h1 data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                <br>\r\n                shs Edge\r\n            </h1>\r\n            <div class=\"panel-body\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                <p> integrated curriculum at shs comprises & aligns with all  learning outcomes in CBSE, IGCSE\r\n                    & AERO standards.  curriculum includes reading, writing, listening, speaking, social studies,\r\n                    math, science, health, physical education, music, and visual arts, experiential learning, public\r\n                    speaking, emphasis on projects, etc. We at shs will utilize different approaches of integration\r\n                    best suited for  students:\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-6 col-sm-12\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n            <img src=\"assets/images/8.jpg\">\r\n        </div>\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n    <div class=\"row edge-info\">\r\n        <div class=\"col-lg-1 col-md-1 col-sm-12\"></div>\r\n        <div class=\"col-lg-11 col-md-11 col-sm-12 float-right\">\r\n            <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                <h3 class=\"heading-title\"><span>Multi-Disciplinary Integration</span></h3>\r\n                <p>\r\n                    To focus on reading, writing, and communication in all its forms, in language arts. This approach\r\n                    focuses on integration within one subject area, teaching  content with deeper understanding.\r\n                </p>\r\n            </div>\r\n            <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                <h3 class=\"heading-title\"><span>Inter-disciplinary integration</span></h3>\r\n                <p>\r\n                    Focuses on project-based learning in more than one subject area. Interdisciplinary integration\r\n                    assembles  teaching of several subjects around common issues, or problems, highlighting matic\r\n                    concepts in which a common me is studied.\r\n                </p>\r\n            </div>\r\n            <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                <h3 class=\"heading-title\"><span>Trans-disciplinary integration</span></h3>\r\n                <p>\r\n                    Involves understanding  student’s interests, and concerns while encouraging m to ask questions\r\n                    to inquire about  subject matter from a variety of perspectives. Interdisciplinary integration\r\n                    incorporates information, involving students’ interests and questions\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"clearfix\"></div>\r\n    <div class=\"row edge-info\">\r\n        <div class=\"col-lg-1 col-md-1 col-sm-12\"></div>\r\n        <div class=\"col-lg-11 col-md-11 col-sm-12 float-right\">\r\n            \r\n            <h1 class=\"plan-title\" data-aos=\"fade-up\" data-aos-once=\"true\"><span>Key Areas of Learning</span></h1>\r\n    </div>\r\n       \r\n        <div class=\"col-lg-1 col-md-1 col-sm-12\"></div>\r\n        <div class=\"col-lg-11 col-md-11 col-sm-12 float-right\">\r\n           \r\n            <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                <h3 class=\"heading-title\"><span>Communication and Language</span></h3>\r\n                <p>\r\n                   Communication and language development is about different ways\r\n                a child understands and communicates, using words, gestures or facial expressions. Being an\r\n                indicator of fine motor skill development and a reflection of cognitive development, reading\r\n                is one of  best ways to encourage communication and language development.</p>\r\n            </div>\r\n            <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                <h3 class=\"heading-title\"><span>Personal, Social and Emotional Development</span></h3>\r\n                <p>\r\n                    It’s essential for children to feel\r\n                comfortable, emotionally and physically to learn effectively. Helping children to learn how\r\n                to regulate and manage ir feelings is, refore, a vital stepping stone for success in\r\n                learning and life.\r\n                </p>\r\n            </div>\r\n            <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                <h3 class=\"heading-title\"><span>Physical Development</span></h3>\r\n                <p>\r\n                    Children meet a myriad of physical development milestones in \r\n                first few years of life, from walking to drawing. Physical development focuses on increasing\r\n                 skill and performance of  body.  development of children’s physical skills should\r\n                be developed holistically across all areas of learning.\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n<section class=\"section-explicit\">\r\n\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            \r\n            <h1 class=\"plan-title\" data-aos=\"fade-up\" data-aos-once=\"true\"><span>Explicit Areas of Learning</span></h1>\r\n    </div>\r\n     <ngx-slick-carousel class=\"row explicit-sec nav-tabs\" ngbNav #nav=\"ngbNav\" [(activeId)]=\"active\"\r\n     #slickModal=\"slick-carousel\" [config]=\"explicitConfig\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n              <li ngxSlickItem class=\"add-info\" ngbNavItem=\"{{i+1}}\"  *ngFor=\"let list of explicit; index as i\">\r\n                  <a ngbNavLink class=\"panel\">\r\n                      <div class=\"panel-heading\">\r\n                          <h1>{{list.bar}}</h1>\r\n                          <i class=\"icon icon-medium\">\r\n                            <svg focusable=\"false\">\r\n                                <use attr.xlink:href=\"{{list.icon}}\"></use>\r\n                            </svg>\r\n                        </i>\r\n                              <h6 class=\"bar _{{list.bar}}\">\r\n                                  {{list.title}}\r\n                              </h6>\r\n                            </div>\r\n                           \r\n                        </a>\r\n                     <ng-template ngbNavContent>\r\n                       {{list.description}}\r\n                    </ng-template>\r\n                </li>\r\n        </ngx-slick-carousel>   \r\n\r\n            <div [ngbNavOutlet]=\"nav\" class=\"tab-info\"></div>\r\n </div> \r\n  </section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shsstory/shsstory.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shsstory/shsstory.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShsstoryShsstoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"section-study-culture\">\r\n    <div class=\"breadcum\">\r\n        <a>\r\n            <i class=\"icon icon-ex-small\">\r\n                <svg focusable=\"false\">\r\n                    <use xlink:href=\"#icon_home\"></use>\r\n                </svg>\r\n            </i>\r\n        </a>\r\n        <span> |</span>\r\n        <a>\r\n            \r\n            shs Story\r\n        </a>\r\n    </div>\r\n\r\n    <div class=\"row-f\">\r\n        <h1>\r\n            <br>\r\n            shs Story\r\n        </h1>\r\n        <div class=\"col-lg-11 col-md-11 col-sm-12 story sub-header\">\r\n            <div class=\"panel\">\r\n                <h2 data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                    Who we are\r\n                </h2>\r\n                <div class=\"panel-body\">\r\n                <p data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                    <div class=\"img-flag d-sm-block d-md-none\" >\r\n                        <img src=\"assets/images/5.jpg\">\r\n                    </div>\r\n                    We are a group of committed individuals who believe that “What sculpture is to a block of marble, education is to  human soul.” Joseph Addison. \r\n                    <br><br>\r\n                    Our advisory board comprises diverse academicians who have a keen interest in providing a unique perspective to our collective vision. Individually y have contributed tremendously to  field of education, toger y bring ir unique capacities to our advisory board supporting continual improvement and sustainability.   \r\n                  </div>\r\n            </div>\r\n            <div class=\"row add-spec\">\r\n\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                    <p data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        We want to nurture a confident, compassionate student body that is ready to make a positive difference to  World. We affirm that every child deserves a childhood filled with love and positivism. That is  core belief, with which we will take care of each child, as this will contribute to making exemplary individuals. </p>\r\n                </div>\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                    <div class=\"row\">\r\n                    <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngFor=\"let item of story; index as i\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        <div class=\"panel\">\r\n                            <div class=\"panel-front\">\r\n                                <div class=\"panel-heading\">\r\n                                    <i class=\"icon icon-medium\">\r\n                                        <svg focusable=\"false\">\r\n                                            <use attr.xlink:href=\"{{item.icon}}\"></use>\r\n                                        </svg>\r\n                                    </i>\r\n                                     \r\n                                        <p>{{item.description}}</p>\r\n                                </div>\r\n                             </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            </div>\r\n            <div class=\"doodle\">\r\n                SHS VIDYALAYA Story\r\n            </div>\r\n        </div>\r\n        <div class=\"img-flag sub-header-image\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n            <img src=\"assets/images/5.jpg\">\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n\r\n    <div class=\"row\" >\r\n        <div class=\"col-lg-1 col-md-1 col-sm-12\"></div>\r\n        <div class=\"col-lg-11 col-md-11 col-sm-12\"> <h2 data-aos=\"fade-up\" data-aos-once=\"true\">\r\n             Quest\r\n        </h2></div>\r\n        <div class=\"col-lg-1 col-md-1 col-sm-12\"></div>\r\n\r\n        <div class=\"col-lg-11 col-md-11 col-sm-12\">\r\n        <div class=\"panel story-info\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n            <span class=\"flying-plane\">\r\n                <span>.........................................</span>\r\n            <i class=\"icon icon-small\">\r\n                <svg focusable=\"false\">\r\n                    <use xlink:href=\"#icon_plane\"></use>\r\n                </svg>\r\n            </i> \r\n        </span>\r\n            <p data-aos=\"fade-up\" data-aos-once=\"true\"> Just like any involved parent, our Director, Sinduri Reddy, began a quest to find a school that would nurture her growing preschoolers in  best way possible.  \r\n                <br><br>\r\n                After putting toger  best of schools and undergoing immense research, re were still certain factors like cleanliness, Ethos, Curriculum Focus, distance, etc. that made it impossible for her to choose.  \r\n                <br><br>\r\n                So, like a popular thought,” when you can’t find someone to do exactly what you, get up and do it yourself!” That’s exactly what she did!  \r\n                <br><br>\r\n                Her endeavours have snowballed into SHS VIDYALAYA . \r\n                </p>\r\n               \r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/studyculture/studyculture.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/studyculture/studyculture.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudycultureStudycultureComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"section-study-culture\">\r\n    <div class=\"breadcum\">\r\n        <a>\r\n            <i class=\"icon icon-ex-small\">\r\n                <svg focusable=\"false\">\r\n                    <use xlink:href=\"#icon_home\"></use>\r\n                </svg>\r\n            </i>\r\n        </a>\r\n        <span> |</span>\r\n        <a>\r\n            SHS VIDYALAYA Culture\r\n        </a>\r\n    </div>\r\n    <!-- <div class=\"row-f sub-header\">\r\n       \r\n        <div class=\"col-lg-8 col-md-8 col-sm-12\">\r\n            <h1>\r\n                <br>\r\n                Study Culture\r\n            </h1>\r\n\r\n\r\n            <div class=\"panel\">\r\n                <h2>\r\n                    Our Vision\r\n                </h2>\r\n                <p>Our vision is to raise, our ‘shs Pride’ to live ir dreams as a<br> generation who are:</p>\r\n                <ul class=\"list\">\r\n                    <li *ngFor=\"let data of vision\">\r\n                        {{data.info}}\r\n                    </li>\r\n                </ul>\r\n        \r\n        <div class=\"doodle\">\r\n            SHS VIDYALAYAn Story\r\n        </div></div>\r\n        </div>\r\n        <div class=\"img-flag\">\r\n            <img src=\"assets/images/3.jpg\">\r\n        </div>\r\n        \r\n    </div> -->\r\n\r\n    <!-- <div class=\"row-f our-mission\"> \r\n        \r\n       \r\n        <div class=\"col-lg-11 col-md-11 col-sm-12 panel\">\r\n        \r\n            <div class=\"panel-body\">\r\n                <h2>\r\n                    Our Mission\r\n                </h2>\r\n                <p>Our students will be equipped to meet  current<br>\r\n                    and future challenges with values of</p>\r\n                <ul class=\"list\">\r\n                    <li *ngFor=\"let data of mission\">\r\n                        {{data.info}}\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div class=\"img-flag\">\r\n            <img src=\"assets/images/4.jpg\">\r\n        </div>\r\n    </div> -->\r\n\r\n\r\n    <div class=\"row-f\">\r\n        <h1>\r\n            <br>\r\n            shs Culture\r\n        </h1>\r\n\r\n\r\n        <div class=\"col-lg-8 col-md-8 col-sm-12 sub-header\">\r\n           \r\n            <div class=\"panel\">\r\n                <div class=\"panel-body\">\r\n                    <h2 data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        Our Belief\r\n                    </h2>\r\n                    <p data-aos=\"fade-up\" data-aos-once=\"true\">SHS VIDYALAYA  was founded on  belief that every child has  potential to make  world\r\n                        a beautiful place. Every child <br>is unique and capable of learning when instructed properly.\r\n                        shs  believes  development of se primary areas -</p>\r\n                    <ul class=\"list\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        <li *ngFor=\"let data of belief\">\r\n                            {{data.info}}\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <!-- <div class=\"doodle\">\r\n                    SHS VIDYALAYAn Story\r\n                </div> -->\r\n            </div>\r\n        </div>\r\n        <div class=\"img-flag\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n            <img src=\"assets/images/3.jpg\">\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"clearfix\"></div>\r\n\r\n    <!-- <div class=\"row\">\r\n        <div class=\"col-lg-1 col-md-1 col-sm-12\"></div>\r\n        <div class=\"col-lg-11 col-md-11 col-sm-12 our-belief\">\r\n            <h2>\r\n                Our Belief\r\n            </h2>\r\n            <div class=\"panel\">\r\n              <p>SHS VIDYALAYA  was founded on  belief that every child has  potential to make  world a beautiful place. Every child <br>is unique and capable of learning when instructed properly. shs  believes  development of se primary areas - \r\n            </p>\r\n                <ul class=\"list row\">\r\n                    <li *ngFor=\"let data of belief\" class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                        {{data.info}}\r\n                    </li>\r\n                </ul>\r\n        </div>\r\n        </div>\r\n     \r\n    </div> -->\r\n\r\n\r\n    <div class=\"row curriculum\">\r\n        <div class=\"col-lg-1 col-md-1 col-sm-12\"></div>\r\n        <div class=\"col-lg-11 col-md-11 col-sm-12\">\r\n            <h2 data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                Our Curriculum\r\n            </h2>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-lg-1 col-md-1 col-sm-12\"></div>\r\n        <div class=\"col-lg-11 col-md-11 col-sm-12 curriculum-1\">\r\n\r\n            <p data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                <img class=\"image-wrap\"  align=\"right\" src=\"assets/images/14.jpg\">\r\n                An integrated curriculum extends a framework with significant and expressive learning including\r\n                assessments and evaluation to meet  standards and benchmarks of  boards whose learning objectives\r\n                are  guide. Learning through integration stimulates  development of creativity, critical thinking\r\n                and problem-solving. Integration also develops Communication and collaboration within students. Also,\r\n                digital literacy, social and cultural skills, prove to be beneficial, providing students with\r\n                opportunities to acquire enduring skills for life.  attributes of an integrated curriculum include\r\n                experiences to develop children’s attitudes, skills, and knowledge exposing m to a range of\r\n                activities to develop and sustain in  ever-changing and challenging world. Integrated teaching and\r\n                learning processes facilitate continued successful learning and re are multiple benefits of an\r\n                integrated curriculum. \r\n\r\n\r\n                At SHS VIDYALAYA  we believe that education is not memorizing  facts but training  mind to\r\n                think creatively and critically! APPLICATION- LEARN HOW TO LEARN-\r\n\r\n                Students creating meaningful lifelong experiences!\r\n\r\n                 shs  provides a resourceful environment of learning including technology in order to meet and\r\n                master  challenges of a changing world.\r\n\r\n                 Within  integrated and literacy-based curriculum, students will make connections between all\r\n                subjects, evaluating ir work for improvement while utilizing  relevant resources that allow ample\r\n                individualization and choice in learning at SHS VIDYALAYA .\r\n\r\n                  integrated curriculum helps students develop skills and understandings across mamatics, science\r\n                and social studies needed to meet  demands of high school while continuing to inspire a thirst for\r\n                learning.  literacy-based program with  world class Scholastic’s Levelled Book Room provides an\r\n                academic framework that encourages students to embrace and understand  connections between\r\n                traditional subjects and  real world, and to become critical and reflective thinkers.\r\n\r\n                 \r\n\r\n                 Students at SHS VIDYALAYA  learn to work toger to become leaders and learners within \r\n                classroom and will be ready to face tomorrow’s challenges!\r\n\r\n                 \r\n\r\n                Our goal is to make sure that  students are  best readers, mamaticians, scientists and\r\n                historians that y can be!!\r\n               \r\n            </p>\r\n\r\n        </div>\r\n        <!-- <div class=\"col-lg-6 col-md-6 col-sm-12 curriculum-1\">\r\n            <div class=\"img-flag\">\r\n                <img src=\"assets/images/14.jpg\">\r\n            </div>\r\n        </div> -->\r\n\r\n    </div>\r\n\r\n    <div class=\"clearfix\"></div>\r\n    <div class=\"row edge-info\">\r\n        <div class=\"col-lg-1 col-md-1 col-sm-12\"></div>\r\n        <div class=\"col-lg-11 col-md-11 col-sm-12 float-right\">\r\n            <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                <h3 class=\"heading-title\"><span>Best possible start to learning</span></h3>\r\n                <p>\r\n                    Our caring, experienced teachers and teacher assistants give our youngest students  best possible start to learning. Our play-based learning environment captures ir natural curiosity and sense of wonder. Our core subjects are complemented by all core subject classes, including Physical Education, Visual & Performing Arts and Music are all delivered in a warm, nurturing environment.\r\n                </p>\r\n            </div>\r\n            <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                <h3 class=\"heading-title\"><span>A positive foundation for learning </span></h3>\r\n                <p>\r\n                    At SHS VIDYALAYA  children are introduced to a love of play and learning, by creating opportunities to explore, experiment, solve problems and express mselves as individuals. Sustained learning and  ability to apply concepts facilitates self-confidence and motivation. A deeper understanding of science and math concepts, improved reading and writing skills, fostering positive attitudes and personal growth, critical thinking skills and improved quality of work, will result in remarkable academic success.\r\n                </p>\r\n            </div>\r\n            <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                <h3 class=\"heading-title\"><span>Personal development for life</span></h3>\r\n                <p>\r\n                    Along with a positive start to learning, our teachers place an emphasis on oral language development and nurturing social relationships. Our teachers know a structured foundation is important for young children, to help m develop and grow into confident individuals. An exceptional learning space is provided for our young students, with high-quality trained staff who care and guide  young children.   A focus on  building blocks of education – literacy and numeracy- every advantage as  students’ progress through ir education. integrated curriculum helps students develop skills and understandings needed to meet  demands of high school while continuing to inspire a thirst for learning.  literacy-based program with  world class Scholastic’s Levelled Book Room provides an academic framework that encourages students to embrace and understand  connections between traditional subjects and  real world, and to become critical and reflective thinkers.\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"more-info\">\r\n\r\n        <div class=\"col-lg-11 col-md-11 col-sm-12 float-right\">\r\n            <h2 data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                Our Approach\r\n            </h2>\r\n            <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                <p>Creating better opportunities for teacher-student planning and cooperative evaluation which leads to enhanced creative teaching and learning. Our process of learning and teaching comes from a fusion of knowledge with various activities, resources; and experiencing real-life situations for a solution-based approach. It also instils problem-solving, critical thinking and collaboration in and beyond  classroom. We take a Student Centric approach with flexibility, innovation and or core values for essential life experiences.\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n    </div>\r\n\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/team/team.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/team/team.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTeamTeamComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"section-inner-subheader\">\r\n    <div class=\"breadcum\">\r\n        <a>\r\n            <i class=\"icon icon-ex-small\">\r\n                <svg focusable=\"false\">\r\n                    <use xlink:href=\"#icon_home\"></use>\r\n                </svg>\r\n            </i>\r\n        </a>\r\n        <span> |</span>\r\n        <a>\r\n            SHS VIDYALAYA League\r\n        </a>\r\n    </div>\r\n\r\n\r\n    <div class=\"row -team-info\">\r\n        \r\n        <div class=\"col col-lg-8 col-md-8 col-sm-12\">\r\n            <h1 data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                 FOUNDING TEAM\r\n            </h1>\r\n            <div class=\"panel blue-bg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                <div class=\"img-flag d-sm-block d-md-none\">\r\n                    <img src=\"assets/images/shsnleague4.jpg\">\r\n                </div>\r\n\r\n                <div class=\"panel-body\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                    <h2 data-aos=\"fade-up\" data-aos-once=\"true\">Mr. Nallary\r\n                        Pradeep Reddy\r\n                    </h2>\r\n                    <p data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        Widely recognized as one of  pioneers of  Information Technology revolution in India, Mr Reddy is  MD of  Interbiz and Infosun Group of Companies. He holds a bachelors in Electronics from IIT, Madras & a Masters in Computer Science from Penn State. He is a visionary and has been a guiding force to SHS VIDYALAYA Team.</p>\r\n\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"col col-lg-3 col-md-3 col-sm-12 avtar\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n            <div class=\"panel img-info\">\r\n                <div class=\"panel-body\">\r\n                    <div class=\"img-flag\">\r\n                        <img src=\"assets/images/shsnleague4.jpg\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n    <div class=\"row -team-info\">\r\n        <div class=\"col col-lg-3 col-md-3 col-sm-12 avtar\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n            <div class=\"panel img-info\">\r\n                <div class=\"panel-body\">\r\n                    <div class=\"img-flag\">\r\n                        <img src=\"assets/images/shsnleague5.jpg\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col col-lg-8 col-md-8 col-sm-12 team-info\">\r\n\r\n            <div class=\"panel red-bg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                <div class=\"img-flag d-sm-block d-md-none\">\r\n                    <img src=\"assets/images/shsnleague5.jpg\">\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <h2 data-aos=\"fade-up\" data-aos-once=\"true\">Ms Sinduri Reddy\r\n                    </h2>\r\n                    <p data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        With a keen interest in education, Ms Sinduri Reddy spearheads SHS VIDYALAYA  as  Founder and Managing Director. Her focus is to help students and teachers, both, to adapt to  ever changing world of  21st Century. She is shs’s strongest pillar!\r\n                    </p>\r\n\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n\r\n    <div class=\"row -team-info\">\r\n        <div class=\"col col-lg-8 col-md-8 col-sm-12 team-info\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n\r\n            <div class=\"panel black-bg\">\r\n                <div class=\"img-flag d-sm-block d-md-none\">\r\n                    <img src=\"assets/images/shsnleague6.jpg\">\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <h2 data-aos=\"fade-up\" data-aos-once=\"true\">Mr Varun Reddy\r\n                    </h2>\r\n                    <p data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        A director at  Interbiz and Infosun Group of Companies, he ensures that over 3 Lakh employees spread across 800 clients have access to state-of--art Human Resource Automation Applications. He is  CEO and Co-founder of shs .\r\n                    </p>\r\n\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"col col-lg-3 col-md-3 col-sm-12 avtar\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n            <div class=\"panel img-info\">\r\n                <div class=\"panel-body\">\r\n                    <div class=\"img-flag\">\r\n                        <img src=\"assets/images/shsnleague6.jpg\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n    <div class=\"row -team-info\">\r\n        <div class=\"col col-lg-3 col-md-3 col-sm-12 avtar\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n            <div class=\"panel img-info\">\r\n                <div class=\"panel-body\">\r\n                    <div class=\"img-flag\">\r\n                        <img src=\"assets/images/shsnleague7.jpg\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col col-lg-8 col-md-8 col-sm-12 team-info\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n\r\n            <div class=\"panel blue-bg\">\r\n                <div class=\"img-flag d-sm-block d-md-none\">\r\n                    <img src=\"assets/images/shsnleague7.jpg\">\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <h2 data-aos=\"fade-up\" data-aos-once=\"true\">Mr Subramanayam\r\n                        Kanti\r\n                    </h2>\r\n                    <p data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        He is a business management professional with an experience of over 25 years. Mr Kanti has been instrumental in setting up and managing schools across  country. He is  Co-Founder and COO at shs. </p>\r\n\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n\r\n    <div class=\"row -team-info\">\r\n        <div class=\"col col-lg-8 col-md-8 col-sm-12 team-info\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n\r\n            <div class=\"panel red-bg\">\r\n                <div class=\"img-flag d-sm-block d-md-none\">\r\n                    <img src=\"assets/images/shsnleague8.jpg\">\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <h2 data-aos=\"fade-up\" data-aos-once=\"true\">Ms Arti Mandhania\r\n                    </h2>\r\n                    <p data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        She has an experience of 13 years and currently is  Business Head. A double post graduate in child psychology and business management, when not with kids, she is found with a book or a painting.\r\n                    </p>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"col col-lg-3 col-md-3 col-sm-12 avtar\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n            <div class=\"panel img-info\">\r\n                <div class=\"panel-body\">\r\n                    <div class=\"img-flag\">\r\n                        <img src=\"assets/images/shsnleague8.jpg\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n\r\n    <div class=\"row -team-info\">\r\n        <div class=\"col-sm-12\">\r\n            <h1 data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                 ACADEMIC TEAM\r\n            </h1>\r\n        </div>\r\n\r\n        <div class=\"col col-lg-3 col-md-3 col-sm-12 avtar\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n            <div class=\"panel img-info\">\r\n                <div class=\"panel-body\">\r\n                    <div class=\"img-flag\">\r\n                        <img src=\"assets/images/shsnleague1.jpg\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col col-lg-8 col-md-8 col-sm-12 team-info\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n\r\n            <div class=\"panel black-bg\">\r\n                <div class=\"img-flag d-sm-block d-md-none\">\r\n                    <img src=\"assets/images/shsnleague1.jpg\">\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <h2 data-aos=\"fade-up\" data-aos-once=\"true\">Ms Malini Paul\r\n                    </h2>\r\n                    <p data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        Her elegant personna often reflects in her role as  Founding Headmistress at shs. With an experience of more than 30 years, she is an expert at Pre-School and Primary education.\r\n                    </p>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n\r\n    <div class=\"row -team-info\">\r\n\r\n    <div class=\"col col-lg-8 col-md-8 col-sm-12 team-info\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n\r\n            <div class=\"panel blue-bg\">\r\n                <div class=\"img-flag d-sm-block d-md-none\">\r\n                    <img src=\"assets/images/shsnleague2.jpg\">\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <h2 data-aos=\"fade-up\" data-aos-once=\"true\">MS Rubina Majid\r\n                    </h2>\r\n                    <p data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                         Curriculum Developer and Master Trainer of shs , Mr Rubina has worked extensively with schools in India and abroad. At present, besides working with SHS VIDYALAYA , Rubina is a consultant with Scholastic India and TCS iON for ir educational verticals as well as running  Learning Resource Center, a think tank set up to accelerate and support positive change in our education system.\r\n                    </p>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"col col-lg-3 col-md-3 col-sm-12 avtar\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n            <div class=\"panel img-info\">\r\n                <div class=\"panel-body\">\r\n                    <div class=\"img-flag\">\r\n                        <img src=\"assets/images/shsnleague2.jpg\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n\r\n    <div class=\"row -team-info\">\r\n\r\n        <div class=\"col col-lg-3 col-md-3 col-sm-12 avtar\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n            <div class=\"panel img-info\">\r\n                <div class=\"panel-body\">\r\n                    <div class=\"img-flag\">\r\n                        <img src=\"assets/images/shsnleague3.jpg\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col col-lg-8 col-md-8 col-sm-12 team-info\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n    \r\n                <div class=\"panel red-bg\">\r\n                    <div class=\"img-flag d-sm-block d-md-none\">\r\n                        <img src=\"assets/images/shsnleague3.jpg\">\r\n                    </div>\r\n                    <div class=\"panel-body\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        <h2 data-aos=\"fade-up\" data-aos-once=\"true\">Ms Trupti Rao\r\n                        </h2>\r\n                        <p data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                            Her core belief is to impart quality education for all students based on ir social, emotional or physical aspects. As  Principal of shs , Ms Trupti Rao is a dedicated, resourceful educationist with proven ability to create and monitor policies that promote a happy and a safe learning environment.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n    \r\n            </div>\r\n    \r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n\r\n\r\n        <div class=\"row -team-info\">\r\n\r\n            <div class=\"col-sm-12\">\r\n                <h1 data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                     ADVISORY BOARD\r\n                </h1>\r\n            </div>\r\n\r\n            <div class=\"col col-lg-8 col-md-8 col-sm-12 team-info\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n        \r\n                    <div class=\"panel black-bg\">\r\n                        <div class=\"img-flag d-sm-block d-md-none\">\r\n                            <img src=\"assets/images/shsnleague9.jpg\">\r\n                        </div>\r\n                        <div class=\"panel-body\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                            <h2>Ms Lalitha Naidu\r\n                            </h2>\r\n                            <p>\r\n                                An academician carrying values of purpose, passion and pedagogy, Ms Naidu presently heads  Meridian School, Madhapur. She is  Founder Principal of Shadan Group of Modern Schools. \r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n        \r\n                </div>\r\n        \r\n                <div class=\"col col-lg-3 col-md-3 col-sm-12 avtar\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                    <div class=\"panel img-info\">\r\n                        <div class=\"panel-body\">\r\n                            <div class=\"img-flag\">\r\n                                <img src=\"assets/images/shsnleague9.jpg\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n        \r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n\r\n            <div class=\"row -team-info\">\r\n\r\n                <div class=\"col col-lg-3 col-md-3 col-sm-12 avtar\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                    <div class=\"panel img-info\">\r\n                        <div class=\"panel-body\">\r\n                            <div class=\"img-flag\">\r\n                                <img src=\"assets/images/shsnleague10.jpg\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col col-lg-8 col-md-8 col-sm-12 team-info\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n            \r\n                        <div class=\"panel blue-bg\">\r\n                            <div class=\"img-flag d-sm-block d-md-none\">\r\n                                <img src=\"assets/images/shsnleague10.jpg\">\r\n                            </div>\r\n                            <div class=\"panel-body\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                                <h2>Dr Shivranjani Santosh\r\n                                </h2>\r\n                                <p>\r\n                                    She is  recipient of TOI’s Rising Star Award. Her YouTube channel empowers people on  importance of first aid. Dr Shivranjani is passionate about parent education and preventive paediatrics.\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n            \r\n                    </div>\r\n                </div>\r\n                <div class=\"clearfix\"></div>\r\n\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/admissions/admissions.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/admissions/admissions.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdmissionsAdmissionsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".section-admission .row-f, .section-admission .row {\n  margin: 70px 0 100px;\n  position: relative;\n}\n.section-admission .admission-info {\n  background: #fff;\n}\n.section-admission .add-spec {\n  margin-left: 35px;\n  margin-bottom: 35px;\n}\n.section-admission .add-spec .row {\n  margin: 0px;\n}\n.section-admission .add-spec .panel {\n  padding: 0;\n  margin: 0 auto;\n  display: block;\n  text-align: center;\n}\n.section-admission .add-spec .panel p {\n  margin-top: 25px;\n}\n.section-admission .curriculum {\n  margin-bottom: 0px;\n}\n.section-admission .panel {\n  background: #fff;\n  padding: 50px;\n  padding-bottom: 0px;\n}\n.section-admission .panel .image-wrap {\n  width: 50%;\n  margin: -120px 0 26px 50px;\n}\n.section-admission .panel.story-info {\n  background: #bf272d;\n  color: #fff;\n  position: relative;\n}\n.section-admission .panel.story-info .flying-plane {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n.section-admission .panel.story-info .flying-plane svg {\n  fill: #fff;\n  transform: rotate(90deg);\n  margin-top: 5px;\n}\n.section-admission .panel.story-info::after {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  top: 50px;\n  width: 3px;\n  height: 20px;\n  background: #fff;\n}\n.section-admission h1 {\n  margin-left: 65px;\n  margin-bottom: 35px;\n}\n.section-admission h2 {\n  position: relative;\n  padding-bottom: 5px;\n  line-height: 60px;\n  margin-bottom: 30px;\n}\n.section-admission h2::before {\n  content: \" \";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 50px;\n  height: 2px;\n  background: #f0f0f0;\n}\n.section-admission .img-flag {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 40%;\n}\n.section-admission ul.list {\n  margin: 0px;\n}\n.section-admission ul.list li {\n  color: #000;\n}\n.section-admission ul.list li::before {\n  background: #bf272d;\n}\n.more-info {\n  float: none;\n  clear: both;\n}\n.more-info p {\n  margin: 50px 0 70px 75px;\n}\n.applycation-rules .btn {\n  width: 75%;\n  padding: 15px 0;\n  background: #bf272d;\n  font-family: \"Lora\", serif;\n  margin: 25px auto 0;\n  font-size: 24px;\n  display: block;\n}\n.section-admission-2 {\n  margin: 70px 0px;\n}\n.section-admission-2 .row {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.section-admission-2 .bar {\n  position: relative;\n  padding-top: 15px;\n}\n.section-admission-2 .bar::after {\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100px;\n  height: 5px;\n}\n.section-admission-2 .pp0::after {\n  background: #3e65ac;\n}\n.section-admission-2 .pp1::after {\n  background: #bf272d;\n}\n.section-admission-2 .pp2::after {\n  background: #000000;\n}\n.section-admission-2 .pp3::after {\n  background: #e4e4e4;\n}\n.section-admission-2 .addmin-sec {\n  padding: 0px;\n}\n.section-admission-2 .addmin-sec .row {\n  margin-left: 0px;\n}\n.section-admission-2 .addmin-sec .add-info {\n  padding: 2px;\n  display: flex;\n}\n.section-admission-2 .addmin-sec .add-info:first-child .panel {\n  margin-left: 0px;\n}\n.section-admission-2 .admission-flag {\n  position: relative;\n  color: #fff;\n  padding: 25px 0;\n  height: 250px;\n}\n.section-admission-2 .admission-flag .btn {\n  border: 1px solid #fff;\n  color: #fff;\n  background: none;\n}\n.section-admission-2 p {\n  white-space: pre;\n  margin-top: 15px;\n}\n.section-admission-2 .panel {\n  background: url('bulb.png') no-repeat 40px -10px #fff;\n  padding-top: 270px;\n  padding-bottom: 50px;\n  width: 100%;\n}\n.section-admission-2 .panel .panel-heading {\n  z-index: 2;\n  position: relative;\n}\n.section-admission-2 .panel .btn {\n  position: absolute;\n  bottom: 15px;\n  border: 2px solid #000;\n  background: none;\n  color: #000;\n  z-index: 2;\n}\n.section-admission-2 .panel:hover .btn {\n  border: 2px solid #fff;\n  background: none;\n  color: #fff;\n}\n.section-admission-2 .panel:hover .panel-heading .bar::after {\n  background: #fff !important;\n}\n.section-admission-2 .panel:hover .panel-heading h3, .section-admission-2 .panel:hover .panel-heading p {\n  color: #fff;\n}\n.section-admission-2 .panel:hover::after {\n  content: \"\";\n  background: url('bulb.jpg') no-repeat -65px -50px #bf272d;\n  position: absolute;\n  top: -25px;\n  left: 0px;\n  width: 100%;\n  height: calc(100% + 50px);\n  padding: 325px 20px 0;\n  z-index: 1;\n  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.5);\n}\n.section-admission-2 .panel i {\n  margin: 0 auto;\n  display: block;\n  text-align: center;\n}\n.section-admission-2 .panel svg {\n  width: 75px;\n  height: 75px;\n}\n@media (max-width: 576px) {\n  .section-study-culture .row-f, .section-study-culture .row, .section-study-culture h1 {\n    margin-left: 0px;\n  }\n  .section-study-culture .breadcum {\n    margin-left: 15px;\n  }\n  .section-study-culture .panel-body {\n    width: 100%;\n  }\n\n  .section-admission .panel {\n    padding: 40px 0;\n  }\n  .section-admission .panel .image-wrap {\n    width: 100% !important;\n    margin: 0px !important;\n  }\n  .section-admission .section-admission-2 .addmin-sec .add-info {\n    margin-bottom: 50px;\n  }\n  .section-admission .section-admission-2 .panel {\n    padding: 270px 50px 50px !important;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaXNzaW9ucy9EOlxcc2hzL3NyY1xcYXBwXFxhZG1pc3Npb25zXFxhZG1pc3Npb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pc3Npb25zL2FkbWlzc2lvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUM7RUFDQyxvQkFBQTtFQUNBLGtCQUFBO0FDREY7QURHSTtFQUNJLGdCQUFBO0FDRFI7QURHSTtFQUNGLGlCQUFBO0VBQ0EsbUJBQUE7QUNERjtBREVRO0VBQ0ksV0FBQTtBQ0FaO0FERUs7RUFDTyxVQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0FaO0FEQ1k7RUFDSSxnQkFBQTtBQ0NoQjtBREdDO0VBQ0Msa0JBQUE7QUNERjtBREdDO0VBQ0MsZ0JBQUE7RUFDTSxhQUFBO0VBQ0EsbUJBQUE7QUNEUjtBREVFO0VBQ0MsVUFBQTtFQUNDLDBCQUFBO0FDQUo7QURFRTtFQUNDLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQUg7QURDRztFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNDSjtBREFJO0VBQ0MsVUFBQTtFQUNBLHdCQUFBO0VBQ0csZUFBQTtBQ0VSO0FEQ0c7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRElDO0VBQ0MsaUJBQUE7RUFDQSxtQkFBQTtBQ0ZGO0FESUM7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0ZGO0FER0U7RUFDQyxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNESDtBRElDO0VBQ0Msa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNGRjtBRElDO0VBQ0MsV0FBQTtBQ0ZGO0FER0U7RUFDQyxXQUFBO0FDREg7QURFRztFQUNDLG1CQUFBO0FDQUo7QURNQTtFQUNDLFdBQUE7RUFDQSxXQUFBO0FDSEQ7QURJQztFQUNDLHdCQUFBO0FDRkY7QURPSTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNKUjtBRFFBO0VBQ0MsZ0JBQUE7QUNMRDtBRE1DO0VBQ0MsYUFBQTtFQUNBLGdCQUFBO0FDSkY7QURPQztFQUNDLGtCQUFBO0VBQ0EsaUJBQUE7QUNMRjtBRE1FO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0pIO0FEU0U7RUFDQSxtQkFBQTtBQ1BGO0FEU007RUFDSixtQkFBQTtBQ1BGO0FEU007RUFDSixtQkFBQTtBQ1BGO0FEU007RUFDSixtQkFBQTtBQ1BGO0FEVUM7RUFDQyxZQUFBO0FDUkY7QURTRTtFQUNDLGdCQUFBO0FDUEg7QURTRTtFQUNDLFlBQUE7RUFDQSxhQUFBO0FDUEg7QURTSTtFQUNDLGdCQUFBO0FDUEw7QURZQztFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDVkY7QURXRTtFQUNDLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDVEg7QURZQztFQUNDLGdCQUFBO0VBQ0EsZ0JBQUE7QUNWRjtBRFlFO0VBQ0MscURBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQ1ZIO0FEV0c7RUFDQyxVQUFBO0VBQ0Esa0JBQUE7QUNUSjtBRFdHO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDVEo7QURhSTtFQUNDLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDWEw7QURtQk07RUFDQywyQkFBQTtBQ2pCUDtBRG9CSztFQUNDLFdBQUE7QUNsQk47QURzQkk7RUFDQyxXQUFBO0VBQ0EseURBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsK0NBQUE7QUNwQkw7QUR3Qkc7RUFDQyxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDdEJKO0FEd0JHO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUN0Qko7QUQ4QkE7RUFJRTtJQUNDLGdCQUFBO0VDOUJEO0VEZ0NEO0lBQ0MsaUJBQUE7RUM5QkE7RURpQ0Q7SUFDQyxXQUFBO0VDL0JBOztFRHFDRDtJQUNDLGVBQUE7RUNsQ0E7RURtQ0E7SUFDQyxzQkFBQTtJQUNBLHNCQUFBO0VDakNEO0VEc0NDO0lBQ0MsbUJBQUE7RUNwQ0Y7RUR1Q0E7SUFDQyxtQ0FBQTtJQUNBLFdBQUE7RUNyQ0Q7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FkbWlzc2lvbnMvYWRtaXNzaW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLWFkbWlzc2lvbntcclxuICBcclxuXHQucm93LWYsIC5yb3d7XHJcblx0XHRtYXJnaW46NzBweCAwIDEwMHB4OyBcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC5hZG1pc3Npb24taW5mb3tcclxuICAgICAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICB9XHJcbiAgICAuYWRkLXNwZWN7XHJcblx0XHRtYXJnaW4tbGVmdDozNXB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTozNXB4O1xyXG4gICAgICAgIC5yb3d7XHJcbiAgICAgICAgICAgIG1hcmdpbjowcHg7XHJcbiAgICAgICAgfVxyXG4gICAgIC5wYW5lbHtcclxuICAgICAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0byA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblx0LmN1cnJpY3VsdW17XHJcblx0XHRtYXJnaW4tYm90dG9tOjBweDtcclxuXHR9XHJcblx0LnBhbmVsIHtcclxuXHRcdGJhY2tncm91bmQ6I2ZmZjtcclxuICAgICAgICBwYWRkaW5nOjUwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206MHB4O1xyXG5cdFx0LmltYWdlLXdyYXB7XHJcblx0XHRcdHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IC0xMjBweCAwIDI2cHggNTBweDtcclxuXHRcdH1cclxuXHRcdCYuc3RvcnktaW5mb3tcclxuXHRcdFx0YmFja2dyb3VuZDojYmYyNzJkO1xyXG5cdFx0XHRjb2xvcjojZmZmO1xyXG5cdFx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdFx0LmZseWluZy1wbGFuZXtcclxuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0bGVmdDowcHg7XHJcblx0XHRcdFx0dG9wOjBweDtcclxuXHRcdFx0XHRzdmd7XHJcblx0XHRcdFx0XHRmaWxsOiAjZmZmO1xyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgXHRcdFx0XHRtYXJnaW4tdG9wOiA1cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdCY6OmFmdGVye1xyXG5cdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdGxlZnQ6MHB4O1xyXG5cdFx0XHRcdHRvcDo1MHB4O1xyXG5cdFx0XHRcdHdpZHRoOiAzcHg7XHJcblx0XHRcdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHRoMXtcclxuXHRcdG1hcmdpbi1sZWZ0OjY1cHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG5cdH1cclxuXHRoMntcclxuXHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0cGFkZGluZy1ib3R0b206NXB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDYwcHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cdFx0Jjo6YmVmb3Jle1xyXG5cdFx0XHRjb250ZW50OlwiIFwiO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdGJvdHRvbTowO1xyXG5cdFx0XHRsZWZ0OjA7XHJcblx0XHRcdHdpZHRoOjUwcHg7XHJcblx0XHRcdGhlaWdodDoycHg7XHJcblx0XHRcdGJhY2tncm91bmQ6I2YwZjBmMDtcclxuXHRcdH1cclxuXHR9XHJcblx0LmltZy1mbGFne1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0cmlnaHQ6MDtcclxuXHRcdHRvcDowO1xyXG5cdFx0d2lkdGg6IDQwJTtcclxuXHR9XHJcblx0dWwubGlzdHtcclxuXHRcdG1hcmdpbjowcHg7XHJcblx0XHRsaXtcclxuXHRcdFx0Y29sb3I6IzAwMDtcclxuXHRcdFx0Jjo6YmVmb3Jle1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6I2JmMjcyZDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLm1vcmUtaW5mb3tcclxuXHRmbG9hdDpub25lO1xyXG5cdGNsZWFyOmJvdGg7XHJcblx0cHtcclxuXHRcdG1hcmdpbjo1MHB4IDAgNzBweCA3NXB4IDtcclxuXHR9XHJcbn1cclxuXHJcbi5hcHBseWNhdGlvbi1ydWxlc3tcclxuICAgIC5idG57XHJcbiAgICAgICAgd2lkdGg6NzUlO1xyXG4gICAgICAgIHBhZGRpbmc6MTVweCAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6I2JmMjcyZDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xyXG4gICAgICAgIG1hcmdpbjoyNXB4IGF1dG8gMDtcclxuICAgICAgICBmb250LXNpemU6MjRweDtcclxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2VjdGlvbi1hZG1pc3Npb24tMntcclxuXHRtYXJnaW46NzBweCAwcHg7XHJcblx0LnJvd3tcclxuXHRcdG1hcmdpbi10b3A6IDA7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdH1cclxuXHJcblx0LmJhcntcclxuXHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0cGFkZGluZy10b3A6MTVweDtcclxuXHRcdCY6OmFmdGVye1xyXG5cdFx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHRvcDowcHg7XHJcblx0XHRcdGxlZnQ6MHB4O1xyXG5cdFx0XHR3aWR0aDoxMDBweDtcclxuXHRcdFx0aGVpZ2h0OjVweDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5wcDB7XHJcblx0XHQmOjphZnRlcntcclxuXHRcdGJhY2tncm91bmQ6IzNlNjVhYzt9XHJcblx0fVxyXG5cdC5wcDF7Jjo6YWZ0ZXJ7XHJcblx0XHRiYWNrZ3JvdW5kOiNiZjI3MmQ7fVxyXG5cdH1cclxuXHQucHAyeyY6OmFmdGVye1xyXG5cdFx0YmFja2dyb3VuZDojMDAwMDAwO31cclxuXHR9XHJcblx0LnBwM3smOjphZnRlcntcclxuXHRcdGJhY2tncm91bmQ6I2U0ZTRlNDt9XHJcblx0fVxyXG5cclxuXHQuYWRkbWluLXNlY3tcclxuXHRcdHBhZGRpbmc6MHB4O1xyXG5cdFx0LnJvd3tcclxuXHRcdFx0bWFyZ2luLWxlZnQ6MHB4O1xyXG5cdFx0fVxyXG5cdFx0LmFkZC1pbmZve1xyXG5cdFx0XHRwYWRkaW5nOjJweDtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0JjpmaXJzdC1jaGlsZHtcclxuXHRcdFx0XHQucGFuZWx7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDowcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdC5hZG1pc3Npb24tZmxhZ3tcclxuXHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0Y29sb3I6I2ZmZjtcclxuXHRcdHBhZGRpbmc6MjVweCAwO1xyXG5cdFx0aGVpZ2h0OjI1MHB4O1xyXG5cdFx0LmJ0bntcclxuXHRcdFx0Ym9yZGVyOjFweCBzb2xpZCAjZmZmO1xyXG5cdFx0XHRjb2xvcjojZmZmO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOm5vbmU7XHJcblx0XHR9XHJcblx0fVxyXG5cdHB7XHJcblx0XHR3aGl0ZS1zcGFjZTogcHJlO1xyXG5cdFx0bWFyZ2luLXRvcDoxNXB4O1xyXG5cdH1cclxuXHRcdC5wYW5lbHtcclxuXHRcdFx0YmFja2dyb3VuZDp1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9idWxiLnBuZykgbm8tcmVwZWF0IDQwcHggLTEwcHggI2ZmZjtcclxuXHRcdFx0cGFkZGluZy10b3A6IDI3MHB4O1xyXG5cdFx0XHRwYWRkaW5nLWJvdHRvbTo1MHB4O1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0LnBhbmVsLWhlYWRpbmd7XHJcblx0XHRcdFx0ei1pbmRleDogMjtcclxuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdH1cclxuXHRcdFx0LmJ0bntcclxuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0Ym90dG9tOjE1cHg7XHJcblx0XHRcdFx0Ym9yZGVyOjJweCBzb2xpZCAjMDAwO1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6bm9uZTtcclxuXHRcdFx0XHRjb2xvcjojMDAwO1xyXG5cdFx0XHRcdHotaW5kZXg6IDI7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0Jjpob3ZlcntcclxuXHRcdFx0XHQuYnRue1xyXG5cdFx0XHRcdFx0Ym9yZGVyOjJweCBzb2xpZCAjZmZmO1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDpub25lO1xyXG5cdFx0XHRcdFx0Y29sb3I6I2ZmZjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdCY6aG92ZXJ7XHJcblx0XHRcdFx0LnBhbmVsLWhlYWRpbmd7XHJcblx0XHRcdFx0XHQuYmFye1xyXG5cdFx0XHRcdFx0XHQmOjphZnRlcntcclxuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGgzLCBwe1xyXG5cdFx0XHRcdFx0XHRjb2xvcjojZmZmO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdCY6OmFmdGVye1xyXG5cdFx0XHRcdFx0Y29udGVudDonJztcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6dXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYnVsYi5qcGcpIG5vLXJlcGVhdCAtNjVweCAtNTBweCAjYmYyNzJkO1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0dG9wOiAtMjVweDtcclxuXHRcdFx0XHRcdGxlZnQ6IDBweDtcclxuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiBjYWxjKDEwMCUgKyA1MHB4KTtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDMyNXB4IDIwcHggMDtcclxuXHRcdFx0XHRcdHotaW5kZXg6IDE7XHJcblx0XHRcdFx0XHRib3gtc2hhZG93OiAwcHggMnB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuXHRcdFx0XHRcclxuXHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGl7XHJcblx0XHRcdFx0bWFyZ2luOjAgYXV0bztcclxuXHRcdFx0XHRkaXNwbGF5OmJsb2NrO1xyXG5cdFx0XHRcdHRleHQtYWxpZ246Y2VudGVyO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN2Z3tcclxuXHRcdFx0XHR3aWR0aDo3NXB4O1xyXG5cdFx0XHRcdGhlaWdodDo3NXB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fVxyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCl7XHJcblxyXG5cclxuXHQuc2VjdGlvbi1zdHVkeS1jdWx0dXJle1xyXG5cdFx0LnJvdy1mLCAucm93LCBoMXtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6MHB4OyBcclxuXHR9XHJcblx0LmJyZWFkY3Vte1xyXG5cdFx0bWFyZ2luLWxlZnQ6MTVweDtcclxuXHR9XHJcblx0XHJcblx0LnBhbmVsLWJvZHl7XHJcblx0XHR3aWR0aDoxMDAlO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbi5zZWN0aW9uLWFkbWlzc2lvbntcclxuXHQucGFuZWx7XHJcblx0XHRwYWRkaW5nOjQwcHggMDtcclxuXHRcdC5pbWFnZS13cmFwe1xyXG5cdFx0XHR3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG5cdFx0XHRtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG5cdFx0fVxyXG5cdH1cclxuXHQuc2VjdGlvbi1hZG1pc3Npb24tMiB7XHJcblx0XHQuYWRkbWluLXNlYyB7XHJcblx0XHRcdC5hZGQtaW5mb3tcclxuXHRcdFx0XHRtYXJnaW4tYm90dG9tOjUwcHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC5wYW5lbHtcclxuXHRcdFx0cGFkZGluZzogMjcwcHggNTBweCA1MHB4ICFpbXBvcnRhbnQ7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcbn0iLCIuc2VjdGlvbi1hZG1pc3Npb24gLnJvdy1mLCAuc2VjdGlvbi1hZG1pc3Npb24gLnJvdyB7XG4gIG1hcmdpbjogNzBweCAwIDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24gLmFkbWlzc2lvbi1pbmZvIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiAuYWRkLXNwZWMge1xuICBtYXJnaW4tbGVmdDogMzVweDtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiAuYWRkLXNwZWMgLnJvdyB7XG4gIG1hcmdpbjogMHB4O1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uIC5hZGQtc3BlYyAucGFuZWwge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiAuYWRkLXNwZWMgLnBhbmVsIHAge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uIC5jdXJyaWN1bHVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uIC5wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24gLnBhbmVsIC5pbWFnZS13cmFwIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAtMTIwcHggMCAyNnB4IDUwcHg7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24gLnBhbmVsLnN0b3J5LWluZm8ge1xuICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uIC5wYW5lbC5zdG9yeS1pbmZvIC5mbHlpbmctcGxhbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24gLnBhbmVsLnN0b3J5LWluZm8gLmZseWluZy1wbGFuZSBzdmcge1xuICBmaWxsOiAjZmZmO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiAucGFuZWwuc3RvcnktaW5mbzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiA1MHB4O1xuICB3aWR0aDogM3B4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24gaDEge1xuICBtYXJnaW4tbGVmdDogNjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiBoMiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24gaDI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uIC5pbWctZmxhZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDQwJTtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiB1bC5saXN0IHtcbiAgbWFyZ2luOiAwcHg7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24gdWwubGlzdCBsaSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uIHVsLmxpc3QgbGk6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG59XG5cbi5tb3JlLWluZm8ge1xuICBmbG9hdDogbm9uZTtcbiAgY2xlYXI6IGJvdGg7XG59XG4ubW9yZS1pbmZvIHAge1xuICBtYXJnaW46IDUwcHggMCA3MHB4IDc1cHg7XG59XG5cbi5hcHBseWNhdGlvbi1ydWxlcyAuYnRuIHtcbiAgd2lkdGg6IDc1JTtcbiAgcGFkZGluZzogMTVweCAwO1xuICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xuICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xuICBtYXJnaW46IDI1cHggYXV0byAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2VjdGlvbi1hZG1pc3Npb24tMiB7XG4gIG1hcmdpbjogNzBweCAwcHg7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24tMiAucm93IHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbi0yIC5iYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uLTIgLmJhcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA1cHg7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24tMiAucHAwOjphZnRlciB7XG4gIGJhY2tncm91bmQ6ICMzZTY1YWM7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24tMiAucHAxOjphZnRlciB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24tMiAucHAyOjphZnRlciB7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24tMiAucHAzOjphZnRlciB7XG4gIGJhY2tncm91bmQ6ICNlNGU0ZTQ7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24tMiAuYWRkbWluLXNlYyB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbi0yIC5hZGRtaW4tc2VjIC5yb3cge1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uLTIgLmFkZG1pbi1zZWMgLmFkZC1pbmZvIHtcbiAgcGFkZGluZzogMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uLTIgLmFkZG1pbi1zZWMgLmFkZC1pbmZvOmZpcnN0LWNoaWxkIC5wYW5lbCB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24tMiAuYWRtaXNzaW9uLWZsYWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAyNXB4IDA7XG4gIGhlaWdodDogMjUwcHg7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24tMiAuYWRtaXNzaW9uLWZsYWcgLmJ0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uLTIgcCB7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24tMiAucGFuZWwge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9idWxiLnBuZykgbm8tcmVwZWF0IDQwcHggLTEwcHggI2ZmZjtcbiAgcGFkZGluZy10b3A6IDI3MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24tMiAucGFuZWwgLnBhbmVsLWhlYWRpbmcge1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24tMiAucGFuZWwgLmJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxNXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogIzAwMDtcbiAgei1pbmRleDogMjtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbi0yIC5wYW5lbDpob3ZlciAuYnRuIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24tMiAucGFuZWw6aG92ZXIgLnBhbmVsLWhlYWRpbmcgLmJhcjo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24tMiAucGFuZWw6aG92ZXIgLnBhbmVsLWhlYWRpbmcgaDMsIC5zZWN0aW9uLWFkbWlzc2lvbi0yIC5wYW5lbDpob3ZlciAucGFuZWwtaGVhZGluZyBwIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24tMiAucGFuZWw6aG92ZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYnVsYi5qcGcpIG5vLXJlcGVhdCAtNjVweCAtNTBweCAjYmYyNzJkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTI1cHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDAlICsgNTBweCk7XG4gIHBhZGRpbmc6IDMyNXB4IDIwcHggMDtcbiAgei1pbmRleDogMTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24tMiAucGFuZWwgaSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uLTIgLnBhbmVsIHN2ZyB7XG4gIHdpZHRoOiA3NXB4O1xuICBoZWlnaHQ6IDc1cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5yb3ctZiwgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucm93LCAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIGgxIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG4gIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLmJyZWFkY3VtIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgfVxuICAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5wYW5lbC1ib2R5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5zZWN0aW9uLWFkbWlzc2lvbiAucGFuZWwge1xuICAgIHBhZGRpbmc6IDQwcHggMDtcbiAgfVxuICAuc2VjdGlvbi1hZG1pc3Npb24gLnBhbmVsIC5pbWFnZS13cmFwIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNlY3Rpb24tYWRtaXNzaW9uIC5zZWN0aW9uLWFkbWlzc2lvbi0yIC5hZGRtaW4tc2VjIC5hZGQtaW5mbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgfVxuICAuc2VjdGlvbi1hZG1pc3Npb24gLnNlY3Rpb24tYWRtaXNzaW9uLTIgLnBhbmVsIHtcbiAgICBwYWRkaW5nOiAyNzBweCA1MHB4IDUwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admissions/admissions.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/admissions/admissions.component.ts ***!
    \****************************************************/

  /*! exports provided: AdmissionsComponent */

  /***/
  function srcAppAdmissionsAdmissionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdmissionsComponent", function () {
      return AdmissionsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var AdmissionsComponent = /*#__PURE__*/function () {
      function AdmissionsComponent(modalService) {
        _classCallCheck(this, AdmissionsComponent);

        this.modalService = modalService;
        this.closeResult = '';
        this.admission = [{
          icon: '#icon_ethicalEdu',
          description: "Ethical\n      Education"
        }, {
          icon: '#icon_nurturing',
          description: "Nurturing\n      Individual\n      Passion"
        }, {
          icon: '#icon_community',
          description: "Building\nA Community"
        }];
        this.admission_2 = [{
          title: "Admission to Foundation Stage",
          bar: 'pp0',
          description: "Activity Based Learning \nfor 5 years"
        }, {
          title: 'Admission to Preparatory Stage',
          bar: 'pp1',
          description: "Discovery, Play and Interactive \nClassroom learning \nfor 3 years"
        }, {
          title: 'Admission to Middle Stage',
          bar: 'pp2',
          description: "Experiential learning in \nMamatics, Science, Arts, etc. \nfor 3 years"
        }, {
          title: 'Admission to Secondary Stage',
          bar: 'pp3',
          description: "Flexibility in choice of subjects \nwith multidisciplinary study \nfor 4 years"
        }];
      }

      _createClass(AdmissionsComponent, [{
        key: "open",
        value: function open(content) {
          var _this = this;

          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title',
            size: 'lg'
          }).result.then(function (result) {
            _this.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this.closeResult = "Dismissed ".concat(_this.getDismissReason(reason));
          });
        }
      }, {
        key: "getDismissReason",
        value: function getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdmissionsComponent;
    }();

    AdmissionsComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
      }];
    };

    AdmissionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admissions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admissions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admissions/admissions.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admissions.component.scss */
      "./src/app/admissions/admissions.component.scss"))["default"]]
    })], AdmissionsComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-slick-carousel */
    "./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js");
    /* harmony import */


    var _studyculture_studyculture_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./studyculture/studyculture.component */
    "./src/app/studyculture/studyculture.component.ts");
    /* harmony import */


    var _admissions_admissions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./admissions/admissions.component */
    "./src/app/admissions/admissions.component.ts");
    /* harmony import */


    var _apply_apply_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./apply/apply.component */
    "./src/app/apply/apply.component.ts");
    /* harmony import */


    var _eng_eng_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./eng/eng.component */
    "./src/app/eng/eng.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _blob_blob_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./blob/blob.component */
    "./src/app/blob/blob.component.ts");
    /* harmony import */


    var _team_team_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./team/team.component */
    "./src/app/team/team.component.ts");
    /* harmony import */


    var _shsedge_shsedge_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./shsedge/shsedge.component */
    "./src/app/shsedge/shsedge.component.ts");
    /* harmony import */


    var _shsstory_shsstory_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./shsstory/shsstory.component */
    "./src/app/shsstory/shsstory.component.ts");

    var routes = [{
      path: 'Home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'shsCulture',
      component: _studyculture_studyculture_component__WEBPACK_IMPORTED_MODULE_7__["studycultureComponent"]
    }, {
      path: 'shsStory',
      component: _shsstory_shsstory_component__WEBPACK_IMPORTED_MODULE_15__["shsstoryComponent"]
    }, {
      path: 'shsEdge',
      component: _shsedge_shsedge_component__WEBPACK_IMPORTED_MODULE_14__["shsedgeComponent"]
    }, {
      path: 'JoinshsPride',
      component: _admissions_admissions_component__WEBPACK_IMPORTED_MODULE_8__["AdmissionsComponent"]
    }, {
      path: 'HowToApply',
      component: _apply_apply_component__WEBPACK_IMPORTED_MODULE_9__["ApplyComponent"]
    }, {
      path: 'CatchUpOverCoffee',
      component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"]
    }, {
      path: 'shsCorner',
      component: _blob_blob_component__WEBPACK_IMPORTED_MODULE_12__["BlobComponent"]
    }, {
      path: 'shsLeague',
      component: _team_team_component__WEBPACK_IMPORTED_MODULE_13__["teamComponent"]
    }, {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _studyculture_studyculture_component__WEBPACK_IMPORTED_MODULE_7__["studycultureComponent"], _shsstory_shsstory_component__WEBPACK_IMPORTED_MODULE_15__["shsstoryComponent"], _shsedge_shsedge_component__WEBPACK_IMPORTED_MODULE_14__["shsedgeComponent"], _admissions_admissions_component__WEBPACK_IMPORTED_MODULE_8__["AdmissionsComponent"], _apply_apply_component__WEBPACK_IMPORTED_MODULE_9__["ApplyComponent"], _eng_eng_component__WEBPACK_IMPORTED_MODULE_10__["EngComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"], _blob_blob_component__WEBPACK_IMPORTED_MODULE_12__["BlobComponent"], _team_team_component__WEBPACK_IMPORTED_MODULE_13__["teamComponent"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        enableTracing: false,
        scrollPositionRestoration: 'enabled'
      }), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__["SlickCarouselModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\n  color: #000;\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 14px;\n  background: url('body.png') repeat #f0f0f0;\n}\n\n.left-space {\n  padding-left: 70px;\n  float: left;\n  width: 100%;\n}\n\n.slick-prev:before, .slick-next:before {\n  color: #000;\n}\n\n* {\n  outline: none;\n}\n\na {\n  cursor: pointer;\n}\n\n.remove-scroll {\n  overflow: hidden;\n}\n\n.form-control, .btn {\n  border-radius: 0;\n}\n\n.v-flex {\n  align-self: center;\n}\n\n.lines {\n  display: none;\n  width: 2px;\n  height: 100%;\n  position: absolute;\n  background: #fff;\n  top: 0;\n}\n\n.lines._1 {\n  left: 20%;\n}\n\n.lines._2 {\n  left: 40%;\n}\n\n.lines._3 {\n  left: 60%;\n}\n\n.lines._4 {\n  left: 80%;\n}\n\n.lines._5 {\n  left: 100%;\n}\n\n.breadcum {\n  margin-top: 115px;\n  margin-left: 70px;\n  font-family: \"Lora\", serif;\n}\n\n.breadcum span {\n  margin: 0 15px;\n}\n\n.breadcum .icon-ex-small svg {\n  width: 14px;\n  height: 14px;\n}\n\n.clearfix {\n  clear: both;\n  float: none;\n}\n\n.text-highlighter {\n  color: #bf272d;\n}\n\n.bg-highlighter {\n  background: #bf272d;\n}\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.btn {\n  font-weight: bold;\n  font-size: 12px;\n  padding: 5px 10px;\n}\n\nh1 {\n  font-size: 40px;\n  font-family: \"Lora\", serif;\n}\n\nh2 {\n  font-size: 34px;\n  font-family: \"Lora\", serif;\n}\n\nh3 {\n  font-size: 30px;\n}\n\nh4 {\n  font-size: 26px;\n}\n\nh5 {\n  font-size: 22px;\n}\n\nh6 {\n  font-size: 18px;\n  line-height: 32px;\n}\n\nh1 {\n  font-weight: bold;\n}\n\n.center {\n  text-align: center;\n}\n\n.heading-highlight {\n  color: #f7a05c;\n}\n\nsvg {\n  vertical-align: middle;\n  margin: auto;\n  align-content: center;\n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n.icon-big > svg {\n  width: 100px;\n  height: 100px;\n}\n\n.icon-medium > svg {\n  width: 50px;\n  height: 50px;\n}\n\n.icon-small > svg {\n  width: 34px;\n  height: 34px;\n}\n\n.icon-ex-small > svg {\n  width: 24px;\n  height: 24px;\n}\n\n.section-admission .slick-prev:before, .section-admission .slick-next:before {\n  color: #000;\n}\n\n.section-admission .slick-prev, .section-admission .slick-next {\n  bottom: 0px;\n  top: auto;\n  right: 0;\n  left: auto !important;\n}\n\n.section-admission .slick-prev {\n  right: 25px;\n}\n\n.shsn-league .slick-slider .slick-slide {\n  margin: 0 50px;\n}\n\n.shsn-league .slick-prev, .shsn-league .slick-next {\n  bottom: -25px;\n  top: auto;\n  right: 0;\n  left: auto !important;\n}\n\n.shsn-league .slick-prev:before, .shsn-league .slick-next:before {\n  color: #000;\n}\n\n.shsn-league .slick-prev {\n  right: 25px;\n}\n\n.slick-slider {\n  width: 100%;\n  margin: auto;\n}\n\n.slick-slider .slick-slide {\n  margin: 0 15px;\n}\n\n.recent-article .slick-prev {\n  right: 60px !important;\n}\n\n.recent-article .slick-prev, .recent-article .slick-next {\n  background: #bf272d;\n  bottom: auto;\n  top: -25px;\n  right: 15px;\n  left: auto !important;\n  padding: 0px 25px;\n}\n\n.recent-article .slick-prev:before, .recent-article .slick-next:before {\n  color: #fff;\n}\n\n.inner-banner {\n  margin-top: 70px;\n  position: relative;\n}\n\n.inner-banner img {\n  width: 100%;\n}\n\n.inner-banner .page-title {\n  position: absolute;\n  bottom: 60px;\n  background: rgba(255, 255, 255, 0.5);\n  width: 100%;\n  padding: 70px 0;\n  color: #214f7a;\n}\n\ntextarea.form-control {\n  border-radius: 15px;\n  resize: none;\n}\n\nimg {\n  width: 100%;\n}\n\n.main-banner .carousel-caption h3 {\n  color: #bf272d;\n  font-size: 40px;\n  font-weight: bold;\n  font-family: \"Lora\", serif;\n}\n\n.main-banner .carousel-caption p {\n  color: #000;\n  font-weight: bold;\n}\n\nul.list {\n  margin-top: 35px;\n}\n\nul.list li {\n  padding: 0 0 20px 20px;\n  list-style: none outside;\n  font-size: 16px;\n  position: relative;\n  color: #fff;\n}\n\nul.list li::before {\n  content: \" \";\n  background: #fff;\n  font-weight: bold;\n  position: absolute;\n  top: 8px;\n  left: 0px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n.sub-header .panel {\n  padding-bottom: 0px !important;\n  padding-right: 0px !important;\n}\n\n.sub-header .doodle {\n  font-size: 72px;\n  font-family: \"Lora\", serif;\n  color: #f0f0f0;\n  text-align: right;\n  line-height: 90px;\n}\n\n.slick-list {\n  padding: 50px 0px !important;\n}\n\n.recent-article .slick-prev, .recent-article .slick-next {\n  top: -100px;\n}\n\n.slick-slider .slick-slide {\n  padding: 0px;\n}\n\n.main-page {\n  float: none;\n}\n\n.main-page .flying-img {\n  display: none;\n}\n\n.flying-img {\n  position: absolute;\n  width: 150px;\n  z-index: -1;\n  opacity: 0.5;\n  height: 100%;\n  top: 0px;\n}\n\n.flying-img.right-fly {\n  background: url('right.png') repeat-y;\n  right: 0px;\n}\n\n.flying-img.left-fly {\n  background: url('left.png') repeat-y;\n  left: 70px;\n}\n\n.apply-form .row {\n  margin: 0 0 15px !important;\n}\n\n.sign h6 {\n  font-weight: bold;\n}\n\n@media (min-width: 1200px) {\n  .navbar-nav-list.notify-show {\n    display: none;\n  }\n}\n\n@media (max-width: 576px) {\n  .section-about[_ngcontent-tjf-c4], .section-nofify[_ngcontent-tjf-c4], .shsn-league[_ngcontent-tjf-c4], .section-events[_ngcontent-tjf-c4], .section-spacing[_ngcontent-tjf-c4] {\n    padding: 30px 0;\n  }\n\n  nav {\n    width: 100% !important;\n  }\n\n  section:first-child {\n    overflow: hidden;\n  }\n\n  .breadcum {\n    margin-left: 15px !important;\n  }\n\n  .row, .row-f {\n    margin: 10px 15px !important;\n  }\n\n  .doodle {\n    display: none;\n  }\n\n  .img-flag, .panel-body {\n    width: 100% !important;\n  }\n\n  .left-space {\n    padding-left: 0px;\n    float: left;\n  }\n\n  .navbar-vertical {\n    display: none;\n  }\n\n  .newsletter .btn {\n    margin: 15px 0 0 0;\n  }\n\n  .slick-slider {\n    width: 90%;\n  }\n\n  .navbar-nav-list.notify-hide {\n    display: none;\n  }\n  .navbar-nav-list.notify-show {\n    display: block;\n    float: none !important;\n    margin: 0 auto;\n  }\n\n  .col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {\n    padding-right: 15px;\n    padding-left: 15px;\n  }\n\n  .section-inner-subheader h1, .section-admission h1 {\n    margin-left: 0px !important;\n  }\n\n  .panel {\n    padding: 30px 15px !important;\n  }\n\n  .sign .modal-body {\n    padding: 0px;\n  }\n  .sign h6 {\n    font-weight: bold;\n  }\n\n  .login-form .row {\n    margin-right: -15px !important;\n    margin-left: -15px !important;\n  }\n\n  .apply-form {\n    padding: 1rem 0;\n  }\n  .apply-form .row {\n    display: block;\n  }\n  .apply-form .row .col:first-child {\n    margin-bottom: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXHNocy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0EsMENBQUE7QUNDRDs7QURFQTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNDRDs7QURFQTtFQUNDLFdBQUE7QUNDRDs7QURFQTtFQUNDLGFBQUE7QUNDRDs7QURDQTtFQUNDLGVBQUE7QUNFRDs7QURBQTtFQUNDLGdCQUFBO0FDR0Q7O0FEREE7RUFDQyxnQkFBQTtBQ0lEOztBREZBO0VBQ0Msa0JBQUE7QUNLRDs7QURIQTtFQUNDLGFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0FDTUQ7O0FETEM7RUFDQyxTQUFBO0FDT0Y7O0FETEM7RUFDQyxTQUFBO0FDT0Y7O0FETEM7RUFDQyxTQUFBO0FDT0Y7O0FETEM7RUFDQyxTQUFBO0FDT0Y7O0FETEM7RUFDQyxVQUFBO0FDT0Y7O0FESkE7RUFDQyxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUNPRDs7QUROQztFQUNDLGNBQUE7QUNRRjs7QURMRTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDT0g7O0FEREE7RUFDQyxXQUFBO0VBQ0EsV0FBQTtBQ0lEOztBREFBO0VBQ0MsY0FBQTtBQ0dEOztBRERBO0VBQ0MsbUJBQUE7QUNJRDs7QURGQTtFQUNDLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNLRDs7QURIQTtFQUNDLGlCQUFBO0VBQ0EsZUFBQTtFQUNHLGlCQUFBO0FDTUo7O0FESkE7RUFDQyxlQUFBO0VBQ0EsMEJBQUE7QUNPRDs7QURMQTtFQUNDLGVBQUE7RUFDQSwwQkFBQTtBQ1FEOztBRE5BO0VBQ0MsZUFBQTtBQ1NEOztBRFBBO0VBQ0MsZUFBQTtBQ1VEOztBRFJBO0VBQ0MsZUFBQTtBQ1dEOztBRFRBO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0FDWUQ7O0FEVkE7RUFDQyxpQkFBQTtBQ2FEOztBRFhBO0VBQ0Msa0JBQUE7QUNjRDs7QURaQTtFQUNJLGNBQUE7QUNlSjs7QURaQTtFQUNDLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDZUQ7O0FEYkE7RUFDQyxnQkFBQTtBQ2dCRDs7QURkQTtFQUNDLFlBQUE7RUFDQSxhQUFBO0FDaUJEOztBRGZBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNrQkQ7O0FEaEJBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNtQkQ7O0FEakJBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNvQkQ7O0FEaEJFO0VBQ0EsV0FBQTtBQ21CRjs7QURqQkM7RUFDQyxXQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDTSxxQkFBQTtBQ21CUjs7QURqQkM7RUFDQyxXQUFBO0FDbUJGOztBRGJFO0VBQ0MsY0FBQTtBQ2dCSDs7QURaQztFQUNDLGFBQUE7RUFDQyxTQUFBO0VBQ0EsUUFBQTtFQUNBLHFCQUFBO0FDY0g7O0FEYkc7RUFDQyxXQUFBO0FDZUo7O0FEWEM7RUFDQyxXQUFBO0FDYUY7O0FEVEE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ1lEOztBRFhDO0VBQ0MsY0FBQTtBQ2FGOztBRFJDO0VBQ0Msc0JBQUE7QUNXRjs7QURUQztFQUNDLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ1dGOztBRFZHO0VBQ0MsV0FBQTtBQ1lKOztBRE5FO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ1NKOztBRFJJO0VBQ0ksV0FBQTtBQ1VSOztBRFJJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNVUjs7QUROQTtFQUNDLG1CQUFBO0VBQ0EsWUFBQTtBQ1NEOztBRE5BO0VBQ0MsV0FBQTtBQ1NEOztBREpFO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FDT0g7O0FETEU7RUFDQyxXQUFBO0VBQ0EsaUJBQUE7QUNPSDs7QURGQTtFQUNDLGdCQUFBO0FDS0Q7O0FESkM7RUFDQyxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ01GOztBRExFO0VBQ0MsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDT0g7O0FEeUJDO0VBQ0MsOEJBQUE7RUFDQSw2QkFBQTtBQ3RCRjs7QUR3QkM7RUFDRyxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ3RCSjs7QUQyQkM7RUFDQyw0QkFBQTtBQ3hCRjs7QUQyQkM7RUFDQyxXQUFBO0FDeEJGOztBRDJCQztFQUNDLFlBQUE7QUN4QkY7O0FEMkJBO0VBQ0MsV0FBQTtBQ3hCRDs7QUR5QkM7RUFDQyxhQUFBO0FDdkJGOztBRDJCQTtFQUNDLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7QUN4QkQ7O0FEeUJDO0VBQ0MscUNBQUE7RUFDQSxVQUFBO0FDdkJGOztBRHlCQztFQUNDLG9DQUFBO0VBQ0EsVUFBQTtBQ3ZCRjs7QUQ0QkM7RUFDQywyQkFBQTtBQ3pCRjs7QUQ4QkM7RUFDQyxpQkFBQTtBQzNCRjs7QUQwR0E7RUFFRTtJQUNFLGFBQUE7RUN4R0Y7QUFDRjs7QUQyR0E7RUFDQztJQUNDLGVBQUE7RUN6R0E7O0VENEdEO0lBQ0Msc0JBQUE7RUN6R0E7O0VEMkdEO0lBQ0MsZ0JBQUE7RUN4R0E7O0VEMEdEO0lBQ0MsNEJBQUE7RUN2R0E7O0VEeUdEO0lBQ0MsNEJBQUE7RUN0R0E7O0VEeUdEO0lBQ0MsYUFBQTtFQ3RHQTs7RUR5R0Q7SUFDQyxzQkFBQTtFQ3RHQTs7RUR3R0Q7SUFDQyxpQkFBQTtJQUNBLFdBQUE7RUNyR0E7O0VEdUdEO0lBQ0MsYUFBQTtFQ3BHQTs7RUR1R0E7SUFDQyxrQkFBQTtFQ3BHRDs7RUR1R0Q7SUFDQyxVQUFBO0VDcEdBOztFRHNHQTtJQUNDLGFBQUE7RUNuR0Q7RURxR0E7SUFDRSxjQUFBO0lBQ0Qsc0JBQUE7SUFDQSxjQUFBO0VDbkdEOztFRHNHRDtJQUNBLG1CQUFBO0lBQ0csa0JBQUE7RUNuR0Y7O0VEc0dEO0lBQ0MsMkJBQUE7RUNuR0E7O0VEcUdEO0lBQ0MsNkJBQUE7RUNsR0E7O0VEcUdBO0lBQVksWUFBQTtFQ2pHWjtFRGtHQTtJQUNDLGlCQUFBO0VDaEdEOztFRG1HRDtJQUNDLDhCQUFBO0lBQ0UsNkJBQUE7RUNoR0Y7O0VEbUdEO0lBQ0MsZUFBQTtFQ2hHQTtFRGlHQTtJQUNBLGNBQUE7RUMvRkE7RURnR0E7SUFDQyxtQkFBQTtFQzlGRDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuXHRjb2xvcjojMDAwO1xyXG5cdGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6MTRweDtcclxuXHRiYWNrZ3JvdW5kOnVybCguLi9hc3NldHMvaW1hZ2VzL2JvZHkucG5nKSByZXBlYXQgI2YwZjBmMDtcclxufVxyXG5cclxuLmxlZnQtc3BhY2V7XHJcblx0cGFkZGluZy1sZWZ0OiA3MHB4O1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbi5zbGljay1wcmV2OmJlZm9yZSwgLnNsaWNrLW5leHQ6YmVmb3Jle1xyXG5cdGNvbG9yOiMwMDA7XHJcbn1cclxuXHJcbip7XHJcblx0b3V0bGluZTpub25lO1xyXG59XHJcbmF7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5yZW1vdmUtc2Nyb2xse1xyXG5cdG92ZXJmbG93OmhpZGRlbjtcclxufVxyXG4uZm9ybS1jb250cm9sLCAuYnRue1xyXG5cdGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuLnYtZmxleHtcclxuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuLmxpbmVze1xyXG5cdGRpc3BsYXk6bm9uZTtcclxuXHR3aWR0aDoycHg7XHJcblx0aGVpZ2h0OjEwMCU7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGJhY2tncm91bmQ6I2ZmZjtcclxuXHR0b3A6MDtcclxuXHQmLl8xe1xyXG5cdFx0bGVmdDoyMCU7XHJcblx0fVxyXG5cdCYuXzJ7XHJcblx0XHRsZWZ0OjQwJTtcclxuXHR9XHJcblx0Ji5fM3tcclxuXHRcdGxlZnQ6NjAlO1xyXG5cdH1cclxuXHQmLl80e1xyXG5cdFx0bGVmdDo4MCU7XHJcblx0fVxyXG5cdCYuXzV7XHJcblx0XHRsZWZ0OjEwMCU7XHJcblx0fVxyXG59XHJcbi5icmVhZGN1bXtcclxuXHRtYXJnaW4tdG9wOjExNXB4O1xyXG5cdG1hcmdpbi1sZWZ0OjcwcHg7XHJcblx0Zm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcclxuXHRzcGFue1xyXG5cdFx0bWFyZ2luOjAgMTVweDtcclxuXHR9XHJcblx0Lmljb24tZXgtc21hbGx7XHJcblx0XHRzdmd7XHJcblx0XHRcdHdpZHRoOiAxNHB4O1xyXG5cdFx0XHRoZWlnaHQ6IDE0cHg7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG59XHJcblxyXG4uY2xlYXJmaXh7XHJcblx0Y2xlYXI6IGJvdGg7XHJcblx0ZmxvYXQ6bm9uZTtcclxuXHRcclxufVxyXG5cclxuLnRleHQtaGlnaGxpZ2h0ZXJ7XHJcblx0Y29sb3I6I2JmMjcyZDtcclxufVxyXG4uYmctaGlnaGxpZ2h0ZXJ7XHJcblx0YmFja2dyb3VuZDojYmYyNzJkO1xyXG59XHJcbnVse1xyXG5cdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuXHRtYXJnaW46MDtcclxuXHRwYWRkaW5nOjA7XHJcbn1cclxuLmJ0bntcclxuXHRmb250LXdlaWdodDpib2xkO1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG59XHJcbmgxe1xyXG5cdGZvbnQtc2l6ZTo0MHB4O1xyXG5cdGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xyXG59XHJcbmgye1xyXG5cdGZvbnQtc2l6ZTozNHB4O1xyXG5cdGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XHJcbn1cclxuaDN7XHJcblx0Zm9udC1zaXplOjMwcHg7XHJcbn1cclxuaDR7XHJcblx0Zm9udC1zaXplOjI2cHg7XHJcbn1cclxuaDV7XHJcblx0Zm9udC1zaXplOjIycHg7XHJcbn1cclxuaDZ7XHJcblx0Zm9udC1zaXplOjE4cHg7IFxyXG5cdGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG59XHJcbmgxe1xyXG5cdGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbn1cclxuLmNlbnRlcntcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG59XHRcclxuLmhlYWRpbmctaGlnaGxpZ2h0e1xyXG4gICAgY29sb3I6I2Y3YTA1YztcclxufVxyXG5cclxuc3ZnIHtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdG1hcmdpbjogYXV0bztcclxuXHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuc3ZnOm5vdCg6cm9vdCkge1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmljb24tYmlnPnN2ZyB7XHJcblx0d2lkdGg6IDEwMHB4O1xyXG5cdGhlaWdodDogMTAwcHg7XHJcbn1cclxuLmljb24tbWVkaXVtPnN2ZyB7XHJcblx0d2lkdGg6IDUwcHg7XHJcblx0aGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5pY29uLXNtYWxsPnN2ZyB7XHJcblx0d2lkdGg6IDM0cHg7XHJcblx0aGVpZ2h0OiAzNHB4O1xyXG59XHJcbi5pY29uLWV4LXNtYWxsPnN2ZyB7XHJcblx0d2lkdGg6IDI0cHg7XHJcblx0aGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbi1hZG1pc3Npb257XHJcblx0XHQuc2xpY2stcHJldjpiZWZvcmUsIC5zbGljay1uZXh0OmJlZm9yZXtcclxuXHRcdGNvbG9yOiMwMDA7XHJcblx0fVxyXG5cdC5zbGljay1wcmV2LCAuc2xpY2stbmV4dHtcclxuXHRcdGJvdHRvbTotMHB4O1xyXG5cdFx0dG9wOmF1dG87XHJcblx0XHRyaWdodDogMDtcclxuICAgICAgICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdC5zbGljay1wcmV2e1xyXG5cdFx0cmlnaHQ6MjVweDtcclxuXHR9XHJcbn1cclxuXHJcbi5zaHNuLWxlYWd1ZXtcclxuXHQuc2xpY2stc2xpZGVye1xyXG5cdFx0LnNsaWNrLXNsaWRle1xyXG5cdFx0XHRtYXJnaW46MCA1MHB4O1xyXG5cdFx0fVxyXG5cdH1cdFxyXG5cclxuXHQuc2xpY2stcHJldiwgLnNsaWNrLW5leHR7XHJcblx0XHRib3R0b206IC0yNXB4O1xyXG5cdFx0XHR0b3A6IGF1dG87XHJcblx0XHRcdHJpZ2h0OiAwO1xyXG5cdFx0XHRsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcblx0XHRcdCY6YmVmb3Jle1x0XHJcblx0XHRcdFx0Y29sb3I6ICMwMDA7XHJcblx0XHRcdFxyXG5cdFx0XHR9XHJcblx0fVxyXG5cdC5zbGljay1wcmV2IHtcclxuXHRcdHJpZ2h0OiAyNXB4O1xyXG5cdH1cclxuXHRcclxufVxyXG4uc2xpY2stc2xpZGVyIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXJnaW46IGF1dG87XHJcblx0LnNsaWNrLXNsaWRle1xyXG5cdFx0bWFyZ2luOjAgMTVweDtcclxuXHR9XHJcbiAgfVxyXG5cclxuICAucmVjZW50LWFydGljbGV7XHJcblx0LnNsaWNrLXByZXZ7XHJcblx0XHRyaWdodDogNjBweCAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQuc2xpY2stcHJldiwgLnNsaWNrLW5leHR7XHJcblx0XHRiYWNrZ3JvdW5kOiNiZjI3MmQ7XHJcblx0XHRib3R0b206IGF1dG87XHJcblx0XHR0b3A6IC0yNXB4O1xyXG5cdFx0cmlnaHQ6IDE1cHg7XHJcblx0XHRsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nOiAwcHggMjVweDtcclxuXHRcdFx0JjpiZWZvcmV7XHRcclxuXHRcdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0XHJcblx0XHRcdH1cclxuXHR9ICBcclxuICB9XHJcblxyXG4gIC5pbm5lci1iYW5uZXJ7XHJcbiAgICBtYXJnaW4tdG9wOjcwcHg7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgfVxyXG4gICAgLnBhZ2UtdGl0bGV7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogNjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOnJnYigyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDcwcHggMDtcclxuICAgICAgICBjb2xvcjojMjE0ZjdhO1xyXG4gICAgfVxyXG59XHJcblxyXG50ZXh0YXJlYS5mb3JtLWNvbnRyb2x7XHJcblx0Ym9yZGVyLXJhZGl1czogMTVweDtcclxuXHRyZXNpemU6IG5vbmU7XHJcbn1cclxuXHJcbmltZ3tcclxuXHR3aWR0aDoxMDAlO1xyXG59XHJcblxyXG4ubWFpbi1iYW5uZXJ7XHJcblx0LmNhcm91c2VsLWNhcHRpb257XHJcblx0XHRoM3tcclxuXHRcdFx0Y29sb3I6I2JmMjcyZDtcclxuXHRcdFx0Zm9udC1zaXplOjQwcHg7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xyXG5cdFx0fVxyXG5cdFx0cHtcclxuXHRcdFx0Y29sb3I6IzAwMDtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG51bC5saXN0e1xyXG5cdG1hcmdpbi10b3A6MzVweDtcclxuXHRsaXtcclxuXHRcdHBhZGRpbmc6IDAgMCAyMHB4IDIwcHg7XHJcblx0XHRsaXN0LXN0eWxlOiBub25lIG91dHNpZGU7XHJcblx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRjb2xvcjojZmZmO1xyXG5cdFx0Jjo6YmVmb3Jle1xyXG5cdFx0XHRjb250ZW50OiBcIiBcIjtcclxuXHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRcdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdFx0XHR0b3A6OHB4O1xyXG5cdFx0XHRsZWZ0OjBweDtcclxuXHRcdFx0d2lkdGg6IDEwcHg7IFxyXG5cdFx0XHRoZWlnaHQ6MTBweDtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vLyAuY29sLCAuY29sLTEsIC5jb2wtMTAsIC5jb2wtMTEsIC5jb2wtMTIsIC5jb2wtMiwgLmNvbC0zLCAuY29sLTQsIC5jb2wtNSwgLmNvbC02LCAuY29sLTcsIC5jb2wtOCwgLmNvbC05LCAuY29sLWF1dG8sIC5jb2wtbGcsIC5jb2wtbGctMSwgLmNvbC1sZy0xMCwgLmNvbC1sZy0xMSwgLmNvbC1sZy0xMiwgLmNvbC1sZy0yLCAuY29sLWxnLTMsIC5jb2wtbGctNCwgLmNvbC1sZy01LCAuY29sLWxnLTYsIC5jb2wtbGctNywgLmNvbC1sZy04LCAuY29sLWxnLTksIC5jb2wtbGctYXV0bywgLmNvbC1tZCwgLmNvbC1tZC0xLCAuY29sLW1kLTEwLCAuY29sLW1kLTExLCAuY29sLW1kLTEyLCAuY29sLW1kLTIsIC5jb2wtbWQtMywgLmNvbC1tZC00LCAuY29sLW1kLTUsIC5jb2wtbWQtNiwgLmNvbC1tZC03LCAuY29sLW1kLTgsIC5jb2wtbWQtOSwgLmNvbC1tZC1hdXRvLCAuY29sLXNtLCAuY29sLXNtLTEsIC5jb2wtc20tMTAsIC5jb2wtc20tMTEsIC5jb2wtc20tMTIsIC5jb2wtc20tMiwgLmNvbC1zbS0zLCAuY29sLXNtLTQsIC5jb2wtc20tNSwgLmNvbC1zbS02LCAuY29sLXNtLTcsIC5jb2wtc20tOCwgLmNvbC1zbS05LCAuY29sLXNtLWF1dG8sIC5jb2wteGwsIC5jb2wteGwtMSwgLmNvbC14bC0xMCwgLmNvbC14bC0xMSwgLmNvbC14bC0xMiwgLmNvbC14bC0yLCAuY29sLXhsLTMsIC5jb2wteGwtNCwgLmNvbC14bC01LCAuY29sLXhsLTYsIC5jb2wteGwtNywgLmNvbC14bC04LCAuY29sLXhsLTksIC5jb2wteGwtYXV0b3tcclxuLy8gXHRwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuLy8gfVxyXG5cclxuLy8gQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpe1xyXG4vLyBcdC5jb250YWluZXJ7XHJcbi8vIFx0d2lkdGg6Y2FsYyg3MjBweCAtIDY0cHgpO1xyXG4vLyBcdG1hcmdpbi1yaWdodDo2NHB4O1xyXG4vLyB9XHJcbi8vIH1cclxuXHJcbi8vIEBtZWRpYShtaW4td2lkdGg6IDk5MnB4KXtcclxuLy8gXHQuY29udGFpbmVye1xyXG4vLyBcdHdpZHRoOmNhbGMoOTYwcHggLSA2NHB4KTtcclxuLy8gXHRtYXJnaW4tbGVmdDo2NHB4O1xyXG4vLyB9XHJcbi8vIH1cclxuXHJcbi8vIEBtZWRpYShtaW4td2lkdGg6IDEyMDBweCl7XHJcbi8vIFx0LmNvbnRhaW5lcntcclxuLy8gXHR3aWR0aDpjYWxjKDExNDBweCAtIDY0cHgpO1xyXG4vLyBcdG1hcmdpbi1sZWZ0OjY0cHg7XHJcbi8vIH1cclxuLy8gfVxyXG5cclxuLnN1Yi1oZWFkZXJ7XHJcblx0LnBhbmVse1xyXG5cdFx0cGFkZGluZy1ib3R0b206MHB4ICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OjBweCAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQuZG9vZGxle1xyXG5cdCAgIGZvbnQtc2l6ZTogNzJweDtcclxuXHQgICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xyXG5cdCAgIGNvbG9yOiNmMGYwZjA7XHJcblx0ICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0ICAgbGluZS1oZWlnaHQ6IDkwcHg7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHQuc2xpY2stbGlzdHtcclxuXHRcdHBhZGRpbmc6NTBweCAwcHggIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdC5yZWNlbnQtYXJ0aWNsZSAuc2xpY2stcHJldiwgLnJlY2VudC1hcnRpY2xlIC5zbGljay1uZXh0e1xyXG5cdFx0dG9wOiAtMTAwcHg7XHJcblx0fVxyXG5cclxuXHQuc2xpY2stc2xpZGVyIC5zbGljay1zbGlkZXtcclxuXHRcdHBhZGRpbmc6MHB4O1xyXG5cdH1cclxuXHJcbi5tYWluLXBhZ2V7XHJcblx0ZmxvYXQ6bm9uZTtcclxuXHQuZmx5aW5nLWltZ3tcclxuXHRcdGRpc3BsYXk6bm9uZTtcclxuXHR9XHJcbn1cclxuXHJcbi5mbHlpbmctaW1ne1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR3aWR0aDoxNTBweDtcclxuXHR6LWluZGV4OiAtMTtcclxuXHRvcGFjaXR5OiAwLjU7XHJcblx0aGVpZ2h0OjEwMCU7XHJcblx0dG9wOjBweDtcclxuXHQmLnJpZ2h0LWZseXtcclxuXHRcdGJhY2tncm91bmQ6IHVybCguLi9hc3NldHMvaW1hZ2VzL2ZseWluZy9yaWdodC5wbmcpIHJlcGVhdC15O1xyXG5cdFx0cmlnaHQ6MHB4O1xyXG5cdH1cclxuXHQmLmxlZnQtZmx5e1xyXG5cdFx0YmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvZmx5aW5nL2xlZnQucG5nKSByZXBlYXQteTtcclxuXHRcdGxlZnQ6NzBweDtcclxuXHR9XHJcbn1cclxuXHJcbi5hcHBseS1mb3Jte1xyXG5cdC5yb3d7XHJcblx0XHRtYXJnaW46MCAwIDE1cHggIWltcG9ydGFudDtcclxuXHR9XHJcbn1cclxuXHJcbi5zaWdue1xyXG5cdGg2e1xyXG5cdFx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHR9XHJcbn1cclxuXHJcbi8vIC5mbHlpbmctaW1ne1xyXG4vLyBcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gXHR3aWR0aDoxMDBweDtcclxuLy8gXHR6LWluZGV4OiAxO1xyXG4vLyBcdG9wYWNpdHk6IDAuODtcclxuLy8gXHQmLl8xe1xyXG4vLyBcdFx0bGVmdDo4MHB4O1xyXG4vLyBcdFx0dG9wOjEwMHB4O1xyXG4vLyBcdH1cclxuLy8gXHQmLl8ye1xyXG4vLyBcdFx0bGVmdDo4MHB4O1xyXG4vLyBcdFx0dG9wOjE4MHB4O1xyXG4vLyBcdH1cclxuLy8gXHQmLl8ze1xyXG4vLyBcdFx0bGVmdDo4MHB4O1xyXG4vLyBcdFx0dG9wOjEyMHB4O1xyXG4vLyBcdH1cclxuLy8gXHQmLl80e1xyXG4vLyBcdFx0cmlnaHQ6ODBweDtcclxuLy8gXHRcdHRvcDoxMjBweDtcclxuLy8gXHR9XHJcbi8vIFx0Ji5fNXtcclxuLy8gXHRcdGxlZnQ6MzAwcHg7XHJcbi8vIFx0XHR0b3A6OTBweDtcclxuLy8gXHR9XHJcbi8vIFx0Ji5fNntcclxuLy8gXHRcdHJpZ2h0OjkwcHg7XHJcbi8vIFx0XHR0b3A6MTUwcHg7XHJcbi8vIFx0fVxyXG4vLyBcdCYuXzd7XHJcbi8vIFx0XHRsZWZ0OjcwcHg7XHJcbi8vIFx0XHR0b3A6MTcwcHg7XHJcbi8vIFx0fVxyXG4vLyBcdCYuXzh7XHJcbi8vIFx0XHRyaWdodDoyMHB4O1xyXG4vLyBcdFx0dG9wOjIwMHB4O1xyXG4vLyBcdH1cclxuLy8gXHQmLl85e1xyXG4vLyBcdFx0bGVmdDo4MHB4O1xyXG4vLyBcdFx0dG9wOjIzMHB4O1xyXG4vLyBcdH1cclxuLy8gXHQmLl8xMHtcclxuLy8gXHRcdHJpZ2h0OjEwcHg7XHJcbi8vIFx0XHR0b3A6MjMwcHg7XHJcbi8vIFx0fVxyXG4vLyBcdCYuXzExe1xyXG4vLyBcdFx0bGVmdDowcHg7XHJcbi8vIFx0XHR0b3A6MHB4O1xyXG4vLyBcdH1cclxuLy8gXHQmLl8xMntcclxuLy8gXHRcdGxlZnQ6MHB4O1xyXG4vLyBcdFx0dG9wOjBweDtcclxuLy8gXHR9XHJcbi8vIFx0Ji5fMTR7XHJcbi8vIFx0XHRyaWdodDowcHg7XHJcbi8vIFx0XHR0b3A6MHB4O1xyXG4vLyBcdH1cclxuLy8gXHQmLl8xNXtcclxuLy8gXHRcdHJpZ2h0OjBweDtcclxuLy8gXHRcdHRvcDowcHg7XHJcbi8vIFx0fVxyXG4vLyBcdCYuXzE2e1xyXG4vLyBcdFx0cmlnaHQ6MHB4O1xyXG4vLyBcdFx0dG9wOjBweDtcclxuLy8gXHR9XHJcbi8vIFx0Ji5fMTd7XHJcbi8vIFx0XHRsZWZ0OjBweDtcclxuLy8gXHRcdHRvcDowcHg7XHJcbi8vIFx0fVxyXG4vLyBcdCYuXzE4e1xyXG4vLyBcdFx0cmlnaHQ6MHB4O1xyXG4vLyBcdFx0dG9wOjBweDtcclxuLy8gXHR9XHJcbi8vIH1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpe1xyXG5cdC5uYXZiYXItbmF2LWxpc3R7XHJcblx0XHQmLm5vdGlmeS1zaG93e1xyXG5cdFx0ICBkaXNwbGF5OiBub25lO1xyXG5cdCAgfVxyXG5cdH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xyXG5cdC5zZWN0aW9uLWFib3V0W19uZ2NvbnRlbnQtdGpmLWM0XSwgLnNlY3Rpb24tbm9maWZ5W19uZ2NvbnRlbnQtdGpmLWM0XSwgLnNoc24tbGVhZ3VlW19uZ2NvbnRlbnQtdGpmLWM0XSwgLnNlY3Rpb24tZXZlbnRzW19uZ2NvbnRlbnQtdGpmLWM0XSwgLnNlY3Rpb24tc3BhY2luZ1tfbmdjb250ZW50LXRqZi1jNF0ge1xyXG5cdFx0cGFkZGluZzogMzBweCAwO1xyXG5cdH1cclxuXHJcblx0bmF2e1xyXG5cdFx0d2lkdGg6MTAwJSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHRzZWN0aW9uOmZpcnN0LWNoaWxke1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR9XHJcblx0LmJyZWFkY3Vte1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDE1cHggIWltcG9ydGFudDtcclxuXHR9XHJcblx0LnJvdyAsIC5yb3ctZntcclxuXHRcdG1hcmdpbjoxMHB4IDE1cHggIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdC5kb29kbGV7XHJcblx0XHRkaXNwbGF5Om5vbmU7XHJcblx0fVxyXG5cdFxyXG5cdC5pbWctZmxhZywgLnBhbmVsLWJvZHl7XHJcblx0XHR3aWR0aDoxMDAlICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdC5sZWZ0LXNwYWNle1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAwcHg7XHJcblx0XHRmbG9hdDogbGVmdDtcclxuXHR9XHJcblx0Lm5hdmJhci12ZXJ0aWNhbHtcclxuXHRcdGRpc3BsYXk6bm9uZTtcclxuXHR9XHJcblx0Lm5ld3NsZXR0ZXIge1xyXG5cdFx0LmJ0bntcclxuXHRcdFx0bWFyZ2luOjE1cHggMCAwIDA7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5zbGljay1zbGlkZXIge1xyXG5cdFx0d2lkdGg6IDkwJTt9IFx0ICBcclxuXHQubmF2YmFyLW5hdi1saXN0e1xyXG5cdFx0Ji5ub3RpZnktaGlkZXtcclxuXHRcdFx0ZGlzcGxheTogbm9uZTtcclxuXHRcdH1cclxuXHRcdCYubm90aWZ5LXNob3d7XHJcblx0XHQgIGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0XHRtYXJnaW46IDAgYXV0bztcclxuXHQgIH1cclxuXHR9XHJcblx0LmNvbCwgLmNvbC0xLCAuY29sLTEwLCAuY29sLTExLCAuY29sLTEyLCAuY29sLTIsIC5jb2wtMywgLmNvbC00LCAuY29sLTUsIC5jb2wtNiwgLmNvbC03LCAuY29sLTgsIC5jb2wtOSwgLmNvbC1hdXRvLCAuY29sLWxnLCAuY29sLWxnLTEsIC5jb2wtbGctMTAsIC5jb2wtbGctMTEsIC5jb2wtbGctMTIsIC5jb2wtbGctMiwgLmNvbC1sZy0zLCAuY29sLWxnLTQsIC5jb2wtbGctNSwgLmNvbC1sZy02LCAuY29sLWxnLTcsIC5jb2wtbGctOCwgLmNvbC1sZy05LCAuY29sLWxnLWF1dG8sIC5jb2wtbWQsIC5jb2wtbWQtMSwgLmNvbC1tZC0xMCwgLmNvbC1tZC0xMSwgLmNvbC1tZC0xMiwgLmNvbC1tZC0yLCAuY29sLW1kLTMsIC5jb2wtbWQtNCwgLmNvbC1tZC01LCAuY29sLW1kLTYsIC5jb2wtbWQtNywgLmNvbC1tZC04LCAuY29sLW1kLTksIC5jb2wtbWQtYXV0bywgLmNvbC1zbSwgLmNvbC1zbS0xLCAuY29sLXNtLTEwLCAuY29sLXNtLTExLCAuY29sLXNtLTEyLCAuY29sLXNtLTIsIC5jb2wtc20tMywgLmNvbC1zbS00LCAuY29sLXNtLTUsIC5jb2wtc20tNiwgLmNvbC1zbS03LCAuY29sLXNtLTgsIC5jb2wtc20tOSwgLmNvbC1zbS1hdXRvLCAuY29sLXhsLCAuY29sLXhsLTEsIC5jb2wteGwtMTAsIC5jb2wteGwtMTEsIC5jb2wteGwtMTIsIC5jb2wteGwtMiwgLmNvbC14bC0zLCAuY29sLXhsLTQsIC5jb2wteGwtNSwgLmNvbC14bC02LCAuY29sLXhsLTcsIC5jb2wteGwtOCwgLmNvbC14bC05LCAuY29sLXhsLWF1dG97XHJcblx0cGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuXHR9XHJcblxyXG5cdC5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciBoMSwgLnNlY3Rpb24tYWRtaXNzaW9uIGgxe1xyXG5cdFx0bWFyZ2luLWxlZnQ6MHB4ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdC5wYW5lbHtcclxuXHRcdHBhZGRpbmc6MzBweCAxNXB4ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdC5zaWdue1xyXG5cdFx0Lm1vZGFsLWJvZHl7cGFkZGluZzowcHg7fVxyXG5cdFx0aDZ7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OmJvbGQ7XHJcblx0XHR9XHJcbiAgIH1cclxuXHQubG9naW4tZm9ybSAucm93e1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAtMTVweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHQuYXBwbHktZm9ybSAge1xyXG5cdFx0cGFkZGluZzogMXJlbSAwO1xyXG5cdFx0LnJvd3tcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0LmNvbDpmaXJzdC1jaGlsZHtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbToxNXB4O1xyXG5cdFx0fVxyXG5cdH19XHJcbn0iLCJib2R5IHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6IHVybCguLi9hc3NldHMvaW1hZ2VzL2JvZHkucG5nKSByZXBlYXQgI2YwZjBmMDtcbn1cblxuLmxlZnQtc3BhY2Uge1xuICBwYWRkaW5nLWxlZnQ6IDcwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNsaWNrLXByZXY6YmVmb3JlLCAuc2xpY2stbmV4dDpiZWZvcmUge1xuICBjb2xvcjogIzAwMDtcbn1cblxuKiB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yZW1vdmUtc2Nyb2xsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmZvcm0tY29udHJvbCwgLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi52LWZsZXgge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5saW5lcyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiAycHg7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0b3A6IDA7XG59XG4ubGluZXMuXzEge1xuICBsZWZ0OiAyMCU7XG59XG4ubGluZXMuXzIge1xuICBsZWZ0OiA0MCU7XG59XG4ubGluZXMuXzMge1xuICBsZWZ0OiA2MCU7XG59XG4ubGluZXMuXzQge1xuICBsZWZ0OiA4MCU7XG59XG4ubGluZXMuXzUge1xuICBsZWZ0OiAxMDAlO1xufVxuXG4uYnJlYWRjdW0ge1xuICBtYXJnaW4tdG9wOiAxMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XG59XG4uYnJlYWRjdW0gc3BhbiB7XG4gIG1hcmdpbjogMCAxNXB4O1xufVxuLmJyZWFkY3VtIC5pY29uLWV4LXNtYWxsIHN2ZyB7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG59XG5cbi5jbGVhcmZpeCB7XG4gIGNsZWFyOiBib3RoO1xuICBmbG9hdDogbm9uZTtcbn1cblxuLnRleHQtaGlnaGxpZ2h0ZXIge1xuICBjb2xvcjogI2JmMjcyZDtcbn1cblxuLmJnLWhpZ2hsaWdodGVyIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmJ0biB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDM0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG5oNCB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cblxuaDUge1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbmg2IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbn1cblxuaDEge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRpbmctaGlnaGxpZ2h0IHtcbiAgY29sb3I6ICNmN2EwNWM7XG59XG5cbnN2ZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbjogYXV0bztcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG5zdmc6bm90KDpyb290KSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5pY29uLWJpZyA+IHN2ZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmljb24tbWVkaXVtID4gc3ZnIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmljb24tc21hbGwgPiBzdmcge1xuICB3aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuXG4uaWNvbi1leC1zbWFsbCA+IHN2ZyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi5zZWN0aW9uLWFkbWlzc2lvbiAuc2xpY2stcHJldjpiZWZvcmUsIC5zZWN0aW9uLWFkbWlzc2lvbiAuc2xpY2stbmV4dDpiZWZvcmUge1xuICBjb2xvcjogIzAwMDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiAuc2xpY2stcHJldiwgLnNlY3Rpb24tYWRtaXNzaW9uIC5zbGljay1uZXh0IHtcbiAgYm90dG9tOiAwcHg7XG4gIHRvcDogYXV0bztcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiAuc2xpY2stcHJldiB7XG4gIHJpZ2h0OiAyNXB4O1xufVxuXG4uc2hzbi1sZWFndWUgLnNsaWNrLXNsaWRlciAuc2xpY2stc2xpZGUge1xuICBtYXJnaW46IDAgNTBweDtcbn1cbi5zaHNuLWxlYWd1ZSAuc2xpY2stcHJldiwgLnNoc24tbGVhZ3VlIC5zbGljay1uZXh0IHtcbiAgYm90dG9tOiAtMjVweDtcbiAgdG9wOiBhdXRvO1xuICByaWdodDogMDtcbiAgbGVmdDogYXV0byAhaW1wb3J0YW50O1xufVxuLnNoc24tbGVhZ3VlIC5zbGljay1wcmV2OmJlZm9yZSwgLnNoc24tbGVhZ3VlIC5zbGljay1uZXh0OmJlZm9yZSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnNoc24tbGVhZ3VlIC5zbGljay1wcmV2IHtcbiAgcmlnaHQ6IDI1cHg7XG59XG5cbi5zbGljay1zbGlkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLnNsaWNrLXNsaWRlciAuc2xpY2stc2xpZGUge1xuICBtYXJnaW46IDAgMTVweDtcbn1cblxuLnJlY2VudC1hcnRpY2xlIC5zbGljay1wcmV2IHtcbiAgcmlnaHQ6IDYwcHggIWltcG9ydGFudDtcbn1cbi5yZWNlbnQtYXJ0aWNsZSAuc2xpY2stcHJldiwgLnJlY2VudC1hcnRpY2xlIC5zbGljay1uZXh0IHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbiAgYm90dG9tOiBhdXRvO1xuICB0b3A6IC0yNXB4O1xuICByaWdodDogMTVweDtcbiAgbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggMjVweDtcbn1cbi5yZWNlbnQtYXJ0aWNsZSAuc2xpY2stcHJldjpiZWZvcmUsIC5yZWNlbnQtYXJ0aWNsZSAuc2xpY2stbmV4dDpiZWZvcmUge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmlubmVyLWJhbm5lciB7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pbm5lci1iYW5uZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaW5uZXItYmFubmVyIC5wYWdlLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDYwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDcwcHggMDtcbiAgY29sb3I6ICMyMTRmN2E7XG59XG5cbnRleHRhcmVhLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYWluLWJhbm5lciAuY2Fyb3VzZWwtY2FwdGlvbiBoMyB7XG4gIGNvbG9yOiAjYmYyNzJkO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xufVxuLm1haW4tYmFubmVyIC5jYXJvdXNlbC1jYXB0aW9uIHAge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbnVsLmxpc3Qge1xuICBtYXJnaW4tdG9wOiAzNXB4O1xufVxudWwubGlzdCBsaSB7XG4gIHBhZGRpbmc6IDAgMCAyMHB4IDIwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmUgb3V0c2lkZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjZmZmO1xufVxudWwubGlzdCBsaTo6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uc3ViLWhlYWRlciAucGFuZWwge1xuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuLnN1Yi1oZWFkZXIgLmRvb2RsZSB7XG4gIGZvbnQtc2l6ZTogNzJweDtcbiAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcbiAgY29sb3I6ICNmMGYwZjA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBsaW5lLWhlaWdodDogOTBweDtcbn1cblxuLnNsaWNrLWxpc3Qge1xuICBwYWRkaW5nOiA1MHB4IDBweCAhaW1wb3J0YW50O1xufVxuXG4ucmVjZW50LWFydGljbGUgLnNsaWNrLXByZXYsIC5yZWNlbnQtYXJ0aWNsZSAuc2xpY2stbmV4dCB7XG4gIHRvcDogLTEwMHB4O1xufVxuXG4uc2xpY2stc2xpZGVyIC5zbGljay1zbGlkZSB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLm1haW4tcGFnZSB7XG4gIGZsb2F0OiBub25lO1xufVxuLm1haW4tcGFnZSAuZmx5aW5nLWltZyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5mbHlpbmctaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTUwcHg7XG4gIHotaW5kZXg6IC0xO1xuICBvcGFjaXR5OiAwLjU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwcHg7XG59XG4uZmx5aW5nLWltZy5yaWdodC1mbHkge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy9mbHlpbmcvcmlnaHQucG5nKSByZXBlYXQteTtcbiAgcmlnaHQ6IDBweDtcbn1cbi5mbHlpbmctaW1nLmxlZnQtZmx5IHtcbiAgYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvZmx5aW5nL2xlZnQucG5nKSByZXBlYXQteTtcbiAgbGVmdDogNzBweDtcbn1cblxuLmFwcGx5LWZvcm0gLnJvdyB7XG4gIG1hcmdpbjogMCAwIDE1cHggIWltcG9ydGFudDtcbn1cblxuLnNpZ24gaDYge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAubmF2YmFyLW5hdi1saXN0Lm5vdGlmeS1zaG93IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnNlY3Rpb24tYWJvdXRbX25nY29udGVudC10amYtYzRdLCAuc2VjdGlvbi1ub2ZpZnlbX25nY29udGVudC10amYtYzRdLCAuc2hzbi1sZWFndWVbX25nY29udGVudC10amYtYzRdLCAuc2VjdGlvbi1ldmVudHNbX25nY29udGVudC10amYtYzRdLCAuc2VjdGlvbi1zcGFjaW5nW19uZ2NvbnRlbnQtdGpmLWM0XSB7XG4gICAgcGFkZGluZzogMzBweCAwO1xuICB9XG5cbiAgbmF2IHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG5cbiAgc2VjdGlvbjpmaXJzdC1jaGlsZCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5icmVhZGN1bSB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5yb3csIC5yb3ctZiB7XG4gICAgbWFyZ2luOiAxMHB4IDE1cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kb29kbGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuaW1nLWZsYWcsIC5wYW5lbC1ib2R5IHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmxlZnQtc3BhY2Uge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG5cbiAgLm5hdmJhci12ZXJ0aWNhbCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5uZXdzbGV0dGVyIC5idG4ge1xuICAgIG1hcmdpbjogMTVweCAwIDAgMDtcbiAgfVxuXG4gIC5zbGljay1zbGlkZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cblxuICAubmF2YmFyLW5hdi1saXN0Lm5vdGlmeS1oaWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5uYXZiYXItbmF2LWxpc3Qubm90aWZ5LXNob3cge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuICAuY29sLCAuY29sLTEsIC5jb2wtMTAsIC5jb2wtMTEsIC5jb2wtMTIsIC5jb2wtMiwgLmNvbC0zLCAuY29sLTQsIC5jb2wtNSwgLmNvbC02LCAuY29sLTcsIC5jb2wtOCwgLmNvbC05LCAuY29sLWF1dG8sIC5jb2wtbGcsIC5jb2wtbGctMSwgLmNvbC1sZy0xMCwgLmNvbC1sZy0xMSwgLmNvbC1sZy0xMiwgLmNvbC1sZy0yLCAuY29sLWxnLTMsIC5jb2wtbGctNCwgLmNvbC1sZy01LCAuY29sLWxnLTYsIC5jb2wtbGctNywgLmNvbC1sZy04LCAuY29sLWxnLTksIC5jb2wtbGctYXV0bywgLmNvbC1tZCwgLmNvbC1tZC0xLCAuY29sLW1kLTEwLCAuY29sLW1kLTExLCAuY29sLW1kLTEyLCAuY29sLW1kLTIsIC5jb2wtbWQtMywgLmNvbC1tZC00LCAuY29sLW1kLTUsIC5jb2wtbWQtNiwgLmNvbC1tZC03LCAuY29sLW1kLTgsIC5jb2wtbWQtOSwgLmNvbC1tZC1hdXRvLCAuY29sLXNtLCAuY29sLXNtLTEsIC5jb2wtc20tMTAsIC5jb2wtc20tMTEsIC5jb2wtc20tMTIsIC5jb2wtc20tMiwgLmNvbC1zbS0zLCAuY29sLXNtLTQsIC5jb2wtc20tNSwgLmNvbC1zbS02LCAuY29sLXNtLTcsIC5jb2wtc20tOCwgLmNvbC1zbS05LCAuY29sLXNtLWF1dG8sIC5jb2wteGwsIC5jb2wteGwtMSwgLmNvbC14bC0xMCwgLmNvbC14bC0xMSwgLmNvbC14bC0xMiwgLmNvbC14bC0yLCAuY29sLXhsLTMsIC5jb2wteGwtNCwgLmNvbC14bC01LCAuY29sLXhsLTYsIC5jb2wteGwtNywgLmNvbC14bC04LCAuY29sLXhsLTksIC5jb2wteGwtYXV0byB7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIH1cblxuICAuc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgaDEsIC5zZWN0aW9uLWFkbWlzc2lvbiBoMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBhbmVsIHtcbiAgICBwYWRkaW5nOiAzMHB4IDE1cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5zaWduIC5tb2RhbC1ib2R5IHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cbiAgLnNpZ24gaDYge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLmxvZ2luLWZvcm0gLnJvdyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTVweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTVweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFwcGx5LWZvcm0ge1xuICAgIHBhZGRpbmc6IDFyZW0gMDtcbiAgfVxuICAuYXBwbHktZm9ybSAucm93IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuYXBwbHktZm9ybSAucm93IC5jb2w6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! aos */
    "./node_modules/aos/dist/aos.js");
    /* harmony import */


    var aos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router) {
        var _this2 = this;

        _classCallCheck(this, AppComponent);

        this.router = router;
        this.title = 'shs';

        this.knowMore = function (text) {
          if (text == 'culture') {
            this.router.navigateByUrl('/StudyCulture', {
              skipLocationChange: true
            });
          } else if (text == 'edge') {
            this.router.navigateByUrl('/shsnEdge', {
              skipLocationChange: true
            });
          }
        };

        this.router.events.subscribe(function (routerEvent) {
          if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
            if (routerEvent.url === '/') {
              _this2.router.navigate(['/Home'], {
                skipLocationChange: true
              });
            }
          }

          if (_this2.router.url === '/Home') {
            document.body.classList.add('main-page');
          } else {
            document.body.classList.remove('main-page');
          }
        });
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          aos__WEBPACK_IMPORTED_MODULE_3__["init"]();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-slick-carousel */
    "./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js");
    /* harmony import */


    var _space_pipe_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./space.pipe.module */
    "./src/app/space.pipe.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_8__["SlickCarouselModule"], _space_pipe_module__WEBPACK_IMPORTED_MODULE_9__["CreateSpacePipe"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/apply/apply.component.scss":
  /*!********************************************!*\
    !*** ./src/app/apply/apply.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppApplyApplyComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".section-inner-subheader .row-f, .section-inner-subheader .row {\n  margin: 70px 0 100px;\n  position: relative;\n}\n.section-inner-subheader .inner-info {\n  background: #fff;\n}\n.section-inner-subheader .img-flag {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 40%;\n}\n.section-inner-subheader .panel {\n  background: #fff;\n  padding: 50px;\n  padding-bottom: 0px;\n}\n.section-inner-subheader .panel .panel-body {\n  width: 50%;\n}\n.section-inner-subheader .panel.story-info {\n  background: #bf272d;\n  color: #fff;\n  position: relative;\n}\n.section-inner-subheader .panel.story-info .flying-plane {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n.section-inner-subheader .panel.story-info .flying-plane svg {\n  fill: #fff;\n  transform: rotate(90deg);\n  margin-top: 5px;\n}\n.section-inner-subheader .panel.story-info::after {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  top: 50px;\n  width: 3px;\n  height: 20px;\n  background: #fff;\n}\n.section-inner-subheader h1 {\n  margin-left: 65px;\n  margin-bottom: 35px;\n}\n.section-inner-subheader h2 {\n  position: relative;\n  padding-bottom: 5px;\n  line-height: 60px;\n  margin-bottom: 30px;\n}\n.section-inner-subheader h2::before {\n  content: \" \";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 50px;\n  height: 2px;\n  background: #f0f0f0;\n}\n.section-inner-subheader .img-flag {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 50%;\n}\n.section-inner-subheader ul.list {\n  margin: 0px;\n}\n.section-inner-subheader ul.list li {\n  color: #000;\n}\n.section-inner-subheader ul.list li::before {\n  background: #bf272d;\n}\n.more-info {\n  float: none;\n  clear: both;\n}\n.more-info p {\n  margin: 50px 0 70px 75px;\n}\n.applycation-rules .btn {\n  padding: 15px 30px;\n  background: #bf272d;\n  font-family: \"Lora\", serif;\n  margin: 0 auto;\n  font-size: 24px;\n  display: block;\n}\n@media (max-width: 576px) {\n  .section-study-culture .row-f, .section-study-culture .row, .section-study-culture h1 {\n    margin-left: 0px;\n  }\n  .section-study-culture .breadcum {\n    margin-left: 15px;\n  }\n  .section-study-culture .img-flag {\n    padding: 15px;\n    position: static;\n    width: 100%;\n  }\n  .section-study-culture .panel-body {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbHkvRDpcXHNocy9zcmNcXGFwcFxcYXBwbHlcXGFwcGx5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHBseS9hcHBseS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLG9CQUFBO0VBQ0Esa0JBQUE7QUNBRjtBREVDO0VBQ08sZ0JBQUE7QUNBUjtBREVDO0VBQ0Msa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNBRjtBREVDO0VBQ0MsZ0JBQUE7RUFDTSxhQUFBO0VBQ0EsbUJBQUE7QUNBUjtBRENFO0VBQ0MsVUFBQTtBQ0NIO0FEQ0U7RUFDQyxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NIO0FEQUc7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDRUo7QURESTtFQUNDLFVBQUE7RUFDQSx3QkFBQTtFQUNHLGVBQUE7QUNHUjtBREFHO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDRUo7QURHQztFQUNDLGlCQUFBO0VBQ0EsbUJBQUE7QUNERjtBREdDO0VBQ0Msa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNERjtBREVFO0VBQ0MsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDQUg7QURHQztFQUNDLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FDREY7QURHQztFQUNDLFdBQUE7QUNERjtBREVFO0VBQ0MsV0FBQTtBQ0FIO0FEQ0c7RUFDQyxtQkFBQTtBQ0NKO0FES0E7RUFDQyxXQUFBO0VBQ0EsV0FBQTtBQ0ZEO0FER0M7RUFDQyx3QkFBQTtBQ0RGO0FETUM7RUFDTyxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNIUjtBRE9BO0VBRUU7SUFDQyxnQkFBQTtFQ0xEO0VET0Q7SUFDQyxpQkFBQTtFQ0xBO0VET0Q7SUFDQyxhQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0VDTEE7RURPRDtJQUNDLFdBQUE7RUNMQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwbHkvYXBwbHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1pbm5lci1zdWJoZWFkZXJ7XHJcblx0LnJvdy1mLCAucm93e1xyXG5cdFx0bWFyZ2luOjcwcHggMCAxMDBweDsgXHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cdC5pbm5lci1pbmZve1xyXG4gICAgICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgIH1cclxuXHQuaW1nLWZsYWd7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRyaWdodDowO1xyXG5cdFx0dG9wOjA7XHJcblx0XHR3aWR0aDogNDAlO1xyXG5cdH1cclxuXHQucGFuZWwge1xyXG5cdFx0YmFja2dyb3VuZDojZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6NTBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTowcHg7XHJcblx0XHQucGFuZWwtYm9keXtcclxuXHRcdFx0d2lkdGg6NTAlO1xyXG5cdFx0fVxyXG5cdFx0Ji5zdG9yeS1pbmZve1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiNiZjI3MmQ7XHJcblx0XHRcdGNvbG9yOiNmZmY7XHJcblx0XHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0XHQuZmx5aW5nLXBsYW5le1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRsZWZ0OjBweDtcclxuXHRcdFx0XHR0b3A6MHB4O1xyXG5cdFx0XHRcdHN2Z3tcclxuXHRcdFx0XHRcdGZpbGw6ICNmZmY7XHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICBcdFx0XHRcdG1hcmdpbi10b3A6IDVweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Jjo6YWZ0ZXJ7XHJcblx0XHRcdFx0Y29udGVudDogXCJcIjtcclxuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0bGVmdDowcHg7XHJcblx0XHRcdFx0dG9wOjUwcHg7XHJcblx0XHRcdFx0d2lkdGg6IDNweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDIwcHg7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cdGgxe1xyXG5cdFx0bWFyZ2luLWxlZnQ6NjVweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDM1cHg7XHJcblx0fVxyXG5cdGgye1xyXG5cdFx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTo1cHg7XHJcblx0XHRsaW5lLWhlaWdodDogNjBweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblx0XHQmOjpiZWZvcmV7XHJcblx0XHRcdGNvbnRlbnQ6XCIgXCI7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0Ym90dG9tOjA7XHJcblx0XHRcdGxlZnQ6MDtcclxuXHRcdFx0d2lkdGg6NTBweDtcclxuXHRcdFx0aGVpZ2h0OjJweDtcclxuXHRcdFx0YmFja2dyb3VuZDojZjBmMGYwO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQuaW1nLWZsYWd7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRyaWdodDowO1xyXG5cdFx0dG9wOjA7XHJcblx0XHR3aWR0aDogNTAlO1xyXG5cdH1cclxuXHR1bC5saXN0e1xyXG5cdFx0bWFyZ2luOjBweDtcclxuXHRcdGxpe1xyXG5cdFx0XHRjb2xvcjojMDAwO1xyXG5cdFx0XHQmOjpiZWZvcmV7XHJcblx0XHRcdFx0YmFja2dyb3VuZDojYmYyNzJkO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4ubW9yZS1pbmZve1xyXG5cdGZsb2F0Om5vbmU7XHJcblx0Y2xlYXI6Ym90aDtcclxuXHRwe1xyXG5cdFx0bWFyZ2luOjUwcHggMCA3MHB4IDc1cHggO1xyXG5cdH1cclxufVxyXG5cclxuLmFwcGx5Y2F0aW9uLXJ1bGVze1xyXG5cdC5idG57XHJcbiAgICAgICAgcGFkZGluZzoxNXB4IDMwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDojYmYyNzJkO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XHJcbiAgICAgICAgbWFyZ2luOjAgYXV0bztcclxuICAgICAgICBmb250LXNpemU6MjRweDtcclxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xyXG5cdC5zZWN0aW9uLXN0dWR5LWN1bHR1cmV7XHJcblx0XHQucm93LWYsIC5yb3csIGgxe1xyXG5cdFx0XHRtYXJnaW4tbGVmdDowcHg7IFxyXG5cdH1cclxuXHQuYnJlYWRjdW17XHJcblx0XHRtYXJnaW4tbGVmdDoxNXB4O1xyXG5cdH1cclxuXHQuaW1nLWZsYWd7XHJcblx0XHRwYWRkaW5nOjE1cHg7XHJcblx0XHRwb3NpdGlvbjogc3RhdGljO1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHR9XHJcblx0LnBhbmVsLWJvZHl7XHJcblx0XHR3aWR0aDoxMDAlO1xyXG5cdH1cclxufVxyXG59IiwiLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5yb3ctZiwgLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5yb3cge1xuICBtYXJnaW46IDcwcHggMCAxMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5pbm5lci1pbmZvIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW1nLWZsYWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiA0MCU7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLnBhbmVsIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAucGFuZWwgLnBhbmVsLWJvZHkge1xuICB3aWR0aDogNTAlO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5wYW5lbC5zdG9yeS1pbmZvIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAucGFuZWwuc3RvcnktaW5mbyAuZmx5aW5nLXBsYW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5wYW5lbC5zdG9yeS1pbmZvIC5mbHlpbmctcGxhbmUgc3ZnIHtcbiAgZmlsbDogI2ZmZjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLnBhbmVsLnN0b3J5LWluZm86OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogNTBweDtcbiAgd2lkdGg6IDNweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIGgxIHtcbiAgbWFyZ2luLWxlZnQ6IDY1cHg7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgaDIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIGgyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW1nLWZsYWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiA1MCU7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgdWwubGlzdCB7XG4gIG1hcmdpbjogMHB4O1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIHVsLmxpc3QgbGkge1xuICBjb2xvcjogIzAwMDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciB1bC5saXN0IGxpOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xufVxuXG4ubW9yZS1pbmZvIHtcbiAgZmxvYXQ6IG5vbmU7XG4gIGNsZWFyOiBib3RoO1xufVxuLm1vcmUtaW5mbyBwIHtcbiAgbWFyZ2luOiA1MHB4IDAgNzBweCA3NXB4O1xufVxuXG4uYXBwbHljYXRpb24tcnVsZXMgLmJ0biB7XG4gIHBhZGRpbmc6IDE1cHggMzBweDtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbiAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5yb3ctZiwgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucm93LCAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIGgxIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG4gIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLmJyZWFkY3VtIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgfVxuICAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5pbWctZmxhZyB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnBhbmVsLWJvZHkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/apply/apply.component.ts":
  /*!******************************************!*\
    !*** ./src/app/apply/apply.component.ts ***!
    \******************************************/

  /*! exports provided: ApplyComponent */

  /***/
  function srcAppApplyApplyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplyComponent", function () {
      return ApplyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ApplyComponent = /*#__PURE__*/function () {
      function ApplyComponent() {
        _classCallCheck(this, ApplyComponent);

        this.moreInfo = [{
          info: 'Please fill out and submit  Inquiry Form on our website'
        }, {
          info: 'Visit our school campus or Contact our Admissions office'
        }, {
          info: 'Complete and submit  Application for Admission Form when you visit our school.'
        }, {
          info: 'Once you have completed  application, we will schedule a brief parent interview and an assessment for your child '
        }, {
          info: 'Once accepted, we will complete  admissions and payment procedure'
        }];
      }

      _createClass(ApplyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ApplyComponent;
    }();

    ApplyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-apply',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./apply.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/apply/apply.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./apply.component.scss */
      "./src/app/apply/apply.component.scss"))["default"]]
    })], ApplyComponent);
    /***/
  },

  /***/
  "./src/app/blob/blob.component.scss":
  /*!******************************************!*\
    !*** ./src/app/blob/blob.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppBlobBlobComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".section-inner-subheader .row-f, .section-inner-subheader .row {\n  margin: 70px 0 100px;\n  position: relative;\n}\n.section-inner-subheader .img-flag {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 40%;\n}\n.section-inner-subheader .panel {\n  background: #fff;\n  padding: 50px;\n}\n.section-inner-subheader .panel p {\n  font-size: 72px;\n  color: #f0f0f0;\n  font-weight: bold;\n}\n.section-inner-subheader .panel .panel-body {\n  width: 50%;\n}\n.section-inner-subheader h1 {\n  margin-left: 65px;\n  margin-bottom: 35px;\n}\n.section-inner-subheader h6 {\n  margin-left: 65px;\n}\n.section-inner-subheader .img-flag {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 50%;\n}\n.section-inner-subheader .inner-contact-info {\n  background: #fff;\n  padding: 50px;\n}\n.section-inner-subheader .inner-contact-info .row {\n  margin: 0px;\n}\n.section-inner-subheader .inner-contact-info p {\n  color: #000;\n  font-size: 14px;\n  font-weight: normal;\n}\n.section-inner-subheader .inner-contact-info p a {\n  color: #000;\n}\n.section-inner-subheader .inner-contact-info .highlighted {\n  color: #bf272d;\n}\n.section-inner-subheader .inner-contact-info .social-net {\n  float: right;\n}\n.section-inner-subheader .inner-contact-info .social-net li {\n  float: left;\n  margin-right: 15px;\n}\n.section-inner-subheader .inner-contact-info .social-net li svg {\n  fill: #bf272d;\n}\n.blob-article {\n  background: #fff;\n  padding: 70px 0px;\n}\n.blob-article h2 {\n  margin-bottom: 70px;\n}\n.blob-article .btn-wrapper {\n  position: relative;\n}\n.blob-article .btn-wrapper .div-btn {\n  background: #fff;\n  padding-left: 20px;\n  float: right;\n  position: relative;\n  z-index: 1;\n}\n.blob-article .btn-wrapper .div-btn .btn {\n  background: #bf272d;\n  padding: 10px 20px;\n}\n.blob-article .btn-wrapper::after {\n  content: \"\";\n  position: absolute;\n  top: 21px;\n  left: 0px;\n  height: 2px;\n  background: #000;\n  width: 100%;\n}\n.recent-article .container {\n  background: #bf272d;\n  margin: 70px auto;\n}\n.recent-article .container h6 {\n  color: #fff;\n  padding-top: 20px;\n}\n.recent-article .container h2 {\n  position: relative;\n  padding: 30px 0 0;\n}\n.recent-article .container h2 span {\n  background: #bf272d;\n  padding-right: 30px;\n  z-index: 2;\n  position: relative;\n  display: inline-block;\n  color: #fff;\n}\n.recent-article .container h2::after {\n  position: absolute;\n  top: 50px;\n  left: 0px;\n  height: 1px;\n  width: 100%;\n  background: #fff;\n  content: \"\";\n}\n.recent-article .container .panel {\n  padding: 30px 0;\n  color: #fff;\n  font-family: \"Lora\", serif;\n}\n.recent-article .container .panel h3 {\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n  border-bottom: 1px solid #fff;\n}\n.recent-article .container .panel .btn {\n  border: 2px solid #fff;\n  background: none !important;\n}\n@media (max-width: 576px) {\n  .row-f, .row, h1 {\n    margin-left: 0px;\n  }\n\n  .breadcum {\n    margin-left: 15px;\n  }\n\n  .img-flag {\n    padding: 15px;\n    position: static;\n    width: 100%;\n  }\n\n  .panel-body {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvYi9EOlxcc2hzL3NyY1xcYXBwXFxibG9iXFxibG9iLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ibG9iL2Jsb2IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQyxvQkFBQTtFQUNBLGtCQUFBO0FDQUY7QURFQztFQUNDLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FDQUY7QURFQztFQUNDLGdCQUFBO0VBQ0EsYUFBQTtBQ0FGO0FEQ0U7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQ0g7QURDRTtFQUNDLFVBQUE7QUNDSDtBREVDO0VBQ0MsaUJBQUE7RUFDQSxtQkFBQTtBQ0FGO0FERUM7RUFDQyxpQkFBQTtBQ0FGO0FER0M7RUFDQyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQ0RGO0FER0M7RUFDQyxnQkFBQTtFQUNBLGFBQUE7QUNERjtBREVFO0VBQ0MsV0FBQTtBQ0FIO0FERUU7RUFDRyxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQUw7QURFSztFQUNDLFdBQUE7QUNBTjtBRElFO0VBQ0MsY0FBQTtBQ0ZIO0FES0U7RUFDQyxZQUFBO0FDSEg7QURJRztFQUNDLFdBQUE7RUFDQSxrQkFBQTtBQ0ZKO0FER0k7RUFDQyxhQUFBO0FDREw7QURPQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNKSjtBREtJO0VBQ0ksbUJBQUE7QUNIUjtBREtDO0VBQ0Msa0JBQUE7QUNIRjtBRElFO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNHLFVBQUE7QUNGTjtBREdHO0VBQ0MsbUJBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUU7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNGSDtBRFVJO0VBQ0ksbUJBQUE7RUFDTixpQkFBQTtBQ1BGO0FEUUU7RUFDQyxXQUFBO0VBQ0EsaUJBQUE7QUNOSDtBRFFRO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ05aO0FET1k7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDTGhCO0FET1k7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNMaEI7QURRUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUNOWjtBRE9ZO0VBQ0ksb0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FDTGhCO0FET0c7RUFDQyxzQkFBQTtFQUNBLDJCQUFBO0FDTEo7QURZQTtFQUNFO0lBQ0MsZ0JBQUE7RUNURDs7RURXRDtJQUNDLGlCQUFBO0VDUkE7O0VEVUQ7SUFDQyxhQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0VDUEE7O0VEU0Q7SUFDQyxXQUFBO0VDTkE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Jsb2IvYmxvYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlcntcclxuXHQucm93LWYsIC5yb3d7XHJcblx0XHRtYXJnaW46NzBweCAwIDEwMHB4OyBcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcblx0LmltZy1mbGFne1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0cmlnaHQ6MDtcclxuXHRcdHRvcDowO1xyXG5cdFx0d2lkdGg6IDQwJTtcclxuXHR9XHJcblx0LnBhbmVsIHtcclxuXHRcdGJhY2tncm91bmQ6I2ZmZjtcclxuXHRcdHBhZGRpbmc6NTBweDtcclxuXHRcdHB7XHJcblx0XHRcdGZvbnQtc2l6ZTo3MnB4O1xyXG5cdFx0XHRjb2xvcjojZjBmMGYwO1xyXG5cdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdH1cclxuXHRcdC5wYW5lbC1ib2R5e1xyXG5cdFx0XHR3aWR0aDo1MCU7XHJcblx0XHR9XHJcblx0fVxyXG5cdGgxe1xyXG5cdFx0bWFyZ2luLWxlZnQ6NjVweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDM1cHg7XHJcblx0fVxyXG5cdGg2e1xyXG5cdFx0bWFyZ2luLWxlZnQ6NjVweDtcclxuXHR9XHJcblxyXG5cdC5pbWctZmxhZ3tcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHJpZ2h0OjA7XHJcblx0XHR0b3A6MDtcclxuXHRcdHdpZHRoOiA1MCU7XHJcblx0fVxyXG5cdC5pbm5lci1jb250YWN0LWluZm97XHJcblx0XHRiYWNrZ3JvdW5kOiNmZmY7XHJcblx0XHRwYWRkaW5nOiA1MHB4OyBcclxuXHRcdC5yb3d7XHJcblx0XHRcdG1hcmdpbjowcHg7XHRcclxuXHRcdH1cclxuXHRcdHB7XHJcblx0XHQgICBjb2xvcjojMDAwO1xyXG5cdFx0ICAgZm9udC1zaXplOjE0cHg7IFxyXG5cdFx0ICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG5cdFx0ICAgXHJcblx0XHQgICBhe1xyXG5cdFx0XHQgICBjb2xvcjojMDAwO1xyXG5cclxuXHRcdCAgIH1cclxuXHRcdH1cclxuXHRcdC5oaWdobGlnaHRlZHtcclxuXHRcdFx0Y29sb3I6I2JmMjcyZDtcclxuXHRcdH1cclxuXHJcblx0XHQuc29jaWFsLW5ldHtcclxuXHRcdFx0ZmxvYXQ6cmlnaHQ7XHJcblx0XHRcdGxpe1xyXG5cdFx0XHRcdGZsb2F0OmxlZnQ7XHJcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OjE1cHg7XHJcblx0XHRcdFx0c3Zne1xyXG5cdFx0XHRcdFx0ZmlsbDojYmYyNzJkO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4uYmxvYi1hcnRpY2xle1xyXG4gICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgcGFkZGluZzo3MHB4IDBweDtcclxuICAgIGgye1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206NzBweDtcclxuXHR9XHJcblx0LmJ0bi13cmFwcGVye1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0LmRpdi1idG57XHJcblx0XHRcdGJhY2tncm91bmQ6I2ZmZjtcclxuXHRcdFx0cGFkZGluZy1sZWZ0OjIwcHg7XHJcblx0XHRcdGZsb2F0OnJpZ2h0O1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBcdFx0ei1pbmRleDogMTtcclxuXHRcdFx0LmJ0bntcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiNiZjI3MmQ7XHJcblx0XHRcdFx0cGFkZGluZzoxMHB4IDIwcHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdCY6OmFmdGVye1xyXG5cdFx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHRvcDoyMXB4O1xyXG5cdFx0XHRsZWZ0OjBweDtcclxuXHRcdFx0aGVpZ2h0OjJweDtcclxuXHRcdFx0YmFja2dyb3VuZDojMDAwO1xyXG5cdFx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4ucmVjZW50LWFydGljbGV7XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIGJhY2tncm91bmQ6I2JmMjcyZDtcclxuXHRcdG1hcmdpbjo3MHB4IGF1dG87XHJcblx0XHRoNntcclxuXHRcdFx0Y29sb3I6I2ZmZjtcclxuXHRcdFx0cGFkZGluZy10b3A6MjBweDtcclxuXHRcdH1cclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzMHB4IDAgMDtcclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6I2JmMjcyZDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MzBweDtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6OmFmdGVye1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOjUwcHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OjBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDoxcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucGFuZWx7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MzBweCAwO1xyXG4gICAgICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTpcIkxvcmFcIiwgc2VyaWY7XHJcbiAgICAgICAgICAgIGgze1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206MzBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MzBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNmZmY7XHJcblx0XHRcdH1cclxuXHRcdFx0LmJ0bntcclxuXHRcdFx0XHRib3JkZXI6MnB4IHNvbGlkICNmZmY7XHJcblx0XHRcdFx0YmFja2dyb3VuZDpub25lICFpbXBvcnRhbnQ7XHJcblx0XHRcdH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xyXG5cdFx0LnJvdy1mLCAucm93LCBoMXtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6MHB4OyBcclxuXHR9XHJcblx0LmJyZWFkY3Vte1xyXG5cdFx0bWFyZ2luLWxlZnQ6MTVweDtcclxuXHR9XHJcblx0LmltZy1mbGFne1xyXG5cdFx0cGFkZGluZzoxNXB4O1xyXG5cdFx0cG9zaXRpb246IHN0YXRpYztcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0fVxyXG5cdC5wYW5lbC1ib2R5e1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHR9XHJcblxyXG59IiwiLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5yb3ctZiwgLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5yb3cge1xuICBtYXJnaW46IDcwcHggMCAxMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5pbWctZmxhZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDQwJTtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAucGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiA1MHB4O1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5wYW5lbCBwIHtcbiAgZm9udC1zaXplOiA3MnB4O1xuICBjb2xvcjogI2YwZjBmMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLnBhbmVsIC5wYW5lbC1ib2R5IHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciBoMSB7XG4gIG1hcmdpbi1sZWZ0OiA2NXB4O1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIGg2IHtcbiAgbWFyZ2luLWxlZnQ6IDY1cHg7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmltZy1mbGFnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogNTAlO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5pbm5lci1jb250YWN0LWluZm8ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiA1MHB4O1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5pbm5lci1jb250YWN0LWluZm8gLnJvdyB7XG4gIG1hcmdpbjogMHB4O1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5pbm5lci1jb250YWN0LWluZm8gcCB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyBwIGEge1xuICBjb2xvcjogIzAwMDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItY29udGFjdC1pbmZvIC5oaWdobGlnaHRlZCB7XG4gIGNvbG9yOiAjYmYyNzJkO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5pbm5lci1jb250YWN0LWluZm8gLnNvY2lhbC1uZXQge1xuICBmbG9hdDogcmlnaHQ7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuc29jaWFsLW5ldCBsaSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuc29jaWFsLW5ldCBsaSBzdmcge1xuICBmaWxsOiAjYmYyNzJkO1xufVxuXG4uYmxvYi1hcnRpY2xlIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogNzBweCAwcHg7XG59XG4uYmxvYi1hcnRpY2xlIGgyIHtcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcbn1cbi5ibG9iLWFydGljbGUgLmJ0bi13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJsb2ItYXJ0aWNsZSAuYnRuLXdyYXBwZXIgLmRpdi1idG4ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuLmJsb2ItYXJ0aWNsZSAuYnRuLXdyYXBwZXIgLmRpdi1idG4gLmJ0biB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cbi5ibG9iLWFydGljbGUgLmJ0bi13cmFwcGVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMXB4O1xuICBsZWZ0OiAwcHg7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnJlY2VudC1hcnRpY2xlIC5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xuICBtYXJnaW46IDcwcHggYXV0bztcbn1cbi5yZWNlbnQtYXJ0aWNsZSAuY29udGFpbmVyIGg2IHtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLnJlY2VudC1hcnRpY2xlIC5jb250YWluZXIgaDIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDMwcHggMCAwO1xufVxuLnJlY2VudC1hcnRpY2xlIC5jb250YWluZXIgaDIgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIHotaW5kZXg6IDI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5yZWNlbnQtYXJ0aWNsZSAuY29udGFpbmVyIGgyOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MHB4O1xuICBsZWZ0OiAwcHg7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29udGVudDogXCJcIjtcbn1cbi5yZWNlbnQtYXJ0aWNsZSAuY29udGFpbmVyIC5wYW5lbCB7XG4gIHBhZGRpbmc6IDMwcHggMDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XG59XG4ucmVjZW50LWFydGljbGUgLmNvbnRhaW5lciAucGFuZWwgaDMge1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG59XG4ucmVjZW50LWFydGljbGUgLmNvbnRhaW5lciAucGFuZWwgLmJ0biB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5yb3ctZiwgLnJvdywgaDEge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIH1cblxuICAuYnJlYWRjdW0ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB9XG5cbiAgLmltZy1mbGFnIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAucGFuZWwtYm9keSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/blob/blob.component.ts":
  /*!****************************************!*\
    !*** ./src/app/blob/blob.component.ts ***!
    \****************************************/

  /*! exports provided: BlobComponent */

  /***/
  function srcAppBlobBlobComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlobComponent", function () {
      return BlobComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BlobComponent = /*#__PURE__*/function () {
      function BlobComponent() {
        _classCallCheck(this, BlobComponent);

        this.admission = [{
          date: '2nd May 2020',
          title: "World for all\n      and all for \n      world!",
          description: "Just like any involved parent, our Director, Sinduri Reddy, began a quest to find a school that would nurture her growing preschoolers in  best way possible.\n      After putting toger  best of schools and undergoing immense research, re were still certain factors like cleanliness, Ethos, Curriculum Focus, distance, etc. that made it impossible for her to choose. \n      So, like a popular thought,\u201D when you can\u2019t find someone to do exactly what you, get up and do it yourself!\u201D That\u2019s exactly what she did! \n      Her endeavours have snowballed into SHS VIDYALAYA .\n      "
        }, {
          date: '2nd May 2020',
          title: "Gaming\n      Addiction or\n      Enthusiasm",
          description: "Just like any involved parent, our Director, Sinduri Reddy, began a quest to find a school that would nurture her growing preschoolers in  best way possible.\n      After putting toger  best of schools and undergoing immense research, re were still certain factors like cleanliness, Ethos, Curriculum Focus, distance, etc. that made it impossible for her to choose. \n      So, like a popular thought,\u201D when you can\u2019t find someone to do exactly what you, get up and do it yourself!\u201D That\u2019s exactly what she did! \n      Her endeavours have snowballed into SHS VIDYALAYA .\n      "
        }, {
          date: '2nd May 2020',
          title: "Developing\n      language Across\n       Curriculum",
          description: "Just like any involved parent, our Director, Sinduri Reddy, began a quest to find a school that would nurture her growing preschoolers in  best way possible.\n      After putting toger  best of schools and undergoing immense research, re were still certain factors like cleanliness, Ethos, Curriculum Focus, distance, etc. that made it impossible for her to choose. \n      So, like a popular thought,\u201D when you can\u2019t find someone to do exactly what you, get up and do it yourself!\u201D That\u2019s exactly what she did! \n      Her endeavours have snowballed into SHS VIDYALAYA .\n      "
        }, {
          date: '2nd May 2020',
          title: "World for all\n      and all for \n      world!",
          description: "Just like any involved parent, our Director, Sinduri Reddy, began a quest to find a school that would nurture her growing preschoolers in  best way possible.\n      After putting toger  best of schools and undergoing immense research, re were still certain factors like cleanliness, Ethos, Curriculum Focus, distance, etc. that made it impossible for her to choose. \n      So, like a popular thought,\u201D when you can\u2019t find someone to do exactly what you, get up and do it yourself!\u201D That\u2019s exactly what she did! \n      Her endeavours have snowballed into SHS VIDYALAYA .\n      "
        }, {
          date: '2nd May 2020',
          title: "Gaming\n      Addiction or\n      Enthusiasm",
          description: "Just like any involved parent, our Director, Sinduri Reddy, began a quest to find a school that would nurture her growing preschoolers in  best way possible.\n      After putting toger  best of schools and undergoing immense research, re were still certain factors like cleanliness, Ethos, Curriculum Focus, distance, etc. that made it impossible for her to choose. \n      So, like a popular thought,\u201D when you can\u2019t find someone to do exactly what you, get up and do it yourself!\u201D That\u2019s exactly what she did! \n      Her endeavours have snowballed into SHS VIDYALAYA .\n      "
        }, {
          date: '2nd May 2020',
          title: "Developing\n      language Across\n       Curriculum",
          description: "Just like any involved parent, our Director, Sinduri Reddy, began a quest to find a school that would nurture her growing preschoolers in  best way possible.\n      After putting toger  best of schools and undergoing immense research, re were still certain factors like cleanliness, Ethos, Curriculum Focus, distance, etc. that made it impossible for her to choose. \n      So, like a popular thought,\u201D when you can\u2019t find someone to do exactly what you, get up and do it yourself!\u201D That\u2019s exactly what she did! \n      Her endeavours have snowballed into SHS VIDYALAYA .\n      "
        }];
        this.recentConfig = {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 1500,
          arrows: true,
          responsive: [{
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 1
            }
          }, {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 1
            }
          }]
        };
      }

      _createClass(BlobComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BlobComponent;
    }();

    BlobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-blob',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blob.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/blob/blob.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blob.component.scss */
      "./src/app/blob/blob.component.scss"))["default"]]
    })], BlobComponent);
    /***/
  },

  /***/
  "./src/app/contact/contact.component.scss":
  /*!************************************************!*\
    !*** ./src/app/contact/contact.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactContactComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".map {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n.map::after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-image: linear-gradient(to right, #f1f1f1, rgba(255, 0, 0, 0));\n  width: 50%;\n  height: 100%;\n}\n.map iframe {\n  width: 100%;\n  height: 100%;\n}\n.section-inner-subheader .row-f, .section-inner-subheader .row {\n  margin: 70px 0 100px;\n  position: relative;\n}\n.section-inner-subheader .img-flag {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 40%;\n}\n.section-inner-subheader .panel {\n  background: #fff;\n  padding: 50px;\n}\n.section-inner-subheader .panel p {\n  font-size: 72px;\n  color: #f0f0f0;\n  font-weight: bold;\n}\n.section-inner-subheader .panel .panel-body {\n  width: 50%;\n}\n.section-inner-subheader h1 {\n  margin-left: 65px;\n  margin-bottom: 35px;\n}\n.section-inner-subheader h6 {\n  margin-left: 65px;\n}\n.section-inner-subheader .img-flag {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 50%;\n}\n.section-inner-subheader .inner-contact-info {\n  margin: 50px;\n  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.5);\n}\n.section-inner-subheader .inner-contact-info .row {\n  margin: 0px;\n}\n.section-inner-subheader .inner-contact-info .contact-form {\n  background: #fff;\n  padding-top: 40px;\n}\n.section-inner-subheader .inner-contact-info .contact-form .row {\n  margin-bottom: 30px;\n}\n.section-inner-subheader .inner-contact-info .contact-form input, .section-inner-subheader .inner-contact-info .contact-form textarea {\n  border-radius: 0;\n  border: none;\n  border-bottom: 1px solid #d6d6d6;\n  outline: none;\n  padding: 0;\n  box-shadow: none;\n}\n.section-inner-subheader .inner-contact-info .contact-form input:focus, .section-inner-subheader .inner-contact-info .contact-form textarea:focus {\n  border-bottom: 1px solid #007bff;\n}\n.section-inner-subheader .inner-contact-info .contact-form .btn {\n  background: none;\n  border: none;\n  box-shadow: none;\n  float: right;\n}\n.section-inner-subheader .inner-contact-info .contact-form .btn svg {\n  fill: #bf272d;\n  transform: rotate(45deg);\n}\n.section-inner-subheader .inner-contact-info .contact-info {\n  background: url('contact-info.png') repeat-y #bf272d top left;\n  color: #fff;\n}\n.section-inner-subheader .inner-contact-info .contact-info .info-title {\n  padding: 30px 0 40px 120px;\n}\n.section-inner-subheader .inner-contact-info .contact-info .row {\n  margin-bottom: 30px;\n}\n.section-inner-subheader .inner-contact-info .contact-info i {\n  width: 120px;\n  float: left;\n  padding: 0 15px;\n}\n.section-inner-subheader .inner-contact-info .contact-info p {\n  float: left;\n  color: #fff;\n}\n.section-inner-subheader .inner-contact-info .contact-info a {\n  color: #fff;\n}\n.section-inner-subheader .inner-contact-info .contact-info svg {\n  fill: #fff;\n}\n.section-inner-subheader .inner-contact-info p {\n  color: #000;\n  font-size: 14px;\n  font-weight: normal;\n}\n.section-inner-subheader .inner-contact-info p a {\n  color: #000;\n}\n.section-inner-subheader .inner-contact-info .highlighted {\n  color: #bf272d;\n}\n.section-inner-subheader .inner-contact-info .social-net {\n  float: left;\n  margin-bottom: 25px;\n  margin-left: 120px;\n}\n.section-inner-subheader .inner-contact-info .social-net li {\n  float: left;\n  margin-right: 15px;\n}\n.section-inner-subheader .inner-contact-info .social-net li i {\n  width: auto;\n  padding: 0px;\n}\n.flex-end {\n  justify-content: flex-end;\n}\n@media (max-width: 576px) {\n  .row-f, .row, h1 {\n    margin-left: 0px;\n  }\n\n  .breadcum {\n    margin-left: 15px;\n  }\n\n  .img-flag {\n    padding: 15px;\n    position: static;\n    width: 100%;\n  }\n\n  .panel-body {\n    width: 100%;\n  }\n\n  .contact-info {\n    display: none;\n  }\n\n  form .row {\n    padding: 0px;\n  }\n  form .row .col {\n    margin-bottom: 10px;\n  }\n  form .row:not(:last-child) {\n    display: block;\n    margin-bottom: 15px;\n  }\n\n  .contact-form {\n    padding: 40px 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9EOlxcc2hzL3NyY1xcYXBwXFxjb250YWN0XFxjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0Q7QURBQztFQUNDLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0Esd0VBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0VGO0FEQUM7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ0VGO0FERUM7RUFDQyxvQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURDQztFQUNDLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FDQ0Y7QURDQztFQUNDLGdCQUFBO0VBQ0EsYUFBQTtBQ0NGO0FEQUU7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDRUg7QURBRTtFQUNDLFVBQUE7QUNFSDtBRENDO0VBQ0MsaUJBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0M7RUFDQyxpQkFBQTtBQ0NGO0FERUM7RUFDQyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQ0FGO0FERUM7RUFDQyxZQUFBO0VBQ0EsMENBQUE7QUNBRjtBRENFO0VBQ0MsV0FBQTtBQ0NIO0FEQ0U7RUFDQyxnQkFBQTtFQUNBLGlCQUFBO0FDQ0g7QURBRztFQUNDLG1CQUFBO0FDRUo7QURBRztFQUNDLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0VKO0FEREk7RUFDQyxnQ0FBQTtBQ0dMO0FEQUc7RUFDQyxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNFSjtBRERJO0VBQ0MsYUFBQTtFQUNBLHdCQUFBO0FDR0w7QURDRTtFQUNDLDZEQUFBO0VBQ0EsV0FBQTtBQ0NIO0FEQUc7RUFDQywwQkFBQTtBQ0VKO0FEQUc7RUFDQyxtQkFBQTtBQ0VKO0FEQUc7RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNFSjtBREFHO0VBQ0MsV0FBQTtFQUNBLFdBQUE7QUNFSjtBREFHO0VBQ0MsV0FBQTtBQ0VKO0FEQUc7RUFDQyxVQUFBO0FDRUo7QURDRTtFQUNHLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNDTDtBRENLO0VBQ0MsV0FBQTtBQ0NOO0FER0U7RUFDQyxjQUFBO0FDREg7QURJRTtFQUNDLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDRkg7QURHRztFQUNDLFdBQUE7RUFDQSxrQkFBQTtBQ0RKO0FER0k7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ0RMO0FEUUE7RUFFQyx5QkFBQTtBQ05EO0FEU0E7RUFDRTtJQUNDLGdCQUFBO0VDTkQ7O0VEU0Q7SUFDQyxpQkFBQTtFQ05BOztFRFFEO0lBQ0MsYUFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtFQ0xBOztFRE9EO0lBQ0MsV0FBQTtFQ0pBOztFRE1EO0lBQ0MsYUFBQTtFQ0hBOztFRE9BO0lBQ0MsWUFBQTtFQ0pEO0VES0M7SUFDQyxtQkFBQTtFQ0hGO0VES0M7SUFDQyxjQUFBO0lBQ0EsbUJBQUE7RUNIRjs7RURRRDtJQUNDLGlCQUFBO0VDTEE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDowO1xyXG5cdGxlZnQ6MDtcclxuXHR3aWR0aDoxMDAlO1xyXG5cdGhlaWdodDoxMDAlO1xyXG5cdHotaW5kZXg6LTE7XHJcblx0Jjo6YWZ0ZXJ7XHJcblx0XHRjb250ZW50OiBcIiBcIjtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGxlZnQ6MDtcclxuXHRcdHRvcDowO1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI0MSwyNDEsMjQxLDEpLCByZ2JhKDI1NSwwLDAsMCkpO1xyXG5cdFx0d2lkdGg6NTAlO1xyXG5cdFx0aGVpZ2h0OjEwMCU7XHJcblx0fVxyXG5cdGlmcmFtZXtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdH1cclxufVxyXG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXJ7XHJcblx0LnJvdy1mLCAucm93e1xyXG5cdFx0bWFyZ2luOjcwcHggMCAxMDBweDsgXHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cdC5pbWctZmxhZ3tcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHJpZ2h0OjA7XHJcblx0XHR0b3A6MDtcclxuXHRcdHdpZHRoOiA0MCU7XHJcblx0fVxyXG5cdC5wYW5lbCB7XHJcblx0XHRiYWNrZ3JvdW5kOiNmZmY7XHJcblx0XHRwYWRkaW5nOjUwcHg7XHJcblx0XHRwe1xyXG5cdFx0XHRmb250LXNpemU6NzJweDtcclxuXHRcdFx0Y29sb3I6I2YwZjBmMDtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHR9XHJcblx0XHQucGFuZWwtYm9keXtcclxuXHRcdFx0d2lkdGg6NTAlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRoMXtcclxuXHRcdG1hcmdpbi1sZWZ0OjY1cHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG5cdH1cclxuXHRoNntcclxuXHRcdG1hcmdpbi1sZWZ0OjY1cHg7XHJcblx0fVxyXG5cclxuXHQuaW1nLWZsYWd7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRyaWdodDowO1xyXG5cdFx0dG9wOjA7XHJcblx0XHR3aWR0aDogNTAlO1xyXG5cdH1cclxuXHQuaW5uZXItY29udGFjdC1pbmZve1xyXG5cdFx0bWFyZ2luOiA1MHB4O1xyXG5cdFx0Ym94LXNoYWRvdzogMHB4IDJweCA4cHggcmdiYSgwLDAsMCwuNSk7XHJcblx0XHQucm93e1xyXG5cdFx0XHRtYXJnaW46MHB4O1x0XHJcblx0XHR9XHJcblx0XHQuY29udGFjdC1mb3Jte1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiNmZmY7XHJcblx0XHRcdHBhZGRpbmctdG9wOjQwcHg7XHJcblx0XHRcdC5yb3d7XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTozMHB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdGlucHV0LCB0ZXh0YXJlYXtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAwO1xyXG5cdFx0XHRcdGJvcmRlcjogbm9uZTtcclxuXHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q2ZDZkNjtcclxuXHRcdFx0XHRvdXRsaW5lOiBub25lO1xyXG5cdFx0XHRcdHBhZGRpbmc6IDA7XHJcblx0XHRcdFx0Ym94LXNoYWRvdzpub25lO1xyXG5cdFx0XHRcdCY6Zm9jdXN7XHJcblx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwN2JmZjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0LmJ0bntcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOm5vbmU7XHJcblx0XHRcdFx0Ym9yZGVyOm5vbmU7XHJcblx0XHRcdFx0Ym94LXNoYWRvdzpub25lO1xyXG5cdFx0XHRcdGZsb2F0OnJpZ2h0O1xyXG5cdFx0XHRcdHN2Z3tcclxuXHRcdFx0XHRcdGZpbGw6I2JmMjcyZDtcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC5jb250YWN0LWluZm97XHJcblx0XHRcdGJhY2tncm91bmQ6dXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvY29udGFjdC1pbmZvLnBuZykgcmVwZWF0LXkgI2JmMjcyZCB0b3AgbGVmdDtcclxuXHRcdFx0Y29sb3I6I2ZmZjtcclxuXHRcdFx0LmluZm8tdGl0bGV7XHJcblx0XHRcdFx0cGFkZGluZzozMHB4IDAgNDBweCAxMjBweDtcclxuXHRcdFx0fVxyXG5cdFx0XHQucm93e1xyXG5cdFx0XHRcdG1hcmdpbi1ib3R0b206MzBweDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpe1xyXG5cdFx0XHRcdHdpZHRoOjEyMHB4O1xyXG5cdFx0XHRcdGZsb2F0OmxlZnQ7XHJcblx0XHRcdFx0cGFkZGluZzogMCAxNXB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdHB7XHJcblx0XHRcdFx0ZmxvYXQ6bGVmdDtcclxuXHRcdFx0XHRjb2xvcjojZmZmO1xyXG5cdFx0XHR9XHJcblx0XHRcdGF7XHJcblx0XHRcdFx0Y29sb3I6I2ZmZjtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdmd7XHJcblx0XHRcdFx0ZmlsbDojZmZmO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRwe1xyXG5cdFx0ICAgY29sb3I6IzAwMDtcclxuXHRcdCAgIGZvbnQtc2l6ZToxNHB4OyBcclxuXHRcdCAgIGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxuXHRcdCAgIFxyXG5cdFx0ICAgYXtcclxuXHRcdFx0ICAgY29sb3I6IzAwMDtcclxuXHJcblx0XHQgICB9XHJcblx0XHR9XHJcblx0XHQuaGlnaGxpZ2h0ZWR7XHJcblx0XHRcdGNvbG9yOiNiZjI3MmQ7XHJcblx0XHR9XHJcblxyXG5cdFx0LnNvY2lhbC1uZXR7XHJcblx0XHRcdGZsb2F0OmxlZnQ7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDI1cHg7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAxMjBweDtcclxuXHRcdFx0bGl7XHJcblx0XHRcdFx0ZmxvYXQ6bGVmdDtcclxuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6MTVweDtcclxuXHJcblx0XHRcdFx0aXtcclxuXHRcdFx0XHRcdHdpZHRoOmF1dG87XHJcblx0XHRcdFx0XHRwYWRkaW5nOjBweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5mbGV4LWVuZFxyXG57XHJcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KXtcclxuXHRcdC5yb3ctZiwgLnJvdywgaDF7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OjBweDsgXHJcblx0XHRcclxuXHR9XHJcblx0LmJyZWFkY3Vte1xyXG5cdFx0bWFyZ2luLWxlZnQ6MTVweDtcclxuXHR9XHJcblx0LmltZy1mbGFne1xyXG5cdFx0cGFkZGluZzoxNXB4O1xyXG5cdFx0cG9zaXRpb246IHN0YXRpYztcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0fVxyXG5cdC5wYW5lbC1ib2R5e1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHR9XHJcblx0LmNvbnRhY3QtaW5mb3tcclxuXHRcdGRpc3BsYXk6bm9uZTtcclxuXHR9XHJcblxyXG5cdGZvcm17XHJcblx0XHQucm93e1xyXG5cdFx0XHRwYWRkaW5nOjBweDtcclxuXHRcdFx0LmNvbHtcclxuXHRcdFx0XHRtYXJnaW4tYm90dG9tOjEwcHg7XHJcblx0XHRcdH1cclxuXHRcdFx0Jjpub3QoOmxhc3QtY2hpbGQpe1xyXG5cdFx0XHRcdGRpc3BsYXk6YmxvY2s7XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbToxNXB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQuY29udGFjdC1mb3Jte1xyXG5cdFx0cGFkZGluZzo0MHB4IDBweDtcclxuXHR9XHJcblxyXG59IiwiLm1hcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAtMTtcbn1cbi5tYXA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmMWYxZjEsIHJnYmEoMjU1LCAwLCAwLCAwKSk7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5tYXAgaWZyYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5yb3ctZiwgLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5yb3cge1xuICBtYXJnaW46IDcwcHggMCAxMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5pbWctZmxhZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDQwJTtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAucGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiA1MHB4O1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5wYW5lbCBwIHtcbiAgZm9udC1zaXplOiA3MnB4O1xuICBjb2xvcjogI2YwZjBmMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLnBhbmVsIC5wYW5lbC1ib2R5IHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciBoMSB7XG4gIG1hcmdpbi1sZWZ0OiA2NXB4O1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIGg2IHtcbiAgbWFyZ2luLWxlZnQ6IDY1cHg7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmltZy1mbGFnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogNTAlO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5pbm5lci1jb250YWN0LWluZm8ge1xuICBtYXJnaW46IDUwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItY29udGFjdC1pbmZvIC5yb3cge1xuICBtYXJnaW46IDBweDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItY29udGFjdC1pbmZvIC5jb250YWN0LWZvcm0ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItY29udGFjdC1pbmZvIC5jb250YWN0LWZvcm0gLnJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuY29udGFjdC1mb3JtIGlucHV0LCAuc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuY29udGFjdC1mb3JtIHRleHRhcmVhIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q2ZDZkNjtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItY29udGFjdC1pbmZvIC5jb250YWN0LWZvcm0gaW5wdXQ6Zm9jdXMsIC5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItY29udGFjdC1pbmZvIC5jb250YWN0LWZvcm0gdGV4dGFyZWE6Zm9jdXMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwN2JmZjtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItY29udGFjdC1pbmZvIC5jb250YWN0LWZvcm0gLmJ0biB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5pbm5lci1jb250YWN0LWluZm8gLmNvbnRhY3QtZm9ybSAuYnRuIHN2ZyB7XG4gIGZpbGw6ICNiZjI3MmQ7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItY29udGFjdC1pbmZvIC5jb250YWN0LWluZm8ge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9jb250YWN0LWluZm8ucG5nKSByZXBlYXQteSAjYmYyNzJkIHRvcCBsZWZ0O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItY29udGFjdC1pbmZvIC5jb250YWN0LWluZm8gLmluZm8tdGl0bGUge1xuICBwYWRkaW5nOiAzMHB4IDAgNDBweCAxMjBweDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItY29udGFjdC1pbmZvIC5jb250YWN0LWluZm8gLnJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuY29udGFjdC1pbmZvIGkge1xuICB3aWR0aDogMTIwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuY29udGFjdC1pbmZvIHAge1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6ICNmZmY7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuY29udGFjdC1pbmZvIGEge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItY29udGFjdC1pbmZvIC5jb250YWN0LWluZm8gc3ZnIHtcbiAgZmlsbDogI2ZmZjtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItY29udGFjdC1pbmZvIHAge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5pbm5lci1jb250YWN0LWluZm8gcCBhIHtcbiAgY29sb3I6ICMwMDA7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuaGlnaGxpZ2h0ZWQge1xuICBjb2xvcjogI2JmMjcyZDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItY29udGFjdC1pbmZvIC5zb2NpYWwtbmV0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMjBweDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItY29udGFjdC1pbmZvIC5zb2NpYWwtbmV0IGxpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItY29udGFjdC1pbmZvIC5zb2NpYWwtbmV0IGxpIGkge1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uZmxleC1lbmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnJvdy1mLCAucm93LCBoMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxuXG4gIC5icmVhZGN1bSB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIH1cblxuICAuaW1nLWZsYWcge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5wYW5lbC1ib2R5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5jb250YWN0LWluZm8ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBmb3JtIC5yb3cge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuICBmb3JtIC5yb3cgLmNvbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICBmb3JtIC5yb3c6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuXG4gIC5jb250YWN0LWZvcm0ge1xuICAgIHBhZGRpbmc6IDQwcHggMHB4O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);

        this.socialNet = [{
          icon: '#icon_facebook'
        }, {
          icon: '#icon_instagram'
        }, {
          icon: '#icon_twitter'
        }];
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.scss */
      "./src/app/contact/contact.component.scss"))["default"]]
    })], ContactComponent);
    /***/
  },

  /***/
  "./src/app/eng/eng.component.scss":
  /*!****************************************!*\
    !*** ./src/app/eng/eng.component.scss ***!
    \****************************************/

  /*! exports provided: default */

  /***/
  function srcAppEngEngComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VuZy9lbmcuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/eng/eng.component.ts":
  /*!**************************************!*\
    !*** ./src/app/eng/eng.component.ts ***!
    \**************************************/

  /*! exports provided: EngComponent */

  /***/
  function srcAppEngEngComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EngComponent", function () {
      return EngComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EngComponent = /*#__PURE__*/function () {
      function EngComponent() {
        _classCallCheck(this, EngComponent);
      }

      _createClass(EngComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EngComponent;
    }();

    EngComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-eng',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./eng.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/eng/eng.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./eng.component.scss */
      "./src/app/eng/eng.component.scss"))["default"]]
    })], EngComponent);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/footer/footer.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "footer {\n  background: #172947;\n  padding: 35px 0 15px;\n}\nfooter .logo {\n  margin-bottom: 15px;\n}\nfooter a {\n  color: #dddddd;\n}\nfooter p {\n  color: #fff;\n}\nfooter address {\n  color: #dddddd;\n}\nfooter h5 {\n  color: #fff;\n}\nfooter ul.footer-li {\n  list-style: none inside;\n  margin: 0;\n  padding: 10px 0;\n  clear: both;\n}\nfooter ul.footer-li li {\n  padding: 10px 0;\n  line-height: 12px;\n}\nfooter ul.footer-li li a.active {\n  color: #f44336;\n}\nfooter .social-net {\n  padding: 0;\n}\nfooter .social-net ul {\n  list-style: none inside;\n  margin-top: 20px;\n  padding: 0;\n  float: left;\n  width: 100%;\n}\nfooter .social-net ul li {\n  float: left;\n  margin-right: 20px;\n}\nfooter .social-net ul li a {\n  color: #fff;\n  font-size: 12px;\n}\nfooter .social-net ul li svg {\n  width: 24px;\n  height: 24px;\n  fill: #fff;\n}\n.contact-info {\n  background: #e8e8e8;\n  padding: 30px 0;\n}\n.contact-info p, .contact-info a {\n  color: #000;\n  font-family: \"Quicksand\", sans-serif;\n}\n.contact-info .social-net {\n  border-left: 1px solid #ccc;\n  padding-left: 25px;\n}\n.contact-info .social-net ul {\n  padding: 0;\n  margin: 0;\n}\n.contact-info .social-net ul li {\n  list-style-type: none;\n}\n.contact-info .social-net ul li span {\n  margin-left: 15px;\n  color: #555555;\n}\n.contact-info .social-net ul li svg {\n  fill: #f7a05c;\n}\n@media (max-width: 576px) {\n  .contact-info .social-net {\n    border: none;\n    padding: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0Q6XFxzaHMvc3JjXFxhcHBcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtBQ0NKO0FEQUk7RUFDSSxtQkFBQTtBQ0VSO0FEQUk7RUFDSSxjQUFBO0FDRVI7QURBSTtFQUNJLFdBQUE7QUNFUjtBREFJO0VBQ0ksY0FBQTtBQ0VSO0FEQUk7RUFDSSxXQUFBO0FDRVI7QURBSTtFQUNJLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDRVI7QUREUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0daO0FERGdCO0VBQ0ksY0FBQTtBQ0dwQjtBREVJO0VBQ0ksVUFBQTtBQ0FSO0FEQ1E7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDQ1o7QURBWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0VoQjtBRERnQjtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDR3BCO0FERGdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDR3BCO0FESUE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUNESjtBREVJO0VBQ0ksV0FBQTtFQUNBLG9DQUFBO0FDQVI7QURFQztFQUNPLDJCQUFBO0VBQ0Esa0JBQUE7QUNBUjtBRENFO0VBQ0MsVUFBQTtFQUNBLFNBQUE7QUNDSDtBREFHO0VBQ0MscUJBQUE7QUNFSjtBRERHO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FDR0w7QUREZ0I7RUFDSSxhQUFBO0FDR3BCO0FER0E7RUFFUTtJQUNJLFlBQUE7SUFDQSxVQUFBO0VDRFY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzE3Mjk0NztcclxuICAgIHBhZGRpbmc6IDM1cHggMCAxNXB4O1xyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogI2RkZGRkZDtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgIH1cclxuICAgIGFkZHJlc3Mge1xyXG4gICAgICAgIGNvbG9yOiAjZGRkZGRkO1xyXG4gICAgfVxyXG4gICAgaDV7XHJcbiAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgIH1cclxuICAgIHVsLmZvb3Rlci1saSB7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZSBpbnNpZGU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAmLmFjdGl2ZXtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjojZjQ0MzM2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNvY2lhbC1uZXQge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgdWx7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmUgaW5zaWRlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY29udGFjdC1pbmZve1xyXG4gICAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuICAgIHBhZGRpbmc6MzBweCAwO1xyXG4gICAgcCwgYXtcclxuICAgICAgICBjb2xvcjojMDAwO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuXHQuc29jaWFsLW5ldHtcclxuICAgICAgICBib3JkZXItbGVmdDoxcHggc29saWQgI2NjYztcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6MjVweDtcclxuXHRcdHVse1xyXG5cdFx0XHRwYWRkaW5nOjA7XHJcblx0XHRcdG1hcmdpbjowO1xyXG5cdFx0XHRsaXtcclxuXHRcdFx0XHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcblx0XHRcdHNwYW57XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDoxNXB4O1xyXG5cdFx0XHRcdFx0Y29sb3I6IzU1NTU1NTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN2Z3tcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiAjZjdhMDVjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KXtcclxuXHQgICAgLmNvbnRhY3QtaW5mbyB7XHJcbiAgICAgICAgLnNvY2lhbC1uZXR7XHJcbiAgICAgICAgICAgIGJvcmRlcjpub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICMxNzI5NDc7XG4gIHBhZGRpbmc6IDM1cHggMCAxNXB4O1xufVxuZm9vdGVyIC5sb2dvIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbmZvb3RlciBhIHtcbiAgY29sb3I6ICNkZGRkZGQ7XG59XG5mb290ZXIgcCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuZm9vdGVyIGFkZHJlc3Mge1xuICBjb2xvcjogI2RkZGRkZDtcbn1cbmZvb3RlciBoNSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuZm9vdGVyIHVsLmZvb3Rlci1saSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmUgaW5zaWRlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgY2xlYXI6IGJvdGg7XG59XG5mb290ZXIgdWwuZm9vdGVyLWxpIGxpIHtcbiAgcGFkZGluZzogMTBweCAwO1xuICBsaW5lLWhlaWdodDogMTJweDtcbn1cbmZvb3RlciB1bC5mb290ZXItbGkgbGkgYS5hY3RpdmUge1xuICBjb2xvcjogI2Y0NDMzNjtcbn1cbmZvb3RlciAuc29jaWFsLW5ldCB7XG4gIHBhZGRpbmc6IDA7XG59XG5mb290ZXIgLnNvY2lhbC1uZXQgdWwge1xuICBsaXN0LXN0eWxlOiBub25lIGluc2lkZTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogMDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuZm9vdGVyIC5zb2NpYWwtbmV0IHVsIGxpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbmZvb3RlciAuc29jaWFsLW5ldCB1bCBsaSBhIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbmZvb3RlciAuc29jaWFsLW5ldCB1bCBsaSBzdmcge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBmaWxsOiAjZmZmO1xufVxuXG4uY29udGFjdC1pbmZvIHtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgcGFkZGluZzogMzBweCAwO1xufVxuLmNvbnRhY3QtaW5mbyBwLCAuY29udGFjdC1pbmZvIGEge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XG59XG4uY29udGFjdC1pbmZvIC5zb2NpYWwtbmV0IHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG59XG4uY29udGFjdC1pbmZvIC5zb2NpYWwtbmV0IHVsIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuLmNvbnRhY3QtaW5mbyAuc29jaWFsLW5ldCB1bCBsaSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5jb250YWN0LWluZm8gLnNvY2lhbC1uZXQgdWwgbGkgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBjb2xvcjogIzU1NTU1NTtcbn1cbi5jb250YWN0LWluZm8gLnNvY2lhbC1uZXQgdWwgbGkgc3ZnIHtcbiAgZmlsbDogI2Y3YTA1Yztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5jb250YWN0LWluZm8gLnNvY2lhbC1uZXQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/footer/footer.component.scss"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/header/header.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "::ng-deep .main-page nav {\n  background-color: #fff !important;\n}\n\nnav {\n  background-color: #f0f0f0;\n  width: calc(100% - 70px);\n  z-index: 9;\n  padding: 10px;\n  position: fixed;\n  top: 0px;\n}\n\nnav li:not(.login) {\n  margin-top: 10px;\n}\n\nnav .logo img {\n  height: 70px;\n  width: auto;\n}\n\nnav .login {\n  margin: 0 15px;\n}\n\nnav .login a {\n  color: #000 !important;\n  text-align: center;\n}\n\nnav .login a svg {\n  fill: #bf272d;\n}\n\nnav .login a:hover {\n  background: none !important;\n}\n\nnav .login.dropping {\n  position: relative;\n}\n\nnav .login.dropping:hover .dropper {\n  display: block;\n}\n\nnav .login .dropper {\n  background: #fff;\n  border-bottom: 2px solid #f44336;\n  box-shadow: 1px 3px 6px rgba(72, 71, 71, 0.3);\n  display: none;\n  position: absolute;\n  top: 62px;\n  right: 0px;\n  width: 260px;\n}\n\nnav .login .dropper a {\n  display: block;\n  border-bottom: 1px solid #ccc;\n}\n\nnav .login .dropper a:hover {\n  color: #ccc;\n}\n\nnav .login .dropper a:last-child {\n  border: none;\n}\n\n.navbar-vertical {\n  position: fixed;\n  z-index: 1030;\n  width: 70px;\n  height: 100vh;\n  background-color: #f0f0f0;\n  top: 0px;\n  left: 0px;\n  padding-left: 15px;\n}\n\n.navbar-vertical a {\n  padding: 0px;\n}\n\n.navbar-vertical .social-net {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: flex-start;\n}\n\n.navbar-vertical .social-net li {\n  -webkit-writing-mode: vertical-lr;\n          writing-mode: vertical-lr;\n  transform: rotate(180deg);\n  transform-origin: center center;\n  list-style-type: none;\n}\n\n.navbar-vertical .social-net li a {\n  display: block;\n  padding: 0px;\n  margin: 0;\n  margin-right: -5px;\n  color: #000;\n  font-size: 16px;\n  float: left;\n}\n\n.navbar-vertical .social-net li a i {\n  float: left;\n  line-height: 35px;\n}\n\n.navbar-vertical .social-net li a span {\n  margin: 10px;\n  float: left;\n}\n\n.navbar-vertical .social-net li svg {\n  transform: rotate(90deg);\n  fill: #bf272d;\n}\n\n.notice-board {\n  position: fixed;\n  bottom: 10px;\n  left: 3px;\n}\n\n.notice-board i {\n  background: #bf272d;\n  padding: 10px;\n}\n\n.notice-board a {\n  padding: 15px !important;\n}\n\n.notice-board svg {\n  fill: #fff !important;\n  margin: 0 auto;\n  display: block;\n}\n\n::ng-deep .notification-popup.modal {\n  display: flex !important;\n  align-items: center;\n}\n\n::ng-deep .notification-popup.modal .modal-content {\n  background-color: #3e65ac;\n  padding: 0 15px;\n}\n\n::ng-deep .notification-popup.modal .modal-content .modal-title {\n  margin-left: 15px;\n  font-family: \"Lora\", serif;\n  color: #fff;\n}\n\n::ng-deep .notification-popup.modal .modal-content i {\n  margin-top: 9px;\n  display: block;\n}\n\n::ng-deep .notification-popup.modal .modal-content svg {\n  fill: #fff;\n}\n\n::ng-deep .notification-popup.modal .modal-content p {\n  color: #fff;\n  font-size: 28px;\n  align-self: center;\n}\n\n::ng-deep .notification-popup.modal .modal-content .btn {\n  outline: none;\n  background: none;\n  border: 2px solid #fff;\n}\n\n.login-form .row {\n  margin-bottom: 15px;\n}\n\n.login-form:first-child {\n  border-right: 1px solid #ccc;\n}\n\n.login-form .form-check-label {\n  margin-left: 15px;\n}\n\n.navbar-nav-list {\n  float: right;\n  margin-left: auto;\n  list-style-type: none;\n  margin-bottom: 0;\n}\n\n.navbar-nav-list .nav-item {\n  font-size: 14px;\n  float: left;\n}\n\n.navbar-nav-list .nav-item a {\n  padding: 10px;\n  font-size: 16px;\n  font-weight: bold;\n  color: #000;\n  text-decoration: none;\n}\n\n.navbar-nav-list .nav-item a.active, .navbar-nav-list .nav-item a:hover {\n  color: #fff;\n  background: #f44336;\n}\n\n.navbar-nav-list .nav-item.quick-link a {\n  padding-right: 0px;\n}\n\n.navbar-nav-list .nav-item svg {\n  width: 20px;\n  height: 20px;\n  margin-right: 5px;\n}\n\n.navbar-nav-list .nav-item.social-media svg {\n  width: 24px;\n  height: 24px;\n  margin-right: 5px;\n}\n\n.newsletter {\n  background: #3e65ac;\n  padding: 40px 0;\n}\n\n.newsletter .form-inline {\n  margin: 0 auto;\n}\n\n.newsletter label {\n  color: #000;\n  font-size: 20px;\n  margin-right: 15px;\n}\n\n.newsletter .btn {\n  background: #000;\n  color: #fff;\n  margin-left: 15px;\n  padding: 9px 15px;\n  text-transform: uppercase;\n  font-size: 14px;\n}\n\n.overlay {\n  display: none;\n  background: #e1e1e1;\n  position: fixed;\n  width: 100%;\n  height: calc(100vh);\n  top: 0;\n  left: 0;\n  flex-direction: column;\n  /* make main-axis vertical */\n  justify-content: center;\n  /* align items vertically, in this case */\n  align-items: center;\n  /* align items horizontally, in this case */\n}\n\n.overlay.active {\n  display: flex;\n  z-index: 10000;\n}\n\n.overlay img {\n  position: absolute;\n  z-index: -1;\n  opacity: 0.1;\n}\n\n.overlay .close-menu {\n  position: absolute;\n  top: 25px;\n  left: 25px;\n}\n\n.overlay ul.main-nav {\n  float: none;\n}\n\n.overlay ul.main-nav li {\n  float: none;\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.overlay ul.main-nav li a {\n  padding: 15px;\n  color: #000;\n  font-size: 18px;\n  font-weight: bold;\n  text-decoration: none;\n}\n\n.overlay ul.main-nav li a:hover, .overlay ul.main-nav li a.active {\n  color: #f44336;\n}\n\n.overlay .general-info-nav {\n  position: absolute;\n  bottom: 10px;\n  text-align: center;\n  width: 100%;\n}\n\n.overlay .general-info-nav a {\n  padding: 0 10px;\n}\n\n.overlay .general-info-nav a:hover {\n  color: #f44336;\n}\n\n@media (max-width: 576px) {\n  .login-form:first-child {\n    border-bottom: 1px solid #ccc;\n    border-right: none;\n    padding-bottom: 15px;\n  }\n\n  .header-nav {\n    position: absolute;\n    z-index: 99999999;\n    top: 10px;\n    right: 70px;\n    display: block;\n  }\n  .header-nav .login {\n    margin: 0;\n  }\n  .header-nav .login span {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0Q6XFxzaHMvc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksaUNBQUE7QUNBUjs7QURLQTtFQUNRLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0FDRlI7O0FESVE7RUFDSSxnQkFBQTtBQ0ZaOztBREtZO0VBQ0ksWUFBQTtFQUNKLFdBQUE7QUNIWjs7QURNUTtFQUVJLGNBQUE7QUNMWjs7QURNWTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7QUNKaEI7O0FES2dCO0VBQ0ksYUFBQTtBQ0hwQjs7QURLZ0I7RUFDSSwyQkFBQTtBQ0hwQjs7QURNWTtFQUNJLGtCQUFBO0FDSmhCOztBRE1vQjtFQUNJLGNBQUE7QUNKeEI7O0FEUVk7RUFDSSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNOaEI7O0FET2dCO0VBQ0ksY0FBQTtFQUNBLDZCQUFBO0FDTHBCOztBRE1vQjtFQUNJLFdBQUE7QUNKeEI7O0FETW9CO0VBQ0ksWUFBQTtBQ0p4Qjs7QURZQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNUSjs7QURVSTtFQUNJLFlBQUE7QUNSUjs7QURXSTtFQUNJLGFBQUE7RUFDRSx3QkFBQTtFQUNBLHVCQUFBO0FDVFY7O0FEVVE7RUFDRSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLHFCQUFBO0FDUlY7O0FEU1M7RUFDRyxjQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ1BaOztBRFFZO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FDTmhCOztBRFFZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNOaEI7O0FEU1U7RUFDSSx3QkFBQTtFQUNBLGFBQUE7QUNQZDs7QURjQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ1hKOztBRFlJO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0FDVlI7O0FEWUk7RUFDSSx3QkFBQTtBQ1ZSOztBRFlJO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ1ZSOztBRGNBO0VBQ0ksd0JBQUE7RUFDQSxtQkFBQTtBQ1hKOztBRFlBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FDVko7O0FEV0k7RUFDSSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQ1RSOztBRFdJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNUUjs7QURXSTtFQUNJLFVBQUE7QUNUUjs7QURXSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNUUjs7QURXSTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDVFI7O0FEZUk7RUFDSSxtQkFBQTtBQ1pSOztBRGNDO0VBQ08sNEJBQUE7QUNaUjs7QURjSTtFQUNJLGlCQUFBO0FDWlI7O0FEZUE7RUFDUSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDWlI7O0FEYUk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQ1hSOztBRFlRO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ1ZaOztBRFdZO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FDVGhCOztBRGNZO0VBQ0ksa0JBQUE7QUNaaEI7O0FEZ0JRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ2RaOztBRGtCWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNoQmhCOztBRHVCQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQ3BCSjs7QURxQkk7RUFDSSxjQUFBO0FDbkJSOztBRHFCSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNuQlI7O0FEc0JJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ3BCUjs7QUR3QkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxzQkFBQTtFQUF3Qiw0QkFBQTtFQUN4Qix1QkFBQTtFQUF5Qix5Q0FBQTtFQUN6QixtQkFBQTtFQUFxQiwyQ0FBQTtBQ2xCekI7O0FEbUJJO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUNqQlI7O0FEbUJJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ2pCUjs7QURtQkk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDakJSOztBRG1CSztFQUNPLFdBQUE7QUNqQlo7O0FEa0JZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNoQmhCOztBRGlCZ0I7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDZnBCOztBRGdCb0I7RUFDSSxjQUFBO0FDZHhCOztBRG9CUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ2xCWjs7QURtQlk7RUFDSSxlQUFBO0FDakJoQjs7QURrQmdCO0VBQ0ksY0FBQTtBQ2hCcEI7O0FEc0JBO0VBR1M7SUFDRyw2QkFBQTtJQUNBLGtCQUFBO0lBQ0Esb0JBQUE7RUNyQlY7O0VEMEJEO0lBQ08sa0JBQUE7SUFDQSxpQkFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0lBQ0EsY0FBQTtFQ3ZCTjtFRHdCTTtJQUNJLFNBQUE7RUN0QlY7RUR1QlU7SUFDSSxhQUFBO0VDckJkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYWluLXBhZ2V7XHJcbiAgICBuYXYgeyAgIFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbm5hdiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZjBmMGYwO1xyXG4gICAgICAgIHdpZHRoOmNhbGMoMTAwJSAtIDcwcHgpO1xyXG4gICAgICAgIHotaW5kZXg6IDk7XHJcbiAgICAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6MHB4O1xyXG4gICAgICAgXHJcbiAgICAgICAgbGk6bm90KC5sb2dpbil7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvZ297XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDo3MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDphdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb2dpbntcclxuICAgICAgICAgICAgLy8gYm9yZGVyOjFweCBzb2xpZCAjMDAwO1xyXG4gICAgICAgICAgICBtYXJnaW46MCAxNXB4O1xyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IzAwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6I2JmMjcyZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5kcm9wcGluZ3tcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAuZHJvcHBlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRyb3BwZXJ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCAjZjQ0MzM2O1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDNweCA2cHggcmdiKDcyIDcxIDcxIC8gMzAlKTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDYycHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6I2NjYztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbn1cclxuXHJcblxyXG4ubmF2YmFyLXZlcnRpY2FsIHtcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgei1pbmRleDogMTAzMDtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgYXtcclxuICAgICAgICBwYWRkaW5nOjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNvY2lhbC1uZXQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgcGFkZGluZzowcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC01cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiMwMDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICAgICBpe1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46MTBweDtcclxuICAgICAgICAgICAgICAgIGZsb2F0OmxlZnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAgICAgICBmaWxsOiNiZjI3MmQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBcclxufVxyXG5cclxuLm5vdGljZS1ib2FyZHtcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgbGVmdDogM3B4O1xyXG4gICAgaXtcclxuICAgICAgICBiYWNrZ3JvdW5kOiNiZjI3MmQ7XHJcbiAgICAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgfVxyXG4gICAgYXtcclxuICAgICAgICBwYWRkaW5nOjE1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIHN2Z3tcclxuICAgICAgICBmaWxsOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOjAgYXV0bztcclxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLm5vdGlmaWNhdGlvbi1wb3B1cC5tb2RhbHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi5tb2RhbC1jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojM2U2NWFjO1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgLm1vZGFsLXRpdGxle1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjE1cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcclxuICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgfVxyXG4gICAgaXtcclxuICAgICAgICBtYXJnaW4tdG9wOiA5cHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICBzdmd7XHJcbiAgICAgICAgZmlsbDojZmZmO1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZToyOHB4O1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5idG57XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgICAgICAgYm9yZGVyOjJweCBzb2xpZCAjZmZmO1xyXG4gICAgfVxyXG59fVxyXG5cclxuXHJcbi5sb2dpbi1mb3Jte1xyXG4gICAgLnJvd3tcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjE1cHg7XHJcbiAgICB9XHJcblx0JjpmaXJzdC1jaGlsZHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNjY2M7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1jaGVjay1sYWJlbHtcclxuICAgICAgICBtYXJnaW4tbGVmdDoxNXB4O1xyXG4gICAgfVxyXG59XHJcbi5uYXZiYXItbmF2LWxpc3R7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgLm5hdi1pdGVte1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICAgICAgY29sb3I6IzAwMDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAmLmFjdGl2ZSwgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNmNDQzMzY7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgJi5xdWljay1saW5re1xyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDowcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICB3aWR0aDoyMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6MjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjVweDtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgJi5zb2NpYWwtbWVkaWF7XHJcbiAgICAgICAgICAgIHN2Z3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOjI0cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MjRweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDo1cHg7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbi5uZXdzbGV0dGVye1xyXG4gICAgYmFja2dyb3VuZDojM2U2NWFjO1xyXG4gICAgcGFkZGluZzo0MHB4IDA7XHJcbiAgICAuZm9ybS1pbmxpbmV7XHJcbiAgICAgICAgbWFyZ2luOjAgYXV0bztcclxuICAgIH1cclxuICAgIGxhYmVse1xyXG4gICAgICAgIGNvbG9yOiMwMDA7XHJcbiAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjE1cHg7XHJcblxyXG4gICAgfVxyXG4gICAgLmJ0bntcclxuICAgICAgICBiYWNrZ3JvdW5kOiMwMDA7XHJcbiAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICBtYXJnaW4tbGVmdDoxNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6OXB4IDE1cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgIH1cclxufVxyXG5cclxuLm92ZXJsYXl7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyNSwgMjI1LCAyMjUpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmgpO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBtYWtlIG1haW4tYXhpcyB2ZXJ0aWNhbCAqL1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIGFsaWduIGl0ZW1zIHZlcnRpY2FsbHksIGluIHRoaXMgY2FzZSAqL1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogYWxpZ24gaXRlbXMgaG9yaXpvbnRhbGx5LCBpbiB0aGlzIGNhc2UgKi9cclxuICAgICYuYWN0aXZle1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICB6LWluZGV4OjEwMDAwO1xyXG4gICAgfVxyXG4gICAgaW1ne1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICBvcGFjaXR5OiAwLjE7XHJcbiAgICB9XHJcbiAgICAuY2xvc2UtbWVudXtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOjI1cHg7XHJcbiAgICAgICAgbGVmdDoyNXB4O1xyXG4gICAgfVxyXG4gICAgIHVsLm1haW4tbmF2e1xyXG4gICAgICAgICAgICBmbG9hdDpub25lO1xyXG4gICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiMwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciwgJi5hY3RpdmV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiNmNDQzMzY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZ2VuZXJhbC1pbmZvLW5hdntcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206MTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiNmNDQzMzY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCl7XHJcblxyXG4gICAgLmxvZ2luLWZvcm17XHJcbiAgICAgICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDpub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcblx0LmhlYWRlci1uYXZ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTk5OTk5O1xyXG4gICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICByaWdodDogNzBweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAubG9naW57XHJcbiAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIjo6bmctZGVlcCAubWFpbi1wYWdlIG5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxubmF2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDcwcHgpO1xuICB6LWluZGV4OiA5O1xuICBwYWRkaW5nOiAxMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMHB4O1xufVxubmF2IGxpOm5vdCgubG9naW4pIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbm5hdiAubG9nbyBpbWcge1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiBhdXRvO1xufVxubmF2IC5sb2dpbiB7XG4gIG1hcmdpbjogMCAxNXB4O1xufVxubmF2IC5sb2dpbiBhIHtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxubmF2IC5sb2dpbiBhIHN2ZyB7XG4gIGZpbGw6ICNiZjI3MmQ7XG59XG5uYXYgLmxvZ2luIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG59XG5uYXYgLmxvZ2luLmRyb3BwaW5nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxubmF2IC5sb2dpbi5kcm9wcGluZzpob3ZlciAuZHJvcHBlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxubmF2IC5sb2dpbiAuZHJvcHBlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjQ0MzM2O1xuICBib3gtc2hhZG93OiAxcHggM3B4IDZweCByZ2JhKDcyLCA3MSwgNzEsIDAuMyk7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2MnB4O1xuICByaWdodDogMHB4O1xuICB3aWR0aDogMjYwcHg7XG59XG5uYXYgLmxvZ2luIC5kcm9wcGVyIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG59XG5uYXYgLmxvZ2luIC5kcm9wcGVyIGE6aG92ZXIge1xuICBjb2xvcjogI2NjYztcbn1cbm5hdiAubG9naW4gLmRyb3BwZXIgYTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ubmF2YmFyLXZlcnRpY2FsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDMwO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuLm5hdmJhci12ZXJ0aWNhbCBhIHtcbiAgcGFkZGluZzogMHB4O1xufVxuLm5hdmJhci12ZXJ0aWNhbCAuc29jaWFsLW5ldCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4ubmF2YmFyLXZlcnRpY2FsIC5zb2NpYWwtbmV0IGxpIHtcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLm5hdmJhci12ZXJ0aWNhbCAuc29jaWFsLW5ldCBsaSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tcmlnaHQ6IC01cHg7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLm5hdmJhci12ZXJ0aWNhbCAuc29jaWFsLW5ldCBsaSBhIGkge1xuICBmbG9hdDogbGVmdDtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG59XG4ubmF2YmFyLXZlcnRpY2FsIC5zb2NpYWwtbmV0IGxpIGEgc3BhbiB7XG4gIG1hcmdpbjogMTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ubmF2YmFyLXZlcnRpY2FsIC5zb2NpYWwtbmV0IGxpIHN2ZyB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgZmlsbDogI2JmMjcyZDtcbn1cblxuLm5vdGljZS1ib2FyZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiAzcHg7XG59XG4ubm90aWNlLWJvYXJkIGkge1xuICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLm5vdGljZS1ib2FyZCBhIHtcbiAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xufVxuLm5vdGljZS1ib2FyZCBzdmcge1xuICBmaWxsOiAjZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuOjpuZy1kZWVwIC5ub3RpZmljYXRpb24tcG9wdXAubW9kYWwge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46Om5nLWRlZXAgLm5vdGlmaWNhdGlvbi1wb3B1cC5tb2RhbCAubW9kYWwtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZTY1YWM7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cbjo6bmctZGVlcCAubm90aWZpY2F0aW9uLXBvcHVwLm1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC10aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xuICBjb2xvcjogI2ZmZjtcbn1cbjo6bmctZGVlcCAubm90aWZpY2F0aW9uLXBvcHVwLm1vZGFsIC5tb2RhbC1jb250ZW50IGkge1xuICBtYXJnaW4tdG9wOiA5cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuOjpuZy1kZWVwIC5ub3RpZmljYXRpb24tcG9wdXAubW9kYWwgLm1vZGFsLWNvbnRlbnQgc3ZnIHtcbiAgZmlsbDogI2ZmZjtcbn1cbjo6bmctZGVlcCAubm90aWZpY2F0aW9uLXBvcHVwLm1vZGFsIC5tb2RhbC1jb250ZW50IHAge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG46Om5nLWRlZXAgLm5vdGlmaWNhdGlvbi1wb3B1cC5tb2RhbCAubW9kYWwtY29udGVudCAuYnRuIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbn1cblxuLmxvZ2luLWZvcm0gLnJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4ubG9naW4tZm9ybTpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XG59XG4ubG9naW4tZm9ybSAuZm9ybS1jaGVjay1sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4ubmF2YmFyLW5hdi1saXN0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW0ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW0gYSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubmF2YmFyLW5hdi1saXN0IC5uYXYtaXRlbSBhLmFjdGl2ZSwgLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW0gYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjZjQ0MzM2O1xufVxuLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW0ucXVpY2stbGluayBhIHtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW0gc3ZnIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ubmF2YmFyLW5hdi1saXN0IC5uYXYtaXRlbS5zb2NpYWwtbWVkaWEgc3ZnIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5uZXdzbGV0dGVyIHtcbiAgYmFja2dyb3VuZDogIzNlNjVhYztcbiAgcGFkZGluZzogNDBweCAwO1xufVxuLm5ld3NsZXR0ZXIgLmZvcm0taW5saW5lIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ubmV3c2xldHRlciBsYWJlbCB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5uZXdzbGV0dGVyIC5idG4ge1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmc6IDlweCAxNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5vdmVybGF5IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZDogI2UxZTFlMTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoKTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAvKiBtYWtlIG1haW4tYXhpcyB2ZXJ0aWNhbCAqL1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLyogYWxpZ24gaXRlbXMgdmVydGljYWxseSwgaW4gdGhpcyBjYXNlICovXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8qIGFsaWduIGl0ZW1zIGhvcml6b250YWxseSwgaW4gdGhpcyBjYXNlICovXG59XG4ub3ZlcmxheS5hY3RpdmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICB6LWluZGV4OiAxMDAwMDtcbn1cbi5vdmVybGF5IGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIG9wYWNpdHk6IDAuMTtcbn1cbi5vdmVybGF5IC5jbG9zZS1tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI1cHg7XG4gIGxlZnQ6IDI1cHg7XG59XG4ub3ZlcmxheSB1bC5tYWluLW5hdiB7XG4gIGZsb2F0OiBub25lO1xufVxuLm92ZXJsYXkgdWwubWFpbi1uYXYgbGkge1xuICBmbG9hdDogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm92ZXJsYXkgdWwubWFpbi1uYXYgbGkgYSB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ub3ZlcmxheSB1bC5tYWluLW5hdiBsaSBhOmhvdmVyLCAub3ZlcmxheSB1bC5tYWluLW5hdiBsaSBhLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuLm92ZXJsYXkgLmdlbmVyYWwtaW5mby1uYXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi5vdmVybGF5IC5nZW5lcmFsLWluZm8tbmF2IGEge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG4ub3ZlcmxheSAuZ2VuZXJhbC1pbmZvLW5hdiBhOmhvdmVyIHtcbiAgY29sb3I6ICNmNDQzMzY7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAubG9naW4tZm9ybTpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICB9XG5cbiAgLmhlYWRlci1uYXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA5OTk5OTk5OTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDcwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmhlYWRlci1uYXYgLmxvZ2luIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLmhlYWRlci1uYXYgLmxvZ2luIHNwYW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(modalService, router) {
        _classCallCheck(this, HeaderComponent);

        this.modalService = modalService;
        this.router = router;
        this.showNavigationIndicators = false;
        this.showNavigationArrows = false;
        this.isOpen = true;
        this.isSlideOpen = true;
        this.slideConfig = {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 1500,
          arrows: false,
          responsive: [{
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          }, {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }]
        };
        this.closeResult = '';
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;

        this.knowMore = function (text) {
          if (text === 'admission') {
            this.router.navigateByUrl('/JoinshsPride', {
              skipLocationChange: true
            });
            this.modalService.dismissAll();
          }
        };

        this.list = [{
          name: 'Home'
        }, {
          name: 'shsStory'
        }, {
          name: 'shsLeague'
        }, {
          name: 'shsCulture'
        }, {
          name: 'shsEdge'
        }, {
          name: 'JoinshsPride'
        }, {
          name: 'shsCorner'
        }, {
          name: 'CatchUpOverCoffee'
        } // {name: 'Eng'},
        //{name: 'HowToApply'},
        ];
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.modalService.open(this.content, {
            size: 'lg',
            windowClass: 'notification-popup'
          });
        }
      }, {
        key: "open",
        value: function open(content) {
          var _this3 = this;

          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title',
            size: 'lg'
          }).result.then(function (result) {
            _this3.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this3.closeResult = "Dismissed ".concat(_this3.getDismissReason(reason));
          });
        }
      }, {
        key: "notifyOpen",
        value: function notifyOpen(content) {
          var _this4 = this;

          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title',
            size: 'lg',
            windowClass: 'notification-popup'
          }).result.then(function (result) {
            _this4.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this4.closeResult = "Dismissed ".concat(_this4.getDismissReason(reason));
          });
        }
      }, {
        key: "openlogin",
        value: function openlogin(content) {
          var _this5 = this;

          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title',
            size: 'lg',
            windowClass: 'sign'
          }).result.then(function (result) {
            _this5.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this5.closeResult = "Dismissed ".concat(_this5.getDismissReason(reason));
          });
        }
      }, {
        key: "getDismissReason",
        value: function getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        }
      }, {
        key: "slideToggel",
        value: function slideToggel() {
          var body = document.getElementsByTagName('body')[0];
          this.isOpen = !this.isOpen;

          if (!this.isOpen) {
            body.classList.add('remove-scroll');
          } else {
            body.classList.remove('remove-scroll');
          }
        }
      }, {
        key: "togglePaused",
        value: function togglePaused() {
          if (this.paused) {
            this.carousel.cycle();
          } else {
            this.carousel.pause();
          }

          this.paused = !this.paused;
        }
      }, {
        key: "onSlide",
        value: function onSlide(slideEvent) {
          if (this.unpauseOnArrow && slideEvent.paused && (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
          }

          if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
          }
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('notify', {
      "static": true
    })], HeaderComponent.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('carousel', {
      "static": true
    })], HeaderComponent.prototype, "carousel", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/header/header.component.scss"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".section-about, .section-nofify, .shsn-league, .section-events, .section-spacing {\n  padding: 70px 0;\n}\n.section-about h1, .section-nofify h1, .shsn-league h1, .section-events h1, .section-spacing h1 {\n  margin-bottom: 40px;\n}\n.section-info {\n  background: #3e65ac;\n  position: relative;\n  overflow: hidden;\n  padding: 50px 0;\n}\n.section-info img {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0.4;\n}\n.section-info h1, .section-info p {\n  color: #fff;\n}\n.section-info svg {\n  fill: #fff;\n  margin-bottom: 10px;\n}\n.section-info .panel-container {\n  margin: 30px auto 0;\n  display: block;\n  text-align: center;\n}\n.v-align {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  padding: 15px 0;\n}\n.section-nofify h5 {\n  display: table;\n}\n.section-nofify h5 span {\n  float: left;\n  font-weight: bold;\n}\n.section-nofify h5:after {\n  content: \" \";\n  float: left;\n  width: 75px;\n  height: 2px;\n  background: #ccc;\n  margin-left: 15px;\n  margin-top: 13px;\n}\n.section-nofify ul.list li {\n  color: #000;\n}\n.section-nofify ul.list li::before {\n  background: #bf272d;\n}\n.section-admission .admission-flag {\n  position: relative;\n  text-align: center;\n  color: #fff;\n  padding: 25px 0;\n  height: 250px;\n}\n.section-admission .admission-flag .flag-pos {\n  content: \"\";\n  background: #bf272d;\n  position: absolute;\n  top: -25px;\n  left: 0px;\n  width: 100%;\n  height: calc(100% + 100px);\n  z-index: 1;\n  box-shadow: 7px 5px 10px 0px rgba(0, 0, 0, 0.5);\n}\n.section-admission .admission-flag .btn {\n  border: 1px solid #fff;\n  color: #fff;\n  background: none;\n}\n.section-admission p {\n  white-space: pre;\n  margin-top: 15px;\n}\n.section-admission .carousel .panel i {\n  margin: 0 auto;\n  display: block;\n  text-align: center;\n}\n.section-admission .carousel .panel svg {\n  width: 75px;\n  height: 75px;\n}\n.section-admission .carousel .panel p {\n  font-size: 20px;\n  font-family: \"Lora\", serif;\n  text-align: center;\n}\n.section-curriculum ul.list li::before {\n  background: #bf272d;\n}\n.section-curriculum .row-f {\n  float: left;\n  width: 100%;\n}\n.section-curriculum .row-f .p0 {\n  padding: 0px;\n}\n.section-curriculum .section-curriculum-list {\n  margin-top: 15px;\n  position: relative;\n}\n.section-curriculum .section-curriculum-list .drop-down {\n  position: absolute;\n  right: 15px;\n  top: 10px;\n  width: auto;\n  transition: 0.1s;\n}\n.section-curriculum .section-curriculum-list.drop-down-active svg {\n  transform: rotate(-180deg);\n}\n.section-curriculum .section-curriculum-list.nav-pills li .nav-link {\n  color: #000;\n  padding-left: 50px;\n  position: relative;\n  margin-bottom: 30px;\n}\n.section-curriculum .section-curriculum-list.nav-pills li .nav-link.active {\n  background: none;\n  color: #3e65ac;\n}\n.section-curriculum .section-curriculum-list.nav-pills li .nav-link.active::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 17px;\n  width: 40px;\n  height: 2px;\n  background: #3e65ac;\n}\n.section-curriculum .curriculum-info {\n  margin-top: -50px;\n  background: #fff;\n  padding: 30px;\n  color: #000;\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 16px;\n}\n.section-curriculum .curriculum-info h5 {\n  font-weight: bold;\n}\n.section-curriculum .curriculum-info .btn {\n  background: none;\n  border: 2px solid #000;\n  color: #000;\n  float: right;\n  font-family: \"Lora\", serif;\n}\n.section-curriculum .curriculum-info p {\n  font-size: 14px;\n}\n.section-curriculum .curriculum-info ul.list li {\n  color: #000;\n}\n.section-curriculum .text-highlighter:after {\n  content: \" \";\n  float: left;\n  width: 40px;\n  height: 2px;\n  background: #3e65ac;\n  margin: 10px 0px 0 -45px;\n}\n::ng-deep .testimonials {\n  background: #bf272d;\n  position: relative;\n  overflow: hidden;\n  padding-top: 50px;\n}\n::ng-deep .testimonials img {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0.5;\n}\n::ng-deep .testimonials h1 {\n  color: #fff;\n  margin-bottom: 20px;\n}\n::ng-deep .testimonials p {\n  font-size: 18px;\n  font-weight: 700;\n  color: #fff;\n  margin-bottom: 5px;\n}\n::ng-deep .testimonials p:last-child {\n  margin-top: 35px;\n}\n::ng-deep .testimonials .carousel {\n  margin-top: 0;\n  z-index: 1;\n  margin-left: 50px;\n}\n::ng-deep .testimonials .carousel-inner {\n  height: 390px;\n}\n::ng-deep .testimonials .carousel-indicators li {\n  height: 10px;\n  border-radius: 10px;\n  border: 1px solid #fff;\n  background: transparent;\n}\n::ng-deep .testimonials .carousel-indicators li.active {\n  background: #fff;\n}\n::ng-deep .testimonials .carousel-item {\n  transition: opacity 1s ease !important;\n  position: absolute !important;\n  display: block !important;\n  opacity: 0;\n}\n::ng-deep .testimonials .carousel-item.active {\n  position: relative !important;\n  opacity: 1;\n}\n::ng-deep .testimonials .carousel-control-next,\n::ng-deep .testimonials .carousel-control-prev {\n  left: auto;\n  right: 0;\n  top: auto;\n  bottom: 75px;\n}\n::ng-deep .testimonials .carousel-control-prev {\n  right: 100px;\n}\n::ng-deep .testimonials .client-name {\n  font-weight: bold;\n  color: #000;\n  font-size: 20px;\n}\n.partner {\n  margin-top: 70px;\n  margin-bottom: 70px;\n}\n.partner p {\n  font-size: 16px;\n  font-family: \"Quicksand\", sans-serif;\n}\n.partner .panel {\n  height: 300px;\n  position: relative;\n  background: #fff;\n  padding: 30px;\n}\n.partner .panel:hover .info-view {\n  display: block;\n}\n.partner .img-box {\n  height: 95px;\n  margin-bottom: 25px;\n}\n.partner .img-box img {\n  height: 100%;\n  width: auto;\n  margin: 0 auto;\n  display: block;\n}\n.partner .info-view {\n  padding: 20px;\n  display: none;\n  background: #3e65ac;\n  position: absolute;\n  top: -25px;\n  left: 0px;\n  width: 110%;\n  height: calc(100% + 50px);\n  z-index: 1;\n  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.5);\n}\n.partner .info-view .img-box {\n  width: 75px;\n  height: 75px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin-bottom: 0;\n  margin-bottom: 20px;\n  background: #fff;\n}\n.partner .info-view p, .partner .info-view h5, .partner .info-view a {\n  color: rgba(255, 255, 255, 0.5);\n}\n.partner .info-view p {\n  font-size: 14px;\n  font-family: \"Quicksand\", sans-serif;\n  word-break: break-all;\n}\n.partner .info-view a {\n  word-break: break-all;\n}\n.partner .info-view h5 {\n  position: relative;\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n}\n.partner .info-view h5::after {\n  content: \"\";\n  background: rgba(255, 255, 255, 0.5);\n  height: 1px;\n  width: 50px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n.shsn-league {\n  background-color: rgba(247, 247, 247, 0.5);\n}\n.shsn-league img {\n  -webkit-filter: grayscale(100%);\n  filter: grayscale(100%);\n}\n.shsn-league .slick-slide img {\n  width: 100%;\n}\n.shsn-league .slick-slide h6 {\n  margin-bottom: 0;\n  margin-top: 15px;\n  line-height: 18px;\n  font-weight: bold;\n}\n.shsn-league .slick-slide p {\n  white-space: pre;\n}\n.clear-float {\n  clear: both;\n  float: none;\n}\n.main-banner {\n  height: 666px;\n  overflow: hidden;\n  margin-top: 70px;\n}\n.main-banner video {\n  width: 100%;\n}\n.newsletter {\n  background: #3e65ac;\n  padding: 40px 15px;\n}\n.newsletter .form-inline {\n  margin: 0 auto;\n}\n.newsletter label {\n  color: #000;\n  font-size: 20px;\n  margin-right: 15px;\n}\n.newsletter .btn {\n  background: #000;\n  color: #fff;\n  margin-left: 15px;\n  padding: 9px 15px;\n  text-transform: uppercase;\n  font-size: 14px;\n}\n@media (max-width: 576px) {\n  .section-admission .admission-flag .flag-pos {\n    top: 0;\n    left: 0;\n    height: auto;\n  }\n\n  .section-curriculum-list {\n    transition: 1s;\n    display: block;\n    background: #f3f3f3;\n  }\n  .section-curriculum-list a:not(.active) {\n    display: none;\n  }\n  .section-curriculum-list li {\n    width: 100%;\n  }\n  .section-curriculum-list li a {\n    margin: 10px 0 !important;\n  }\n  .section-curriculum-list.drop-down-active a:not(.active) {\n    display: block;\n  }\n\n  .section-curriculum .row-f {\n    width: auto;\n  }\n\n  .testimonials img {\n    height: 100%;\n    right: 0;\n    width: auto;\n  }\n  .testimonials ::ng-deep .carousel-inner {\n    height: auto !important;\n    padding-bottom: 50px;\n  }\n  .testimonials ::ng-deep .carousel-control-next, .testimonials ::ng-deep .carousel-control-prev {\n    bottom: 10px;\n  }\n\n  .section-curriculum .curriculum-info {\n    margin-top: 0px;\n  }\n\n  .section-info {\n    margin-top: 30px;\n    padding-bottom: 0px;\n  }\n  .section-info img {\n    width: auto;\n    height: 100%;\n  }\n  .section-info .panel-container {\n    padding-bottom: 15px;\n    margin-bottom: 30px;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  }\n  .section-info .panel-container:last-child {\n    margin-bottom: 0;\n    border-bottom: 0;\n  }\n  .section-info svg {\n    width: 75px;\n    height: 75px;\n    margin-bottom: 30px;\n  }\n  .section-info .panel {\n    text-align: center;\n  }\n\n  .section-events {\n    width: 100%;\n  }\n  .section-events .events-grid li {\n    width: 100%;\n  }\n  .section-events .events-grid li figure {\n    width: 100%;\n    margin: 0 0 15px 0;\n  }\n\n  .section-curriculum .row-f {\n    margin-bottom: 30px;\n  }\n\n  .main-banner {\n    height: auto;\n  }\n\n  .newsletter .btn {\n    margin: 15px 0 0 0;\n  }\n\n  .shsn-league img {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcc2hzL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxlQUFBO0FDQ0Q7QURBQztFQUNDLG1CQUFBO0FDRUY7QURHQTtFQUNDLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNBRDtBRENDO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0FDQ0Y7QURFQztFQUNDLFdBQUE7QUNBRjtBREVDO0VBQ0MsVUFBQTtFQUNBLG1CQUFBO0FDQUY7QURFQztFQUNDLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQUY7QURJQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNERDtBRE1DO0VBQ0MsY0FBQTtBQ0hGO0FESUU7RUFDQyxXQUFBO0VBQ0EsaUJBQUE7QUNGSDtBRElFO0VBQ0MsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0ZIO0FES0M7RUFDQyxXQUFBO0FDSEY7QURJRTtFQUNDLG1CQUFBO0FDRkg7QURRQztFQUNDLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNMRjtBRE1FO0VBQ0MsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSwrQ0FBQTtBQ0pIO0FETVE7RUFDTCxzQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0pIO0FET0M7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0FDTEY7QURTRztFQUNDLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNQSjtBRFNHO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNQSjtBRFNHO0VBQ0MsZUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUNQSjtBRGlCSTtFQUNDLG1CQUFBO0FDZEw7QURtQkM7RUFDQyxXQUFBO0VBQ0EsV0FBQTtBQ2pCRjtBRGtCRTtFQUNDLFlBQUE7QUNoQkg7QURxQkM7RUFDQyxnQkFBQTtFQUNBLGtCQUFBO0FDbkJGO0FEb0JFO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ2xCSDtBRHNCRztFQUNDLDBCQUFBO0FDcEJKO0FEeUJJO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ3ZCTDtBRHdCSztFQUNDLGdCQUFBO0VBQ0EsY0FBQTtBQ3RCTjtBRHVCTTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ3JCUDtBRDhCQztFQUNDLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtBQzVCRjtBRDZCRTtFQUNDLGlCQUFBO0FDM0JIO0FENkJFO0VBQ0MsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUMzQkg7QUQ2QkU7RUFDQyxlQUFBO0FDM0JIO0FENkJFO0VBQ0MsV0FBQTtBQzNCSDtBRGlDRztFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FDL0JIO0FEb0NBO0VBQ0MsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNqQ0Q7QURrQ0M7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7QUNoQ0Y7QURrQ0M7RUFDQyxXQUFBO0VBQ0EsbUJBQUE7QUNoQ0Y7QURrQ0M7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNoQ0Y7QURpQ0U7RUFDQyxnQkFBQTtBQy9CSDtBRGtDQztFQUNDLGFBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNoQ0Y7QURrQ0M7RUFDQyxhQUFBO0FDaENGO0FEa0NDO0VBQ0MsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ2hDRjtBRGlDRTtFQUNDLGdCQUFBO0FDL0JIO0FEa0NDO0VBQ0Msc0NBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQ2hDRjtBRGlDRTtFQUNFLDZCQUFBO0VBQ0EsVUFBQTtBQy9CSjtBRGtDRzs7RUFFRCxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDRyxZQUFBO0FDaENMO0FEa0NFO0VBQ0MsWUFBQTtBQ2hDSDtBRGtDRTtFQUNDLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNoQ0g7QURxQ0E7RUFDQyxnQkFBQTtFQUNBLG1CQUFBO0FDbENEO0FEbUNDO0VBQ0MsZUFBQTtFQUNBLG9DQUFBO0FDakNGO0FEbUNDO0VBQ0MsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDakNGO0FEbUNHO0VBQ0MsY0FBQTtBQ2pDSjtBRG9DQztFQUNDLFlBQUE7RUFDQSxtQkFBQTtBQ2xDRjtBRG1DRTtFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNJLGNBQUE7QUNqQ1A7QURvQ0M7RUFDQyxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSwrQ0FBQTtBQ2xDRjtBRG1DRTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ2pDSDtBRG1DRTtFQUNDLCtCQUFBO0FDakNIO0FEbUNFO0VBQ0MsZUFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7QUNqQ0g7QURtQ0U7RUFDQyxxQkFBQTtBQ2pDSDtBRG1DRTtFQUNDLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQ2pDSDtBRGtDRztFQUNDLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtBQ2hDSjtBRHNDQTtFQUNDLDBDQUFBO0FDbkNEO0FEb0NDO0VBQ0MsK0JBQUE7RUFDQSx1QkFBQTtBQ2xDRjtBRHFDRTtFQUNFLFdBQUE7QUNuQ0o7QURxQ0U7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ25DSDtBRHFDRTtFQUNDLGdCQUFBO0FDbkNIO0FEd0NBO0VBQ0MsV0FBQTtFQUNBLFdBQUE7QUNyQ0Q7QUR1Q0E7RUFDQyxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ3BDRDtBRHFDQztFQUNDLFdBQUE7QUNuQ0Y7QUR3Q0E7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FDckNKO0FEc0NJO0VBQ0ksY0FBQTtBQ3BDUjtBRHNDSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNwQ1I7QUR1Q0k7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDckNSO0FEd0NBO0VBR0c7SUFDQyxNQUFBO0lBQ0EsT0FBQTtJQUNBLFlBQUE7RUN2Q0Y7O0VENENEO0lBQ0MsY0FBQTtJQUNBLGNBQUE7SUFDQSxtQkFBQTtFQ3pDQTtFRDBDQTtJQUNDLGFBQUE7RUN4Q0Q7RUQwQ0E7SUFDQyxXQUFBO0VDeENEO0VEeUNDO0lBQ0MseUJBQUE7RUN2Q0Y7RUQyQ0M7SUFDQyxjQUFBO0VDekNGOztFRGlEQTtJQUNDLFdBQUE7RUM5Q0Q7O0VEbURBO0lBQ0MsWUFBQTtJQUNBLFFBQUE7SUFDQSxXQUFBO0VDaEREO0VEa0RBO0lBQ0MsdUJBQUE7SUFDQSxvQkFBQTtFQ2hERDtFRG1EQTtJQUNFLFlBQUE7RUNqREY7O0VEc0RBO0lBQ0MsZUFBQTtFQ25ERDs7RUR3REQ7SUFDQyxnQkFBQTtJQUNBLG1CQUFBO0VDckRBO0VEc0RBO0lBQ0MsV0FBQTtJQUNBLFlBQUE7RUNwREQ7RURzREE7SUFDQyxvQkFBQTtJQUNBLG1CQUFBO0lBQ0EsaURBQUE7RUNwREQ7RURxREM7SUFDQyxnQkFBQTtJQUNBLGdCQUFBO0VDbkRGO0VEc0RBO0lBQ0MsV0FBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtFQ3BERDtFRHNEQztJQUNBLGtCQUFBO0VDcEREOztFRHdERDtJQUNDLFdBQUE7RUNyREE7RUR1REM7SUFDQyxXQUFBO0VDckRGO0VEc0RFO0lBQ0MsV0FBQTtJQUNBLGtCQUFBO0VDcERIOztFRDJEQTtJQUNDLG1CQUFBO0VDeEREOztFRDRERDtJQUNDLFlBQUE7RUN6REE7O0VENERBO0lBQ0Msa0JBQUE7RUN6REQ7O0VENkRBO0lBQ0MsV0FBQTtFQzFERDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24tYWJvdXQsIC5zZWN0aW9uLW5vZmlmeSwgLnNoc24tbGVhZ3VlLCAuc2VjdGlvbi1ldmVudHMsIC5zZWN0aW9uLXNwYWNpbmd7XHJcblx0cGFkZGluZzo3MHB4IDA7XHJcblx0aDF7XHJcblx0XHRtYXJnaW4tYm90dG9tOjQwcHg7XHJcblx0fVxyXG59XHJcblxyXG5cclxuLnNlY3Rpb24taW5mb3tcclxuXHRiYWNrZ3JvdW5kOiMzZTY1YWM7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG92ZXJmbG93OmhpZGRlbjtcclxuXHRwYWRkaW5nOjUwcHggMDtcclxuXHRpbWd7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRvcGFjaXR5Oi40O1xyXG5cdH1cclxuXHRcclxuXHRoMSwgcHtcclxuXHRcdGNvbG9yOiNmZmY7XHJcblx0fVxyXG5cdHN2Z3tcclxuXHRcdGZpbGw6I2ZmZjtcclxuXHRcdG1hcmdpbi1ib3R0b206MTBweDtcclxuXHR9XHJcblx0LnBhbmVsLWNvbnRhaW5lcntcclxuXHRcdG1hcmdpbjogMzBweCBhdXRvIDA7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcbn1cclxuXHJcbi52LWFsaWdue1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRoZWlnaHQ6MTAwJTtcclxuXHRwYWRkaW5nOjE1cHggMDtcclxufVxyXG5cclxuLnNlY3Rpb24tbm9maWZ5e1xyXG5cdFxyXG5cdGg1e1xyXG5cdFx0ZGlzcGxheTp0YWJsZTtcclxuXHRcdHNwYW57XHJcblx0XHRcdGZsb2F0OmxlZnQ7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0fVxyXG5cdFx0JjphZnRlcnsgXHJcblx0XHRcdGNvbnRlbnQ6IFwiIFwiO1xyXG5cdFx0XHRmbG9hdDpsZWZ0O1xyXG5cdFx0XHR3aWR0aDo3NXB4O1xyXG5cdFx0XHRoZWlnaHQ6MnB4O1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiNjY2M7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OjE1cHg7XHJcblx0XHRcdG1hcmdpbi10b3A6IDEzcHg7XHJcblx0XHR9XHJcblx0fVxyXG5cdHVsLmxpc3QgbGl7XHJcblx0XHRjb2xvcjojMDAwO1xyXG5cdFx0Jjo6YmVmb3Jle1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiNiZjI3MmQ7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4uc2VjdGlvbi1hZG1pc3Npb257XHJcblx0LmFkbWlzc2lvbi1mbGFne1xyXG5cdFx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0XHR0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHRcdGNvbG9yOiNmZmY7XHJcblx0XHRwYWRkaW5nOjI1cHggMDtcclxuXHRcdGhlaWdodDoyNTBweDtcclxuXHRcdC5mbGFnLXBvc3tcclxuXHRcdFx0Y29udGVudDonJztcclxuXHRcdFx0YmFja2dyb3VuZDojYmYyNzJkO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHRvcDogLTI1cHg7XHJcblx0XHRcdGxlZnQ6IDBweDtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGhlaWdodDogY2FsYygxMDAlICsgMTAwcHgpO1xyXG5cdFx0XHR6LWluZGV4OiAxO1xyXG5cdFx0XHRib3gtc2hhZG93OiA3cHggNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuXHRcdH1cclxuICAgICAgICAuYnRue1xyXG5cdFx0XHRib3JkZXI6MXB4IHNvbGlkICNmZmY7XHJcblx0XHRcdGNvbG9yOiNmZmY7XHJcblx0XHRcdGJhY2tncm91bmQ6bm9uZTtcclxuXHRcdH1cclxuXHR9XHJcblx0cHtcclxuXHRcdHdoaXRlLXNwYWNlOiBwcmU7XHJcblx0XHRtYXJnaW4tdG9wOjE1cHg7XHJcblx0fVxyXG5cdC5jYXJvdXNlbHtcclxuXHRcdC5wYW5lbHtcclxuXHRcdFx0aXtcclxuXHRcdFx0XHRtYXJnaW46MCBhdXRvO1xyXG5cdFx0XHRcdGRpc3BsYXk6YmxvY2s7XHJcblx0XHRcdFx0dGV4dC1hbGlnbjpjZW50ZXI7XHJcblx0XHRcdH1cclxuXHRcdFx0c3Zne1xyXG5cdFx0XHRcdHdpZHRoOjc1cHg7XHJcblx0XHRcdFx0aGVpZ2h0Ojc1cHg7XHJcblx0XHRcdH1cclxuXHRcdFx0cHtcclxuXHRcdFx0XHRmb250LXNpemU6MjBweDtcclxuXHRcdFx0XHRmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xyXG5cdFx0XHRcdHRleHQtYWxpZ246Y2VudGVyO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4uc2VjdGlvbi1jdXJyaWN1bHVte1xyXG5cdHVse1xyXG5cdFx0Ji5saXN0IHtcclxuXHRcdFx0bGl7XHJcblx0XHRcdFx0Jjo6YmVmb3Jle1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDojYmYyNzJkO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQucm93LWZ7XHJcblx0XHRmbG9hdDpsZWZ0O1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHRcdC5wMHtcclxuXHRcdFx0cGFkZGluZzowcHg7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG5cdC5zZWN0aW9uLWN1cnJpY3VsdW0tbGlzdHtcclxuXHRcdG1hcmdpbi10b3A6MTVweDtcclxuXHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0LmRyb3AtZG93bntcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRyaWdodDoxNXB4O1xyXG5cdFx0XHR0b3A6MTBweDtcclxuXHRcdFx0d2lkdGg6IGF1dG87XHJcblx0XHRcdHRyYW5zaXRpb246IC4xcztcclxuXHRcdFx0XHJcblx0XHR9XHJcblx0XHQmLmRyb3AtZG93bi1hY3RpdmV7XHJcblx0XHRcdHN2Z3tcclxuXHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Ji5uYXYtcGlsbHN7XHJcblx0XHRcdGxpe1xyXG5cdFx0XHRcdC5uYXYtbGlua3tcclxuXHRcdFx0XHRcdGNvbG9yOiAjMDAwO1xyXG5cdFx0XHRcdFx0cGFkZGluZy1sZWZ0OjUwcHg7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOjMwcHg7XHJcblx0XHRcdFx0XHQmLmFjdGl2ZXtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDpub25lO1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogIzNlNjVhYztcclxuXHRcdFx0XHRcdFx0Jjo6YWZ0ZXJ7XHJcblx0XHRcdFx0XHRcdFx0Y29udGVudDogXCJcIjtcclxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRcdFx0bGVmdDowO1xyXG5cdFx0XHRcdFx0XHRcdHRvcDoxN3B4O1xyXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA0MHB4O1xyXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMnB4O1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICMzZTY1YWM7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0LmN1cnJpY3VsdW0taW5mb3tcclxuXHRcdG1hcmdpbi10b3A6LTUwcHg7XHJcblx0XHRiYWNrZ3JvdW5kOiNmZmY7XHJcblx0XHRwYWRkaW5nOjMwcHg7XHJcblx0XHRjb2xvcjojMDAwO1xyXG5cdFx0Zm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XHJcblx0XHRmb250LXNpemU6MTZweDtcclxuXHRcdGg1e1xyXG5cdFx0XHRmb250LXdlaWdodDpib2xkO1xyXG5cdFx0fVxyXG5cdFx0LmJ0bntcclxuXHRcdFx0YmFja2dyb3VuZDpub25lO1xyXG5cdFx0XHRib3JkZXI6MnB4IHNvbGlkICMwMDA7XHJcblx0XHRcdGNvbG9yOiMwMDA7XHJcblx0XHRcdGZsb2F0OnJpZ2h0O1xyXG5cdFx0XHRmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xyXG5cdFx0fVxyXG5cdFx0cHtcclxuXHRcdFx0Zm9udC1zaXplOjE0cHg7XHJcblx0XHR9XHJcblx0XHR1bC5saXN0IGxpe1xyXG5cdFx0XHRjb2xvcjojMDAwO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHJcblx0LnRleHQtaGlnaGxpZ2h0ZXJ7XHJcblx0XHRcdCY6YWZ0ZXJ7XHJcblx0XHRcdGNvbnRlbnQ6IFwiIFwiO1xyXG5cdFx0XHRmbG9hdDogbGVmdDtcclxuXHRcdFx0d2lkdGg6IDQwcHg7XHJcblx0XHRcdGhlaWdodDogMnB4O1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjM2U2NWFjO1xyXG5cdFx0XHRtYXJnaW46IDEwcHggMHB4IDAgLTQ1cHg7XHJcblx0XHRcdH1cclxuXHRcdH0gXHJcbn1cclxuXHJcbjo6bmctZGVlcCAudGVzdGltb25pYWxze1xyXG5cdGJhY2tncm91bmQ6I2JmMjcyZDtcclxuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdHBhZGRpbmctdG9wOjUwcHg7XHJcblx0aW1ne1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDowO1xyXG5cdFx0bGVmdDowO1xyXG5cdFx0b3BhY2l0eTowLjU7XHJcblx0fVxyXG5cdGgxe1xyXG5cdFx0Y29sb3I6I2ZmZjtcclxuXHRcdG1hcmdpbi1ib3R0b206MjBweDtcclxuXHR9XHJcblx0cHtcclxuXHRcdGZvbnQtc2l6ZToxOHB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6NzAwO1xyXG5cdFx0Y29sb3I6I2ZmZjtcclxuXHRcdG1hcmdpbi1ib3R0b206NXB4O1xyXG5cdFx0JjpsYXN0LWNoaWxke1xyXG5cdFx0XHRtYXJnaW4tdG9wOjM1cHg7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5jYXJvdXNlbHtcclxuXHRcdG1hcmdpbi10b3A6MDtcclxuXHRcdHotaW5kZXg6MTtcclxuXHRcdG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG5cdH1cclxuXHQuY2Fyb3VzZWwtaW5uZXJ7XHJcblx0XHRoZWlnaHQ6MzkwcHg7XHJcblx0fVxyXG5cdC5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpe1xyXG5cdFx0aGVpZ2h0OjEwcHg7XHJcblx0XHRib3JkZXItcmFkaXVzOjEwcHg7XHJcblx0XHRib3JkZXI6MXB4IHNvbGlkICNmZmY7XHJcblx0XHRiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG5cdFx0Ji5hY3RpdmV7XHJcblx0XHRcdGJhY2tncm91bmQ6I2ZmZjtcclxuXHRcdH1cclxuXHR9XHJcblx0LmNhcm91c2VsLWl0ZW0ge1xyXG5cdFx0dHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlICFpbXBvcnRhbnQ7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuXHRcdGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcblx0XHRvcGFjaXR5OiAwO1xyXG5cdFx0Ji5hY3RpdmUge1xyXG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdG9wYWNpdHk6IDE7XHJcblx0XHRcdCAgfVxyXG5cdCAgfVxyXG5cdCAgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCwgXHJcblx0ICAuY2Fyb3VzZWwtY29udHJvbC1wcmV2e1xyXG5cdFx0bGVmdDphdXRvO1xyXG5cdFx0cmlnaHQ6MDtcclxuXHRcdHRvcDogYXV0bztcclxuICAgIFx0Ym90dG9tOiA3NXB4O1xyXG5cdFx0fVxyXG5cdFx0LmNhcm91c2VsLWNvbnRyb2wtcHJldntcclxuXHRcdFx0cmlnaHQ6MTAwcHg7XHJcblx0XHR9XHJcblx0XHQuY2xpZW50LW5hbWV7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRjb2xvcjojMDAwO1xyXG5cdFx0XHRmb250LXNpemU6IDIwcHg7XHJcblx0XHR9XHJcbn1cclxuXHJcblxyXG4ucGFydG5lcntcclxuXHRtYXJnaW4tdG9wOjcwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTo3MHB4O1xyXG5cdHB7XHJcblx0XHRmb250LXNpemU6MTZweDtcdFxyXG5cdFx0Zm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XHJcblx0fVxyXG5cdC5wYW5lbHtcclxuXHRcdGhlaWdodDozMDBweDtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGJhY2tncm91bmQ6I2ZmZjtcclxuXHRcdHBhZGRpbmc6MzBweDtcclxuXHRcdCY6aG92ZXJ7XHJcblx0XHRcdC5pbmZvLXZpZXd7XHJcblx0XHRcdFx0ZGlzcGxheTpibG9jazt9XHJcblx0XHR9XHJcblx0fVxyXG5cdC5pbWctYm94e1xyXG5cdFx0aGVpZ2h0Ojk1cHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOjI1cHg7XHJcblx0XHRpbWd7XHJcblx0XHRcdGhlaWdodDoxMDAlO1xyXG5cdFx0XHR3aWR0aDphdXRvO1xyXG5cdFx0XHRtYXJnaW46MCBhdXRvO1xyXG5cdFx0ICAgICBkaXNwbGF5OmJsb2NrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQuaW5mby12aWV3e1xyXG5cdFx0cGFkZGluZzoyMHB4O1xyXG5cdFx0ZGlzcGxheTpub25lO1xyXG5cdFx0YmFja2dyb3VuZDojM2U2NWFjO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAtMjVweDtcclxuXHRcdGxlZnQ6IDBweDtcclxuXHRcdHdpZHRoOiAxMTAlO1xyXG5cdFx0aGVpZ2h0OmNhbGMoMTAwJSArIDUwcHgpO1xyXG5cdFx0ei1pbmRleDogMTtcclxuXHRcdGJveC1zaGFkb3c6IDBweCAycHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5cdFx0LmltZy1ib3h7XHJcblx0XHRcdHdpZHRoOjc1cHg7XHJcblx0XHRcdGhlaWdodDo3NXB4O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOjUwJTtcclxuXHRcdFx0b3ZlcmZsb3c6aGlkZGVuO1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOjA7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206MjBweDtcclxuXHRcdFx0YmFja2dyb3VuZDojZmZmO1xyXG5cdFx0fVxyXG5cdFx0cCxoNSxhe1xyXG5cdFx0XHRjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcblx0XHR9XHJcblx0XHRwe1xyXG5cdFx0XHRmb250LXNpemU6MTRweDtcclxuXHRcdFx0Zm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XHJcblx0XHRcdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuXHRcdH1cclxuXHRcdGF7XHJcblx0XHRcdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuXHRcdH1cclxuXHRcdGg1e1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdHBhZGRpbmctYm90dG9tOjEwcHg7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206MTBweDtcclxuXHRcdFx0Jjo6YWZ0ZXJ7XHJcblx0XHRcdFx0Y29udGVudDogXCJcIjtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuXHRcdFx0XHRoZWlnaHQ6MXB4O1xyXG5cdFx0XHRcdHdpZHRoOjUwcHg7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdGJvdHRvbTowO1xyXG5cdFx0XHRcdGxlZnQ6MDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLnNoc24tbGVhZ3Vle1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LCAyNDcsIDI0NywgLjUpO1xyXG5cdGltZ3tcclxuXHRcdC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XHJcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XHJcblx0ICB9XHJcblx0LnNsaWNrLXNsaWRle1xyXG5cdFx0aW1ne1xyXG5cdFx0ICB3aWR0aDogMTAwJTtcclxuXHRcdH1cclxuXHRcdGg2e1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOjA7XHJcblx0XHRcdG1hcmdpbi10b3A6MTVweDtcclxuXHRcdFx0bGluZS1oZWlnaHQ6MThweDtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHRcdH1cclxuXHRcdHB7XHJcblx0XHRcdHdoaXRlLXNwYWNlOiBwcmU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4uY2xlYXItZmxvYXR7XHJcblx0Y2xlYXI6Ym90aDtcclxuXHRmbG9hdDpub25lO1xyXG59XHJcbi5tYWluLWJhbm5lcntcclxuXHRoZWlnaHQ6IDY2NnB4O1x0XHJcblx0b3ZlcmZsb3c6aGlkZGVuO1xyXG5cdG1hcmdpbi10b3A6NzBweDtcclxuXHR2aWRlb3tcclxuXHRcdHdpZHRoOjEwMCUgOyBcclxuXHR9XHJcbn1cclxuXHJcblxyXG4ubmV3c2xldHRlcntcclxuICAgIGJhY2tncm91bmQ6IzNlNjVhYztcclxuICAgIHBhZGRpbmc6NDBweCAxNXB4O1xyXG4gICAgLmZvcm0taW5saW5le1xyXG4gICAgICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICB9XHJcbiAgICBsYWJlbHtcclxuICAgICAgICBjb2xvcjojMDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDoxNXB4O1xyXG5cclxuICAgIH1cclxuICAgIC5idG57XHJcbiAgICAgICAgYmFja2dyb3VuZDojMDAwO1xyXG4gICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTVweDtcclxuICAgICAgICBwYWRkaW5nOjlweCAxNXB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KXtcclxuXHQuc2VjdGlvbi1hZG1pc3Npb257XHJcblx0XHQuYWRtaXNzaW9uLWZsYWd7XHJcblx0XHRcdC5mbGFnLXBvc3tcclxuXHRcdFx0XHR0b3A6MDtcclxuXHRcdFx0XHRsZWZ0OjA7XHJcblx0XHRcdFx0aGVpZ2h0OmF1dG87XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5zZWN0aW9uLWN1cnJpY3VsdW0tbGlzdHsgXHJcblx0XHR0cmFuc2l0aW9uOiAxcztcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0YmFja2dyb3VuZDogcmdiKDI0MywgMjQzLCAyNDMpO1xyXG5cdFx0YTpub3QoLmFjdGl2ZSl7XHJcblx0XHRcdGRpc3BsYXk6bm9uZTtcclxuXHRcdH1cclxuXHRcdGxpe1xyXG5cdFx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0XHRhe1xyXG5cdFx0XHRcdG1hcmdpbjogMTBweCAwICFpbXBvcnRhbnQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdCYuZHJvcC1kb3duLWFjdGl2ZXtcclxuXHRcdFx0YTpub3QoLmFjdGl2ZSl7XHJcblx0XHRcdFx0ZGlzcGxheTpibG9jaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0XHJcblxyXG5cdC5zZWN0aW9uLWN1cnJpY3VsdW17XHJcblx0XHQucm93LWZ7XHJcblx0XHRcdHdpZHRoOmF1dG87XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQudGVzdGltb25pYWxzIHtcclxuXHRcdGltZyB7XHJcblx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0cmlnaHQ6IDA7XHJcblx0XHRcdHdpZHRoOiBhdXRvO1xyXG5cdFx0fVxyXG5cdFx0OjpuZy1kZWVwIC5jYXJvdXNlbC1pbm5lcntcclxuXHRcdFx0aGVpZ2h0OmF1dG8gIWltcG9ydGFudDtcclxuXHRcdFx0cGFkZGluZy1ib3R0b206NTBweDtcclxuXHRcdH1cclxuXHJcblx0XHQ6Om5nLWRlZXAgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCwgOjpuZy1kZWVwIC5jYXJvdXNlbC1jb250cm9sLXByZXZ7XHJcblx0XHRcdFx0Ym90dG9tOjEwcHg7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQuc2VjdGlvbi1jdXJyaWN1bHVtIHtcclxuXHRcdC5jdXJyaWN1bHVtLWluZm97XHJcblx0XHRcdG1hcmdpbi10b3A6MHB4O1xyXG5cdFx0XHRcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5zZWN0aW9uLWluZm97XHJcblx0XHRtYXJnaW4tdG9wOiAzMHB4O1xyXG5cdFx0cGFkZGluZy1ib3R0b206MHB4O1xyXG5cdFx0aW1ne1xyXG5cdFx0XHR3aWR0aDphdXRvO1xyXG5cdFx0XHRoZWlnaHQ6MTAwJTtcclxuXHRcdH1cclxuXHRcdC5wYW5lbC1jb250YWluZXJ7XHJcblx0XHRcdHBhZGRpbmctYm90dG9tOjE1cHg7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206MzBweDtcclxuXHRcdFx0Ym9yZGVyLWJvdHRvbToxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG5cdFx0XHQmOmxhc3QtY2hpbGR7XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTowO1xyXG5cdFx0XHRcdGJvcmRlci1ib3R0b206MDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0c3Zne1xyXG5cdFx0XHR3aWR0aDogNzVweDtcclxuXHRcdFx0aGVpZ2h0OiA3NXB4O1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOjMwcHg7XHJcblx0XHR9XHJcblx0XHQgLnBhbmVse1xyXG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHQgfVxyXG5cdH1cclxuXHJcblx0LnNlY3Rpb24tZXZlbnRze1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHRcdC5ldmVudHMtZ3JpZHtcclxuXHRcdFx0bGl7XHJcblx0XHRcdFx0d2lkdGg6MTAwJTtcclxuXHRcdFx0XHRmaWd1cmV7XHJcblx0XHRcdFx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0XHRcdFx0bWFyZ2luOjAgMCAxNXB4IDA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQuc2VjdGlvbi1jdXJyaWN1bHVtIHtcclxuXHRcdC5yb3ctZntcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTozMHB4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Lm1haW4tYmFubmVye1xyXG5cdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdH1cclxuXHQubmV3c2xldHRlciB7XHJcblx0XHQuYnRue1xyXG5cdFx0XHRtYXJnaW46MTVweCAwIDAgMDtcclxuXHRcdH1cclxuXHR9XHJcblx0LnNoc24tbGVhZ3Vle1xyXG5cdFx0aW1ne1xyXG5cdFx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsIi5zZWN0aW9uLWFib3V0LCAuc2VjdGlvbi1ub2ZpZnksIC5zaHNuLWxlYWd1ZSwgLnNlY3Rpb24tZXZlbnRzLCAuc2VjdGlvbi1zcGFjaW5nIHtcbiAgcGFkZGluZzogNzBweCAwO1xufVxuLnNlY3Rpb24tYWJvdXQgaDEsIC5zZWN0aW9uLW5vZmlmeSBoMSwgLnNoc24tbGVhZ3VlIGgxLCAuc2VjdGlvbi1ldmVudHMgaDEsIC5zZWN0aW9uLXNwYWNpbmcgaDEge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4uc2VjdGlvbi1pbmZvIHtcbiAgYmFja2dyb3VuZDogIzNlNjVhYztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiA1MHB4IDA7XG59XG4uc2VjdGlvbi1pbmZvIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMC40O1xufVxuLnNlY3Rpb24taW5mbyBoMSwgLnNlY3Rpb24taW5mbyBwIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uc2VjdGlvbi1pbmZvIHN2ZyB7XG4gIGZpbGw6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbC1jb250YWluZXIge1xuICBtYXJnaW46IDMwcHggYXV0byAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udi1hbGlnbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHggMDtcbn1cblxuLnNlY3Rpb24tbm9maWZ5IGg1IHtcbiAgZGlzcGxheTogdGFibGU7XG59XG4uc2VjdGlvbi1ub2ZpZnkgaDUgc3BhbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zZWN0aW9uLW5vZmlmeSBoNTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbn1cbi5zZWN0aW9uLW5vZmlmeSB1bC5saXN0IGxpIHtcbiAgY29sb3I6ICMwMDA7XG59XG4uc2VjdGlvbi1ub2ZpZnkgdWwubGlzdCBsaTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbn1cblxuLnNlY3Rpb24tYWRtaXNzaW9uIC5hZG1pc3Npb24tZmxhZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMjVweCAwO1xuICBoZWlnaHQ6IDI1MHB4O1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uIC5hZG1pc3Npb24tZmxhZyAuZmxhZy1wb3Mge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTI1cHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDAlICsgMTAwcHgpO1xuICB6LWluZGV4OiAxO1xuICBib3gtc2hhZG93OiA3cHggNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiAuYWRtaXNzaW9uLWZsYWcgLmJ0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uIHAge1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uIC5jYXJvdXNlbCAucGFuZWwgaSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uIC5jYXJvdXNlbCAucGFuZWwgc3ZnIHtcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogNzVweDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiAuY2Fyb3VzZWwgLnBhbmVsIHAge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNlY3Rpb24tY3VycmljdWx1bSB1bC5saXN0IGxpOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xufVxuLnNlY3Rpb24tY3VycmljdWx1bSAucm93LWYge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2VjdGlvbi1jdXJyaWN1bHVtIC5yb3ctZiAucDAge1xuICBwYWRkaW5nOiAwcHg7XG59XG4uc2VjdGlvbi1jdXJyaWN1bHVtIC5zZWN0aW9uLWN1cnJpY3VsdW0tbGlzdCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWN0aW9uLWN1cnJpY3VsdW0gLnNlY3Rpb24tY3VycmljdWx1bS1saXN0IC5kcm9wLWRvd24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xuICB0b3A6IDEwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICB0cmFuc2l0aW9uOiAwLjFzO1xufVxuLnNlY3Rpb24tY3VycmljdWx1bSAuc2VjdGlvbi1jdXJyaWN1bHVtLWxpc3QuZHJvcC1kb3duLWFjdGl2ZSBzdmcge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbn1cbi5zZWN0aW9uLWN1cnJpY3VsdW0gLnNlY3Rpb24tY3VycmljdWx1bS1saXN0Lm5hdi1waWxscyBsaSAubmF2LWxpbmsge1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uc2VjdGlvbi1jdXJyaWN1bHVtIC5zZWN0aW9uLWN1cnJpY3VsdW0tbGlzdC5uYXYtcGlsbHMgbGkgLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiAjM2U2NWFjO1xufVxuLnNlY3Rpb24tY3VycmljdWx1bSAuc2VjdGlvbi1jdXJyaWN1bHVtLWxpc3QubmF2LXBpbGxzIGxpIC5uYXYtbGluay5hY3RpdmU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDE3cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogIzNlNjVhYztcbn1cbi5zZWN0aW9uLWN1cnJpY3VsdW0gLmN1cnJpY3VsdW0taW5mbyB7XG4gIG1hcmdpbi10b3A6IC01MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAzMHB4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5zZWN0aW9uLWN1cnJpY3VsdW0gLmN1cnJpY3VsdW0taW5mbyBoNSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNlY3Rpb24tY3VycmljdWx1bSAuY3VycmljdWx1bS1pbmZvIC5idG4ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xuICBjb2xvcjogIzAwMDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xufVxuLnNlY3Rpb24tY3VycmljdWx1bSAuY3VycmljdWx1bS1pbmZvIHAge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uc2VjdGlvbi1jdXJyaWN1bHVtIC5jdXJyaWN1bHVtLWluZm8gdWwubGlzdCBsaSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnNlY3Rpb24tY3VycmljdWx1bSAudGV4dC1oaWdobGlnaHRlcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjM2U2NWFjO1xuICBtYXJnaW46IDEwcHggMHB4IDAgLTQ1cHg7XG59XG5cbjo6bmctZGVlcCAudGVzdGltb25pYWxzIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cbjo6bmctZGVlcCAudGVzdGltb25pYWxzIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMC41O1xufVxuOjpuZy1kZWVwIC50ZXN0aW1vbmlhbHMgaDEge1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbjo6bmctZGVlcCAudGVzdGltb25pYWxzIHAge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG46Om5nLWRlZXAgLnRlc3RpbW9uaWFscyBwOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAzNXB4O1xufVxuOjpuZy1kZWVwIC50ZXN0aW1vbmlhbHMgLmNhcm91c2VsIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG46Om5nLWRlZXAgLnRlc3RpbW9uaWFscyAuY2Fyb3VzZWwtaW5uZXIge1xuICBoZWlnaHQ6IDM5MHB4O1xufVxuOjpuZy1kZWVwIC50ZXN0aW1vbmlhbHMgLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuOjpuZy1kZWVwIC50ZXN0aW1vbmlhbHMgLmNhcm91c2VsLWluZGljYXRvcnMgbGkuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbjo6bmctZGVlcCAudGVzdGltb25pYWxzIC5jYXJvdXNlbC1pdGVtIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwO1xufVxuOjpuZy1kZWVwIC50ZXN0aW1vbmlhbHMgLmNhcm91c2VsLWl0ZW0uYWN0aXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDE7XG59XG46Om5nLWRlZXAgLnRlc3RpbW9uaWFscyAuY2Fyb3VzZWwtY29udHJvbC1uZXh0LFxuOjpuZy1kZWVwIC50ZXN0aW1vbmlhbHMgLmNhcm91c2VsLWNvbnRyb2wtcHJldiB7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAwO1xuICB0b3A6IGF1dG87XG4gIGJvdHRvbTogNzVweDtcbn1cbjo6bmctZGVlcCAudGVzdGltb25pYWxzIC5jYXJvdXNlbC1jb250cm9sLXByZXYge1xuICByaWdodDogMTAwcHg7XG59XG46Om5nLWRlZXAgLnRlc3RpbW9uaWFscyAuY2xpZW50LW5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnBhcnRuZXIge1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xufVxuLnBhcnRuZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XG59XG4ucGFydG5lciAucGFuZWwge1xuICBoZWlnaHQ6IDMwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG4ucGFydG5lciAucGFuZWw6aG92ZXIgLmluZm8tdmlldyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnBhcnRuZXIgLmltZy1ib3gge1xuICBoZWlnaHQ6IDk1cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4ucGFydG5lciAuaW1nLWJveCBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ucGFydG5lciAuaW5mby12aWV3IHtcbiAgcGFkZGluZzogMjBweDtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZDogIzNlNjVhYztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yNXB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMTAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSArIDUwcHgpO1xuICB6LWluZGV4OiAxO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5wYXJ0bmVyIC5pbmZvLXZpZXcgLmltZy1ib3gge1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiA3NXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4ucGFydG5lciAuaW5mby12aWV3IHAsIC5wYXJ0bmVyIC5pbmZvLXZpZXcgaDUsIC5wYXJ0bmVyIC5pbmZvLXZpZXcgYSB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG4ucGFydG5lciAuaW5mby12aWV3IHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG4ucGFydG5lciAuaW5mby12aWV3IGEge1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG4ucGFydG5lciAuaW5mby12aWV3IGg1IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5wYXJ0bmVyIC5pbmZvLXZpZXcgaDU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xufVxuXG4uc2hzbi1sZWFndWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywgMjQ3LCAyNDcsIDAuNSk7XG59XG4uc2hzbi1sZWFndWUgaW1nIHtcbiAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG59XG4uc2hzbi1sZWFndWUgLnNsaWNrLXNsaWRlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNoc24tbGVhZ3VlIC5zbGljay1zbGlkZSBoNiB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zaHNuLWxlYWd1ZSAuc2xpY2stc2xpZGUgcCB7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG59XG5cbi5jbGVhci1mbG9hdCB7XG4gIGNsZWFyOiBib3RoO1xuICBmbG9hdDogbm9uZTtcbn1cblxuLm1haW4tYmFubmVyIHtcbiAgaGVpZ2h0OiA2NjZweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLXRvcDogNzBweDtcbn1cbi5tYWluLWJhbm5lciB2aWRlbyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubmV3c2xldHRlciB7XG4gIGJhY2tncm91bmQ6ICMzZTY1YWM7XG4gIHBhZGRpbmc6IDQwcHggMTVweDtcbn1cbi5uZXdzbGV0dGVyIC5mb3JtLWlubGluZSB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLm5ld3NsZXR0ZXIgbGFiZWwge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4ubmV3c2xldHRlciAuYnRuIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nOiA5cHggMTVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnNlY3Rpb24tYWRtaXNzaW9uIC5hZG1pc3Npb24tZmxhZyAuZmxhZy1wb3Mge1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIC5zZWN0aW9uLWN1cnJpY3VsdW0tbGlzdCB7XG4gICAgdHJhbnNpdGlvbjogMXM7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgfVxuICAuc2VjdGlvbi1jdXJyaWN1bHVtLWxpc3QgYTpub3QoLmFjdGl2ZSkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnNlY3Rpb24tY3VycmljdWx1bS1saXN0IGxpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuc2VjdGlvbi1jdXJyaWN1bHVtLWxpc3QgbGkgYSB7XG4gICAgbWFyZ2luOiAxMHB4IDAgIWltcG9ydGFudDtcbiAgfVxuICAuc2VjdGlvbi1jdXJyaWN1bHVtLWxpc3QuZHJvcC1kb3duLWFjdGl2ZSBhOm5vdCguYWN0aXZlKSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuc2VjdGlvbi1jdXJyaWN1bHVtIC5yb3ctZiB7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cblxuICAudGVzdGltb25pYWxzIGltZyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG4gIC50ZXN0aW1vbmlhbHMgOjpuZy1kZWVwIC5jYXJvdXNlbC1pbm5lciB7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gIH1cbiAgLnRlc3RpbW9uaWFscyA6Om5nLWRlZXAgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCwgLnRlc3RpbW9uaWFscyA6Om5nLWRlZXAgLmNhcm91c2VsLWNvbnRyb2wtcHJldiB7XG4gICAgYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgLnNlY3Rpb24tY3VycmljdWx1bSAuY3VycmljdWx1bS1pbmZvIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gIH1cblxuICAuc2VjdGlvbi1pbmZvIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIH1cbiAgLnNlY3Rpb24taW5mbyBpbWcge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAuc2VjdGlvbi1pbmZvIC5wYW5lbC1jb250YWluZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgfVxuICAuc2VjdGlvbi1pbmZvIC5wYW5lbC1jb250YWluZXI6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBib3JkZXItYm90dG9tOiAwO1xuICB9XG4gIC5zZWN0aW9uLWluZm8gc3ZnIHtcbiAgICB3aWR0aDogNzVweDtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuICAuc2VjdGlvbi1pbmZvIC5wYW5lbCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLnNlY3Rpb24tZXZlbnRzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuc2VjdGlvbi1ldmVudHMgLmV2ZW50cy1ncmlkIGxpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuc2VjdGlvbi1ldmVudHMgLmV2ZW50cy1ncmlkIGxpIGZpZ3VyZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIDAgMTVweCAwO1xuICB9XG5cbiAgLnNlY3Rpb24tY3VycmljdWx1bSAucm93LWYge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cblxuICAubWFpbi1iYW5uZXIge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIC5uZXdzbGV0dGVyIC5idG4ge1xuICAgIG1hcmdpbjogMTVweCAwIDAgMDtcbiAgfVxuXG4gIC5zaHNuLWxlYWd1ZSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    ;

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(router, renderer) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
        this.renderer = renderer;
        this.partnerConfig = {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 1500,
          arrows: true,
          responsive: [{
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 1
            }
          }, {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 1
            }
          }]
        };
        this.partner = [{
          description: "Metamor-\n      phosis",
          description_2: "An organisation that\n      seeks to empower \n      youth with an\n      entrepreneurial skillset.",
          link: "http://www.metamor\n      phosisedu.com"
        }, {
          description: "Sportz Village",
          description_2: "A platform that focuses on \n      aspects of physical education",
          link: "https://www.sportzvillage.com/schools/ "
        }, {
          description: "Furtados\n      School Of\n      Music",
          description_2: "One of  largest\n      music educators of India",
          link: "https://furtadosschoolofmusic.com"
        }, {
          description: "Yardstick",
          description_2: "Learning programs that\n      enhance  child's experience",
          link: " http://www.yardstickedu.com"
        }, {
          description: "NumberNagar",
          description_2: "An integrated program for Maths,\n      Science and English",
          link: "https://www.numbernagar.com/"
        }, {
          description: "Creya Learning",
          description_2: "An organisation that helps \n      children become inventors and innovators",
          link: "https://www.creyalearning.com/stem/"
        }, {
          description: "Book room from Scholastic",
          description_2: "Organising your books",
          link: "http://teacher.scholastic.com/products/leveledbookrooms/index.htm"
        }];
        this.banner = [{
          title: 'First slide label',
          description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        }, {
          title: 'Second slide label',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }, {
          title: 'Third slide label',
          description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
        }];
        this.slideConfig = {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 1500,
          arrows: true,
          responsive: [{
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }, {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }]
        };
        this.admissionConfig = {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 1500,
          arrows: true,
          responsive: [{
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }, {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }]
        };
        this.isOpen = true;
        this.admission = [{
          icon: '#icon_reading',
          description: "Sculpting\nYoung\nLearners"
        }, {
          icon: '#icon_education',
          description: "Imparting\nHolistic\nEducation"
        }, {
          icon: '#icon_emoDev',
          description: "Nurturing a\nProgressive\nMindset"
        }, {
          icon: '#icon_reading',
          description: "Sculpting\nYoung\nLearners"
        }, {
          icon: '#icon_education',
          description: "Imparting\nHolistic\nEducation"
        }, {
          icon: '#icon_emoDev',
          description: "Nurturing a\nProgressive\nMindset"
        }];
        this.notify = [{
          title: 'Vision',
          col: 'col-lg-5 col-md-5',
          description: 'Our vision is to raise, our ‘shs Pride’ to live ir dreams as a generation who are:',
          moreInfo: [{
            info: 'Resilient and Confident lifelong learners'
          }, {
            info: 'Agile and auntic individuals'
          }, {
            info: 'Innovative and intuitive changemakers'
          }, {
            info: 'Socially responsible and humble global citizens'
          }, {
            info: 'Empatic and humane souls who uphold integrity above all'
          }]
        }, {
          title: 'Mission',
          col: 'col-lg-4 col-md-4',
          description: "Our students will be equipped to meet  current and future challenges with\n      values of\n      ",
          moreInfo: [{
            info: 'Resilience'
          }, {
            info: 'Agility'
          }, {
            info: 'Integrity'
          }, {
            info: 'Social responsibility'
          }, {
            info: 'Empathy'
          }]
        }];
        this.solution = [{
          description: "Comprehensive Development",
          icon: '#icon_termDevelopment'
        }, {
          description: "Communication and\n      Vocational Training",
          icon: '#icon_commTrainning'
        }, {
          description: "Performing Arts",
          icon: '#icon_art'
        }, {
          description: "Sports",
          icon: '#icon_tophy'
        }, {
          description: "Health and Fitness",
          icon: '#icon_health'
        }, {
          description: "Emotional Development",
          icon: '#icon_emoDev'
        }];
        this.testimonials = [{
          clientView_1: 'SHS VIDYALAYA  is  kind of school I was looking for my kid- a perfect balance of curriculum and sports.  school has got all  required facilities for a kid to learn. Infrastructure is excellent as it is very new and needs to be maintained  same way in  coming years without compromising on quality. Parent relationship is good I should say.',
          clientView_2: ' I like  involvement of school staff with  kids as y make  children comfortable. Principal and  management are making sure  kids, as well as  parents, feel confident about  school which is a good sign and we understand this is  first academic year for shs.',
          clientView_3: ' We foresee that this will be one of  best school in Hyderabad. All  best and look forward to seeing  school grow in strength and bustling with students at  campus soon..',
          clientName: "Sweta D.S\n      Parent of Sanketh D.S",
          desti: 'Grade 2'
        }, {
          clientView_1: "I've always believed in holistic education and when I met with academicians at shs, that's what seemed to be ir plan. Some of  values that y talk about are very similar to  ones I try to inculcate as a professional and parent.  ",
          clientView_2: "Knowing that my child will be exposed to sports and music at a very young age is comforting. se engagements go a long way in developing certain important skills such as focus, team behavior and dealing with losses in a balanced manner. ",
          clientView_3: "I firmly believe that this tends to impact ir attitude in real life social situations too. Although my journey with shs started only about a month back, I see m do ir best in this lock down situation. All I want is my child to be happy in life and  I do hope we lay  foundation of ir happy lives toger.",
          clientName: "Sushma Panyam \n      Parent of Nihal Singaraju",
          desti: 'Grade 2'
        }, {
          clientView_1: 'SHS VIDYALAYA  is  kind of school I was looking for my kid- a perfect balance of curriculum and sports.  school has got all  required facilities for a kid to learn. Infrastructure is excellent as it is very new and needs to be maintained  same way in  coming years without compromising on quality. Parent relationship is good I should say.',
          clientView_2: ' I like  involvement of school staff with  kids as y make  children comfortable. Principal and  management are making sure  kids, as well as  parents, feel confident about  school which is a good sign and we understand this is  first academic year for shs.',
          clientView_3: ' We foresee that this will be one of  best school in Hyderabad. All  best and look forward to seeing  school grow in strength and bustling with students at  campus soon..',
          clientName: "Sweta D.S\n      Parent of Sanketh D.S",
          desti: 'Grade 2'
        }, {
          clientView_1: "I've always believed in holistic education and when I met with academicians at shs, that's what seemed to be ir plan. Some of  values that y talk about are very similar to  ones I try to inculcate as a professional and parent.  ",
          clientView_2: "Knowing that my child will be exposed to sports and music at a very young age is comforting. se engagements go a long way in developing certain important skills such as focus, team behavior and dealing with losses in a balanced manner. ",
          clientView_3: "I firmly believe that this tends to impact ir attitude in real life social situations too. Although my journey with shs started only about a month back, I see m do ir best in this lock down situation. All I want is my child to be happy in life and  I do hope we lay  foundation of ir happy lives toger.",
          clientName: "Sushma Panyam \n      Parent of Nihal Singaraju",
          desti: 'Grade 2'
        }, {
          clientView_1: 'SHS VIDYALAYA  is  kind of school I was looking for my kid- a perfect balance of curriculum and sports.  school has got all  required facilities for a kid to learn. Infrastructure is excellent as it is very new and needs to be maintained  same way in  coming years without compromising on quality. Parent relationship is good I should say.',
          clientView_2: ' I like  involvement of school staff with  kids as y make  children comfortable. Principal and  management are making sure  kids, as well as  parents, feel confident about  school which is a good sign and we understand this is  first academic year for shs.',
          clientView_3: ' We foresee that this will be one of  best school in Hyderabad. All  best and look forward to seeing  school grow in strength and bustling with students at  campus soon..',
          clientName: "Sweta D.S\n      Parent of Sanketh D.S",
          desti: 'Grade 2'
        }, {
          clientView_1: "I've always believed in holistic education and when I met with academicians at shs, that's what seemed to be ir plan. Some of  values that y talk about are very similar to  ones I try to inculcate as a professional and parent.  ",
          clientView_2: "Knowing that my child will be exposed to sports and music at a very young age is comforting. se engagements go a long way in developing certain important skills such as focus, team behavior and dealing with losses in a balanced manner. ",
          clientView_3: "I firmly believe that this tends to impact ir attitude in real life social situations too. Although my journey with shs started only about a month back, I see m do ir best in this lock down situation. All I want is my child to be happy in life and  I do hope we lay  foundation of ir happy lives toger.",
          clientName: "Sushma Panyam \n      Parent of Nihal Singaraju",
          desti: 'Grade 2'
        }]; // images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);

        this.shsnLeague = [{
          name: 'MS. MALINI PAUL',
          post: 'HEADMISTRESS',
          desc: "Facilitator, Visionary, educationist\n30+ Years of experience"
        }, {
          name: 'MS. TRUPTI RAO',
          post: 'PRINCIPAL',
          desc: "Educator, Teacher, Achiever\n 21+ Years of experience\n19 years at Meridian"
        }, {
          name: 'MS. RUBINA MAJID',
          post: 'SOCIETY PRESIDENT',
          desc: "IITian\nRenowned\nBusiness Icon"
        }];
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;

        this.knowMore = function (text) {
          if (text === 'culture') {
            this.router.navigateByUrl('/shsCulture', {
              skipLocationChange: true
            });
          } else if (text === 'edge') {
            this.router.navigateByUrl('/shsEdge', {
              skipLocationChange: true
            });
          } else if (text === 'apply') {
            this.router.navigateByUrl('/JoinshsPride', {
              skipLocationChange: true
            });
          } else if (text === 'admission') {
            this.router.navigateByUrl('/JoinshsPride', {
              skipLocationChange: true
            });
          }
        };
      }

      _createClass(HomeComponent, [{
        key: "drowDownToggle",
        value: function drowDownToggle() {
          this.isOpen = !this.isOpen;
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.renderer.addClass(this.collapse.nativeElement, 'test');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "togglePaused",
        value: function togglePaused() {
          if (this.paused) {
            this.carousel.cycle();
          } else {
            this.carousel.pause();
          }

          this.paused = !this.paused;
        }
      }, {
        key: "onSlide",
        value: function onSlide(slideEvent) {
          if (this.unpauseOnArrow && slideEvent.paused && (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
          }

          if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
          }
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('collapse', {
      "static": false
    })], HomeComponent.prototype, "collapse", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('carousel', {
      "static": true
    })], HomeComponent.prototype, "carousel", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home.component.scss"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/shsedge/shsedge.component.scss":
  /*!************************************************!*\
    !*** ./src/app/shsedge/shsedge.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShsedgeShsedgeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".section-study-culture .row-f, .section-study-culture .row {\n  margin: 70px 0 100px 70px;\n  position: relative;\n}\n.section-study-culture .curriculum {\n  margin-bottom: 0px;\n}\n.section-study-culture .panel {\n  background: #fff;\n  padding: 50px;\n}\n.section-study-culture .panel .panel-body {\n  width: 70%;\n}\n.section-study-culture .panel.story-info {\n  background: #bf272d;\n  color: #fff;\n  position: relative;\n}\n.section-study-culture .panel.story-info .flying-plane {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n.section-study-culture .panel.story-info .flying-plane svg {\n  fill: #fff;\n  transform: rotate(90deg);\n  margin-top: 5px;\n}\n.section-study-culture .panel.story-info::after {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  top: 50px;\n  width: 3px;\n  height: 20px;\n  background: #fff;\n}\n.section-study-culture h1 {\n  margin-bottom: 35px;\n  font-weight: bold;\n}\n.section-study-culture h2 {\n  position: relative;\n  padding-bottom: 5px;\n  line-height: 60px;\n  margin-bottom: 30px;\n}\n.section-study-culture h2::before {\n  content: \" \";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 50px;\n  height: 2px;\n  background: #f0f0f0;\n}\n.section-study-culture .img-flag {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 50%;\n}\n.section-study-culture ul.list {\n  margin: 0px;\n}\n.section-study-culture ul.list li {\n  color: #000;\n}\n.section-study-culture ul.list li::before {\n  background: #bf272d;\n}\n.more-info {\n  float: none;\n  clear: both;\n}\n.more-info p {\n  margin: 50px 0 70px 75px;\n}\n.applycation-rules .btn {\n  width: 75%;\n  padding: 15px 0;\n  background: #bf272d;\n  font-family: \"Lora\", serif;\n  margin: 25px auto 0;\n  font-size: 24px;\n  display: block;\n}\n.edge-info {\n  margin: 0 !important;\n}\n.edge-info .plan-title {\n  margin: 30px 0 50px;\n}\n.edge-info .panel {\n  margin-bottom: 50px;\n}\n.edge-info .panel:nth-child(3n+1) {\n  background: #3e65ac;\n  color: #fff;\n}\n.edge-info .panel:nth-child(3n+2) {\n  background: #bf272d;\n  color: #fff;\n}\n.edge-info .panel:nth-child(3n+3) {\n  background: #000;\n  color: #fff;\n}\n.edge-info .panel.bg-white {\n  background: #fff;\n}\n.edge-info .panel.bg-white p {\n  color: #000;\n}\n.edge-info .panel:nth-child(1) span {\n  background: #3e65ac;\n}\n.edge-info .panel:nth-child(2) span {\n  background: #bf272d;\n}\n.edge-info .panel:nth-child(3) span {\n  background: #000;\n}\n.edge-info .panel:nth-child(4) span {\n  background: #3e65ac;\n}\n.edge-info .panel:nth-child(5) span {\n  background: #bf272d;\n}\n.edge-info .panel span {\n  z-index: 1;\n  position: relative;\n  padding-right: 15px;\n}\n.edge-info .heading-title {\n  position: relative;\n}\n.edge-info .heading-title::after {\n  content: \"\";\n  position: absolute;\n  top: 18px;\n  left: 0px;\n  width: 100%;\n  height: 1px;\n  background: #fff;\n}\n.edge-info .extra-info {\n  position: relative;\n}\n.edge-info .extra-info .panel .panel-body {\n  width: 50%;\n}\n.section-explicit {\n  margin: 70px 0px;\n}\n.section-explicit .row {\n  margin-top: 40px;\n  margin-bottom: 0;\n}\n.section-explicit h1 {\n  font-weight: normal;\n}\n.section-explicit .bar {\n  position: relative;\n  padding-top: 15px;\n}\n.section-explicit .bar::after {\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100px;\n  height: 5px;\n  background: #bf272d;\n}\n.section-explicit .explicit-sec {\n  padding: 0px;\n}\n.section-explicit .explicit-sec .add-info {\n  position: relative;\n  width: 20%;\n  padding: 0px;\n  display: flex;\n  margin: 0 2px;\n  height: 325px;\n}\n.section-explicit .explicit-sec .add-info:first-child .panel {\n  margin-left: 0px;\n}\n.section-explicit .admission-flag {\n  position: relative;\n  color: #fff;\n  padding: 25px 0;\n  height: 250px;\n}\n.section-explicit .admission-flag .btn {\n  border: 1px solid #fff;\n  color: #fff;\n  background: none;\n}\n.section-explicit p {\n  white-space: pre;\n  margin-top: 15px;\n}\n.section-explicit .panel {\n  margin-left: 5px;\n  padding: 15px;\n  width: 100%;\n  background: #fff;\n  transition: 0.5s;\n}\n.section-explicit .panel a {\n  color: #000;\n}\n.section-explicit .panel h1 {\n  font-family: \"Quicksand\", sans-serif;\n  color: #000;\n}\n.section-explicit .panel h6 {\n  font-family: \"Lora\", serif;\n  color: #000;\n}\n.section-explicit .panel i {\n  margin: 25px auto;\n  display: block;\n}\n.section-explicit .panel svg {\n  width: 75px;\n  height: 75px;\n}\n.section-explicit .panel:hover, .section-explicit .panel.active {\n  border: none;\n  border-radius: 0;\n  background: #bf272d;\n  transform: scale(1.1);\n  z-index: 1;\n  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.5);\n}\n.section-explicit .panel:hover .panel-heading .bar::after, .section-explicit .panel.active .panel-heading .bar::after {\n  background: #fff !important;\n}\n.section-explicit .panel:hover .panel-heading h6, .section-explicit .panel:hover .panel-heading p, .section-explicit .panel:hover .panel-heading h1, .section-explicit .panel:hover .panel-heading a, .section-explicit .panel.active .panel-heading h6, .section-explicit .panel.active .panel-heading p, .section-explicit .panel.active .panel-heading h1, .section-explicit .panel.active .panel-heading a {\n  color: #fff;\n}\n.section-explicit .panel:hover svg, .section-explicit .panel.active svg {\n  fill: #fff;\n}\n.tab-info {\n  background: #bf272d;\n  padding: 15px;\n  margin-top: 40px;\n  color: #fff;\n}\n@media (max-width: 576px) {\n  .section-study-culture .row-f, .section-study-culture .row, .section-study-culture h1 {\n    margin-left: 0px;\n  }\n  .section-study-culture .breadcum {\n    margin-left: 15px;\n  }\n  .section-study-culture .img-flag {\n    padding: 15px;\n    position: static;\n    width: 100%;\n  }\n  .section-study-culture .panel-body {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hzZWRnZS9EOlxcc2hzL3NyY1xcYXBwXFxzaHNlZGdlXFxzaHNlZGdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaHNlZGdlL3Noc2VkZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQyx5QkFBQTtFQUNBLGtCQUFBO0FDQUY7QURFQztFQUNDLGtCQUFBO0FDQUY7QURFQztFQUNDLGdCQUFBO0VBQ0EsYUFBQTtBQ0FGO0FEQ0U7RUFDQyxVQUFBO0FDQ0g7QURDRTtFQUNDLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0g7QURBRztFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNFSjtBRERJO0VBQ0MsVUFBQTtFQUNBLHdCQUFBO0VBQ0csZUFBQTtBQ0dSO0FEQUc7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNFSjtBREdDO0VBQ0MsbUJBQUE7RUFDQSxpQkFBQTtBQ0RGO0FER0M7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0RGO0FERUU7RUFDQyxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNBSDtBREdDO0VBQ0Msa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNERjtBREdDO0VBQ0MsV0FBQTtBQ0RGO0FERUU7RUFDQyxXQUFBO0FDQUg7QURDRztFQUNDLG1CQUFBO0FDQ0o7QURLQTtFQUNDLFdBQUE7RUFDQSxXQUFBO0FDRkQ7QURHQztFQUNDLHdCQUFBO0FDREY7QURNSTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNIUjtBRE9BO0VBQ0ksb0JBQUE7QUNKSjtBREtJO0VBQ0ksbUJBQUE7QUNIUjtBRGdCQTtFQUVJLG1CQUFBO0FDZko7QURNSTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQ0pSO0FERUk7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUNBUjtBREZJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FDSVI7QURJRztFQUNLLGdCQUFBO0FDRlI7QURHUTtFQUNJLFdBQUE7QUNEWjtBRE1RO0VBQ0ksbUJBQUE7QUNKWjtBRFFRO0VBQ0ksbUJBQUE7QUNOWjtBRFVRO0VBQ0ksZ0JBQUE7QUNSWjtBRGNRO0VBQ0ksbUJBQUE7QUNaWjtBRGVRO0VBQ0ksbUJBQUE7QUNiWjtBRGdCSTtFQUVJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDZlI7QURtQkk7RUFDSSxrQkFBQTtBQ2pCUjtBRG1CUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ2pCWjtBRG9CQztFQUNDLGtCQUFBO0FDbEJGO0FEb0JHO0VBQ0MsVUFBQTtBQ2xCSjtBRHdCQTtFQUNDLGdCQUFBO0FDckJEO0FEc0JDO0VBQ0MsZ0JBQUE7RUFDQSxnQkFBQTtBQ3BCRjtBRHVCQztFQUNDLG1CQUFBO0FDckJGO0FEdUJDO0VBQ0Msa0JBQUE7RUFDQSxpQkFBQTtBQ3JCRjtBRHNCRTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ3BCSDtBRHdCQztFQUNDLFlBQUE7QUN0QkY7QUR3QkU7RUFDQyxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDRyxhQUFBO0FDdEJOO0FEd0JJO0VBQ0MsZ0JBQUE7QUN0Qkw7QUQyQkM7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ3pCRjtBRDBCRTtFQUNDLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDeEJIO0FEMkJDO0VBQ0MsZ0JBQUE7RUFDQSxnQkFBQTtBQ3pCRjtBRDJCRTtFQUNJLGdCQUFBO0VBQ0gsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDekJIO0FEMEJHO0VBQ0MsV0FBQTtBQ3hCSjtBRDBCRztFQUNDLG9DQUFBO0VBQ0EsV0FBQTtBQ3hCSjtBRDBCRztFQUNDLDBCQUFBO0VBQ0EsV0FBQTtBQ3hCSjtBRDBCRztFQUNDLGlCQUFBO0VBQ0EsY0FBQTtBQ3hCSjtBRDBCRztFQUNDLFdBQUE7RUFDQSxZQUFBO0FDeEJKO0FEMEJHO0VBQ0MsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSwrQ0FBQTtBQ3hCSjtBRDJCTTtFQUNDLDJCQUFBO0FDekJQO0FENEJLO0VBQ0MsV0FBQTtBQzFCTjtBRDZCSTtFQUNDLFVBQUE7QUMzQkw7QUQ0Q0E7RUFDQyxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUN6Q0Q7QUQ2Q0E7RUFFRTtJQUNDLGdCQUFBO0VDM0NEO0VENkNEO0lBQ0MsaUJBQUE7RUMzQ0E7RUQ2Q0Q7SUFDQyxhQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0VDM0NBO0VENkNEO0lBQ0MsV0FBQTtFQzNDQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hzZWRnZS9zaHNlZGdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24tc3R1ZHktY3VsdHVyZXtcclxuXHQucm93LWYsIC5yb3d7XHJcblx0XHRtYXJnaW46NzBweCAwIDEwMHB4IDcwcHggOyBcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcblx0LmN1cnJpY3VsdW17XHJcblx0XHRtYXJnaW4tYm90dG9tOjBweDtcclxuXHR9XHJcblx0LnBhbmVsIHtcclxuXHRcdGJhY2tncm91bmQ6I2ZmZjtcclxuXHRcdHBhZGRpbmc6NTBweDtcclxuXHRcdC5wYW5lbC1ib2R5e1xyXG5cdFx0XHR3aWR0aDo3MCU7XHJcblx0XHR9XHJcblx0XHQmLnN0b3J5LWluZm97XHJcblx0XHRcdGJhY2tncm91bmQ6I2JmMjcyZDtcclxuXHRcdFx0Y29sb3I6I2ZmZjtcclxuXHRcdFx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0XHRcdC5mbHlpbmctcGxhbmV7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdGxlZnQ6MHB4O1xyXG5cdFx0XHRcdHRvcDowcHg7XHJcblx0XHRcdFx0c3Zne1xyXG5cdFx0XHRcdFx0ZmlsbDogI2ZmZjtcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgIFx0XHRcdFx0bWFyZ2luLXRvcDogNXB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHQmOjphZnRlcntcclxuXHRcdFx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRsZWZ0OjBweDtcclxuXHRcdFx0XHR0b3A6NTBweDtcclxuXHRcdFx0XHR3aWR0aDogM3B4O1xyXG5cdFx0XHRcdGhlaWdodDogMjBweDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblx0aDF7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0fVxyXG5cdGgye1xyXG5cdFx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTo1cHg7XHJcblx0XHRsaW5lLWhlaWdodDogNjBweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblx0XHQmOjpiZWZvcmV7XHJcblx0XHRcdGNvbnRlbnQ6XCIgXCI7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0Ym90dG9tOjA7XHJcblx0XHRcdGxlZnQ6MDtcclxuXHRcdFx0d2lkdGg6NTBweDtcclxuXHRcdFx0aGVpZ2h0OjJweDtcclxuXHRcdFx0YmFja2dyb3VuZDojZjBmMGYwO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQuaW1nLWZsYWd7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRyaWdodDowO1xyXG5cdFx0dG9wOjA7XHJcblx0XHR3aWR0aDogNTAlO1xyXG5cdH1cclxuXHR1bC5saXN0e1xyXG5cdFx0bWFyZ2luOjBweDtcclxuXHRcdGxpe1xyXG5cdFx0XHRjb2xvcjojMDAwO1xyXG5cdFx0XHQmOjpiZWZvcmV7XHJcblx0XHRcdFx0YmFja2dyb3VuZDojYmYyNzJkO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4ubW9yZS1pbmZve1xyXG5cdGZsb2F0Om5vbmU7XHJcblx0Y2xlYXI6Ym90aDtcclxuXHRwe1xyXG5cdFx0bWFyZ2luOjUwcHggMCA3MHB4IDc1cHggO1xyXG5cdH1cclxufVxyXG5cclxuLmFwcGx5Y2F0aW9uLXJ1bGVze1xyXG4gICAgLmJ0bntcclxuICAgICAgICB3aWR0aDo3NSU7XHJcbiAgICAgICAgcGFkZGluZzoxNXB4IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDojYmYyNzJkO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XHJcbiAgICAgICAgbWFyZ2luOjI1cHggYXV0byAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZToyNHB4O1xyXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5lZGdlLWluZm97XHJcbiAgICBtYXJnaW46MCAhaW1wb3J0YW50O1xyXG4gICAgLnBsYW4tdGl0bGV7XHJcbiAgICAgICAgbWFyZ2luOjMwcHggMCA1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgICRiZy1jb2xvcnM6ICMzZTY1YWMsICNiZjI3MmQsICMwMDA7XHJcbkBtaXhpbiBhbHRlcm5hdGluZy1iYWNrZ3JvdW5kIHtcclxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIGxlbmd0aCgkYmctY29sb3JzKSB7XHJcbiAgICAmOm50aC1jaGlsZCgje2xlbmd0aCgkYmctY29sb3JzKX1uKyN7JGl9KSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogKG50aCgkYmctY29sb3JzLCAkaSkpO1xyXG4gICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucGFuZWx7XHJcbiAgICBAaW5jbHVkZSBhbHRlcm5hdGluZy1iYWNrZ3JvdW5kO1xyXG4gICAgbWFyZ2luLWJvdHRvbTo1MHB4O1xyXG4gICAmLmJnLXdoaXRle1xyXG4gICAgICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBjb2xvcjojMDAwOyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmOm50aC1jaGlsZCgxKXtcclxuICAgICAgIFxyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzZTY1YWM7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICAmOm50aC1jaGlsZCgyKXtcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xyXG4gICAgfSBcclxuICAgIH1cclxuICAgICY6bnRoLWNoaWxkKDMpe1xyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICB9IFxyXG5cdH1cclxuXHRcclxuXHRcclxuXHQmOm50aC1jaGlsZCg0KXtcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjM2U2NWFjO1xyXG5cdH19XHJcblx0JjpudGgtY2hpbGQoNSl7XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2JmMjcyZDtcclxuICAgIH19XHJcblxyXG4gICAgc3BhbntcclxuICAgICAgIFxyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbiAgICAuaGVhZGluZy10aXRsZXtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICBcclxuICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6MThweDtcclxuICAgICAgICAgICAgbGVmdDowcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDoxcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgICAgICB9XHJcblx0fVxyXG5cdC5leHRyYS1pbmZve1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0LnBhbmVse1xyXG5cdFx0XHQucGFuZWwtYm9keXtcclxuXHRcdFx0XHR3aWR0aDo1MCU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5zZWN0aW9uLWV4cGxpY2l0e1xyXG5cdG1hcmdpbjo3MHB4IDBweDtcclxuXHQucm93e1xyXG5cdFx0bWFyZ2luLXRvcDogNDBweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDA7XHJcblx0fVxyXG5cclxuXHRoMXtcclxuXHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0fVxyXG5cdC5iYXJ7XHJcblx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdHBhZGRpbmctdG9wOjE1cHg7XHJcblx0XHQmOjphZnRlcntcclxuXHRcdFx0Y29udGVudDogXCJcIjtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHR0b3A6MHB4O1xyXG5cdFx0XHRsZWZ0OjBweDtcclxuXHRcdFx0d2lkdGg6MTAwcHg7XHJcblx0XHRcdGhlaWdodDo1cHg7XHJcblx0XHRcdGJhY2tncm91bmQ6I2JmMjcyZDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5leHBsaWNpdC1zZWN7XHJcblx0XHRwYWRkaW5nOjBweDtcclxuXHRcdFxyXG5cdFx0LmFkZC1pbmZve1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdHdpZHRoOjIwJTtcclxuXHRcdFx0cGFkZGluZzowcHg7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdG1hcmdpbjogMCAycHg7XHJcbiAgICBcdFx0aGVpZ2h0OiAzMjVweDtcclxuXHRcdFx0JjpmaXJzdC1jaGlsZHtcclxuXHRcdFx0XHQucGFuZWx7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDowcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdC5hZG1pc3Npb24tZmxhZ3tcclxuXHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0Y29sb3I6I2ZmZjtcclxuXHRcdHBhZGRpbmc6MjVweCAwO1xyXG5cdFx0aGVpZ2h0OjI1MHB4O1xyXG5cdFx0LmJ0bntcclxuXHRcdFx0Ym9yZGVyOjFweCBzb2xpZCAjZmZmO1xyXG5cdFx0XHRjb2xvcjojZmZmO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOm5vbmU7XHJcblx0XHR9XHJcblx0fVxyXG5cdHB7XHJcblx0XHR3aGl0ZS1zcGFjZTogcHJlO1xyXG5cdFx0bWFyZ2luLXRvcDoxNXB4O1xyXG5cdH1cclxuXHRcdC5wYW5lbHtcclxuXHRcdCAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG5cdFx0XHRwYWRkaW5nOiAxNXB4O1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRcdFx0dHJhbnNpdGlvbjogLjVzO1xyXG5cdFx0XHRhe1xyXG5cdFx0XHRcdGNvbG9yOiMwMDA7XHJcblx0XHRcdH1cclxuXHRcdFx0aDF7XHJcblx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XHJcblx0XHRcdFx0Y29sb3I6IzAwMDtcclxuXHRcdFx0fVxyXG5cdFx0XHRoNntcclxuXHRcdFx0XHRmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xyXG5cdFx0XHRcdGNvbG9yOiMwMDA7XHJcblx0XHRcdH1cclxuXHRcdFx0aXtcclxuXHRcdFx0XHRtYXJnaW46IDI1cHggYXV0bztcclxuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0fVxyXG5cdFx0XHRzdmd7XHJcblx0XHRcdFx0d2lkdGg6NzVweDtcclxuXHRcdFx0XHRoZWlnaHQ6NzVweDtcclxuXHRcdFx0fVxyXG5cdFx0XHQmOmhvdmVyLCAmLmFjdGl2ZXtcclxuXHRcdFx0XHRib3JkZXI6IG5vbmU7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiNiZjI3MmQ7XHJcblx0XHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG5cdFx0XHRcdHotaW5kZXg6IDE7XHJcblx0XHRcdFx0Ym94LXNoYWRvdzogMHB4IDJweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcblx0XHRcdFx0LnBhbmVsLWhlYWRpbmd7XHJcblx0XHRcdFx0XHQuYmFye1xyXG5cdFx0XHRcdFx0XHQmOjphZnRlcntcclxuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGg2LCBwLCBoMSwgYXtcclxuXHRcdFx0XHRcdFx0Y29sb3I6I2ZmZjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0c3Zne1xyXG5cdFx0XHRcdFx0ZmlsbDojZmZmO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0Ly8gXHQmOjphZnRlcntcclxuXHRcdFx0Ly8gXHRcdGNvbnRlbnQ6Jyc7XHJcblx0XHRcdC8vIFx0XHRiYWNrZ3JvdW5kOiNiZjI3MmQ7XHJcblx0XHRcdC8vIFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdC8vIFx0XHR0b3A6IDBweDtcclxuXHRcdFx0Ly8gXHRcdGxlZnQ6IDBweDtcclxuXHRcdFx0Ly8gXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHQvLyBcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHQvLyBcdFx0ei1pbmRleDogMTtcclxuXHRcdFx0Ly8gXHRcdGJveC1zaGFkb3c6IDBweCAycHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5cdFx0XHQvLyB9XHJcblx0XHRcdH1cclxuXHRcdH1cclxufVxyXG5cclxuLnRhYi1pbmZve1xyXG5cdGJhY2tncm91bmQ6I2JmMjcyZDtcclxuXHRwYWRkaW5nOjE1cHg7XHJcblx0bWFyZ2luLXRvcDogNDBweDtcclxuXHRjb2xvcjojZmZmO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KXtcclxuXHQuc2VjdGlvbi1zdHVkeS1jdWx0dXJle1xyXG5cdFx0LnJvdy1mLCAucm93LCBoMXtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6MHB4OyBcclxuXHR9XHJcblx0LmJyZWFkY3Vte1xyXG5cdFx0bWFyZ2luLWxlZnQ6MTVweDtcclxuXHR9XHJcblx0LmltZy1mbGFne1xyXG5cdFx0cGFkZGluZzoxNXB4O1xyXG5cdFx0cG9zaXRpb246IHN0YXRpYztcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0fVxyXG5cdC5wYW5lbC1ib2R5e1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHR9XHJcbn1cclxufSIsIi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnJvdy1mLCAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5yb3cge1xuICBtYXJnaW46IDcwcHggMCAxMDBweCA3MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5jdXJyaWN1bHVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiA1MHB4O1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucGFuZWwgLnBhbmVsLWJvZHkge1xuICB3aWR0aDogNzAlO1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucGFuZWwuc3RvcnktaW5mbyB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5wYW5lbC5zdG9yeS1pbmZvIC5mbHlpbmctcGxhbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5wYW5lbC5zdG9yeS1pbmZvIC5mbHlpbmctcGxhbmUgc3ZnIHtcbiAgZmlsbDogI2ZmZjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5wYW5lbC5zdG9yeS1pbmZvOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDUwcHg7XG4gIHdpZHRoOiAzcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgaDEge1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgaDIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSBoMjo6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5pbWctZmxhZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDUwJTtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgdWwubGlzdCB7XG4gIG1hcmdpbjogMHB4O1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSB1bC5saXN0IGxpIHtcbiAgY29sb3I6ICMwMDA7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIHVsLmxpc3QgbGk6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG59XG5cbi5tb3JlLWluZm8ge1xuICBmbG9hdDogbm9uZTtcbiAgY2xlYXI6IGJvdGg7XG59XG4ubW9yZS1pbmZvIHAge1xuICBtYXJnaW46IDUwcHggMCA3MHB4IDc1cHg7XG59XG5cbi5hcHBseWNhdGlvbi1ydWxlcyAuYnRuIHtcbiAgd2lkdGg6IDc1JTtcbiAgcGFkZGluZzogMTVweCAwO1xuICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xuICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xuICBtYXJnaW46IDI1cHggYXV0byAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZWRnZS1pbmZvIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG4uZWRnZS1pbmZvIC5wbGFuLXRpdGxlIHtcbiAgbWFyZ2luOiAzMHB4IDAgNTBweDtcbn1cbi5lZGdlLWluZm8gLnBhbmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi5lZGdlLWluZm8gLnBhbmVsOm50aC1jaGlsZCgzbisxKSB7XG4gIGJhY2tncm91bmQ6ICMzZTY1YWM7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmVkZ2UtaW5mbyAucGFuZWw6bnRoLWNoaWxkKDNuKzIpIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbiAgY29sb3I6ICNmZmY7XG59XG4uZWRnZS1pbmZvIC5wYW5lbDpudGgtY2hpbGQoM24rMykge1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5lZGdlLWluZm8gLnBhbmVsLmJnLXdoaXRlIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5lZGdlLWluZm8gLnBhbmVsLmJnLXdoaXRlIHAge1xuICBjb2xvcjogIzAwMDtcbn1cbi5lZGdlLWluZm8gLnBhbmVsOm50aC1jaGlsZCgxKSBzcGFuIHtcbiAgYmFja2dyb3VuZDogIzNlNjVhYztcbn1cbi5lZGdlLWluZm8gLnBhbmVsOm50aC1jaGlsZCgyKSBzcGFuIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbn1cbi5lZGdlLWluZm8gLnBhbmVsOm50aC1jaGlsZCgzKSBzcGFuIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbn1cbi5lZGdlLWluZm8gLnBhbmVsOm50aC1jaGlsZCg0KSBzcGFuIHtcbiAgYmFja2dyb3VuZDogIzNlNjVhYztcbn1cbi5lZGdlLWluZm8gLnBhbmVsOm50aC1jaGlsZCg1KSBzcGFuIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbn1cbi5lZGdlLWluZm8gLnBhbmVsIHNwYW4ge1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG4uZWRnZS1pbmZvIC5oZWFkaW5nLXRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmVkZ2UtaW5mbyAuaGVhZGluZy10aXRsZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMThweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uZWRnZS1pbmZvIC5leHRyYS1pbmZvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmVkZ2UtaW5mbyAuZXh0cmEtaW5mbyAucGFuZWwgLnBhbmVsLWJvZHkge1xuICB3aWR0aDogNTAlO1xufVxuXG4uc2VjdGlvbi1leHBsaWNpdCB7XG4gIG1hcmdpbjogNzBweCAwcHg7XG59XG4uc2VjdGlvbi1leHBsaWNpdCAucm93IHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5zZWN0aW9uLWV4cGxpY2l0IGgxIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5zZWN0aW9uLWV4cGxpY2l0IC5iYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuLnNlY3Rpb24tZXhwbGljaXQgLmJhcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG59XG4uc2VjdGlvbi1leHBsaWNpdCAuZXhwbGljaXQtc2VjIHtcbiAgcGFkZGluZzogMHB4O1xufVxuLnNlY3Rpb24tZXhwbGljaXQgLmV4cGxpY2l0LXNlYyAuYWRkLWluZm8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyMCU7XG4gIHBhZGRpbmc6IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIDJweDtcbiAgaGVpZ2h0OiAzMjVweDtcbn1cbi5zZWN0aW9uLWV4cGxpY2l0IC5leHBsaWNpdC1zZWMgLmFkZC1pbmZvOmZpcnN0LWNoaWxkIC5wYW5lbCB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG4uc2VjdGlvbi1leHBsaWNpdCAuYWRtaXNzaW9uLWZsYWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAyNXB4IDA7XG4gIGhlaWdodDogMjUwcHg7XG59XG4uc2VjdGlvbi1leHBsaWNpdCAuYWRtaXNzaW9uLWZsYWcgLmJ0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLnNlY3Rpb24tZXhwbGljaXQgcCB7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uc2VjdGlvbi1leHBsaWNpdCAucGFuZWwge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cbi5zZWN0aW9uLWV4cGxpY2l0IC5wYW5lbCBhIHtcbiAgY29sb3I6ICMwMDA7XG59XG4uc2VjdGlvbi1leHBsaWNpdCAucGFuZWwgaDEge1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMwMDA7XG59XG4uc2VjdGlvbi1leHBsaWNpdCAucGFuZWwgaDYge1xuICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xuICBjb2xvcjogIzAwMDtcbn1cbi5zZWN0aW9uLWV4cGxpY2l0IC5wYW5lbCBpIHtcbiAgbWFyZ2luOiAyNXB4IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnNlY3Rpb24tZXhwbGljaXQgLnBhbmVsIHN2ZyB7XG4gIHdpZHRoOiA3NXB4O1xuICBoZWlnaHQ6IDc1cHg7XG59XG4uc2VjdGlvbi1leHBsaWNpdCAucGFuZWw6aG92ZXIsIC5zZWN0aW9uLWV4cGxpY2l0IC5wYW5lbC5hY3RpdmUge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgei1pbmRleDogMTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4uc2VjdGlvbi1leHBsaWNpdCAucGFuZWw6aG92ZXIgLnBhbmVsLWhlYWRpbmcgLmJhcjo6YWZ0ZXIsIC5zZWN0aW9uLWV4cGxpY2l0IC5wYW5lbC5hY3RpdmUgLnBhbmVsLWhlYWRpbmcgLmJhcjo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4uc2VjdGlvbi1leHBsaWNpdCAucGFuZWw6aG92ZXIgLnBhbmVsLWhlYWRpbmcgaDYsIC5zZWN0aW9uLWV4cGxpY2l0IC5wYW5lbDpob3ZlciAucGFuZWwtaGVhZGluZyBwLCAuc2VjdGlvbi1leHBsaWNpdCAucGFuZWw6aG92ZXIgLnBhbmVsLWhlYWRpbmcgaDEsIC5zZWN0aW9uLWV4cGxpY2l0IC5wYW5lbDpob3ZlciAucGFuZWwtaGVhZGluZyBhLCAuc2VjdGlvbi1leHBsaWNpdCAucGFuZWwuYWN0aXZlIC5wYW5lbC1oZWFkaW5nIGg2LCAuc2VjdGlvbi1leHBsaWNpdCAucGFuZWwuYWN0aXZlIC5wYW5lbC1oZWFkaW5nIHAsIC5zZWN0aW9uLWV4cGxpY2l0IC5wYW5lbC5hY3RpdmUgLnBhbmVsLWhlYWRpbmcgaDEsIC5zZWN0aW9uLWV4cGxpY2l0IC5wYW5lbC5hY3RpdmUgLnBhbmVsLWhlYWRpbmcgYSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnNlY3Rpb24tZXhwbGljaXQgLnBhbmVsOmhvdmVyIHN2ZywgLnNlY3Rpb24tZXhwbGljaXQgLnBhbmVsLmFjdGl2ZSBzdmcge1xuICBmaWxsOiAjZmZmO1xufVxuXG4udGFiLWluZm8ge1xuICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnJvdy1mLCAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5yb3csIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgaDEge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIH1cbiAgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAuYnJlYWRjdW0ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB9XG4gIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLmltZy1mbGFnIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucGFuZWwtYm9keSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shsedge/shsedge.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/shsedge/shsedge.component.ts ***!
    \**********************************************/

  /*! exports provided: shsedgeComponent */

  /***/
  function srcAppShsedgeShsedgeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "shsedgeComponent", function () {
      return shsedgeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var shsedgeComponent = /*#__PURE__*/function () {
      function shsedgeComponent() {
        _classCallCheck(this, shsedgeComponent);

        this.explicitConfig = {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: false,
          autoplay: false,
          autoplaySpeed: 1500,
          arrows: false,
          responsive: [{
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 1
            }
          }, {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 1
            }
          }]
        };
        this.explicit = [{
          title: "Literacy",
          icon: "#icon_ethicalEdu",
          bar: '01',
          description: "Having introduced a matic and literacy-based curriculum, shs  has a\n    levelled book room \u2013 a shared reading resource for successful whole-school learning, to\n    designate  importance of guided reading and journal writing in our teachings."
        }, {
          title: 'Mamatics',
          icon: "#icon_mamatics",
          bar: '02',
          description: " idea of introducing concepts for  application of mamatical terms in\n      multiple, yet simple ways, serves as a strong base for future calculations with logic.\n      shs conceptualizes Mamatics in a well- researched, sequential series, enabling\n      children to think out of  box and relate numeracy to everyday life. Topics are introduced\n      using well-planned activities, developing mamatical thinking and problem-solving skills.\n     "
        }, {
          title: ' World (Experiential Learning)',
          icon: "#icon_worldEqu",
          bar: '03',
          description: "Experiential learning is a process through which\n      students develop knowledge, skills, and values from direct experiences outside a traditional\n      academic setting. Experiential learning encompasses a variety of activities, hands-on\n      learning, etc. Students can understand concepts with concrete experience and reflective\n      observation."
        }, {
          title: 'Expressive Arts and Design',
          icon: "#icon_expressiveArt",
          bar: '04',
          description: "shs helps children develop ir imagination so y can\n      express ir ideas in a variety of individual ways within a stimulating learning\n      environment. Expressive arts and design are intended to support learning and development for\n      children."
        }, {
          title: 'Technology and Innovations Lab',
          icon: "#icon_techinnvo",
          bar: '05',
          description: "Our literacy-based curriculum emphasizes subjects through\n      an inquiry-based, matic, hands-on learning, driven by  goal of closely aligning\n      programs that students will experience in and beyond  classroom. In today\u2019s scenario\n      where content knowledge is interconnected, our STREAM- Labs, mapped with  curriculum, are\n      meticulously planned to deliver and enhance  learning process at shs."
        }];
      }

      _createClass(shsedgeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }]);

      return shsedgeComponent;
    }();

    shsedgeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shsnedge',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shsedge.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shsedge/shsedge.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./shsedge.component.scss */
      "./src/app/shsedge/shsedge.component.scss"))["default"]]
    })], shsedgeComponent);
    /***/
  },

  /***/
  "./src/app/shsstory/shsstory.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/shsstory/shsstory.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShsstoryShsstoryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".section-study-culture .row-f, .section-study-culture .row {\n  margin: 70px 0 100px;\n  position: relative;\n}\n.section-study-culture .story {\n  background: #fff;\n}\n.section-study-culture .add-spec {\n  margin: 0 0 0 35px;\n}\n.section-study-culture .add-spec .row {\n  margin: 0px;\n}\n.section-study-culture .add-spec .panel {\n  padding: 0;\n  margin: 0 auto;\n  display: block;\n  text-align: center;\n}\n.section-study-culture .add-spec .panel p {\n  margin-top: 25px;\n}\n.section-study-culture .curriculum {\n  margin-bottom: 0px;\n}\n.section-study-culture .panel {\n  background: #fff;\n  padding: 50px;\n  padding-bottom: 0px;\n}\n.section-study-culture .panel .panel-body {\n  width: 50%;\n}\n.section-study-culture .panel.story-info {\n  background: #bf272d;\n  color: #fff;\n  position: relative;\n  padding-bottom: 30px;\n}\n.section-study-culture .panel.story-info .flying-plane {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n.section-study-culture .panel.story-info .flying-plane svg {\n  fill: #fff;\n  transform: rotate(90deg);\n  margin-top: 5px;\n}\n.section-study-culture .panel.story-info::after {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  top: 50px;\n  width: 3px;\n  height: 20px;\n  background: #fff;\n}\n.section-study-culture h1 {\n  margin-left: 65px;\n  margin-bottom: 35px;\n}\n.section-study-culture h2 {\n  position: relative;\n  padding-bottom: 5px;\n  line-height: 60px;\n  margin-bottom: 30px;\n}\n.section-study-culture h2::before {\n  content: \" \";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 50px;\n  height: 2px;\n  background: #f0f0f0;\n}\n.section-study-culture .img-flag {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 40%;\n}\n.section-study-culture ul.list {\n  margin: 0px;\n}\n.section-study-culture ul.list li {\n  color: #000;\n}\n.section-study-culture ul.list li::before {\n  background: #bf272d;\n}\n.more-info {\n  float: none;\n  clear: both;\n}\n.more-info p {\n  margin: 50px 0 70px 75px;\n}\n@media (max-width: 576px) {\n  .section-study-culture .row-f, .section-study-culture .row, .section-study-culture h1 {\n    margin-left: 0px;\n  }\n  .section-study-culture .panel {\n    padding: 40px 0px;\n  }\n  .section-study-culture .breadcum {\n    margin-left: 15px;\n  }\n  .section-study-culture .img-flag {\n    padding: 15px;\n    position: static;\n    width: 100%;\n  }\n  .section-study-culture .sub-header-image {\n    display: none;\n  }\n  .section-study-culture .panel-body {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hzc3RvcnkvRDpcXHNocy9zcmNcXGFwcFxcc2hzc3RvcnlcXHNoc3N0b3J5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaHNzdG9yeS9zaHNzdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLG9CQUFBO0VBQ0Esa0JBQUE7QUNBRjtBREVDO0VBQ0MsZ0JBQUE7QUNBRjtBREVDO0VBQ08sa0JBQUE7QUNBUjtBRENRO0VBQ0ksV0FBQTtBQ0NaO0FEQ0s7RUFDTyxVQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0NaO0FEQVk7RUFDSSxnQkFBQTtBQ0VoQjtBREVDO0VBQ0Msa0JBQUE7QUNBRjtBREVDO0VBQ0MsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNBRjtBRENFO0VBQ0MsVUFBQTtBQ0NIO0FEQ0U7RUFDQyxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDQ0g7QURBRztFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNFSjtBRERJO0VBQ0MsVUFBQTtFQUNBLHdCQUFBO0VBQ0csZUFBQTtBQ0dSO0FEQUc7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNFSjtBREdDO0VBQ0MsaUJBQUE7RUFDQSxtQkFBQTtBQ0RGO0FER0M7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0RGO0FERUU7RUFDQyxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNBSDtBREdDO0VBQ0Msa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNERjtBREdDO0VBQ0MsV0FBQTtBQ0RGO0FERUU7RUFDQyxXQUFBO0FDQUg7QURDRztFQUNDLG1CQUFBO0FDQ0o7QURLQTtFQUNDLFdBQUE7RUFDQSxXQUFBO0FDRkQ7QURHQztFQUNDLHdCQUFBO0FDREY7QURLQTtFQUVFO0lBQ0MsZ0JBQUE7RUNIRDtFREtEO0lBQ0MsaUJBQUE7RUNIQTtFREtEO0lBQ0MsaUJBQUE7RUNIQTtFREtEO0lBQ0MsYUFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtFQ0hBO0VES0Q7SUFDQyxhQUFBO0VDSEE7RURLRDtJQUNDLFdBQUE7RUNIQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hzc3Rvcnkvc2hzc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1zdHVkeS1jdWx0dXJle1xyXG5cdC5yb3ctZiwgLnJvd3tcclxuXHRcdG1hcmdpbjo3MHB4IDAgMTAwcHg7IFxyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHQuc3Rvcnl7XHJcblx0XHRiYWNrZ3JvdW5kOiNmZmY7XHJcblx0fVxyXG5cdC5hZGQtc3BlY3tcclxuICAgICAgICBtYXJnaW46MCAwIDAgMzVweDtcclxuICAgICAgICAucm93e1xyXG4gICAgICAgICAgICBtYXJnaW46MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAucGFuZWx7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDoyNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cdC5jdXJyaWN1bHVte1xyXG5cdFx0bWFyZ2luLWJvdHRvbTowcHg7XHJcblx0fVxyXG5cdC5wYW5lbCB7XHJcblx0XHRiYWNrZ3JvdW5kOiNmZmY7XHJcblx0XHRwYWRkaW5nOjUwcHg7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG5cdFx0LnBhbmVsLWJvZHl7XHJcblx0XHRcdHdpZHRoOjUwJTtcclxuXHRcdH1cclxuXHRcdCYuc3RvcnktaW5mb3tcclxuXHRcdFx0YmFja2dyb3VuZDojYmYyNzJkO1xyXG5cdFx0XHRjb2xvcjojZmZmO1xyXG5cdFx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdFx0cGFkZGluZy1ib3R0b206IDMwcHg7XHJcblx0XHRcdC5mbHlpbmctcGxhbmV7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdGxlZnQ6MHB4O1xyXG5cdFx0XHRcdHRvcDowcHg7XHJcblx0XHRcdFx0c3Zne1xyXG5cdFx0XHRcdFx0ZmlsbDogI2ZmZjtcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgIFx0XHRcdFx0bWFyZ2luLXRvcDogNXB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHQmOjphZnRlcntcclxuXHRcdFx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRsZWZ0OjBweDtcclxuXHRcdFx0XHR0b3A6NTBweDtcclxuXHRcdFx0XHR3aWR0aDogM3B4O1xyXG5cdFx0XHRcdGhlaWdodDogMjBweDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblx0aDF7XHJcblx0XHRtYXJnaW4tbGVmdDo2NXB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMzVweDtcclxuXHR9XHJcblx0aDJ7XHJcblx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdHBhZGRpbmctYm90dG9tOjVweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHRcdCY6OmJlZm9yZXtcclxuXHRcdFx0Y29udGVudDpcIiBcIjtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRib3R0b206MDtcclxuXHRcdFx0bGVmdDowO1xyXG5cdFx0XHR3aWR0aDo1MHB4O1xyXG5cdFx0XHRoZWlnaHQ6MnB4O1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiNmMGYwZjA7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5pbWctZmxhZ3tcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHJpZ2h0OjA7XHJcblx0XHR0b3A6MDtcclxuXHRcdHdpZHRoOjQwJTtcclxuXHR9XHJcblx0dWwubGlzdHtcclxuXHRcdG1hcmdpbjowcHg7XHJcblx0XHRsaXtcclxuXHRcdFx0Y29sb3I6IzAwMDtcclxuXHRcdFx0Jjo6YmVmb3Jle1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6I2JmMjcyZDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLm1vcmUtaW5mb3tcclxuXHRmbG9hdDpub25lO1xyXG5cdGNsZWFyOmJvdGg7XHJcblx0cHtcclxuXHRcdG1hcmdpbjo1MHB4IDAgNzBweCA3NXB4IDtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCl7XHJcblx0LnNlY3Rpb24tc3R1ZHktY3VsdHVyZXtcclxuXHRcdC5yb3ctZiwgLnJvdywgaDF7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OjBweDsgXHJcblx0fVxyXG5cdC5wYW5lbHtcclxuXHRcdHBhZGRpbmc6NDBweCAwcHg7XHJcblx0fVxyXG5cdC5icmVhZGN1bXtcclxuXHRcdG1hcmdpbi1sZWZ0OjE1cHg7XHJcblx0fVxyXG5cdC5pbWctZmxhZ3tcclxuXHRcdHBhZGRpbmc6MTVweDtcclxuXHRcdHBvc2l0aW9uOiBzdGF0aWM7XHJcblx0XHR3aWR0aDoxMDAlO1xyXG5cdH1cclxuXHQuc3ViLWhlYWRlci1pbWFnZXtcclxuXHRcdGRpc3BsYXk6bm9uZTtcclxuXHR9XHJcblx0LnBhbmVsLWJvZHl7XHJcblx0XHR3aWR0aDoxMDAlO1xyXG5cdH1cclxufVxyXG59IiwiLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucm93LWYsIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnJvdyB7XG4gIG1hcmdpbjogNzBweCAwIDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5zdG9yeSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5hZGQtc3BlYyB7XG4gIG1hcmdpbjogMCAwIDAgMzVweDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLmFkZC1zcGVjIC5yb3cge1xuICBtYXJnaW46IDBweDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLmFkZC1zcGVjIC5wYW5lbCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAuYWRkLXNwZWMgLnBhbmVsIHAge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAuY3VycmljdWx1bSB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnBhbmVsIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnBhbmVsIC5wYW5lbC1ib2R5IHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnBhbmVsLnN0b3J5LWluZm8ge1xuICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnBhbmVsLnN0b3J5LWluZm8gLmZseWluZy1wbGFuZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnBhbmVsLnN0b3J5LWluZm8gLmZseWluZy1wbGFuZSBzdmcge1xuICBmaWxsOiAjZmZmO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnBhbmVsLnN0b3J5LWluZm86OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogNTBweDtcbiAgd2lkdGg6IDNweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSBoMSB7XG4gIG1hcmdpbi1sZWZ0OiA2NXB4O1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSBoMiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIGgyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLmltZy1mbGFnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogNDAlO1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSB1bC5saXN0IHtcbiAgbWFyZ2luOiAwcHg7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIHVsLmxpc3QgbGkge1xuICBjb2xvcjogIzAwMDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgdWwubGlzdCBsaTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbn1cblxuLm1vcmUtaW5mbyB7XG4gIGZsb2F0OiBub25lO1xuICBjbGVhcjogYm90aDtcbn1cbi5tb3JlLWluZm8gcCB7XG4gIG1hcmdpbjogNTBweCAwIDcwcHggNzVweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnJvdy1mLCAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5yb3csIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgaDEge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIH1cbiAgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucGFuZWwge1xuICAgIHBhZGRpbmc6IDQwcHggMHB4O1xuICB9XG4gIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLmJyZWFkY3VtIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgfVxuICAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5pbWctZmxhZyB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnN1Yi1oZWFkZXItaW1hZ2Uge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucGFuZWwtYm9keSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shsstory/shsstory.component.ts":
  /*!************************************************!*\
    !*** ./src/app/shsstory/shsstory.component.ts ***!
    \************************************************/

  /*! exports provided: shsstoryComponent */

  /***/
  function srcAppShsstoryShsstoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "shsstoryComponent", function () {
      return shsstoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var shsstoryComponent = /*#__PURE__*/function () {
      function shsstoryComponent() {
        _classCallCheck(this, shsstoryComponent);

        this.story = [{
          icon: '#icon_termDevelopment',
          description: "Comprehensive\n      Development"
        }, {
          icon: '#icon_commTrainning',
          description: "Communication\n      and vocational\n      training"
        }, {
          icon: '#icon_art',
          description: "Performing\n      arts"
        }];
      }

      _createClass(shsstoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return shsstoryComponent;
    }();

    shsstoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shsnstory',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shsstory.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shsstory/shsstory.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./shsstory.component.scss */
      "./src/app/shsstory/shsstory.component.scss"))["default"]]
    })], shsstoryComponent);
    /***/
  },

  /***/
  "./src/app/space.pipe.module.ts":
  /*!**************************************!*\
    !*** ./src/app/space.pipe.module.ts ***!
    \**************************************/

  /*! exports provided: CreateSpacePipe */

  /***/
  function srcAppSpacePipeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateSpacePipe", function () {
      return CreateSpacePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _space_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./space.pipe */
    "./src/app/space.pipe.ts");

    var CreateSpacePipe = function CreateSpacePipe() {
      _classCallCheck(this, CreateSpacePipe);
    };

    CreateSpacePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_space_pipe__WEBPACK_IMPORTED_MODULE_3__["CreateSpace"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_space_pipe__WEBPACK_IMPORTED_MODULE_3__["CreateSpace"]] // <---

    })], CreateSpacePipe);
    /***/
  },

  /***/
  "./src/app/space.pipe.ts":
  /*!*******************************!*\
    !*** ./src/app/space.pipe.ts ***!
    \*******************************/

  /*! exports provided: CreateSpace */

  /***/
  function srcAppSpacePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateSpace", function () {
      return CreateSpace;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CreateSpace = /*#__PURE__*/function () {
      function CreateSpace() {
        _classCallCheck(this, CreateSpace);
      }

      _createClass(CreateSpace, [{
        key: "transform",
        value: function transform(value) {
          var newStr = value;
          newStr = newStr.replace(/([A-Z])/g, ' $1').trim();
          return newStr;
        }
      }]);

      return CreateSpace;
    }();

    CreateSpace = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'createSpace'
    })], CreateSpace);
    /***/
  },

  /***/
  "./src/app/studyculture/studyculture.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/studyculture/studyculture.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudycultureStudycultureComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".section-study-culture .sub-header {\n  background: #fff;\n}\n.section-study-culture .row-f, .section-study-culture .row {\n  margin: 70px 0 100px;\n  position: relative;\n}\n.section-study-culture .curriculum {\n  margin-bottom: 0px;\n}\n.section-study-culture .curriculum .curriculum-1 {\n  padding: 0;\n  background: #fff;\n}\n.section-study-culture .curriculum .curriculum-1 .panel {\n  padding: 0px 30px;\n}\n.section-study-culture .curriculum .curriculum-1 p {\n  padding: 30px;\n}\n.section-study-culture .curriculum .curriculum-1 .img-flag {\n  width: 100%;\n  top: -100px;\n}\n.section-study-culture .curriculum .curriculum-1 .image-wrap {\n  width: 50%;\n  margin: -120px 0 26px 50px;\n}\n.section-study-culture .panel {\n  background: #fff;\n  padding: 50px;\n}\n.section-study-culture .panel .panel-body {\n  width: 50%;\n}\n.section-study-culture h1 {\n  margin-left: 65px;\n  margin-bottom: 35px;\n}\n.section-study-culture h2 {\n  position: relative;\n  padding-bottom: 5px;\n  line-height: 60px;\n  margin-bottom: 30px;\n}\n.section-study-culture h2::before {\n  content: \" \";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 50px;\n  height: 2px;\n  background: #f0f0f0;\n}\n.section-study-culture .our-mission .img-flag {\n  left: 0px;\n  z-index: 1;\n  top: -25px;\n}\n.section-study-culture .our-mission .panel {\n  float: right;\n}\n.section-study-culture .our-mission .panel-body {\n  margin-left: 50%;\n}\n.section-study-culture .img-flag {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 50%;\n}\n.section-study-culture ul.list {\n  margin: 0px;\n}\n.section-study-culture ul.list li {\n  color: #000;\n}\n.section-study-culture ul.list li::before {\n  background: #bf272d;\n}\n.edge-info {\n  margin: 100px 0 0 0 !important;\n}\n.edge-info .plan-title {\n  margin: 80px 0 50px;\n}\n.edge-info .panel {\n  margin-bottom: 50px;\n}\n.edge-info .panel:nth-child(3n+1) {\n  background: #3e65ac;\n  color: #fff;\n}\n.edge-info .panel:nth-child(3n+2) {\n  background: #bf272d;\n  color: #fff;\n}\n.edge-info .panel:nth-child(3n+3) {\n  background: #000;\n  color: #fff;\n}\n.edge-info .panel.bg-white {\n  background: #fff;\n}\n.edge-info .panel.bg-white p {\n  color: #000;\n}\n.edge-info .panel:nth-child(1) span {\n  background: #3e65ac;\n}\n.edge-info .panel:nth-child(2) span {\n  background: #bf272d;\n}\n.edge-info .panel:nth-child(3) span {\n  background: #000;\n}\n.edge-info .panel:nth-child(4) span {\n  background: #3e65ac;\n}\n.edge-info .panel:nth-child(5) span {\n  background: #bf272d;\n}\n.edge-info .panel span {\n  z-index: 1;\n  position: relative;\n  padding-right: 15px;\n}\n.edge-info .heading-title {\n  position: relative;\n}\n.edge-info .heading-title::after {\n  content: \"\";\n  position: absolute;\n  top: 18px;\n  left: 0px;\n  width: 100%;\n  height: 1px;\n  background: #fff;\n}\n.edge-info .extra-info {\n  position: relative;\n}\n.edge-info .extra-info .panel .panel-body {\n  width: 50%;\n}\n.more-info {\n  float: none;\n  clear: both;\n}\n.more-info h2 {\n  margin: 30px 0 0;\n}\n.more-info .panel {\n  background: #bf272d;\n  margin-top: 35px;\n  margin-bottom: 70px;\n}\n.more-info .panel ul.list li {\n  color: #fff;\n}\n.more-info .panel ul.list li::before {\n  background: #fff;\n}\n.more-info p {\n  color: #fff;\n}\n.our-belief h2 {\n  color: #bf272d;\n}\n.our-belief .panel {\n  background: #3e65ac;\n  color: #fff;\n}\n.our-belief .panel ul.list li {\n  color: #fff;\n}\n.our-belief .panel ul.list li::before {\n  background: #fff;\n}\n@media (max-width: 576px) {\n  .section-study-culture .row-f, .section-study-culture .row, .section-study-culture h1 {\n    margin-left: 0px;\n  }\n  .section-study-culture .breadcum {\n    margin-left: 15px;\n  }\n  .section-study-culture .img-flag {\n    padding: 15px;\n    position: static;\n    width: 100%;\n  }\n\n  .section-study-culture .our-mission {\n    margin: 0 15px;\n  }\n  .section-study-culture .our-mission .panel-body {\n    margin-left: 0;\n  }\n  .section-study-culture .our-mission .panel {\n    float: none;\n  }\n  .section-study-culture .our-mission .img-flag {\n    padding: 15px 0;\n  }\n  .section-study-culture .curriculum .curriculum-1 .image-wrap {\n    width: 100%;\n    margin: 30px 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZHljdWx0dXJlL0Q6XFxzaHMvc3JjXFxhcHBcXHN0dWR5Y3VsdHVyZVxcc3R1ZHljdWx0dXJlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdHVkeWN1bHR1cmUvc3R1ZHljdWx0dXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQVksZ0JBQUE7QUNDYjtBREFDO0VBQ0Msb0JBQUE7RUFDQSxrQkFBQTtBQ0VGO0FEQUM7RUFDQyxrQkFBQTtBQ0VGO0FEREU7RUFJQyxVQUFBO0VBQ0EsZ0JBQUE7QUNBSDtBREpHO0VBQ0MsaUJBQUE7QUNNSjtBREZHO0VBQ0MsYUFBQTtBQ0lKO0FERkc7RUFDQyxXQUFBO0VBQ0EsV0FBQTtBQ0lKO0FERkc7RUFDQyxVQUFBO0VBQ0EsMEJBQUE7QUNJSjtBREFDO0VBQ0MsZ0JBQUE7RUFDQSxhQUFBO0FDRUY7QURERTtFQUNDLFVBQUE7QUNHSDtBRENDO0VBQ0MsaUJBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0M7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQUU7RUFDQyxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNFSDtBREVFO0VBQ0MsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDQUg7QURFRTtFQUNDLFlBQUE7QUNBSDtBREVFO0VBQ0MsZ0JBQUE7QUNBSDtBREdDO0VBQ0Msa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNERjtBREdDO0VBQ0MsV0FBQTtBQ0RGO0FERUU7RUFDQyxXQUFBO0FDQUg7QURDRztFQUNDLG1CQUFBO0FDQ0o7QURPQTtFQUNJLDhCQUFBO0FDSko7QURLSTtFQUNJLG1CQUFBO0FDSFI7QURnQkE7RUFFSSxtQkFBQTtBQ2ZKO0FETUk7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUNKUjtBREVJO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FDQVI7QURGSTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBQ0lSO0FESUc7RUFDSyxnQkFBQTtBQ0ZSO0FER1E7RUFDSSxXQUFBO0FDRFo7QURNUTtFQUNJLG1CQUFBO0FDSlo7QURRUTtFQUNJLG1CQUFBO0FDTlo7QURVUTtFQUNJLGdCQUFBO0FDUlo7QURjUTtFQUNJLG1CQUFBO0FDWlo7QURlUTtFQUNJLG1CQUFBO0FDYlo7QURnQkk7RUFFSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ2ZSO0FEbUJJO0VBQ0ksa0JBQUE7QUNqQlI7QURtQlE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNqQlo7QURvQkM7RUFDQyxrQkFBQTtBQ2xCRjtBRG9CRztFQUNDLFVBQUE7QUNsQko7QUR5QkE7RUFpQkMsV0FBQTtFQUNBLFdBQUE7QUN0Q0Q7QURxQkM7RUFDQyxnQkFBQTtBQ25CRjtBRHFCQztFQUNDLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ25CRjtBRHFCRztFQUNDLFdBQUE7QUNuQko7QURvQkc7RUFDQyxnQkFBQTtBQ2xCSjtBRHlCQztFQUNDLFdBQUE7QUN2QkY7QUQ0QkM7RUFDQyxjQUFBO0FDekJGO0FEMkJDO0VBQ0MsbUJBQUE7RUFDQSxXQUFBO0FDekJGO0FEMkJHO0VBQ0MsV0FBQTtBQ3pCSjtBRDBCSTtFQUNDLGdCQUFBO0FDeEJMO0FEK0JBO0VBRUU7SUFDQyxnQkFBQTtFQzdCRDtFRCtCRDtJQUNDLGlCQUFBO0VDN0JBO0VEK0JEO0lBQ0MsYUFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtFQzdCQTs7RURpQ0Q7SUFDQyxjQUFBO0VDOUJBO0VEK0JBO0lBQ0MsY0FBQTtFQzdCRDtFRCtCQTtJQUNDLFdBQUE7RUM3QkQ7RUQrQkE7SUFDQyxlQUFBO0VDN0JEO0VEa0NDO0lBQ0MsV0FBQTtJQUNBLGNBQUE7RUNoQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3N0dWR5Y3VsdHVyZS9zdHVkeWN1bHR1cmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1zdHVkeS1jdWx0dXJle1xyXG5cdC5zdWItaGVhZGVye2JhY2tncm91bmQ6I2ZmZjt9XHJcblx0LnJvdy1mLCAucm93e1xyXG5cdFx0bWFyZ2luOjcwcHggMCAxMDBweDsgXHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cdC5jdXJyaWN1bHVte1xyXG5cdFx0bWFyZ2luLWJvdHRvbTowcHg7XHJcblx0XHQuY3VycmljdWx1bS0xe1xyXG5cdFx0XHQucGFuZWwge1xyXG5cdFx0XHRcdHBhZGRpbmc6MHB4IDMwcHg7XHJcblx0XHRcdH1cclxuXHRcdFx0cGFkZGluZzowO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiNmZmY7XHJcblx0XHRcdHB7XHJcblx0XHRcdFx0cGFkZGluZzozMHB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdC5pbWctZmxhZ3tcclxuXHRcdFx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0XHRcdHRvcDotMTAwcHg7XHJcblx0XHRcdH1cclxuXHRcdFx0LmltYWdlLXdyYXB7XHJcblx0XHRcdFx0d2lkdGg6IDUwJTtcclxuXHRcdFx0XHRtYXJnaW46IC0xMjBweCAwIDI2cHggNTBweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQucGFuZWwge1xyXG5cdFx0YmFja2dyb3VuZDojZmZmO1xyXG5cdFx0cGFkZGluZzo1MHB4O1xyXG5cdFx0LnBhbmVsLWJvZHl7XHJcblx0XHRcdHdpZHRoOjUwJTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHRoMXtcclxuXHRcdG1hcmdpbi1sZWZ0OjY1cHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG5cdH1cclxuXHRoMntcclxuXHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0cGFkZGluZy1ib3R0b206NXB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDYwcHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cdFx0Jjo6YmVmb3Jle1xyXG5cdFx0XHRjb250ZW50OlwiIFwiO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdGJvdHRvbTowO1xyXG5cdFx0XHRsZWZ0OjA7XHJcblx0XHRcdHdpZHRoOjUwcHg7XHJcblx0XHRcdGhlaWdodDoycHg7XHJcblx0XHRcdGJhY2tncm91bmQ6I2YwZjBmMDtcclxuXHRcdH1cclxuXHR9XHJcblx0Lm91ci1taXNzaW9ue1xyXG5cdFx0LmltZy1mbGFne1xyXG5cdFx0XHRsZWZ0OiAwcHg7XHJcblx0XHRcdHotaW5kZXg6IDE7XHJcblx0XHRcdHRvcDogLTI1cHg7XHJcblx0XHR9XHJcblx0XHQucGFuZWx7XHJcblx0XHRcdGZsb2F0OnJpZ2h0O1xyXG5cdFx0fVxyXG5cdFx0LnBhbmVsLWJvZHl7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OjUwJTtcclxuXHRcdH1cclxuXHR9XHJcblx0LmltZy1mbGFne1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0cmlnaHQ6MDtcclxuXHRcdHRvcDowO1xyXG5cdFx0d2lkdGg6IDUwJTtcclxuXHR9XHJcblx0dWwubGlzdHtcclxuXHRcdG1hcmdpbjowcHg7XHJcblx0XHRsaXtcclxuXHRcdFx0Y29sb3I6IzAwMDtcclxuXHRcdFx0Jjo6YmVmb3Jle1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6I2JmMjcyZDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4uZWRnZS1pbmZve1xyXG4gICAgbWFyZ2luOjEwMHB4IDAgMCAwICFpbXBvcnRhbnQ7XHJcbiAgICAucGxhbi10aXRsZXtcclxuICAgICAgICBtYXJnaW46ODBweCAwIDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJGJnLWNvbG9yczogIzNlNjVhYywgI2JmMjcyZCwgIzAwMDtcclxuQG1peGluIGFsdGVybmF0aW5nLWJhY2tncm91bmQge1xyXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggbGVuZ3RoKCRiZy1jb2xvcnMpIHtcclxuICAgICY6bnRoLWNoaWxkKCN7bGVuZ3RoKCRiZy1jb2xvcnMpfW4rI3skaX0pIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAobnRoKCRiZy1jb2xvcnMsICRpKSk7XHJcbiAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wYW5lbHtcclxuICAgIEBpbmNsdWRlIGFsdGVybmF0aW5nLWJhY2tncm91bmQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOjUwcHg7XHJcbiAgICYuYmctd2hpdGV7XHJcbiAgICAgICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGNvbG9yOiMwMDA7IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICY6bnRoLWNoaWxkKDEpe1xyXG4gICAgICAgXHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzNlNjVhYztcclxuICAgIH1cclxuICAgIH1cclxuICAgICY6bnRoLWNoaWxkKDIpe1xyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNiZjI3MmQ7XHJcbiAgICB9IFxyXG4gICAgfVxyXG4gICAgJjpudGgtY2hpbGQoMyl7XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgIH0gXHJcblx0fVxyXG5cdFxyXG5cdFxyXG5cdCY6bnRoLWNoaWxkKDQpe1xyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzZTY1YWM7XHJcblx0fX1cclxuXHQmOm50aC1jaGlsZCg1KXtcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xyXG4gICAgfX1cclxuXHJcbiAgICBzcGFue1xyXG4gICAgICAgXHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIH1cclxufVxyXG5cclxuICAgIC5oZWFkaW5nLXRpdGxle1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgIFxyXG4gICAgICAgICY6OmFmdGVye1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDoxOHB4O1xyXG4gICAgICAgICAgICBsZWZ0OjBweDtcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OjFweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgICAgIH1cclxuXHR9XHJcblx0LmV4dHJhLWluZm97XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHQucGFuZWx7XHJcblx0XHRcdC5wYW5lbC1ib2R5e1xyXG5cdFx0XHRcdHdpZHRoOjUwJTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcbi5tb3JlLWluZm97XHJcblx0aDJ7XHJcblx0XHRtYXJnaW46MzBweCAwIDA7XHJcblx0fVxyXG5cdC5wYW5lbHtcclxuXHRcdGJhY2tncm91bmQ6I2JmMjcyZDtcclxuXHRcdG1hcmdpbi10b3A6IDM1cHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiA3MHB4O1xyXG5cdFx0dWwubGlzdHtcclxuXHRcdFx0bGkge1xyXG5cdFx0XHRcdGNvbG9yOiNmZmY7XHJcblx0XHRcdCY6OmJlZm9yZXtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdFx0XHR9XHRcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRmbG9hdDpub25lO1xyXG5cdGNsZWFyOmJvdGg7XHJcblx0cHtcclxuXHRcdGNvbG9yOiNmZmY7XHJcblx0fVxyXG59XHJcblxyXG4ub3VyLWJlbGllZntcclxuXHRoMntcclxuXHRcdGNvbG9yOiNiZjI3MmQ7XHJcblx0fVxyXG5cdC5wYW5lbHtcclxuXHRcdGJhY2tncm91bmQ6IzNlNjVhYztcclxuXHRcdGNvbG9yOiNmZmY7XHJcblx0XHR1bC5saXN0e1xyXG5cdFx0XHRsaXtcclxuXHRcdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0XHQmOjpiZWZvcmV7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiNmZmY7XHJcblx0XHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KXtcclxuXHQuc2VjdGlvbi1zdHVkeS1jdWx0dXJle1xyXG5cdFx0LnJvdy1mLCAucm93LCBoMXtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6MHB4OyBcclxuXHR9XHJcblx0LmJyZWFkY3Vte1xyXG5cdFx0bWFyZ2luLWxlZnQ6MTVweDtcclxuXHR9XHJcblx0LmltZy1mbGFne1xyXG5cdFx0cGFkZGluZzoxNXB4O1xyXG5cdFx0cG9zaXRpb246IHN0YXRpYztcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0fVxyXG59XHJcbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUge1xyXG5cdC5vdXItbWlzc2lvbntcclxuXHRcdG1hcmdpbjogMCAxNXB4O1xyXG5cdFx0LnBhbmVsLWJvZHkge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHRcdC5wYW5lbHtcclxuXHRcdFx0ZmxvYXQ6bm9uZTtcclxuXHRcdH1cclxuXHRcdC5pbWctZmxhZ3tcclxuXHRcdFx0cGFkZGluZzoxNXB4IDA7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5jdXJyaWN1bHVte1xyXG5cdFx0LmN1cnJpY3VsdW0tMXtcclxuXHRcdFx0LmltYWdlLXdyYXB7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0bWFyZ2luOiAzMHB4IDA7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxufSIsIi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnN1Yi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucm93LWYsIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnJvdyB7XG4gIG1hcmdpbjogNzBweCAwIDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5jdXJyaWN1bHVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAuY3VycmljdWx1bSAuY3VycmljdWx1bS0xIHtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLmN1cnJpY3VsdW0gLmN1cnJpY3VsdW0tMSAucGFuZWwge1xuICBwYWRkaW5nOiAwcHggMzBweDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLmN1cnJpY3VsdW0gLmN1cnJpY3VsdW0tMSBwIHtcbiAgcGFkZGluZzogMzBweDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLmN1cnJpY3VsdW0gLmN1cnJpY3VsdW0tMSAuaW1nLWZsYWcge1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAtMTAwcHg7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5jdXJyaWN1bHVtIC5jdXJyaWN1bHVtLTEgLmltYWdlLXdyYXAge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IC0xMjBweCAwIDI2cHggNTBweDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnBhbmVsIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogNTBweDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnBhbmVsIC5wYW5lbC1ib2R5IHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgaDEge1xuICBtYXJnaW4tbGVmdDogNjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgaDIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSBoMjo6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5vdXItbWlzc2lvbiAuaW1nLWZsYWcge1xuICBsZWZ0OiAwcHg7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogLTI1cHg7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5vdXItbWlzc2lvbiAucGFuZWwge1xuICBmbG9hdDogcmlnaHQ7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5vdXItbWlzc2lvbiAucGFuZWwtYm9keSB7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5pbWctZmxhZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDUwJTtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgdWwubGlzdCB7XG4gIG1hcmdpbjogMHB4O1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSB1bC5saXN0IGxpIHtcbiAgY29sb3I6ICMwMDA7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIHVsLmxpc3QgbGk6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG59XG5cbi5lZGdlLWluZm8ge1xuICBtYXJnaW46IDEwMHB4IDAgMCAwICFpbXBvcnRhbnQ7XG59XG4uZWRnZS1pbmZvIC5wbGFuLXRpdGxlIHtcbiAgbWFyZ2luOiA4MHB4IDAgNTBweDtcbn1cbi5lZGdlLWluZm8gLnBhbmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi5lZGdlLWluZm8gLnBhbmVsOm50aC1jaGlsZCgzbisxKSB7XG4gIGJhY2tncm91bmQ6ICMzZTY1YWM7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmVkZ2UtaW5mbyAucGFuZWw6bnRoLWNoaWxkKDNuKzIpIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbiAgY29sb3I6ICNmZmY7XG59XG4uZWRnZS1pbmZvIC5wYW5lbDpudGgtY2hpbGQoM24rMykge1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5lZGdlLWluZm8gLnBhbmVsLmJnLXdoaXRlIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5lZGdlLWluZm8gLnBhbmVsLmJnLXdoaXRlIHAge1xuICBjb2xvcjogIzAwMDtcbn1cbi5lZGdlLWluZm8gLnBhbmVsOm50aC1jaGlsZCgxKSBzcGFuIHtcbiAgYmFja2dyb3VuZDogIzNlNjVhYztcbn1cbi5lZGdlLWluZm8gLnBhbmVsOm50aC1jaGlsZCgyKSBzcGFuIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbn1cbi5lZGdlLWluZm8gLnBhbmVsOm50aC1jaGlsZCgzKSBzcGFuIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbn1cbi5lZGdlLWluZm8gLnBhbmVsOm50aC1jaGlsZCg0KSBzcGFuIHtcbiAgYmFja2dyb3VuZDogIzNlNjVhYztcbn1cbi5lZGdlLWluZm8gLnBhbmVsOm50aC1jaGlsZCg1KSBzcGFuIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbn1cbi5lZGdlLWluZm8gLnBhbmVsIHNwYW4ge1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG4uZWRnZS1pbmZvIC5oZWFkaW5nLXRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmVkZ2UtaW5mbyAuaGVhZGluZy10aXRsZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMThweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uZWRnZS1pbmZvIC5leHRyYS1pbmZvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmVkZ2UtaW5mbyAuZXh0cmEtaW5mbyAucGFuZWwgLnBhbmVsLWJvZHkge1xuICB3aWR0aDogNTAlO1xufVxuXG4ubW9yZS1pbmZvIHtcbiAgZmxvYXQ6IG5vbmU7XG4gIGNsZWFyOiBib3RoO1xufVxuLm1vcmUtaW5mbyBoMiB7XG4gIG1hcmdpbjogMzBweCAwIDA7XG59XG4ubW9yZS1pbmZvIC5wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG4gIG1hcmdpbi1ib3R0b206IDcwcHg7XG59XG4ubW9yZS1pbmZvIC5wYW5lbCB1bC5saXN0IGxpIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ubW9yZS1pbmZvIC5wYW5lbCB1bC5saXN0IGxpOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLm1vcmUtaW5mbyBwIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5vdXItYmVsaWVmIGgyIHtcbiAgY29sb3I6ICNiZjI3MmQ7XG59XG4ub3VyLWJlbGllZiAucGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjM2U2NWFjO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5vdXItYmVsaWVmIC5wYW5lbCB1bC5saXN0IGxpIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ub3VyLWJlbGllZiAucGFuZWwgdWwubGlzdCBsaTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnJvdy1mLCAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5yb3csIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgaDEge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIH1cbiAgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAuYnJlYWRjdW0ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB9XG4gIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLmltZy1mbGFnIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5vdXItbWlzc2lvbiB7XG4gICAgbWFyZ2luOiAwIDE1cHg7XG4gIH1cbiAgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAub3VyLW1pc3Npb24gLnBhbmVsLWJvZHkge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG4gIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLm91ci1taXNzaW9uIC5wYW5lbCB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gIH1cbiAgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAub3VyLW1pc3Npb24gLmltZy1mbGFnIHtcbiAgICBwYWRkaW5nOiAxNXB4IDA7XG4gIH1cbiAgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAuY3VycmljdWx1bSAuY3VycmljdWx1bS0xIC5pbWFnZS13cmFwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDMwcHggMDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/studyculture/studyculture.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/studyculture/studyculture.component.ts ***!
    \********************************************************/

  /*! exports provided: studycultureComponent */

  /***/
  function srcAppStudycultureStudycultureComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "studycultureComponent", function () {
      return studycultureComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var studycultureComponent = /*#__PURE__*/function () {
      function studycultureComponent() {
        _classCallCheck(this, studycultureComponent);

        this.vision = [{
          info: ' Resilient and Confident lifelong learners'
        }, {
          info: ' Agile and auntic individuals'
        }, {
          info: ' Innovative and intuitive changemakers'
        }, {
          info: ' ResiliSocially responsible and humble global citizens'
        }, {
          info: ' Empatic and humane souls who uphold integrity above all'
        }];
        this.mission = [{
          info: ' Resilience'
        }, {
          info: ' Agility'
        }, {
          info: ' Integrity'
        }, {
          info: ' Social responsibility'
        }, {
          info: ' Empathy'
        }];
        this.belief = [{
          info: ' Communication and Language'
        }, {
          info: ' Literacy'
        }, {
          info: ' Mamatics'
        }, {
          info: '  World (Science and Social Studies)'
        }, {
          info: ' Expressive Arts and Design '
        }, {
          info: ' Personal, Social and Emotional Development'
        }, {
          info: ' Physical Development'
        }];
        this.moreInfo = [{
          info: ' Best possible start to learning ',
          info_2: 'Our caring, experienced teachers and teacher assistants give our youngest students  best possible start to learning. Our play-based learning environment captures ir natural curiosity and sense of wonder. Our core subjects are complemented by all core subject classes, including Physical Education, Visual & Performing Arts and Music are all delivered in a warm, nurturing environment. '
        }, {
          info: ' A positive foundation for learning  ',
          info_2: 'At SHS VIDYALAYA  children are introduced to a love of play and learning, by creating opportunities to explore, experiment, solve problems and express mselves as individuals. Sustained learning and  ability to apply concepts facilitates self-confidence and motivation. A deeper understanding of science and math concepts, improved reading and writing skills, fostering positive attitudes and personal growth, critical thinking skills and improved quality of work, will result in remarkable academic success. '
        }, {
          info: ' Personal development for life ',
          info_2: "Along with a positive start to learning, our teachers place an emphasis on oral language development and nurturing social relationships. Our teachers know a structured foundation is important for young children, to help m develop and grow into confident individuals. \n\n      An exceptional learning space is provided for our young students, with high-quality trained staff who care and guide  young children. \n      \n      \u202F \n      \n      A focus on  building blocks of education \u2013 literacy and numeracy- every advantage as  students\u2019 progress through ir education. integrated curriculum helps students develop skills and understandings needed to meet  demands of high school while continuing to inspire a thirst for learning.  literacy-based program with  world class Scholastic\u2019s Levelled Book Room provides an academic framework that encourages students to embrace and understand  connections between traditional subjects and  real world, and to become critical and reflective thinkers. "
        }, {
          info: ' Our Approach –   ',
          info_2: "Creating better opportunities for teacher-student planning and cooperative evaluation which leads to enhanced creative teaching and learning. Our process of learning and teaching comes from a fusion of knowledge with various activities, resources; and experiencing real-life situations for a solution-based approach. It also instils problem-solving, critical thinking and collaboration in and beyond  classroom. \n\n      We take a Student Centric approach with flexibility, innovation and or core values for essential life experiences. "
        }];
      }

      _createClass(studycultureComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return studycultureComponent;
    }();

    studycultureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-studyculture',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./studyculture.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/studyculture/studyculture.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./studyculture.component.scss */
      "./src/app/studyculture/studyculture.component.scss"))["default"]]
    })], studycultureComponent);
    /***/
  },

  /***/
  "./src/app/team/team.component.scss":
  /*!******************************************!*\
    !*** ./src/app/team/team.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppTeamTeamComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".section-inner-subheader {\n  margin-bottom: 50px;\n}\n.section-inner-subheader .the-team-info {\n  margin: 0;\n  margin-top: 50px;\n}\n.section-inner-subheader .the-team-info .col {\n  padding: 0;\n}\n.section-inner-subheader .the-team-info .panel.img-info {\n  padding: 0px;\n  margin-bottom: 0;\n}\n.section-inner-subheader .panel {\n  color: #fff;\n  padding: 50px;\n  margin-bottom: 50px;\n}\n.section-inner-subheader h1 {\n  margin-left: 65px;\n  margin-bottom: 35px;\n}\n.section-inner-subheader h6 {\n  margin-left: 65px;\n}\n.section-inner-subheader .avtar {\n  background: #fff;\n}\n.section-inner-subheader .team-info {\n  margin-top: 50px;\n}\n.the-team-info img {\n  -webkit-filter: grayscale(100%);\n          filter: grayscale(100%);\n}\n.blue-bg {\n  background: #3e65ac;\n}\n.red-bg {\n  background: #bf272d;\n}\n.black-bg {\n  background: #000;\n}\n@media (max-width: 576px) {\n  .row-f, .row, h1 {\n    display: block;\n  }\n\n  .breadcum {\n    margin-left: 15px;\n  }\n\n  .img-flag {\n    padding: 15px 0px;\n    position: static;\n    width: 100%;\n  }\n\n  .panel-body {\n    width: 100%;\n  }\n\n  .avtar {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS9EOlxcc2hzL3NyY1xcYXBwXFx0ZWFtXFx0ZWFtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90ZWFtL3RlYW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxtQkFBQTtBQ0NEO0FEQUM7RUFDQyxTQUFBO0VBQ0EsZ0JBQUE7QUNFRjtBRERFO0VBQ0MsVUFBQTtBQ0dIO0FEREU7RUFDQyxZQUFBO0VBQ0EsZ0JBQUE7QUNHSDtBREVDO0VBQ0MsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0FGO0FERUM7RUFDQyxpQkFBQTtFQUNBLG1CQUFBO0FDQUY7QURFQztFQUNDLGlCQUFBO0FDQUY7QURHQztFQUNDLGdCQUFBO0FDREY7QURHQztFQUNDLGdCQUFBO0FDREY7QURNQztFQUNDLCtCQUFBO1VBQUEsdUJBQUE7QUNIRjtBRE9BO0VBQ0MsbUJBQUE7QUNKRDtBRE1BO0VBQ0MsbUJBQUE7QUNIRDtBREtBO0VBQ0MsZ0JBQUE7QUNGRDtBREtBO0VBQ0U7SUFDQyxjQUFBO0VDRkQ7O0VESUQ7SUFDQyxpQkFBQTtFQ0RBOztFREdEO0lBQ0MsaUJBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7RUNBQTs7RURFRDtJQUNDLFdBQUE7RUNDQTs7RURDRDtJQUNDLGFBQUE7RUNFQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdGVhbS90ZWFtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24taW5uZXItc3ViaGVhZGVye1xyXG5cdG1hcmdpbi1ib3R0b206NTBweDtcclxuXHQudGhlLXRlYW0taW5mb3tcclxuXHRcdG1hcmdpbjowO1x0XHJcblx0XHRtYXJnaW4tdG9wOjUwcHg7XHJcblx0XHQuY29sIHtcclxuXHRcdFx0cGFkZGluZzowO1xyXG5cdFx0fVxyXG5cdFx0LnBhbmVsLmltZy1pbmZve1xyXG5cdFx0XHRwYWRkaW5nOjBweDtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTogMDtcdFxyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cdFxyXG5cdC5wYW5lbCB7XHJcblx0XHRjb2xvcjojZmZmO1xyXG5cdFx0cGFkZGluZzo1MHB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTo1MHB4O1xyXG5cdH1cclxuXHRoMXtcclxuXHRcdG1hcmdpbi1sZWZ0OjY1cHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG5cdH1cclxuXHRoNntcclxuXHRcdG1hcmdpbi1sZWZ0OjY1cHg7XHJcblx0fVxyXG5cclxuXHQuYXZ0YXJ7XHJcblx0XHRiYWNrZ3JvdW5kOiNmZmY7XHJcblx0fVxyXG5cdC50ZWFtLWluZm97XHJcblx0XHRtYXJnaW4tdG9wOjUwcHg7XHJcblx0fVxyXG59XHJcblxyXG4udGhlLXRlYW0taW5mb3tcclxuXHRpbWcge1xyXG5cdFx0ZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XHJcblx0ICB9XHJcbn1cclxuXHJcbi5ibHVlLWJne1xyXG5cdGJhY2tncm91bmQ6IzNlNjVhYztcclxufVxyXG4ucmVkLWJne1xyXG5cdGJhY2tncm91bmQ6I2JmMjcyZDtcclxufVxyXG4uYmxhY2stYmd7XHJcblx0YmFja2dyb3VuZDojMDAwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xyXG5cdFx0LnJvdy1mLCAucm93LCBoMXtcclxuXHRcdFx0ZGlzcGxheTpibG9jaztcclxuXHR9XHJcblx0LmJyZWFkY3Vte1xyXG5cdFx0bWFyZ2luLWxlZnQ6MTVweDtcclxuXHR9XHJcblx0LmltZy1mbGFne1xyXG5cdFx0cGFkZGluZzoxNXB4IDBweDtcclxuXHRcdHBvc2l0aW9uOiBzdGF0aWM7XHJcblx0XHR3aWR0aDoxMDAlO1xyXG5cdH1cclxuXHQucGFuZWwtYm9keXtcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0fVxyXG5cdC5hdnRhcntcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG5cclxufSIsIi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLnRoZS10ZWFtLWluZm8ge1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLnRoZS10ZWFtLWluZm8gLmNvbCB7XG4gIHBhZGRpbmc6IDA7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLnRoZS10ZWFtLWluZm8gLnBhbmVsLmltZy1pbmZvIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5wYW5lbCB7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIGgxIHtcbiAgbWFyZ2luLWxlZnQ6IDY1cHg7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgaDYge1xuICBtYXJnaW4tbGVmdDogNjVweDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuYXZ0YXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC50ZWFtLWluZm8ge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4udGhlLXRlYW0taW5mbyBpbWcge1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbn1cblxuLmJsdWUtYmcge1xuICBiYWNrZ3JvdW5kOiAjM2U2NWFjO1xufVxuXG4ucmVkLWJnIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbn1cblxuLmJsYWNrLWJnIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5yb3ctZiwgLnJvdywgaDEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLmJyZWFkY3VtIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgfVxuXG4gIC5pbWctZmxhZyB7XG4gICAgcGFkZGluZzogMTVweCAwcHg7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5wYW5lbC1ib2R5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5hdnRhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/team/team.component.ts":
  /*!****************************************!*\
    !*** ./src/app/team/team.component.ts ***!
    \****************************************/

  /*! exports provided: teamComponent */

  /***/
  function srcAppTeamTeamComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "teamComponent", function () {
      return teamComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var teamComponent = /*#__PURE__*/function () {
      function teamComponent() {
        _classCallCheck(this, teamComponent);
      }

      _createClass(teamComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return teamComponent;
    }();

    teamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-theteam',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./team.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/team/team.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./team.component.scss */
      "./src/app/team/team.component.scss"))["default"]]
    })], teamComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using  `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    //  list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import  following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\shs\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map