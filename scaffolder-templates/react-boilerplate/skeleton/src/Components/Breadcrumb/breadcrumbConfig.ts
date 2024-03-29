type Route = {
  path: string;
  breadcrumb: string | null;
};
const routes: Route[] = [
  {path: '/', breadcrumb: null},
  {path: '/home', breadcrumb: 'Home'},
  {path: '/who-am-i', breadcrumb: 'Who am i'},
  {path: '/form', breadcrumb: 'form'},
  {path: '/components', breadcrumb: 'components'},
  {path: '/components/input', breadcrumb: 'Input'},
  {path: '/components/form', breadcrumb: 'Form'},
  {path: '/components/transfer-list', breadcrumb: 'Transfer List'},
  {path: '/components/dropdown-autocomplete', breadcrumb: 'Dropdown/Autocomplete'},
  {path: '/components/radio-button', breadcrumb: 'Radio Button'},
  {path: '/components/checkbox', breadcrumb: 'Checkbox'},
  {path: '/components/button', breadcrumb: 'Button'},
  {path: '/components/stepper-tab', breadcrumb: 'Stepper tab'},
  {path: '/components/date-picker', breadcrumb: 'DatePicker'},
  {path: '/components/api-call', breadcrumb: 'API call'},
  {path: '/sourceloop', breadcrumb: null},
  {path: '/sourceloop/payment', breadcrumb: null},
  {path: '/sourceloop/payment/subscription', breadcrumb: 'Subscription'},
  {path: '/sourceloop/payment/order', breadcrumb: 'Order'},
  {path: '/sourceloop/payment/checkout', breadcrumb: 'Checkout'},
];

export default routes;
