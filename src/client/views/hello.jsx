import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import '../styles/normalize.css';
import '../styles/raleway.css';
import skeleton from '../styles/skeleton.css';
import custom from '../styles/custom.css';
import github from '../images/github.png';
import {clicker} from '../reducers/main.jsx';

const hello = ({clicker}) =>
  <div className={custom.container}>
    <section className={custom.header} >
      <h1 className={custom.h1}>Matt</h1>
      <h2 className={skeleton.h2}>Portfolio</h2>
      <p className={skeleton.p}>This website is rendered on the server!</p>
      <div>
        <img src={github} style={custom.img}/>
      </div>
      <button onClick={clicker}>CLICK</button>
    </section>
  </div>;

const mapStateToProps = ({main}) => ({main});
const mapDispatchToProps = dispatch => bindActionCreators({
  clicker
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(hello);