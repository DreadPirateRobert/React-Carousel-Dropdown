function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

class LoginForm extends React.Component {

  // Using a class based component here because we're accessing DOM refs

  handleSignIn(e) {
    e.preventDefault();
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    this.props.onSignIn(username, password);
  }

  render() {
    return (
      React.createElement("form", { onSubmit: this.handleSignIn.bind(this) },
      React.createElement("h3", null, "Sign in"),
      React.createElement("input", { type: "text", ref: "username", placeholder: "enter you username" }),
      React.createElement("input", { type: "password", ref: "password", placeholder: "enter password" }),
      React.createElement("input", { type: "submit", value: "Login" })));


  }}



class DefaultApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: null,
        password: null } };


  }

  // App "actions" (functions that modify state)
  signIn(username, password) {
    // This is where you would call Firebase, an API etc...
    // calling setState will re-render the entire app (efficiently!)
    this.setState({
      user: {
        username,
        password } });


  }

  signOut() {
    // clear out user from state
    this.setState({ user: null });
  }


  render() {
    return (
      React.createElement("div", null,
      React.createElement("h1", null, "My cool App"),

      this.state.user.username == "shaadi" && this.state.user.password == "123" ?
      React.createElement("div", null,
      React.createElement(App, null)) :


      React.createElement(LoginForm, {
        onSignIn: this.signIn.bind(this) })));




  }}


const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    React.createElement("div", { className: showHideClassName },
    React.createElement("section", { className: "modal-main" },
    children,
    React.createElement("button", {
      onClick: handleClose }, "Close"))));






};


class ModalIndex extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "state",


    { show: false });_defineProperty(this, "showModal",

    () => {
      this.setState({ show: true });
    });_defineProperty(this, "hideModal",

    () => {
      this.setState({ show: false });
    });}

  render() {

    let items = this.props.optionselected.map((el, index) => {
      return (
        React.createElement("li", { key: index },
        this.props.optionselected[index]));


    });

    return (
      React.createElement("main", null,
      React.createElement("h1", null, "Open Modal"),
      React.createElement(Modal, { show: this.state.show, handleClose: this.hideModal },
      React.createElement("p", null, "Selected Tiles List"),
      React.createElement("ul", null, " ", items, " ")),

      React.createElement("button", { type: "button", onClick: this.showModal }, "Finish")));


  }}


class DropDownIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      mxlength: -1 };

  }

  render() {
    let items = this.state.dropdown.map((el, index) => {

      return (
        React.createElement("option", { value: index, onClick: () => this.props.changeCurrent(index) },
        index + 1));


    });

    return (
      React.createElement("select", null,
      React.createElement("option", { value: "select" }, " Select Slides !"),
      items));


  }}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
      'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/HA1RQCRQJ7.jpg',
      'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/EVHXF4MUT6.jpg',
      'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/D7VE3SK3RD.jpg',
      'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/0XRFUE80AZ.jpg',
      'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/2DQJJ9RLVD.jpg',
      'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/HA1RQCRQJ7.jpg',
      'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/EVHXF4MUT6.jpg',
      'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/D7VE3SK3RD.jpg',
      'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/0XRFUE80AZ.jpg',
      'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/2DQJJ9RLVD.jpg',
      'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/HA1RQCRQJ7.jpg',
      'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/EVHXF4MUT6.jpg',
      'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/D7VE3SK3RD.jpg',
      'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/0XRFUE80AZ.jpg',
      'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/2DQJJ9RLVD.jpg',
      'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/HA1RQCRQJ7.jpg',
      'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/EVHXF4MUT6.jpg',
      'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/D7VE3SK3RD.jpg',
      'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/0XRFUE80AZ.jpg',
      'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/2DQJJ9RLVD.jpg'],

      alnum: [
      'FIRST', 'SECOND', 'THIRD', 'FORTH', 'FIFTH', 'SIXTH', 'SEVENTH', 'EIGHT', 'NINE', 'TEN', 'ELEVEN', 'TWELVE', 'THIRTEEN',
      'FOURTEEN', 'FIFTHTEEN', 'SIXTEEN', 'SEVENTEEN', 'EIGHTEEN', 'NINETEEN', 'TWENTY'],

      current: -1,
      isNext: true,
      mxindex: -1,
      optionselected: [] };


    this.handlerPrev = this.handlerPrev.bind(this);
    this.handlerNext = this.handlerNext.bind(this);
    this.goToHistoryClick = this.goToHistoryClick.bind(this);
    this.changeCurrentIndex = this.changeCurrentIndex.bind(this);
  }

  handlerPrev() {
    let index = this.state.current,
    length = this.state.mxindex;

    if (index < 1) {
      index = length + 1;
    }

    index = index - 1;

    this.setState({
      current: index,
      isNext: false });

  }

  handlerNext() {
    let index = this.state.current,
    length = this.state.mxindex;

    if (index == length) {
      index = -1;
    }

    if (length != -1) {
      index = index + 1;
    }

    this.setState({
      current: index,
      isNext: true });

  }

  goToHistoryClick(curIndex, index) {
    let next = curIndex < index;
    this.setState({
      current: index,
      isNext: next });

  }

  changeCurrentIndex(mxindex) {

    this.setState({
      current: 0,
      isNext: true,
      mxindex: mxindex,
      optionselected: [...this.state.optionselected, mxindex + 1] });

  }

  render() {
    let index = this.state.current,
    isnext = this.state.isNext,
    src = this.state.items[index];

    return (
      React.createElement("div", { className: "app" },
      React.createElement(DropDownIndex, {
        changeCurrent: this.changeCurrentIndex }),


      React.createElement("div", { className: "carousel" },
      React.createElement(ReactCSSTransitionGroup, {
        transitionName: {
          enter: isnext ? 'enter-next' : 'enter-prev',
          enterActive: 'enter-active',
          leave: 'leave',
          leaveActive: isnext ? 'leave-active-next' : 'leave-active-prev' } },


      React.createElement("div", { className: "carousel_slide", key: index },
      React.createElement("img", { src: src }),
      React.createElement("div", { className: "centered" }, this.state.alnum[index]))),




      React.createElement("button", { className: "carousel_control carousel_control__prev", onClick: this.handlerPrev }, React.createElement("span", null)),
      React.createElement("button", { className: "carousel_control carousel_control__next", onClick: this.handlerNext }, React.createElement("span", null)),
      React.createElement("div", { className: "carousel_history" })),


      React.createElement(ModalIndex, {
        optionselected: this.state.optionselected })));



  }}


class History extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let current = this.props.current;
    let items = this.props.items.map((el, index) => {
      let name = index == current ? 'active' : '';
      return (
        React.createElement("li", { key: index },
        React.createElement("button", {
          className: name,
          onClick: () => this.props.changeSilde(current, index) })));



    });

    return (
      React.createElement("ul", null, items));

  }}


ReactDOM.render(React.createElement(DefaultApp, null), document.getElementById("root"));